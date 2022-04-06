import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PanoramasController } from './panoramas.controller';
import { PanoramasService } from './panoramas.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/molit-rnd')],

  controllers: [PanoramasController],
  providers: [PanoramasService],
})
export class PanoramasModule {}
