import { Test, TestingModule } from '@nestjs/testing';
import { PanoramasController } from './panoramas.controller';

describe('PanoramasController', () => {
  let controller: PanoramasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PanoramasController],
    }).compile();

    controller = module.get<PanoramasController>(PanoramasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
