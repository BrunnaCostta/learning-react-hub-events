import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Banner() {
  const image = [
    {
      image:
        "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_13.png",
      id: 1,
    },
    {
      image:
        "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_15.png",
      id: 2,
    },
    {
      image:
        "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_12.png",
      id: 3,
    },
  ];

  return (
    <>
      {" "}
      <Swiper spaceBetween={50} slidesPerView={3}>
        <SwiperSlide>
          {image.map((image, index) => {
            <img src={image} />;
          })}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
