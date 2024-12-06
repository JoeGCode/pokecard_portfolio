import React from "react";
import StarIcon from "../StarIcon";

type FooterStatType = {
  numberOfStars: number;
  title: string;
};

export default function FooterStat({ numberOfStars, title }: FooterStatType) {
  return (
    <div className="flex justify-start items-center gap-2">
      <div className="flex items-center justify-center">{title}</div>
      {Array.from({ length: numberOfStars }).map((_, index) => (
        <StarIcon key={index} size={16} />
      ))}
    </div>
  );
}
