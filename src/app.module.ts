import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PanoramasModule } from './panoramas/panoramas.module';
import { ImageModule } from './image/image.module';
import { InfospotsModule } from './infospots/infospots.module';

@Module({
  imports: [
    PanoramasModule,
    MongooseModule.forRoot('mongodb://localhost/molit-rnd'),
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
      isGlobal: true,
    }),
    ImageModule,
    InfospotsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
