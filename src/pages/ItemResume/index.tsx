import React, {useEffect, useState, ReactElement} from 'react'
import Header from '../../components/HeaderComponent'
import { useParams } from 'react-router-dom'
import { getAmiiboByHeadTail } from '../../services/amiibo.service'
import ItemDescription from './ItemDescription'
import CartComponent from '../../components/cart/index'
import { useSelector } from 'react-redux'
import { IDescriptcion } from '../../pages/ItemResume/ItemDescription'
import ItemSkeletonLoading from './ItemSkeletonLoading'


type IParams = {
  id: any
}

export default function ItemResume() : ReactElement {
  const { id } = useParams<IParams>()
  const [amiibo, setAmiibo] = useState<any>({})
  const [finished, setfinished] = useState(false)
  const [added, setAdded] = useState(false)
  const [price, setPrice] = useState(0)
  const cartData = useSelector((state: any) => {
    return state.cartRoot.cart
   })   

  const fetch = async () => {
    const result = Math.floor(Math.random() * (23 - 1) + 10);    
    setPrice(result)
    const res = await getAmiiboByHeadTail(id)
    setAmiibo(res)
    setfinished(true)
    
  }  

  useEffect(() => {
    fetch()
    if(cartData){
    cartData.filter((data: IDescriptcion) => {
      data.headTail === id && setAdded(true)
    })
  }
  }, [finished, cartData])
    
  return (
    <div>
    <Header/>
    {amiibo && finished ? 
    <div className='py-4'>
    <ItemDescription name={amiibo.amiibo.character} 
                     type={amiibo.amiibo.type}  
                     price={price} 
                     image={amiibo.amiibo.image} 
                     gameSeries={amiibo.amiibo.gameSeries}
                     headTail={id}
                     added={added}
                     /> 
    </div>
    : 
    <ItemSkeletonLoading/>
    }
    <div className='fixed bottom-3 xl:right-5 right-0 z-50'>
      <CartComponent/>
    </div>
    </div>
  )
}
