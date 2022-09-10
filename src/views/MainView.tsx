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
          <div>dsadasdas</div>
        </div>
        <div className={styles.screen_1_img}></div>
      </div>
      <div className={styles.main_screen_2}>
        <div>
          <div>345</div>
        </div>
      </div>
    </div>
  );
};
