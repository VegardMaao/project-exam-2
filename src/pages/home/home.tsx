import { FeaturedVenue } from "../../components/venueComponents/featuredVenue";
import { Metadata } from "../../components/metadata/metadata";

const allVenuesUrl = "https://v2.api.noroff.dev/holidaze/venues";

export function Home() {
    return <main>
        <Metadata title="Home" description="Book your next Holiday with Holidaze!"/>
        <FeaturedVenue url={allVenuesUrl}/>
    </main>
}