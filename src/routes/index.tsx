import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import MainPage from "~/components/starter/mainPage/mainPage";

export default component$(() => {
  return (
    <>
      <MainPage />
      <div>"u"</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Vlof",
  meta: [
    {
      name: "description",
      content: "Vlof - The site",
    },
  ],
};
