import { useEffect } from 'react'
import { CardCheckout } from '../components/CardCheckout'
import '../styles/containers/CheckoutList.scss'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'
import { Layout } from './Layout'
import { useSelector } from 'react-redux'

const CheckoutList = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate()
  const { cart } = useSelector((state) => state)

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/')
    }
  }, [cart, navigate])

  return (
    <Layout title='Carrito | Ropa Shop 😉' subtitle='Paga seguro en Whatsapp'>
      <div className='checkout-container'>
        <div className='checkout-cart'>
          {cart.map((value) => (
            <CardCheckout key={value.id} {...value} />
          ))}
        </div>

        <Form />
      </div>
    </Layout>
  )
}

export default CheckoutList
