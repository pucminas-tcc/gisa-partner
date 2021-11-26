import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class InstitutionTypeService {
  private readonly logger = new Logger(InstitutionTypeService.name);

  constructor(private prisma: PrismaService) {}

  async create(data) {
    return this.prisma.institutionType.create({
      data,
    });
  }

  async institution(data) {
    return this.prisma.institutionType.findUnique({
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
    return this.prisma.institutionType.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async update(params: { where; data }) {
    const { where, data } = params;
    return this.prisma.institutionType.update({
      data,
      where,
    });
  }

  async delete(where) {
    return this.prisma.institutionType.delete({
      where,
    });
  }
}
