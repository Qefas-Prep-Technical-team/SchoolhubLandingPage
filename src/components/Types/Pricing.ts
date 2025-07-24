export interface Pricing {
        name:string;
        price: number;
        basis: string;
        description: string;
        features: string[];
        hasTrial: boolean;
        trialDays: number;
        isPopular: boolean;
    
}