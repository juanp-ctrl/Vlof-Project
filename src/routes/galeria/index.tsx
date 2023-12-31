import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";

import styles from "./styles.css?inline";
 
export default component$(() => {

    useStylesScoped$(styles);

    return (
        <h2>Galeria!</h2>
    );

});

export const head: DocumentHead = {
    title: "Vlof - Gallery",
    meta: [
      {
        name: "description",
        content: "Vlof - Gallery of The site",
      },
    ],
  };