import './globals.css'
import type { Metadata } from 'next'
import localFont from '@next/font/local'

const clashDisplay = localFont({
  src: [
    {
      path: '../public/fonts/ClashDisplay-Extralight.ttf',
      weight: '200'
    },
    {
      path: '../public/fonts/ClashDisplay-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/ClashDisplay-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/ClashDisplay-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/ClashDisplay-Semibold.ttf',
      weight: '600'
    },
    { 
      path: '../public/fonts/ClashDisplay-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-clashDisplay'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clashDisplay.className}>  
      <div className='bg-small' >
        </div>

        <main className='app'>
          {children}
        </main>
        </body>
    </html>
  )
}
