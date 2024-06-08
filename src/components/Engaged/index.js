/* eslint-disable max-len */
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const Engaged = () => {
  const { t } = useTranslation();
  return (
    <div className="Engaged" id="nos-valeurs">
      <h2 className="w900"><Trans components={{ span: <span /> }}>engage_title</Trans></h2>
      <p id="Engaged-P1" className="Engaged-P Engaged-firstP">{t('engage_P1')}</p>
      <p id="Engaged-P2" className="Engaged-P Engaged-secondP">{t('engage_P2')}</p>
      <div className="Engaged-img-wrap">
        <img id="Engaged-Medal1" src="/assets/medaille-2016.png" alt="medaille d'or concours mondial de bruxelles 2016" />
        <img id="Engaged-Medal2" src="/assets/medaille-2017.png" alt="medaille d'or concours mondial de bruxelles 2017" />
        <img id="Engaged-Medal3" src="/assets/medaille-2018.png" alt="medaille d'or concours mondial de bruxelles 2018" />
        <img id="Engaged-Medal4" src="/assets/medaille-2019.png" alt="medaille d'or concours mondial de bruxelles 2019" />
        <img id="Engaged-Medal5" src="/assets/medaille-2020.png" alt="medaille d'or concours mondial de bruxelles 2020" />
        <img id="Engaged-Medal6" src="/assets/medaille-2021.png" alt="medaille d'or concours mondial de bruxelles 2021" />
      </div>
      <p id="Engaged-P3" className="Engaged-P Engaged-thirdP">{t('engage_P3')}</p>
      <p id="Engaged-P4" className="Engaged-P Engaged-lastP">{t('engage_P4')}</p>
    </div>
  );
};

export default Engaged;
