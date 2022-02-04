import { Controller, Logger } from '@nestjs/common';
import { MedicalProcedureAuthorizationService } from './medical-procedure-authorization.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MedicalProcedureAuthorizationController {
  private readonly logger = new Logger(
    MedicalProcedureAuthorizationController.name,
  );

  constructor(
    private readonly medicalProcedureAuthorizationService: MedicalProcedureAuthorizationService,
  ) {}

  @MessagePattern({ cmd: 'medical-procedure-authorization.create' })
  private create(payload: any) {
    this.logger.log(payload);
    return this.medicalProcedureAuthorizationService.create(payload);
  }

  @MessagePattern({ cmd: 'medical-procedure-authorization.update' })
  private update(payload: any) {
    const { id } = payload;
    return this.medicalProcedureAuthorizationService.update({
      where: { id },
      data: payload,
    });
  }

  @MessagePattern({ cmd: 'medical-procedure-authorization.remove' })
  private remove(payload: any) {
    const { id } = payload;
    return this.medicalProcedureAuthorizationService.delete({ id });
  }

  @MessagePattern({ cmd: 'medical-procedure-authorization.list' })
  private list(payload: any) {
    const { id } = payload;
    return this.medicalProcedureAuthorizationService.medicalProcedureAuthorization(
      { id },
    );
  }

  @MessagePattern({ cmd: 'medical-procedure-authorization.all' })
  private all(payload: any) {
    return this.medicalProcedureAuthorizationService.medicalProcedureAuthorizations(
      payload,
    );
  }
}
