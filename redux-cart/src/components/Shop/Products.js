import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    name: "My First Book",
    description: "This is my first book",
  },
  {
    id: "p2",
    price: 5,
    name: "My Second Book",
    description: "This is my second book",
  },
  {
    id: "p3",
    price: 4,
    name: "My Third Book",
    description: "This is my third book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
