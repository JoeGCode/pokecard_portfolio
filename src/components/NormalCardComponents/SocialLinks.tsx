import { SocialLink } from "@/data/types";
import React from "react";
import SocialLinkComp from "./SocialLinkComp";

function SocialLinks({ links }: { links: SocialLink[] }) {
  // We just want, Github, LinkedIn and email links
  links = links.filter(
    (link) =>
      link.type === "email" ||
      link.type === "linkedin" ||
      link.type === "github"
  );
  return (
    <div className="w-full bg-gray-200 grid grid-cols-3 text-black text-sm">
      {links.map((link) => (
        <SocialLinkComp key={link.id} link={link} />
      ))}
    </div>
  );
}

export default SocialLinks;
