import axios from "axios";
import { IImage } from "./interfaces";

// Basically I could prefer to organize shared code into dedicated module, but just to save some time...You know.
export class ApiBase {
  private client;

  constructor(baseURL: string, headers = {}) {
    this.client = axios.create({
      baseURL: baseURL,
      timeout: 5000,
      headers,
    });
  }

  async get(endpoint: string, queryParams = null) {
    const response = await this.client.get(
      endpoint,
      queryParams
        ? {
            params: queryParams,
          }
        : undefined
    );
    return response.data;
  }

  async post(endpoint: string, data: IImage) {
    const response = await this.client.post(endpoint, data);
    return response.data;
  }

  async put(endpoint: string, data: IImage) {
    const response = await this.client.put(endpoint, data);
    return response.data;
  }

  async patch(endpoint: string, data: IImage) {
    const response = await this.client.patch(endpoint, data);
    return response.data;
  }

  async delete(endpoint: string) {
    const response = await this.client.delete(endpoint);
    return response.data;
  }
}
