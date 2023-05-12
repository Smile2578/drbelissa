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
    <div onSubmit={handleSubmit} className="space-y-4 bg-slate-50">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="firstName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label htmlFor="lastName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Nom de Famille
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label htmlFor="dateOfBirth" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            DDN
          </label>
          <input
            type="text"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
       </div>
        <div className="w-full md:w-1/2 px-3">
          <label htmlFor="phone" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Téléphone
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
        </div>
        </div>
  );
};

export default PersonalInfo;