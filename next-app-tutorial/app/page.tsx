import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>New Project Huzzah</h1>
      <Link href="/users" target="_blank">Users</Link> {/* #Client side navigation, use next.js Link va a */}
      <ProductCard></ProductCard>
    </main>
  )
}
