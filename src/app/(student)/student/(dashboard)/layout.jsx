"use client";

import "@/app/globals.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const screenWidth = window.screen.width;
    if (screenWidth > 1025) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <>
      <div className="min-h-screen max-h-screen overflow-hidden">
        <div className="flex flex-col sm:flex-row h-screen overflow-hidden">
          {/* ======= Left Side Container ======= */}
          <div
            className={`flex flex-col fixed top-0 sm:relative sm:translate-x-0 ${
              isMenuOpen ? "translate-x-0" : " -translate-x-full"
            } duration-500 w-fit  max-h-full overflow-y-auto no-scrollbar bg-blue-900 z-50 h-screen`}
          >
            {/* ======= College Logo ======= */}
            <div className="relative h-fit sm:bg-primary-regular p-1 pb-2 w-full">
              <div className="sm:hidden absolute  m-2 right-2 text-white text-3xl cursor-pointer">
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>

              {/* When isMenuOpen==true then render full logo else render only icon */}
              <Link href="/">
                {isMenuOpen ? (
                  <Image
                    className="filter invert"
                    src={"/logo.webp"}
                    height={45}
                    width={150}
                    alt="Markham College of commerce"
                  />
                ) : (
                  <Image
                    className="hidden sm:inline-block filter invert mx-auto"
                    src={"/mcc-icon.png"}
                    height={45}
                    width={45}
                    alt={"Markham College Icon"}
                  />
                )}
              </Link>
            </div>

            {/* ======= Navigation Bar ======= */}
            <NavBar isMenuOpen={isMenuOpen} />
          </div>
          {/* ======= Left Side Container END ======= */}

          {/* ======= Right Side Containers START  ======= */}
          <div className="flex-1">
            {/* ======= Header ======= */}
            <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

            {/* ======= Main Content Start ======= */}
            <div className="max-h-full overflow-y-auto p-4">
              <main>{children}</main>
              <footer>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officiis quos dolorem reprehenderit debitis natus a
                aperiam, maiores voluptatem exercitationem facere sed similique?
                Recusandae, ipsum. Tempora, corporis omnis dignissimos
                necessitatibus, reiciendis sed deserunt labore mollitia placeat
                numquam dolorem doloribus optio magni nam sapiente. Nulla
                impedit nesciunt rem voluptas culpa aliquid, delectus quibusdam,
                debitis repellat, vero nostrum? Aperiam et ad cupiditate impedit
                reprehenderit iure deserunt atque accusamus? Modi perspiciatis
                placeat quidem officiis optio quos laudantium tempora at sed
                consequatur vero recusandae, numquam commodi consectetur alias
                nobis porro maiores nam odio officia sint facilis. Iste
                accusamus unde facilis perferendis dolores, quidem animi
                delectus debitis, molestiae reprehenderit nam eum tempore! Animi
                neque consectetur quasi reprehenderit earum non sapiente? Culpa
                doloremque provident, dicta quasi maiores perferendis ducimus
                omnis harum asperiores dolorum illo architecto ex. Nulla rem,
                reprehenderit blanditiis nisi ex ullam corrupti laudantium!
                Excepturi placeat vitae unde voluptate nihil, nobis ullam. Iste
                sed ullam nemo ducimus. Magnam magni sequi est repellat neque
                recusandae rerum placeat! In, soluta earum! Eaque nisi ipsum
                inventore consequuntur autem exercitationem enim quasi
                architecto obcaecati? Minima inventore deleniti quidem eos unde
                similique, in officiis illum error eius provident natus, earum
                reprehenderit debitis, porro odit! Laboriosam nemo repudiandae
                rerum id quae nobis, numquam veritatis harum ipsum eaque soluta
                est officia. Voluptate odio recusandae modi a praesentium rerum,
                dolor repudiandae sunt velit? Eaque nulla repellat non, aliquid
                similique cumque corporis, numquam iste ut, quibusdam nam
                mollitia! Cupiditate architecto maxime ipsum beatae, dolore
                quisquam voluptatem, assumenda consequatur magnam culpa ducimus
                unde minus voluptas nisi at recusandae? Facilis accusamus
                molestias libero nam, aliquam odio numquam neque consequatur
                impedit dolor, nihil ea, ratione nemo cumque. Fuga numquam atque
                voluptate perspiciatis architecto ipsam, provident voluptatibus
                corrupti tempore ratione ipsum accusantium nihil odio quod aut
                officia? Dolore nesciunt quas molestiae impedit? Omnis, iusto
                similique! Quibusdam quisquam nulla possimus temporibus unde
                quas, facere minus maiores aliquid fuga sequi eum quos dicta et!
                Odio harum fugiat sapiente quas commodi tempora iste nostrum
                libero.
              </footer>
            </div>
            {/* ======= Main Content END ======= */}
          </div>
          {/* ======= Right Side Containers END  ======= */}
        </div>
      </div>
    </>
  );
}
