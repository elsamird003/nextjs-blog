import React, { useRef} from 'react'
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Spline from '@splinetool/react-spline';


export default function Home() {
  return (
    <div className={styles.container}>
      
      <main>   
        <Head>
         <title>Sam's Portfolio</title>
       
        </Head>
        <nav className={styles.menuC}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}><a href="#home">Home</a></li>
            <li className={styles.menuItem}><a href="#about">About</a></li>
            <li className={styles.menuItem}><a href="#services">Services</a></li>
            <li className={styles.menuItem}><a href="#contact">Contact</a></li>
          </ul>
        </nav>
         
        
        {/* <Spline
          scene="https://prod.spline.design/vXgv9Ak06-gseQg0/scene.splinecode"
        /> */}
   
        <h1 className={styles.title}>
          Hi I'm Samuel Hernandez</h1>
        <div className={styles.grid}>

        </div>
      </main>
     
      <footer>
        <a
          href="https://threejs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Three.JS
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solidrgb(161, 0, 0);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background:rgb(160, 0, 0);
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
