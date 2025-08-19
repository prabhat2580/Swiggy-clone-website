import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FoodCategory.css';
import { useCart } from '../../Context/CartContext'; // adjust path
import ShimmerCard from '../../ShimmerLoading/ShimmerCard';

export default function FoodCategory() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart, increment, decrement, getItemQuantity } = useCart();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/recipes?sortBy=name&order=asc');
        setRecipes(res?.data?.recipes);
      } catch (err) {
        setError('Failed to load recipes.');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return (
    <div className="food-category-container">
      {Array(8).fill(0).map((_, idx) => (
        <ShimmerCard key={idx} />
      ))}
    </div>
  );
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>List of Yummies</h2>
      <div className="food-category-container">
        {recipes?.map((recipe) => {
          const quantity = getItemQuantity(recipe.id);
          return (
            <div key={recipe?.id} className="recipe-card">
              <img src={recipe?.image} alt={recipe?.name} />
              <div className="recipe-card-content">
                <h3>{recipe?.name}</h3>
                <p>Price: ₹{recipe?.caloriesPerServing}</p>
                <p>Rating: {recipe?.rating}</p>
                <div className="cuisine-add">
                  <span>Cuisine: {recipe?.cuisine}</span>

                  {quantity === 0 ? (
                    <button onClick={() => addToCart(recipe)}>Add</button>
                  ) : (
                    <div className="qty-controls">
                      <button onClick={() => decrement(recipe.id)}>-</button>
                      <span>{quantity}</span>
                      <button onClick={() => increment(recipe.id)}>+</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
