import React, { useMemo } from 'react';
import ToothSchema from './ToothSchema';


const ExamenRadio = ({ examenRadio, setExamenRadio }) => {
  const { inclusion, absenceOrAgenesie, caries } = examenRadio;

  const memoInclusion = useMemo(() => inclusion, [inclusion]);
  const memoAbsenceOrAgenesie = useMemo(() => absenceOrAgenesie, [absenceOrAgenesie]);
  const memoCaries = useMemo(() => caries, [caries]);

  const setInclusion = (inclusion) => {
    setExamenRadio((prev) => ({ ...prev, inclusion }));
  };
  const setAbsenceOrAgenesie = (absenceOrAgenesie) => {
    setExamenRadio((prev) => ({ ...prev, absenceOrAgenesie }));
  };
  const setCaries = (caries) => {
    setExamenRadio((prev) => ({ ...prev, caries }));
  };


    const handleSubmit = (e) => {
        e.preventDefault();
        setExamenRadio({
          inclusion: [],
          absenceOrAgenesie: [],
          caries: [],
        });
    };


    return (
      <div onSubmit={handleSubmit} className="space-y-4 bg-slate-50 p-4 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Examen Radio
        </h2>
        {/* Examen Radio - Inclusion */}
        <div className="mb-4">
          <label value={inclusion} htmlFor="inclusion" className="block text-sm font-medium text-gray-700 mb-2">
            Prothèse Fixe / Implant
          </label>
          <ToothSchema onTeethChange={setInclusion} initialTeeth={memoInclusion} />
        </div>
    
        {/* Examen Radio - AbsenceOrAgenesie */}
        <div className="mb-4">
          <label value={absenceOrAgenesie} htmlFor="absenceOrAgenesie" className="block text-sm font-medium text-gray-700 mb-2">
            Absence ou Agénésie
          </label>
          <ToothSchema onTeethChange={setAbsenceOrAgenesie} initialTeeth={memoAbsenceOrAgenesie} />
        </div>
    
        {/* Examen Radio - Caries */}
        <div className="mb-4">
          <label value={caries} htmlFor="caries" className="block text-sm font-medium text-gray-700 mb-2">
            Caries
          </label>
          <ToothSchema onTeethChange={setCaries} initialTeeth={memoCaries} />
        </div>
      </div>
    );
};

export default ExamenRadio;
