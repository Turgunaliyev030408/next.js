import { useState, useEffect } from 'react';

// Ma'lumotlarni yuklash funktsiyasi
async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(products => {
        setProducts(products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Next.js Home Page</h1>
      <h2>Products:</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
