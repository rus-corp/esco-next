import style from './arrow.module.css'


export default function Arrow() {
  return(
    <div className={style.arrow}>
      <svg className={style.arrow_right} xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960"
          width="18px">
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
    </div>
  );
}