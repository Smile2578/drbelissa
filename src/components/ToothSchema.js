import React, { useState, useEffect, useCallback } from 'react';

const ToothSchema = ({ onTeethChange, initialTeeth = [] }) => {
  const teethNumbers = [
    ...Array.from({ length: 8 }, (_, i) => 18 - i),
    ...Array.from({ length: 8 }, (_, i) => 21 + i),
    ...Array.from({ length: 8 }, (_, i) => 48 - i),
    ...Array.from({ length: 8 }, (_, i) => 31 + i),
  ];

  const [selectedTeeth, setSelectedTeeth] = useState(initialTeeth);

  const handleTeethSelection = useCallback((toothNumber) => {
    const toothIndex = selectedTeeth.findIndex((t) => t.toothNumber === toothNumber);
    const isSelected = toothIndex !== -1;

    if (isSelected) {
      const updatedSelectedTeeth = selectedTeeth.filter((t) => t.toothNumber !== toothNumber);
      setSelectedTeeth(updatedSelectedTeeth);
    } else {
      const newTooth = { toothNumber, isSelected: true };
      setSelectedTeeth([...selectedTeeth, newTooth]);
    }
  }, [selectedTeeth]);

  useEffect(() => {
    const prevTeeth = JSON.stringify(initialTeeth);
    const currTeeth = JSON.stringify(selectedTeeth);
  
    if (prevTeeth !== currTeeth) {
      onTeethChange(selectedTeeth);
    }
  }, [selectedTeeth, onTeethChange]);


  return (
    <div className="space-y-2 mt-4">
      <div className="flex space-x-2">
        {teethNumbers.slice(0, 16).map((toothNumber) => {
          const isSelected = selectedTeeth.some((t) => t.toothNumber === toothNumber);
          return (
            <label
              key={toothNumber}
              className={`flex items-center justify-center border border-gray-300 rounded-md h-8 w-8 ${
                isSelected ? 'bg-indigo-500 text-white' : 'bg-white text-gray-700'
              }`}
            >
              <input
                type="checkbox"
                value={toothNumber}
                checked={isSelected}
                onChange={() => handleTeethSelection(toothNumber)}
                className="hidden"
              />
              {toothNumber}
            </label>
          );
        })}
      </div>
      <div className="flex space-x-2">
        {teethNumbers.slice(16).map((toothNumber) => {
          const isSelected = selectedTeeth.some((t) => t.toothNumber === toothNumber);
          return (
            <label
              key={toothNumber}
              className={`flex items-center justify-center border border-gray-300 rounded-md h-8 w-8 ${
                isSelected ? 'bg-indigo-500 text-white' : 'bg-white text-gray-700'
              }`}
            >
              <input
                type="checkbox"
                value={toothNumber}
                checked={isSelected}
                onChange={() => handleTeethSelection(toothNumber)}
                className="hidden"
              />
              {toothNumber}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ToothSchema;