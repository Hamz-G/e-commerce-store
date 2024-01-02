import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada formun gönderilmesiyle ilgili işlemleri gerçekleştirebilirsiniz
    console.log('Form Verileri:', formData);
    // İstediğiniz API'ye veya başka bir işleme gönderme işlemlerini ekleyebilirsiniz
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>İletişim Formu</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', margin: '10px 0' }}>
          Adınız:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </label>
        <label style={{ display: 'block', margin: '10px 0' }}>
          E-posta:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </label>
        <label style={{ display: 'block', margin: '10px 0' }}>
          Mesajınız:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </label>
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#4CAF50', color: 'white', border: 'none' }}>Gönder</button>
      </form>
    </div>
  );
};

export default ContactPage;
