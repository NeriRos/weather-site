import type {NextApiRequest, NextApiResponse} from 'next'
import prisma from "@/lib/prisma";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'GET') {
        const cities = await prisma.city.findMany()
        return res.status(200).json(cities)
    }

    return res.status(405).end();
}
