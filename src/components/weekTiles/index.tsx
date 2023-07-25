import React, { useEffect, useState } from 'react'
import moment, { Moment } from 'moment'
import 'react-tooltip/dist/react-tooltip.css'

export default function WeekTiles(props: { className: string }) {
  moment.updateLocale('id', {
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM, YYYY LT',
      LLLL: 'dddd D MMMM, YYYY LT',
    },
  })

  const [tiles, setTiles] = useState<Array<number>>([])
  const [birth, setBirth] = useState<Moment>()
  const [weekPassed, setWeekPassed] = useState<number>(52)

  const tahun: number = 80
  const dayInAYear: number = 365
  const dayInaWeek: number = 7
  const weekInYear: number = Math.round(dayInAYear / dayInaWeek)
  const totalWeeks: number = tahun * weekInYear

  useEffect(() => {
    setBirth(moment('12-02-1998', 'DD-MM-YYYY'))
  }, [])

  useEffect(() => {
    setTiles(() => [...Array(totalWeeks)])
    setWeekPassed(moment().diff(birth, 'weeks'))

    const weekList = document.querySelectorAll('#weekList')
    for (let i = 0; i <= weekPassed - 1; i += 1) {
      if (i >= weekInYear * 60) {
        weekList[i]?.classList.add('bg-slate-600')
      }
      if (i >= weekInYear * 26 && i < weekInYear * 60) {
        weekList[i]?.classList.add('bg-red-600')
      }
      if (i >= weekInYear * 17 && i < weekInYear * 26) {
        weekList[i]?.classList.add('bg-orange-600')
      }
      if (i >= weekInYear * 12 && i < weekInYear * 17) {
        weekList[i]?.classList.add('bg-cyan-600')
      }
      if (i >= weekInYear * 0 && i < weekInYear * 12) {
        weekList[i]?.classList.add('bg-green-600')
      }
    }

    for (let j = 0; j <= totalWeeks; j += 1) {
      if (j >= weekInYear * 60) {
        weekList[j]?.classList.add('outline-slate-600')
      }
      if (j >= weekInYear * 26 && j < weekInYear * 60) {
        weekList[j]?.classList.add('outline-red-600')
      }
      if (j >= weekInYear * 17 && j < weekInYear * 26) {
        weekList[j]?.classList.add('outline-orange-600')
      }
      if (j >= weekInYear * 12 && j < weekInYear * 17) {
        weekList[j]?.classList.add('outline-cyan-600')
      }
      if (j >= weekInYear * 0 && j < weekInYear * 12) {
        weekList[j]?.classList.add('outline-green-600')
      }
    }
  }, [totalWeeks, birth, weekPassed, weekInYear])

  return (
    <div className={`${props.className} grid grid-cols-[auto,auto,1fr]`}>
      <div className="col-start-3 row-start-1 gap-2 flex items-center font-semibold">
        Pekan dalam hidupmu<p className="text-3xl text-top">&#8640;</p>
      </div>
      <div className="col-start-1 row-start-2 rotate-90 w-6 h-max">
        <div className="w-fit h-fit whitespace-nowrap font-semibold flex items-center gap-2">
          Tahun dalam hidupmu <p className="text-3xl text-top">&#8640;</p>
        </div>
      </div>
      <div
        id="age_scale"
        className="col-start-2 row-start-2 gap-1.5 justify-end grid grid-rows-[repeat(80,minmax(0,1fr))] w-5"
      >
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="mr-2 relative flex items-center justify-end w-5"
          >
            <p className="absolute -top-[1.7em] text-end font-semibold text-sm pt-[100%]">
              {/* eslint-disable-next-line no-nested-ternary */}
              {i + 1 === 1 ? i + 1 : (i + 1) % 5 ? null : i + 1}
            </p>
          </div>
        ))}
      </div>
      <div className="col-start-3 row-start-2 grid gap-1.5 grid-flow-row grid-cols-[repeat(26,minmax(0,1fr))] auto-rows-max auto-cols-max md:grid-cols-[repeat(52,minmax(0,1fr))] md:grid-rows-[repeat(80,minmax(0,1fr))]">
        {tiles.map((_, i) => (
          <div
            id="weekList"
            key={i}
            className="rounded-full relative outline-2 outline pt-[100%] box-border"
          />
        ))}
      </div>
    </div>
  )
}
