import React from 'react'
import './styles.css'
import Link from 'next/link'
import { ArrowUpRight, ChevronDown, Globe, Menu } from 'lucide-react'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl tracking-tight">slothui</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <Link href="#" className="hover:text-indigo-600 transition-colors">
                Home
              </Link>
              <Link href="#" className="hover:text-indigo-600 transition-colors">
                Product
              </Link>
              <Link href="#" className="hover:text-indigo-600 transition-colors">
                Services
              </Link>
              <Link href="#" className="text-indigo-600">
                Blog
              </Link>
              <Link href="#" className="hover:text-indigo-600 transition-colors">
                Pricing
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                <Globe size={16} />
                <span>US</span>
                <ChevronDown size={14} />
              </button>
              <button className="md:hidden p-2">
                <Menu size={24} />
              </button>
              <ArrowUpRight
                className="hidden md:block text-slate-400 hover:text-indigo-600 cursor-pointer"
                size={20}
              />
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
