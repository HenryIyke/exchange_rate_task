export interface Currency {
    name: string;
    rate: number;
}

export const currencies: Currency[] = [
    { name: 'USD', rate: 1.0 },
    { name: 'EUR', rate: 0.85 },
    { name: 'GBP', rate: 0.72 },
    { name: 'NGN', rate: 1400 },
]