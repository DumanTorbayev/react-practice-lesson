import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Categories = ({activeCategory, items, handleClickCategory}) => {
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => handleClickCategory(null)}
                >Все</li>
                {items &&
                items.map((name, index) =>
                    <li
                        className={
                            activeCategory === index ? 'active' : ''
                        }
                        onClick={() => handleClickCategory(index)}
                        key={`${index}_${name}`}
                    >
                        {name}
                    </li>
                )
                }
            </ul>
        </div>
    );
};

Categories.propTypes = {
    //activeCategory: PropTypes.oneOf([PropTypes.number.isRequired, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClickCategory: PropTypes.func.isRequired,
}

Categories.defaultProps = {
    activeCategory: 0,
}

export default memo(Categories); // memo для избавления от лишнего ререндера
