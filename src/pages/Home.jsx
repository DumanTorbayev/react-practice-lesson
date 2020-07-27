import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup, Pizza, PizzaLoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filterActions";
import {getPizzas} from "../redux/actions/pizzasActions";


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
    {
        name: 'популярности',
        type: 'popular',
        order: 'desc'
    },
    {
        name: 'цене',
        type: 'price',
        order: 'desc'
    },
    {
        name: 'алфавиту',
        type: 'name',
        order: 'asc'
    },
];

const Home = () => {
    const pizzas = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPizzas(sortBy, category));
    }, [category, sortBy])

    const handleSelectItem = useCallback(index => {
        dispatch(setCategory(index));
    }, []);

    const handleSortByType = useCallback(obj => {
        dispatch(setSortBy(obj));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    handleClickCategory={handleSelectItem}
                    items={categoryNames}
                />
                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortNames}
                    handleSortByType={handleSortByType}
                />
            </div>

            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {isLoaded
                    ? pizzas.map((obj) => <Pizza key={obj.id} {...obj} />)
                    : Array(8).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)
                }
            </div>
        </div>
    );
};

Home.defaultProps = {
    pizzas: []
}

export default Home;
