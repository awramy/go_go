-- CreateTable
CREATE TABLE "TG_account" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT,
    "proxyId" INTEGER NOT NULL,

    CONSTRAINT "TG_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "accountId" INTEGER,
    "message" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proxy" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "isIPv6" BOOLEAN NOT NULL,
    "login" TEXT,
    "password" TEXT,

    CONSTRAINT "Proxy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TG_account" ADD CONSTRAINT "TG_account_proxyId_fkey" FOREIGN KEY ("proxyId") REFERENCES "Proxy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "TG_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
