import Header from "@/components/Header"
import Featured from "@/components/Featured"
import { mongooseConnect } from "@/lib/mongoose"
import { Product } from "@/models/Product";
import NewProducts from "@/components/NewProducts";

export default function Home({featuredProduct,newProducts}) {
  return (
    <>
      <Header/>
      <Featured product={featuredProduct}/>
      <NewProducts products={newProducts}/>
    </>
  )
}

export async function getServerSideProps(){
  const featuredProductId = '64a002137c1e21712ad052f0'
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  
  //To display last product added at the top 
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
