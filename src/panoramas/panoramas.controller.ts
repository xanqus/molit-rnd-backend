import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PanoramasService } from './panoramas.service';

@Controller('panoramas')
export class PanoramasController {
  constructor(private readonly panoramasService: PanoramasService) {}

  @Get()
  getAll() {
    return this.panoramasService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') panoramaId: string) {
    return `This will return one panorama with the id: ${panoramaId}`;
  }

  @Post()
  create(@Body() panoramaData) {
    console.log(panoramaData);
    return 'This will create a panorama';
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
