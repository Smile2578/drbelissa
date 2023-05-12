// FormButtons.js
import React from 'react';

const FormButtons = ({ onCancel }) => {
  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="flex items-center justify-between mt-8">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Enregistrer le patient
      </button>
      <button
        type="button"
        onClick={handleCancel}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Retour en Arrière
      </button>
    </div>
  );
};

export default FormButtons;
