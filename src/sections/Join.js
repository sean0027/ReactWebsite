import React from "react"
import { icons } from "../assets"
import Title from "../components/Title"
import Button from "../components/Button"
import Text from "../components/Text"

const Join = () => {
  const joinTitle = "are you Ready?"
  const buttonText = "JOIN OUR COMMUNITY"
  const description1 =
    "Don't miss the chance to be part of this amazing project and join us on Discord."
  const description2 =
    "We look forward to seeing you. And especially to giving you some nice cyber implants."
  return (
    <div className="bg-background flex flex-col justify-center items-center px-16 py-16 cxl:pb-2">
      <Title
        text={joinTitle}
        className="text-pink text-5xl csm:text-4xl csmd:text-4xl test-stroke mt-20 mb-8 font-blu"
      />
      <Text
        className="text-white text-justify 2xl:text-lg text-sm csm:text-xm px-4"
        text={description1}
      />
      <Text
        className="text-white text-justify 2xl:text-lg text-sm csm:text-xm px-4 mt-1"
        text={description2}
      />
      <Button
        className="bg-blue poppins-bold 2xl:text-lg text-lg px-4 py-2 mt-8 rounded-buttonRadius border-white border-2 text-black mb-24 csm:mb-0 csm:z-50 clg:mb-0 cmd:mb-0"
        text={buttonText}
        link="https://discord.gg/thedystopians"
      />
      {/* <Icon type="left" className="absolute left-0 h-44 top-0 csm:hidden" style={{ top: "4rem" }} />
      <Icon type="right" className="absolute right-0 h-44" style={{ bottom: "4rem" }} />
      <Icon type="bottom" className="w-full h-36 object-cover" /> */}
    </div>
  )
}

export default Join
