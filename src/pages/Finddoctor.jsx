import React, { useState } from 'react';
import { SearchIcon, LocationMarkerIcon } from '@heroicons/react/solid';

const SearchBar = () => {
  const hospitals = [
    { name: "Alka Hospital", location: "lalitpur" },
    { name: "Anandaban Hospital", location: "Tika Bhairab, Lele, Lalitpur" },
    { name: "Arbuda Rog Nibaran Santha", location: "bagbazar, kathmandu" },
    { name: "B & B Hospital", location: "Gwarko, kathmandu" },
    { name: "Bhaktapur Cancer Hospital", location: "bhaktapur" },
    { name: "Bheri Hospital", location: "nepalgunj" },
    { name: "Biratnagar Eye Hospital", location: "biratnagar" },
    { name: "bir Hospital", location: "Tundikhel, kathmandu" },
    { name: "Birendra Hospital", location: "chhauni, kathmandu" },
    { name: "Bogoni Vision Center", location: "dhanusa" },
    { name: "B.P. Koirala Institute of Health Sciences", location: "dharan" }
  ];

  // List of doctors associated with hospitals
  const doctors = [
    { name: "Dr. Aayush Sharma", hospital: "Alka Hospital" },
    { name: "Dr. Bina Raut", hospital: "Anandaban Hospital" },
    { name: "Dr. Shyam Pathak", hospital: "Arbuda Rog Nibaran Santha" },
    { name: "Dr. Sunita Shrestha", hospital: "B & B Hospital" },
    { name: "Dr. Ram Krishna", hospital: "Bhaktapur Cancer Hospital" },
    { name: "Dr. Megha Pokhrel", hospital: "Bheri Hospital" },
    { name: "Dr. Nitesh Ranjan", hospital: "Biratnagar Eye Hospital" },
    { name: "Dr. Sita Rai", hospital: "Bir Hospital" },
    { name: "Dr. Kiran Thapa", hospital: "Birendra Hospital" },
    { name: "Dr. Keshav Regmi", hospital: "Bogoni Vision Center" },
    { name: "Dr. Sarita Karki", hospital: "B.P. Koirala Institute of Health Sciences" }
  ];

  const providerLinks = [
    {
      icon: "🦷",
      title: "Find dental providers",
      description: "Search dentist",
    },
    {
      icon: "👓",
      title: "Find vision care providers",
      description: "Search a vision care provider",
    },
    {
      icon: "🧠",
      title: "Find mental health providers",
      description: "Search mental health/behavioral health providers",
    },
    {
      icon: "💊",
      title: "Find network pharmacies",
      description: "Search a network pharmacy",
    },
  ];
  
  

  // State to handle input and results
  const [doctorName, setDoctorName] = useState('');
  const [location, setLocation] = useState('');
  const [filteredResult, setFilteredResult] = useState(null);
  const [searched, setSearched] = useState(false); // To track if a search has been attempted

  const handleSearch = () => {
    setSearched(true); // Mark that a search has been attempted
    let filteredHospital = null;

    // If the user has entered a doctor name
    if (doctorName) {
      const doctor = doctors.find((doc) =>
        doc.name.toLowerCase().includes(doctorName.toLowerCase())
      );

      if (doctor) {
        filteredHospital = hospitals.find(
          (hosp) =>
            hosp.name === doctor.hospital &&
            hosp.location.toLowerCase().includes(location.toLowerCase())
        );
        if (filteredHospital) {
          setFilteredResult({ hospital: filteredHospital, doctor });
          return;
        }
      }
    }

    // If only the location is provided
    if (location && !doctorName) {
      filteredHospital = hospitals.find((hosp) =>
        hosp.location.toLowerCase().includes(location.toLowerCase())
      );

      if (filteredHospital) {
        const doctor = doctors.find((doc) => doc.hospital === filteredHospital.name);
        setFilteredResult({ hospital: filteredHospital, doctor });
        return;
      }
    }

    // If no results found
    setFilteredResult(null);
  };

  return (
    <div className="bg-blue-900 text-white min-h-screen flex flex-col items-center px-4">
      <header className="py-4 w-full flex justify-center items-center">
        <div className="text-lg font-semibold">Dirghaaayu</div>
      </header>

      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold">Find Doctors and Health Assistance Near You</h1>
        <p className="mt-2 text-lg">A trusted platform that you can believe</p>
      </div>

      <div className="mt-8 flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-row w-full md:w-auto items-center mb-2">
          <div className="relative mb-2 md:mb-0 md:mr-2 w-full md:w-auto">
            <input
              type="text"
              className="px-10 py-2 w-full md:w-96 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Search doctor name"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
            <SearchIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="relative mb-2 md:mb-0 md:mr-2 w-full md:w-auto">
            <input
              type="text"
              className="px-10 py-2 w-full md:w-42 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <LocationMarkerIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            SEARCH
          </button>
        </div>
      </div>

      <div className="mt-4 text-black-400 text-center">
        <p>You can also search by physician or hospital name</p>
      </div>

      {/* Display search result */}
      {searched && (
        <div className="mt-12 bg-white py-12 w-full flex flex-col items-center">
          {filteredResult ? (
            <>
              <h2 className="text-2xl font-bold text-blue-900">Hospital Found:</h2>
              <p className="mt-4 text-lg text-blue-700">
                {filteredResult.hospital.name} - {filteredResult.hospital.location}
              </p>
              {filteredResult.doctor && (
                <p className="mt-2 text-lg text-gray-700">Doctor: {filteredResult.doctor.name}</p>
              )}
            </>
          ) : (
            <p className="text-lg text-gray-700">No hospital or doctor found matching your search.</p>
          )}
        </div>
      )}

      <div className="mt-12 w-full flex flex-wrap justify-center bg-white py-12">
        {providerLinks.map((link, index) => (
          <div key={index} className="w-full md:w-1/4 flex flex-col items-center p-4">
            <div className="text-4xl">{link.icon}</div>
            <h3 className="mt-4 text-lg font-bold text-blue-900">{link.title}</h3>
            <p className="mt-2 text-blue-500">{link.description}☝️</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
