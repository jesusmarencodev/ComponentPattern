import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";


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
        <ProductCard product={product} > 
          <ProductImage/>
          <ProductTitle title={"el titulo desde props del HOC"}/>
          <ProductButtons/>

        </ProductCard>
        <ProductCard product={product} > 
          <ProductCard.Image/>
          <ProductCard.Title />
          <ProductCard.Buttons/>
        </ProductCard>
      </div>
    </div>
  );
}
