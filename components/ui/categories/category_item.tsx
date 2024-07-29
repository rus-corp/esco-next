import style from './category_item.module.css'
import { Arrow } from '@/components/shared';


type CategoryItemProps = {
  categoryName: string;
  imgUrl: string;
}



export default function CategoryItem({ categoryName, imgUrl }: CategoryItemProps) {
  return(
    <div className={style.box}>
      <a href="">
        <div className={style.category_desc}>
          <h4 className={style.category_name}>{categoryName}</h4>
        </div>
        <div className={style.category_image}>
          <img className={style.image} src={imgUrl} alt="" />
        </div>
        <Arrow />
      </a>
      </div>
  );
}