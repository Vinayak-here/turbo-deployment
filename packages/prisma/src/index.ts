// packages/prisma/src/index.ts
import { PrismaClient } from '../generated/prisma/client'

export const prisma = new PrismaClient({
  accelerateUrl: process.env.PRISMA_ACCELERATE_URL || '',
  log: ['error', 'warn'],
})

export { PrismaClient }
