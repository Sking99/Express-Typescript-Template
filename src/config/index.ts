import dotenv from 'dotenv';

type systemConfig = {
    port: number;
}

function loadConfig() {
    dotenv.config();
}

loadConfig();

export const systemConfig: systemConfig = {
    port: Number(process.env.PORT) || 3000
};