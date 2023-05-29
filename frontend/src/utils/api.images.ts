import { ApiBase } from "./api.base";

const API_URL = "http://localhost:3000/"; // HARDCODE TIME!!!

export class ApiImages extends ApiBase {
  constructor() {
    super(API_URL, {});
  }

  public async getImagesList() {
    try {
      const data = await this.get("/");
      return data.result;
    } catch (ex) {
      console.error("Images list error:", ex); // I could prefer to use some logger lib for it, but to save some time I could skip this part
    }
  }
}
