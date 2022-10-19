import './App.css';
import { useEffect } from 'react';
import {useTelegram} from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import CardList from './components/CardList/CardList';

function App() {
  const {onToggleButton, tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<CardList/>}/>
        <Route path={'form'} element={<Form />}/>
        <Route path={'v1'} element={<ProductList/>}/>
      </Routes>
    </div>
  );
}

export default App;