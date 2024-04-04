import Link from "next/link";

export default function Nav() {
    return (
        <nav className="container px-4 my-4 mx-auto flex items-center justify-center">
            <ul className="list-none flex">
                <li><Link className="hover:underline" href="/">Home</Link></li>
                <li className="mx-8"><Link className="hover:underline" href="/characters">Characters</Link></li>
                <li><Link className="hover:underline" href="/about">About</Link></li>
            </ul>
        </nav>
    )
}