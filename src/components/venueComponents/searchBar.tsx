/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { searchBarStyles as S } from "../../styles";

export function SearchBar(params: any) {
  const { originalArr, setAllVenues } = params;

  function SearchFunc(e: any) {
    const searchQuery = e.target.value;
    const lowerCaseSearchQuery = searchQuery.toLowerCase();

    const filtered = originalArr.filter((item: any) =>
      Object.values(item).some(
        (val) =>
          typeof val === "string" &&
          val.toLowerCase().includes(lowerCaseSearchQuery)
      )
    );

    setAllVenues(filtered);
  }

  return (
    <S.SearchBarWrapper>
      <S.SearchBarLabel>
        <i className="fa-solid fa-magnifying-glass"></i>
      </S.SearchBarLabel>
      <S.SearchBarInput
        type="text"
        name="searchInp"
        id="searchInp"
        placeholder="Search"
        onKeyUp={(e: any) => {
          SearchFunc(e);
        }}
      />
    </S.SearchBarWrapper>
  );
}
