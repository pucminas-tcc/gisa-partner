import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

async function getInstitutionTypeData(): Promise<
  Prisma.InstitutionTypeCreateInput[]
> {
  return [
    {
      name: 'Hospital',
      description: 'Tipo hospitalar',
    },
  ];
}

async function getMedicalProcedureData(): Promise<
  Prisma.MedicalProcedureCreateInput[]
> {
  return [
    {
      name: 'PCR Covid-19',
      description: 'Teste exame PCR para COVID-19',
    },
  ];
}

async function getInstitutionData(): Promise<Prisma.InstitutionCreateInput[]> {
  const institutionType = await prisma.institutionType.findFirst();
  return [
    {
      name: 'Hospital Boa Vida',
      description: 'Melhor hospital da região.',
      isActive: true,
      institutionType: { connect: { id: institutionType.id } },
    },
  ];
}

async function main() {
  console.log(`Start seeding institutionTypeData ...`);

  const institutionTypeData = await getInstitutionTypeData();

  for (const u of institutionTypeData) {
    const info = await prisma.institutionType.create({
      data: u,
    });
    console.log(`Created plan '${info.name}' with id: ${info.id}`);
  }

  console.log(`Start seeding institutionData ...`);

  const institutionData = await getInstitutionData();

  for (const u of institutionData) {
    const info = await prisma.institution.create({
      data: u,
    });
    console.log(`Created plan '${info.name}' with id: ${info.id}`);
  }

  console.log(`Start seeding medicalProcedureData ...`);

  const medicalProcedureData = await getMedicalProcedureData();

  for (const u of medicalProcedureData) {
    const info = await prisma.medicalProcedure.create({
      data: u,
    });
    console.log(`Created plan '${info.name}' with id: ${info.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
