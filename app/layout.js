// These styles apply to every route in the application
import './globals.css'
import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

 
export const metadata = {
  title: 'Toplogic Softlabs',
  description: 'Revolutionizing IT Solutions',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
      <link rel="icon" href="/favicon.ico" sizes='any'/>
      </head>
      <body>{children}</body>
    </html>
  )
}