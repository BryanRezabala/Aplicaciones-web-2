import { Test, TestingModule } from '@nestjs/testing';
import { AprendizajeController } from './aprendizaje.controller';
import { AprendizajeService } from './aprendizaje.service';

describe('AprendizajeController', () => {
  let controller: AprendizajeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AprendizajeController],
      providers: [AprendizajeService],
    }).compile();

    controller = module.get<AprendizajeController>(AprendizajeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
