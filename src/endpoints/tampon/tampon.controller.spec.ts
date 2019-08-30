import { Test, TestingModule } from '@nestjs/testing';
import { TamponController } from './tampon.controller';

describe('Tampon Controller', () => {
  let controller: TamponController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TamponController],
    }).compile();

    controller = module.get<TamponController>(TamponController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
