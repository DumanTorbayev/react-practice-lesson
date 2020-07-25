import React, {useCallback} from 'react';
import {Categories, SortPopup, Pizza} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filterActions";


const categoryNames = ['Bсe', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [{name: 'популярности', type: 'popular'}, {name: 'цене', type: 'price'}, {name: 'алфавиту', type: 'alphabet'},];

const Home = () => {
    const pizzas = useSelector(({pizzas}) => pizzas.items);
    const dispatch = useDispatch();

    const handleSelectItem = useCallback(index => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    handleClickItem={handleSelectItem}
                    items={categoryNames}
                />
                <SortPopup
                    items={sortNames}
                />
            </div>

            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {
                    pizzas.map((obj) => <Pizza key={obj.id} {...obj} />)
                }
            </div>
        </div>
    );
};

Home.defaultProps = {
    pizzas: []
}

export default Home;