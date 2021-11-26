import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MedicalProcedureService {
  private readonly logger = new Logger(MedicalProcedureService.name);

  constructor(private prisma: PrismaService) {}

  async create(data) {
    return this.prisma.medicalProcedure.create({
      data,
    });
  }

  async medicalProcedure(data) {
    return this.prisma.medicalProcedure.findUnique({
      where: data,
    });
  }

  async medicalProcedures(params: {
    skip?: number;
    take?: number;
    cursor?;
    where?;
    orderBy?;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.medicalProcedure.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async update(params: { where; data }) {
    const { where, data } = params;
    return this.prisma.medicalProcedure.update({
      data,
      where,
    });
  }

  async delete(where) {
    return this.prisma.medicalProcedure.delete({
      where,
    });
  }
}
