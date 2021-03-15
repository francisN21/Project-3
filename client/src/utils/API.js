// import axios from "axios";

const API_URL = "http://localhost:5000";
const axios = require("axios");

// will be added soon once I have server working
async function listEvents() {
  try {
    const response = await fetch(`${API_URL}/api/location`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
async function createEvent(query) {
  try {
    const response = await axios.post(`${API_URL}/api/location`, query);
  } catch (error) {
    console.log(error);
  }
}

async function deleteEvent(query) {
  try {
    const response = await axios.delete(`${API_URL}/api/location/${query}`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchUser() {
  try {
    const response = await fetch(`${API_URL}/api/user`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
//How to call update:
//  var query = {
// You can change description to any parameter you want to update, or include an array of multiple params
//  username: "Ferris Wheel",
//  query: { description: "Does this work?" },
//};
//updateEvent(query);
// export async function updateUser(query) {
//   console.log(query);
//   axios.post(`${API_URL}/api/user/update`, query);
//   const response = await fetch(`${API_URL}/api/user/update`, {
//     method: "POST",
//     body: JSON.stringify(query),
//   });
//   return response.json();
// }
//How to call update:
//  var query = {
// You can change description to any parameter you want to update, or include an array of multiple params
//  username: "Ferris Wheel",
//  query: { description: "Does this work?" },
//};
//updateEvent(query);
async function updateUser(query) {
  try {
    console.log(query);
    axios.post(`${API_URL}/api/user/update`, query);
    const response = await fetch(`${API_URL}/api/user/update`, {
      method: "POST",
      body: JSON.stringify(query),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

async function loginUser(login) {
  // axios.post(`${API_URL}/api/login`, login);
  const response = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    body: JSON.stringify(login),
  });
  return response.json();
}

module.exports = {
  listEvents,
  createEvent,
  deleteEvent,
  fetchUser,
  updateUser,
  loginUser,
};
