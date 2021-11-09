import Image from "next/image";
import Link from "next/link";
import ButtonLink from "./buttonLink";

export default function Hero() {
  return (
    // <div id="hero" className="flex row wrap justify-space-between align-center">
    <div id="hero" className="flex flex-row justify-between items-center">
      <div>
        <h1 className="text-main-accent-color">chace</h1>
        <h2 className="my-2">
          the simplest way to integrate investments in India
        </h2>
        <h6 className="my-2 text-gray-500">
          Our APIs allow you to offer investment services to your users inside
          your app
        </h6>
        <ButtonLink href="https://investing.chace.co.in/contact">Request API Keys</ButtonLink>
      </div>
      <img src="/images/svg/hero.svg" alt="hero" />
    </div>
  );
}
