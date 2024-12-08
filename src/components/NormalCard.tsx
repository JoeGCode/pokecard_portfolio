"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import StarIcon from "./StarIcon";
import { FaStar } from "react-icons/fa";
import SocialLinks from "./NormalCardComponents/SocialLinks";
import { SocialLink } from "@/data/types";

type NormalCardType = {
  name: string;
  hp?: number;
  image: string | StaticImageData;
  showMiniStats?: boolean;
  links: JSX.Element[];
  number?: string;
  aboutText: string;
  socialLinks?: SocialLink[];
};

function NormalCard({
  name,
  hp = 100,
  image,
  showMiniStats = false,
  links,
  number = "001",
  aboutText,
  socialLinks = [],
}: NormalCardType) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const showSocialLinks = socialLinks.length > 0;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const card = cardRef.current;
      if (card) {
        const cardRect = card.getBoundingClientRect();

        //   Get mouse position relative to the card
        const mouseX = event.clientX - cardRect.left;
        const mouseY = event.clientY - cardRect.top;

        const xPct = Math.min(Math.max(-0.5, mouseX / cardRect.width), 1.5);
        const yPct = Math.min(Math.max(-0.5, mouseY / cardRect.height), 1.5);

        const yRotate = (xPct - 0.5) * 20;
        const xRotate = (yPct - 0.5) * 20;
        setRotation({ x: -xRotate, y: yRotate });

        const xShine = xPct * 100;
        const yShine = yPct * 100;
        setShinePos({ x: xShine, y: yShine });
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });
  return (
    <div
      className="w-full max-w-[480px] aspect-[2.5/3.5] border-[12px] border-yellow-400 rounded-md flex flex-col bg-gradient-to-br from-purple-900 to-purple-950 text-white font-bold"
      ref={cardRef}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      {/* Shine */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)`,
        }}
      />
      {/* Card Header */}
      <div className="w-full px-4 py-2 pl-12 sm:pl-16 flex justify-between items-center relative">
        <div>
          <div className="absolute -top-1 -left-1 p-1 rounded-sm bg-gray-500">
            BASIC
          </div>
          <div className="text-xl sm:text-2xl">{name}</div>
        </div>
        <div className="flex items-center justify-center gap-1">
          HP
          <div className="text-xl sm:text-2xl">{hp}</div>
          <StarIcon size={38} />
        </div>
      </div>
      {/* Image */}
      <div className="w-full p-4 bg-gray-300">
        <div className="w-full aspect-video border-2 rounded-sm border-gray-500 relative">
          <Image
            src={image}
            alt="Hero Image"
            fill
            objectFit="contain"
            className="bg-black"
          />
          {showMiniStats && (
            <div className="absolute -bottom-4 -left-1 -right-1 p-2 bg-gradient-to-b from-gray-600 to-gray-800 via-gray-600 rounded-3xl text-xs flex items-center justify-center gap-2">
              <div>No. 0030</div>
              <div>Full Stack Developer</div>
              <div>{"HT 6'2''"}</div>
            </div>
          )}
        </div>
      </div>
      {/* Moves */}
      <div className="w-full px-4 py-3 flex flex-col gap-2">
        {links.map((link) => link)}
      </div>
      {/* Weakness/Resistance/Retreat */}
      {showSocialLinks && <SocialLinks links={socialLinks} />}
      <p
        className={`w-full p-2 font-light ${
          showSocialLinks ? "text-sm" : "text-base"
        }`}
      >
        {aboutText}
      </p>
      <div className="w-full flex-1 px-2 flex justify-between items-end text-xs">
        <div className="inline-flex items-center justify-center gap-1">
          <div className="bg-black text-white p-[1px]">DEV</div>
          <span>{number}/151</span>
          <FaStar fill="yellow" />
        </div>
        <div className="inline-flex items-center justify-center gap-1">
          <span>© 2024 Joe Garofano</span>
        </div>
      </div>
    </div>
  );
}

export default NormalCard;
