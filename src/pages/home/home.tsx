import styles from './home.module.css'
import video from '../../assets/1609140086717.webm'
import kappa from '../../assets/kappa.png'
import song from '../../assets/song.mp3'
import cat from '../../assets/cat.gif'

export default function Home() {
   function stopPropagation(e: any) {
      e.stopPropagation()
   }

   return (
      <div className={styles.container}>
         <video className={styles.video} autoPlay muted loop src={video} />
         <img className={styles.cat} src={cat} />
         <div className={styles.container1} onClick={stopPropagation}>
            <div className={styles.introContainer}>
               <span>
                  <a href="https://www.instagram.com/cybertearzzz/">Дуучин EKU</a>-гийн вебсайтад тавтай морил :))
               </span>
               <img className={styles.image} src={kappa} />
            </div>
            <div className={styles.songContainer}>
               Та бүхэн дууг нь сонсоорой :)
               <audio src={song} controls />
            </div>
            <div className={styles.rights}>
               All rights partially reserved Ⓒ 2022 by Erchis
            </div>
         </div>
      </div>
   )
}
