import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { InfospotsService } from './infospots.service';
import { InfospotsController } from './infospots.controller';
import { Infospot, InfospotSchema } from './schemas/Infospot.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Infospot.name, schema: InfospotSchema },
    ]),
  ],
  providers: [InfospotsService],
  controllers: [InfospotsController],
})
export class InfospotsModule {}
