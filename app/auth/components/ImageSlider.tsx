"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    { url: "/images/generated1.jpg", legend: "Mafia boss" },
    { url: "/images/generated2.jpg", legend: "In the city" },
    { url: "/images/generated3.jpg", legend: "Tinder date" },
    { url: "/images/generated4.jpg", legend: "Linkedin profile picture" },
    { url: "/images/generated5.jpg", legend: "Ancient samurai master" },
];

function ImageSlider() {
    return (
        <div>
            <Carousel autoPlay infiniteLoop showArrows={false} stopOnHover={false} showStatus={false}>
                {images.map((image, index) => (
                    <div key={index} className="slide xl:w-[80px]">
                        <Image
                            src={image.url}
                            alt={"AI Generated image"}
                            width={1000}
                            height={1000}
                            className="rounded-lg"
                        />
                        <p className="legend font-medium">{image.legend}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default ImageSlider;
