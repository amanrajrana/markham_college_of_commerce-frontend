import Image from "next/image";
import React from "react";

const Hello = () => {
  return (
    <Image
      src={
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjPEqT35BpxQtxFg1DKIIdnom2CE-pycIyA7XZj4vo8o-CZdq_n1ceTST4VVP5MtDcAfsybz5tYUfbJ6Bmb3KdKROL8EY1wiejeGPzPGWFONemYb3hZBDBBNndzFRANBhsehK4D0lS9ZLI21hLVvtdNdkbTxcj2f9h4xcYa6nRdFSTlprHUCfIOSUxG-Y/s502/chancellor-portal-logo.png"
      }
      height={300}
      width={500}
      alt="hello"
    />
  );
};

export default Hello;
