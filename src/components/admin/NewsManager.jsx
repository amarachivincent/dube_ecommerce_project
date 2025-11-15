import React, { useState, useEffect } from 'react';

const NewsManager = () => {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({ id: null, title: '', content: '', image_url: '', author_name: '', category: '', is_published: '' });

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const response = await fetch('http://localhost/daniel/admin_api.php?table=news');
    const data = await response.json();
    setNews(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = form.id ? 'PUT' : 'POST';
    const url = form.id ? `http://localhost/daniel/admin_api.php?table=news&id=${form.id}` : 'http://localhost/daniel/admin_api.php?table=news';

    await fetch(url, {
      method: method,
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });
    setForm({ id: null, title: '', content: '', image_url: '',  author_name: '', category: '', is_published: ''});
    fetchNews();
  };

  const handleEdit = (news) => {
    setForm(news);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this news?')) {
      await fetch(`http://localhost/daniel/admin_api.php?table=news&id=${id}`, { method: 'DELETE' });
      fetchNews();
    }
  };

  return (
    <div>
      <h3>Manage News</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" className="form-control" required />
        </div>
        <div className="mb-2">
          <input type="text" name="content" value={form.content} onChange={handleChange} placeholder="Content" className="form-control" />
        </div>
        <div className="mb-2">
          <input type="text" name="image_url" value={form.image_url} onChange={handleChange} placeholder="Image url" className="form-control" />
        </div>
        <div className="mb-2">
          <input type="text" name="author_name" value={form.author_name} onChange={handleChange} placeholder="Author name" className="form-control" />
        </div>
         <div className="mb-2">
          <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Category" className="form-control" />
        </div> 
        <div className="mb-2">
          <input type="text" name="is_published" value={form.is_published} onChange={handleChange} placeholder="Is published" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">{form.id ? 'Update News' : 'Add News'}</button>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {news.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <button onClick={() => handleEdit(item)} className="btn btn-primary btn-sm me-2">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsManager;