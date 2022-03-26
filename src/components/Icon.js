import { icons } from "../assets"

const Icon = ({ type, className, style }) => {
  return (
    <img className={`${className}`} src={icons[type]} alt="" style={style} />
  )
}

export default Icon
