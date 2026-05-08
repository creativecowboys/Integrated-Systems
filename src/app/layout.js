import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Integrated Systems Inc. | Building Automation Systems & Smart HVAC Controls',
  description: 'ISI designs and implements building automation systems (BAS), energy management systems, and integrated building controls for commercial facilities across the Southeast. 30+ years of intelligent building solutions.',
  keywords: 'building automation systems, BAS, energy management systems, EMS, facilities management systems, control systems, building management systems, integrated building systems, automated building controls, smart building technology, HVAC automation, intelligent building solutions, environmental control systems, smart HVAC controls, automated energy solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrapper">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
