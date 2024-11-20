import '../../styles/globals.css';
import Script from 'next/script';
import { Header } from '../components/Shadcn/Header';

export const metadata = {
  title: 'Welcome',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Script type='module'
                src="https://customer-web-foundation-wink-cdn.aem-modules-dev.awscloud.external.telenet.be/v2.2.1/build/wink-core.esm.js"></Script>
        {children}
      </body>
    </html>
  );
}
