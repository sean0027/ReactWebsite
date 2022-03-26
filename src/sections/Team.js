import Title from "../components/Title"
import Text from "../components/Text"
import Card from "../components/Card"
import Icon from "../components/Icon"

const Team = (params) => {
  const roadmapTitle = "Team members"
  const roadmapDescription =
    "With our creative and determined team, we want to build a great community and create a long-term project. We work hard to constantly advance the project and make it a success. We want you to be fully immersed in our dystopian world."

  const items = [
    {
      name: "hexabyte",
      description:
        "Founder & Head of project - Master brain behind the project",
      icon: <Icon type="team1" className="h-full w-full" />,
    },
    {
      name: "mr Electronic",
      description:
        "Artist - The dude with the crazy fingers and dystopian brain",
      icon: <Icon type="team2" className="h-full w-full" />,
    },
    {
      name: "mrs. Robot",
      description:
        "Community - Always there for you so that all questions gets to us",
      icon: <Icon type="team3" className="h-full w-full" />,
    },

    {
      name: "watchman",
      description: "Moderator - Always has an eye on the bad boys and girls",
      icon: <Icon type="team4" className="h-full w-full" />,
    },
  ]
  return (
    <div
      className="bg-background flex flex-col text-center pt-14 cmd:mb-8 pb-8  flex-wrap w-full justify-center items-center md:-mt-40 2xl:pt-32 csm:px-2 "
      id="team"
    >
      <Title
        text={roadmapTitle}
        className="text-pink test-stroke text-5xl font-blu"
      />
      <Text
        text={roadmapDescription}
        className="mt-6 mb-16 text-white w-1/2 2xl:text-lg text-sm csm:w-full csm:px-2"
      />
      <div className="flex flex-1 flex-wrap w-full justify-center">
        {items.map((item, index) => (
          <div
            className={`w-1/6 cxm:w-full cxm:mt-0 csm:w-full csm:mt-0 mx-6 flex flex-col items-center}`}
          >
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Team
