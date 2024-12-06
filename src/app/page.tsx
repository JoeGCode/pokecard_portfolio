import NormalCard from "@/components/NormalCard";
import image from "../../public/images/hero_image.png";
import MovesLink from "@/components/NormalCardComponents/MovesLink";

export default function Home() {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-2 overflow-hidden">
      <NormalCard
        name="Joe Garofano"
        hp={100}
        image={image}
        number="001"
        showMiniStats={true}
        showSocialLinks={true}
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
