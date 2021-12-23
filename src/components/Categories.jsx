import '../assets/styles/components/Categories.scss';
import { connect } from 'react-redux';
import { getCategory } from '../actions';

const Categories = (props) => {
  const { byCategory } = props;

  console.log(byCategory);

  const handleCategorie = (e) => {
    const category = e.target.outerText;
    console.log(category);
    props.getCategory(category.toLowerCase());
  };

  return (
    <>
      <h2 className='categories__title'>Categorías</h2>
      <div className='categories__container'>
        <div className='categories__container--item'>
          <span onClick={handleCategorie}>Sudaderas</span>
        </div>
        <div className='categories__container--item'>
          <span>Pantalones</span>
        </div>
        <div className='categories__container--item'>
          <span>Camisetas</span>
        </div>
        <div className='categories__container--item'>
          <span>Gorras</span>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    byCategory: state.byCategory,
  };
};

const mapDispatchToProps = {
  getCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
