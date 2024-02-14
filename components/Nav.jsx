"use client";
import { usePathname } from 'next/navigation'
import { nav } from '@/lib/config';
import Link from 'next/link';

export default function Nav() {
    const pathname = usePathname();
    return (
        <ul className="site-nav">
        {nav.map((item, i) => (
            <li key={i} className={`link ${pathname.includes(item.href.split(1)) ? 'active' : ''}`}>
                <Link href={item.href}>
                    {item.text}
                </Link>
            </li>
            
        ))}
        </ul>
    );
}

