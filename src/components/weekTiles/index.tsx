import React, { useEffect, useState } from 'react'
import moment, { Moment } from 'moment'
// import { Tooltip as ReactToolTip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export default function WeekTiles() {
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
        weekList[i]?.classList.add('bg-red-500')
      }
      if (i >= weekInYear * 25 && i < weekInYear * 60) {
        weekList[i]?.classList.add('bg-orange-300')
      }
      if (i >= weekInYear * 18 && i < weekInYear * 25) {
        weekList[i]?.classList.add('bg-cyan-300')
      }
      if (i >= weekInYear * 0 && i < weekInYear * 18) {
        weekList[i]?.classList.add('bg-green-400')
      }
    }

    for (let j = 0; j <= totalWeeks; j += 1) {
      if (j >= weekInYear * 60) {
        weekList[j]?.classList.add('outline-red-500')
      }
      if (j >= weekInYear * 25 && j < weekInYear * 60) {
        weekList[j]?.classList.add('outline-orange-300')
      }
      if (j >= weekInYear * 18 && j < weekInYear * 25) {
        weekList[j]?.classList.add('outline-cyan-300')
      }
      if (j >= weekInYear * 0 && j < weekInYear * 18) {
        weekList[j]?.classList.add('outline-green-400')
      }
    }
  }, [totalWeeks, birth, weekPassed, weekInYear])

  const handleMouseEnter = (index: number) => {
    const weekList = document.querySelectorAll('#weekList')
    const isActivated = false

    if (isActivated) {
      for (let i = 0; i <= index; i += 1) {
        weekList[i]?.classList.add('')
      }

      for (let j = totalWeeks; j > index; j -= 1) {
        weekList[j]?.classList.remove('')
      }
    }
  }
  // <ReactToolTip place="top" id="weekList" content="hehe" />

  return (
    <div className="grid grid-cols-[auto,1fr] pb-20">
      <div className="col-start-2 gap-2 flex items-center font-semibold">
        Pekan dalam hidupmu<p className="text-3xl text-top">&#8640;</p>
      </div>
      <div
        id="age_scale"
        className="relative justify-end grid grid-rows-[repeat(80,minmax(0,1fr))]"
      >
        {[...Array(80)].map((_, i) => (
          <div key={i} className="mr-2 relative flex items-center justify-end">
            <p className="text-end font-semibold -top-4 -left-2 text-sm">
              {/* eslint-disable-next-line no-nested-ternary */}
              {i + 1 === 1 ? i + 1 : (i + 1) % 5 ? null : i + 1}
            </p>
          </div>
        ))}
      </div>
      <div className="grid gap-2 grid-flow-row grid-cols-[repeat(26,minmax(0,1fr))] auto-rows-max auto-cols-max md:grid-cols-[repeat(52,minmax(0,1fr))]">
        {tiles.map((_, i) => (
          <div
            onMouseEnter={() => handleMouseEnter(i)}
            id="weekList"
            key={i}
            className="rounded-full relative outline-2 outline pt-[100%] box-border"
          >
            {/** <p className="absolute top-0 left-0">{i + 1}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}
