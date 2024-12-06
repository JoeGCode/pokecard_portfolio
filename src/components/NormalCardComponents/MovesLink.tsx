import React from "react";
import StarIcon from "../StarIcon";
import Link from "next/link";

type MovesLinkType = {
  numberOfStars?: number;
  title: string;
  description?: string;
  amount?: number;
  href?: string;
  external?: boolean;
};

function MovesLink({
  numberOfStars = 1,
  title,
  description = "",
  amount = 40,
  href = "/",
  external = true,
}: MovesLinkType) {
  return (
    <Link
      href={href}
      className="w-full p-2 flex flex-col hover:bg-white/20 hover:cursor-pointer"
      target={external ? "_blank" : "_self"}
    >
      <div className="w-full grid grid-cols-3 gap-2 font-bold text-xl">
        <div className="w-full flex justify-start gap-1">
          {Array.from({ length: numberOfStars }).map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
        <div className="w-full flex justify-start items-center">{title}</div>
        <div className="w-full flex justify-end itemscenter">{amount}</div>
      </div>
      <div className="font-light text-base">{description}</div>
    </Link>
  );
}

export default MovesLink;
