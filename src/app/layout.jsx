import '../../styles/globals.css';
import { Header } from '../components/Shadcn/Header';

export const metadata = {
  title: 'Welcome',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
