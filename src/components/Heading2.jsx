const Heading2 = ({ headingText }) => {
  return (
    <div>
      <h2 className="text-center font-bold text-3xl">{headingText}</h2>
      <div className="h-0.5 max-w-[6rem] bg-primary-regular mx-auto mb-8 "></div>
    </div>
  );
};

export default Heading2;
