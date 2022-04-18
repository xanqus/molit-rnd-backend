import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Panorama, PanoramaDocument } from './schemas/Panorama.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';

AWS.config.update({
  region: process.env.AWS_S3_REGION,
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_KEY,
});

@Injectable()
export class PanoramasService {
  constructor(
    @InjectModel(Panorama.name) private panoramaModel: Model<PanoramaDocument>,
    private configService: ConfigService,
  ) {}

  async getAll(): Promise<Panorama[]> {
    return await this.panoramaModel.find().exec();
  }

  async create(images, panoramaData): Promise<any> {
    const panoramaImageLinks = [];
    console.log('images', images);
    console.log('panoramaData', panoramaData);
    if (images !== undefined) {
      for (let i = 0; i < images.length; i++) {
        panoramaImageLinks.push({ photoURL: images[i].location });
      }
    }

    return await this.panoramaModel.insertMany(panoramaImageLinks);
  }
}
