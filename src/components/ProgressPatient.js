import { useEffect, useRef } from 'react';

function ProgressPatient({ nombreDAligneurs, aligneurActuel }) {
  const progress = (aligneurActuel / nombreDAligneurs) * 100;

  return (
    <div className="relative bg-gray-200 rounded-full w-full h-6 shadow">
      <div 
        className="rounded-full h-full flex items-center justify-between text-white px-1 bg-green-500"
        style={{ width: `${progress}%` }}
      >
        <span className="text-black font-semibold ">{aligneurActuel}</span>
      </div>
      <div 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black font-semibold"
      >
        {nombreDAligneurs}
      </div>
    </div>
  );
}

export default ProgressPatient;
