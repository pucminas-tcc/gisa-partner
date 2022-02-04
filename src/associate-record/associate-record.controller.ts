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
  private create(payload: any) {
    this.logger.log(payload);
    return this.associateRecordService.create(payload);
  }

  @MessagePattern({ cmd: 'associate-record.update' })
  private update(payload: any) {
    const { id } = payload;
    return this.associateRecordService.update({ where: { id }, data: payload });
  }

  @MessagePattern({ cmd: 'associate-record.remove' })
  private remove(payload: any) {
    const { id } = payload;
    return this.associateRecordService.delete({ id });
  }

  @MessagePattern({ cmd: 'associate-record.list' })
  private list(payload: any) {
    const { id } = payload;
    return this.associateRecordService.associateRecord({ id });
  }

  @MessagePattern({ cmd: 'associate-record.all' })
  private all(payload: any) {
    return this.associateRecordService.associateRecords(payload);
  }
}
