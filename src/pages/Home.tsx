import React, {useEffect, useState} from 'react'
import Card from '../components/card/Card'
import getAmiiboList from '../services/amiibo.service'
import LoadingPlaceHolder from './LoadingPlaceHolder'


export default function Home() {

const [amiiboList, amiiboSetList] = useState<any>([])
const [finished, setFinished] = useState(false)

const fetch = async () => {
    const res = await getAmiiboList()
    amiiboSetList(res)
    setFinished(true)
  }



useEffect(() =>{
    fetch()
},[finished] )


  return (
   <>
      {
      finished && amiiboList ?
      amiiboList.amiibo.map((res: any, i: number) => (
        <div className='m-4' key={i}>
        <Card
         img={res.image} amiiboName={res.character} price={3 + i * 4}
        />
        </div>
      ))
    :
    <LoadingPlaceHolder/>
    }
  </>
  )
}
