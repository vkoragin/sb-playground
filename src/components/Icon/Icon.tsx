import React, { memo } from 'react';

import IIconProps from './IconProps.model';
import { useIcons } from './useIcons.hook';
import './Icon.scss';

const Icon: React.FC<IIconProps> = memo((props) => {
  const { name } = props;
  const icons = useIcons(props);
  return name && icons[name];
});

export default Icon;

Icon.displayName = 'Icon';
