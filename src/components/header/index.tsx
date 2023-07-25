import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '700' })

export default function Header() {
  return (
    <header className={`${roboto.className} text-center  pt-4`}>
      <h1 className="text-5xl font-bold uppercase">memento mori</h1>
      <h2 className="text-md text-black/65">Kalender kehidupanmu</h2>
    </header>
  )
}
