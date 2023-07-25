'use client'

import Header from 'C/header'
import WeekTiles from 'C/weekTiles'
import moment from 'moment'

export default function Home() {
  return (
    <div className="mx-10 flex flex-col gap-8">
      <Header />
      <main className="grid max-sm:grid-cols-1 sm:grid-cols-3">
        <WeekTiles />
        <ul className="list-disc text-justify font-semibold leading-7 pb-20 sm:col-start-3 sm:pl-12">
          <li className="text-green-600">
            Pada rentang ini, kamu hanya seorang anak anak, menikmati hidup
            dengan bermain disebagian besar waktumu.
          </li>
          <li className="text-cyan-600">
            Pada rentang ini kamu mulai memasuki masa remaja. kamu mungkin mulai
            merasakan jatuh cinta, dan patah hati untuk pertama kalinya, dan
            senang melakukan hal yang benar benar baru untuk mencari jati diri.
          </li>
          <li className="text-orange-600">
            pada rentang ini kamu mungkin mulai melanjutkan pendidikanmu ke
            jenjang yang lebih tinggi ataupun memilih untuk bekerja. kamu mulai
            merasakan dunia yang sesungguhnya, menjadi bagian dari masyarakat.
          </li>
          <li className="text-red-600">
            pada rentang ini kamu mungkin sudah menjadi manusia seutuhnya
            menurut standar masyarakat seperti menikah, memiliki anak, mencapai
            segala keinginan yang kamu punya, atau hidup dengan nyaman dari
            hasil bekerja. Ini adalah bagian terpanjang dalam hidupmu.
          </li>
          <li className="text-slate-600">
            pada rentang ini kamu mungkin sudah pensiun, menuai segala yang
            telah kamu tanam semasa hidup.
          </li>
        </ul>
      </main>
      <footer className="text-center pb-5">
        ©️{moment().year()} made with 💗 by Agung as a memento mori
      </footer>
    </div>
  )
}
