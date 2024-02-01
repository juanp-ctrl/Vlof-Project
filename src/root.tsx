import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { QwikPartytown } from "./components/partytown/partytown";

import "./global.css";

export default component$(() => {
  const googleScript = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-8LES50DXTC'); `;

  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <QwikPartytown forward={['dataLayer.push']}/>
        <script
          async
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-8LES50DXTC"
        />
        <script type="text/partytown">{googleScript}</script>
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="es">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
