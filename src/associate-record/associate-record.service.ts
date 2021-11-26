import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AssociateRecordService {
  private readonly logger = new Logger(AssociateRecordService.name);

  constructor(private prisma: PrismaService) {}

  async create(data) {
    return this.prisma.associateRecord.create({
      data,
    });
  }

  async associateRecord(data) {
    return this.prisma.associateRecord.findUnique({
      where: data,
    });
  }

  async associateRecords(params: {
    skip?: number;
    take?: number;
    cursor?;
    where?;
    orderBy?;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.associateRecord.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async update(params: { where; data }) {
    const { where, data } = params;
    return this.prisma.associateRecord.update({
      data,
      where,
    });
  }

  async delete(where) {
    return this.prisma.associateRecord.delete({
      where,
    });
  }
}
