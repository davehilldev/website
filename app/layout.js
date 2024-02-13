import './reset.css';
import './styles.css';
import { site } from '@/lib/config';

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
            <ul className="site-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
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
