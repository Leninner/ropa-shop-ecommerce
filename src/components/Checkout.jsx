import { useContext, useEffect } from 'react'
import '../styles/components/Checkout.scss'
import { AppContext } from '../context'
import { Link } from 'react-router-dom'

const Checkout = ({ sumaTotal }) => {
  const { total, setTotal, toggleMenu, setToggleMenu } = useContext(AppContext)

  const handleMenu = () => setToggleMenu(!toggleMenu)

  useEffect(() => {
    setTotal(sumaTotal)
    // eslint-disable-next-line
  }, [sumaTotal]);

  return (
    <div className='checkout'>
      <div className='checkout-total'>
        <h4>Total</h4>
        <p className='checkout__price'>${total}</p>
      </div>

      <Link
        to='/checkout'
        onClick={handleMenu}
        style={{
          textDecoration: 'none',
          color: '#fff',
          width: '80%'
        }}
      >
        <button className='checkout__button'>Compra por Whatsapp!</button>
      </Link>
    </div>
  )
}

export default Checkout
