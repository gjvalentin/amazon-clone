import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-7abac.cloudfunctions.net/api",
  // "http://localhost:5001/clone-7abac/us-central1/api", // THE API (cloud function) URL
});

export default instance;
