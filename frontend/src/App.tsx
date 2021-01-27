import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import Restaurants from './components/Restaurants';
import { CategoryAndRestaurant } from './types';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

const App: FC = () => {
  const [sections, setSections] = useState<CategoryAndRestaurant[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<CategoryAndRestaurant[]>('http://localhost:8000/discovery?lat=60.1709&lon=24.941');
        setSections(data)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <div className="App">
          <Route exact path='/restaurants'>
          {
            loading ? <h1>Loading...</h1> :
            <Restaurants  restaurantAndCategories={sections}/>
          }
          </Route>
        </div>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
