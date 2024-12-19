import './App.scss';

import Footer from './component/footer';
import Header from './component/Header';
import ProductList from './component/Product';
import products from './helpers/data';

function App() {

  return (
    <div className="App">
      <Header />
      <ProductList products={products} />
      <Footer />
    </div>
  );
}

export default App;
