import { Test, TestingModule } from '@nestjs/testing';
import { MedicalProcedureAuthorizationService } from './medical-procedure-authorization.service';

describe('MedicalProcedureAuthorizationService', () => {
  let service: MedicalProcedureAuthorizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalProcedureAuthorizationService],
    }).compile();

    service = module.get<MedicalProcedureAuthorizationService>(MedicalProcedureAuthorizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
