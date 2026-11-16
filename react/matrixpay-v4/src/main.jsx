import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/styles.css';

// StrictMode intentionally disabled: one-shot intro/loader timelines must not double-run.
createRoot(document.getElementById('root')).render(<App />);
