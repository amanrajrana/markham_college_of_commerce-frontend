"use client";

import StudentState from "@/contexts/student/StudentState";

export default function RootLayout({ children }) {
  return (
    <>
      <StudentState>{children}</StudentState>
    </>
  );
}
