import Header from "@/components/Header"
import Featured from "@/components/Featured"
import { mongooseConnect } from "@/lib/mongoose"
import { Product } from "@/models/Product";

export default function Home({featuredProduct}) {
  return (
    <>
      <Header/>
      <Featured product={featuredProduct}/>
    </>
  )
}

export async function getServerSideProps(){
  const featuredProductId = '64a002137c1e21712ad052f0'
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    },
  };
}
