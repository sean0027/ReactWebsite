import Icon from "./Icon"
const List = ({ heading, text, percent, position }) => {
  const flexDirection = position === "right" ? "justify-end" : "justify-start"
  // const flexDirection = "jusitfy-center"
  return (
    <div className="w-full 2xl:mt-16 -mt-32 csm:-mt-24 cmd:-mt-24 relative flex-wrap list-wrapper csmd:px-8 md:px-16 2xl:px-44 cxl:px-36 ">
      <div className={"flex items-center w-full flex-wrap " + flexDirection}>
        <div className="2xl:-mt-6 c2xl:-mt-6 cxl:mt-24 mt-32 csm:mt-0 csm:mb-80 clg:mt-20 clg:mb-80">
          <div className="flex justify-between items-center text-white csm:ml-0 csm:mr-0 csm:p-2 csm:mt-10 cmd:-mt-27  2xl:-mt-6  mt-12 2xl:text-xl text-base csm:text-sm bg-gradient-to-b from-gradiantPrimary to-gradiantSecondary rounded-tr-list rounded-bl-list px-8 py-6 divide-x divide-separator">
            <strong className="text-blue poppins-bold text-4xl 2xl:text-4xl mr-8">
              {percent}
            </strong>
            <div className="flex flex-col items-start justify-between pl-8">
              <h1 className="text-pink text-2xl 2xl:text-2xl font-blu pb-2">
                {heading}
              </h1>
              <p className="pt-2">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default List
