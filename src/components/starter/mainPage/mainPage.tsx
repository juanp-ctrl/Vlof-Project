import { component$ } from '@builder.io/qwik';
import styles from "./mainPage.module.css";

import { Image } from "@unpic/qwik";

export default component$(() => {
    return (
        <div>
            <div class={styles.wrapper}>
                <div class={styles.first_image}>
                    <Image 
                        src="src/media/image_layer_1.png"
                        fetchpriority="high"
                        loading="eager"
                        layout="fixed"
                        alt="Beutiful landscape"
                    />
                </div>
                <div class={styles.second_image}>
                    <img width={973} height={323} src="src/media/Pink_marble.jpg" alt="Beutiful green river" />
                    {/* <Image 
                        src="src/media/Pink_marble.jpg"
                        fetchpriority="high"
                        loading="eager"
                        layout="fixed"
                        alt="Beutiful pink marble"
                    /> */}
                </div>
                <div class={styles.large_logo_desktop}>
                    <Image 
                        src="src/media/Logo_large.png"
                        fetchpriority="high"
                        loading="eager"
                        layout="fixed"
                        alt="Large Vlof Logo"
                    />
                </div>
                <div class={styles.large_logo_phone}>
                    <Image 
                        src="src/media/Logo_vertical.png"
                        fetchpriority="low"
                        loading="lazy"
                        layout="fixed"
                        alt="Large vertical Vlof Logo"
                    />
                </div>
            </div>
            <svg class={styles.white_row} xmlns="http://www.w3.org/2000/svg" width="1184" height="4" viewBox="0 0 1184 4" fill="none">
                <path d="M0 2H1184" stroke="white" stroke-width="4"/>
            </svg>
        </div>
    );
});

