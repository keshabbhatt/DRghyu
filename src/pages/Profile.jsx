import React, { useEffect, useState } from 'react';
import { getUserById } from '../api';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem("userId"); // Make sure this is set correctly
        if (!userId) {
          throw new Error("User ID is not defined");
        }
        const response = await getUserById(userId);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
        setError(error.message);
      }
    };

    fetchUser();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
      {/* Display other user information */}
    </div>
  );
};

export default Profile;
