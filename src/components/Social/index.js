import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Contact from '../../containers/Contact';

const Social = () => {
  const { t } = useTranslation();

  return (
    <div className="Social">
      <div className="Social-socials">
        <div className="Social-social">
          <a href={t('social_fb_link')} target="_blank" rel="noreferrer"><img src="/assets/facebook-icon.png" alt="Facebook icon" /></a>
          <a href={t('social_fb_link')} target="_blank" rel="noreferrer"><img src="/assets/facebook-icon-hover.png" alt="Facebook icon hover" /></a>
        </div>
        <div className="Social-social">
          <a href={t('social_insta_link')} target="_blank" rel="noreferrer"><img src="/assets/insta-icon.png" alt="Instagram icon" /></a>
          <a href={t('social_insta_link')} target="_blank" rel="noreferrer"><img src="/assets/insta-icon-hover.png" alt="Instagram icon hover" /></a>
        </div>
      </div>
      <div className="Social-politics">
        <p className="w900"><Trans components={{ NavLink: <NavLink /> }}>social_confidentialite</Trans></p>
        <p className="w900"><Trans components={{ NavLink: <NavLink /> }}>social_mentions_legales</Trans></p>
        <p className="w900"><Trans components={{ NavLink: <NavLink /> }}>social_cookies</Trans></p>
      </div>
      <Contact />
      <div className="footer-logo">
    <img src="/assets/feder-120.jpg" alt="Logo Feder" className="logo"/>
    <img src="/assets/logo-etat-120.jpg" alt="Logo Etat" className="logo"/>
    <img src="/assets/logoCTM-120.jpg" alt="Logo CTM" className="logo"/>
    <p>Ce projet est cofinancé par l'Union européenne et la Collectivité Territoriale de Martinique.<br/>
      L'Europe s'engage en Martinique dans le cadre FEDER (Fonds Européen de Développement Régional).</p>
    </div> 
    </div>
  );
};

export default Social;
