

import style from './offer_list.module.css'
import Offer from "./offer";


type OfferAr = {
  id: number;
  title: string;
  description: string;
  image: string;
}


const offerArray = [
  {
    id: 1,
    title: 'Межкомнатные двери',
    desc: 'На собственной фабрике мы создаем красивые,безопасные и практически вечные двери, межкомнатные перегородки, стеновые панели и другие решения для вашего интерьера.',
    image: "./offer_img/news3.png"
  },
  {
    id: 2,
    title: 'Лестницы',
    desc: 'На собственной фабрике мы создаем красивые, безопасные и практически вечные двери, межкомнатные перегородки, стеновые панели и другие решения для вашего интерьера.',
    image: "./offer_img/news1.jpg"
  }
]







export default function OfferList() {
  return(
    <section className={style.offers}>
      <div className={style.frame_img_left}>
        <img src="./background_img/frame2.png" alt=""></img>
      </div>
      {offerArray.map((obj) => (
        <Offer key={obj.id}
        offerName={obj.title}
        offerDesc={obj.desc}
        offerImg={obj.image}
        />
      ))}
      <div className={style.frame_img_right}>
        <img src="./background_img/frame.png" alt=""></img>
      </div>
    </section>
  );
}