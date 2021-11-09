import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="flex flex-col md:flex-row justify-between items-baseline sticky top-0 bg-white z-10">
            <h1 className="text-yellow-500">chace</h1>
            <div className="flex flex-row">
                <Link href="/#hero">
                    <a className="mx-4 hover:text-yellow-500 hover:underline"><h6>home</h6></a>
                </Link>
                <Link href="/#about">
                    <a className="mx-4 hover:text-yellow-500 hover:underline"><h6>about</h6></a>
                </Link>
                <Link href="/#features">
                    <a className="mx-4 hover:text-yellow-500 hover:underline"><h6>features</h6></a>
                </Link>
                <Link href="/#process">
                    <a className="mx-4 hover:text-yellow-500 hover:underline"><h6>process</h6></a>
                </Link>
            </div>
        </nav>
    )
}