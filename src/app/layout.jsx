

import '@/styles/globals.css';
import {siteConfig} from '@/config/site'
// app/layout.tsx

import NavBer from '@/src/components/NavBar/NavBar';
import {Providers} from "./providers";
import { Header } from '../components/Header';
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "@/public/favicon.ico",
  },
  
};


export default function RootLayout({children}) {
  return (
    <html lang="en" className='dark'>
      <Header></Header>
      <body>
        <Providers>
          <NavBer></NavBer>
          {children}
        </Providers>
      </body>
    </html>
  );
}