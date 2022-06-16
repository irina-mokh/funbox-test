import { useState } from "react";
import img from '../../assets/images/Photo.png';

interface Item {
  id: number;
  title: string;
  taste: string;
  amount: number;
  gift: string;
  weight: string;
  extraText: string;
  description: string;
  img: string;
}

export const Card = (props: Item) => {
  const { title, taste, amount, gift, weight, extraText, description} = props;

  const [available] = useState(amount!== 0);
  const [hint, setHint] = useState('Сказочное заморское яство');

  const [selected, setSelected] = useState(false);

  const toggleSelect = () => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  }

  const toggleHint = () => {
    if (selected) {
      setHint('Котэ не одобряет?')
    }
  }

  let text = (
    <>
      <span>Чего сидишь? Порадуй котэ, </span>
      <button className="card__buy" onClick={toggleSelect}>купи</button>
    </>
  )

  if (!available) {
    text = (
      <p>{`Печалька, ${taste} закончился`}</p>
    )
  } else if (selected) {
    text = (
      <p>{description}</p>
    )
  }

  const classes = ['card'];
  if (amount === 0) {
    classes.push('card_disabled')
  } else if (selected){
    classes.push('card_checked');
  }

  return (
    <li className="catalog__item">
      <div className={classes.join(' ')} onClick={() => toggleSelect()} onMouseEnter={() => toggleHint()}
      onMouseLeave={()=> setHint('Сказочное заморское яство')}>
        <p className="card__hint">{hint}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__taste">{taste}</p>
        <img className="card__img" src={img} alt="Изображение на упаковке" />

        <p className="card__amount">{amount + ' порций'}</p>
        <p className="card__gift">{gift +' в подарок'}</p>
        <p className="card__extra">{extraText}</p>
        <p className="card__weight">
          {weight}
          <span>кг</span>
        </p>
      </div>
      <p className="card__description">
        {text}
      </p>
    </li>
  );
}