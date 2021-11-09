import Link from "next/link";

export default function ButtonLink({ children, href }) {
  return (
    <>
      <Link href={href}>
        <a>
          <button className="my-4 p-4 bg-black text-white focus:outline-accent">
            {children}
          </button>
        </a>
      </Link>
    </>
  );
}
