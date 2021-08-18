import axios from "axios";
import { authKey } from "../authKey";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: authKey.access_id,
  },
});
