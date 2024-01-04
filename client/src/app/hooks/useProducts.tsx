import { useEffect } from "react";
import { productSelectors, fetchProductsAsync, fetchFilters } from "../../features/Catalog/catalogSlice";
import { useAppDispatch, useAppSelector } from "../store/configureStore";

export default function useProducts () {
    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded, filtersLoaded, brands, types, metaData} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();
  
  
  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch, filtersLoaded])
  
  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }), [dispatch, filtersLoaded]

  return  {
    products,
    productsLoaded,
    filtersLoaded,
    brands,
    types,
    metaData
  }
}