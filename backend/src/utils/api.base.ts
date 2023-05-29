import axios from 'axios';

export class ApiBase {
  private client;

  constructor(baseURL, headers = {}) {
    this.client = axios.create({
      baseURL: baseURL,
      timeout: 5000,
      headers,
    });
  }

  async get(endpoint, queryParams = null) {
    const response = await this.client.get(
      endpoint,
      queryParams
        ? {
            params: queryParams,
          }
        : undefined,
    );
    return response.data;
  }

  async post(endpoint, data) {
    const response = await this.client.post(endpoint, data);
    return response.data;
  }

  async put(endpoint, data) {
    const response = await this.client.put(endpoint, data);
    return response.data;
  }

  async delete(endpoint) {
    const response = await this.client.delete(endpoint);
    return response.data;
  }
}
