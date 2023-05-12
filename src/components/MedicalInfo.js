import React, { useState } from 'react';

const MedicalInfo = ({ medicalInfo, setMedicalInfo }) => {
  const { radios, pp, qm, dentalAndOrthoHistory } = medicalInfo;
  const [uploadedRadios, setUploadedRadios] = useState(null);

  const setRadios = (radios) => {
    setMedicalInfo((prev) => ({ ...prev, radios }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setUploadedRadios(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedRadios({
        data: event.target.result,
        contentType: file.type,
      });
    };
    reader.readAsDataURL(file);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setMedicalInfo({
      radios: uploadedRadios,
      pp: '',
      qm: '',
      dentalAndOrthoHistory: '',
    });
  };

  return (
    <div onSubmit={handleSubmit} className="space-y-4 bg-slate-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Radios */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Radios
          </label>
          <div className="mt-1">
            <input
              type="file"
              id="radios"
              name="radios"
              accept=".jpg, .jpeg, .png, .svg"
              onChange={handleFileChange}
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
            Historique Dentiare
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