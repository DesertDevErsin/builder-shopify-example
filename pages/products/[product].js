import { useRouter } from "next/router";
import { builder, BuilderComponent } from "@builder.io/react";

export async function getServerSideProps({ params: { product } }) {
  const {
    data: { shippingDays },
  } = await builder
    .get("shipping-times", {
      query: { "data.product": product },
    })
    .promise();

  const content = await builder
    .get("shipping-info", {
      query: { name: "Shipping info" },
    })
    .promise();

  return {
    props: {
      content,
      shippingDays,
    },
  };
}

const Product = ({ content, shippingDays }) => {
  const router = useRouter();
  const { product } = router.query;

  return (
    <div className="container">
      <h1>Buy {product}!</h1>
      <BuilderComponent
        model="shipping-info"
        data={{ product, shippingDays }}
        content={content}
      />
    </div>
  );
};

export default Product;
