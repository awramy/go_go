/*
  Warnings:

  - You are about to drop the `TG_account` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_accountId_fkey";

-- DropForeignKey
ALTER TABLE "TG_account" DROP CONSTRAINT "TG_account_proxyId_fkey";

-- DropTable
DROP TABLE "TG_account";

-- CreateTable
CREATE TABLE "Tg_account" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT,
    "proxyId" INTEGER NOT NULL,
    "session" TEXT,

    CONSTRAINT "Tg_account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tg_account_proxyId_key" ON "Tg_account"("proxyId");

-- AddForeignKey
ALTER TABLE "Tg_account" ADD CONSTRAINT "Tg_account_proxyId_fkey" FOREIGN KEY ("proxyId") REFERENCES "Proxy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Tg_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
