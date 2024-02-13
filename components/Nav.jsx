"use client";
import { useRouter } from 'next/navigation';
import { nav } from '@/lib/config';
import Link from 'next/link';

export default function Nav() {
    const router = useRouter();
    return (
        <ul className="site-nav">
        {nav.map((item, i) => (
            <li key={i} className={router.pathname == item.href ? "active" : ""}>
                <Link href={item.href}>
                    {item.text}
                </Link>
            </li>
        ))}
        </ul>
    );
}

