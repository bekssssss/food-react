import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DishList from './components/DishList';
import DishPage from './pages/DishPage';
import IngredientPage from './pages/IngredientPage';
import GlobalStyle from './GlobalStyle';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <div>
                <Routes>
                    <Route path="/" element={<DishList />} />
                    <Route path="/dish/:id" element={<DishPage />} />
                    <Route path="/ingredient/:ingredient" element={<IngredientPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
