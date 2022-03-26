import React from "react"
import Button from "../components/Button"
import Text from "../components/Text"
import Title from "../components/Title"

import Icon from "../components/Icon"

const Membership = () => {
  const membershipTitle = "The Dystopians"
  const descriptionFirstPara =
    "Welcome to the year 2121 - the future where where humans and machines merge with each other. In the veins of the Dystopians flows not only blood but also bits and bytes. Human bodies are upgraded with cyber implants, they became stronger and more resilient than ever before. But one of the main achievements of humanity is the linking of the brain with the cyberspace. You can choose anytime and anywhere between reality and the metaverse. There are no more limits for you. Dive into the dystopian world of the future and become a Dystopian. Get the best cyber implants and join us on a journey through Dystopia City."
  const buttonText = "JOIN OUR COMMUNITY"
  return (
    <>
      <div
        className="flex bg-background overflow-x-hidden md: h-[600px] justify-center csm:pb-4 csmd:pb-4 cmd:mb-8"
        id="membership"

        // style={{
        //   backgroundImage: 'url(' + icons[ "Membership" ] + ')',
        //   backgroundSize: window.innerWidth > 1500 ? 'cover' : 'contain'
        // bg-no-repeat bg-center
        // }}
      >
        <div className="w-1/2 mt-6 csm:mt-10 csm:w-full csmd:w-full flex flex-col items-center">
          {/* <div className="flex items-center">
            <a href="#" target="_blank"> <Icon type="WebsiteLogo" className="h-16 w-16 mb-2" /></a>
          </div> */}
          <Title
            text={membershipTitle}
            className="text-pink 2xl:text-5xl text-5xl test-stroke font-blu"
          />
          <Text
            className="text-white 2xl:text-lg text-sm mt-8 csm:text-justify csm:px-6 csmd:text-justify csmd:px-6 test-align"
            text={descriptionFirstPara}
          />
          <div className="flex">{/* <Icon src="seeWhiteIcon" /> */}</div>
          <div className="flex items-center mt-6">
            {/* <a href="#" target="_blank">
              <Icon
                type="seeIcon"
                className="w-12 2xl:w-12 h-12 2xl:h-12 static -mt-4"
              />
            </a>
            <a href="#" target="_blank">
              {" "}
              <Icon
                type="twitterIcon"
                className="w-8 2xl:w-10 h-8 2xl:h-10 ml-6 static"
              />
            </a>
            <a href="#" target="_blank">
              {" "}
              <Icon
                type="instagramIcon"
                className="w-8 2xl:w-10 h-8 2xl:h-10 ml-6 static"
              />
            </a>
            <a href="#" target="_blank">
              {" "}
              <Icon
                type="tiktokIcon"
                className="w-8 2xl:w-10 h-8 2xl:h-10 ml-6 static"
              />
            </a>
            <a href="#" target="_blank">
              <Icon
                type="shipIcon"
                className="w-14 2xl:w-14 h-14 2xl:h-14 ml-4 static -mt-8"
              />
            </a> */}
          </div>
          {/* <a href="https://google.com"> */}
          <Button
            className="bg-blue poppins-bold text-black 2xl:text-lg text-lg px-4 py-2 mt-8 rounded-buttonRadius border-white border-2 z-10"
            text={buttonText}
            link="https://discord.gg/thedystopians"
          />
          {/* </a> */}
        </div>
        <div className="w-full h-full  csm:w-full csmd:w-full absolute">
          <Icon
            type="Membership"
            className="w-full h-screen -right-22 align-middle csm:-mt-30 csm:w-full csmd:-mt-30 csmd:w-full cmd:-mt-430"
          />
        </div>
      </div>
    </>
  )
}

export default Membership
