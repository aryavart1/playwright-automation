import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

export function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}
