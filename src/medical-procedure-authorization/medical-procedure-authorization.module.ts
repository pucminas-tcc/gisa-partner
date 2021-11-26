import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MedicalProcedureAuthorizationController } from './medical-procedure-authorization.controller';
import { MedicalProcedureAuthorizationService } from './medical-procedure-authorization.service';

@Module({
  controllers: [MedicalProcedureAuthorizationController],
  providers: [MedicalProcedureAuthorizationService, PrismaService],
})
export class MedicalProcedureAuthorizationModule {}
