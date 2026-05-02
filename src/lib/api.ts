import { ColumbusRecruitmentData } from "@/types/generated";


export async function getColumbusData(): Promise<ColumbusRecruitmentData> {
    const API_URL = process.env.API_URL;
    const API_KEY = process.env.API_KEY;

    if (!API_URL || !API_KEY) {
        throw new Error("API_URL and API_KEY not set");
    }

    const res = await fetch(API_URL, {
        headers: {
            'x-api-key': API_KEY,
        }
    });

    return res.json();
}