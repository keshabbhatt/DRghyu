import React, { useState } from 'react';
import { Typography, Button, TextField, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, CircularProgress } from '@mui/material';

const SymptomForm = () => {
    const [symptom, setSymptom] = useState('');
    const [age, setAge] = useState('');
    const [diagnosed, setDiagnosed] = useState('');
    const [sex, setSex] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [alcoholConsumption, setAlcoholConsumption] = useState('');
    const [alcoholFrequency, setAlcoholFrequency] = useState('');
    const [medications, setMedications] = useState('');
    const [familyHistory, setFamilyHistory] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = {
            symptom,
            age,
            diagnosed,
            sex,
            weight,
            height,
            alcoholConsumption,
            alcoholFrequency,
            medications,
            familyHistory,
            diseaseName: "Migraine", // Hardcoded as per your example
            __v: 0 // Hardcoded as per your example
        };

        try {
            const response = await fetch('https://dirghaaayu.onrender.com/api/symptoms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setSubmitting(false);
            setSubmitted(true);
            setSymptom('');
            setAge('');
            setDiagnosed('');
            setSex('');
            setWeight('');
            setHeight('');
            setAlcoholConsumption('');
            setAlcoholFrequency('');
            setMedications('');
            setFamilyHistory('');
        } catch (error) {
            setError(error.message);
            setSubmitting(false);
        }
    };

    return (
        <div
            className="container mx-auto mt-8 p-8 bg-white bg-opacity-80 rounded-lg"
            style={{
                backgroundImage: 'url(https://mydovidka.com/wp-content/uploads/2019/01/alkogolnyjj_psikhoz:_simptomy,_prichiny,_vidy_i_lechenie344.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Typography variant="h5" gutterBottom>
                Enter Symptom Details
            </Typography>
            <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
                <TextField
                    label="Symptom"
                    value={symptom}
                    onChange={(e) => setSymptom(e.target.value)}
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField
                    select
                    label="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    variant="outlined"
                    fullWidth
                    required
                >
                    <MenuItem value="0-9">0-9</MenuItem>
                    <MenuItem value="10-19">10-19</MenuItem>
                    <MenuItem value="20-29">20-29</MenuItem>
                    <MenuItem value="30-39">30-39</MenuItem>
                </TextField>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Previously Diagnosed?</FormLabel>
                    <RadioGroup
                        aria-label="diagnosed"
                        name="diagnosed"
                        value={diagnosed}
                        onChange={(e) => setDiagnosed(e.target.value)}
                        row
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <TextField
                    select
                    label="Sex"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    variant="outlined"
                    fullWidth
                    required
                >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                </TextField>
                <TextField
                    label="Weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField
                    label="Height (feet)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    variant="outlined"
                    fullWidth
                    required
                />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Alcohol Consumption?</FormLabel>
                    <RadioGroup
                        aria-label="alcoholConsumption"
                        name="alcoholConsumption"
                        value={alcoholConsumption}
                        onChange={(e) => setAlcoholConsumption(e.target.value)}
                        row
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                {alcoholConsumption === 'Yes' && (
                    <TextField
                        select
                        label="Alcohol Frequency"
                        value={alcoholFrequency}
                        onChange={(e) => setAlcoholFrequency(e.target.value)}
                        variant="outlined"
                        fullWidth
                        required
                    >
                        <MenuItem value="Once a week">Once a week</MenuItem>
                        <MenuItem value="Regular">Regular</MenuItem>
                        <MenuItem value="Occasionally">Occasionally</MenuItem>
                    </TextField>
                )}
                <TextField
                    label="Medications"
                    value={medications}
                    onChange={(e) => setMedications(e.target.value)}
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    label="Family History"
                    value={familyHistory}
                    onChange={(e) => setFamilyHistory(e.target.value)}
                    variant="outlined"
                    fullWidth
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={submitting}
                >
                    {submitting ? <CircularProgress size={24} /> : 'Submit'}
                </Button>
                {error && (
                    <Typography variant="body2" color="error">
                        {error}
                    </Typography>
                )}
                {submitted && (
                    <Typography variant="body2" color="primary">
                        Data submitted successfully!
                    </Typography>
                )}
            </form>
        </div>
    );
};

export default SymptomForm;
