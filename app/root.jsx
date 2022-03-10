import { Outlet, LiveReload, Links, Scripts } from 'remix';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import styles from './styles/app.css';
import tailwindStyles from './tailwind.css';

export const links = () => {
  return [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: tailwindStyles },
  ];
};

export default function App() {
  return (
    <html lang="eng">
      <head>
        <Links />
        <meta charSet="utf-8" />
        <title>STUDIO.ARUCA</title>
      </head>
      <body className="text-primary--gray antialiased flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
