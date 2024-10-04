import { EXAMPLE_PATH } from '../lib/constant'
import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Blog. All rights reserved.</p>
      </div>
    </footer>
  )
}