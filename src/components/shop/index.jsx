import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/action/action";
import { useEffect } from "react";
import { CardComp } from "../card";
import Grid from '@mui/material/Grid';
import './index.css'; 

export const Shop = () => {
    const category = useSelector(state => state.user.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (!category || !Array.isArray(category) ) {
        return null;
    }

    return (
        <div>
            {category.map((categoryItem, index) => (
                <div key={index} className="shop-category"> 
                    <h1 className="shop-category-title"> 
                        <span className="shop-category-title-text"> 
                            {categoryItem.title.toUpperCase() + " "}
                        </span>
                        <span className="shop-collection-text"> 
                            COLLECTION
                        </span>
                    </h1>

                    <Grid container spacing={2} justifyContent="center" className="shop-item-grid"> 
                        {categoryItem.items.slice(0, 4).map((item) => (
                            <CardComp key={item.id} item={item} />
                        ))}
                    </Grid>
                </div>
            ))}
        </div>
    );
};
