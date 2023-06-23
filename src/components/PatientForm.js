import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import MedicalInfo from './MedicalInfo';
import ExamenRadio from './ExamenRadio';
import ExamenIntra from './ExamenIntra';
import Traitement from './Traitement';
import FormButtons from './FormButtons';

const PatientForm = ({ onSubmit, onCancel, personalInfo: initialPersonalInfo, medicalInfo: initialMedicalInfo, examenRadio: initialExamenRadio, examenIntraOral: initialExamenIntraOral, traitementState: initialTraitementState }) => {
  const [showForm, setShowForm] = useState(false);
  const handleCancel = () => {
    setShowForm(false);
    if (onCancel) onCancel();
  };
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo || {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
  });
  const [medicalInfo, setMedicalInfo] = useState(initialMedicalInfo || {
    radios: {
      data: null,
      contentType: null
    },
    pp: '',
    qm: '',
    dentalAndOrthoHistory: ''
  });
  const [examenRadio, setExamenRadio] = useState(initialExamenRadio || {
    inclusion: [],
    absenceOrAgenesie: [],
    caries: [],
  });
  const [examenIntraOral, setExamenIntraOral] = useState(initialExamenIntraOral || {
    profil: '',
    visage: '',
    milieuSup: '',
    milieuInf: '',
    sourire: '',
    atm: '',
    hbd: '',
    recessionGingivale: '',
    classeSquelettique: '',
    encombrement: '',
    malposition: '',
    diasteme: '',
    infraSupraOcclusion: '',
  });
  const [traitementState, setTraitementState] = useState(initialTraitementState || {
    soinAPrevoir: '',
    typeDeTraitement: '',
    duree: '',
    planDeTraitement: '',
    accessoires: {
      taquets: false,
      stripping: false,
      vivera: false,
      elastiques: false,
    },
    consignes: {
      parodontie: false,
      chirurgie: false,
      reeducation_linguale: false,
      reeducation_deglutition_infantile: false,
      dentiste: false,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      personalInfo,
      medicalInfo,
      examenRadio,
      examenIntraOral,
      traitementState,
    };

    onSubmit(updatedData);
  };


  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="font-bold text-2xl mb-4">{initialPersonalInfo ? 'Modifier le patient' : 'Création d\'un nouveau patient'}</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        <MedicalInfo medicalInfo={medicalInfo} setMedicalInfo={setMedicalInfo} />
        <ExamenRadio examenRadio={examenRadio} setExamenRadio={setExamenRadio} />
        <ExamenIntra examenIntraOral={examenIntraOral} setExamenIntraOral={setExamenIntraOral} />
        <Traitement traitementState={traitementState} setTraitementState={setTraitementState} />
        <FormButtons showForm={setShowForm} onCancel={handleCancel} />
      </form>
    </div>
  );

  
};

export default PatientForm;
