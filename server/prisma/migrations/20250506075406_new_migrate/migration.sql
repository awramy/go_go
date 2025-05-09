-- DropForeignKey
ALTER TABLE "Tg_account" DROP CONSTRAINT "Tg_account_proxyId_fkey";

-- AlterTable
ALTER TABLE "Tg_account" ALTER COLUMN "proxyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tg_account" ADD CONSTRAINT "Tg_account_proxyId_fkey" FOREIGN KEY ("proxyId") REFERENCES "Proxy"("id") ON DELETE SET NULL ON UPDATE CASCADE;
