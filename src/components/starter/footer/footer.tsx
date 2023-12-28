import { component$ } from '@builder.io/qwik';
import styles from "./footer.module.css";

export default component$(() => {
    return (
        <div class={styles.footer_container}>
            <div class={styles.left_space}>
                <h2>VLOF.</h2>
            </div>
            <div class={styles.right_space}>
                <img src="/src/media/Upside_arrow.png" alt="Upside white arrow"  onClick$={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }}/>
            </div>
        </div>
    );
});