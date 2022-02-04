import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { InstitutionService } from './institution.service';

@Controller()
export class InstitutionController {
  private readonly logger = new Logger(InstitutionController.name);

  constructor(private readonly institutionService: InstitutionService) {}

  @MessagePattern({ cmd: 'institution.create' })
  private create(payload: any) {
    this.logger.log(payload);
    return this.institutionService.create(payload);
  }

  @MessagePattern({ cmd: 'institution.update' })
  private update(payload: any) {
    const { id } = payload;
    return this.institutionService.update({ where: { id }, data: payload });
  }

  @MessagePattern({ cmd: 'institution.remove' })
  private remove(payload: any) {
    const { id } = payload;
    return this.institutionService.delete({ id });
  }

  @MessagePattern({ cmd: 'institution.list' })
  private list(payload: any) {
    const { id } = payload;
    return this.institutionService.institution({ id });
  }

  @MessagePattern({ cmd: 'institution.all' })
  private all(payload: any) {
    return this.institutionService.institutions(payload);
  }
}
