import { instance } from "@services/api.ts";

export async function getUserInfo(userID: number) {
    try { 
        const response = await instance.get(`/users/${userID}`);
        return response.data;
    }
    catch (error) {
        return new Error('Failed to fetch user info', error instanceof Error ? error : undefined);
    }
}