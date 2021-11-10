import type {NextApiRequest, NextApiResponse} from 'next'

//to generate the schema.prisma
import {PrismaClient} from '@prisma/client'

//to view the schema made from scheme.prisma
const prisma = new PrismaClient()

type Data = {
    id: number,
    brand: string,
    model: string,
    price: number
}

// type Body = {
//     id: number,
//     brand: string,
//     model: string,
//     price: number
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>)
{
    const list = await prisma.inventory.create(
        {
            data: {
                brand: 'Acer',
                model: 'Aspire 5',
                price: 999
            }
        }
    )
    res.status(200).json(list)
}

//pipe script??
// export default async function handler(req: NextApiRequest, res: NextApiResponse<Data|Data[]>)
// {
//     if (req.method === 'POST')
//     {
//         const body: Body = req.body;

//         const list = await prisma.inventory.create
//         (
//             {
//                 data: body
//             }
//         )
//         res.status(200).json(list)
//     } else if (req.method === 'GET')
//         {  
//             const list = await prisma.inventory.findMany(
//                 {
//                     // select: {
//                     //     brand: true,
//                     //     model: true
//                     // },
//                     where: {
//                         price: null
//                     }
//                 }
//             )

//             res.status(200).json(list)
//         }
// }