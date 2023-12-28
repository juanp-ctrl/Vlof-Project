import { component$ } from '@builder.io/qwik';
import styles from "./mainPage.module.css";

export default component$(() => {
    return (
        <div>
            <div class={styles.wrapper}>
                <div class={styles.first_image}>
                    <img src="src/media/image_layer_1.png" alt="Beutiful landscape" />
                </div>
                <div class={styles.second_image}>
                    <img src="src/media/Pink_marble.jpg" alt="Beutiful green river" />
                </div>
                <div class={styles.large_logo_desktop}>
                    <img src="src/media/Logo_large.png" alt="Large Vlof Logo" />
                </div>
                <div class={styles.large_logo_phone}>
                    <img src="src/media/Logo_vertical.png" alt="Large vertical Vlof Logo" />
                </div>
            </div>
            <svg class={styles.white_row} xmlns="http://www.w3.org/2000/svg" width="1184" height="4" viewBox="0 0 1184 4" fill="none">
                <path d="M0 2H1184" stroke="white" stroke-width="4"/>
            </svg>
        </div>
    );
});

