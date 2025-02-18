import { Carousel } from "flowbite-react";
import banner1 from "../../../assets/banner/1.jpg";
import banner2 from "../../../assets/banner/2.jpg";
import banner3 from "../../../assets/banner/3.jpg";
import banner4 from "../../../assets/banner/4.jpg";
import banner5 from "../../../assets/banner/5.jpg";
const Banner = () => {
  return (
    <div className="h-[20rem] lg:h-[30rem]">
      <Carousel>
        <img src={banner1} alt="..." />
        <img src={banner2} alt="..." />
        <img src={banner3} alt="..." />
        <img src={banner4} alt="..." />
        <img src={banner5} alt="..." />
      </Carousel>
    </div>
  );
};

export default Banner;
