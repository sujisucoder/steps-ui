import React, { useState } from "react";
import { Alert } from "../ui/alert";
import ImageSlider from "../carousel/ImageSlider";
import Parallax from "../parallax/Parallax";
import Carousel from "../autoplayCarousel/Carousel";
import { countries } from "../data/Data";
import TabsDemo from "../customTabs/TabsDemo";
import backgroundImage from "../../assets/testimonial-img.jpg";
import ProductCarousel from "../products-carousel/ProductCarousel";
import Testimonial from "../testimonial/Testimonial";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1717496002081-38a90d3cba26?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Prouduct1",
  },
  {
    url: "https://images.unsplash.com/photo-1716881757832-b71ca98e3ca5?q=80&w=2686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product2",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1717563132055-3e7a31ab3fa6?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product3",
  },
];

function LandingPage() {
  const [alertFlag, setAlertFlag] = useState(false);
  const handleClick = () => {
    console.log("clicked");
    setAlertFlag(true);
  };

  return (
    <div className="mt-[65px]">
      <div>
        <Alert
          className={
            alertFlag ? "hidden" : "flex justify-evenly text-sm sm:text-lg"
          }
        >
          we have added 5 new exciting courses to our list head to our latest
          courses section to know more
          <span className="cursor-pointer" onClick={handleClick}>
            &#x2716;
          </span>
        </Alert>
      </div>
      <div className="">
        <Carousel images={slides} />
      </div>
      <section className="bg-landingPageBlue w-full h-auto flex flex-col justify-center items-center py-8">
        <div className="px-12 pt-12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-4xl">Product Gallery</h1>
            <div className="max-w-xl mx-auto">
              <p className="text-center font-light text-sm md:text-md py-3">
                The Nextcent blog is the best place to read about the latest
                membership insights, trends and more. See who's joining the
                community, read about how our community are increasing their
                membership income and lot's more.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="md:w-[1180px] md:h-auto">
            <div className="p-20 md:p-12">
              <ProductCarousel />
            </div>
          </div>
        </div>
      </section>
      <section className="w-auto h-[706px]">
        <div className="w-full h-full p-2 md:p-8">
          <TabsDemo />
        </div>
      </section>
      <section className="">
        <div
          className="w-full h-screen bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Testimonial />
        </div>
      </section>
      <section className="w-auto h-[706px]">
        <div className="flex flex-col justify-center items-center text-center p-6">
          <div>
            <h1 className="font-bold text-4xl md:text-5xl pb-2">About Us</h1>
            <p className="font-light text-md md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
              neque impedit esse totam adipisci eius laudantium omnis.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
