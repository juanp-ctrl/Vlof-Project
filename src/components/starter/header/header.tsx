import { component$, useSignal } from '@builder.io/qwik';
import styles from "./header.module.css";
import Imglogo from "~/../public/media/Logo.png?jsx";

export default component$(() => {

    const isActive = useSignal(false);

    return (
        <div class={[styles.wrapper, isActive.value ? styles.activado : '']}>
            <header class={styles.header}>
                <div class={styles.div_logo}><a href="/"><Imglogo alt="Vlof Logo" class={styles.logo_vlof}/></a></div>
                <div class={styles.desktop_navbar}>
                    <ul>
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <svg class={styles.white_col} xmlns="http://www.w3.org/2000/svg" width="2" height="49" viewBox="0 0 2 49" fill="none">
                            <path d="M1 0V49" stroke="white" stroke-width="2"/>
                        </svg>
                        <li>
                            <a href="/Gallery">Galeria</a>
                        </li>
                        <svg class={styles.white_col} xmlns="http://www.w3.org/2000/svg" width="2" height="49" viewBox="0 0 2 49" fill="none">
                            <path d="M1 0V49" stroke="white" stroke-width="2"/>
                        </svg>
                        <li>
                            <a href="/Profile">Perfil</a>
                        </li>
                    </ul>
                </div>
            </header>
            <div class={[styles.phone_navbar, "phone_navbar", isActive.value ? styles.activado : '']}>

                <div class={styles.menu}>
                    <div class={[styles.menu_bar, isActive.value ? styles.change_x : '']} id="menu-bar" onClick$={() => {
                        isActive.value = !isActive.value;
                    }}>
                        <div class={[styles.bar1, styles.bar]}></div>
                        <div class={[styles.bar2, styles.bar]}></div>
                        <div class={[styles.bar3, styles.bar]}></div>
                    </div>
                    <nav class={[styles.nav, isActive.value ? styles.change : '']} id="nav">
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <svg class={styles.option_white_row} xmlns="http://www.w3.org/2000/svg" width="120" height="2" viewBox="0 0 120 2" fill="none">
                                <path d="M0 1H120" stroke="white"/>
                            </svg>
                            <li><a href="/Gallery">Galeria</a></li>
                            <svg class={styles.option_white_row} xmlns="http://www.w3.org/2000/svg" width="120" height="2" viewBox="0 0 120 2" fill="none">
                                <path d="M0 1H120" stroke="white"/>
                            </svg>
                            <li><a href="/Profile">Perfil</a></li>
                        </ul>
                    </nav> 
                </div>

                <div class={[styles.menu_bg, isActive.value ? styles.change_bg : '']} id="menu-bg"></div>
            </div>
        </div>
    );
});

