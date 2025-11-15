import React, { useState, useEffect } from 'react';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ category_id: null, category_name: '', description: '' });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await fetch('http://localhost/daniel/admin_api.php?table=categories');
    const data = await response.json();
    setCategories(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = form.category_id ? 'PUT' : 'POST';
    const url = form.category_id ? `http://localhost/daniel/admin_api.php?table=categories&id=${form.category_id}` : 'http://localhost/daniel/admin_api.php?table=categories';

    await fetch(url, {
      method: method,
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });
    setForm({ category_id: null, category_name: '', description: ''});
    fetchCategories();
  };

  const handleEdit = (categories) => {
    setForm(categories);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this categories?')) {
      await fetch(`http://localhost/daniel/admin_api.php?table=categories&id=${id}`, { method: 'DELETE' });
      fetchCategories();
    }
  };

  return (
    <div>
      <h3>Manage Categories</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <input type="text" name="category_name" value={form.category_name} onChange={handleChange} placeholder="Category name" className="form-control" required />
        </div>
        <div className="mb-2">
          <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Description" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">{form.category_id ? 'Update Categories' : 'Add Categories'}</button>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.category_id}>
              <td>{category.category_id}</td>
              <td>{category.category_name}</td>
              <td>
                <button onClick={() => handleEdit(category)} className="btn btn-primary btn-sm me-2">Edit</button>
                <button onClick={() => handleDelete(category.category_id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryManager;