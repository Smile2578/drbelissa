import React from 'react';

const Traitement = ({ traitementState, setTraitementState }) => {
  const { soinAPrevoir, typeDeTraitement, duree, planDeTraitement, accessoires, consignes } = traitementState;

  console.log(traitementState);

  const setSoinAPrevoir = (value) => {
    setTraitementState({ ...traitementState, soinAPrevoir: value });
  };
  const setTypeDeTraitement = (value) => {
    setTraitementState({ ...traitementState, typeDeTraitement: value });
  };
  const setDuree = (value) => {
    setTraitementState({ ...traitementState, duree: value });
  };
  const setPlanDeTraitement = (value) => {
    setTraitementState({ ...traitementState, planDeTraitement: value });
  };
  const setAccessoires = (value) => {
    setTraitementState({ ...traitementState, accessoires: value });
  };
  const setConsignes = (value) => {
    setTraitementState({ ...traitementState, consignes: value });
  };
  
  

    const handleSubmit = (e) => {
    e.preventDefault();
    setTraitementState({
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
      }
    });
  };


  return (
    <div onSubmit={handleSubmit} className="space-y-4 bg-slate-50">

                        {/* Soin à prévoir */}
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Soin à prévoir</label>
            <textarea
              value={soinAPrevoir}
              onChange={(e) => setSoinAPrevoir(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Soin à prévoir"
            />
        </div>

                        {/* Type de traitement */}
        <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Type de Traitement</label>
              <select
                value={typeDeTraitement}
                onChange={(e) => setTypeDeTraitement(e.target.value)}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="">Type de Traitement</option>
                <option value="Express">Express</option>
                <option value="Lite">Lite</option>
                <option value="Moderate">Moderate</option>
                <option value="Comprehensive">Comprehensive - Full</option>
              </select>
        </div>

                        {/* Durée */}
        <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Durée</label>
              <select
                value={duree}
                onChange={(e) => setDuree(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Durée</option>
                <option value="2-4 mois">2-4 mois</option>
                <option value="4-6 mois">4-6 mois</option>
                <option value="9-12 mois">9-12 mois</option>
                <option value="12-15 mois">12-15 mois</option>
                <option value="12-18 mois">12-18 mois</option>
                <option value="18-24 mois">18-24 mois</option>
              </select>
        </div>
                    {/* Plan de Traitement */}
        <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Plan de Traitement</label>
              <textarea
                value={planDeTraitement}
                onChange={(e) => setPlanDeTraitement(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Plan de Traitement"
              />
            </div>

                    {/* Accessoires */}

                    <div className="mb-4">
              <span className="block text-gray-700 font-bold mb-2">Accessoires</span>
              <div className="flex">
                <label className="inline-flex items-center ml-3 text-black">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                    name="accessoires"
                    value="taquets"
                    checked={accessoires.taquets}
                    onChange={(e) => setAccessoires({ ...accessoires, taquets: e.target.checked })}
                  />
                  <span className="ml-2">Taquets</span>
                </label>
                <label className="inline-flex items-center text-black ml-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                    name="accessoires"
                    value="stripping"
                    checked={accessoires.stripping}
                    onChange={(e) => setAccessoires({ ...accessoires, stripping: e.target.checked })}
                  />
                  <span className="ml-2">Stripping</span>
                </label>
                <label className="inline-flex items-center text-black ml-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                    name="accessoires"
                    value="vivera"
                    checked={accessoires.vivera}
                    onChange={(e) => setAccessoires({ ...accessoires, vivera: e.target.checked })}
                  />
                  <span className="ml-2">Vivera</span>
                </label>
                <label className="inline-flex items-center text-black ml-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                    name="accessoires"
                    value="elastiques"
                    checked={accessoires.elastiques}
                    onChange={(e) => setAccessoires({ ...accessoires, elastiques: e.target.checked })}
                  />
                  <span className="ml-2">Élastiques</span>
                </label>
              </div>
            </div>        

                                    {/* Consignes */}

<div className="mb-4">
              <span className="block text-gray-700 font-bold mb-2">Consignes</span>
              <div className="flex">
                <label className="inline-flex items-center ml-3 text-black">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                    name="consignes"
                    value="parodontie"
                    checked={consignes.parodontie}
                    onChange={(e) => setConsignes({ ...consignes, parodontie: e.target.checked })}
                  />
                  <span className="ml-2">Parodontie</span>
                </label>
                <label className="inline-flex items-center text-black ml-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                    name="consignes"
                    value="chirurgie"
                    checked={consignes.chirurgie}
                    onChange={(e) => setConsignes({ ...consignes, chirurgie: e.target.checked })}
                  />
                  <span className="ml-2">Chirurgie - DDS</span>
                </label>
                <label className="inline-flex items-center text-black ml-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                    name="consignes"
                    value="reeducation_linguale"
                    checked={consignes.reeducation_linguale}
                    onChange={(e) => setConsignes({ ...consignes, reeducation_linguale: e.target.checked })}
                  />
                  <span className="ml-2">Réeducation linguale</span>
                </label>
                <label className="inline-flex items-center text-black ml-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                    name="consignes"
                    value="reeducation_deglutition_infantile"
                    checked={consignes.reeducation_deglutition_infantile}
                    onChange={(e) => setConsignes({ ...consignes, reeducation_deglutition_infantile: e.target.checked })}
                  />
                  <span className="ml-2">Rééducation déglution infantile</span>
                </label>

                <label className="inline-flex items-center text-black ml-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                    name="consignes"
                    value="dentiste"
                    checked={consignes.dentiste}
                    onChange={(e) => setConsignes({ ...consignes, dentiste: e.target.checked })}
                  />
                  <span className="ml-2">Dentiste</span>
                </label>
              </div>
            </div>        

    </div>
  );
};

export default Traitement;