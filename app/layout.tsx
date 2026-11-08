import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NextAuth.js Example",
  description: "This is an example site to demonstrate how to use NextAuth.js for authentication",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <aside role="status" aria-label="Version de démonstration" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 2147483647, padding: "8px 16px", background: "#172554", color: "#fff", textAlign: "center", font: "13px/1.4 system-ui,sans-serif", boxShadow: "0 -1px 6px #0002" }}>Démonstration de l’interface — certaines fonctionnalités ne sont pas connectées.</aside>
        <div className="flex flex-col justify-between w-full h-full min-h-screen">
          <Header />
          <main className="flex-auto py-4 px-4 mx-auto w-full max-w-3xl sm:px-6 md:py-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
