export interface EditForm {
    bio?: string | undefined
    venueManager: boolean;
    avatar: {
        url?: string | undefined;
        alt?: string | undefined;
    };
    banner: {
        url?: string | undefined;
        alt?: string | undefined;
    };
}