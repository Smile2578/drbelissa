import React from 'react';

const ExamenIntra = ({ examenIntraOral = {}, setExamenIntraOral }) => {
  const { profil, visage, milieuSup, milieuInf, sourire, atm, hbd, recessionGingivale, classeSquelettique, encombrement, malposition, diasteme, infraSupraOcclusion } = examenIntraOral;

  const setProfil = (e) => {
    setExamenIntraOral({ ...examenIntraOral, profil: e.target.value });
  };
  const setVisage = (e) => {
    setExamenIntraOral({ ...examenIntraOral, visage: e.target.value });
  };
  const setAtm = (e) => {
    setExamenIntraOral({ ...examenIntraOral, atm: e.target.value });
  };
  const setHbd = (e) => {
    setExamenIntraOral({ ...examenIntraOral, hbd: e.target.value });
  };
  const setClasseSquelettique = (e) => {
    setExamenIntraOral({ ...examenIntraOral, classeSquelettique: e.target.value });
  };
  const setEncombrement = (e) => {
    setExamenIntraOral({ ...examenIntraOral, encombrement: e.target.value });
  };
  const handleMalpositionChange = (e) => {
    setExamenIntraOral({ ...examenIntraOral, malposition: e.target.checked });
  };
  
  const handleDiastemeChange = (e) => {
    setExamenIntraOral({ ...examenIntraOral, diasteme: e.target.checked });
  };

  const setRecessionGingivale = (e) => {
    setExamenIntraOral({ ...examenIntraOral, recessionGingivale: e.target.value });
  };

  const setInfraSupraOcclusion = (value) => {
    setExamenIntraOral({ ...examenIntraOral, infraSupraOcclusion: value });
  };

  const setMilieuSup = (e) => {
    setExamenIntraOral({ ...examenIntraOral, milieuSup: e.target.value });
  };
  const setMilieuInf = (e) => {
    setExamenIntraOral({ ...examenIntraOral, milieuInf: e.target.value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setExamenIntraOral({
      profil,
      visage,
      milieuSup,
      milieuInf,
      sourire: {
        etroit: false,
        large: false,
        gingival: false,
        dentaire: false,
        asymetrique: false,
        symetrique: false,
        plat: false,
        devie: false,
        hypotonie_labiale_sup: false,
        hypotonie_labiale_inf: false,
      },
      atm,
      hbd,
      recessionGingivale,
      classeSquelettique,
      encombrement,
      malposition,
      diasteme,
      infraSupraOcclusion,
    });
  };
  return (
    <div onSubmit={handleSubmit} className="space-y-4 bg-slate-50">
      {/* Examen IntraOral */}
      
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Examen Intra Oral
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Profil */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mt-2">
              Profil
            </label>
            <div className="mt-2">
              <select
                id="profil"
                name="profil"
                value={profil}
                onChange={(e) => setProfil(e)}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-black"
              >
                <option value="">Profil</option>
                <option value="Plat">Plat</option>
                <option value="Convexe">Convexe</option>
                <option value="Concave">Concave</option>
              </select>
              </div>

          {/* Visage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mt-2">
              Visage
            </label>
            <div className="mt-2">
              <select
                id="visage"
                name="visage"
                value={visage}
                onChange={(e) => setVisage(e)}
                className="focus:ring-indigo-500 text-black focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              >
                <option value="">Visage</option>
                <option value="Dolicofacial">Dolicofacial</option>
                <option value="Mesofacial">Mesofacial</option>
                <option value="Braquifacial">Braquifacial</option>
                <option value="Asymétrie Faciale">Asymétrie Faciale</option>
              </select>
            </div>
          </div>

                          {/* Sourire */}
<div className="mb-4 mt-2">
  <span className="block text-gray-700 font-bold mb-2">Sourire</span>
  <div className="flex flex-wrap">
    {["etroit", "large", "gingival", "dentaire", "symetrique", "asymetrique", "plat", "devie", "hypotonie_labiale_sup", "hypotonie_labiale_inf"].map((option) => (
      <label key={option} className="inline-flex items-center ml-3 text-black">
        <input
          type="checkbox"
          className="form-checkbox text-indigo-600"
          name={option}
          checked={examenIntraOral.sourire[option] || false}
          onChange={(e) => {
            setExamenIntraOral((prevState) => ({
              ...prevState,
              sourire: {
                ...prevState.sourire,
                [option]: e.target.checked
              }
            }));
          }}
        />
        <span className="ml-2">{option.charAt(0).toUpperCase() + option.slice(1).replace(/_/g, ' ')}</span>
      </label>
    ))}
  </div>
</div>





           {/* Milieu sup */}
           <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Milieu sup</label>
            <select
              value={milieuSup}
              onChange={setMilieuSup}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Milieu sup.</option>
              <option value="centré">Centré</option>
              <option value="décalé à gauche">Décalé à Gauche</option>
              <option value="décalé à droite">Décalé à Droite</option>
            </select>
          </div>

         {/* Milieu inf */}
         <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Milieu inf</label>
            <select
              value={milieuInf}
              onChange={setMilieuInf}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Milieu inf.</option>
              <option value="centré">Centré</option>
              <option value="décalé à gauche">Décalé à Gauche</option>
              <option value="décalé à droite">Décalé à Droite</option>
            </select>
          </div>

          {/* Recession Gingivale */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Récession Gingivale
            </label>
            <div className="mt-1">
              <textarea
                id="recessiongingivale"
                name="recessiongingivale"
                rows="2"
                value={recessionGingivale}
                onChange={(e) => setRecessionGingivale(e)}
                className="shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>



          {/* ATM */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mt-2">
              ATM
            </label>
            <div className="mt-1">
              <textarea
                id="atm"
                name="atm"
                rows="2"
                value={atm}
                onChange={(e) => setAtm(e)}
                className="shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
                  {/* HBD */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">HBD</label>
            <select
              value={hbd}
              onChange={(e) => setHbd(e)}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Hygiène Dentaire</option>
              <option value="bon">Bon</option>
              <option value="moyen">Moyen</option>
              <option value="mauvais">Mauvais</option>
            </select>
          </div>

          {/* Classe Squelettique */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Classe Squelettique</label>
            <select
              value={classeSquelettique}
              onChange={(e) => setClasseSquelettique(e)}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Classe Squelettique</option>
              <option value="Classe 1">Classe I</option>
              <option value="Classe 2G et 1D">Classe II G et I D</option>
              <option value="Classe 1G et 2D">Classe I G et Classe II D</option>
              <option value="Classe 2">Classe II</option>
              <option value="Classe 2-2">Classe II-2</option>
              <option value="Classe 3">Classe III</option>
              <option value="Classe 4">Classe IV</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          {/* Encombrement */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Encombrement</label>
            <select
              value={encombrement}
              onChange={(e) => setEncombrement(e)}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Encombrement</option>
              <option value="anterieur_important">Antérieur important</option>
              <option value="anterieur_moyen">Antérieur moyen</option>
              <option value="anterieur_leger">Antérieur léger</option>
              <option value="median_ou_posterieur">Médian ou Postérieur</option>
            </select>
          </div>
                                    {/* malposition */}
                  <div className="mb-4">
                    <label className="inline-flex items-center text-black">
                      <input
                        type="checkbox"
                        className="form-checkbox text-indigo-600"
                        checked={malposition}
                        onChange={handleMalpositionChange}
                      />
                      <span className="ml-2">Malposition</span>
                    </label>
                  </div>

                  {/* Diasteme */}
                  <div className="mb-4">
                    <label className="inline-flex items-center text-black">
                      <input
                        type="checkbox"
                        className="form-checkbox text-indigo-600"
                        checked={diasteme}
                        onChange={handleDiastemeChange}
                      />
                      <span className="ml-2">Diastème</span>
                    </label>
                  </div>


                          {/* InfraSupraOcclusion */}
              <div className="mb-4">
                <span className="block text-gray-700 font-bold mb-2 ">Occlusion</span>
                <label className="inline-flex items-center mr-4 text-black">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600"
                    name="infraSupraOcclusion"
                    value="supraclusion"
                    checked={infraSupraOcclusion === 'supraclusion'}
                    onChange={() => setInfraSupraOcclusion('supraclusion')}
                  />
                  <span className="ml-2 ">Supraclusion</span>
                </label>
                <label className="inline-flex items-center text-black">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600"
                    name="infraSupraOcclusion"
                    value="infraclusion"
                    checked={infraSupraOcclusion === 'infraclusion'}
                    onChange={() => setInfraSupraOcclusion('infraclusion')}
                  />
                  <span className="ml-2">Infraclusion</span>
                </label>
                <label className="inline-flex items-center ml-1 text-black">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600"
                    name="infraSupraOcclusion"
                    value="neutroclusion"
                    checked={infraSupraOcclusion === 'neutroclusion'}
                    onChange={() => setInfraSupraOcclusion('neutroclusion')}
                  />
                  <span className="ml-2">Equilibrée</span>
                </label>
              </div>
        </div>
    </div>
        </div>
  );
};

export default ExamenIntra;