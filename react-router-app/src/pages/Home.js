import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>My home component</h1>
      <p>
        Go to <Link to="products">List of producst</Link>
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
}
