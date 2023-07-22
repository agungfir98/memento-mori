'use client'

import Header from 'C/header'
import WeekTiles from 'C/weekTiles'

export default function Home() {
  return (
    <div className="mx-10 flex flex-col gap-8">
      <Header />
      <main className="">
        <WeekTiles />
      </main>
    </div>
  )
}
