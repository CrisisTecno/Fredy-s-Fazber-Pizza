

import '@/styles/globals.css';
import {siteConfig} from '@/config/site'
// app/layout.tsx

import NavBer from '@/src/components/NavBar/NavBar';

export const metadata = {
  title: {
    default: 'Home',
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "@/public/favicon.ico",
  },
  
};


export default function PageLayout({children}) {
  return (
    <>
          <NavBer></NavBer>
          {children}
        
          </>
  );
}