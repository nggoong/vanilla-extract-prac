import { NextPage } from "next";

import dynamic from "next/dynamic";

const OtherComponents = dynamic(() => import('@/app/components/OtherComponents'));
const TutoPage:NextPage = () => {
  return(
    <>
      <div>원래 컴포넌트</div>
      <OtherComponents/>
    </>
  )
}

export default TutoPage;