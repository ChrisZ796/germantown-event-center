import { instance } from "@services/api.ts";

export async function getOrgInfo(orgID: number) {
    try { 
        const response = await instance.get(`/organizations/${orgID}`);
        return response.data;
    }
    catch (error) {
        return new Error('Failed to fetch organization info', error instanceof Error ? error : undefined);
    }
}