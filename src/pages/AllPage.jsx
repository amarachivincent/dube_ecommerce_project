import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import CategoryMenu from '../components/CategoryMenu';
import './AllPage.css'; // Import the dedicated CSS file

const AllPage = ({ stores, getTimer }) => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleSelectStore = (storeId) => {
        navigate(`/details/${storeId}`);
    };

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    // Filter stores based on the selected category
    const filteredStores = selectedCategory === 'All'
        ? stores
        : stores.filter(store => store.type.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <>
            <PageHeader title="Dube" date={getTimer()} />
            <section>
                <div className="all-grid container-fluid py-4 gx-0 mb-0">
                    <div className="row no-gutters gx-0 mb-0 all-grid-inner">
                        {/* Category Menu Column: Left on large, top on medium/small */}
                        <div className="col-12 col-lg-2 d-flex justify-content-center gx-0 mb-0">
                            <CategoryMenu
                                selectedCategory={selectedCategory}
                                onSelectCategory={handleSelectCategory}
                            />
                        </div>

                        <div className="col-12 col-lg-10">
                            <div className="all-grid container-fluid home-page-layout">
                                {/* The corrected responsive row for the image grid */}
                                <div className="row row-cols-3 row-cols-lg-5 home-content-scrollable">
                                    {filteredStores.map((store) => (
                                        <div key={store.id} className="col gx-2 py-1">
                                            <div
                                                className="card"
                                                onClick={() => handleSelectStore(store.id)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <img
                                                    src={`images/${store.image}`}
                                                    className="all-image card-img-top"
                                                    alt={`${store.title} store`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PageFooter />
        </>
    );
};

export default AllPage;