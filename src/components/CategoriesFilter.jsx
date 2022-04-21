import '../assets/styles/components/CategoriesFilter.scss';
import { useDispatch } from 'react-redux';
import * as shopActions from '../actions';
import classNames from 'classnames';
import { useState } from 'react';

export const CategoriesFilter = () => {
  const dispatch = useDispatch();
  const { getCategory } = shopActions;
  const [activeCategory, setActiveCategory] = useState('all');

  const handleSelectCategory = (category) => {
    dispatch(getCategory({ category }));
    setActiveCategory(category);
  };

  const categoryClass = (category) =>
    classNames({
      'categories-filter__item': true,
      'categories-filter__item--active': activeCategory === category,
    });

  return (
    <div className='categories-filter-container'>
      <p onClick={() => handleSelectCategory('all')} className={categoryClass('all')}>
        Todos
      </p>
      <span>|</span>
      <p onClick={() => handleSelectCategory('hoodies')} className={categoryClass('hoodies')}>
        Hoodies
      </p>
      <span>|</span>
      <p onClick={() => handleSelectCategory('chompas')} className={categoryClass('chompas')}>
        Chompas
      </p>
      <span>|</span>
      <p onClick={() => handleSelectCategory('pantalones')} className={categoryClass('pantalones')}>
        Pantalones
      </p>
    </div>
  );
};
