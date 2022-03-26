const Button = ({ text, className, link }) => {
  return (
    <button className={`${className}`}>
      <a href={link} target="_blank">
        {text}
      </a>
    </button>
  )
}

export default Button
