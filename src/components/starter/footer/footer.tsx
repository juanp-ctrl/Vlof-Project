import { component$ } from '@builder.io/qwik';
import styles from "./footer.module.css";

import UpsideArrow from "~/../public/media/Upside_arrow.png?jsx";

export default component$(() => {
    return (
        <div class={styles.footer_container}>
            <div class={styles.left_space}>
                <h2>VLOF.</h2>
            </div>
            <div class={styles.right_space} onClick$={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }}>
                <UpsideArrow/>
            </div>
        </div>
    );
});