import React from 'react';
import { useState } from 'react';

const Traitement = ({ traitementState, setTraitementState }) => {
  const { soinAPrevoir, typeDeTraitement, duree, planDeTraitement, accessoires, consignes, encours, contention, aligneurRDV, nombreDAligneurs, aligneurActuel, jourDePort } = traitementState;

  const setSoinAPrevoir = (value) => setTraitementState({ ...traitementState, soinAPrevoir: value });
  const setTypeDeTraitement = (value) => setTraitementState({ ...traitementState, typeDeTraitement: value });
  const setDuree = (value) => setTraitementState({ ...traitementState, duree: value });
  const setPlanDeTraitement = (value) => setTraitementState({ ...traitementState, planDeTraitement: value });
  const setAccessoires = (value) => setTraitementState({ ...traitementState, accessoires: value });
  const setConsignes = (value) => setTraitementState({ ...traitementState, consignes: value });
  const setEncours = (value) => setTraitementState({ ...traitementState, encours: value });
  const setContention = (value) => setTraitementState({ ...traitementState, contention: value });
  const setnombreDAligneurs = (value) => setTraitementState({ ...traitementState, nombreDAligneurs: value });
  const setAligneurActuel = (value) => setTraitementState({ ...traitementState, aligneurActuel: value });
  const setJourDePort = (value) => setTraitementState({ ...traitementState, jourDePort: value });
  const setAligneurRDV = (value) => setTraitementState({ ...traitementState, aligneurRDV: value });

  

const handleEncoursChange = (e) => {
    setEncours(e.target.checked);
  };
  
  const handleContentionChange = (e) => {
    setContention(e.target.checked);
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTraitementState(prevState => ({
      ...prevState,
      soinAPrevoir: '',
      typeDeTraitement: '',
      duree: '',
      planDeTraitement: '',
      accessoires: {
        ...prevState.accessoires,
        taquets: false,
        stripping: false,
        vivera: false,
        elastiques: false,
      },
      consignes: {
        ...prevState.consignes,
        parodontie: false,
        chirurgie: false,
        reeducation_linguale: false,
        reeducation_deglutition_infantile: false,
        dentiste: false,
        implant: false,
        greffe: false,
        frenectomie: false,
      },
      encours: '',
      aligneurRDV: false,
      nombreDAligneurs: '',
      aligneurActuel: '',
      jourDePort: '',
    }));
  };

  return (
    <div onSubmit={handleSubmit} className="space-y-4 bg-slate-50 p-6 md:p-8 lg:p-10 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Traitement Orthodontique</h2>
      
      {/* Soin à prévoir */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Soin à prévoir</label>
        <textarea
          value={soinAPrevoir}
          onChange={(e) => setSoinAPrevoir(e.target.value)}
          className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          placeholder="Soin à prévoir"
        />
      </div>
  
      {/* Type de traitement */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Type de Traitement</label>
        <select
          value={typeDeTraitement}
          onChange={(e) => setTypeDeTraitement(e.target.value)}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md text-black"
        >
          <option value="">Type de Traitement</option>
          <option value="Express">Express</option>
          <option value="Lite">Lite</option>
          <option value="Moderate">Moderate</option>
          <option value="Comprehensive">Comprehensive - Full</option>
        </select>
      </div>
  
      {/* Durée */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Durée</label>
        <select
          value={duree}
          onChange={(e) => setDuree(e.target.value)}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md text-black"
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
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Plan de Traitement</label>
        <textarea
          value={planDeTraitement}
          onChange={(e) => setPlanDeTraitement(e.target.value)}
          className="block text-black w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Plan de Traitement"
        />
      </div>

                    {/* Accessoires */}

                    <div>
      <span className="block text-sm font-medium text-gray-700 mb-2">Accessoires</span>
      <div className="flex flex-wrap">
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
    <div>
      <span className="block text-sm font-medium text-gray-700 mb-2">Consignes</span>
      <div className="flex flex-wrap">
        <label className="flex items-center text-black mr-3 mb-2">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600"
            name="consignes"
            value="parodontie"
            checked={consignes.parodontie}
            onChange={(e) => setConsignes({ ...consignes, parodontie: e.target.checked })}
          />
          <span className="ml-2 text-sm">Parodontie</span>
        </label>
        <label className="flex items-center text-black mr-3 mb-2">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600"
            name="consignes"
            value="chirurgie"
            checked={consignes.chirurgie}
            onChange={(e) => setConsignes({ ...consignes, chirurgie: e.target.checked })}
          />
          <span className="ml-2 text-sm">Chirurgie - DDS</span>
        </label>
        <label className="flex items-center text-black mr-3 mb-2">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600"
            name="consignes"
            value="reeducation_linguale"
            checked={consignes.reeducation_linguale}
            onChange={(e) => setConsignes({ ...consignes, reeducation_linguale: e.target.checked })}
          />
          <span className="ml-2 text-sm">Réeducation linguale</span>
        </label>
        <label className="flex items-center text-black mr-3 mb-2">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600"
            name="consignes"
            value="reeducation_deglutition_infantile"
            checked={consignes.reeducation_deglutition_infantile}
            onChange={(e) => setConsignes({ ...consignes, reeducation_deglutition_infantile: e.target.checked })}
          />
          <span className="ml-2 text-sm">Rééducation déglution infantile</span>
        </label>

        <label className="flex items-center text-black mr-3 mb-2">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600"
            name="consignes"
            value="implant"
            checked={consignes.implant}
            onChange={(e) => setConsignes({ ...consignes, implant: e.target.checked })}
          />
          <span className="ml-2 text-sm">Implant</span>
        </label>

        <label className="flex items-center text-black mr-3 mb-2">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600"
            name="consignes"
            value="greffe"
            checked={consignes.greffe}
            onChange={(e) => setConsignes({ ...consignes, greffe: e.target.checked })}
          />
          <span className="ml-2 text-sm">Greffe</span>
        </label>

        <label className="flex items-center text-black mr-3 mb-2">
          <input
            type="checkbox"
                    className="form-checkbox text-indigo-600"
                    name="consignes"
                    value="frenectomie"
                    checked={consignes.frenectomie}
                    onChange={(e) => setConsignes({ ...consignes, frenectomie: e.target.checked })}
                  />
                  <span className="ml-2 text-sm">Frenectomie</span>
                </label>

                <label className="flex items-center text-black mr-3 mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                    name="consignes"
                    value="dentiste"
                    checked={consignes.dentiste}
                    onChange={(e) => setConsignes({ ...consignes, dentiste: e.target.checked })}
                  />
                  <span className="ml-2 text-sm">Dentiste</span>
                </label>
              </div>
            </div>
                {/* Traitement En Cours */}
      <div>
        <label className="inline-flex items-center text-gray-700">
          <select value={encours} onChange={e => setEncours(e.target.value)}>
  <option value="Devis donné">Devis donné</option>
  <option value="Devis accepté">Devis accepté</option>
  <option value="Clincheck en cours">Clincheck en cours</option>
  <option value="Traitement en cours">Traitement en cours</option>
  <option value="Finition en cours">Finition en cours</option>
  <option value="Traitement fini - Contention">Traitement fini - Contention</option>
  <option value="Contention prête">Contention Prête</option>
            </select>
          <span className="ml-2">Traitement en Cours</span>
        </label>
      </div>

      {/* Nombre d'aligneurs */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre d&apos;aligneurs</label>
        <input
          type="number"
          value={nombreDAligneurs}
          onChange={(e) => setnombreDAligneurs(e.target.value)}
          className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          placeholder="Nombre d'aligneurs"
        />
      </div>

      {/* Aligneur Actuel */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Aligneur Actuel</label>
        <input
          type="number"
          value={aligneurActuel}
          onChange={(e) => setAligneurActuel(e.target.value)}
          className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          placeholder="Aligneur Actuel"
        />
      </div>

      {/* Aligneur RDV */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Aligneur RDV</label>
        <input
          type="number"
          value={aligneurRDV || ''}
          onChange={(e) => setAligneurRDV(e.target.value)}
          className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          placeholder="Aligneur RDV"
        />
      </div>

      {/* Jour de Port */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Jours de Port</label>
        <input
          type="number"
          value={jourDePort}
          onChange={(e) => setJourDePort(e.target.value)}
          className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          placeholder="Jours de Port"
        />
      </div>


  /* Contention ≈
    <div>
      <label className="inline-flex items-center text-gray-700">
        <input
          type="checkbox"
          className="form-checkbox text-indigo-600"
          checked={contention}
          onChange={handleContentionChange}
        />
        <span className="ml-2">Contention à Faire</span>
      </label>
    </div>

    */
            
  </div>

  );
};

export default Traitement;
