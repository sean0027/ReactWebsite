const Card = ({ name, description, icon }) => {
  return (
    <>
      {icon}
      <h3 className="text-base text-pink bg-clip-text mt-4 mb-2 font-blu">
        {name}
      </h3>
      <p className="text-white text-center 2xl:text-lg text-sm w-10/12 ">
        {description}
      </p>
    </>
  )
}
export default Card
