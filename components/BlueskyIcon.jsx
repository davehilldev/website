"use client";
import Image from 'next/image';

export  function BlueskyIcon() {
    return (
        <div className="icon">
        <Image src="/icons/Bluesky_Logo.svg.png" alt="Bluesky" width={50} height={50} />
        </div>
    );
}
