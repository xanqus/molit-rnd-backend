import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { PanoramasController } from './panoramas.controller';
import { PanoramasService } from './panoramas.service';
import { Panorama, PanoramaSchema } from './schemas/Panorama.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Panorama.name, schema: PanoramaSchema },
    ]),
  ],
  controllers: [PanoramasController],
  providers: [PanoramasService],
})
export class PanoramasModule {}
