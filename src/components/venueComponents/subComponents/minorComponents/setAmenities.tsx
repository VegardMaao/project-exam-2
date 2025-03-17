// @ts-ignore
import { singleVenueStyles as S } from "../../../../styles/index.js";

export function SetAmenities(params:any) {
    // console.log(params);
    const arr = [];
    for(const [key, value] of Object.entries(params.params)){
        console.log(`${key}: ${value}`);
        arr.push(`${key}: ${value ? "yes" : "no"}, `)
    }    

    return <p>{arr}</p>
}