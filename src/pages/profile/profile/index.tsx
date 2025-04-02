/* eslint-disable @typescript-eslint/ban-ts-comment */
// import {BannerComp} from "../../../components/profileComponents/index.ts"
import { useGetAPI } from "../../../api";
import { profilesUrl } from "../../../environment";
//@ts-ignore
import { loadingStyles } from "../../../styles"

export function Profile() {
  const url = `${profilesUrl}`
  const { data, isLoading, isError } = useGetAPI(url);

  
  if (isLoading) {
    return <loadingStyles.Loader />;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  console.log(data)


  return <div>HELLO</div>

  // return <main>
  //   <S.ProfileWrapper>
  //   <BannerComp.ProfileBanner />
    
  //   </S.ProfileWrapper>
  //   </main>;
};