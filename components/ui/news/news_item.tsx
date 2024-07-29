import style from './news_item.module.css'



type NewsItemType = {
  newsTitle: string;
  newsImg: string;
  newsDesc: string;
  newsDate: string
}




export default function NewsItem({ newsTitle, newsImg, newsDesc, newsDate }: NewsItemType) {
  return(
    <div className={style.news_item}>
          <div className={style.news_img}>
            <a href="">
              <img className={style.news_item__img} src={newsImg} alt=""></img>
            </a>
          </div>
          <div className={style.news_item__title}>
            <h4>{newsTitle}</h4>
          </div>
          <div className={style.news_item__desc}>
            <p>{newsDesc}</p>
          </div>
          <div className={style.news_item__bottom}>
            <a className={style.news_item__bottom_link} href="">Читать далее</a>
            <div className="news_item_date">
              <p>{newsDate}</p>
            </div>
          </div>
        </div>
  );
}