import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import BackButton from "../components/BackButton";
import Categories from "../components/Categories";
import About from "../components/About";
import ProductDetails from "../components/ProductDetails";
import ProductFeatures from "../components/ProductFeatures";
import SimilarProducts from "../components/SimilarProducts";
import ProductGallery from "../components/ProductGallery";
const SingleProductPage = () => {
  let { id } = useParams();
  const { single_product, getSingleProduct } = useGlobalContext();
  useEffect(() => {
    getSingleProduct(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <section>
      <div className="container">
        <BackButton />
      </div>
      <div className="container">
        <ProductDetails {...single_product}/>
        <ProductFeatures {...single_product}/>
        <ProductGallery {...single_product}/>
        <SimilarProducts {...single_product}/>
        <Categories />
        <About />
      </div>
    </section>
  );
};

export default SingleProductPage;
