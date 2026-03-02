import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import JobDesign from './pages/JobDesign';
import Help from './pages/Help';
import Customers from './pages/Customers';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="jobdesign" element={<JobDesign />} />
            <Route path="help" element={<Help />} />
            <Route path="customers" element={<Customers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
