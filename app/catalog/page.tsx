import style from './catalog.module.css'

// ./categ_img/doors.jpg

const categories = ['Межкомнатные двери', 'Входные двери', 'Замки и ручки', 'Противопожарные двери']

export default function Catalog() {
  
  return(
    <div className={`container ${style.catalog_container}`}> 
      <h1 className="section-title">Каталог</h1>
      <div className={style.box_list}>
        <div className={style.box_row}>
          <div className={style.box}>
            <a href="">
            <div className={style.category_desc}>
                <h4 className={style.category_name}>Межкомнатные двери</h4>
              </div>
              <div className={style.category_image}>
              {/* ./categ_img/doors.jpg */}
                <img className={style.image} src="./categ_img/doors.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className={style.box}>
            <a href="">
            <div className={style.category_desc}>
                <h4 className={style.category_name}>Межкомнатные двери</h4>
              </div>
              <div className={style.category_image}>
              {/* ./categ_img/fire_door.jpg */}
                <img className={style.image} src="./categ_img/fire_door.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className={style.box}>
            <a href="">
            <div className={style.category_desc}>
                <h4 className={style.category_name}>Межкомнатные двери</h4>
              </div>
              <div className={style.category_image}>
              {/* ./categ_img/invis_door.jpeg */}
                <img className={style.image} src="./categ_img/invis_door.jpeg" alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className={`${style.box_row} ${style.second_row}`}>
        <div className={style.box}>
            <a href="">
            <div className={style.category_desc}>
                <h4 className={style.category_name}>Межкомнатные двери</h4>
              </div>
              <div className={style.category_image}>
              {/* ./categ_img/open_door.jpg */}
                <img className={style.image} src="./categ_img/open_door.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className={style.box}>
            <a href="">
            <div className={style.category_desc}>
                <h4 className={style.category_name}>Межкомнатные двери</h4>
              </div>
              <div className={style.category_image}>
              {/* ./categ_img/ruchki.jpg */}
                <img className={style.image} src="./categ_img/ruchki.jpg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}