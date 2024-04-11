import React from 'react'
import Reservation from './Reservation'
import Contacts from './Contacts'
import Admins from './Admins'

export default function Dashboard() {
   return (
      <>
         <Reservation />
         <Contacts />
         <Admins />
      </>
   )
}
