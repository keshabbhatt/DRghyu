import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PeopleIcon from '@mui/icons-material/People';
import './HomePage.css'; // Make sure the CSS file is correctly set up

const AboutDirghaayu = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        About Dirghaaayu
      </Typography>
      <Typography variant="body1" paragraph>
        Dirghaaayu is a leading health and wellness provider located in Mahendranagar, Nepal.
        We are dedicated to helping individuals achieve optimal health through personalized care and education.
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
        <Avatar
          alt="Jane Doe"
          src="https://res.cloudinary.com/dvyz4mpfn/image/upload/v1727541427/vuovqykax0yxm2djqbyo.jpg"
          sx={{ width: 100, height: 100 }}
        />
         <Avatar
          alt="Jane Doe"
          src="https://res.cloudinary.com/dvyz4mpfn/image/upload/v1727541540/xtvbjet6gzalyt07ijdt.jpg"
          sx={{ width: 100, height: 100 }}
        />
         <Avatar
          alt="Jane Doe"
          src="https://res.cloudinary.com/dvyz4mpfn/image/upload/v1727541686/hnfm0aqk1gkmww24mqnf.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <Avatar
          alt="Jane Doe"
          src="https://res.cloudinary.com/dvyz4mpfn/image/upload/v1727541873/oli7nej5yjewxsdfhjmr.jpg"
          sx={{ width: 100, height: 100 }}
        />
        
        <Box sx={{ marginLeft: '1rem' }}>
          <Typography variant="h6">Jane Doe - Chairman</Typography>
          <Typography variant="body2">Dirghaaayu, Mahendranagar, Nepal</Typography>
        </Box>
      </Box>

      <Box sx={{ margin: '2rem 0' }}>
        <PeopleIcon fontSize="large" />
        <Typography variant="body1" paragraph>
          Our team of experts is committed to empowering our community by offering comprehensive health services and valuable resources. 
          We strive to create a supportive environment where individuals can thrive and embrace a healthier lifestyle.
        </Typography>
      </Box>

      <Box sx={{ margin: '2rem 0' }}>
        <LocalDiningIcon fontSize="large" />
        <Typography variant="h6">Nutrition Counseling</Typography>
        <Typography variant="body1" paragraph>
          Our nutrition experts will guide you in creating a personalized plan to meet your dietary needs and goals.
        </Typography>
      </Box>

      <Box sx={{ margin: '2rem 0' }}>
        <FitnessCenterIcon fontSize="large" />
        <Typography variant="h6">Fitness Programs</Typography>
        <Typography variant="body1" paragraph>
          We offer a range of fitness programs to help individuals stay active and healthy.
        </Typography>
      </Box>
    </Box>
  );
};

const HomePage = () => {
  return (
    <div>
      {/* Doctor Background Image Section with Text and Icons */}
      <div className="relative h-screen bg-cover bg-center flex flex-col justify-center items-start text-white animate-background">
        {/* Main Headline - Left Aligned */}
        <div className="relative pl-16 md:pl-24">
          <h1 className="text-5xl font-bold leading-none text-green-500">True Healthcare</h1>
          <h1 className="text-5xl font-bold mt-1 text-green-500">For Your Family</h1>
          <p className="mt-4 text-lg max-w-lg text-black">
            The health and well-being of our patients and their healthcare team will always be our priority.
            We follow the best practices for cleanliness.
          </p>
        </div>

        {/* Icons Section */}
        <div className="relative pl-16 md:pl-24 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Icon 1: Examination */}
            <div className="text-center">
              <div className="bg-gray-100 p-2 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-vector/heart-shaped-stethoscope-listening-heart_78370-963.jpg"
                  alt="Examination Icon"
                  className="w-8 h-8"
                />
              </div>
              <p className="mt-2 text-sm font-semibold text-red-600">Examination</p>
            </div>

            {/* Icon 2: Prescription */}
            <div className="text-center">
              <div className="bg-gray-100 p-2 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/021/164/719/original/3d-doctor-prescription-icon-or-patient-report-paper-icon-free-png.png"
                  alt="Prescription Icon"
                  className="w-8 h-8"
                />
              </div>
              <p className="mt-2 text-sm font-semibold text-red-600">Prescription</p>
            </div>

            {/* Icon 3: Cardiogram */}
            <div className="text-center">
              <div className="bg-gray-100 p-2 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <img
                  src="https://th.bing.com/th/id/OIP.aw-EAsoU--IVurXmQl4tfQAAAA?rs=1&pid=ImgDetMain"
                  alt="Cardiogram Icon"
                  className="w-8 h-8"
                />
              </div>
              <p className="mt-2 text-sm font-semibold text-red-600">Cardiogram</p>
            </div>

            {/* Icon 4: Blood Pressure */}
            <div className="text-center">
              <div className="bg-gray-100 p-2 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <img
                  src="https://www.shutterstock.com/image-vector/blood-pressure-measuring-600nw-466434518.jpg"
                  alt="Blood Pressure Icon"
                  className="w-8 h-8"
                />
              </div>
              <p className="mt-2 text-sm font-semibold text-red-600">Blood Pressure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-16">
        {/* Emergency Cases Card */}
        <div className="bg-blue-400 p-8 rounded-lg shadow-lg h-64 flex flex-col justify-between relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <img src="https://img.icons8.com/ios-filled/50/000000/ambulance.png" alt="Emergency Icon" />
          </div>
          <h3 className="text-xl font-bold mt-8">Emergency Cases</h3>
          <p className="mt-2">Please feel free to contact us at <br />+9805762636</p>
        </div>

        {/* Doctors Timetable Card */}
        <div className="bg-blue-400 p-8 rounded-lg shadow-lg h-64 flex flex-col justify-between relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <img src="https://img.icons8.com/ios-filled/50/000000/doctor-male.png" alt="Doctor Icon" />
          </div>
          <h3 className="text-xl font-bold mt-8">Doctors Timetable</h3>
          <p className="mt-2">Qualified doctors available at all time. Feel free to contact them.</p>
        </div>

        {/* Opening Hours Card */}
        <div className="bg-blue-400 p-9 rounded-lg shadow-lg h-70 flex flex-col justify-between relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <img src="https://th.bing.com/th/id/OIP.8SzR-TAIFIFko3SYqUD5PwHaH_?rs=1&pid=ImgDetMain" alt="Lab Icon" />
          </div>
          <h3 className="text-xl font-bold mt-8">Lab Report & Symptom Check</h3>
          <p className="mt-2">Just click and easily <br /> check your lab report at home.</p>
        </div>

        {/* Location & Directions Card */}
        <div className="bg-blue-400 p-8 rounded-lg shadow-lg h-64 flex flex-col justify-between relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <img src="https://img.icons8.com/ios-filled/50/000000/marker.png" alt="Location Icon" />
          </div>
          <h3 className="text-xl font-bold mt-8">Location & Directions</h3>
          <p className="mt-2">Mahendranagar, Kanchanpur, Nepal</p>
        </div>
      </div>

      {/* About Dirghaaayu Section */}
      <AboutDirghaayu />
    </div>
  );
};

export default HomePage;
