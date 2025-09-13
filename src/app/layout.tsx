import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/sunflower.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Girasol Floreciendo - Animación Hermosa',
  description: 'Una experiencia visual extraordinaria de un girasol floreciendo gradualmente sobre fondo negro',
  keywords: 'girasol, animación, florecimiento, naturaleza, visual',
  authors: [{ name: 'Sunflower Animation' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} bg-black min-h-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}