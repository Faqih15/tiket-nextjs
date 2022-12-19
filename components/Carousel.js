import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Carousel() {
  const backgrounds = [
    "url(/backgrounds/solo.jpg)",
    "url(/backgrounds/grid-1.jpg)",
    "url(/backgrounds/grid-2.jpg)",
    "url(/backgrounds/grid-3.jpg)",
  ];
  const slider = [
    "/kereta-1.png",
    "/kereta-2.png",
    "/kereta-3.png",
    "/kereta-4.png",
    "/kereta-5.png",
    "/kereta-6.png",
  ];
  return (
    <div /* className="flex h-screen bg-cover bg-no-repeat bg-center " */>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={1000}
        // navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
      >
        {slider.map((item) => (
          <>
            <SwiperSlide>
              <div
                className="flex h-screen bg-cover bg-no-repeat bg-center "
                style={{ backgroundImage: item }}
              >
                <div className="flex flex-col gap-y-3 absolute top-64 md:top-44  md:-right-72  left-24 md:left-96  ">
                  <a
                    href="https://shopee.co.id/bahandasar"
                    target="blank"
                    className="bg-gray-600  top-96 md:top-64 right-1 md:-right-0 left-10 md:left-96  p-6 max-w-md	 mx-auto  rounded-lg shadow-sm md:shadow-md dark:bg-gray-800 dark:border-gray-700 drop-shadow-md md:drop-shadow-2xl w-60 md:w-72   "
                  >
                    <div className="flex justify-between w-60 md:w-72 relative -mt-6 ">
                      <div className="ml-3 md:ml-5 ">
                        <div>
                          <img
                            className=" h-20 w-40 -ml-6"
                            src="/icons/social-media/shopee.png"
                          />
                        </div>

                        <a
                          href="https://shopee.co.id/bahandasar"
                          target="blank"
                          className="cursor-pointer inline-flex items-center py-1 px-2 text-xs font-medium text-center text-white bg-opacity-0 border border-white  rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110    "
                        >
                          Click Here
                        </a>
                      </div>
                      <div className="flex absolute -bottom-6 right-4">
                        <img
                          className="h-36 md:h-44"
                          src="/crops/crop-1.png"
                        ></img>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/6281292622454"
                    target="blank"
                    className="bg-gray-600  p-6 max-w-md	 mx-auto  rounded-lg shadow-sm md:shadow-md dark:bg-gray-800 dark:border-gray-700 drop-shadow-md md:drop-shadow-2xl w-60 md:w-72    "
                  >
                    <div className="flex justify-between relative -mt-3 w-60 md:w-72">
                      <div className="pb-1 md:pb-4 ml-3 md:ml-5   ">
                        <div>
                          <img
                            className=" h-14 md:h-14 w-48 md:w-48 -ml-10    "
                            src="/icons/social-media/wa-new.png"
                          />
                        </div>

                        <a
                          href="https://wa.me/6281292622454"
                          target="blank"
                          className="cursor-pointer inline-flex items-center py-1 px-2 text-xs font-medium text-center text-white bg-opacity-0 border border-white  rounded-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  "
                        >
                          Click Here
                        </a>
                      </div>
                      <div className="flex absolute -bottom-6 -right-1 md:-right-4">
                        <img
                          className="h-40 md:h-52"
                          src="/crops/crop-2.png"
                        ></img>
                      </div>
                    </div>
                  </a>
                </div>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerView={1}
                  lazy
                  spaceBetween={50}
                  speed={1000}
                  loop={true}
                  autoplay={{ delay: 2500 }}
                  className="absolute top-[40rem] md:top-64 -right-44 md:-right-72 left-1 md:left-96 w-80 md:w-96 md:hidden block"
                >
                  <SwiperSlide>
                    <div className="bg-gray-600  top-96 md:top-64 right-10 md:-right-72 left-10 md:left-96  p-6 max-w-md	 mx-auto  rounded-lg shadow-sm md:shadow-md dark:bg-gray-800 dark:border-gray-700 drop-shadow-md md:drop-shadow-2xl    ">
                      <div className="flex  justify-between w-96 relative md:-mt-6 ">
                        <div className=" ml-5 ">
                          <div>
                            <img
                              className=" h-20 md:h-32 -ml-6"
                              src="/icons/social-media/shopee.png"
                            />
                          </div>
                          <a
                            href="https://shopee.co.id/bahandasar"
                            target="blank"
                            className="cursor-pointer inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-opacity-0 border border-white  rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Click Here
                          </a>
                        </div>
                        <div className="flex absolute -bottom-6 right-20 md:right-0">
                          <img
                            className="h-44 md:h-56"
                            src="/crops/crop-1.png"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-gray-600  p-6 max-w-md	 mx-auto  rounded-lg shadow-sm md:shadow-md dark:bg-gray-800 dark:border-gray-700 drop-shadow-md md:drop-shadow-2xl    ">
                      <div className="flex justify-between relative md:-mt-6 ">
                        <div className=" ml-5   ">
                          <div>
                            <img
                              className=" h-14 md:h-20 -ml-6  mb-6 md:mt-6 "
                              src="/icons/social-media/whatsapp.png"
                            />
                          </div>
                          <a
                            href="https://wa.me/6281292622454"
                            target="blank"
                            className="cursor-pointer inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-opacity-0 border border-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Click Here
                          </a>
                        </div>
                        <div className="flex absolute -bottom-6 -right-10 md:-right-14">
                          <img
                            className="h-48 md:h-64"
                            src="/crops/crop-2.png"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
}
