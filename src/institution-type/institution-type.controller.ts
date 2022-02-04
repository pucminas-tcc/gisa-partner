import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { InstitutionTypeService } from './institution-type.service';

@Controller()
export class InstitutionTypeController {
  private readonly logger = new Logger(InstitutionTypeController.name);

  constructor(
    private readonly institutionTypeService: InstitutionTypeService,
  ) {}

  @MessagePattern({ cmd: 'institution-type.create' })
  private create(payload: any) {
    this.logger.log(payload);
    return this.institutionTypeService.create(payload);
  }

  @MessagePattern({ cmd: 'institution-type.update' })
  private update(payload: any) {
    const { id } = payload;
    return this.institutionTypeService.update({ where: { id }, data: payload });
  }

  @MessagePattern({ cmd: 'institution-type.remove' })
  private remove(payload: any) {
    const { id } = payload;
    return this.institutionTypeService.delete({ id });
  }

  @MessagePattern({ cmd: 'institution-type.list' })
  private list(payload: any) {
    const { id } = payload;
    return this.institutionTypeService.institution({ id });
  }

  @MessagePattern({ cmd: 'institution-type.all' })
  private all(payload: any) {
    return this.institutionTypeService.institutions(payload);
  }
}
