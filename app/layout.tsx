import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Menu } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Event Company - Creating Unforgettable Experiences",
  description: "We specialize in creating memorable events that leave a lasting impression.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

// function Header() {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
//       <div className="container flex h-16 items-center justify-between px-4">
//         <Link href="/" className="flex items-center gap-2 font-bold">
//           <span className="text-xl"></span>N3Events
//         </Link>
//         <nav className="hidden md:flex">
//           <ul className="flex items-center gap-6">
//             <li>
//               <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary">
//                 Events
//               </Link>
//             </li>
//             <li>
//               <Link href="/rals" className="text-sm font-medium transition-colors hover:text-primary">
//                 Robotics Event
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <div className="md:hidden">
//           <button className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
//             <Menu className="h-6 w-6" />
//             <span className="sr-only">Toggle menu</span>
//           </button>
//         </div>
//       </div>
//     </header>
//   )
// }

