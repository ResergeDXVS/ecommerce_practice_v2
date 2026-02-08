export const PENDING = 'pending';
export const INTRANSIT = 'intransit';
export const DELIVERED = 'delivered';

export type GuideInfo = {
    id: string,
    origin: string, 
    destiny: string, 
    recipient: string,
    dateCreate: string, 
    state: string, 
}

export type HistoricalInfo = {
    guide_id: string,
    new_status: string,
    datetime: string,
}

export type FormState = {
    id_guide: string;
    origin: string;
    destination: string;
    recipient: string;
    datetime: string;
    state: string;
};