import { Module } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { InstitutionController } from './institution.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [InstitutionService, PrismaService],
  controllers: [InstitutionController],
})
export class InstitutionModule {}
