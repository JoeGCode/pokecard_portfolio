import React from "react";
import { SocialLink } from "@/data/types";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import Link from "next/link";

const linkStyleMap: Record<string, { icon: React.ReactNode }> = {
  linkedin: { icon: <LuLinkedin /> },
  github: { icon: <LuGithub /> },
  email: { icon: <LuMail /> },
};

export default function SocialLinkComp({ link }: { link: SocialLink }) {
  const styleData = linkStyleMap[link.type] || { icon: null };
  return (
    <Link
      href={link.link}
      target="_blank"
      className="flex p-2 justify-start items-center gap-2 hover:bg-black/20"
    >
      <div className="flex items-center justify-center">{link.name}</div>
      <div
        className="rounded-full w-6 h-6 p-1 bg-gradient-to-br aspect-square flex items-center justify-center text-white"
        style={{
          background: `radial-gradient(circle at center, ${
            link.color ?? "white"
          } 0%, black 100%)`,
        }}
      >
        {styleData.icon}
      </div>
    </Link>
  );
}
