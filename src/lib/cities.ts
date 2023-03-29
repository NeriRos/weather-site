import prisma from "@/lib/prisma";

export const getCities = async () => {
    return prisma.city.findMany()
}

export const getCity = async (id: number) => {
    return prisma.city.findUnique({
        where: {
            city_id: id
        }
    })
}