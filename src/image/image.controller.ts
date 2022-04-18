import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import * as multerS3 from 'multer-s3';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { ConfigService } from '@nestjs/config';

const s3 = new AWS.S3();

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET,
        acl: 'public-read',
        key: function (req, file, cb) {
          file.originalname = uuidv4();
          cb(
            null,
            `panoramas/${Date.now().toString()}-${file.originalname}-${
              file.fieldname
            }`,
          );
        },
      }),
      limits: {},
    }),
  )
  async uploadFile(@UploadedFiles() images) {
    console.log(process.env.AWS_S3_BUCKET);
    console.log(process.env.AWS_S3_REGION);
    console.log(process.env.AWS_S3_ACCESS_KEY);
    console.log(process.env.AWS_S3_SECRET_KEY);
    return this.imageService.uploadFile(images);
  }
}
