import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import VerificationForm from './component/VerificationForm.jsx';
import './index.css'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VerificationForm />
  </StrictMode>
);


