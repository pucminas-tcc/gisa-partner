import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MedicalProcedureController } from './medical-procedure.controller';
import { MedicalProcedureService } from './medical-procedure.service';

@Module({
  controllers: [MedicalProcedureController],
  providers: [MedicalProcedureService, PrismaService],
})
export class MedicalProcedureModule {}
