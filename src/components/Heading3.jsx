const Heading3 = ({ headingText }) => {
    return (
      <div>
        <h2 className=" font-bold text-2xl">{headingText}</h2>
        <div className="h-0.5 max-w-[6rem] bg-primary"></div>
      </div>
    );
  };
  
  export default Heading3;
  