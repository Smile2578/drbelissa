import { useEffect, useState } from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
import { FaCheck, FaTrash, FaExclamationTriangle } from 'react-icons/fa';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import ProgressPatient from './ProgressPatient';



const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [orderBy, setOrderBy] = useState('traitementState.encours');
  const [ascending, setAscending] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);


  Modal.setAppElement('#__next');


  const openModal = (patientId) => {
    setIsOpen(true);
    setSelectedPatient(patientId);
  }

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPatient(null);
  }

  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  }

const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
};



  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch('/api/patients');
      if (!response.ok) {
        throw new Error('Error fetching patients');
      }
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
      setPatients([]);
    }
  };

  const handleSort = (column) => {
    if (orderBy === column) {
      setAscending(!ascending);
    } else {
      setOrderBy(column);
      setAscending(true);
    }
  };

  const sortPatients = (a, b) => {
  if (orderBy === 'traitementState.encours') {
    if (a.traitementState.encours === 'Traitement en cours' && b.traitementState.encours !== 'Traitement en cours') {
      return -1; // a comes first
    }
    if (b.traitementState.encours === 'Traitement en cours' && a.traitementState.encours !== 'Traitement en cours') {
      return 1;  // b comes first
    }
  }
  
  const valueA = orderBy.split('.').reduce((o, i) => o[i], a);
  const valueB = orderBy.split('.').reduce((o, i) => o[i], b);

  if (valueA < valueB) {
    return ascending ? -1 : 1;
  }
  if (valueA > valueB) {
    return ascending ? 1 : -1;
  }
  return 0;
};



  const sortedPatients = Array.isArray(filteredPatients) ? filteredPatients.sort(sortPatients) : [];


  const handleDeletePatient = async (patientId) => {
    try {
      const response = await fetch(`/api/patients/${patientId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error deleting patient');
      }
      fetchPatients();
      closeModal();
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const submit = (patientId) => {
    confirmAlert({
      title: 'Confirmez la suppression',
      message: 'Êtes-vous sûr de vouloir supprimer ce patient ?',
      buttons: [
        {
          label: 'Oui',
          onClick: () => handleDeletePatient(patientId)
        },
        {
          label: 'Non',
        }
      ]
    });
  };
  
  return (
    <div className="bg-white shadow-md rounded p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Rechercher un patient"
        className="w-full px-3 py-2 mb-4 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
      />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="cursor-pointer py-2 px-4 text-left font-semibold" onClick={() => handleSort('personalInfo.lastName')}>
              Prénom et Nom
            </th>
            <th className="cursor-pointer py-2 px-4 text-left font-semibold" onClick={() => handleSort('examenIntraOral.classeSquelettique')}>
              Classe Squelettique
            </th>
            <th className="cursor-pointer py-2 px-4 text-left font-semibold" onClick={() => handleSort('traitementState.typeDeTraitement')}>
              Formule
            </th>
            <th className="cursor-pointer py-2 px-4 text-left font-semibold" onClick={() => handleSort('traitementState.duree')}>
              Durée
            </th>
            <th className="cursor-pointer py-2 px-4 text-left font-semibold" onClick={() => handleSort('traitementState.encours')}>
              Status
            </th>
            <th className="cursor-pointer py-2 px-4 text-left font-semibold">
              Progression du Traitement
            </th>
            <th className="cursor-pointer py-2 px-4 text-left font-semibold" onClick={() => handleSort('traitementState.contention')}>
              Contention
            </th>
            
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
        <tbody className="text-black divide-y divide-gray-200">
          {sortedPatients.map((patient) => (
            <tr key={patient._id}>
            <td className="py-2 px-4">
              <Link legacyBehavior href={`/dashboard/${patient._id}`} className="focus:outline-none">
                <a>{patient.personalInfo.firstName} {patient.personalInfo.lastName}</a>
              </Link>
            </td>
              <td className="py-2 px-4">{patient.examenIntraOral.classeSquelettique}</td>
              <td className="py-2 px-4">{patient.traitementState.typeDeTraitement}</td>
              <td className="py-2 px-4">{patient.traitementState.duree}</td>
              <td className="py-2 px-4">{patient.traitementState.encours}</td>
        
<td className="py-2 px-4">
  {patient.traitementState.encours === 'Traitement en cours' ? 
    <ProgressPatient 
      nombreDAligneurs={patient.traitementState.nombreDAligneurs}
      aligneurActuel={patient.traitementState.aligneurActuel}
    />
    : null
  }
</td>
  
<td className="py-2 px-4">
        <div className="flex items-center justify-center">
          {patient.traitementState.encours === 'Traitement fini - Contention' && <FaExclamationTriangle className="text-yellow-500" />}
          {patient.traitementState.encours === 'Contention prête' && <FaCheck className="text-green-500" />}
        </div>
      </td>
            
<td className="py-2 px-4">
  <div className="flex items-center justify-center">
    <button className="text-red-500 hover:text-red-700" onClick={() => submit(patient._id)}>
      <FaTrash className="h-5 w-5"/>
    </button>
  </div>
</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default PatientList;
