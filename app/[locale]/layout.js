import './globals.css'
import localFont from 'next/font/local'

const proximaNovaBlack = localFont({
  src: '../../public/fonts/proximanovapro_black.otf',
  display: 'swap',
  variable: '--font-proxima-nova-black',
})

const proximaNovaMedium = localFont({
  src: '../../public/fonts/proximanova_bold.otf',
  display: 'swap',
  variable: '--font-proxima-nova-medium',
})

const proximaNovaLight = localFont({
  src: '../../public/fonts/proximanova_light.otf',
  display: 'swap',
  variable: '--font-proxima-nova-light',
})

export const metadata = {
  title: 'Extended Pixel',
  description: 'Full technical support for events in Dubai',
}

export default function RootLayout({ children }) {
  const fontVariables = [proximaNovaBlack, proximaNovaMedium, proximaNovaLight]
      .map(font => font.variable)
      .join(' ')

  return (
    <html lang="en" data-scroll="0" className='scroll-smooth'>
      <body className={fontVariables}>{children}</body>
    </html>
  )
}
