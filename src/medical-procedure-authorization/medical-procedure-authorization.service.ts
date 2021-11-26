import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MedicalProcedureAuthorizationService {
  private readonly logger = new Logger(
    MedicalProcedureAuthorizationService.name,
  );

  constructor(private prisma: PrismaService) {}

  async create(data) {
    return this.prisma.medicalProcedureAuthorization.create({
      data,
    });
  }

  async medicalProcedureAuthorization(data) {
    return this.prisma.medicalProcedureAuthorization.findUnique({
      where: data,
    });
  }

  async medicalProcedureAuthorizations(params: {
    skip?: number;
    take?: number;
    cursor?;
    where?;
    orderBy?;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.medicalProcedureAuthorization.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async update(params: { where; data }) {
    const { where, data } = params;
    return this.prisma.medicalProcedureAuthorization.update({
      data,
      where,
    });
  }

  async delete(where) {
    return this.prisma.medicalProcedureAuthorization.delete({
      where,
    });
  }
}
