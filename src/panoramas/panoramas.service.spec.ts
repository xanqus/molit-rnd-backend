import { Test, TestingModule } from '@nestjs/testing';
import { PanoramasService } from './panoramas.service';

describe('PanoramasService', () => {
  let service: PanoramasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PanoramasService],
    }).compile();

    service = module.get<PanoramasService>(PanoramasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
