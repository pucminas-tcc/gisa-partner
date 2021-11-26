import { Module } from '@nestjs/common';
import { InstitutionTypeService } from './institution-type.service';
import { InstitutionTypeController } from './institution-type.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [InstitutionTypeService, PrismaService],
  controllers: [InstitutionTypeController],
})
export class InstitutionTypeModule {}
