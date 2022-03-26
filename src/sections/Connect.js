import React from "react"
import { icons } from "../assets"
import Title from "../components/Title"
import Button from "../components/Button"
import Text from "../components/Text"

const Connect = () => {
  const connectTitle = "mInT"
  const buttonText = "CONNECT"
  const description1 = "Pre Sale: TBA"
  const description2 = "Public Sale: TBA"
  const description3 = "Mint price: 0.06 ETH"
  return (
    <div
      id="buysite"
      className="w-full bg-no-repeat bg-cover bg-center flex justify-center items-center backgroundImageStyle"
    >
      <div className="p-6 md:p-8 flex flex-col items-center w-5/12 csm:w-1/90 bg-background rounded-buttonRadius border-2 border-white">
        <Title
          text={connectTitle}
          className="text-pink test-stroke text-5xl csm:text-2xl csmd:text-2xl mb-6 csm:mb-4 font-blu"
        />
        <Text
          className="text-white mb-2 2xl:text-lg text-base csm:text-xm"
          text={description1}
        />
        <Text
          className="text-white mb-2 2xl:text-lg text-base csm:text-xm"
          text={description2}
        />
        <Text
          className="text-white mb-2 2xl:text-lg text-base csm:text-xm poppins-bold"
          text={description3}
        />
        <Button
          className="bg-blue poppins-bold rounded-buttonRadius border-white border-2 2xl:text-lg text-lg text-black px-6 py-2 mt-7 csm:mt-3"
          text={buttonText}
        />
      </div>
    </div>
  )
}

export default Connect
