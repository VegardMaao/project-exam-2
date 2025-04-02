/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Metadata } from "../../components/metadata/metadata";
//@ts-ignore
import { featured, all } from "../../components/venueComponents/index";

const allVenuesUrl = "https://v2.api.noroff.dev/holidaze/venues";

export function Home() {
  return (
    <main>
      <Metadata
        title="Home"
        description="Book your next Holiday with Holidaze!"
      />
      <featured.FeaturedVenue url={allVenuesUrl} />
      <all.AllVenues url={allVenuesUrl}></all.AllVenues>
    </main>
  );
}
