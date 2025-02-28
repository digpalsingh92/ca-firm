import React from 'react'
import OurTeam from '../../components/OurTeam'
import OurTeam2 from '../../components/OurTeam2'
import { Helmet } from 'react-helmet'
import Breadcrumb from '../../components/Breadcrumb'

export default function Overview() {
  return (
    <div className='mt-[70px]'>
        <Helmet>
            <title>About Us | Our Team </title>
        </Helmet>
        <div>
            <Breadcrumb items={[{ name: "Home", link: "/" }, { name: "About", link: "/"}, { name: "overview"}]} />
        </div>
        <OurTeam/>
        <OurTeam2/> 
    </div>
  )
}
