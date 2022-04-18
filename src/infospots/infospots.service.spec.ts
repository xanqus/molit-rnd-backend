import { Test, TestingModule } from '@nestjs/testing';
import { InfospotsService } from './infospots.service';

describe('InfospotsService', () => {
  let service: InfospotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfospotsService],
    }).compile();

    service = module.get<InfospotsService>(InfospotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
