// const navbars = ["Home", "Membership", "RoadMap", "Team", "Buy/Minting"];

import Icon from "./Icon"
import { useEffect } from "react"

const Navbar = () => {
  useEffect(() => {
    const button = document.querySelector("#menu-button")
    const menu = document.querySelector("#menu")
    button.addEventListener("click", () => {
      menu.classList.toggle("hidden")
    })
  }, [])

  return (
    <header className="pb-0">
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          px-4
          text-lg 
          bg-gradient-to-b from-gradiantPrimary to-gradiantSecondary
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        {/* <div className="flex items-center">
          <a href="#" target="_blank">
            <Icon
              type="WebsiteLogo"
              className="h-16 w-16 csm:h-12 csm:w-12 mr-4 ml-8"
            />
          </a>
        </div> */}

        <div
          className="hidden w-full md:flex md:items-center md:w-auto md:ml-16 cmd:ml-0"
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <a
                className="md:p-4 py-2 text-white block hover:text-purple-400"
                href="#"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="md:p-4 py-2 text-white block hover:text-purple-400"
                href="#roadmap"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 text-white block hover:text-purple-400"
                href="#team"
              >
                Team
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 text-white block hover:text-purple-400"
                href="#buysite"
              >
                Mint
              </a>
            </li>
            <div className="flex -mt-2 -ml-6 md:hidden">
              <Icon type="shipIcon" className="h-7 w-7" />
              <Icon type="twitterIcon" className="h-3 w-3 ml-1" />
              <Icon type="seeIcon" className="h-5 w-5 ml-1" />
            </div>
          </ul>
        </div>
        <div className="ml-auto mr-16 items-center hidden md:flex">
          <a
            href="https://opensea.io/collection/thedystopiansnft"
            target="_blank"
          >
            {" "}
            <Icon type="shipIcon" className="h-12 w-12 mr-2 ml-2" />
          </a>
          <a href="https://twitter.com/dystopiansnft" target="_blank">
            <Icon type="twitterIcon" className="h-6 w-6 mr-2 ml-2" />
          </a>
          <a href="https://discord.gg/thedystopians" target="_blank">
            {" "}
            <Icon type="seeIcon" className="h-10 w-10 mr-2 ml-4" />
          </a>
          <a href="https://www.instagram.com/dystopiansnft" target="_blank">
            {" "}
            <Icon type="instagramIcon" className="h-6 w-6 mr-2 ml-2" />
          </a>
        </div>
      </nav>
      {/* <div className="bg-gradient-to-l from-sectionDividerPrimary to-sectionDividerSecondary w-full h-1"></div> */}
    </header>
  )
}

export default Navbar
