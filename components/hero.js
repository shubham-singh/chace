import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    // <div id="hero" className="flex row wrap justify-space-between align-center">
    <div id="hero" className="flex flex-row justify-between items-center">
      <div>
        <h1 className="text-main-accent-color">chace</h1>
        <h2 className="my-2">
          the simplest way to integrate investments in India
        </h2>
        <h6 className="my-2 text-secondary-accent-color">
          Our APIs allow you to offer investment services to your users inside
          your app
        </h6>
        <Link href="https://investing.chace.co.in/contact">
          <a>
            <button className="p-4 bg-black text-white focus:outline-accent">Request API Keys</button>
          </a>
        </Link>
      </div>
      <img src="/images/svg/hero.svg" alt="hero" />
    </div>
  );
}
