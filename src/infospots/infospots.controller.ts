import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { InfospotsService } from './infospots.service';

@Controller('infospots')
export class InfospotsController {
  constructor(private readonly infospotsService: InfospotsService) {}

  @Get()
  async getAll() {
    return await this.infospotsService.getAll();
  }

  @Get('/:id')
  async getInfospotsByPanoramaId(@Param('id') panoramaId: string) {
    return await this.infospotsService.getInfospotsByPanoramaId(panoramaId);
  }

  @Post()
  async create(@Body() infospotData) {
    return await this.infospotsService.create(infospotData);
  }
}
