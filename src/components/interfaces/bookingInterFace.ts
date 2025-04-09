export interface MakeBooking {
    dateFrom: string;
    dateTo: string;
    guests: number;
    venueId: string;
}

export interface ExistingBooking {
    id: string;
    dateFrom: string;
    dateTo: string;
    guests: number;
    created: string;
    updated: string;
    venue: {
        id: string;
        name: string;
        description: string;
        media: [
            {
                url: string;
                alt: string;
            }
        ],
        price: 0,
        maxGuests: 0,
        rating: 0,
        created: string;
        updated: string;
        meta: {
            wifi: true,
            parking: true,
            breakfast: true,
            pets: true
        },
        location: {
            address: string;
            city: string;
            zip: string;
            country: string;
            continent: string;
            lat: 0,
            lng: 0
        },
        owner: {
            name: string;
            email: string
            bio: string;
            avatar: {
                url: string;
                alt: string;
            },
            banner: {
                url: string;
                alt: string;
            }
        }
    },
    customer: {
        name: string;
        email: string;
        bio: string;
        avatar: {
            url: string;
            alt: string;
        },
        banner: {
            url: string;
            alt: string;
        }
    }
}
