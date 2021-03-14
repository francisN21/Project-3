import axios from "axios";
const API_URL = "http://localhost:5000";

// will be added soon once I have server working
export async function listEvents() {
  const response = await fetch(`${API_URL}/api/location`);
  return response.json();
}

export async function createEvent() {
  const response = await fetch(`${API_URL}/api/location`);
  console.log(response)
  return response.json();
}
export async function fetchUser() {
  const response = await fetch(`${API_URL}/api/user`);
  return response.json();
}
//How to call update:
//  var query = {
// You can change description to any parameter you want to update, or include an array of multiple params
//  username: "Ferris Wheel",
//  query: { description: "Does this work?" },
//};
//updateEvent(query);
export async function updateUser(query) {
  console.log(query);
  axios.post(`${API_URL}/api/user/update`, query);
  const response = await fetch(`${API_URL}/api/user/update`, {
    method: "POST",
    body: JSON.stringify(query),
  });
  return response.json();
}
//How to call update:
//  var query = {
// You can change description to any parameter you want to update, or include an array of multiple params
//  username: "Ferris Wheel",
//  query: { description: "Does this work?" },
//};
//updateEvent(query);
export async function updateUser(query) {
  console.log(query);
  axios.post(`${API_URL}/api/user/update`, query);
  const response = await fetch(`${API_URL}/api/user/update`, {
    method: "POST",
    body: JSON.stringify(query),
  });
  return response.json();
}

export async function loginUser(login) {
  axios.post(`${API_URL}/api/login`, login);
  // const response = await fetch(`${API_URL}/api/login`, {
  //   method: "POST",
  //   body: JSON.stringify(login),
  // });
  // return response.json();
}
