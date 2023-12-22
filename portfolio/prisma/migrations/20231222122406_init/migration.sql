/*
  Warnings:

  - Added the required column `description` to the `Work` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Work" ADD COLUMN     "description" TEXT NOT NULL;
