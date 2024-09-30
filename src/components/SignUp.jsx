import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const SignUp = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [name, setName] = useState("John Doe"); // Default name
  const [email, setEmail] = useState("john.doe@example.com"); // Default email
  const [password, setPassword] = useState("password123"); // Default password
  const [userImage, setUserImage] = useState("https://example.com/path/to/image.jpg"); // Default user image URL

  const validateInputs = () => {
    if (!name || !email || !password || !userImage) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    setLoading(true);
    setButtonDisabled(true);
    if (validateInputs()) {
      try {
        const res = await axios.post("http://localhost:8080/api/user/signup", {
          fullname: name,
          email,
          password,
          userImage,
        });
        alert("Account Created Successfully");
        console.log("Response:", res.data);

        // Store user data in local storage
        localStorage.setItem("user", JSON.stringify(res.data)); // Store the response data (or user data)

        // Redirect to the homepage after successful signup
        navigate("/"); // Use navigate to go to the homepage

      } catch (err) {
        alert(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
        setButtonDisabled(false);
      }
    } else {
      setLoading(false);
      setButtonDisabled(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Create New Account 👋</h2>
        <p className="text-gray-600">Please enter your details to create a new account</p>
      </div>
      <div className="space-y-4">
        <input
          type="text"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="url"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="User Image URL"
          value={userImage}
          onChange={(e) => setUserImage(e.target.value)}
        />
        <button
          onClick={handleSignUp}
          disabled={buttonDisabled}
          className={`w-full p-3 mt-4 text-white bg-blue-600 rounded-md focus:outline-none ${
            buttonDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default SignUp;
