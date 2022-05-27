import React, {useEffect, useState, ReactElement} from 'react'
import Header from '../../components/HeaderComponent'
import { useParams } from 'react-router-dom'
import { getAmiiboByHeadTail } from '../../services/amiibo.service'
import ItemDescription from './ItemDescription'
import CartComponent from '../../components/cart/index'
import { useSelector } from 'react-redux'
import { IDescriptcion } from '../../pages/ItemResume/ItemDescription'


type IParams = {
  id: any
}

export default function ItemResume() : ReactElement {
  const { id } = useParams<IParams>()

  let price = parseInt(id, 10);

  const [amiibo, setAmiibo] = useState<any>({})
  const [finished, setfinished] = useState(false)
  const [added, setAdded] = useState(false)

  const cartData = useSelector((state: any) => {
    return state.cartRoot.cart
   })   

  const fetch = async () => {
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
  
  console.log(added);
  
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
    <p>Loading...</p>  
    }
    <div className='fixed bottom-3 xl:right-5 right-0 z-50'>
      <CartComponent/>
    </div>
    </div>
  )
}
