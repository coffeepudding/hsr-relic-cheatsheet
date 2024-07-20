import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const posts:any = []

async function main() {
    
    const alice = await prisma.characters.create({
        data: {
            name: 'Alice',
            path: 'alice@example.com',
            type: 'aaa'
        }
    })

    const bob = await prisma.user.create({
        data: {
            name: 'Bob',
            email: 'bob@example.com',
            posts: {
                create: {
                    title: 'Check out Prisma with Next.js',
                }
            }
        }
    })

    console.log({alice, bob})
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
