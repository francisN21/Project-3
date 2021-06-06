// Require axios for the api calls
const axios = require("axios");

// Export the list events function that gets the events from the database
export async function listEvents() {
  try {
    const response = await fetch(`/api/location`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
// Export the create events function that lets user create an event
export async function createEvent(query) {
  try {
    const response = await axios.post(`/api/location/`, query);
  } catch (error) {
    console.log(error);
  }
}
// Function to delete the event from the database
export async function deleteEvent(query) {
  try {
    const response = await axios.delete(`/api/location/${query}`);
  } catch (error) {
    console.log(error);
  }
}
// Function to update the event, yeay CRUD functionality!
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
// Function to get the user to log in
export async function fetchUser() {
  try {
    const response = await fetch(`/api/user`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

// Function to update the user on the database, (not used yet)
export async function updateUser(query) {
  try {
    // console.log(query);
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

// Function to log in the user via post
export async function loginUser(login) {
  // console.log(login, "from API JS");
  return axios.post(`/api/login`, login);
}

// Function to log in the user via get
export async function loginInfo(login) {
  // console.log(login, "from API JS");
  return axios.get(`/api/login`, login);

}
