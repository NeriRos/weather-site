import prisma from "@/lib/prisma";

export const getCities = async () => {
    return prisma.city.findMany()
}