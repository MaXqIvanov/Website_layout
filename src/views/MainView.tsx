import React from 'react';
import styles from '../scss/MainView.module.scss';

export const MainView = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_screen_1}>
        <div className={styles.screen_1_group}>
          <div className={styles.group_text_1}>АКТИВИРУЙ ИММУНИТЕТ!</div>
          <div className={styles.group_text_2}>
            Всего пять секунд в день помогут укрепить иммунитет и повысить защитные силы организма
          </div>
          <div className={styles.group_text_3}>
            <div className={styles.text_3_title}>NOOTRIS ПОМОГАЕТ</div>
            <div className={styles.text_3_text}>
              Вашему организму во время пандемии и сезонных простуд
            </div>
          </div>
        </div>
        <div className={styles.screen_1_img}></div>
      </div>
      <div className={styles.main_screen_2}>
        <div className={styles.screen_2_text_top}>
          ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
          <br></br>
          <span>СО СКИДКОЙ -15% ПЕРВЫМ!</span>
        </div>
        <div className={styles.screen_2_block_price}>
          <div className={styles.price}>750₽</div>
          <div className={styles.price_discount}>690₽</div>
        </div>
        <div className={styles.screen_2_block_card}>
          <div className={styles.block_card_left}>
            <div className={styles.block_card_img}></div>
            <div className={styles._block_card_text}>
              Содержит<span>имбирь</span>
            </div>
          </div>
          <div className={styles.block_card_center}>
            <div className={styles.block_card_img}></div>
            <div className={styles._block_card_text}>
              + Бесплатная доставка<span>Специальная цена</span>
            </div>
            <div className={styles.block_card_btn}>Оформить заказ!</div>
          </div>
          <div className={styles.block_card_right}>
            <div className={styles.block_card_img}></div>
            <div className={styles._block_card_text}>
              Нейтрализует<span>вирусы</span>
            </div>
          </div>
        </div>
        <div className={styles.screen_2_block_card_mobile}>
          <div className={styles.block_card_left}>
            <div className={styles.block_card_img}></div>
            <div className={styles._block_card_text}>
              Содержит<span>имбирь</span>
            </div>
          </div>
          <div className={styles.block_card_right}>
            <div className={styles.block_card_img}></div>
            <div className={styles._block_card_text}>
              Нейтрализует<span>вирусы</span>
            </div>
          </div>
          <div className={styles.block_card_center}>
            <div className={styles.block_card_img}></div>
            <div className={styles._block_card_text}></div>
            <div className={styles.block_card_btn}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
