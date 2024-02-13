import './reset.css';
import './styles.css';
import { site } from '@/lib/config';
import Link from 'next/link';
import Nav from '@/components/Nav';

export const metadata = {
  title: `${site.title} - ${site.tagline}`,
  description: `${site.description}`,
  keywords: `${site.keywords}`,
};

export default function RootLayout({ children }) {
  const Year = new Date().getFullYear();
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <a href="" className="site-logo">
            <span className="site-logo__name">{site.title}</span>
            <span className="site-logo__tagline">{site.tagline}</span>
          </a>
          <nav>
            <Nav />
          </nav>
        </header>
        <main>
          <div className="wrapper">
            {children}
          </div>
        </main>
        <footer className="site-footer">
          <p>Copyright &copy; {Year} {site.owner}</p>
        </footer>
      </body>
    </html>
  );
}
