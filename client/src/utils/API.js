import axios from "axios";

const API_URL = "http://localhost:5000";
const axios = require("axios");

// will be added soon once I have server working

async function listEvents() {
  const response = await fetch(`${API_URL}/api/events`);
  return response.json();
}

async function createEvent() {
  const response = await fetch(`${API_URL}/api/events`);
  return response.json();


async function fetchUser() {
  const response = await fetch(`${API_URL}/api/user`);
  return response.json();
}

async function loginUser(login) {
  axios.post(`${API_URL}/api/login`, login);
  // const response = await fetch(`${API_URL}/api/login`, {
  //   method: "POST",
  //   body: JSON.stringify(login),
  // });
  // return response.json();
}

module.exports = { listEvents, createEvent, fetchUser, loginUser };
