import styles from './home.module.css'
import video from '../../assets/1609140086717.webm'
import kappa from '../../assets/kappa.png'
import song from '../../assets/song.mp3'
import { MouseEventHandler } from 'react'

export default function Home() {
   function stopPropagation(e: any) {
      e.stopPropagation()
   }

   return (
      <div className={styles.container}>
         <video className={styles.video} autoPlay muted loop src={video} />
         <div className={styles.container1} onClick={stopPropagation}>
            <div className={styles.introContainer}>
               Дуучин EKU-гийн вебсайтад тавтай морил :))
               <img className={styles.image} src={kappa} />
            </div>
            <div className={styles.songContainer}>
               Та бүхэн үзээрийн эмо дууг нь сонсоорой.
               <audio src={song} controls />
            </div>
            <div className={styles.rights}>
               All rights partially reserved Ⓒ 2022 by Erchis
            </div>
         </div>
      </div>
   )
}
