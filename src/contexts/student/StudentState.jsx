import { useState, useEffect } from "react";
import studentContext from "./studentContext";
import { useRouter } from "next/navigation";
const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const StudentState = (props) => {
  const router = useRouter();

  const [isUserLogin, setIsUserLogin] = useState(false);
  const [studentDetails, setStudentDetails] = useState({});
  const [dataFetching, setDataFetching] = useState(true);

  const fetchData = async () => {
    const authorization =
      sessionStorage.getItem("authorization") ||
      localStorage.getItem("authorization");
    if (!authorization) {
      router.replace("/student/login");
      return;
    }

    const option = {
      method: "GET",
      headers: {
        authorization,
      },
    };

    try {
      const res = await fetch(`${apiURL}/student/verifyStudent`, option);
      const data = await res.json();
      if (data.success) {
        setDataFetching(false);
        setIsUserLogin(true);
        setStudentDetails(data.student);
      } else {
        setIsUserLogin(false);
        localStorage.removeItem("authorization");
        sessionStorage.removeItem("authorization");
        router.replace("/student/login");
      }
    } catch (err) {
      setIsUserLogin(false);
      router.replace("/student/login");
    }
  };

  return (
    <studentContext.Provider
      value={{ isUserLogin, studentDetails, dataFetching, fetchData }}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </studentContext.Provider>
  );
};

export default StudentState;
