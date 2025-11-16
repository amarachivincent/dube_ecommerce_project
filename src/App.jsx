import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StoresPage from './pages/StoresPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SubscribePage from './pages/SubscribePage';
import PreviewPage from './pages/PreviewPage';
import DetailsPage from './pages/DetailsPage';
import AllPage from './pages/AllPage';
import NewsPage from './pages/NewsPage';
import AdminDashboard from './pages/AdminDashboard'; 

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [stores, setStores] = useState([]); // New state for store data
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let getTimer = () => {
        let date = new Date().toLocaleString();
        return date;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from your combined API endpoint
                const response = await fetch("http://businessreviews.com.ng/dist/api.php?q=stores");
                //const response = await fetch("http://localhost/dube/api.php?q=stores");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                
                setProducts(data.products);
                setCategories(data.categories);
                setStores(data.stores); // Set the new stores state
                setNews(data.news);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<HomePage getTimer={getTimer} />} />
                        {/* StoresPage, PreviewPage, DetailsPage now use the 'stores' prop */}
                        <Route path="/stores" element={<StoresPage stores={stores} getTimer={getTimer} />} />
                        <Route path="/about" element={<AboutPage getTimer={getTimer} />} />
                        <Route path="/contact" element={<ContactPage getTimer={getTimer} />} />
                        <Route path="/mail" element={<SubscribePage getTimer={getTimer} />} />
                        <Route path="/news" element={<NewsPage getTimer={getTimer} news={news} />} />
                        <Route path="/preview" element={<PreviewPage products={products} getTimer={getTimer} />} />
                        <Route path="/details/:productId" element={<DetailsPage products={products} getTimer={getTimer} />} />
                        {/* AllPage continues to use 'products' and 'categories' */}
                        <Route path="/all" element={<AllPage products={products} categories={categories} getTimer={getTimer} />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;