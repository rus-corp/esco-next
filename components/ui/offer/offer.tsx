import style from './offer.module.css'


type OfferTypes = {
  offerName: string;
  offerDesc: string
  offerImg: string
}



export default function Offer({ offerName, offerDesc, offerImg }: OfferTypes) {
  return(
    <div className={style.offer_item}>
        <img className={style.offer_img} src={offerImg} alt=""></img>
        <h3 className={style.offer_title}>{offerName}</h3>
        <div className={style.offer_desc}>
          <p>{offerDesc}</p>
        </div>
        <div className={style.offer_botom}>
          <a className="offer-btn" href="">заказать дверь</a>
        </div>
      </div>
  );
}