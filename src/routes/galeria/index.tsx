import { component$, useStylesScoped$, useSignal} from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

import styles from "./styles.module.css";

import { getGalleryData } from './db_service';

export const useImageGallery = routeLoader$(async (requestEvent) => {
  const galleryArray = await getGalleryData();
  return galleryArray;
})
 
export default component$(() => {
    
    const myImages = useImageGallery()

    const isActiveArray = useSignal(myImages.value.map(() => false))
    const gallerySwitch = useSignal(false)

    return (
        <div>
          <h2 class={gallerySwitch.value ? styles.titleChange : styles.galleryTitle}>Galeria!</h2>
          <div class={[styles.gallery_container, gallerySwitch.value ? styles.galleryChange : '']}>
            {myImages.value.map((item, index) => (
              <div key={item.id} class={[styles.image_card, isActiveArray.value[index] ? styles.imageSelected : '']} onClick$={() => {
                isActiveArray.value[index] = !isActiveArray.value[index]
                isActiveArray.value = [...isActiveArray.value]
                gallerySwitch.value = !gallerySwitch.value
              }}>
                <div class={styles.imageContainer}>
                  <img width="4608" height="2592" src={item.imageSource} alt={item.description} />
                  <p>{item.description}</p>
                </div>
              </div>
              ))
            }
          </div>
        </div>
    );

});

export const head: DocumentHead = {
    title: "Vlof - Gallery",
    meta: [
      {
        name: "description",
        content: "Vlof - Gallery of The site",
      },
    ],
  };