import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const HomePage = () => {
  const [symptom, setSymptom] = useState('');
  const [diseases, setDiseases] = useState([]);
  const recommendedSymptoms = ['cough', 'headache', 'fever'];

  const handleSymptomChange = (e) => {
    setSymptom(e.target.value);
  };

  const handleSymptomSubmit = (e) => {
    e.preventDefault();
    const symptomToDiseaseMap = {
      cough: ['Common Cold', 'Flu', 'COVID-19'],
      headache: ['Migraine', 'Tension Headache', 'Cluster Headache'],
      fever: ['Malaria', 'Dengue', 'COVID-19'],
    };

    const probableDiseases = symptomToDiseaseMap[symptom.toLowerCase()] || ['Unknown symptom'];
    setDiseases(probableDiseases);
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-y-auto">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-black">Welcome to Dirghaaayu</h1>
          <p className="text-lg text-gray-700 mb-4 text-center">
            Explore natural remedies and health tips to improve your well-being.
          </p>
          <div className="flex justify-center">
            <Link to="/remedies">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                View Remedies
              </button>
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">Featured Remedies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2 text-black">Lemon Honey Water</h3>
              <p className="text-gray-700 mb-4">
                A refreshing drink that boosts immunity and aids digestion.
              </p>
              <div className="flex justify-center">
                <Link to="/remedies/lemon-honey-water">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2 text-black">Ginger Garlic Paste</h3>
              <p className="text-gray-700 mb-4">
                Natural remedy for cold and flu symptoms.
              </p>
              <div className="flex justify-center">
                <Link to="/remedies/ginger-garlic-paste">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2 text-black">Turmeric Milk</h3>
              <p className="text-gray-700 mb-4">
                Anti-inflammatory drink to relieve joint pain and boost immunity.
              </p>
              <div className="flex justify-center">
                <Link to="/remedies/turmeric-milk">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        

        <section className="bg-blue-500 text-white py-8 px-4 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your Journey to Better Health Today!</h2>
          <p className="text-lg mb-4">
            Discover more natural remedies and tips for a healthier lifestyle.
          </p>
          <div className="flex justify-center">
            <Link to="/remedies">
              <button className="bg-white text-blue-500 hover:bg-gray-200 hover:text-blue-600 py-2 px-4 rounded-md">
                Explore Remedies
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

function Home() {
  return (
    <>
      <HomePage />
      <Footer />
    </>
  );
}

export default Home;
