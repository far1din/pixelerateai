"use client";
import { PUBLIC_IMAGES } from "@/lib/defaults";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    { url: PUBLIC_IMAGES.generated1, legend: "Mafia boss" },
    { url: PUBLIC_IMAGES.generated2, legend: "In the city" },
    { url: PUBLIC_IMAGES.generated3, legend: "Tinder date" },
    { url: PUBLIC_IMAGES.generated4, legend: "Linkedin profile picture" },
    { url: PUBLIC_IMAGES.generated5, legend: "Ancient samurai master" },
];

function ImageSlider() {
    return (
        <div>
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showArrows={false}
                stopOnHover={false}
                showStatus={false}
            >
                {images.map((image, index) => (
                    <div key={index} className="slide xl:w-[80px] 2xl:w-[100px]">
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
