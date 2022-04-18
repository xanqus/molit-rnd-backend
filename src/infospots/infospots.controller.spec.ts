import { Test, TestingModule } from '@nestjs/testing';
import { InfospotsController } from './infospots.controller';

describe('InfospotsController', () => {
  let controller: InfospotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfospotsController],
    }).compile();

    controller = module.get<InfospotsController>(InfospotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
