import React, {useEffect, useState, ReactElement} from 'react'
import Header from '../../components/HeaderComponent'
import common from '../../wordings/wording.json'
import { useParams } from 'react-router-dom'
import { getAmiiboByHeadTail } from '../../services/amiibo.service'
import ItemDescription from './ItemDescription'

type IParams = {
  id: any
}

type IAmiibo = {
  character: string,
  type: string
}


export default function ItemResume() : ReactElement {
  const { id } = useParams<IParams>()

  let price = parseInt(id, 10);

  const [amiibo, setAmiibo] = useState<any>({})
  const [finished, setfinished] = useState(false)

  const fetch = async () => {
    const res = await getAmiiboByHeadTail(id)
    setAmiibo(res)
    setfinished(true)
  }

  console.log(amiibo.amiibo);
  

  useEffect(() => {
    fetch()
  }, [finished])
  
  return (
    <div>
    <Header/>
    {amiibo && finished ? 
    <ItemDescription name={amiibo.amiibo.character} type={amiibo.amiibo.type}  price={price} image={amiibo.amiibo.image}/> 
    : 
    <p>Loading...</p>  
    }
    </div>
  )
}