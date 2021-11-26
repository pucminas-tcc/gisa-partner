-- CreateTable
CREATE TABLE "Institution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "institutionTypeId" TEXT NOT NULL,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstitutionType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "InstitutionType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssociateRecord" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "associateId" TEXT NOT NULL,
    "institutionId" TEXT NOT NULL,
    "medicalProcedureId" TEXT NOT NULL,
    "colaboradorId" TEXT NOT NULL,

    CONSTRAINT "AssociateRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalProcedure" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "MedicalProcedure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalProcedureAuthorization" (
    "id" TEXT NOT NULL,
    "institutionId" TEXT NOT NULL,
    "associateId" TEXT NOT NULL,
    "medicalProcedureId" TEXT NOT NULL,
    "isAuthorized" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MedicalProcedureAuthorization_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_institutionTypeId_fkey" FOREIGN KEY ("institutionTypeId") REFERENCES "InstitutionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssociateRecord" ADD CONSTRAINT "AssociateRecord_medicalProcedureId_fkey" FOREIGN KEY ("medicalProcedureId") REFERENCES "MedicalProcedure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssociateRecord" ADD CONSTRAINT "AssociateRecord_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalProcedureAuthorization" ADD CONSTRAINT "MedicalProcedureAuthorization_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
