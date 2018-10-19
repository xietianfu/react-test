import React from 'react';
import classNames from 'classnames';
import Icon from '../../components/Icon';
import brandSvg from '../../assets/svgs/car_brand.svg';
import seriesSvg from '../../assets/svgs/car_series.svg';
import typeSvg from '../../assets/svgs/car_type.svg';
import arrowSvg from '../../assets/svgs/flow_arrowhead.svg';

function Flow({
  stage,
  brandName,
  seriesName,
  typeName,
  groupName,
  handleStageChange,
}) {
  const fClsName = classNames({
    actived: stage > 1,
    active: stage === 1,
  });

  const sClsName = classNames({
    active: stage === 2,
    actived: stage > 2,
  });

  const tClsName = classNames({
    active: stage === 3,
    actived: stage > 3,
  });

  const forthClsName = classNames({
    active: stage === 4,
  });
  return (
    <ul className="brand-flow">
      <li className={fClsName} onClick={() => handleStageChange(1)}>
        <i>
          <Icon svg={brandSvg} />
        </i>
        <span>{brandName || '请选择品牌'}</span>
        <Icon svg={arrowSvg} className="arrow-icon" />
      </li>
      <li className={sClsName} onClick={() => handleStageChange(2)}>
        <i>
          <Icon svg={seriesSvg} />
        </i>
        <span>{seriesName || '请选择车系'}</span>
        <Icon svg={arrowSvg} className="arrow-icon" />
      </li>
      <li className={tClsName} onClick={() => handleStageChange(3)}>
        <i>
          <Icon svg={seriesSvg} />
        </i>
        <span>{groupName || '请选择车组'}</span>
        <Icon svg={arrowSvg} className="arrow-icon" />
      </li>
      <li className={forthClsName}>
        <i>
          <Icon svg={typeSvg} />
        </i>
        <span>{typeName || '请选择车型'}</span>
      </li>
    </ul>
  );
}

Flow.defaultProps = {
  stage: 1,
  handleStageChange: () => {},
};

export default Flow;
