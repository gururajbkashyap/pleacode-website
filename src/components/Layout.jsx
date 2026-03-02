import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import DevNotice from './DevNotice';

function scrollToContactForm() {
  const el = document.getElementById('contact');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && window.location.hash === '#contact') {
      const t = setTimeout(scrollToContactForm, 150);
      return () => clearTimeout(t);
    }
  }, [location.pathname, location.key]);

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === '#contact') scrollToContactForm();
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <>
      <Navbar />
      <DevNotice />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
