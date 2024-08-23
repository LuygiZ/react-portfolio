import React, { useState, useEffect, useContext } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import { LanguageContext } from '../context/LanguageContext';
import fireworksAnimation from '../animations/airplane.json'; // Importa a animação de fogos de artificio

const FeedbackForm = () => {
  const { language } = useContext(LanguageContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const feedbacksPerPage = 4;
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
        setTimeout(() => setSubmitted(false), 5000); // Duração mais longa para a animação
      })
      .catch(err => console.error('Error submitting feedback:', err));
  };

  const texts = {
    PT: {
      title: "Deixe a sua Avaliação",
      description: "Se tens alguma crítica ou ideia inovadora que queiras que eu desenvolva, não hesites em deixar aqui juntamente com a tua avaliação deste website ❤️",
      nameLabel: "Nome",
      emailLabel: "Email",
      ratingLabel: "Avaliação",
      messageLabel: "Mensagem",
      submitButton: "Enviar",
      thanksMessage: "Obrigado pela sua opinião!",
      previousFeedbacksTitle: "Opiniões Anteriores",
      noFeedbacksMessage: "Nenhuma opinião ainda.",
    },
    EN: {
      title: "Leave Your Feedback",
      description: "If you have any criticism or innovative idea that you want me to develop, feel free to leave it here along with your evaluation of this website ❤️",
      nameLabel: "Name",
      emailLabel: "Email",
      ratingLabel: "Rating",
      messageLabel: "Message",
      submitButton: "Submit",
      thanksMessage: "Thank you for your feedback!",
      previousFeedbacksTitle: "Previous Feedbacks",
      noFeedbacksMessage: "No feedback yet.",
    },
  };

  const currentText = texts[language];
  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirstFeedback, indexOfLastFeedback);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPaginationArrows = () => {
    return (
      <div className="flex justify-center mt-4">
        <button
          onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
          className={`mr-2 p-2 rounded ${currentPage === 1 ? 'text-gray-500' : 'text-white'}`}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => paginate(currentPage < Math.ceil(feedbacks.length / feedbacksPerPage) ? currentPage + 1 : currentPage)}
          className={`ml-2 p-2 rounded ${currentPage === Math.ceil(feedbacks.length / feedbacksPerPage) ? 'text-gray-500' : 'text-white'}`}
          disabled={currentPage === Math.ceil(feedbacks.length / feedbacksPerPage)}
        >
          <FaArrowRight />
        </button>
      </div>
    );
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: fireworksAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      <motion.div
        className="max-w-md mx-auto my-10 p-6 bg-neutral-800 text-white rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">{currentText.title}</h2>
        <p className="text-center text-neutral-400 mb-6">
          {currentText.description}
        </p>

        {submitted ? (
          <div className="flex flex-col items-center">
            <p className="text-center text-green-400">{currentText.thanksMessage}</p>
            <Lottie options={defaultOptions} height={200} width={200} />
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">{currentText.nameLabel}</label>
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
              <label className="block text-sm font-medium mb-2" htmlFor="email">{currentText.emailLabel}</label>
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
              <label className="block text-sm font-medium mb-2">{currentText.ratingLabel}</label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full px-4 py-2 text-black rounded-md"
                required
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <option key={star} value={star}>
                    {star} {language === 'PT' ? 'Estrela' : 'Star'}{star > 1 && 's'}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="message">{currentText.messageLabel}</label>
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
              {currentText.submitButton}
            </button>
          </form>
        )}
      </motion.div>

      <motion.div
        className="max-w-md mx-auto my-10 p-6 bg-neutral-800 text-white rounded-lg shadow-lg lg:ml-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">{currentText.previousFeedbacksTitle}</h2>
        {currentFeedbacks.length > 0 ? (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {currentFeedbacks.map(feedback => (
              <motion.li
                key={feedback._id}
                className="mb-4 border-b border-neutral-700 pb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-lg font-semibold">{feedback.name}</p>
                <p className="text-sm text-gray-400">{feedback.email}</p>
                <p className="text-yellow-500">{currentText.ratingLabel}: {feedback.rating} {language === 'PT' ? 'Estrela' : 'Star'}{feedback.rating > 1 && 's'}</p>
                <p className="text-gray-200 mt-2">{feedback.message}</p>
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <p className="text-center text-gray-400">{currentText.noFeedbacksMessage}</p>
        )}

        {renderPaginationArrows()}
      </motion.div>
    </div>
  );
};

export default FeedbackForm;
