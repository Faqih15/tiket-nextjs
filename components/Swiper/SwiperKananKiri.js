import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation, Scrollbar, A11y } from "swiper";
SwiperCore.use([Pagination, Navigation]);
import Image from "next/image";

export default function SwiperKananKiri() {
  const slider = [
    "/kereta-1.png",
    "/kereta-2.png",
    "/kereta-3.png",
    "/kereta-4.png",
    "/kereta-5.png",
    "/kereta-6.png",
  ];
  // var menu = ["Slide 1", "Slide 2", "Slide 3"];
  // const navigationPrevRef = React.useRef(null)
  // const navigationNextRef = React.useRef(null)

  return (
    <div className="bg-blue-700 pb-8">
      <section className="pb-16">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          style={{ height: "325px", width: "650px" }}
        >
          {slider.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Image height={500} width={700} src={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}

// var mySwiper = new Swiper(".swiper-container", {
//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + menu[index] + "</span>";
//     },
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
