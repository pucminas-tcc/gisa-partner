import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class InstitutionService {
  private readonly logger = new Logger(InstitutionService.name);

  constructor(private prisma: PrismaService) {}

  async create(data) {
    return this.prisma.institution.create({
      data,
    });
  }

  async institution(data) {
    return this.prisma.institution.findUnique({
      where: data,
    });
  }

  async institutions(params: {
    skip?: number;
    take?: number;
    cursor?;
    where?;
    orderBy?;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.institution.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async update(params: { where; data }) {
    const { where, data } = params;
    return this.prisma.institution.update({
      data,
      where,
    });
  }

  async delete(where) {
    return this.prisma.institution.delete({
      where,
    });
  }
}
