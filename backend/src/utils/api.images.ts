import { ApiBase } from './api.base';

const API_URL = process.env.API_URL;

export class ApiImages extends ApiBase {
  constructor() {
    super(API_URL, {});
  }
}
