import { Module } from '@nestjs/common';
import { InstitutionModule } from './institution/institution.module';
import { InstitutionTypeModule } from './institution-type/institution-type.module';
import { AssociateRecordModule } from './associate-record/associate-record.module';
import { MedicalProcedureModule } from './medical-procedure/medical-procedure.module';
import { MedicalProcedureAuthorizationModule } from './medical-procedure-authorization/medical-procedure-authorization.module';

@Module({
  imports: [InstitutionModule, InstitutionTypeModule, AssociateRecordModule, MedicalProcedureModule, MedicalProcedureAuthorizationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
