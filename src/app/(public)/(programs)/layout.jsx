import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <main className="max-w-screen-lg mx-auto my-6 p-4 bg-secondary shadow-md rounded-md border-t-4 border-primary-regular">
        {children}
      </main>
    </>
  );
}
