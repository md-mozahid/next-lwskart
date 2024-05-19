import Header from '@/components/header/Header'
import Copyright from '@/components/shared/Copyright'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import CartProvider from '@/provider/CartProvider'
import ToastProvider from '@/provider/ToastProvider'
import connectMongo from "@/backend/services/connectMongo";
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce - LWSKart',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children, params: {lang} }) {
  await connectMongo()

  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <ToastProvider>
            <Header lang={lang} />
            <Navbar lang={lang} />
            {children}
            <div id="modal-root-content" />
            <Footer />
            <Copyright />
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  )
}
