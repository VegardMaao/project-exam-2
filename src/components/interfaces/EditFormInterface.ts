export interface EditForm {
    bio?: string | undefined;
    avatar: {
        url: string;
        alt: string;
    };
    banner: {
        url: string;
        alt: string;
    };
    venueManager: NonNullable<boolean | undefined>;
}