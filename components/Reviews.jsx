"use client";

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/joanna_korczyc.jpeg",
    name: "Joanna Korczyc",
    job: "Independent Financial Advisor",
    review:
      "The team at Vabank.dev excelled in delivering a website that is not only visually stunning but also immensly user-friendly. The team was deeply committed to understanding my vision and requirements. Their approach to collaboration was seamless, marked by consistent communication and a keen willingness to incorporate my feedback.",
  },
  {
    avatar: "/reviews/Maciejewska2.png",
    name: "Alina Maciejewska",
    job: "Professor of Science",
    review:
      "Since the launch of the new website, I have seen a significant uptick in client engagement and positive feedback. The site's professional appeal and ease of navigation have greatly improved the user experience. I am very pleased with the final product and would highly recommend Vabank.dev to anyone looking to build a new website or revamp an existing one.",
  },
  {
    avatar: "/reviews/KD.jpg",
    name: "Gibbarosa.com",
    job: "Gibbarosa Team",
    review:
      "Their exceptional skill in e-commerce custom setups deserves special mention. Vabank.dev's proficiency in crafting tailored e-commerce solutions has significantly enhanced my website's functionality, making it not just informative but also a powerful tool for business transactions",
  },
  {
    avatar: "/reviews/payloq.png",
    name: "PayLoq.com",
    job: "PayLoq Team",
    review:
      "Vabank.dev deserves high praise for their ability to develop a social app encompassing all key features. Their work in this domain showcases a deep understanding of social networking dynamics, user engagement strategies, and the integration of advanced functionalities like real-time messaging, notifications, and content sharing. ",
  },
  {
    avatar: "/reviews/WU.png",
    name: "Western Union",
    job: "WU Team",
    review:
      "The highlight of their service was the real-time data feed integration. Vabank.dev proficiently managed the challenge of integrating live data, providing us with up-to-the-minute information essential for our operations. This feature has been instrumental in making timely, informed decisions.",
  },
];

const Reviews = () => {
  return (
    <section classname="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>

        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[480px]"
        >
          {reviewsData.map((person, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[360px]">
                <CardHeader className="p-0 mb-10">
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={person.avatar}
                      className="rounded-full"
                      width={60}
                      height={60}
                      alt=""
                      priority
                    />
                    {/* name */}
                    <div className="flex flex-col">
                      <CardTitle>{person.name}</CardTitle>
                      <p>{person.job}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-[16px] text-muted-foreground">
                  {person.review}
                </CardDescription>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
