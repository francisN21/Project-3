import axios from "axios";

const API_URL = "http://localhost:5000";

// will be added soon once I have server working
export async function listEvents() {
  try {
    const response = await fetch(`${API_URL}/api/events`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
export async function listLocation() {
  try {
    const response = await fetch(`${API_URL}/api/location`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
export async function createEvent(data) {
  try {
    const create = await axios.post(`${API_URL}/api/location/`, data);
    console.log(create);
  } catch (e) {
    console.log(e);
  }
}
