import type { Metadata } from "next";
import { Inter,Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'


const inter = Inter({ 
  subsets: ["latin"],
  weight : ['100','200','300','400','500','600','700','800','900'],
  variable : '--font-inter' 
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight : ['300','400','500','600','700'],
  variable : '--font-spaceGrowtesk' 
});


export const metadata: Metadata = {
  title: "DevFlow",
  description: "A community driven platform for asking and answering programming questions.Get Help,Share Knowledge and collaborate with developers around the world.Explore topics in web developement,application development,alogorithms,datastructures and more",
  icons:{
    icon: '/assets/images/site-logo.svg'

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      elements: {
        formButtonPrimary : 'primary-gradient',
        footerActionLink : 'primary-text-gradient hover:text-primary-500'
      }
    }}> 
    <html lang='en'>
      <h1 className="h1-bold">This is a piece of text</h1>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
        </body>
    </html>
  </ClerkProvider>
  );
}
