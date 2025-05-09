/*
  Warnings:

  - A unique constraint covering the columns `[proxyId]` on the table `TG_account` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "TG_account" ADD COLUMN     "session" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "TG_account_proxyId_key" ON "TG_account"("proxyId");
