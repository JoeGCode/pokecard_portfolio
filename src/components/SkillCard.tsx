"use client";
import { Skill } from "@/data/types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function SkillCard({ skill }: { skill: Skill }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

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
      ref={cardRef}
      className="w-full max-w-[300px] relative"
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
      <div className="border-[12px] border-yellow-400 rounded-md aspect-[2.5/3.5] flex flex-col w-full h-full">
        {/* Header */}
        <div className="w-full flex-1 flex justify-start items-center px-6 bg-gray-600 text-transparent font-bold text-3xl xs:text-2xl">
          <span className="text-white text-xl">{skill.name}</span>
        </div>
        {/* Main */}
        <div
          className="flex flex-[5] justify-center items-center"
          style={{ background: `radial-gradient(#fff, ${skill.color})` }}
        >
          <div
            className="w-2/3 aspect-square p-8 rounded-full flex justify-center items-center"
            style={{
              background: `radial-gradient(#fff, ${skill.color}, #000)`,
            }}
          >
            <Image
              src={skill.imageURL}
              alt={`${skill.name} icon`}
              className="rounded-3xl"
              objectFit="cover"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
