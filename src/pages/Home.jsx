import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup, Pizza, PizzaLoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filterActions";
import {getPizzas} from "../redux/actions/pizzasActions";


const categoryNames = ['Bсe', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [{name: 'популярности', type: 'popular'}, {name: 'цене', type: 'price'}, {name: 'алфавиту', type: 'alphabet'},];

const Home = () => {
    const pizzas = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPizzas());
    }, [])

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
                {isLoaded
                    ? Array(8).fill(<PizzaLoadingBlock />)
                    : pizzas.map((obj) => <Pizza key={obj.id} {...obj} />)
                }
            </div>
        </div>
    );
};

Home.defaultProps = {
    pizzas: []
}

export default Home;
