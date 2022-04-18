import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Infospot, InfospotDocument } from './schemas/Infospot.schema';

@Injectable()
export class InfospotsService {
  constructor(
    @InjectModel(Infospot.name) private infospotModel: Model<InfospotDocument>,
  ) {}

  async getAll(): Promise<any> {
    return await this.infospotModel.find().exec();
  }

  async getInfospotsByPanoramaId(panoramaId) {
    return await this.infospotModel
      .find()
      .where('panoramaId')
      .equals(panoramaId);
  }

  async create(data) {
    const panoramaData = {};

    panoramaData['panoramaId'] = data.panoramaId;
    panoramaData['coordinateX'] = data.coordinateX;
    panoramaData['coordinateY'] = data.coordinateY;
    panoramaData['coordinateZ'] = data.coordinateZ;
    panoramaData['type'] = data.type;
    panoramaData['infospotText'] = data.infospotText;
    panoramaData['imageLink'] = data.imageLink;
    panoramaData['videoLink'] = data.videoLink;
    panoramaData['startPanoIndex'] = data.startPanoIndex;
    panoramaData['arrivePanoIndex'] = data.arrivePanoIndex;

    return await this.infospotModel.create(panoramaData);
  }
}
