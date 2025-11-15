// src/pages/NewsPage.jsx
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';

const NewsPage = ({ getTimer, news }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextArticle = () => {
        // Increment the index, wrapping around to 0 if it reaches the end
        setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
    };

    const prevArticle = () => {
        // Decrement the index, wrapping around to the last item if it goes below 0
        setCurrentIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length);
    };

    const currentArticle = news[currentIndex];

    return (
        <>
            <PageHeader title="Dube" date={getTimer()} />
            <div className="news-grid container-fluid mt-4">
              

                {news && news.length > 0 && currentArticle ? (
                    <>
                        <div key={currentArticle.id} className="row mb-4">
                            {/* Left column for the image */}
                            <div className="col-lg-6 col-md-12">
                                <img
                                    src={`images/${currentArticle.image}`}
                                    className="img-fluid news-image shadow-sm"
                                    alt={currentArticle.title}
                                />
                         {/* Updated Navigation controls */}
                        <div className="d-flex justify-content-center align-items-center mt-2">
                            <button className="btn btn-outline-default me-2" onClick={prevArticle}>
                                &larr;
                            </button>
                            <span className="mx-2">
                                {currentIndex + 1} of {news.length}
                            </span>
                            <button className="btn btn-outline-default ms-2" onClick={nextArticle}>
                                &rarr;
                            </button>
                        </div>
                            </div>

                            {/* Right column for the description */}
                            <div className="col-lg-6 col-md-12">
                                <div className="news-item">
                                    <div className="news-item-body">
                                        {new Date(currentArticle.created_at).toLocaleDateString()}
                                        <h6 className="card-title">{currentArticle.title}</h6>
                                        <br/>
                                        <p className="card-text">{currentArticle.content}</p>
                                    
                                        <p className="card-text">{currentArticle.category}</p>
                                         
                                        <p className="card-text">{currentArticle.author}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                      
                    </>
                ) : (
                    <div className="col-12 text-center">
                        <p>No news articles found at this time.</p>
                    </div>
                )}
            </div>
            <PageFooter />
        </>
    );
};

export default NewsPage;