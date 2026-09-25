import './globals.css';

export const metadata = {
  title: 'Theweb Agency — Technology Should Be Useful',
  description: 'Digital Products, Bespoke Websites, Brand & Experience. From idea to something people can actually use. Serving clients worldwide from Sri Lanka to Norway.',
  icons: {
    icon: '/nav-logo-icon.webp',
  },
  keywords: [
    'Theweb Agency',
    'Digital Products',
    'Websites',
    'Brand & Experience',
    'Next.js',
    'React',
    'AI Solutions',
    'UX Design',
    'Sri Lanka',
    'Norway'
  ],
  openGraph: {
    title: 'Theweb Agency — Technology Should Be Useful',
    description: 'From idea to something people can actually use. 90+ international projects delivered.',
    images: ['/nav-logo-white.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/nav-logo-icon.webp" type="image/webp" />
      </head>
      <body>
        <div className="grid-mesh" />
        {children}
      </body>
    </html>
  );
}
