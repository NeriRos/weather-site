import type {NextApiRequest, NextApiResponse} from 'next'
import prisma from "@/lib/prisma";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'GET') {
        const cityId = req.query.cityId;

        if (!cityId)
            return res.status(400).end();

        const forecasts = await prisma.forecast.findMany({
            where: {
                city_id: Number(cityId)
            }
        })

        return res.status(200).json(forecasts)
    }

    return res.status(405).end();
}
