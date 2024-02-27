

export default function ProductCard({ name, description, price, imageUrl, isInStock, style }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px', ...style }}>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="price">${price}</div>
      {isInStock ? null : <p>Unavailable</p>}
      <button>Add to Cart</button>
    </div>
  );
}

