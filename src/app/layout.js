import './globals.css'
import { Inter, Sora, IBM_Plex_Mono } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700', '800'],
  variable: '--font-sora',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono-plex',
})

export const metadata = {
  metadataBase: new URL('https://isi-energy.com'),
  title: 'Integrated Systems Inc. | Building Automation & Smart HVAC Controls',
  description:
    'ISI designs, installs, and maintains building automation systems (BAS), energy management systems, and integrated HVAC controls for commercial facilities across the Southeast. An authorized Reliable Controls dealer with 30+ years of experience.',
  keywords: [
    'building automation systems', 'BAS', 'energy management systems',
    'DDC controls', 'smart HVAC controls', 'Reliable Controls dealer',
    'BACnet', 'commercial building controls', 'facilities management systems',
    'building management systems', 'Atlanta building automation',
  ],
  openGraph: {
    title: 'Integrated Systems Inc. | Building Automation & Smart HVAC Controls',
    description:
      'Authorized Reliable Controls dealer. 30+ years designing, installing, and maintaining building automation systems across the Southeast.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport = {
  themeColor: '#0b3954',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${plexMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
