"use client"

import { Calendar } from "./Calendar"
import {today, getLocalTimeZone} from '@internationalized/date'

export function RendarCalendar() { 
    return ( 
        <Calendar minValue={today(getLocalTimeZone())} />
    )
}