import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';

const Reuse = () => {
  const [iconActive, setIconActive] = useState('production');
  useEffect(() => {
    if (window.location.pathname === '/') {
      setIconActive('production');
    }
    window.setTimeout(() => {
      if (window.location.pathname === '/') {
        setIconActive('livraison');
      }
      window.setTimeout(() => {
        if (window.location.pathname === '/') {
          setIconActive('consommation');
        }
        window.setTimeout(() => {
          if (window.location.pathname === '/') {
            setIconActive('collecte');
          }
          window.setTimeout(() => {
            if (window.location.pathname === '/') {
              setIconActive('verification');
            }
            window.setTimeout(() => {
              if (window.location.pathname === '/') {
                setIconActive('lavage');
              }
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
    window.setInterval(() => {
      if (window.location.pathname === '/') {
        setIconActive('production');
      }
      window.setTimeout(() => {
        if (window.location.pathname === '/') {
          setIconActive('livraison');
        }
        window.setTimeout(() => {
          if (window.location.pathname === '/') {
            setIconActive('consommation');
          }
          window.setTimeout(() => {
            if (window.location.pathname === '/') {
              setIconActive('collecte');
            }
            window.setTimeout(() => {
              if (window.location.pathname === '/') {
                setIconActive('verification');
              }
              window.setTimeout(() => {
                if (window.location.pathname === '/') {
                  setIconActive('lavage');
                }
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 12000);
  }, []);

  return (
    <div className="Reuse">
      <h2 className="Reuse-title Reuse-title-font w900">
        <Trans components={{ span: <span />, br: <br /> }}>reuse_title</Trans>
      </h2>
      <div className="Reuse-infographie-wrap">
        <img id="infographieCircleArrow" src="/assets/infographie/circleArrowColor.svg" alt="circleArrowColor" />
        <img id="infographieProduction" className={`${iconActive === 'production' ? 'activeIcon infographieIcon centerIcon' : 'infographieIcon centerIcon'}`} src={`/assets/infographie/${iconActive === 'production' ? 'productionColor' : 'production'}.png`} alt="production" />
        <img id="infographieTopRightTrait" className="infographieTrait" src="/assets/infographie/topRightTrait.svg" alt="infographieTopRightTrait" />
        <img id="infographieLivraison" className={`${iconActive === 'livraison' ? 'activeIcon infographieIcon' : 'infographieIcon'}`} src={`/assets/infographie/${iconActive === 'livraison' ? 'livraisonColor' : 'livraison'}.png`} alt="livraison" />
        <img id="infographieRightTrait" className="infographieTrait" src="/assets/infographie/rightTrait.svg" alt="infographieRightTrait" />
        <img id="infographieConsommation" className={`${iconActive === 'consommation' ? 'activeIcon infographieIcon' : 'infographieIcon'}`} src={`/assets/infographie/${iconActive === 'consommation' ? 'consommationColor' : 'consommation'}.png`} alt="consommation" />
        <img id="infographieBottomRightTrait" className="infographieTrait" src="/assets/infographie/bottomRightTrait.svg" alt="infographieBottomRightTrait" />
        <img id="infographieCollecte" className={`${iconActive === 'collecte' ? 'activeIcon infographieIcon centerIcon' : 'infographieIcon centerIcon'}`} src={`/assets/infographie/${iconActive === 'collecte' ? 'collecteColor' : 'collecte'}.png`} alt="collecte" />
        <img id="infographieBottomLeftTrait" className="infographieTrait" src="/assets/infographie/bottomLeftTrait.svg" alt="infographieBottomLeftTrait" />
        <img id="infographieVerification" className={`${iconActive === 'verification' ? 'activeIcon infographieIcon' : 'infographieIcon'}`} src={`/assets/infographie/${iconActive === 'verification' ? 'verificationColor' : 'verification'}.png`} alt="verification" />
        <img id="infographieLeftTrait" className="infographieTrait" src="/assets/infographie/leftTrait.svg" alt="infographieLeftTrait" />
        <img id="infographieLavage" className={`${iconActive === 'lavage' ? 'activeIcon infographieIcon' : 'infographieIcon'}`} src={`/assets/infographie/${iconActive === 'lavage' ? 'lavageColor' : 'lavage'}.png`} alt="lavage" />
        <img id="infographieTopLeftTrait" className="infographieTrait" src="/assets/infographie/topLeftTrait.svg" alt="infographieTopLeftTrait" />
      </div>
      <div className="Reuse-stats">
        <div className="Reuse-stat">
          <p className="Reuse-stat-little"><Trans components={{ span: <span /> }}>reuse_stat_left</Trans></p>
        </div>
        <div className="Reuse-stat">
          <p className="Reuse-stat-little"><Trans components={{ span: <span /> }}>reuse_stat_right</Trans></p>
        </div>
      </div>
      <div className="Reuse-creation">
        <p className="Reuse-creation-little"><Trans components={{ span: <span />, br: <br /> }}>reuse_creation</Trans></p>
      </div>
    </div>
  );
};

export default Reuse;
