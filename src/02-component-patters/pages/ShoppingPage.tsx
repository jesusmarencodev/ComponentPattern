
import ProductCard, { ProductButtons,ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";
import '../styles/custom-styles.css';

const product= products[0];

export const ShoppingPage = () => {

  
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <ProductCard
        product={product}
        className="bg-dark text-white"
        key={product.id}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage
              className="custom-image "
              style={{
                boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.5)",
              }}
            />
            <ProductTitle className="text-bold text-white" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(+2)}>+2</button>
            )}
            <br/>
            <span>Count {count}  --- maxCount : {maxCount}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
}
