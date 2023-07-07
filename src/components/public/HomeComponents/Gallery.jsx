import Heading2 from "@components/Heading2";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  return (
    <section className="my-6">
      <div className="max-w-screen-xl mx-auto container p-3 flex flex-wrap">
        <div className=" w-full mb-20 flex-wrap">
          <Heading2 headingText={"Gallery"} />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
            <FontAwesomeIcon
              className="text-gray-400 text-xl mx-1"
              icon={faQuoteLeft}
            />
            Explore the essence of our college through captivating images, where
            every picture tells a story of knowledge, growth, and unforgettable
            memories.
            <FontAwesomeIcon
              className="text-gray-400 text-xl mx-1"
              icon={faQuoteRight}
            />
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap md:w-1/2">
            <div className={`md:p-2 p-1 w-1/2`}>
              <Image
                alt="gallery"
                className={` w-full object-cover h-full object-center block`}
                width={250}
                height={150}
                src={
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEif98ufdDDas1mAmsoHDXYCZSA_z6XJQibdOd6COxhI9huWLpIQKvdh9YjGPO0M08KGmXfnVCUyTXS_wkapnb2_yJGimOkunSe7QnU0ONaRx5B_bcWiK0cxisdXkOX2ML_wusXTVEwOGrJiGhYP44YIiC5ggSpDnt4Z1t1D1h6eanIuKNu-l_RAxKPPZ1s/s1360/2.jpg"
                }
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                width={250}
                height={150}
                src={
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilQc1u4weGCfBC0kBb9Z2u71UAB7KO2Y6rYT8Q1BvptlBp70etncj5twDW3qKAtkmUBx87Oolrk03JtZu77_msAPGCzF4LNZZKlTbnXS2RdDJfG5rOALPB_UfE1Pnc_5vpVQo77_NGohiTJbbJdRdY8ala_zcM8t_kKNtUECHXPspYiNHdYb_Y7bhvMtA/s720/Independence_day_Events.jpg"
                }
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-60 lg:h-80 object-cover object-center block"
                src={
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkM_XYUsSxPgjKyP2Cd3J3tQqQdpcjVu5Wd_CoFUex8e13fFABXvwigZ2Up-kczA-PTm0sdP4B6u2aEA7dqVoE9G0XqrL3pTH9zEUOTYS-g5vIpt4vi6XNHjrNH4HXdBq8ipwdXaqR8Z_HG03PzonbbQd3pj3WV8n-SsP2WDCrgG5zibE1_ZthJqmMgoM/s1360/ncc.jpg"
                }
                width={500}
                height={300}
              />
            </div>
          </div>
          {/* ========= */}
          <div className={` flex flex-wrap md:w-1/2`}>
            <div className=" md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-60 lg:h-80 object-cover object-center block"
                src={
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6pD4tphA98DVApNME1EdDRxZE3HvXONlSXr0j9jXTsjbwIiGig1lKg7dF_WjXzWHLfi8yjZd_8E_Nz-6ZB8vvXez7alC6s2ElcohNOccGlEPmNWms82rIE40vvFwbYVmK_F5SPy-WSirLa691iTScMI9Nnmz1TgOGtCJ3Eb9z-I9EGMLR5lwCKZrK2Ms/s320/Republicday.webp"
                }
                height={300}
                width={500}
              />
            </div>

            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWvhiyukVPxg-GJAiDazQzTsE-q_qBVTgX4UF-meXaFRYf8Sc1rYfUqWLFoTM6jvdbDndj4B9f3-YvHcoii6qIMyPlA-S68TzoSNpCysWsOIz1uIcNRXNCx1qz8SfvxL_o3Kvx6_ciTIN7q0XWxj7qI1a_ejEZPNFMtqg8YSOY030-16Afhd8_OccJNKs/s720/Laboratory.jpg"
                }
                width={250}
                height={150}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtBfSIewlAeflfKCPwwevMOZBr8KvoMlDOlX6DHj773PgcGXLj16GlwgNpEKDywYoeqDhnKE4xmZ5HYdBImGD5T84efObUMPCL8y5W9_rR_UBhufnqwsxVLkwC47pcAzucaVQmWdwzEIL8vGSo3Fs54UEqTMatNit-GZK8U5cK9z4NntjfbFuNhrLTsb0/s720/MCC_Events.jpg"
                }
                width={250}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
