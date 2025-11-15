import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import CategoryMenu from '../components/CategoryMenu';
import './AllPage.css'; // Import the dedicated CSS file

const AllPage = ({ products, categories, getTimer }) => {
const navigate = useNavigate();
 const [selectedCategory, setSelectedCategory] = useState('All');

 const handleSelectStore = (productId) => {
navigate(`/details/${productId}`);
 };

 const handleSelectCategory = (category) => {
 setSelectedCategory(category);
 };

 // Filter products based on the selected category
 const filteredProducts = selectedCategory === 'All' ? products
 : products.filter(product => product.type.toLowerCase() === selectedCategory.toLowerCase());

 return (
 <>
 <PageHeader title="Dube" date={getTimer()} />
 <section>
 <div className="all-grid container-fluid py-4 gx-0 mb-0">
 <div className="row no-gutters d-flex justify-content-start gx-0 mb-0 all-grid-inner">
 {/* Category Menu Column: Left on large, top on medium/small */}
 <div className="col-12 col-lg-2 d-flex justify-content-center gx-0 mb-0">
 <CategoryMenu
categories={categories}
 selectedCategory={selectedCategory}
 onSelectCategory={handleSelectCategory}
 />
</div>

 <div className="col-12 col-lg-10 all-grid-right">
 <div className="all-grid container-fluid home-page-layout">
 {/* The corrected responsive row for the image grid */}
 <div className="row row-cols-3 row-cols-lg-5 home-content-scrollable">
 {filteredProducts.map((product) => (
 <div key={product.product_id} className="col gx-2 py-1">
 <div
 className="card"
 onClick={() => handleSelectStore(product.product_id)}
 style={{ cursor: 'pointer' }}
 >
 <img
src={`images/${product.thumbnail}`} className="all-image card-img-top"
alt={`${product.title}`}
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