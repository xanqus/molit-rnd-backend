import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PanoramasModule } from './panoramas/panoramas.module';

@Module({
  imports: [PanoramasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
