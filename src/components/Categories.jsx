import '../styles/components/Categories.scss'
import { getCategory } from '../actions'
import { useDispatch } from 'react-redux'

const Categories = () => {
  const dispatch = useDispatch()

  const handleCategory = (e) => {
    const category = e.target.outerText
    dispatch(getCategory(category.toLowerCase()))
  }

  return (
    <>
      <h2 className='categories__title'>Categorías</h2>
      <div className='categories__container'>
        <div className='categories__container--item' onClick={handleCategory}>
          <span>Todos</span>
        </div>
        <div className='categories__container--item' onClick={handleCategory}>
          <span>Sudaderas</span>
        </div>
        <div className='categories__container--item' onClick={handleCategory}>
          <span>Pantalones</span>
        </div>
        <div className='categories__container--item' onClick={handleCategory}>
          <span>Camisetas</span>
        </div>
        <div className='categories__container--item' onClick={handleCategory}>
          <span>Chompas</span>
        </div>
      </div>
    </>
  )
}

export default Categories
