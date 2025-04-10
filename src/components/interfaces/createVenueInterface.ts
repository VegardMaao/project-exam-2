export interface MediaInterface {
    url: string | undefined;
    alt: string | undefined;
}

export interface VenueCreator {
    media?: MediaInterface[],
    rating?: number | undefined;
    name: string;
    description: string;
    price: number;
    maxGuests: number;
    meta: {
        wifi?: boolean | undefined;
        parking?: boolean | undefined;
        breakfast?: boolean | undefined;
        pets?: boolean | undefined;
    };
    location: {
        address?: string | undefined;
        city?: string | undefined;
        zip?: string | undefined;
        country?: string | undefined;
        continent?: string | undefined;
        lat?: number | undefined;
        lng?: number | undefined
    };
}
