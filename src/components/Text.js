const Text = ( { text, className } ) =>
{
  return <div className="flex justify-center items-center"><p className={`${className}`}>{text}</p></div>;
};

export default Text;
