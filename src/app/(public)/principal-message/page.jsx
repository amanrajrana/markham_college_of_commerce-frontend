import PrincipleMsg from "@/components/public/HomeComponents/PrincipleMsg";
import React from "react";

export const metadata = {
  title: "Principle Message - Markham College of Commerce, Hazaribagh",
  description:
    "Dear students, welcome to our college&lsquo;s virtual space. Here, we strive to create an environment that nurtures your dreams and empowers you to excel. Embrace opportunities, ignite your passion, and together lsquo;s embark on a transformative journey of knowledge, growth, and success. Best wishes for an enriching academic experience!",
};

const PrinciplesMessage = () => {
  return (
    <article className="max-w-screen-lg mx-auto">
      <h1 className="text-xl font-bold text-primary-regular my-4">
        Principal&apos;s Message - Markham College of commerce
      </h1>
      <div>
        <PrincipleMsg />
      </div>
    </article>
  );
};

export default PrinciplesMessage;
