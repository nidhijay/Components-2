

export default function NavBar({ user }) {
  return (
    <>
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
      
      {user ? (
        <>
          <p>Welcome {user.name}</p>
          {user.itemsInCart > 0 && <p>{user.itemsInCart} in your cart</p>}
        </>
      ) : (
        <p>Login</p>
      )}
    </>
  );
}

