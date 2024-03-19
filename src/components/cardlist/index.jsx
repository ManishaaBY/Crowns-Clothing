import React, { useEffect } from 'react';
import { CardComp } from '../card';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/action/action';

export const CardList = ({ categoryId }) => {
  const categories = useSelector(state => state.user.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const category = categories ? categories[categoryId] : null;

  if (!category || !category.items || !Array.isArray(category.items)) {
    return null;
  }

  return (
    <div className="card-container">
      <h1 style={{ textAlign: "center", paddingTop: "40px" }}>
        <span style={{ color: "black", WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "black" }}>
          {category.title.toUpperCase() + " "}
        </span>
        <span style={{ color: "transparent", WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "black" }}>
          COLLECTION
        </span>
      </h1>
      <Grid container spacing={2} direction="row" justifyContent="center">
        {category.items.map(item => (
          <CardComp key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  );
};
