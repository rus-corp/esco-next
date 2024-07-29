import style from './news_list.module.css'
import NewsItem from './news_item';



const newsArray = [
  {
    id: 1,
    title: 'Графичный дизайн и бескомпромиссное качество в коллекции перегородок Grafica',
    desc: 'В этой коллекции мы создали многообразие дизайна створок и оснастили межкомнатные перегородки безупречным\
    качеством механизмов. Особенность коллекции — плавность скольжения, комфорт и дизайн.',
    created_at: '2021-14-12',
    img: './offer_img/news5.png'
  }
]







export default function NewsList() {
  return(
    <section className={style.news_section}>
      <div className={style.section_header}>
        <h1 className="section-title">Новые статьи</h1>
        <a className={style.section_link} href="">Все статьи</a>
      </div>
      <aside className={style.news_list}>
        
      </aside>
    </section>
  );
}