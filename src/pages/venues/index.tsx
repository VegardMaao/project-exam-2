// import { Metadata } from "../../components/metadata/metadata";
import { useParams } from "react-router-dom";

export function Venue() {
    const { id } = useParams();
    console.log(id);

    console.log("Hello");
    
    // const venueURL = `https://v2.api.noroff.dev/holidaze/venues`;

    return <div>HELLO</div>
}