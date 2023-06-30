/*
  Warnings:

  - Made the column `text` on table `Newsletter` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Newsletter" ALTER COLUMN "text" SET NOT NULL;
