import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AssociateRecordController } from './associate-record.controller';
import { AssociateRecordService } from './associate-record.service';

@Module({
  controllers: [AssociateRecordController],
  providers: [PrismaService, AssociateRecordService],
})
export class AssociateRecordModule {}
