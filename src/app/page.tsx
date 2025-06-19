import NormalCard from "@/components/NormalCard";
import MovesLink from "@/components/NormalCardComponents/MovesLink";
import { SocialLink } from "@/data/types";
import image from "../../public/images/hero_image.png";

export default async function Home() {
  const response = await fetch(
    "https://joegcode.github.io/api/portfolio/data/socialLinks.json"
  );
  const links: SocialLink[] = await response.json();
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-2 overflow-hidden">
      <NormalCard
        name="Joe Garofano"
        hp={360}
        image={image}
        number="001"
        showMiniStats={true}
        socialLinks={links}
        aboutText="Web developer with four years experience. Passionate about blending technology and creativity. Enjoys building responsive, user-friendly apps and bringing ideas to life."
        links={[
          <MovesLink
            numberOfStars={1}
            title="Skills"
            description="The technologies I have experience with"
            href="/skills"
            external={false}
            key={1}
          />,
          <MovesLink
            numberOfStars={2}
            title="Projects"
            description="Check out some projects I have built"
            amount={80}
            href="/projects"
            external={false}
            key={2}
          />,
        ]}
      />
    </div>
  );
}
