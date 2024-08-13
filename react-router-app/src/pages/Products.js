import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

export default function Products() {
  return (
    <>
      <h1>My products component</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.title}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
