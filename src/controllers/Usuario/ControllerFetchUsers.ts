import { PrismaClient } from "../../../generated/prisma";
import express, { Request, Response } from 'express';

export default async function ControllerFetchUsers(req: Request, res: Response) {
    const prisma = new PrismaClient();
    try {
        const allUsers = await prisma.user.findMany({
            include: {
                profile: true,
                posts: true
            }
        })
        res.json({
            Usuarios: allUsers
        })
    } catch (erro) {
        return res.json({
            erro: erro
        })
    }
}