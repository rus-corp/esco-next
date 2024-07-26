import style from './footer.module.css'



export default function Footer() {
  return (
    <footer className={style.footer}>
    <div className="container">
      <div className={style.footer_container}>
        <div className={style.footer_logo}>
          <img className={style.footer_logo_img} src="./logos/logo_black_footer.png" alt="" />
          <p>Esco Doors</p>
        </div>
        <div className={style.footer_contacts}>
          <div className={style.footer_phone}>
            <a href="">
              <h4>8 (800) 550-81-79</h4>
            </a>
          </div>
          <div className={`${style.footer_blocks} ${style.contacts}`}> 
            <ul>
              <li><a href="">м. Полежаевская</a></li>
              <li><a href="">г. Казань, Маршала Жукова, д. 52, <br></br>"Мебельный Центр"</a></li>
              <li><a href="">info@esco-doors.ru</a></li>
            </ul>
          </div>
        </div>
        <div className={`${style.footer_blocks} ${style.catalog}`}>
          <ul>
            <li><a href="">Межкомнатные двери</a></li>
            <li><a href="">Мебель</a></li>
            <li><a href="">Входные двери</a></li>
            <li><a href="">Лестницы</a></li>
          </ul>
        </div>
        <div className={`${style.footer_blocks} ${style.about}`}>
          <ul>
            <li><a href="">Доставка</a></li>
            <li><a href="">Статьи</a></li>
            <li><a href="">О нас</a></li>
          </ul>
        </div>
        <div className="social">
          <a href="https://vk.com/">
          <img src="./logos/vk-logo.svg" alt="vkLogo" className={style.icon} />
          </a>
          <a href="">
            <img src="./logos/tg-logo.svg" alt="tg-logo" className={style.icon} />
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
}