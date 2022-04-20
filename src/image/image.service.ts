import { Injectable, UseInterceptors } from '@nestjs/common';
import * as multerS3 from 'multer-s3';
import * as AWS from 'aws-sdk';
import * as dotenv from 'dotenv';
dotenv.config();

AWS.config.update({
  region: process.env.AWS_S3_REGION,
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_KEY,
});

@Injectable()
export class ImageService {
  async uploadFile(files) {
    console.log(files);
    return 'success';
  }
}
