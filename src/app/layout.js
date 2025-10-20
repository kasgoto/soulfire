import {
  Geist,
  Geist_Mono,
  Lexend,
  Gowun_Dodum,
  Imperial_Script,
  Faustina,
} from "next/font/google"
import "./globals.css"
import Header from "./header"
import Footer from "./footer"
import Image from "next/image"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
})

const gowunDodum = Gowun_Dodum({
  variable: "--font-gowun-dodum",
  subsets: ["latin"],
  weight: ["400"],
})

const imperialScript = Imperial_Script({
  variable: "--font-imperial-script",
  subsets: ["latin"],
  weight: ["400"],
})

const faustina = Faustina({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-faustina",
})

export const metadata = {
  title: "SoulFire Ceremony",
  description:
    "Experience transformative spiritual healing through our unique ceremonies and services designed to ignite your inner fire.",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} ${gowunDodum.variable} ${imperialScript.variable} ${faustina.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
