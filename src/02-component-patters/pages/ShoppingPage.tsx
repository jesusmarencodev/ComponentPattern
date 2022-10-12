import ProductCard, { ProductButtons,ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';


const product = {
  id:'1',
  title:'Coffee Mug - Card',
  img:'./coffee-mug.png'
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-image " />
          <ProductCard.Title className="text-white text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage
            className="custom-image "
            style={{
              boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.5)",
            }}
          />
          <ProductTitle
            title={"title from props' HOC"}
            className="text-white text-bold"
          />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product}
          style={{
            backgroundColor: "#70D1F8",
          }}
        >
          <ProductImage
            style={{
              boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.5)",
            }}
          />
          <ProductTitle
            style={{
              fontWeight: "lighter",
            }}
          />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
}
