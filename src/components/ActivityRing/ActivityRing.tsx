import React, { FC, memo, useEffect } from 'react';
import './ActivityRing.scss';
import { ActivityRingProps } from './ActivityRing.model';

const ActivityRing: FC<ActivityRingProps> = memo((props) => {
  const { progress, showProgressText, progressRingColor, progressTextColor, theme, product } = props;
  const progressRing = React.useRef<SVGCircleElement>(null);
  const progressCheck = React.useRef<SVGPolylineElement>(null);

  useEffect(() => {
    const curPrRing = progressRing!.current;
    const curPrCheck = progressCheck!.current;
    if (progress && curPrRing && curPrCheck) {
      const progressRingDasharray = window.getComputedStyle(curPrRing).strokeDasharray;
      const strokeDashOffsetValue =
        progressRingDasharray && (parseInt(progressRingDasharray, 10) / 100) * (100 - progress);
      curPrRing.style.strokeDashoffset = String(strokeDashOffsetValue);
      if (progress >= 100) {
        curPrCheck?.classList.add('active');
        curPrCheck.style.strokeDashoffset = String(0);
      } else {
        curPrCheck?.classList.remove('active');
        curPrCheck.style.strokeDashoffset = String(100);
      }
    }
  }, [progress]);

  const strokeBgCls = `progress-ring__stroke__${theme || product}`;
  const strokeRingCls = progressRingColor
    ? `progress-ring__stroke__${progressRingColor}`
    : 'progress-ring__stroke__common';
  const textCls = progressTextColor
    ? `progress-ring__text-color__${progressTextColor}`
    : 'progress-ring__text-color__white';

  return (
    <div className="progress">
      {progress > 0 && (
        <>
          <div className="progress-ring">
            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="7.25" className={`progress-ring__background ${strokeBgCls}`} />
              <circle
                cx="8"
                cy="8"
                r="7.25"
                className={`progress-ring__progress ${strokeRingCls}`}
                transform="rotate(-90 8 8)"
                ref={progressRing}
              />
              <polyline
                ref={progressCheck}
                points="5.5,8 7.5,10.5 11,6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="progress-ring__check"
              />
            </svg>
          </div>
          {showProgressText && <span className={`progress-percent ${textCls}`}>{progress}%</span>}
        </>
      )}
    </div>
  );
});

ActivityRing.displayName = 'ActivityRing';

export default ActivityRing;
