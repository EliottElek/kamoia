import React from "react";
import Hero from "../Hero/Hero";
import "./Landing.css";
import MenWomen from "../MenWomen/MenWomen";
import Products from "../Products/Products";
import About from "../About/About";
import ContactForm from "../Contact/Contact";
import Carousel from "../Carousel/Carousel";
import free from "../data/free";
import { CarouselItem } from "../Carousel/Carousel";
import { useNavigate } from "react-router";
//junior, senior, fun surf, racing surf
const text = "Exceed the limit.";
const caption = "Performance, exception, elegance, durability.";
const only4First = free.slice(0, 4);
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="landing_container">
      <Hero text={text} caption={caption} />
      {/* <img className="screen_image" src={screen} alt="screen" /> */}
      <MenWomen />
      <Products products={only4First} newProduct />
      <Carousel>
        <CarouselItem>
          <div
            style={{
              display: "flex",
              position: "relative",
              height: "100%",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              color: "black",
              zIndex: "1!important",
            }}
          >
            <img
              alt="img"
              src="https://cdn.pixabay.com/photo/2017/02/19/16/01/mountaineer-2080138_1280.jpg"
              style={{
                position: "absolute",
                zIndex: 0,
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                objectFit: "cover",
                filter: "brightness(60%)",
                objectPosition: "bottom",
              }}
            />
            <div
              style={{
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <button
                className="type2_button"
                onClick={() => navigate("/products#senior")}
              >
                See senior range
              </button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{
              display: "flex",
              position: "relative",
              height: "100%",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              color: "black",
              zIndex: "1!important",
            }}
          >
            <img
              alt="img"
              src="https://cdn.pixabay.com/photo/2021/01/11/13/28/cross-country-skiing-5908416_1280.jpg"
              style={{
                position: "absolute",
                zIndex: 0,
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                objectFit: "cover",
                filter: "brightness(60%)",
                objectPosition: "bottom",
              }}
            />
            <div
              style={{
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <button
                className="type2_button"
                onClick={() => navigate("/products#fun")}
              >
                See fun surf
              </button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{
              display: "flex",
              position: "relative",
              height: "100%",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              color: "black",
              zIndex: "1!important",
            }}
          >
            <img
              alt="img"
              src="https://cdn.pixabay.com/photo/2014/10/22/18/04/man-498473_1280.jpg"
              style={{
                position: "absolute",
                zIndex: 0,
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                objectFit: "cover",
                filter: "brightness(60%)",
                objectPosition: "center",
              }}
            />
            <div
              style={{
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <button
                className="type2_button"
                onClick={() => navigate("/products#free")}
              >
                See free surf
              </button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{
              display: "flex",
              position: "relative",
              height: "100%",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              color: "black",
              zIndex: "1!important",
            }}
          >
            <img
              alt="img"
              src="https://www.blizzard-tecnica.com/storage/ProductCategory/c882eee756526f6e5e402a93046a3791.jpg"
              style={{
                position: "absolute",
                zIndex: 0,
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                objectFit: "cover",
                filter: "brightness(60%)",
                objectPosition: "center",
              }}
            />
            <div
              style={{
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <button
                className="type2_button"
                onClick={() => navigate("/products#racing")}
              >
                See racing surf
              </button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            style={{
              display: "flex",
              position: "relative",
              height: "100%",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              color: "black",
              zIndex: "1!important",
            }}
          >
            <img
              alt="img"
              src="https://cdn.pixabay.com/photo/2021/02/21/08/27/skiing-6035709_1280.jpg"
              style={{
                position: "absolute",
                zIndex: 0,
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                objectFit: "cover",
                filter: "brightness(60%)",
                objectPosition: "center",
              }}
            />
            <div
              style={{
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <button
                className="type2_button"
                onClick={() => navigate("/products#junior")}
              >
                See junior range
              </button>
            </div>
          </div>
        </CarouselItem>
      </Carousel>
      <About />
      <ContactForm />
    </div>
  );
};

export default Landing;
