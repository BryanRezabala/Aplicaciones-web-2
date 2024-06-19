import { Test, TestingModule } from '@nestjs/testing';
import { AprendizajeService } from './aprendizaje.service';

describe('AprendizajeService', () => {
  let service: AprendizajeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AprendizajeService],
    }).compile();

    service = module.get<AprendizajeService>(AprendizajeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
