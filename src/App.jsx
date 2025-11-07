import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StoresPage from './pages/StoresPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SubscribePage from './pages/SubscribePage'; // Assuming this is the '/mail' route
import PreviewPage from './pages/PreviewPage';
import DetailsPage from './pages/DetailsPage';
import AllPage from './pages/AllPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [customStores, setCustomStores] = useState([]);
    // currentTime state is not directly used in App.jsx, but getTimer is passed
    // const [currentTime, setCurrentTime] = useState(''); 

    // Memoize doGet using useCallback to prevent it from being recreated on every render.
    // This is good practice, especially if it were a dependency for other effects or memoized components.
    const doGet = useCallback((url) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    try {
                        let result = JSON.parse(xhr.responseText);
                        setCustomStores(result);
                    } catch (e) {
                        console.error("Error parsing JSON for doGet:", e);
                    }
                } else {
                    console.error("doGet request failed with status:", xhr.status);
                }
            }
        };
        xhr.send(null);
    }, []); // Empty dependency array means doGet is stable and won't change across renders

    // Memoize getTimer using useCallback for stability when passed as a prop.
    const getTimer = useCallback(() => {
        let date = new Date().toLocaleString();
        return date;
    }, []); // Empty dependency array means getTimer is stable

    useEffect(() => {
        // Fetch data when the component mounts
        doGet("http://localhost/daniel/api.php?q=more");
        // If you want to use the online API, uncomment the line below and comment the localhost one:
        // doGet("https://businessreviews.com.ng/dist/api.php?q=more");
    }, [doGet]); // doGet is a dependency, but it's stable due to useCallback

    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<HomePage getTimer={getTimer} />} />
                        <Route path="/stores" element={<StoresPage customStores={customStores} getTimer={getTimer} />} />
                        <Route path="/about" element={<AboutPage getTimer={getTimer} />} />
                        <Route path="/contact" element={<ContactPage getTimer={getTimer} />} />
                        {/* Assuming '/mail' corresponds to SubscribePage based on previous context */}
                        <Route path="/mail" element={<SubscribePage getTimer={getTimer} />} />
                        {/* Ensure 'stores' prop is passed to pages that need to filter/display products */}
                        <Route path="/preview" element={<PreviewPage stores={customStores} getTimer={getTimer} />} />
                        {/* Dynamic route for details page, passing all stores for lookup */}
                        <Route path="/details/:storeId" element={<DetailsPage stores={customStores} getTimer={getTimer} />} />
                        <Route path="/all" element={<AllPage stores={customStores} getTimer={getTimer} />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;