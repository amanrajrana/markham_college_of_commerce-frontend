import { faFlag, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Step from "./step";

const StepBar = () => {
  const steps = [
    {
      icon: faLock,
      text: "Login Details",
    },
    {
      icon: faUser,
      text: "Registration Details",
    },
    {
      icon: faFlag,
      text: "Finish",
    },
  ];
  return (
    <div className="flex justify-around overflow-x-auto w-full max-w-md">
      {steps.map((step, index) => (
        <Step key={index} icon={step.icon} text={step.text} />
      ))}
    </div>
  );
};

export default StepBar;
