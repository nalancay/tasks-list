import axios from "axios";

export default class Elements {
  static async getElements() {
    const urlEndpoint = `https://6172cfe5110a740017222e2b.mockapi.io/elements`;

    const response = await axios.get(urlEndpoint);
    return response.data;
  }
}
