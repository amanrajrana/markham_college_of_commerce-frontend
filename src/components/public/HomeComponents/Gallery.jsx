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
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUTDXp_X_hUeoyUE5ZXNOLZWoWbsDql5YFWEIJUaV7DnT6gMrbPOZHLVih1TsLpzLQzFayPH9ARMMwHcvR0kn00PCpCkxIAYV_KJDtmpJnbX_hwcAebet6IMja2BQiQWgm3NGRGCfqUvCdePzLUyjKFlOvKTxBur3NmHjoIkeWIu-3YyYTxth6CMHkkFc/s320/MCC_Auditorium.jpg"
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
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1wrDV8r1zw7c5k0S3BlPMGhGFemXmJuu1WaGJpj_L_S4wzUKU8Fl7RtNS496KsBXxlJSRiAzrEY8xmWQ2ym85-nW0r0Y1LV2qMIrcrVCnnrlHCq_SnjB_zcovChU9dv8JV2IHXqxCkZLk58cwQR0VhUTzwvWfLG64d9kKOLnjakvh4Ze8G_0eWWMlGqk/s320/Independence_day_Events.jpg"
                }
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-60 lg:h-80 object-cover object-center block"
                src={
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSdlplNPgVlO30DeAS6HvdsU_FAH52iUkdHAwSjD4NlRfEH-8ZGI97JqReobEHlppsLrG8I6ZkeL09VaHXhWHFuAR0rmsWMAbL-8AveEUilBIF79ByB-keGppHYffovcxHwN6mnUJqi2bvStoEer8vmILwwZYtVGbEnBQoAk39w0ir7KACsAbnEOuE_r8/s1360/ncc.jpg"
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
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy0tv-B__tMoaNlAkTTM1pYeuUF0zaJf7FgMZ0a5cmD41xStwa3jKQfXbgmc_KITbdr91lydt21EJAS3dkCyljzAPL_rti6g6zCT602sL9nqgiUksEELM5cST_9Er2k4MX9LhJsTCmJoFr91Gd5oT5YU-X9QaU6Or1mNEZ3WCnCUYspdp28B2kGGvwaC0/s320/Republicday.webp"
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
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSBKafvV8nrodbFjlujrlY18D3ZMvb7nEVdxRUBhCSg45job3b6aCNEL5p1_WLsGzWJ655qEpL13jrI4askHs9T9TkqNJyCL5jBXUy5-fyq1xuvFPldFT7SbPqkUXGHT3LqbJ8TbLD34eg-8OUlIXEgIyhGPmSnrisfIk-a822jvnFOUXcWkv0_J-ywuk/s720/Laboratory.jpg"
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
                  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDMUORQ4f5blgmXQUYnnZAicB2DX7vDNI8unGjnaC96VwitidpG8Zh4Sp2_uvXEp38y4BpmEXuho7vODwVtVZm-cAkm0ngwQgMnNi3TcHnTUEmfiqKN0b8_DeFavv70xy8vaG2wqelEZu1-ufQ_kCieXDxWuyblgK8IQOaGFp4Uwiy0Rr3gjg8gEn8iPU/s720/MCC_Events.jpg"
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
