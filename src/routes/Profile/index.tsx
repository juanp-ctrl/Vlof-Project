import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from "@builder.io/qwik-city";

import styles from "./styles.module.css";

export default component$(() => {

    return (
        <div>
            <div class={styles.profileTitle}>
                <img width="693" height="216" src="../src/media/Profile_title.png" alt="Profile title" />
            </div>
            <div class={styles.greenRectangle}></div>
            <div class={styles.transparentRectangle}>
                <div class={styles.photoWrapper}>
                    <img width={300} height={367} src="../src/media/Profile_photo.jpg" alt="Profile photo" />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="190" viewBox="0 0 5 190" fill="none">
                    <path d="M1 0V150" stroke="white" stroke-width="3"/>
                </svg>
                <div class={styles.descriptionWrapper}>
                    <p>Desarrollador con una gran pasión por el arte, la ciencia y la programación.</p>
                </div>
            </div>

            <div class={styles.linksWrapper}>
                <div class={styles.linksMenu}>
                    <div class={styles.cvLink}>
                        <a href="#">Descargar CV</a>
                    </div>
                    <div class={styles.githubLink}>
                        <a href="#">GitHub</a>
                    </div>
                    <div class={styles.linkedinLink}>
                        <a href="#">Linkedin</a>
                    </div>
                    <div class={styles.emailLink}>
                        <a href="#">E-mail</a>
                    </div>
                </div>
            </div>
        </div>
    )
});

export const head: DocumentHead = {
    title: "Vlof - Profile",
    meta: [
        {
        name: "description",
        content: "Vlof - Profile of the author",
        },
    ],
};