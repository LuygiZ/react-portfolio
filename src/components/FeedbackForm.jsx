import React, { useState, useEffect } from 'react';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  // URL do backend no Vercel
  const API_URL = "https://portfolio-forms.vercel.app/api";

  useEffect(() => {
    fetch(`${API_URL}/feedbacks`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setFeedbacks(data))
      .catch(err => console.error('Error fetching feedbacks:', err));
  }, [API_URL]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = { name, email, rating, message };

    fetch(`${API_URL}/feedbacks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setFeedbacks([data, ...feedbacks]);
        setName('');
        setEmail('');
        setRating(5);
        setMessage('');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch(err => console.error('Error submitting feedback:', err));
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      <div className="max-w-md mx-auto my-10 p-6 bg-neutral-800 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Deixe a sua Avaliação</h2>
        {submitted ? (
          <p className="text-center text-green-400">Obrigado pela sua opinião!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 text-black rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-black rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Avaliação</label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full px-4 py-2 text-black rounded-md"
                required
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <option key={star} value={star}>
                    {star} Estrela{star > 1 && 's'}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 text-black rounded-md"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Enviar
            </button>
          </form>
        )}
      </div>

      <div className="max-w-md mx-auto my-10 p-6 bg-neutral-800 text-white rounded-lg shadow-lg lg:ml-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Opiniões Anteriores</h2>
        {feedbacks.length > 0 ? (
          <ul>
            {feedbacks.map(feedback => (
              <li key={feedback._id} className="mb-4 border-b border-neutral-700 pb-4">
                <p className="text-lg font-semibold">{feedback.name}</p>
                <p className="text-sm text-gray-400">{feedback.email}</p>
                <p className="text-yellow-500">Avaliação: {feedback.rating} Estrela{feedback.rating > 1 && 's'}</p>
                <p className="text-gray-200 mt-2">{feedback.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-400">Nenhuma opinião ainda.</p>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
