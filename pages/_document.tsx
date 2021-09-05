// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { DocumentProps, Main, NextScript, Html, Head } from 'next/document'

export default class MineflyDocument extends Document {
  constructor(props: DocumentProps) {
    super(props);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name='application-name' content='Minefly' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Minefly' />
          <meta name='description' content='Free, community-first Minecraft server hosting' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#1E293B' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#171F2E' />

          <link rel='manifest' href='/static/manifest.json' />
                              <link
                                  rel="shortcut icon"
                                  href="/minefly-rocket-dynamic.svg"
                              />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://minefly.org' />
          <meta name='twitter:title' content='Minefly' />
          <meta name='twitter:description' content='Free, community-first Minecraft server hosting' />
          <meta name='twitter:image' content='/minefly-rocket-dynamic.svg' />
          <meta name='twitter:creator' content='@DeltaRays' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Minefly' />
          <meta property='og:description' content='Free, community-first Minecraft server hosting' />
          <meta property='og:site_name' content='Minefly' />
          <meta property='og:url' content='https://minefly.org' />
          <meta property='og:image' content='/minefly-rocket-dynamic.svg' />

          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_2048-2732.png' sizes='2048x2732' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1668-2224.png' sizes='1668x2224' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1536-2048.png' sizes='1536x2048' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1125-2436.png' sizes='1125x2436' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1242-2208.png' sizes='1242x2208' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_750-1334.png' sizes='750x1334' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_640-1136.png' sizes='640x1136' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        </Html>
      )
    }
}