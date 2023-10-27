// import { useContext } from 'react';
import ItemContext from '../../Context/ItemContext';
import ErrorPage from '../../ErrorPage';
import Loader from '../../Loader/Loader';
import useFakeAPI from '../../hooks/useFakeAPI';
import Cards from './Cards';
import '../style/shop.css';

export default function Shop() {
  const { items, loading, error } = useFakeAPI();
  // const { items, loading, error } = useContext(ItemContext);

  return (
    <ItemContext.Provider value={{ items }}>
      <section className="shopPage">
        {loading ? <Loader /> : error ? <ErrorPage /> : <Cards />}
      </section>
    </ItemContext.Provider>
  );
}
