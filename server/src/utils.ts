import { verify } from 'jsonwebtoken';
import { Context } from "./context";

export const APP_SECRET = "appsecr";

interface Token{
    userId: string
}

export function getUserId(context: Context) {
    const authHeader = context.req.get("Authorization");
    if (authHeader) {
        const token = authHeader.replace('Bearer ', '');
        const verifyToken = verify(token, APP_SECRET) as Token;
        return verifyToken && Number(verifyToken.userId);
    }
}