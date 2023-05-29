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

  public async getImage(id: number) {
    try {
      const allData = await this.getImagesList();
      if (allData?.error) return allData;
      return {
        result: allData?.result?.find((item) => item.id === id),
      };
    } catch (ex) {
      console.error('Images error:', ex); // I could prefer to use some logger lib for it, but to save some time I could skip this part
      return {
        error: ErrorsEnum.GetImageList,
      };
    }
  }

  public async getImagesList() {
    try {
      const data = await Promise.all(
        ['/photos', '/images'].map((path) => this.get(path)), // We may use /db instead
      );

      return {
        result: this.transformImages(data.flat(2)),
      };
    } catch (ex) {
      console.error('Images list error:', ex); // I could prefer to use some logger lib for it, but to save some time I could skip this part
      return {
        error: ErrorsEnum.GetImagesList,
      };
    }
  }

  public async createImage(data: IImage) {
    try {
      const result = await this.post('photos', data);
      return { result };
    } catch (ex) {
      console.error('Images list error:', ex); // I could prefer to use some logger lib for it, but to save some time I could skip this part
      return {
        error: ErrorsEnum.PostImagesList,
      };
    }
  }

  public async updateImage(id: number, data: IImage) {
    try {
      const result = await this.patch(`photos/${id}`, data);
      return { result };
    } catch (ex) {
      console.error('Images list error:', ex); // I could prefer to use some logger lib for it, but to save some time I could skip this part
      return {
        error: ErrorsEnum.PostImagesList,
      };
    }
  }

  public async deleteImage(id: number) {
    try {
      const result = await this.delete(`photos/${id}`);
      return { result };
    } catch (ex) {
      console.error('Images list error:', ex); // I could prefer to use some logger lib for it, but to save some time I could skip this part
      return {
        error: ErrorsEnum.PostImagesList,
      };
    }
  }
}
