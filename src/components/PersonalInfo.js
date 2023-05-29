import React from 'react';
import { useState } from 'react';


const PersonalInfo = ({ personalInfo, setPersonalInfo }) => {
  const { firstName, lastName, dateOfBirth, email, phone } = personalInfo;

  const setFirstName = (value) => {
    setPersonalInfo({ ...personalInfo, firstName: value });
  };
  const setLastName = (value) => {
    setPersonalInfo({ ...personalInfo, lastName: value });
  };
  const setDateOfBirth = (value) => {
    setPersonalInfo({ ...personalInfo, dateOfBirth: value });
  };

  const setEmail = (value) => {
    setPersonalInfo({ ...personalInfo, email: value });
  };
  const setPhone = (value) => {
    setPersonalInfo({ ...personalInfo, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonalInfo({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      phone: '',
    });
  };
  
  return (
    <div onSubmit={handleSubmit} className="space-y-4 bg-slate-50 p-4 md:p-8">
      <h1 className='text-xl font-bold text-blue-400 text-center'>Nouveau Patient</h1>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Informations Personnelles
        </h2>
      <div className="flex flex-wrap -mx-2 mb-4 md:mb-6">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label htmlFor="firstName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-1 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label htmlFor="lastName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Nom de Famille
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full px-2">
          <label htmlFor="dateOfBirth" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            DDN
          </label>
          <input
            type="text"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 mb-1 leading-tight focus:outline-none focus:bg-white"
          />
       </div>
        <div className="w-full md:w-1/2 px-2">
          <label htmlFor="phone" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Téléphone
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>  
        </div>
        </div>
  );
};

export default PersonalInfo;