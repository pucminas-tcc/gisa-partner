import { Controller, Logger } from '@nestjs/common';
import { MedicalProcedureService } from './medical-procedure.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MedicalProcedureController {
  private readonly logger = new Logger(MedicalProcedureController.name);

  constructor(
    private readonly medicalProcedureService: MedicalProcedureService,
  ) {}

  @MessagePattern({ cmd: 'medical-procedure.create' })
  create(payload: any) {
    this.logger.log(payload);
    return this.medicalProcedureService.create(payload);
  }

  @MessagePattern({ cmd: 'medical-procedure.update' })
  update(payload: any) {
    const { id } = payload;
    return this.medicalProcedureService.update({
      where: { id },
      data: payload,
    });
  }

  @MessagePattern({ cmd: 'medical-procedure.remove' })
  remove(payload: any) {
    const { id } = payload;
    return this.medicalProcedureService.delete({ id });
  }

  @MessagePattern({ cmd: 'medical-procedure.list' })
  list(payload: any) {
    const { id } = payload;
    return this.medicalProcedureService.medicalProcedure({ id });
  }

  @MessagePattern({ cmd: 'medical-procedure.all' })
  all(payload: any) {
    return this.medicalProcedureService.medicalProcedures(payload);
  }
}
