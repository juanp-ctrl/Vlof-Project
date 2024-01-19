import { component$, useSignal} from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

import styles from "./styles.module.css";

import { getGalleryData } from './db_service';

export const useImageGallery = routeLoader$(async () => {
  const galleryArray = await getGalleryData();
  return galleryArray;
})

export async function scrollNow(distance:number) {
  return new Promise((resolve, reject) => {
    if(distance == 0) reject(distance);
    else resolve(setTimeout(() => {
      window.scrollTo({
          top: (distance - 100),
          behavior: 'smooth'
      });
    }, 200)
    )
  });
}

 
export default component$(() => {
    
    const myImages = useImageGallery()

    const isActiveArray = useSignal(myImages.value.map(() => false))
    const gallerySwitch = useSignal(false)
    const distanceToTop = useSignal(0)

    return (
        <div>
          <div class={gallerySwitch.value ? styles.titleChange : styles.galleryTitle}>
            <img width="675" height="334" src='/media/Gallery_title.png' alt='Gallery title'/>
          </div>
          <div class={[styles.gallery_container, gallerySwitch.value ? styles.galleryChange : '']}>
            {myImages.value.map((item, index) => (
              <div key={item.id} id={isActiveArray.value[index] ? "imageSelected" : item.id} class={[styles.image_card, isActiveArray.value[index] ? styles.imageSelected : '']} onClick$={() => {
                if(isActiveArray.value[index] == false){
                  const theImage = document.getElementById((index+1).toString())

                  if(theImage){
                    distanceToTop.value = theImage.offsetTop;
                  }
                }

                isActiveArray.value[index] = !isActiveArray.value[index]
                isActiveArray.value = [...isActiveArray.value]
                gallerySwitch.value = !gallerySwitch.value

                const moveTheScroll = async () => {
                  try {
                    await scrollNow(distanceToTop.value);
                  } 
                  catch (error) {
                    console.error('Error scrolling:', error);
                  }
                };
                
                moveTheScroll();
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