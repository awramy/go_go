import {PrismaClient, Prisma} from "./generated/prisma/client.js"
const prisma = new PrismaClient()


export { prisma, Prisma }