import React, { Component } from 'react'
import data from './../data.json'

import Card from './Card'

const Cardlist = () => {
  return data.software.map(ting =>
    <Card
      className="card"
      icon={ting.icon}
      homepage={ting.website}
      title={ting.title}
      para1={ting.para1}
      para2={ting.para2}
      download={ting.download}
      setuppara1={ting.setuppara1}
      setuplink1={ting.setuplink1}
      setupimg1={ting.setupimg1}
      setuppara2={ting.setuppara2}
      ting={ting}
    />
  )
}

export default Cardlist
