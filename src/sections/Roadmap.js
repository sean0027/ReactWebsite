import Title from "../components/Title"
import Text from "../components/Text"
import React from "react"
import Icon from "../components/Icon"
import List from "../components/List"

const Roadmap = () => {
  const roadmapTitle = "The Roadmap"
  const roadmapDescription =
    "consectetur adipisicing elit. Alias eveniet error ipsum velit sint culpa explicabo minima enim dolor architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.  "
  const items = [
    {
      percent: "10%",
      heading: "Giveaway",
      position: "left",
      text: "When 10% are sold out we will do a giveaway for our holders and you are able to win 1 of 5 NFTs.",
    },
    {
      percent: "25%",
      heading: "Raffle",
      position: "right",
      text: "When 25% are sold out we will make a raffle where 1 ETH will be airdropped to a random holder of our NFTs.",
    },
    {
      percent: "50%",
      heading: "Listing on rarity.tools",
      position: "left",
      text: "When 50% are sold out we will list on rarity.tools to gain exposure to a lot more people.",
    },
    {
      percent: "60%",
      heading: "Charity Donation",
      position: "right",
      text: "When 60% are sold out we will donate $10.000 for a non profit organization. Our members can vote which one.",
    },
    {
      percent: "80%",
      heading: "Ethereum Giveaway",
      position: "left",
      text: "When 80% are sold out we will do an Ethereum giveaway of 3 x 1 ETH. Every holder can win 1 ETH.",
    },
    {
      percent: "100%",
      heading: "Charity Donation",
      position: "right",
      text: "When 100% are sold out we will build a 2nd collection of The Dystopians in 3D-art. Ready for the metaverse.",
    },
  ]
  return (
    <>
      <div className="-mt-8 csmd:pt-16 cxl:mt-0 cxl:pt-16 2xl:pt-16 pb-20 flex-col text-center bg-background flex flex-wrap w-full justify-center items-center">
        <Title
          text={roadmapTitle}
          className="text-pink test-stroke text-5xl 2xl:text-5xl font-blu mb-28 cxl:mb-8"
          style={{ fontWeight: 800 }}
        />
        {items.map((item, index) => (
          <List {...item} key={index} />
        ))}
      </div>
    </>
  )
}

export default Roadmap
