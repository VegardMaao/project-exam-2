/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useEffect } from "react";
import { Metadata } from "../../components/metadata/metadata";
import { useParams } from "react-router-dom";
//@ts-ignore
import { single } from "../../components/venueComponents/index.js";

export function Venue() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const venueURL = `https://v2.api.noroff.dev/holidaze/venues/${id}?_owner=true&_bookings=true`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Metadata title={title} description={description} />
      <single.SingleVenue
        url={venueURL}
        setTitle={setTitle}
        setDescription={setDescription}
      />
    </main>
  );
}
