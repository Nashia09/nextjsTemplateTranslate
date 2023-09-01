import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import {usePathname } from 'next/navigation'
import { FormattedMessage, useIntl } from 'react-intl'
import Link from 'next/link'




export default function Home({ dir }) {

//   const router = useRouter();
//   const currentPath = router.asPath;
//   const [selectedLocale, setSelectedLocale] = useState(router.locale); // Initialize with the default locale

//   const handleLocaleChange = (event) => {
//     const newLocale = event.target.value;
//     setSelectedLocale(newLocale);
//     const currentPath = router.asPath;
//     // console.log(pathName);
//      console.log(`current path>>>${currentPath}`)
//     // router.replace( `/${encodeURIComponent(newLocale)}`)
//   const newPath = `/${encodeURIComponent(newLocale)}`;
  
//   router.replace(newPath);
// // router.push(router)
//     //  router.replace(`/${pathName}`, `/${newLocale}`);
//     // router.push(newPath);
//   }
     const {locales   } = useRouter();
  const intl = useIntl();
  // const  s = selectedLocale

  const title = intl.formatMessage({ id: "page.home.head.title"})
  const description = intl.formatMessage({ id: "page.home.head.meta.description"})
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico"  hrefLang='x-default'/>
        <link rel="icon" href="/favicon.ico"  hrefLang='en'/>
        <link rel="icon" href="/favicon.ico"  hrefLang='fr'/>
        <link rel="icon" href="/favicon.ico"  hrefLang='de'/>

      
      </Head>
      <header>
        <div>
          <label htmlFor="locale-select">Select Language:</label>
          {/* <select onChange={handleLocaleChange} value={selectedLocale}>
            <option value='en'>en</option>
            <option value='fr'>fr</option>
          <option value='de'>de</option>
          </select>
          {console.log(s)} */}

          {[...locales].sort().map((locale) =>(
              
            <Link key={locale} href="/" locale={locale}>

              <div id="links">{locale}</div>
            </Link>
              
          ))}
          
        </div>
      </header>
      <main dir={dir} className={`${styles.main}`}>
        
        <div className={styles.description}>
          <p>
          <FormattedMessage id="get-started" />&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FormattedMessage id="by" />{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            <FormattedMessage id="docs" /> <span>-&gt;</span>
            </h2>
            <p>
            <FormattedMessage id="find-info" />
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            <FormattedMessage id="learn" /> <span>-&gt;</span>
            </h2>
            <p>
            <FormattedMessage id="learn-next" />
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            <FormattedMessage id="template" /> <span>-&gt;</span>
            </h2>
            <p>
            <FormattedMessage id="discover" />
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            <FormattedMessage id="deploy" /> <span>-&gt;</span>
            </h2>
            <p>
            <FormattedMessage id="instantly" />
            </p>
          </a>
          <Link href="/webviewer">
       Go to Web Viewer
        </Link>

        </div>
      </main>
    </>
  )
}
