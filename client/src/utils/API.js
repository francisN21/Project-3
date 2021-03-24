// import axios from "axios";

// const API_URL = process.env.PORT || "http://localhost:5000";
const axios = require("axios");

// will be added soon once I have server working
export async function listEvents() {
  try {
    const response = await fetch(`/api/location`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
export async function createEvent(query) {
  try {
    const response = await axios.post(`/api/location/`, query);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteEvent(query) {
  try {
    const response = await axios.delete(`/api/location/${query}`);
  } catch (error) {
    console.log(error);
  }
}

export async function updateEvent(query) {
  try {
    const response = await axios.put(
      `/api/location/${query._id}`,
      query
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUser() {
  try {
    const response = await fetch(`/api/user`);
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
//   axios.post(`/api/user/update`, query);
//   const response = await fetch(`/api/user/update`, {
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
export async function updateUser(query) {
  try {
    console.log(query);
    axios.post(`/api/user/update`, query);
    const response = await fetch(`/api/user/update`, {
      method: "POST",
      body: JSON.stringify(query),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function loginUser(login) {
  console.log(login, "from API JS");
  return axios.post(`/api/login`, login);
  // const response = await fetch(`/api/login`, {
  //   method: "POST",
  //   body: JSON.stringify(login),
  // });
  // return response.json();
}

export async function loginInfo(login) {
  console.log(login, "from API JS");
  return axios.get(`/api/login`, login);
  // const response = await fetch(`/api/login`, {
  //   method: "POST",
  //   body: JSON.stringify(login),
  // });
  // return response.json();
}
