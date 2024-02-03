import React, { FC, memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';

import { TProductNames } from '../../types';

import s from './Tooltip.module.scss';

export interface ITooltipProps {
  /* Кастомный класс, прокинутый извне */
  className?: string;
  /* Имя продукта определяет фон тултипа */
  product?: TProductNames;
  /* Текст внутри тултипа */
  text: string;
  /* Состояния для скрытия/показа тултипа */
  isShown: boolean;
  /* Положение открытого тултипа */
  placement?: 'top' | 'right' | 'bottom' | 'left';
}

const Tooltip: FC<ITooltipProps> = memo(({ className, product = 'default', text, isShown, placement = 'bottom' }) => (
  <AnimatePresence>
    {isShown && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={cn(s.wrapper, className, s[placement], s[product])}
      >
        <div className={s.text}>{text}</div>
      </motion.div>
    )}
  </AnimatePresence>
));

Tooltip.displayName = 'Tooltip';

export default Tooltip;
