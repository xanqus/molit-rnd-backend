import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PanoramasService } from './panoramas.service';
import * as multerS3 from 'multer-s3';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const s3 = new AWS.S3();

@Controller('panoramas')
export class PanoramasController {
  constructor(private readonly panoramasService: PanoramasService) {}

  @Get()
  async getAll() {
    return await this.panoramasService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') panoramaId: string) {
    return `This will return one panorama with the id: ${panoramaId}`;
  }

  @Post()
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
  async create(@UploadedFiles() images, @Body() panoramaData) {
    console.log(panoramaData);
    return this.panoramasService.create(images, panoramaData);
  }

  @Delete('/:id')
  remove(@Param('id') panoramaId: string) {
    return `This will remove a panorama with the id: ${panoramaId}`;
  }

  @Patch('/:id')
  patch(@Param('id') panoramaId: string) {
    return `This will patch a movie with the id: ${panoramaId}`;
  }
}
