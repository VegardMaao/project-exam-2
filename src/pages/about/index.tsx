/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { GenericStyles as S } from "../../styles";

export function AboutPage() {
  return (
    <main>
      <S.CenteredFlexBox>
        <h1>About this page</h1>
        <p>
          This is my Project Exam 2, which is a venue booking site based on the
          Noroff API. I have used React and TypeScript, with some libraries to
          help me get the site up and running. Zustand was used for state
          management, Styled Components for styling, and React Hook Form for
          navigation. Amongst other tools I have used to create this site.
        </p>
      </S.CenteredFlexBox>
    </main>
  );
}
