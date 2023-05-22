import React, { useState } from 'react';

const MedicalInfo = ({ medicalInfo, setMedicalInfo }) => {
  const { radios, pp, qm, dentalAndOrthoHistory, empreintes, checkmaxillaire } = medicalInfo;
  const [selectedRadios, setSelectedRadios] = useState([]);
  const [selectedEmpreintes, setSelectedEmpreintes] = useState([]);

  const setRadios = (radios) => {
    setMedicalInfo((prev) => ({ ...prev, radios }));
  };

  const setcheckempreintes = (checkmaxillaire) => {
    setMedicalInfo((prev) => ({ ...prev, checkmaxillaire }));
  };

  const handleEmpreintesChange = (event) => {
    const checkmaxillaire = event.target.checked;
    setcheckempreintes(checkmaxillaire);
  };



  const handleFileChange = (event) => {
    const files = event.target.files;
    if (!files.length) {
      return;
    }
  
    if (event.target.id === 'radios') {
      setSelectedRadios(files);
    } else if (event.target.id === 'empreintes') {
      setSelectedEmpreintes(files);
    }
  };

  const setPp = (pp) => {
    setMedicalInfo((prev) => ({ ...prev, pp }));
  };
  const setQm = (qm) => {
    setMedicalInfo((prev) => ({ ...prev, qm }));
  };
  const setDentalAndOrthoHistory = (dentalAndOrthoHistory) => {
    setMedicalInfo((prev) => ({ ...prev, dentalAndOrthoHistory }));
  };

  const setEmpreintes = (empreintes) => {
    setMedicalInfo((prev) => ({ ...prev, empreintes }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let uploadedRadios = [];
    for (let i = 0; i < selectedRadios.length; i++) {
      const fileData = await uploadFile(selectedRadios[i], 'radios');
      uploadedRadios.push(fileData);
    }
  
    let uploadedEmpreintes = [];
    for (let i = 0; i < selectedEmpreintes.length; i++) {
      const fileData = await uploadFile(selectedEmpreintes[i], 'empreintes');
      uploadedEmpreintes.push(fileData);
    }
  
    setMedicalInfo((prev) => ({
      ...prev,
      radios: uploadedRadios,
      empreintes: uploadedEmpreintes,
    }));
  };
  
  const uploadFile = async (file, type) => {
    const data = new FormData();
    data.append('file', file);
  
    const response = await fetch(`/api/patients/${patientId}/${type}`, {
      method: 'POST',
      body: data,
    });
  
    if (!response.ok) {
      throw new Error(`Failed to upload file: ${response.statusText}`);
    }
  
    const fileData = await response.json();
    return fileData;
  };

  return (
    <div onSubmit={handleSubmit} className="space-y-4 bg-slate-50 p-4 md:p-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Informations Médicales
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Radios */}
        <div>
          <label className="block text-sm p-1 font-medium text-gray-700">
            Radios
          </label>
          <div className="mt-1 text-black">
            <input
              type="file"
              id="radios"
              name="radios"
              accept=".jpg, .jpeg, .png, .svg"
              onChange={handleFileChange}
              multiple
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
  
        {/* Empreintes */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Empreintes
          </label>
          <div className="mt-1 text-black">
            <input
              type="file"
              id="empreintes"
              name="empreintes"
              accept=".jpg, .jpeg, .png, .svg, .stl"
              onChange={handleFileChange}
              multiple
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
  
        
  
        {/* PP */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            PP
          </label>
          <div className="mt-1">
            <textarea
              id="pp"
              name="pp"
              value={pp}
              rows="3"
              onChange={(e) => setPp(e.target.value)}
              placeholder='Demande du patient'
              className="shadow-sm focus:ring-indigo-500 text-black focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Empreintes à prendre ou prise */}
        <div className="mb-4">
          <label className="inline-flex items-center text-black">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600"
              checked={checkmaxillaire}
              onChange={handleEmpreintesChange}
            />
            <span className="ml-2 text-sm">Empreintes prises</span>
          </label>
        </div>
  
        {/* QM */}
        <div>
          <label className="block text-sm font-medium text-red-700">
            QM
          </label>
          <div className="mt-1">
            <textarea
              id="qm"
              name="qm"
              rows="3"
              value={qm}
              onChange={(e) => setQm(e.target.value)}
              className="shadow-sm focus:ring-red-500 focus:border-red-500 mt-1 block w-full sm:text-sm border-red-300 rounded-md text-red-700"
            />
          </div>
        </div>

        {/* Dental and Ortho History */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Historique Dentaire
          </label>
          <div className="mt-1">
            <textarea
              id="dentalAndOrthoHistory"
              name="dentalAndOrthoHistory"
              rows="3"
              value={dentalAndOrthoHistory}
              onChange={(e) =>
                setDentalAndOrthoHistory(e.target.value)
              }
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md text-black"
            />
          </div>
        </div>
      </div>
      </div>

  );
};

export default MedicalInfo;