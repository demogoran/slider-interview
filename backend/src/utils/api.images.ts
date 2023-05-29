import { ApiBase } from './api.base';
import { ErrorsEnum } from './enums';
import { IImage } from './interfaces';

const API_URL = process.env.API_URL;

export class ApiImages extends ApiBase {
  constructor() {
    super(API_URL, {});
  }

  public transformImages(data: IImage[]) {
    return data.map(({ albumId, id, title, url, path, thumbnailUrl }) => {
      return {
        albumId,
        id,
        title,
        thumbnailUrl,
        url: path || url,
      };
    });
  }

  public async getImagesList() {
    try {
      const data = await Promise.all(
        ['/photos', '/images'].map((path) => this.get(path)),
      );

      return this.transformImages(data?.flat());
    } catch (ex) {
      console.error('Images list error:', ex); // I could prefer to use some logger lib for it, but to save some time I could skip this part
      return {
        error: ErrorsEnum.GetImagesList,
      };
    }
  }
}
