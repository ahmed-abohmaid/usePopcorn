import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './components/StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} color="#fcc419" size={48} defaultRating={3} />
    <StarRating
      maxRating={5}
      color="red"
      size={60}
      message={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      defaultRating={6}
    />
  </React.StrictMode>
);
