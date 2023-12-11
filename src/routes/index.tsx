import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import MainPage from "~/components/starter/mainPage/mainPage";
import styles from "./styles.css?inline";

export default component$(() => {

  useStylesScoped$(styles);

  return (
    <>
      <MainPage />
      <div class="container_intro">
        <svg class="intro_left_line" xmlns="http://www.w3.org/2000/svg" width="541" height="66" viewBox="0 0 541 66" fill="none">
          <path d="M-1 37.319C12.4034 34.7757 24.916 29.0929 37.4 25.2445C47.2937 22.1946 69.8192 11.0032 81.2857 11.6086C107.413 12.9881 125.406 34.322 142.829 43.9807C154.29 50.3347 180.789 61.2364 197.857 57.9289C228.325 52.0247 275.603 -11.0099 316.829 4.42636C347.717 15.9921 361.54 44.645 384.2 61.1557C400.155 72.7813 433 45.3662 446.771 39.9212C474.98 28.768 507.976 31.6981 539 31.6981" stroke="white" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <div class="intro">
          <p>Bienvenido a VLOF, el lugar de las ideas, de los colores, en donde las cosas simplemente existen, quizas no encuentres relación entre lo que existe en este sitio, pero esa es la idea.</p>
        </div>
        <svg class="intro_right_line" xmlns="http://www.w3.org/2000/svg" width="537" height="49" viewBox="0 0 537 49" fill="none">
          <path d="M2 43.2813C8.94218 42.8236 14.9263 39.8069 20.8097 37.3449C38.6236 29.8904 57.0617 24.2799 76.6645 19.7439C102.977 13.6552 117.997 11.5528 133.812 29.1172C168.589 67.7434 219.552 34.6919 258.157 14.953C267.155 10.3524 279.663 1.33713 292.043 2.03868C308.227 2.95578 323.65 13.1711 336.985 18.9107C355.221 26.7596 374.242 33.7972 391.979 42.2398C401.484 46.7643 402.612 47.7635 411.506 41.1984C424.13 31.8799 441.099 12.8125 462.335 17.036C480.419 20.6324 494.704 28.2608 514.026 29.7421C521.633 30.3252 529.36 30.1587 537 30.1587" stroke="white" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="container_leftRectangle">
        <h2>¿De que va este sitio?</h2>
        <svg xmlns="http://www.w3.org/2000/svg" class="left_Q_rectangle" width="906" height="118" viewBox="0 0 906 118" fill="none">
          <g filter="url(#filter0_d_7_33)">
            <path d="M0 0H877C890.807 0 902 11.1929 902 25V85C902 98.8071 890.807 110 877 110H0V0Z" fill="#E7F3C5"/>
          </g>
          <defs>
            <filter id="filter0_d_7_33" x="-4" y="0" width="910" height="118" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_33"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_33" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div class="container_explanation">
        <div class="explanation_text">
          <p>Vlof nace de la pregunta de que es lo que se necesita para iniciar aquello que deseamos, como saber impulsarnos y dejarnos llevar, asi como en la aviación existe el VLOF, la velocidad de despegue, que viene siendo la velocidad a la que un avión comienza a volar podemos asi mismo preguntarnos, ¿Cual es nuestro vlof? <br />  <br />
              Es por esto que este sitio es una expresión creativa propia, mi nombre es Juan Pablo Jiménez, estas son mis fotos, mis ideas y este es mi sitio. </p>
        </div>
      </div>
      <div class="container_vlofAirlines">
        <img src="src/media/plane_vlf.png" alt="Vlof Airlines Illustration" />
      </div>
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
