/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { newVenueButton as S } from "../../styles";
import { useState, useEffect } from "react";
import { NewVenuePopUp } from "../forms/newVenuePopupForm";
import { useNavigate } from "react-router-dom";

export function NewVenueIcon() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<string | null>();
  const [rotate, setRotate] = useState("0");
  const navigate = useNavigate();

  function onClick() {
    setShowForm(!showForm);
    setRotate(rotate === "45" ? "0" : "45");
  }

  function onSubmit(newVenueID: string) {
    setShowForm(!showForm);
    const goTo = `/venues/${newVenueID}`;
    navigate(goTo);
  }

  const manager = localStorage.getItem("venueManager");
  useEffect(() => {
    setShowButton(manager);
  }, []);

  if (showButton === "true") {
    return (
      <>
        <NewVenuePopUp display={showForm} handleOnSubmit={onSubmit} />
        <S.NewVenueBtn colors="inverted" rotation={rotate} onClick={onClick}>
          <i className="fa-solid fa-plus"></i>
        </S.NewVenueBtn>
      </>
    );
  }
}
