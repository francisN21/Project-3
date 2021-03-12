const API_URL = "http://localhost:5000";

// will be added soon once I have server working
export async function listEvents() {
  const response = await fetch(`${API_URL}/api/events`);
  return response.json();
}

export async function createEvent() {
  const response = await fetch(`${API_URL}/api/events`);
  return response.json();
}
