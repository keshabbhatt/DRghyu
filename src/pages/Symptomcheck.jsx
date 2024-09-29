import React, { useState } from 'react';
import axios from 'axios';

const symptoms_dict = {
  'itching': 0, 'skin_rash': 1, 'nodal_skin_eruptions': 2,
  'continuous_sneezing': 3, 'shivering': 4, 'chills': 5,
  'joint_pain': 6, 'stomach_pain': 7, 'acidity': 8,
  'ulcers_on_tongue': 9, 'muscle_wasting': 10, 'vomiting': 11,
  'burning_micturition': 12, 'spotting_urination': 13, 'fatigue': 14,
  'weight_gain': 15, 'anxiety': 16, 'cold_hands_and_feets': 17,
  'mood_swings': 18, 'weight_loss': 19, 'restlessness': 20,
  'lethargy': 21, 'patches_in_throat': 22, 'irregular_sugar_level': 23,
  'cough': 24, 'high_fever': 25, 'sunken_eyes': 26,
  'breathlessness': 27, 'sweating': 28, 'dehydration': 29,
  'indigestion': 30, 'headache': 31, 'yellowish_skin': 32,
  'dark_urine': 33, 'nausea': 34, 'loss_of_appetite': 35,
  'pain_behind_the_eyes': 36, 'back_pain': 37, 'constipation': 38,
  'abdominal_pain': 39, 'diarrhoea': 40, 'mild_fever': 41,
  'yellow_urine': 42, 'yellowing_of_eyes': 43, 'acute_liver_failure': 44,
  'fluid_overload': 45, 'swelling_of_stomach': 46, 'swelled_lymph_nodes': 47,
  'malaise': 48, 'blurred_and_distorted_vision': 49, 'phlegm': 50,
  'throat_irritation': 51, 'redness_of_eyes': 52, 'sinus_pressure': 53,
  'runny_nose': 54, 'congestion': 55, 'chest_pain': 56,
  'weakness_in_limbs': 57, 'fast_heart_rate': 58,
  'pain_during_bowel_movements': 59, 'pain_in_anal_region': 60,
  'bloody_stool': 61, 'irritation_in_anus': 62, 'neck_pain': 63,
  'dizziness': 64, 'cramps': 65, 'bruising': 66,
  'obesity': 67, 'swollen_legs': 68, 'swollen_blood_vessels': 69,
  'puffy_face_and_eyes': 70, 'enlarged_thyroid': 71, 'brittle_nails': 72,
  'swollen_extremeties': 73, 'excessive_hunger': 74, 'extra_marital_contacts': 75,
  'drying_and_tingling_lips': 76, 'slurred_speech': 77,
  'knee_pain': 78, 'hip_joint_pain': 79, 'muscle_weakness': 80,
  'stiff_neck': 81, 'swelling_joints': 82, 'movement_stiffness': 83,
  'spinning_movements': 84, 'loss_of_balance': 85,
  'unsteadiness': 86, 'weakness_of_one_body_side': 87,
  'loss_of_smell': 88, 'bladder_discomfort': 89,
  'foul_smell_of_urine': 90, 'continuous_feel_of_urine': 91,
  'passage_of_gases': 92, 'internal_itching': 93,
  'toxic_look_(typhos)': 94, 'depression': 95,
  'irritability': 96, 'muscle_pain': 97,
  'altered_sensorium': 98, 'red_spots_over_body': 99,
  'belly_pain': 100, 'abnormal_menstruation': 101,
  'dischromic _patches': 102, 'watering_from_eyes': 103,
  'increased_appetite': 104, 'polyuria': 105,
  'family_history': 106, 'mucoid_sputum': 107,
  'rusty_sputum': 108, 'lack_of_concentration': 109,
  'visual_disturbances': 110, 'receiving_blood_transfusion': 111,
  'receiving_unsterile_injections': 112, 'coma': 113,
  'stomach_bleeding': 114, 'distention_of_abdomen': 115,
  'history_of_alcohol_consumption': 116, 'fluid_overload.1': 117,
  'blood_in_sputum': 118, 'prominent_veins_on_calf': 119,
  'palpitations': 120, 'painful_walking': 121,
  'pus_filled_pimples': 122, 'blackheads': 123,
  'scurring': 124, 'skin_peeling': 125,
  'silver_like_dusting': 126, 'small_dents_in_nails': 127,
  'inflammatory_nails': 128, 'blister': 129,
  'red_sore_around_nose': 130, 'yellow_crust_ooze': 131
};

const CareForm = () => {
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setResult(null); // Clear previous results

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', { symptoms });
      if (response.status === 200) {
        console.log(response.data);
        setResult(response.data);
      } else {
        setError(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      if (error.response) {
        setError(`Server error: ${error.response.status} - ${error.response.data.message || 'Something went wrong.'}`);
      } else if (error.request) {
        setError('No response received from the server.');
      } else {
        setError(`Error: ${error.message}`);
      }
      console.error('Error fetching prediction:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setSymptoms(input);
    
    const symptomsArray = input.split(',').map(symptom => symptom.trim());
    const lastSymptom = symptomsArray[symptomsArray.length - 1];

    if (lastSymptom) {
      const filteredSuggestions = Object.keys(symptoms_dict).filter(symptom =>
        symptom.toLowerCase().includes(lastSymptom.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const symptomsArray = symptoms.split(',').map(symptom => symptom.trim());
    symptomsArray[symptomsArray.length - 1] = suggestion; // Replace the last symptom with the suggestion
    setSymptoms(symptomsArray.join(', ') + ', '); // Append a comma for next input
    setSuggestions([]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-green-600">Dirghayu</h1>

      <div className="bg-gray-800 text-white rounded-lg p-8 mt-8">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="symptoms" className="block text-sm font-medium">Select Symptoms:</label>
            <input
              type="text"
              id="symptoms"
              placeholder="Type symptoms like itching, sleeping, aching, etc."
              className="w-full p-2 rounded-md text-white-800"
              value={symptoms}
              onChange={handleChange}
            />
            {suggestions.length > 0 && (
              <ul className="absolute z-10 bg-gray-700 w-full rounded-md mt-1">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="p-2 cursor-pointer hover:bg-gray-600" onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {loading && <p className="text-yellow-400">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
            disabled={loading}
          >
            Predict
          </button>
        </form>
      </div>

      {/* Display Results */}
      {result && (
        <div className="mt-8 space-y-4 bg-gray-700 p-4 rounded-lg text-white">
          <h2 className="text-2xl font-bold">Results:</h2>
          <p><strong>Disease:</strong> {result.predicted_disease || 'N/A'}</p>
          <p><strong>Description:</strong> {result.description || 'N/A'}</p>
          <p>
            <strong>Precautions:</strong> {result.precautions && result.precautions.length > 0 ? result.precautions.join(', ') : 'N/A'}
          </p>
          <p>
            <strong>Medications:</strong> {result.medications && result.medications.length > 0 ? result.medications.join(', ') : 'N/A'}
          </p>
          <p>
            <strong>Diets:</strong> {result.diet && result.diet.length > 0 ? result.diet[0].slice(2, -2).split("', '").join(', ') : 'N/A'}
          </p>
          <p>
            <strong>Workouts:</strong> {result.workout && result.workout.length > 0 ? result.workout.join(', ') : 'N/A'}
          </p>
        </div>
      )}
    </div>
  );
};

export default CareForm;
