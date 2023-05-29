import { Injectable } from '@nestjs/common';
import { ApiImages } from 'src/utils/api.images';
import { IImage } from 'src/utils/interfaces';

const api = new ApiImages();
@Injectable()
export class ImagesService {
  create(data: IImage) {
    return api.createImage(data);
  }

  findAll() {
    return api.getImagesList();
  }

  findOne(id: number) {
    return api.getImage(id);
  }

  update(id: number, data: IImage) {
    return api.updateImage(id, data);
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
