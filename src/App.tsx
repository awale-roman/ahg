import './App.scss';

import Footer from './component/footer';
import Header from './component/Header';
import ProductList from './component/Product';
// import Slider from './component/Slider';
import products from './helpers/data';

function App() {

  return (
    <>
      <Header />
      {/* <Slider /> */}
      <ProductList products={products} />
      <Footer />
    </>
  );
}

export default App;
