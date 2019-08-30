import { Test, TestingModule } from '@nestjs/testing';
import { TamponService } from './tampon.service';

describe('TamponService', () => {
  let service: TamponService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TamponService],
    }).compile();

    service = module.get<TamponService>(TamponService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
