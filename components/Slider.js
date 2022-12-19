import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slider() {
  const slider = [
    "/kereta-1.png",
    "/kereta-2.png",
    "/kereta-3.png",
    "/kereta-4.png",
    "/kereta-5.png",
    "/kereta-6.png",
  ];
  return (
    <div>
      <Carousel>
        {slider.map((gambar, index) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" src={gambar} alt="First slide" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
