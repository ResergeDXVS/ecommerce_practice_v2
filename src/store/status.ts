export const PENDING = 'pending';
export const INTRANSIT = 'intransit';
export const DELIVERED = 'delivered';

export type GuideInfo = {
    id?:number;
    id_guide: string,
    origin: string, 
    destiny: string, 
    recipient: string,
    datetime_created: string,
    datetime_updated: string|null, 
    status: string, 
}

export type HistoricalInfo = {
    guide: string,
    new_status: string,
    datetime_created: string,
}

export type FormState = {
    id_guide: string;
    origin: string;
    destiny: string;
    recipient: string;
    datetime_created: string;
    status: string;
};