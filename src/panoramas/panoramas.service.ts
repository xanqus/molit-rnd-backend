import { Injectable } from '@nestjs/common';
import { Panorama } from './entities/Panorama.entity';

@Injectable()
export class PanoramasService {
  private panoramas: Panorama[] = [{ id: 1 }, { id: 2 }];

  getAll(): Panorama[] {
    return this.panoramas;
  }
}
