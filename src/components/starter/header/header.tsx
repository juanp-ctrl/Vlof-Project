import { component$, useSignal } from '@builder.io/qwik';
import styles from "./header.module.css";

export default component$(() => {

    const isActive = useSignal(false);

    return (
        <div class={[styles.wrapper, isActive.value ? styles.activado : '']}>
            <header class={styles.header}>
                <div class={styles.div_logo}><a href="/"><img src="src/media/Logo.png" alt="Vlof Logo" class={styles.logo_vlof}/></a></div>
                <div class={styles.desktop_navbar}>
                    <ul>
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <svg class={styles.white_col} xmlns="http://www.w3.org/2000/svg" width="2" height="49" viewBox="0 0 2 49" fill="none">
                            <path d="M1 0V49" stroke="white" stroke-width="2"/>
                        </svg>
                        <li>
                            <a href="/">Info</a>
                        </li>
                        <svg class={styles.white_col} xmlns="http://www.w3.org/2000/svg" width="2" height="49" viewBox="0 0 2 49" fill="none">
                            <path d="M1 0V49" stroke="white" stroke-width="2"/>
                        </svg>
                        <li>
                            <a href="/">CV</a>
                        </li>
                    </ul>
                </div>
            </header>
            <div class={[styles.phone_navbar, "phone_navbar", isActive.value ? styles.active : '']}>
                    <div class={styles.menu}>
                        <div class={styles.options}>
                            <div class={[styles.option, styles.selected]}>Inicio</div>
                            <div class={styles.option}>Info</div>
                            <div class={styles.option}>CV</div>
                        </div>
                    </div>
                    <svg class={styles.x} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 400">
                        <g class={styles.top_bars} stroke-width="2">
                            <path class={[styles.bar, styles.bar1]} d="M 178,20 H 200" />
                            <path class={[styles.bar, styles.bar2]} d="M 178,29 H 200" />
                        </g>
                    </svg>
                    <div class={styles.menu_click_area} onClick$={() => {
                        isActive.value = !isActive.value;
                    }
                    }>
                        
                    </div>
            </div>
        </div>
    );
});

