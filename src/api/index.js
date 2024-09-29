// src/api.js
import axios from "axios";

// Create an instance of axios with a base URL
const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// Function to handle user signup
export const UserSignUp = async (data) => 
  API.post("/user/signup", data);

// Function to handle user signin
export const UserSignIn = async (data) => 
  API.post("/user/signin", data);

// Function to get user by ID
export const getUserById = async (id) => 
  API.get(`/user/${id}`);

// Function to update user
export const updateUser = async (id, data) => 
  API.put(`/user/${id}`, data);

// Function to delete user
export const deleteUser = async (id) => 
  API.delete(`/user/${id}`);

// Function to get all users (if needed)
export const getAllUsers = async () => 
  API.get('/user');
