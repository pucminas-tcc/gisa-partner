import { Controller, Logger } from '@nestjs/common';
import { AssociateRecordService } from './associate-record.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AssociateRecordController {
  private readonly logger = new Logger(AssociateRecordController.name);

  constructor(
    private readonly associateRecordService: AssociateRecordService,
  ) {}

  @MessagePattern({ cmd: 'associate-record.create' })
  create(payload: any) {
    this.logger.log(payload);
    return this.associateRecordService.create(payload);
  }

  @MessagePattern({ cmd: 'associate-record.update' })
  update(payload: any) {
    const { id } = payload;
    return this.associateRecordService.update({ where: { id }, data: payload });
  }

  @MessagePattern({ cmd: 'associate-record.remove' })
  remove(payload: any) {
    const { id } = payload;
    return this.associateRecordService.delete({ id });
  }

  @MessagePattern({ cmd: 'associate-record.list' })
  list(payload: any) {
    const { id } = payload;
    return this.associateRecordService.associateRecord({ id });
  }

  @MessagePattern({ cmd: 'associate-record.all' })
  all(payload: any) {
    return this.associateRecordService.associateRecords(payload);
  }
}
