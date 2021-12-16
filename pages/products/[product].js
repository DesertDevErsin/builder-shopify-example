import { useRouter } from "next/router";
import { builder, BuilderComponent } from "@builder.io/react";

export async function getServerSideProps() {
  const content = await builder
    .get("shipping-info", {
      query: { name: "Shipping info" },
    })
    .promise();

  return {
    props: {
      content,
    },
  };
}

const Product = ({ content }) => {
  const router = useRouter();
  const { product } = router.query;

  return (
    <div className="container">
      <BuilderComponent model="shipping-info" content={content} />
    </div>
  );
};

export default Product;
