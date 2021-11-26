import { Test, TestingModule } from '@nestjs/testing';
import { AssociateRecordService } from './associate-record.service';

describe('AssociateRecordService', () => {
  let service: AssociateRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociateRecordService],
    }).compile();

    service = module.get<AssociateRecordService>(AssociateRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
