import React from "react";
import FullPage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import Hero from "../components/Hero";
import CallDrone from "../components/CallDrone";

const Home = () => {
  return (
    <FullPage>
      <FullpageNavigation />
      <FullPageSections className='bg-green-600'>
        <FullpageSection style={{ height: "100vh" }}>
          <Hero />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }}>
          <CallDrone />
        </FullpageSection>
      </FullPageSections>
      {/* <div className='text-center min-h-full '></div> */}
      <footer
        className='text-gray-300 flex items-end justify-center font-thin'
        id='footer'
      >
        ©2022 Isaac Magno & José Breno. All rights reserved.
      </footer>
    </FullPage>
  );
};

export default Home;
