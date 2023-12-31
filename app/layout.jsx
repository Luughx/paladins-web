import Navbar from '@/components/Navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className='container mx-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
