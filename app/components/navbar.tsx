"use client"

import Image from "next/image"

export function Navbar() {
  return (
    <nav className="w-full border-b shadow-sm h-16" style={{
        opacity: 1,
    }}>
      <div className="container flex h-16 items-center">
        <div className="text-xl font-bold">
            <Image
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={100}
            />
        </div>
      </div>
    </nav>
  )
}
