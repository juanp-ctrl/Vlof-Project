import { Signal, component$, useSignal } from '@builder.io/qwik';
import { type DocumentHead } from "@builder.io/qwik-city";
import { useVisibleTask$ } from '@builder.io/qwik';

import styles from "./styles.module.css";

export default component$(() => {

    const isWriting = useSignal(false);

    return (
        <div>
            <div class={styles.profileTitle}>
                <img width="693" height="216" src="/media/Profile_title.png" alt="Profile title" />
            </div>
            <div class={styles.greenRectangle}></div>
            <div class={styles.transparentRectangle}>
                <div class={styles.photoWrapper}>
                    <img width={300} height={367} src="/media/Profile_photo.jpg" alt="Profile photo" />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="190" viewBox="0 0 5 190" fill="none">
                    <path d="M1 0V150" stroke="white" stroke-width="3"/>
                </svg>
                <div class={styles.descriptionWrapper}>
                    <WriteEffect ended={isWriting} baseText='Desarrollador con una gran pasión por el arte, la ciencia y ' />
                </div>
            </div>

            <div class={styles.linksWrapper}>
                <div class={styles.linksMenu}>
                    <div class={styles.cvLink}>
                        <a href="../../../data/CV_Juan Pablo Jiménez_Spanish.pdf" download>Descargar CV</a>
                    </div>
                    <div class={styles.githubLink}>
                        <a href="https://github.com/juanp-ctrl" target='_blank'>GitHub</a>
                    </div>
                    <div class={styles.linkedinLink}>
                        <a href="https://www.linkedin.com/in/juan-pablo-jimenez-h/" target='_blank'>Linkedin</a>
                    </div>
                    <div class={styles.emailLink}>
                        <a href="mailto:juanpa.dev.vlof@gmail.com?subject=Hola Juanpa!">E-mail</a>
                    </div>
                </div>
            </div>
        </div>
    )
});



const WriteEffect = component$<{ ended: Signal<boolean>, baseText: string }>( ({ ended, baseText }) => {

    const textArray = ["la programación.", "la ciberseguridad.", "el diseño.", "la lógica."];
    const currentText = useSignal('');
    const currentIndex = useSignal(0);
    const indArray = useSignal(0)
    const timeDelay = useSignal(150)

    useVisibleTask$( () => {

        function writeFunc(){
            const text = textArray[indArray.value]
            if(ended.value == false){
                currentText.value += text[currentIndex.value++];
                if(currentIndex.value == text.length+1){
                    ended.value = true;
                    timeDelay.value = 1000
                }
            }
            if(ended.value == true){
                currentText.value = currentText.value.slice(0, currentIndex.value - 1)
                currentIndex.value--;
                if(currentIndex.value == 0){
                    ended.value = false;
                    if(indArray.value >= 3){
                        indArray.value = 0;
                    }
                    else{
                        indArray.value++;
                    }
                }
                if(currentIndex.value < text.length){
                    timeDelay.value = 150
                }
            }
        }

        function loop() {
            setTimeout(() => {
                writeFunc();
                loop();
            }, timeDelay.value)
        }
        setTimeout(() => {loop()}, 800)
    });

    return <p>{baseText} <span class={styles.writtenText}>{currentText}</span> <span class={styles.cursor}>&nbsp;</span></p>;
})

export const head: DocumentHead = {
    title: "Vlof - Profile",
    meta: [
        {
        name: "description",
        content: "Vlof - Profile of the author",
        },
    ],
};