import React from 'react';
import cn from 'classnames';

import IIconProps, { IconType } from './IconProps.model';
import styleSpinner from './Styles/Spinner.module.scss';

/**
 * NB!
 * Для того, чтобы новая svg появилась для выбора,
 * нужно добавить тип в: /types.ts: TIconNames
 */
export const useIcons = ({
  alt = '',
  height,
  iconFill,
  iconStroke,
  product,
  strokeSecond,
  strokeThird,
  theme,
  width,
}: IIconProps) => {
  let clsName;

  const style = { width, height };

  clsName = iconStroke
    ? `sprite-stroke-primary-color__${theme || product} `
    : '';

  clsName += iconFill
    ? `sprite-fill-primary-color__${theme || product} `
    : clsName;

  return {
    planet: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.49756 7.99995H14.5105M11.25 7.97823C11.25 10.8192 9.60401 13.2774 8.65479 14.4588C8.30991 14.888 7.69002 14.888 7.34514 14.4588C6.39592 13.2774 4.74996 10.8192 4.74996 7.97823C4.74996 5.13727 6.39592 2.67911 7.34514 1.49771C7.69002 1.06847 8.30991 1.06847 8.65479 1.49771C9.60401 2.67911 11.25 5.13727 11.25 7.97823ZM15.25 8C15.25 12.0041 12.0041 15.25 8 15.25C3.99594 15.25 0.75 12.0041 0.75 8C0.75 3.99594 3.99594 0.75 8 0.75C12.0041 0.75 15.25 3.99594 15.25 8Z"
          stroke={strokeSecond}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    print: (
      <svg
        style={style}
        width={width || '100%'}
        height={height || '100%'}
        className={clsName}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_577_19767)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.00002 11.3333H2.66669C2.48988 11.3333 2.32031 11.263 2.19528 11.138C2.07026 11.013 2.00002 10.8434 2.00002 10.6666V7.33325C2.00002 7.15644 2.07026 6.98687 2.19528 6.86185C2.32031 6.73682 2.48988 6.66659 2.66669 6.66659H13.3334C13.5102 6.66659 13.6797 6.73682 13.8048 6.86185C13.9298 6.98687 14 7.15644 14 7.33325V10.6666C14 10.8434 13.9298 11.013 13.8048 11.138C13.6797 11.263 13.5102 11.3333 13.3334 11.3333H12C11.8232 11.3333 11.6536 11.4035 11.5286 11.5285C11.4036 11.6535 11.3334 11.8231 11.3334 11.9999C11.3334 12.1767 11.4036 12.3463 11.5286 12.4713C11.6536 12.5963 11.8232 12.6666 12 12.6666H13.3334C13.8638 12.6666 14.3725 12.4559 14.7476 12.0808C15.1226 11.7057 15.3334 11.197 15.3334 10.6666V7.33325C15.3334 6.80282 15.1226 6.29411 14.7476 5.91904C14.3725 5.54397 13.8638 5.33325 13.3334 5.33325H2.66669C2.13625 5.33325 1.62755 5.54397 1.25247 5.91904C0.877401 6.29411 0.666687 6.80282 0.666687 7.33325V10.6666C0.666687 11.197 0.877401 11.7057 1.25247 12.0808C1.62755 12.4559 2.13625 12.6666 2.66669 12.6666H4.00002C4.17683 12.6666 4.3464 12.5963 4.47142 12.4713C4.59645 12.3463 4.66669 12.1767 4.66669 11.9999C4.66669 11.8231 4.59645 11.6535 4.47142 11.5285C4.3464 11.4035 4.17683 11.3333 4.00002 11.3333Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.00004 15.3333C3.82323 15.3333 3.65366 15.2631 3.52864 15.138C3.40361 15.013 3.33337 14.8434 3.33337 14.6666V9.33329C3.33337 9.15648 3.40361 8.98691 3.52864 8.86189C3.65366 8.73686 3.82323 8.66663 4.00004 8.66663H12C12.1769 8.66663 12.3464 8.73686 12.4714 8.86189C12.5965 8.98691 12.6667 9.15648 12.6667 9.33329V14.6666C12.6667 14.8434 12.5965 15.013 12.4714 15.138C12.3464 15.2631 12.1769 15.3333 12 15.3333H4.00004ZM4.66671 14H11.3334V9.99996H4.66671V14ZM4.66671 5.33329H3.33337V1.33329C3.33337 1.15648 3.40361 0.986912 3.52864 0.861888C3.65366 0.736864 3.82323 0.666626 4.00004 0.666626H12C12.1769 0.666626 12.3464 0.736864 12.4714 0.861888C12.5965 0.986912 12.6667 1.15648 12.6667 1.33329V5.33329H11.3334V1.99996H4.66671V5.33329Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_577_19767">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    print_secondary: (
      <svg
        style={style}
        width={width || '100%'}
        height={height || '100%'}
        className={clsName}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2204_345)">
          <path
            d="M12.25 3V1.45C12.25 1.0634 11.9366 0.75 11.55 0.75H4.45C4.0634 0.75 3.75 1.0634 3.75 1.45L3.75 3"
            stroke="#254E5F"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M11.55 15.25H4.45C4.0634 15.25 3.75 14.9366 3.75 14.55V9.75H12.25V14.55C12.25 14.9366 11.9366 15.25 11.55 15.25Z"
            stroke="#254E5F"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M3 11.25H1.45C1.0634 11.25 0.75 10.9366 0.75 10.55V6.45C0.75 6.0634 1.0634 5.75 1.45 5.75H14.55C14.9366 5.75 15.25 6.0634 15.25 6.45V10.55C15.25 10.9366 14.9366 11.25 14.55 11.25H13"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2204_345">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    exclamationTriangle: (
      <svg
        style={style}
        width={width || '100%'}
        height={height || '100%'}
        className={`sprite-stroke-primary-color sprite-stroke-primary-color__${
          theme || product
        }`}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00001 5.75385V9.25244M8.00062 11.8671V11.8771M1.76232 14.256H14.2488C15.0137 14.256 15.4954 13.4323 15.1204 12.7657L8.87715 1.6666C8.49484 0.986947 7.5163 0.986947 7.134 1.6666L0.890744 12.7657C0.51578 13.4323 0.997495 14.256 1.76232 14.256Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    exclamation: (
      <svg
        style={style}
        width={width || '100%'}
        height={height || '100%'}
        className={`sprite-stroke-primary-color sprite-stroke-primary-color__${
          theme || product
        }`}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.75061 14.74L7.75061 14.75"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.74609 1.1228L7.74609 11.7431"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    calendarWithCorner: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M13.95 2.75C14.1157 2.75 14.25 2.88431 14.25 3.05L14.25 10.4984C14.25 10.5892 14.2088 10.6752 14.138 10.7322L9.84433 14.1838C9.79105 14.2266 9.72474 14.25 9.65637 14.25L2.05 14.25C1.88431 14.25 1.75 14.1157 1.75 13.95L1.75 3.05C1.75 2.88431 1.88431 2.75 2.05 2.75L13.95 2.75Z"
          stroke={strokeSecond}
          strokeWidth="1.5"
        />
        <path
          d="M4.74988 1C4.74988 0.585786 4.41409 0.25 3.99988 0.25C3.58566 0.25 3.24988 0.585786 3.24988 1H4.74988ZM3.24988 4.25C3.24988 4.66421 3.58566 5 3.99988 5C4.41409 5 4.74988 4.66421 4.74988 4.25H3.24988ZM12.7499 1C12.7499 0.585786 12.4141 0.25 11.9999 0.25C11.5857 0.25 11.2499 0.585786 11.2499 1H12.7499ZM11.2499 4.25C11.2499 4.66421 11.5857 5 11.9999 5C12.4141 5 12.7499 4.66421 12.7499 4.25H11.2499ZM2.50098 8H13.5064V6.5H2.50098V8ZM3.24988 1V4.25H4.74988V1H3.24988ZM11.2499 1V4.25H12.7499V1H11.2499Z"
          fill="#254E5F"
        />
        <path
          d="M10 11L14.8789 11L14.75 11.2031L10.2344 14.8281L10 14.9414L10 11Z"
          fill="#254E5F"
        />
      </svg>
    ),
    animatedSpinner: (
      <svg
        style={style}
        className={styleSpinner.spinner}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 50 50"
      >
        <circle
          className={cn(
            styleSpinner.path,
            `sprite-stroke-primary-color__${theme || product} `,
          )}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        />
      </svg>
    ),
    ask: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M5.75 6.495C5.75 5.25235 6.75736 4.245 8 4.24499C9.24264 4.24499 10.25 5.25235 10.25 6.49499C10.25 7.73764 9.24264 8.74499 8 8.74499L8 9.49759"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g filter="url(#filter0_i_0_1)">
          <circle
            cx="8"
            cy="8"
            r="7.25"
            stroke={strokeSecond}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M8 11.745L8 11.755"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <filter
            id="filter0_i_0_1"
            x="0"
            y="0"
            width="16"
            height="17"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_1"
            />
          </filter>
        </defs>
      </svg>
    ),
    smartphone: (
      <svg
        style={style}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        className={clsName}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_950_3822)">
          <path
            d="M9.24609 1.50269L6.74999 1.50269L6.74999 1.95015C6.74999 2.11584 6.88431 2.25015 7.04999 2.25015L8.94609 2.25015C9.11178 2.25015 9.24609 2.11584 9.24609 1.95015L9.24609 1.50269Z"
            strokeWidth="1.5"
          />
          <g filter="url(#filter0_i_950_3822)">
            <path
              d="M12.25 1.04854C12.25 0.88285 12.1157 0.748535 11.95 0.748535L4.05177 0.748534C3.88609 0.748534 3.75177 0.882849 3.75178 1.04853L3.75179 14.9494C3.75179 15.1151 3.88611 15.2494 4.05179 15.2494L11.95 15.2494C12.1157 15.2494 12.25 15.1151 12.25 14.9494L12.25 1.04854Z"
              stroke={strokeSecond}
              strokeWidth="1.5"
            />
          </g>
          <path
            d="M7.99939 12.8672L7.99939 12.8772"
            stroke={strokeThird}
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_950_3822"
            x="3.00177"
            y="-0.00146484"
            width="9.99823"
            height="17.001"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_950_3822"
            />
          </filter>
          <clipPath id="clip0_950_3822">
            <rect
              width="16"
              height="16"
              transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 16 0)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    plus: (
      <svg
        style={style}
        width={width || '100%'}
        height={height || '100%'}
        className={`sprite-stroke-primary-color ${clsName}`}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1363_1938)">
          <path
            d="M8.00239 0.754272L8.0024 15.2456M15.2481 7.99995L0.756714 7.99997"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8.00239 0.754272V7.99996M15.2481 7.99995L0.756714 7.99997"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1363_1938">
            <rect
              width={width || '100%'}
              height={height || '100%'}
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    odometer_reading: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="2.65234" width="15.9113" height="10.6075" rx="1" />
        <mask
          id="mask0_1559_40297"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="2"
          width={width || '100%'}
          height={height || '100%'}
        >
          <rect y="2.65234" width="15.9113" height="10.6075" rx="1" />
        </mask>
        <g mask="url(#mask0_1559_40297)">
          <rect
            x="2.38867"
            y="6.24219"
            width="2.47109"
            height="3.54708"
            rx="1.23554"
            stroke="white"
          />
          <rect
            x="6.7644"
            y="6.24219"
            width="2.47109"
            height="3.54708"
            rx="1.23554"
            stroke="white"
          />
          <path
            d="M11.1399 4.49379C11.1399 4.03613 11.5109 3.66512 11.9686 3.66512H12.3754C13.0577 3.66512 13.611 4.21843 13.611 4.90089C13.611 5.58334 13.0577 6.13666 12.3754 6.13666C11.6931 6.13666 11.1399 5.58334 11.1399 4.90089V4.49379Z"
            stroke="white"
          />
          <path
            d="M13.0523 1.64648L11.3731 4.14844"
            stroke="white"
            strokeLinecap="round"
          />
          <path
            d="M11.2509 8.58594L13.2408 8.58594C13.4613 8.58594 13.6064 8.81578 13.5117 9.01485L11.7401 12.7374"
            stroke="white"
            strokeLinecap="round"
          />
        </g>
      </svg>
    ),
    tech_condition: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.75 5.75488C0.75 4.98065 0.925973 4.24752 1.2401 3.59331L5.46747 7.79142L7.82049 5.43839L3.59479 1.24194C4.24739 0.929717 4.97828 0.754883 5.75 0.754883C8.51142 0.754883 10.75 2.99346 10.75 5.75488C10.75 6.39178 10.6309 7.00087 10.4138 7.56109L14.5663 11.431C15.4862 12.2884 15.5113 13.7379 14.6215 14.6266C13.7328 15.5141 12.2853 15.4885 11.4286 14.5699L7.55663 10.4185C6.99629 10.6357 6.38706 10.7549 5.75 10.7549C2.98858 10.7549 0.75 8.51631 0.75 5.75488Z"
          stroke={strokeSecond}
          strokeWidth="0.4"
        />
      </svg>
    ),
    location: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 12 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 6.00042C8 7.10499 7.10457 8.00042 6 8.00042C4.89543 8.00042 4 7.10499 4 6.00042C4 4.89585 4.89543 4.00042 6 4.00042C7.10457 4.00042 8 4.89585 8 6.00042Z"
          stroke={strokeSecond}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M11.249 6.15022C11.249 8.75136 7.23173 13.8265 6.2261 15.0561C6.10863 15.1998 5.89137 15.1998 5.7739 15.0561C4.76827 13.8264 0.750977 8.75136 0.750977 6.15022C0.750977 3.17693 3.10104 0.766602 6 0.766602C8.89896 0.766602 11.249 3.17693 11.249 6.15022Z"
          stroke={strokeSecond}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    dot: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 6 6"
      >
        <circle cx="3" cy="3" r="3" fill="none" />
      </svg>
    ),
    key: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_283_1956)">
          <path
            d="M10.9996 9.74632C13.3466 9.74632 15.2492 7.84373 15.2492 5.49676C15.2492 3.14979 13.3466 1.24719 10.9996 1.24719C8.65262 1.24719 6.75003 3.14979 6.75003 5.49676C6.75003 6.0014 6.83799 6.4855 6.99942 6.93456L1.08001 12.502C0.52134 13.0274 0.737744 13.9603 1.47069 14.1861L3.51536 14.816C4.1345 15.0068 4.76151 14.5439 4.76151 13.896C4.76151 13.3643 5.19253 12.9333 5.72421 12.9333H6.02817C6.58045 12.9333 7.02817 12.4856 7.02817 11.9333V11.6666C7.02817 11.1144 7.47588 10.6666 8.02817 10.6666L8.29482 10.6666C8.84711 10.6666 9.29482 10.2189 9.29482 9.66665V9.39999C9.29482 9.39685 9.29484 9.39371 9.29487 9.39058C9.8167 9.61936 10.3933 9.74632 10.9996 9.74632Z"
            strokeWidth="1.5"
          />
          <path
            d="M12.5427 4.99101C12.5427 5.64849 12.0097 6.18148 11.3523 6.18148C10.6948 6.18148 10.1618 5.64849 10.1618 4.99101C10.1618 4.33353 10.6948 3.80054 11.3523 3.80054C12.0097 3.80054 12.5427 4.33353 12.5427 4.99101Z"
            strokeWidth="1.5"
            stroke={strokeSecond}
          />
        </g>
        <defs>
          <clipPath id="clip0_283_1956">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    // todo notworkin
    ok: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 12 12"
        fill="none"
      >
        <g clipPath="url(#clip)">
          <circle cx="6" cy="6" r="5.5" stroke={strokeSecond} />
          <path
            d="M4.125 5.8125L5.625 7.6875L8.25 4.3125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    inbox: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M3 1.5C3.41421 1.5 3.75 1.16421 3.75 0.75C3.75 0.335786 3.41421 0 3 0V1.5ZM13 0C12.5858 0 12.25 0.335786 12.25 0.75C12.25 1.16421 12.5858 1.5 13 1.5V0ZM11.5383 7.53033C11.8312 7.23744 11.8312 6.76256 11.5383 6.46967C11.2454 6.17678 10.7706 6.17678 10.4777 6.46967L11.5383 7.53033ZM8.00799 10L7.47766 10.5303C7.61831 10.671 7.80907 10.75 8.00799 10.75C8.2069 10.75 8.39766 10.671 8.53832 10.5303L8.00799 10ZM8.75399 0.999667C8.75381 0.585453 8.41787 0.249816 8.00366 0.25C7.58944 0.250184 7.25381 0.58612 7.25399 1.00033L8.75399 0.999667ZM5.53832 6.46967C5.24543 6.17678 4.77055 6.17678 4.47766 6.46967C4.18476 6.76256 4.18476 7.23744 4.47766 7.53033L5.53832 6.46967ZM3 0H1.75V1.5H3V0ZM0 1.75V14.25H1.5V1.75H0ZM1.75 16H14.25V14.5H1.75V16ZM16 14.25V1.75H14.5V14.25H16ZM14.25 0H13V1.5H14.25V0ZM16 1.75C16 0.783501 15.2165 0 14.25 0V1.5C14.3881 1.5 14.5 1.61193 14.5 1.75H16ZM14.25 16C15.2165 16 16 15.2165 16 14.25H14.5C14.5 14.3881 14.3881 14.5 14.25 14.5V16ZM0 14.25C0 15.2165 0.783502 16 1.75 16V14.5C1.61193 14.5 1.5 14.3881 1.5 14.25H0ZM1.75 0C0.783502 0 0 0.783502 0 1.75H1.5C1.5 1.61193 1.61193 1.5 1.75 1.5V0ZM10.4777 6.46967L7.47766 9.46967L8.53832 10.5303L11.5383 7.53033L10.4777 6.46967ZM7.25399 1.00033L7.25799 10.0003L8.75799 9.99967L8.75399 0.999667L7.25399 1.00033ZM8.53832 9.46967L5.53832 6.46967L4.47766 7.53033L7.47766 10.5303L8.53832 9.46967Z" />
      </svg>
    ),

    phone: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clipPath="url(#clip0_743_429)">
          <path
            d="M9.24609 1.50281L6.74999 1.50281L6.74999 1.95028C6.74999 2.11596 6.88431 2.25028 7.04999 2.25028L8.94609 2.25028C9.11178 2.25028 9.24609 2.11596 9.24609 1.95028L9.24609 1.50281Z"
            strokeWidth="1.5"
          />
          <g filter="url(#filter0_i_743_429)">
            <path
              d="M12.25 1.04847C12.25 0.882789 12.1157 0.748474 11.95 0.748474L4.05177 0.748473C3.88609 0.748473 3.75177 0.882788 3.75178 1.04847L3.75179 14.9494C3.75179 15.115 3.88611 15.2494 4.05179 15.2494L11.95 15.2494C12.1157 15.2494 12.25 15.115 12.25 14.9494L12.25 1.04847Z"
              stroke={strokeSecond}
              strokeWidth="1.5"
            />
          </g>
          <path
            d="M7.99939 12.8671L7.99939 12.8771"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_743_429"
            x="3.00183"
            y="-0.00152588"
            width="9.99817"
            height="17.0009"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_743_429"
            />
          </filter>
          <clipPath id="clip0_743_429">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 16 0)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    email: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_950_3828)">
          <path
            d="M15 3L9.30158 7.88436C8.5526 8.52634 7.4474 8.52634 6.69842 7.88436L1 3"
            strokeWidth="1.5"
          />
          <g filter="url(#filter0_i_950_3828)">
            <rect
              x="0.75"
              y="0.75"
              width="10.5"
              height="14.5"
              rx="1.25"
              transform="matrix(-4.37114e-08 1 1 4.37114e-08 -3.27835e-08 2)"
              stroke={strokeSecond}
              strokeWidth="1.5"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_i_950_3828"
            x="0"
            y="2"
            width="16"
            height="13"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_950_3828"
            />
          </filter>
          <clipPath id="clip0_950_3828">
            <rect
              width="16"
              height="16"
              transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 16 0)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    mail: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 12"
        fill="none"
      >
        <path
          d="M15 1L9.30158 5.88436C8.5526 6.52634 7.4474 6.52634 6.69842 5.88436L1 0.999999"
          strokeWidth="1.5"
        />
        <g filter="url(#filter0)">
          <rect
            x="0.75"
            y="0.75"
            width="10.5"
            height="14.5"
            rx="1.25"
            transform="matrix(-4.37114e-08 1 1 4.37114e-08 -3.27835e-08 3.27835e-08)"
            stroke={strokeSecond}
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <filter
            id="filter0"
            x="0"
            y="0"
            width="16"
            height="13"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_1"
            />
          </filter>
        </defs>
      </svg>
    ),

    chat: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 15"
        fill="none"
      >
        <path
          d="M4.99854 5.5L4.99954 5.5M7.99954 5.5L8.00054 5.5M11.0005 5.5L11.0015 5.5"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g filter="url(#filter0_i_0_1)">
          <path
            d="M0.754618 8.99657L0.754619 13.9281C0.754619 13.9285 0.754882 13.9289 0.755277 13.929L0.755727 13.9292C0.756123 13.9293 0.756565 13.9292 0.756835 13.9289L3.54076 10.6069C3.73076 10.3801 4.0114 10.2492 4.30721 10.2492L13.95 10.2492C14.668 10.2492 15.25 9.66713 15.25 8.94916L15.25 2.04768C15.25 1.32971 14.668 0.747679 13.95 0.74768L2.05 0.747681C1.33203 0.747681 0.75 1.32971 0.75 2.04768L0.754618 8.99657Z"
            stroke={strokeSecond}
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_0_1"
            x="0"
            y="-0.00231934"
            width="16"
            height="15.6816"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_1"
            />
          </filter>
        </defs>
      </svg>
    ),

    check: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 20 20"
        fill="none"
      >
        <path d="M18.75 2.5L8.75 17.5L2.5 10.625" />
      </svg>
    ),

    loupe: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 14 14"
        fill="none"
      >
        <path d="M10.4506 9.508L13.4713 12.528C13.5964 12.653 13.6667 12.8226 13.6668 12.9994C13.6668 13.1763 13.5966 13.3459 13.4716 13.471C13.3466 13.5961 13.177 13.6664 13.0002 13.6665C12.8233 13.6665 12.6537 13.5963 12.5286 13.4713L9.50795 10.4507C8.37301 11.3452 6.93918 11.7724 5.49973 11.6447C4.06028 11.5171 2.72397 10.8444 1.76411 9.76411C0.804251 8.68384 0.293371 7.27768 0.33596 5.83321C0.378549 4.38874 0.971388 3.01511 1.99323 1.99327C3.01507 0.971434 4.38869 0.378595 5.83316 0.336006C7.27763 0.293417 8.6838 0.804296 9.76407 1.76416C10.8443 2.72402 11.5171 4.06033 11.6447 5.49978C11.7723 6.93923 11.3452 8.37305 10.4506 9.508ZM9.10662 9.02133C9.90424 8.20118 10.3452 7.09889 10.3332 5.95491C10.3213 4.81093 9.85742 3.71809 9.04284 2.91478C8.22827 2.11147 7.12907 1.66288 5.98503 1.66686C4.841 1.67084 3.74495 2.12707 2.93599 2.93604C2.12703 3.745 1.6708 4.84104 1.66681 5.98508C1.66283 7.12912 2.11142 8.22831 2.91473 9.04289C3.71804 9.85746 4.81088 10.3213 5.95486 10.3333C7.09885 10.3452 8.20114 9.90428 9.02129 9.10666C9.04713 9.07573 9.07568 9.04717 9.10662 9.02133Z" />
      </svg>
    ),

    calendar: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 14 16"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.33337 2H11.6667C12.1971 2 12.7058 2.21071 13.0809 2.58579C13.456 2.96086 13.6667 3.46957 13.6667 4V13.3333C13.6667 13.8638 13.456 14.3725 13.0809 14.7475C12.7058 15.1226 12.1971 15.3333 11.6667 15.3333H2.33337C1.80294 15.3333 1.29423 15.1226 0.919161 14.7475C0.544088 14.3725 0.333374 13.8638 0.333374 13.3333V4C0.333374 3.46957 0.544088 2.96086 0.919161 2.58579C1.29423 2.21071 1.80294 2 2.33337 2ZM2.33337 3.33333C2.15656 3.33333 1.98699 3.40357 1.86197 3.5286C1.73695 3.65362 1.66671 3.82319 1.66671 4V13.3333C1.66671 13.5101 1.73695 13.6797 1.86197 13.8047C1.98699 13.9298 2.15656 14 2.33337 14H11.6667C11.8435 14 12.0131 13.9298 12.1381 13.8047C12.2631 13.6797 12.3334 13.5101 12.3334 13.3333V4C12.3334 3.82319 12.2631 3.65362 12.1381 3.5286C12.0131 3.40357 11.8435 3.33333 11.6667 3.33333H2.33337Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3334 7.33332H1.66675V5.99999H12.3334V7.33332ZM9.00008 3.99999V1.33332C9.00008 1.15651 9.07032 0.986943 9.19534 0.861919C9.32037 0.736894 9.48994 0.666656 9.66675 0.666656C9.84356 0.666656 10.0131 0.736894 10.1382 0.861919C10.2632 0.986943 10.3334 1.15651 10.3334 1.33332V3.99999C10.3334 4.1768 10.2632 4.34637 10.1382 4.47139C10.0131 4.59642 9.84356 4.66666 9.66675 4.66666C9.48994 4.66666 9.32037 4.59642 9.19534 4.47139C9.07032 4.34637 9.00008 4.1768 9.00008 3.99999ZM3.66675 3.99999V1.33332C3.66675 1.15651 3.73699 0.986943 3.86201 0.861919C3.98703 0.736894 4.1566 0.666656 4.33341 0.666656C4.51023 0.666656 4.67979 0.736894 4.80482 0.861919C4.92984 0.986943 5.00008 1.15651 5.00008 1.33332V3.99999C5.00008 4.1768 4.92984 4.34637 4.80482 4.47139C4.67979 4.59642 4.51023 4.66666 4.33341 4.66666C4.1566 4.66666 3.98703 4.59642 3.86201 4.47139C3.73699 4.34637 3.66675 4.1768 3.66675 3.99999Z"
        />
      </svg>
    ),

    services_ofd: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.279053 12.5581L20.3721 1.11625V24L0.279053 12.5581Z"
          fill="#4BA1A5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8838 14.5116V0L23.721 7.25583L10.8838 14.5116Z"
          fill="#254E5F"
        />
      </svg>
    ),

    services_edo: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.67755 0.511627V2.26874H14.2328V13.3887H17.2344V0.511627H4.67755Z"
          fill="#EEAF41"
        />
        <path d="M13.2823 19.4884H0V3.29788H13.2823V19.4884Z" fill="#EEAF41" />
        <path
          d="M6.5285 10.1255L23.2877 19.4884V0.536722L6.5285 10.1255Z"
          fill="#254E5F"
        />
      </svg>
    ),

    services_go: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.367 0.692945C9.84952 4.25064 10.6048 6.19351 12.367 10.0035C14.1293 13.7883 14.8846 16.034 12.367 19.5917H1.61723C4.13474 16.034 3.37949 13.7883 1.61723 10.0035C-0.145038 6.19351 -0.900294 4.27588 1.61723 0.692945H12.367Z"
          fill="#488BCA"
        />
        <path
          d="M23.6204 0.46586L6.80334 10.0792L23.6204 19.5159V0.46586Z"
          fill="#254E5F"
        />
      </svg>
    ),
    services_epd: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 98 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.55183 22.8396C1.5553 22.2603 1.55746 20.8201 2.55572 20.2438L36.6987 0.531347C37.1628 0.263395 37.7346 0.263395 38.1987 0.531347L73.875 21.1291C74.3391 21.3971 74.625 21.8922 74.625 22.4281V63.6237C74.625 64.1596 74.3391 64.6548 73.875 64.9227L39.7537 84.6226C38.7538 85.2 37.5038 84.4783 37.5037 83.3236L37.5032 44.0219C37.5032 43.4876 37.219 42.9936 36.7571 42.7251L2.55183 22.8396Z"
          fill="#F5A91B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.77832 64.9209V30.6011L19.8023 41.6431L30.4479 57.8087L30.4482 82.2797L0.77832 64.9209Z"
          fill="url(#paint0_linear_3495_834)"
          fillOpacity="0.8"
        />
        <path
          d="M38.2281 42.7021C37.688 43.0111 37.692 43.7914 38.2352 44.0948L95.8635 76.2901C96.3967 76.588 97.0536 76.2025 97.0536 75.5917V10.4244C97.0536 9.80994 96.3897 9.42487 95.8563 9.73001L38.2281 42.7021Z"
          fill="#254E5F"
        />
        <path
          d="M19.7246 53.6935L19.724 41.6787C19.724 41.6291 19.7885 41.6098 19.8158 41.6512L30.4311 57.787C30.4578 57.8276 30.4167 57.8786 30.3713 57.8611L19.7887 53.7868C19.7501 53.772 19.7246 53.7349 19.7246 53.6935Z"
          fill="#F5A91B"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3495_834"
            x1="10.7457"
            y1="100.567"
            x2="34.7407"
            y2="34.9387"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F5A91B" stopOpacity="0.6" />
            <stop offset="0.234375" stopColor="#F5A91B" stopOpacity="0.78" />
            <stop offset="0.703125" stopColor="#F5A91B" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    ),
    services_mchd: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1142_15635)">
          <path
            opacity="0.7"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8347 1.89532H0.811183C0.579994 1.89532 0.392578 2.08274 0.392578 2.31393V21.5697C0.392578 21.8009 0.579994 21.9883 0.811183 21.9883H15.6019C15.8331 21.9883 16.0205 21.8009 16.0205 21.5697V5.80207L11.8347 1.89532Z"
            fill="url(#paint0_linear_1142_15635)"
          />
          <path
            d="M2.20882 11.6326L2.61348 12.201L2.20882 11.6326L0.850275 12.5999L1.25493 13.1682L0.850275 12.5999C0.329519 12.9707 0.0931032 13.6254 0.256837 14.2434L0.683986 15.8555C0.69013 15.8787 0.690192 15.903 0.684166 15.9263L0.265225 17.5405C0.104637 18.1593 0.344382 18.8128 0.867017 19.1809L2.23047 20.1413C2.25008 20.1551 2.2658 20.1738 2.27611 20.1954L2.9928 21.7013C3.26752 22.2785 3.87125 22.625 4.50824 22.5711L6.17002 22.4304C6.19392 22.4283 6.21795 22.4325 6.23977 22.4425L7.75675 23.1354C8.33823 23.401 9.02345 23.2784 9.47674 22.8276L10.6593 21.6516C10.6763 21.6347 10.6974 21.6225 10.7205 21.6161L12.328 21.1717C12.9441 21.0014 13.3902 20.4671 13.4477 19.8304L13.5977 18.1694C13.5998 18.1455 13.6081 18.1226 13.6217 18.1028L13.1001 17.7437L13.6217 18.1028L14.5675 16.7292C14.93 16.2027 14.9283 15.5066 14.5631 14.9819L13.6103 13.6131C13.5966 13.5934 13.5882 13.5705 13.5859 13.5467L13.4275 11.8865C13.3668 11.2501 12.918 10.718 12.3009 10.5508L10.6912 10.1147C10.6681 10.1084 10.6469 10.0963 10.6298 10.0794L9.44133 8.9095L8.9519 9.4067L9.44133 8.9095C8.98575 8.46104 8.29992 8.34191 7.71979 8.61046L6.20636 9.31106L6.49945 9.94419L6.20636 9.31106C6.18459 9.32114 6.16059 9.32543 6.13668 9.32353L4.4742 9.19127C3.83695 9.14057 3.23499 9.49015 2.96321 10.0688L2.25419 11.5783C2.24399 11.6 2.22836 11.6187 2.20882 11.6326Z"
            fill="#626AB7"
            stroke="white"
            strokeWidth="1.39535"
          />
          <path
            d="M7.30465 12.4294C7.15392 12.5156 7.15503 12.7333 7.30663 12.818L23.3889 21.8028C23.5377 21.8859 23.7211 21.7783 23.7211 21.6079V3.42163C23.7211 3.25016 23.5358 3.1427 23.3869 3.22785L7.30465 12.4294Z"
            fill="#254E5F"
          />
          <path
            d="M11.834 1.89532L16.02 5.8023H11.834V1.89532Z"
            fill="#626AB7"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1142_15635"
            x1="8.20653"
            y1="1.89532"
            x2="3.78911"
            y2="21.9374"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#626AB7" stopOpacity="0.6" />
            <stop offset="0.234375" stopColor="#626AB7" stopOpacity="0.78" />
            <stop offset="0.703125" stopColor="#626AB7" stopOpacity="0.5" />
          </linearGradient>
          <clipPath id="clip0_1142_15635">
            <rect
              width="28"
              height="24"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    eye_opened: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {alt && <title>{alt}</title>}
        <g clipPath="url(#clip0_110_2069)">
          <circle
            cx="8.5498"
            cy="8.5"
            r="2.25"
            stroke={strokeSecond}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.7996 8.5L14.4756 7.03902C11.301 3.53598 5.79726 3.5351 2.62151 7.03712L1.29492 8.5L2.62151 9.96288C5.79726 13.4649 11.301 13.464 14.4756 9.96098L15.7996 8.5Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_110_2069">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0.549805 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),

    eye_closed: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1353_1948)">
          <path
            d="M8 15.25V12.7207M11.6545 14.4431L10.9999 12M15.2477 12.2923L13.4593 10.5038M0.75206 12.2923L2.54055 10.5038M4.34527 14.4431L4.9999 12"
            stroke={strokeSecond}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15.2477 8.0049L13.9288 9.45982C10.753 12.9631 5.24787 12.9623 2.07308 9.45809L0.75206 8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1353_1948">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    help: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_950_3837)">
          <path
            d="M5.75 6.49487C5.75 5.25223 6.75736 4.24487 8 4.24487C9.24264 4.24487 10.25 5.25223 10.25 6.49487C10.25 7.73751 9.24264 8.74487 8 8.74487L8 9.49747"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g filter="url(#filter0_i_950_3837)">
            <circle
              cx="8"
              cy="8"
              r="7.25"
              stroke={strokeSecond}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M8 11.7449L8 11.7549"
            stroke={strokeThird}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_950_3837"
            x="0"
            y="0"
            width="16"
            height="17"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_950_3837"
            />
          </filter>
          <clipPath id="clip0_950_3837">
            <rect width="16" height="16" />
          </clipPath>
        </defs>
      </svg>
    ),

    download: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_577_19770)">
          <path d="M8.00485 11.25L7.54523 11.7096C7.79907 11.9635 8.21063 11.9635 8.46447 11.7096L8.00485 11.25ZM12.9645 7.20964C13.2183 6.9558 13.2183 6.54424 12.9645 6.2904C12.7106 6.03656 12.2991 6.03656 12.0452 6.2904L12.9645 7.20964ZM8.65723 0.75C8.65723 0.391015 8.36622 0.1 8.00723 0.1C7.64825 0.1 7.35723 0.391015 7.35723 0.75L8.65723 0.75ZM7.35723 11.249C7.35723 11.608 7.64825 11.899 8.00723 11.899C8.36622 11.899 8.65723 11.608 8.65723 11.249H7.35723ZM3.96447 6.29041C3.71063 6.03657 3.29907 6.03657 3.04523 6.29041C2.79139 6.54425 2.79139 6.95581 3.04523 7.20965L3.96447 6.29041ZM15.9049 10.75C15.9049 10.391 15.6138 10.1 15.2549 10.1C14.8959 10.1 14.6049 10.391 14.6049 10.75H15.9049ZM13.2549 15.25V15.9V15.25ZM2.75 15.25V14.6V15.25ZM1.4 10.75C1.4 10.391 1.10899 10.1 0.75 10.1C0.391015 10.1 0.1 10.391 0.1 10.75H1.4ZM8.46447 11.7096L8.46685 11.7073L7.54761 10.788L7.54523 10.7904L8.46447 11.7096ZM8.46685 11.7073L12.9645 7.20964L12.0452 6.2904L7.54761 10.788L8.46685 11.7073ZM7.35723 0.75L7.35723 11.2476H8.65723L8.65723 0.75L7.35723 0.75ZM7.35723 11.2476V11.249H8.65723V11.2476H7.35723ZM8.46447 10.7904L3.96447 6.29041L3.04523 7.20965L7.54523 11.7096L8.46447 10.7904ZM14.6049 10.75V13.25H15.9049V10.75H14.6049ZM13.2549 14.6L2.75 14.6V15.9L13.2549 15.9V14.6ZM1.4 13.25V10.75H0.1V13.25H1.4ZM2.75 14.6C2.00442 14.6 1.4 13.9956 1.4 13.25H0.1C0.1 14.7136 1.28645 15.9 2.75 15.9V14.6ZM14.6049 13.25C14.6049 13.9956 14.0004 14.6 13.2549 14.6V15.9C14.7184 15.9 15.9049 14.7136 15.9049 13.25H14.6049Z" />
        </g>
        <defs>
          <clipPath id="clip0_577_19770">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),

    arrowLeft: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.75 8L11.25 14.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          stroke={strokeSecond}
        />
        <path d="M4.75 8L11.25 1.5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),

    arrowRight: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.25 8L4.75 14.5"
          stroke={strokeSecond}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M11.25 8L4.75 1.5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    arrowUp: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 4.75L14.5 11.25"
          stroke={strokeSecond}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M8 4.75L1.5 11.25" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    arrowDown: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 11.25L14.5 4.75"
          stroke={strokeSecond}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M8 11.25L1.5 4.75" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),

    flowStatusOk: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_920_885)">
          <circle cx="8" cy="8" r="8" fill="#8BC34A" />
          <path
            d="M5.5 7.75L7.5 10.25L11 5.75"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_920_885">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),

    flowStatusWait: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_920_736)">
          <circle
            cx="8"
            cy="8"
            r="7.25"
            fill="#DCAE1D"
            stroke="#DCAE1D"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.00018 3.75L8.00016 8.00011L10.2506 10.2505"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_920_736">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),

    flowStatusPrepare: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_920_736)">
          <circle
            cx="8"
            cy="8"
            r="7.25"
            fill="#D6D6D6"
            stroke="#D6D6D6"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.00018 3.75L8.00016 8.00011L10.2506 10.2505"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_920_736">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),

    flowStatusAlert: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1415_375)">
          <circle cx="8" cy="8" r="8" fill="#D12E34" />
          <path
            d="M8 4.48877L8 8.98997"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12L8 12.01"
            stroke="white"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1415_375">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    flowStatusClosed: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1818_31377)">
          <circle cx="6.5" cy="6" r="6" fill="#ADADB8" />
          <path
            d="M4.625 5.8125L6.125 7.6875L8.75 4.3125"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1818_31377">
            <rect
              width="12"
              height="12"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    flowStatusStopGrey: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="8" fill="#BDBDBD" />
        <path
          d="M5.21003 8L10.9275 8"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    qr: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        fill="none"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1087_50131)">
          <path
            d="M15.302 0.9375H18.4375C18.7827 0.9375 19.0625 1.21732 19.0625 1.5625V4.73408M19.0625 15.3125V18.4375C19.0625 18.7827 18.7827 19.0625 18.4375 19.0625H15.3125M4.6875 19.0625H1.5625C1.21732 19.0625 0.9375 18.7827 0.9375 18.4375L0.9375 15.3125M0.9375 4.6875L0.988913 1.55229C0.994507 1.21116 1.27264 0.937544 1.61382 0.937539L4.6875 0.9375M5.14832 8.43744H7.81488C8.16006 8.43744 8.43988 8.15762 8.43988 7.81244V5.14587C8.43988 4.8007 8.16006 4.52087 7.81488 4.52087H5.14832C4.80314 4.52087 4.52332 4.8007 4.52332 5.14587V7.81244C4.52332 8.15762 4.80314 8.43744 5.14832 8.43744ZM5.14832 15.4791H7.81488C8.16006 15.4791 8.43988 15.1992 8.43988 14.8541V12.1875C8.43988 11.8423 8.16006 11.5625 7.81488 11.5625H5.14832C4.80314 11.5625 4.52332 11.8423 4.52332 12.1875V14.8541C4.52332 15.1992 4.80314 15.4791 5.14832 15.4791ZM12.1851 8.43744H14.8516C15.1968 8.43744 15.4766 8.15762 15.4766 7.81244V5.14587C15.4766 4.8007 15.1968 4.52087 14.8516 4.52087H12.1851C11.8399 4.52087 11.5601 4.8007 11.5601 5.14587V7.81244C11.5601 8.15762 11.8399 8.43744 12.1851 8.43744ZM11.6851 12.8125H12.6851C12.7541 12.8125 12.8101 12.7565 12.8101 12.6875V11.6875C12.8101 11.6185 12.7541 11.5625 12.6851 11.5625H11.6851C11.616 11.5625 11.5601 11.6185 11.5601 11.6875V12.6875C11.5601 12.7565 11.616 12.8125 11.6851 12.8125ZM14.3517 15.4791H15.3517C15.4207 15.4791 15.4767 15.4232 15.4767 15.3541V14.3541C15.4767 14.2851 15.4207 14.2291 15.3517 14.2291H14.3517C14.2826 14.2291 14.2267 14.2851 14.2267 14.3541V15.3541C14.2267 15.4232 14.2826 15.4791 14.3517 15.4791Z"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1087_50131">
            <rect width={width || '100%'} height={height || '100%'} />
          </clipPath>
        </defs>
      </svg>
    ),

    clock: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1946_41924)">
          <path
            d="M8.00018 3.75L8.00016 8.00011L10.2506 10.2505M15.25 8C15.25 12.0041 12.0041 15.25 8 15.25C3.99594 15.25 0.75 12.0041 0.75 8C0.75 3.99594 3.99594 0.75 8 0.75C12.0041 0.75 15.25 3.99594 15.25 8Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1946_41924">
            <rect
              width={width || '100%'}
              height={height || '100%'}
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    ),

    edit: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_1818_31285">
          <path d="M2.62197 6.56107L8.14076 0.573248C8.25305 0.451416 8.44284 0.44368 8.56468 0.555968L11.2283 3.01096C11.3501 3.12325 11.3579 3.31304 11.2456 3.43487L5.61016 9.54925L2.62197 6.56107ZM1.81724 7.87766L1.05537 10.9885C0.999217 11.2178 1.21764 11.4191 1.4416 11.3444L4.32363 10.3841L1.81724 7.87766Z" />
        </mask>
        <path d="M2.62197 6.56107L8.14076 0.573248C8.25305 0.451416 8.44284 0.44368 8.56468 0.555968L11.2283 3.01096C11.3501 3.12325 11.3579 3.31304 11.2456 3.43487L5.61016 9.54925L2.62197 6.56107ZM1.81724 7.87766L1.05537 10.9885C0.999217 11.2178 1.21764 11.4191 1.4416 11.3444L4.32363 10.3841L1.81724 7.87766Z" />
        <path
          d="M8.14076 0.573248L7.03779 -0.443333V-0.443333L8.14076 0.573248ZM2.62197 6.56107L1.51899 5.54449L0.543007 6.60343L1.56131 7.62173L2.62197 6.56107ZM8.56468 0.555968L9.58126 -0.547011L9.58126 -0.547012L8.56468 0.555968ZM11.2283 3.01096L10.2117 4.11394L10.2117 4.11394L11.2283 3.01096ZM11.2456 3.43487L10.1426 2.41829V2.41829L11.2456 3.43487ZM5.61016 9.54925L4.54949 10.6099L5.65427 11.7147L6.71313 10.5658L5.61016 9.54925ZM1.81724 7.87766L2.8779 6.817L0.994047 4.93315L0.360296 7.52084L1.81724 7.87766ZM1.05537 10.9885L2.51231 11.3453L2.51232 11.3453L1.05537 10.9885ZM1.4416 11.3444L1.91582 12.7675L1.91582 12.7675L1.4416 11.3444ZM4.32363 10.3841L4.79784 11.8071L7.10065 11.0397L5.38429 9.32339L4.32363 10.3841ZM7.03779 -0.443333L1.51899 5.54449L3.72495 7.57765L9.24374 1.58983L7.03779 -0.443333ZM9.58126 -0.547012C8.85027 -1.22074 7.71152 -1.17432 7.03779 -0.443333L9.24374 1.58983C8.79459 2.07716 8.03542 2.1081 7.5481 1.65895L9.58126 -0.547012ZM12.2449 1.90798L9.58126 -0.547011L7.54809 1.65895L10.2117 4.11394L12.2449 1.90798ZM12.3486 4.45145C13.0223 3.72046 12.9759 2.58171 12.2449 1.90798L10.2117 4.11394C9.7244 3.66478 9.69346 2.90561 10.1426 2.41829L12.3486 4.45145ZM6.71313 10.5658L12.3486 4.45145L10.1426 2.41829L4.50718 8.53267L6.71313 10.5658ZM1.56131 7.62173L4.54949 10.6099L6.67082 8.48859L3.68263 5.50041L1.56131 7.62173ZM0.360296 7.52084L-0.401569 10.6316L2.51232 11.3453L3.27418 8.23448L0.360296 7.52084ZM-0.401569 10.6316C-0.738505 12.0074 0.572061 13.2153 1.91582 12.7675L0.967392 9.92137C1.86323 9.62285 2.73694 10.4281 2.51231 11.3453L-0.401569 10.6316ZM1.91582 12.7675L4.79784 11.8071L3.84942 8.96098L0.96739 9.92137L1.91582 12.7675ZM5.38429 9.32339L2.8779 6.817L0.756578 8.93832L3.26297 11.4447L5.38429 9.32339Z"
          mask="url(#path-1-inside-1_1818_31285)"
        />
      </svg>
    ),

    edit_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2321_1173)">
          <path
            d="M2.63135 10.289L6.09188 13.4784M9.33887 3.09048L12.7994 6.27995"
            stroke="#254E5F"
            strokeWidth="1.5"
          />
          <path
            d="M11.2618 1.00233L2.02128 10.9456C1.98128 10.9886 1.95481 11.0425 1.94513 11.1004L1.31234 14.8917C1.27625 15.1079 1.47668 15.2886 1.688 15.2303L5.33844 14.2237C5.39208 14.2089 5.44056 14.1794 5.47844 14.1387L14.7207 4.19361C14.8338 4.07189 14.8264 3.88141 14.7042 3.76879L11.6849 0.985961C11.5634 0.874 11.3743 0.881319 11.2618 1.00233Z"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_2321_1173">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),

    person: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.4546 14.6531V13.2979C13.4546 11.0888 11.6637 9.29791 9.45457 9.29791M2.74756 14.6531V13.2979C2.74756 11.0888 4.53842 9.2979 6.74756 9.2979H9.50644C10.5614 9.2979 11.5695 9.73364 12.2923 10.5021M10.75 3.54785C10.75 5.06663 9.51877 6.29785 7.99998 6.29785C6.4812 6.29785 5.24998 5.06663 5.24998 3.54785C5.24998 2.02907 6.4812 0.797852 7.99998 0.797852C9.51877 0.797852 10.75 2.02907 10.75 3.54785Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    cross: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.1259 2.87646L2.87893 13.1234M13.1259 13.1234L2.87891 2.87648"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    file_download: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00487 5C8.00487 7.34241 8.00487 11.7461 8.00487 11.7461M8.00487 11.7461L11 8.75M8.00487 11.7461L5 8.75"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.75 2C2.75 1.30964 3.30964 0.75 4 0.75H9.51938C9.59532 0.75 9.66715 0.784522 9.71459 0.843827L13.1952 5.19461C13.2307 5.23894 13.25 5.29401 13.25 5.35078V14C13.25 14.6904 12.6904 15.25 12 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14V2Z"
          strokeWidth="1.5"
        />
        <path
          d="M10 5V0.121094L10.063 0.161085C10.1558 0.219959 10.2382 0.29372 10.307 0.379404L13.757 4.67705C13.8043 4.73591 13.8447 4.79993 13.8776 4.86789L13.9414 5H10Z"
          fill="white"
        />
      </svg>
    ),
    file_default: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.75 8.25H10.25M5.75 5H8.25M5.75 11.5H10.246"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14V2C2.75 1.30964 3.30964 0.75 4 0.75H9.51938C9.59532 0.75 9.66715 0.784522 9.71459 0.843826L13.1952 5.19461C13.2307 5.23894 13.25 5.29401 13.25 5.35078V14C13.25 14.6904 12.6904 15.25 12 15.25Z"
          strokeWidth="1.5"
        />
        <path
          d="M10 5V0.121094L10.063 0.161085C10.1558 0.219959 10.2382 0.29372 10.307 0.379404L13.757 4.67705C13.8043 4.73591 13.8447 4.79993 13.8776 4.86789L13.9414 5H10Z"
          fill="white"
        />
      </svg>
      // TODO уголок?
    ),
    file_check: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 8.75L7.5 11.25L11 6.75"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14V2C2.75 1.30964 3.30964 0.75 4 0.75H9.51938C9.59532 0.75 9.66715 0.784522 9.71459 0.843826L13.1952 5.19461C13.2307 5.23894 13.25 5.29401 13.25 5.35078V14C13.25 14.6904 12.6904 15.25 12 15.25Z"
          strokeWidth="1.5"
        />
        <path
          d="M10 5V0.121094L10.063 0.161085C10.1558 0.219959 10.2382 0.29372 10.307 0.379404L13.757 4.67705C13.8043 4.73591 13.8447 4.79993 13.8776 4.86789L13.9414 5H10Z"
          fill="white"
        />
      </svg>
    ),
    file_question: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.75 6.495C5.75 5.25235 6.75736 4.245 8 4.245C9.24264 4.245 10.25 5.25235 10.25 6.495C10.25 7.73764 9.24264 8.745 8 8.745V9.49759"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.75 2C2.75 1.30964 3.30964 0.75 4 0.75H9.51938C9.59532 0.75 9.66715 0.784522 9.71459 0.843827L13.1952 5.19461C13.2307 5.23894 13.25 5.29401 13.25 5.35078V14C13.25 14.6904 12.6904 15.25 12 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14V2Z"
          strokeWidth="1.5"
        />
        <path
          d="M10 5V0.121094L10.063 0.161085C10.1558 0.219959 10.2382 0.29372 10.307 0.379404L13.757 4.67705C13.8043 4.73591 13.8447 4.79993 13.8776 4.86789L13.9414 5H10Z"
          fill="white"
        />
        <path
          d="M8 11.745L8 11.755"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    file_alert: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.75 2C2.75 1.30964 3.30964 0.75 4 0.75H9.51938C9.59532 0.75 9.66715 0.784522 9.71459 0.843827L13.1952 5.19461C13.2307 5.23894 13.25 5.29401 13.25 5.35078V14C13.25 14.6904 12.6904 15.25 12 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14V2Z"
          strokeWidth="1.5"
        />
        <path
          d="M10 5V0.121094L10.063 0.161085C10.1558 0.219959 10.2382 0.29372 10.307 0.379404L13.757 4.67705C13.8043 4.73591 13.8447 4.79993 13.8776 4.86789L13.9414 5H10Z"
          fill="white"
        />
        <path
          d="M8 4.48877L8 8.98997"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11.745L8 11.755"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    file_info: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.75 2C2.75 1.30964 3.30964 0.75 4 0.75H9.51938C9.59532 0.75 9.66715 0.784522 9.71459 0.843827L13.1952 5.19461C13.2307 5.23894 13.25 5.29401 13.25 5.35078V14C13.25 14.6904 12.6904 15.25 12 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14V2Z"
          strokeWidth="1.5"
        />
        <path
          d="M10 5V0.121094L10.063 0.161085C10.1558 0.219959 10.2382 0.29372 10.307 0.379404L13.757 4.67705C13.8043 4.73591 13.8447 4.79993 13.8776 4.86789L13.9414 5H10Z"
          fill="white"
        />
        <path
          d="M8 11.755L8 7.2538"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 4.49878L8 4.48878"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    file_plus: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.754 9H10.25M8.00201 6.75L8.00201 11.25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.75 2C2.75 1.30964 3.30964 0.75 4 0.75H9.51938C9.59532 0.75 9.66715 0.784522 9.71459 0.843827L13.1952 5.19461C13.2307 5.23894 13.25 5.29401 13.25 5.35078V14C13.25 14.6904 12.6904 15.25 12 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14V2Z"
          strokeWidth="1.5"
        />
        <path
          d="M10 5V0.121094L10.063 0.161085C10.1558 0.219959 10.2382 0.29372 10.307 0.379404L13.757 4.67705C13.8043 4.73591 13.8447 4.79993 13.8776 4.86789L13.9414 5H10Z"
          fill="white"
        />
      </svg>
    ),
    file_minus: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.754 9H10.25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.75 2C2.75 1.30964 3.30964 0.75 4 0.75H9.51938C9.59532 0.75 9.66715 0.784522 9.71459 0.843827L13.1952 5.19461C13.2307 5.23894 13.25 5.29401 13.25 5.35078V14C13.25 14.6904 12.6904 15.25 12 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14V2Z"
          strokeWidth="1.5"
        />
        <path
          d="M10 5V0.121094L10.063 0.161085C10.1558 0.219959 10.2382 0.29372 10.307 0.379404L13.757 4.67705C13.8043 4.73591 13.8447 4.79993 13.8776 4.86789L13.9414 5H10Z"
          fill="white"
        />
      </svg>
    ),
    file_x_cross: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.70535 6.70332L10.2987 11.2967M10.2987 6.70331L5.70532 11.2967"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M2.75 2C2.75 1.30964 3.30964 0.75 4 0.75H9.51938C9.59532 0.75 9.66715 0.784522 9.71459 0.843827L13.1952 5.19461C13.2307 5.23894 13.25 5.29401 13.25 5.35078V14C13.25 14.6904 12.6904 15.25 12 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14V2Z"
          strokeWidth="1.5"
        />
        <path
          d="M10 5V0.121094L10.063 0.161085C10.1558 0.219959 10.2382 0.29372 10.307 0.379404L13.757 4.67705C13.8043 4.73591 13.8447 4.79993 13.8776 4.86789L13.9414 5H10Z"
          fill="white"
        />
      </svg>
    ),
    file_crossout: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2544_398)">
          <path
            d="M0.750242 0.750246L15.25 15.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.75 0.75H9.45775C9.57926 0.75 9.69419 0.805236 9.7701 0.900122L13.1623 5.14043C13.2191 5.21136 13.25 5.29948 13.25 5.39031V8.24549M2.75 7.75V13.95C2.75 14.668 3.33203 15.25 4.05 15.25H10.25"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10 5V0.121094L10.063 0.161085C10.1558 0.219959 10.2382 0.29372 10.307 0.379404L13.757 4.67705C13.8043 4.73591 13.8447 4.79993 13.8776 4.86789L13.9414 5H10Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2544_398">
            <rect
              width={width || '100%'}
              height={height || '100%'}
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    file_pause: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.25003 6.75L6.25 11.25M9.75003 6.75L9.75 11.25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.75 2C2.75 1.30964 3.30964 0.75 4 0.75H9.51938C9.59532 0.75 9.66715 0.784522 9.71459 0.843827L13.1952 5.19461C13.2307 5.23894 13.25 5.29401 13.25 5.35078V14C13.25 14.6904 12.6904 15.25 12 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14V2Z"
          strokeWidth="1.5"
        />
        <path
          d="M10 5V0.121094L10.063 0.161085C10.1558 0.219959 10.2382 0.29372 10.307 0.379404L13.757 4.67705C13.8043 4.73591 13.8447 4.79993 13.8776 4.86789L13.9414 5H10Z"
          fill="white"
        />
      </svg>
    ),
    file_dot: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.75 2C2.75 1.30964 3.30964 0.75 4 0.75H9.51938C9.59532 0.75 9.66715 0.784522 9.71459 0.843827L13.1952 5.19461C13.2307 5.23894 13.25 5.29401 13.25 5.35078V14C13.25 14.6904 12.6904 15.25 12 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14V2Z"
          strokeWidth="1.5"
        />
        <path
          d="M8 9L8 9.01"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 5V0.121094L10.063 0.161085C10.1558 0.219959 10.2382 0.29372 10.307 0.379404L13.757 4.67705C13.8043 4.73591 13.8447 4.79993 13.8776 4.86789L13.9414 5H10Z"
          fill="white"
        />
      </svg>
    ),
    briefcase: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75452 4.35874V1.7353C3.75452 1.56962 3.88883 1.4353 4.05452 1.4353H11.9645C12.1302 1.4353 12.2645 1.56962 12.2645 1.7353V4.35874"
          strokeWidth="1.5"
        />
        <path
          d="M6.75391 9.03528H9.25001V9.48275C9.25001 9.64843 9.11569 9.78275 8.95001 9.78275H7.05391C6.88822 9.78275 6.75391 9.64843 6.75391 9.48275V9.03528Z"
          strokeWidth="1.5"
        />
        <path
          d="M14.7 4.01746C15.0038 4.01746 15.25 4.2637 15.25 4.56746V13.503C15.25 13.8067 15.0038 14.053 14.7 14.053L1.3 14.053C0.996244 14.053 0.75 13.8067 0.75 13.503L0.75 4.56746C0.75 4.2637 0.996243 4.01746 1.3 4.01746L14.7 4.01746Z"
          strokeWidth="1.5"
        />
        <path
          d="M1 6.50586L7.60608 9.33704C7.85763 9.44484 8.14237 9.44484 8.39392 9.33704L15 6.50586M6.75391 9.03522H9.25001V9.48269C9.25001 9.64837 9.11569 9.78269 8.95001 9.78269H7.05391C6.88822 9.78269 6.75391 9.64837 6.75391 9.48269V9.03522Z"
          strokeWidth="1.5"
        />
      </svg>
    ),

    briefcase_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1506_1167)">
          <path
            d="M0.914673 6.5L8.02075 9.80839C8.2723 9.9162 8.55704 9.9162 8.80859 9.80839L15.9147 6.5M7.16858 9.75457V9.95404C7.16858 10.1197 7.30289 10.254 7.46858 10.254H9.36468C9.53037 10.254 9.66468 10.1197 9.66468 9.95404V9.75457H8.41663H7.16858Z"
            stroke="#254E5F"
            strokeWidth="1.5"
          />
          <path
            d="M4.16921 3.81906V1.49702C4.16921 1.33134 4.30352 1.19702 4.46921 1.19702H12.3759C12.5415 1.19702 12.6759 1.33134 12.6759 1.49702V3.63914M1.16443 4.45008L1.16443 13.5501C1.16443 13.9367 1.47783 14.2501 1.86443 14.2501L14.9647 14.2501C15.3513 14.2501 15.6647 13.9367 15.6647 13.5501L15.6644 4.45006C15.6644 4.06347 15.351 3.75008 14.9644 3.75008L1.86443 3.75008C1.47783 3.75008 1.16443 4.06348 1.16443 4.45008Z"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_1506_1167">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0.414673)"
            />
          </clipPath>
        </defs>
      </svg>
    ),

    body_check: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.03333 5.33333C5.19902 5.33333 5.33333 5.19902 5.33333 5.03333V0.300001C5.33333 0.134315 5.46765 0 5.63333 0H10.3667C10.5324 0 10.6667 0.134315 10.6667 0.3V5.03333C10.6667 5.19902 10.801 5.33333 10.9667 5.33333H15.7C15.8657 5.33333 16 5.46765 16 5.63333V10.3667C16 10.5324 15.8657 10.6667 15.7 10.6667H10.9667C10.801 10.6667 10.6667 10.801 10.6667 10.9667V15.7C10.6667 15.8657 10.5324 16 10.3667 16H5.63333C5.46765 16 5.33333 15.8657 5.33333 15.7V10.9667C5.33333 10.801 5.19902 10.6667 5.03333 10.6667H0.300001C0.134315 10.6667 0 10.5324 0 10.3667V5.63333C0 5.46765 0.134315 5.33333 0.3 5.33333H5.03333Z" />
      </svg>
    ),
    triangle_alert: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 5.75385V9.25244M8.00061 11.8671V11.8771M1.76231 14.256H14.2488C15.0136 14.256 15.4954 13.4323 15.1204 12.7657L8.87714 1.6666C8.49483 0.986947 7.51629 0.986947 7.13399 1.6666L0.890733 12.7657C0.515768 13.4323 0.997483 14.256 1.76231 14.256Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    refresh: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clipPath="url(#clip0_1446_695)">
          <path
            d="M14.6015 8C14.6015 11.6739 11.6094 14.6521 7.91844 14.6521C5.70614 14.6521 3.7449 13.5822 2.52856 11.9337"
            stroke={strokeSecond}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M1.34497 8.00006C1.34497 4.32618 4.33707 1.34791 8.02801 1.34791C10.2403 1.34791 12.2016 2.4179 13.4179 4.06634M2.52866 11.9339C3.745 13.5824 5.70623 14.6524 7.91854 14.6524C9.1711 14.6524 10.3432 14.3094 11.3452 13.7126M2.82862 15.2556L2.24762 11.8014L5.63821 11.4866M13.1179 0.744656L13.6989 4.19886L10.3083 4.51361"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1446_695">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    paint: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.5 9L7 14.5L2 9L12.5 9Z" />
        <path d="M14.2517 8.00328L14.782 7.47295L14.7819 7.47281L14.2517 8.00328ZM7.52719 0.221226C7.23429 -0.0716676 6.75942 -0.0716676 6.46653 0.221226C6.17363 0.514119 6.17363 0.988993 6.46653 1.28189L7.52719 0.221226ZM13.9696 8.78189L14.5 9.31222L15.5606 8.25156L15.0303 7.72123L13.9696 8.78189ZM8.10005 14.1549L7.56972 13.6246L8.10005 14.1549ZM7.71822 2.53358L13.7215 8.53375L14.7819 7.47281L8.77861 1.47264L7.71822 2.53358ZM13.7214 7.47295L7.56972 13.6246L8.63038 14.6853L14.782 8.53361L13.7214 7.47295ZM6.93332 13.6246L2.63001 9.3213L1.56935 10.382L5.87266 14.6853L6.93332 13.6246ZM2.62994 8.68497L8.77886 2.53332L7.71797 1.4729L1.56905 7.62455L2.62994 8.68497ZM8.77874 1.47278L7.52719 0.221226L6.46653 1.28189L7.71808 2.53344L8.77874 1.47278ZM14.2517 8.00328C13.7214 8.53361 13.7214 8.53361 13.7214 8.53361C13.7214 8.53361 13.7214 8.53362 13.7214 8.53362C13.7214 8.53362 13.7214 8.53362 13.7214 8.53363C13.7214 8.53363 13.7214 8.53363 13.7214 8.53364C13.7214 8.53364 13.7214 8.53365 13.7214 8.53365C13.7214 8.53366 13.7214 8.53367 13.7214 8.53367C13.7214 8.53368 13.7214 8.53369 13.7214 8.53369C13.7215 8.5337 13.7215 8.53371 13.7215 8.53372C13.7215 8.53373 13.7215 8.53374 13.7215 8.53375C13.7215 8.53376 13.7215 8.53377 13.7215 8.53378C13.7215 8.53379 13.7216 8.53381 13.7216 8.53382C13.7216 8.53383 13.7216 8.53384 13.7216 8.53386C13.7216 8.53387 13.7216 8.53388 13.7217 8.5339C13.7217 8.53391 13.7217 8.53393 13.7217 8.53395C13.7217 8.53396 13.7217 8.53398 13.7217 8.53399C13.7218 8.53401 13.7218 8.53403 13.7218 8.53405C13.7218 8.53407 13.7218 8.53408 13.7219 8.5341C13.7219 8.53412 13.7219 8.53414 13.7219 8.53416C13.7219 8.53418 13.722 8.5342 13.722 8.53422C13.722 8.53425 13.722 8.53427 13.722 8.53429C13.7221 8.53431 13.7221 8.53434 13.7221 8.53436C13.7221 8.53438 13.7222 8.53441 13.7222 8.53443C13.7222 8.53446 13.7222 8.53448 13.7223 8.53451C13.7223 8.53453 13.7223 8.53456 13.7223 8.53459C13.7224 8.53461 13.7224 8.53464 13.7224 8.53467C13.7224 8.5347 13.7225 8.53473 13.7225 8.53475C13.7225 8.53478 13.7226 8.53481 13.7226 8.53484C13.7226 8.53487 13.7227 8.5349 13.7227 8.53493C13.7227 8.53497 13.7227 8.535 13.7228 8.53503C13.7228 8.53506 13.7228 8.53509 13.7229 8.53513C13.7229 8.53516 13.7229 8.53519 13.723 8.53523C13.723 8.53526 13.7231 8.5353 13.7231 8.53533C13.7231 8.53537 13.7232 8.5354 13.7232 8.53544C13.7232 8.53548 13.7233 8.53551 13.7233 8.53555C13.7233 8.53559 13.7234 8.53563 13.7234 8.53567C13.7235 8.5357 13.7235 8.53574 13.7235 8.53578C13.7236 8.53582 13.7236 8.53586 13.7237 8.5359C13.7237 8.53594 13.7237 8.53599 13.7238 8.53603C13.7238 8.53607 13.7239 8.53611 13.7239 8.53615C13.7239 8.5362 13.724 8.53624 13.724 8.53628C13.7241 8.53633 13.7241 8.53637 13.7242 8.53642C13.7242 8.53646 13.7243 8.53651 13.7243 8.53655C13.7244 8.5366 13.7244 8.53664 13.7244 8.53669C13.7245 8.53674 13.7245 8.53678 13.7246 8.53683C13.7246 8.53688 13.7247 8.53693 13.7247 8.53698C13.7248 8.53703 13.7248 8.53708 13.7249 8.53713C13.7249 8.53718 13.725 8.53723 13.725 8.53728C13.7251 8.53733 13.7251 8.53738 13.7252 8.53743C13.7252 8.53748 13.7253 8.53754 13.7253 8.53759C13.7254 8.53764 13.7254 8.53769 13.7255 8.53775C13.7256 8.5378 13.7256 8.53786 13.7257 8.53791C13.7257 8.53797 13.7258 8.53802 13.7258 8.53808C13.7259 8.53813 13.7259 8.53819 13.726 8.53825C13.7261 8.5383 13.7261 8.53836 13.7262 8.53842C13.7262 8.53848 13.7263 8.53854 13.7263 8.53859C13.7264 8.53865 13.7265 8.53871 13.7265 8.53877C13.7266 8.53883 13.7266 8.53889 13.7267 8.53895C13.7268 8.53901 13.7268 8.53908 13.7269 8.53914C13.727 8.5392 13.727 8.53926 13.7271 8.53932C13.7271 8.53939 13.7272 8.53945 13.7273 8.53951C13.7273 8.53958 13.7274 8.53964 13.7275 8.53971C13.7275 8.53977 13.7276 8.53984 13.7277 8.5399C13.7277 8.53997 13.7278 8.54003 13.7279 8.5401C13.7279 8.54017 13.728 8.54023 13.7281 8.5403C13.7281 8.54037 13.7282 8.54044 13.7283 8.54051C13.7283 8.54057 13.7284 8.54064 13.7285 8.54071C13.7285 8.54078 13.7286 8.54085 13.7287 8.54092C13.7287 8.54099 13.7288 8.54106 13.7289 8.54114C13.729 8.54121 13.729 8.54128 13.7291 8.54135C13.7292 8.54142 13.7292 8.5415 13.7293 8.54157C13.7294 8.54164 13.7295 8.54172 13.7295 8.54179C13.7296 8.54187 13.7297 8.54194 13.7298 8.54202C13.7298 8.54209 13.7299 8.54217 13.73 8.54224C13.7301 8.54232 13.7301 8.5424 13.7302 8.54247C13.7303 8.54255 13.7304 8.54263 13.7305 8.5427C13.7305 8.54278 13.7306 8.54286 13.7307 8.54294C13.7308 8.54302 13.7309 8.5431 13.7309 8.54318C13.731 8.54326 13.7311 8.54334 13.7312 8.54342C13.7313 8.5435 13.7313 8.54358 13.7314 8.54366C13.7315 8.54374 13.7316 8.54383 13.7317 8.54391C13.7317 8.54399 13.7318 8.54407 13.7319 8.54416C13.732 8.54424 13.7321 8.54433 13.7322 8.54441C13.7322 8.54449 13.7323 8.54458 13.7324 8.54466C13.7325 8.54475 13.7326 8.54483 13.7327 8.54492C13.7328 8.54501 13.7328 8.54509 13.7329 8.54518C13.733 8.54527 13.7331 8.54536 13.7332 8.54544C13.7333 8.54553 13.7334 8.54562 13.7335 8.54571C13.7336 8.5458 13.7336 8.54589 13.7337 8.54598C13.7338 8.54607 13.7339 8.54616 13.734 8.54625C13.7341 8.54634 13.7342 8.54643 13.7343 8.54652C13.7344 8.54661 13.7345 8.5467 13.7345 8.5468C13.7346 8.54689 13.7347 8.54698 13.7348 8.54707C13.7349 8.54717 13.735 8.54726 13.7351 8.54735C13.7352 8.54745 13.7353 8.54754 13.7354 8.54764C13.7355 8.54773 13.7356 8.54783 13.7357 8.54792C13.7358 8.54802 13.7359 8.54812 13.736 8.54821C13.7361 8.54831 13.7362 8.54841 13.7363 8.54851C13.7364 8.5486 13.7365 8.5487 13.7366 8.5488C13.7367 8.5489 13.7367 8.549 13.7368 8.5491C13.7369 8.5492 13.737 8.5493 13.7371 8.54939C13.7372 8.5495 13.7373 8.5496 13.7374 8.5497C13.7376 8.5498 13.7377 8.5499 13.7378 8.55C13.7379 8.5501 13.738 8.5502 13.7381 8.55031C13.7382 8.55041 13.7383 8.55051 13.7384 8.55062C13.7385 8.55072 13.7386 8.55082 13.7387 8.55093C13.7388 8.55103 13.7389 8.55114 13.739 8.55124C13.7391 8.55135 13.7392 8.55145 13.7393 8.55156C13.7394 8.55167 13.7395 8.55177 13.7396 8.55188C13.7397 8.55199 13.7398 8.55209 13.74 8.5522C13.7401 8.55231 13.7402 8.55242 13.7403 8.55252C13.7404 8.55263 13.7405 8.55274 13.7406 8.55285C13.7407 8.55296 13.7408 8.55307 13.7409 8.55318C13.741 8.55329 13.7412 8.5534 13.7413 8.55351C13.7414 8.55362 13.7415 8.55373 13.7416 8.55384C13.7417 8.55396 13.7418 8.55407 13.7419 8.55418C13.742 8.55429 13.7422 8.55441 13.7423 8.55452C13.7424 8.55463 13.7425 8.55475 13.7426 8.55486C13.7427 8.55498 13.7428 8.55509 13.743 8.5552C13.7431 8.55532 13.7432 8.55544 13.7433 8.55555C13.7434 8.55567 13.7435 8.55578 13.7437 8.5559C13.7438 8.55601 13.7439 8.55613 13.744 8.55625C13.7441 8.55637 13.7442 8.55648 13.7444 8.5566C13.7445 8.55672 13.7446 8.55684 13.7447 8.55696C13.7448 8.55708 13.7449 8.5572 13.7451 8.55732C13.7452 8.55744 13.7453 8.55755 13.7454 8.55768C13.7455 8.5578 13.7457 8.55792 13.7458 8.55804C13.7459 8.55816 13.746 8.55828 13.7462 8.5584C13.7463 8.55852 13.7464 8.55865 13.7465 8.55877C13.7466 8.55889 13.7468 8.55901 13.7469 8.55914C13.747 8.55926 13.7471 8.55939 13.7473 8.55951C13.7474 8.55963 13.7475 8.55976 13.7476 8.55988C13.7478 8.56001 13.7479 8.56013 13.748 8.56026C13.7481 8.56038 13.7483 8.56051 13.7484 8.56064C13.7485 8.56076 13.7486 8.56089 13.7488 8.56102C13.7489 8.56114 13.749 8.56127 13.7492 8.5614C13.7493 8.56153 13.7494 8.56166 13.7495 8.56179C13.7497 8.56191 13.7498 8.56204 13.7499 8.56217C13.7501 8.5623 13.7502 8.56243 13.7503 8.56256C13.7504 8.56269 13.7506 8.56282 13.7507 8.56295C13.7508 8.56308 13.751 8.56322 13.7511 8.56335C13.7512 8.56348 13.7514 8.56361 13.7515 8.56374C13.7516 8.56388 13.7518 8.56401 13.7519 8.56414C13.752 8.56427 13.7522 8.56441 13.7523 8.56454C13.7524 8.56467 13.7526 8.56481 13.7527 8.56494C13.7528 8.56508 13.753 8.56521 13.7531 8.56535C13.7532 8.56548 13.7534 8.56562 13.7535 8.56575C13.7536 8.56589 13.7538 8.56603 13.7539 8.56616C13.7541 8.5663 13.7542 8.56644 13.7543 8.56657C13.7545 8.56671 13.7546 8.56685 13.7547 8.56699C13.7549 8.56712 13.755 8.56726 13.7552 8.5674C13.7553 8.56754 13.7554 8.56768 13.7556 8.56782C13.7557 8.56796 13.7559 8.5681 13.756 8.56824C13.7561 8.56838 13.7563 8.56852 13.7564 8.56866C13.7566 8.5688 13.7567 8.56894 13.7568 8.56908C13.757 8.56922 13.7571 8.56937 13.7573 8.56951C13.7574 8.56965 13.7575 8.56979 13.7577 8.56994C13.7578 8.57008 13.758 8.57022 13.7581 8.57036C13.7583 8.57051 13.7584 8.57065 13.7585 8.5708C13.7587 8.57094 13.7588 8.57108 13.759 8.57123C13.7591 8.57137 13.7593 8.57152 13.7594 8.57167C13.7596 8.57181 13.7597 8.57196 13.7599 8.5721C13.76 8.57225 13.7601 8.57239 13.7603 8.57254C13.7604 8.57269 13.7606 8.57284 13.7607 8.57298C13.7609 8.57313 13.761 8.57328 13.7612 8.57343C13.7613 8.57358 13.7615 8.57372 13.7616 8.57387C13.7618 8.57402 13.7619 8.57417 13.7621 8.57432C13.7622 8.57447 13.7624 8.57462 13.7625 8.57477C13.7627 8.57492 13.7628 8.57507 13.763 8.57522C13.7631 8.57537 13.7633 8.57552 13.7634 8.57567C13.7636 8.57582 13.7637 8.57598 13.7639 8.57613C13.764 8.57628 13.7642 8.57643 13.7643 8.57658C13.7645 8.57674 13.7646 8.57689 13.7648 8.57704C13.7649 8.5772 13.7651 8.57735 13.7653 8.5775C13.7654 8.57766 13.7656 8.57781 13.7657 8.57797C13.7659 8.57812 13.766 8.57828 13.7662 8.57843C13.7663 8.57859 13.7665 8.57874 13.7666 8.5789C13.7668 8.57905 13.767 8.57921 13.7671 8.57937C13.7673 8.57952 13.7674 8.57968 13.7676 8.57984C13.7677 8.57999 13.7679 8.58015 13.7681 8.58031C13.7682 8.58046 13.7684 8.58062 13.7685 8.58078C13.7687 8.58094 13.7688 8.5811 13.769 8.58126C13.7692 8.58141 13.7693 8.58157 13.7695 8.58173C13.7696 8.58189 13.7698 8.58205 13.77 8.58221C13.7701 8.58237 13.7703 8.58253 13.7704 8.58269C13.7706 8.58285 13.7708 8.58301 13.7709 8.58318C13.7711 8.58334 13.7713 8.5835 13.7714 8.58366C13.7716 8.58382 13.7717 8.58398 13.7719 8.58415C13.7721 8.58431 13.7722 8.58447 13.7724 8.58463C13.7725 8.5848 13.7727 8.58496 13.7729 8.58512C13.773 8.58529 13.7732 8.58545 13.7734 8.58561C13.7735 8.58578 13.7737 8.58594 13.7739 8.58611C13.774 8.58627 13.7742 8.58644 13.7744 8.5866C13.7745 8.58677 13.7747 8.58693 13.7749 8.5871C13.775 8.58726 13.7752 8.58743 13.7753 8.5876C13.7755 8.58776 13.7757 8.58793 13.7758 8.5881C13.776 8.58826 13.7762 8.58843 13.7763 8.5886C13.7765 8.58876 13.7767 8.58893 13.7769 8.5891C13.777 8.58927 13.7772 8.58944 13.7774 8.5896C13.7775 8.58977 13.7777 8.58994 13.7779 8.59011C13.778 8.59028 13.7782 8.59045 13.7784 8.59062C13.7785 8.59079 13.7787 8.59096 13.7789 8.59113C13.7791 8.5913 13.7792 8.59147 13.7794 8.59164C13.7796 8.59181 13.7797 8.59198 13.7799 8.59215C13.7801 8.59232 13.7802 8.5925 13.7804 8.59267C13.7806 8.59284 13.7808 8.59301 13.7809 8.59318C13.7811 8.59336 13.7813 8.59353 13.7815 8.5937C13.7816 8.59387 13.7818 8.59405 13.782 8.59422C13.7821 8.59439 13.7823 8.59457 13.7825 8.59474C13.7827 8.59491 13.7828 8.59509 13.783 8.59526C13.7832 8.59544 13.7834 8.59561 13.7835 8.59579C13.7837 8.59596 13.7839 8.59614 13.7841 8.59631C13.7842 8.59649 13.7844 8.59666 13.7846 8.59684C13.7848 8.59701 13.7849 8.59719 13.7851 8.59737C13.7853 8.59754 13.7855 8.59772 13.7856 8.5979C13.7858 8.59807 13.786 8.59825 13.7862 8.59843C13.7864 8.59861 13.7865 8.59878 13.7867 8.59896C13.7869 8.59914 13.7871 8.59932 13.7872 8.5995C13.7874 8.59967 13.7876 8.59985 13.7878 8.60003C13.788 8.60021 13.7881 8.60039 13.7883 8.60057C13.7885 8.60075 13.7887 8.60093 13.7889 8.60111C13.789 8.60129 13.7892 8.60147 13.7894 8.60165C13.7896 8.60183 13.7898 8.60201 13.7899 8.60219C13.7901 8.60237 13.7903 8.60255 13.7905 8.60273C13.7907 8.60291 13.7908 8.60309 13.791 8.60328C13.7912 8.60346 13.7914 8.60364 13.7916 8.60382C13.7918 8.604 13.7919 8.60419 13.7921 8.60437C13.7923 8.60455 13.7925 8.60474 13.7927 8.60492C13.7929 8.6051 13.793 8.60528 13.7932 8.60547C13.7934 8.60565 13.7936 8.60584 13.7938 8.60602C13.794 8.6062 13.7941 8.60639 13.7943 8.60657C13.7945 8.60676 13.7947 8.60694 13.7949 8.60713C13.7951 8.60731 13.7952 8.6075 13.7954 8.60768C13.7956 8.60787 13.7958 8.60805 13.796 8.60824C13.7962 8.60842 13.7964 8.60861 13.7965 8.6088C13.7967 8.60898 13.7969 8.60917 13.7971 8.60936C13.7973 8.60954 13.7975 8.60973 13.7977 8.60992C13.7979 8.6101 13.798 8.61029 13.7982 8.61048C13.7984 8.61067 13.7986 8.61085 13.7988 8.61104C13.799 8.61123 13.7992 8.61142 13.7994 8.61161C13.7995 8.61179 13.7997 8.61198 13.7999 8.61217C13.8001 8.61236 13.8003 8.61255 13.8005 8.61274C13.8007 8.61293 13.8009 8.61312 13.8011 8.61331C13.8013 8.6135 13.8014 8.61369 13.8016 8.61388C13.8018 8.61407 13.802 8.61426 13.8022 8.61445C13.8024 8.61464 13.8026 8.61483 13.8028 8.61502C13.803 8.61521 13.8032 8.6154 13.8033 8.61559C13.8035 8.61578 13.8037 8.61598 13.8039 8.61617C13.8041 8.61636 13.8043 8.61655 13.8045 8.61674C13.8047 8.61694 13.8049 8.61713 13.8051 8.61732C13.8053 8.61751 13.8055 8.6177 13.8057 8.6179C13.8058 8.61809 13.806 8.61828 13.8062 8.61848C13.8064 8.61867 13.8066 8.61886 13.8068 8.61906C13.807 8.61925 13.8072 8.61944 13.8074 8.61964C13.8076 8.61983 13.8078 8.62003 13.808 8.62022C13.8082 8.62042 13.8084 8.62061 13.8086 8.6208C13.8088 8.621 13.8089 8.62119 13.8091 8.62139C13.8093 8.62158 13.8095 8.62178 13.8097 8.62198C13.8099 8.62217 13.8101 8.62237 13.8103 8.62256C13.8105 8.62276 13.8107 8.62295 13.8109 8.62315C13.8111 8.62335 13.8113 8.62354 13.8115 8.62374C13.8117 8.62394 13.8119 8.62413 13.8121 8.62433C13.8123 8.62453 13.8125 8.62472 13.8127 8.62492C13.8129 8.62512 13.8131 8.62532 13.8133 8.62551C13.8135 8.62571 13.8137 8.62591 13.8139 8.62611C13.8141 8.6263 13.8143 8.6265 13.8145 8.6267C13.8147 8.6269 13.8149 8.6271 13.815 8.6273C13.8152 8.6275 13.8154 8.62769 13.8156 8.62789C13.8158 8.62809 13.816 8.62829 13.8162 8.62849C13.8164 8.62869 13.8166 8.62889 13.8168 8.62909C13.817 8.62929 13.8172 8.62949 13.8174 8.62969C13.8176 8.62989 13.8178 8.63009 13.818 8.63029C13.8182 8.63049 13.8184 8.63069 13.8186 8.63089C13.8188 8.63109 13.819 8.63129 13.8192 8.63149C13.8194 8.63169 13.8196 8.63189 13.8198 8.6321C13.8201 8.6323 13.8203 8.6325 13.8205 8.6327C13.8207 8.6329 13.8209 8.6331 13.8211 8.63331C13.8213 8.63351 13.8215 8.63371 13.8217 8.63391C13.8219 8.63411 13.8221 8.63432 13.8223 8.63452C13.8225 8.63472 13.8227 8.63492 13.8229 8.63513C13.8231 8.63533 13.8233 8.63553 13.8235 8.63574C13.8237 8.63594 13.8239 8.63614 13.8241 8.63635C13.8243 8.63655 13.8245 8.63675 13.8247 8.63696C13.8249 8.63716 13.8251 8.63736 13.8253 8.63757C13.8255 8.63777 13.8257 8.63798 13.8259 8.63818C13.8261 8.63838 13.8263 8.63859 13.8265 8.63879C13.8268 8.639 13.827 8.6392 13.8272 8.63941C13.8274 8.63961 13.8276 8.63982 13.8278 8.64002C13.828 8.64023 13.8282 8.64043 13.8284 8.64064C13.8286 8.64084 13.8288 8.64105 13.829 8.64125C13.8292 8.64146 13.8294 8.64167 13.8296 8.64187C13.8298 8.64208 13.83 8.64228 13.8302 8.64249C13.8304 8.6427 13.8307 8.6429 13.8309 8.64311C13.8311 8.64332 13.8313 8.64352 13.8315 8.64373C13.8317 8.64394 13.8319 8.64414 13.8321 8.64435C13.8323 8.64456 13.8325 8.64476 13.8327 8.64497C13.8329 8.64518 13.8331 8.64539 13.8333 8.64559C13.8336 8.6458 13.8338 8.64601 13.834 8.64622C13.8342 8.64642 13.8344 8.64663 13.8346 8.64684C13.8348 8.64705 13.835 8.64725 13.8352 8.64746C13.8354 8.64767 13.8356 8.64788 13.8358 8.64809C13.836 8.6483 13.8363 8.6485 13.8365 8.64871C13.8367 8.64892 13.8369 8.64913 13.8371 8.64934C13.8373 8.64955 13.8375 8.64976 13.8377 8.64997C13.8379 8.65018 13.8381 8.65038 13.8383 8.65059C13.8386 8.6508 13.8388 8.65101 13.839 8.65122C13.8392 8.65143 13.8394 8.65164 13.8396 8.65185C13.8398 8.65206 13.84 8.65227 13.8402 8.65248C13.8404 8.65269 13.8407 8.6529 13.8409 8.65311C13.8411 8.65332 13.8413 8.65353 13.8415 8.65374C13.8417 8.65395 13.8419 8.65416 13.8421 8.65437C13.8423 8.65458 13.8425 8.6548 13.8428 8.65501C13.843 8.65522 13.8432 8.65543 13.8434 8.65564C13.8436 8.65585 13.8438 8.65606 13.844 8.65627C13.8442 8.65648 13.8444 8.65669 13.8447 8.65691C13.8449 8.65712 13.8451 8.65733 13.8453 8.65754C13.8455 8.65775 13.8457 8.65796 13.8459 8.65818C13.8461 8.65839 13.8464 8.6586 13.8466 8.65881C13.8468 8.65902 13.847 8.65924 13.8472 8.65945C13.8474 8.65966 13.8476 8.65987 13.8478 8.66008C13.8481 8.6603 13.8483 8.66051 13.8485 8.66072C13.8487 8.66093 13.8489 8.66115 13.8491 8.66136C13.8493 8.66157 13.8495 8.66179 13.8498 8.662C13.85 8.66221 13.8502 8.66242 13.8504 8.66264C13.8506 8.66285 13.8508 8.66306 13.851 8.66328C13.8512 8.66349 13.8515 8.6637 13.8517 8.66392C13.8519 8.66413 13.8521 8.66434 13.8523 8.66456C13.8525 8.66477 13.8527 8.66498 13.8529 8.6652C13.8532 8.66541 13.8534 8.66562 13.8536 8.66584C13.8538 8.66605 13.854 8.66627 13.8542 8.66648C13.8544 8.66669 13.8547 8.66691 13.8549 8.66712C13.8551 8.66734 13.8553 8.66755 13.8555 8.66776C13.8557 8.66798 13.8559 8.66819 13.8562 8.66841C13.8564 8.66862 13.8566 8.66884 13.8568 8.66905C13.857 8.66926 13.8572 8.66948 13.8574 8.66969C13.8577 8.66991 13.8579 8.67012 13.8581 8.67034C13.8583 8.67055 13.8585 8.67077 13.8587 8.67098C13.859 8.6712 13.8592 8.67141 13.8594 8.67163C13.8596 8.67184 13.8598 8.67206 13.86 8.67227C13.8602 8.67249 13.8605 8.6727 13.8607 8.67292C13.8609 8.67313 13.8611 8.67335 13.8613 8.67356C13.8615 8.67378 13.8617 8.674 13.862 8.67421C13.8622 8.67443 13.8624 8.67464 13.8626 8.67486C13.8628 8.67507 13.863 8.67529 13.8633 8.6755C13.8635 8.67572 13.8637 8.67594 13.8639 8.67615C13.8641 8.67637 13.8643 8.67658 13.8646 8.6768C13.8648 8.67701 13.865 8.67723 13.8652 8.67745C13.8654 8.67766 13.8656 8.67788 13.8658 8.6781C13.8661 8.67831 13.8663 8.67853 13.8665 8.67874C13.8667 8.67896 13.8669 8.67918 13.8671 8.67939C13.8674 8.67961 13.8676 8.67982 13.8678 8.68004C13.868 8.68026 13.8682 8.68047 13.8684 8.68069C13.8687 8.68091 13.8689 8.68112 13.8691 8.68134C13.8693 8.68156 13.8695 8.68177 13.8697 8.68199C13.87 8.68221 13.8702 8.68242 13.8704 8.68264C13.8706 8.68286 13.8708 8.68307 13.871 8.68329C13.8713 8.68351 13.8715 8.68372 13.8717 8.68394C13.8719 8.68416 13.8721 8.68437 13.8723 8.68459C13.8726 8.68481 13.8728 8.68502 13.873 8.68524C13.8732 8.68546 13.8734 8.68567 13.8736 8.68589C13.8739 8.68611 13.8741 8.68632 13.8743 8.68654C13.8745 8.68676 13.8747 8.68698 13.8749 8.68719C13.8752 8.68741 13.8754 8.68763 13.8756 8.68784C13.8758 8.68806 13.876 8.68828 13.8762 8.6885C13.8765 8.68871 13.8767 8.68893 13.8769 8.68915C13.8771 8.68936 13.8773 8.68958 13.8776 8.6898C13.8778 8.69002 13.878 8.69023 13.8782 8.69045C13.8784 8.69067 13.8786 8.69088 13.8789 8.6911C13.8791 8.69132 13.8793 8.69154 13.8795 8.69175C13.8797 8.69197 13.8799 8.69219 13.8802 8.69241C13.8804 8.69262 13.8806 8.69284 13.8808 8.69306C13.881 8.69328 13.8812 8.69349 13.8815 8.69371C13.8817 8.69393 13.8819 8.69414 13.8821 8.69436C13.8823 8.69458 13.8826 8.6948 13.8828 8.69501C13.883 8.69523 13.8832 8.69545 13.8834 8.69567C13.8836 8.69588 13.8839 8.6961 13.8841 8.69632C13.8843 8.69654 13.8845 8.69675 13.8847 8.69697C13.8849 8.69719 13.8852 8.69741 13.8854 8.69762C13.8856 8.69784 13.8858 8.69806 13.886 8.69828C13.8862 8.69849 13.8865 8.69871 13.8867 8.69893C13.8869 8.69915 13.8871 8.69936 13.8873 8.69958C13.8876 8.6998 13.8878 8.70002 13.888 8.70023C13.8882 8.70045 13.8884 8.70067 13.8886 8.70088C13.8889 8.7011 13.8891 8.70132 13.8893 8.70154C13.8895 8.70175 13.8897 8.70197 13.8899 8.70219C13.8902 8.70241 13.8904 8.70262 13.8906 8.70284C13.8908 8.70306 13.891 8.70328 13.8912 8.70349C13.8915 8.70371 13.8917 8.70393 13.8919 8.70414C13.8921 8.70436 13.8923 8.70458 13.8925 8.7048C13.8928 8.70501 13.893 8.70523 13.8932 8.70545C13.8934 8.70567 13.8936 8.70588 13.8939 8.7061C13.8941 8.70632 13.8943 8.70653 13.8945 8.70675C13.8947 8.70697 13.8949 8.70719 13.8952 8.7074C13.8954 8.70762 13.8956 8.70784 13.8958 8.70805C13.896 8.70827 13.8962 8.70849 13.8965 8.7087C13.8967 8.70892 13.8969 8.70914 13.8971 8.70936C13.8973 8.70957 13.8975 8.70979 13.8978 8.71001C13.898 8.71022 13.8982 8.71044 13.8984 8.71066C13.8986 8.71087 13.8988 8.71109 13.8991 8.71131C13.8993 8.71152 13.8995 8.71174 13.8997 8.71196C13.8999 8.71217 13.9001 8.71239 13.9004 8.71261C13.9006 8.71282 13.9008 8.71304 13.901 8.71326C13.9012 8.71347 13.9014 8.71369 13.9017 8.71391C13.9019 8.71412 13.9021 8.71434 13.9023 8.71456C13.9025 8.71477 13.9027 8.71499 13.903 8.7152C13.9032 8.71542 13.9034 8.71564 13.9036 8.71585C13.9038 8.71607 13.904 8.71629 13.9043 8.7165C13.9045 8.71672 13.9047 8.71693 13.9049 8.71715C13.9051 8.71737 13.9053 8.71758 13.9056 8.7178C13.9058 8.71801 13.906 8.71823 13.9062 8.71845C13.9064 8.71866 13.9066 8.71888 13.9068 8.71909C13.9071 8.71931 13.9073 8.71952 13.9075 8.71974C13.9077 8.71996 13.9079 8.72017 13.9081 8.72039C13.9084 8.7206 13.9086 8.72082 13.9088 8.72103C13.909 8.72125 13.9092 8.72146 13.9094 8.72168C13.9096 8.72189 13.9099 8.72211 13.9101 8.72232C13.9103 8.72254 13.9105 8.72276 13.9107 8.72297C13.9109 8.72318 13.9112 8.7234 13.9114 8.72362C13.9116 8.72383 13.9118 8.72404 13.912 8.72426C13.9122 8.72447 13.9124 8.72469 13.9127 8.7249C13.9129 8.72512 13.9131 8.72533 13.9133 8.72555C13.9135 8.72576 13.9137 8.72598 13.9139 8.72619C13.9142 8.72641 13.9144 8.72662 13.9146 8.72683C13.9148 8.72705 13.915 8.72726 13.9152 8.72748C13.9154 8.72769 13.9157 8.72791 13.9159 8.72812C13.9161 8.72833 13.9163 8.72855 13.9165 8.72876C13.9167 8.72897 13.9169 8.72919 13.9172 8.7294C13.9174 8.72962 13.9176 8.72983 13.9178 8.73004C13.918 8.73026 13.9182 8.73047 13.9184 8.73068C13.9186 8.7309 13.9189 8.73111 13.9191 8.73132C13.9193 8.73154 13.9195 8.73175 13.9197 8.73196C13.9199 8.73218 13.9201 8.73239 13.9204 8.7326C13.9206 8.73282 13.9208 8.73303 13.921 8.73324C13.9212 8.73345 13.9214 8.73367 13.9216 8.73388C13.9218 8.73409 13.9221 8.7343 13.9223 8.73452C13.9225 8.73473 13.9227 8.73494 13.9229 8.73515C13.9231 8.73536 13.9233 8.73558 13.9235 8.73579C13.9238 8.736 13.924 8.73621 13.9242 8.73643C13.9244 8.73664 13.9246 8.73685 13.9248 8.73706C13.925 8.73727 13.9252 8.73748 13.9254 8.73769C13.9257 8.73791 13.9259 8.73812 13.9261 8.73833C13.9263 8.73854 13.9265 8.73875 13.9267 8.73896C13.9269 8.73917 13.9271 8.73938 13.9273 8.7396C13.9276 8.73981 13.9278 8.74002 13.928 8.74023C13.9282 8.74044 13.9284 8.74065 13.9286 8.74086C13.9288 8.74107 13.929 8.74128 13.9292 8.74149C13.9295 8.7417 13.9297 8.74191 13.9299 8.74212C13.9301 8.74233 13.9303 8.74254 13.9305 8.74275C13.9307 8.74296 13.9309 8.74317 13.9311 8.74338C13.9313 8.74359 13.9316 8.7438 13.9318 8.74401C13.932 8.74422 13.9322 8.74443 13.9324 8.74464C13.9326 8.74485 13.9328 8.74506 13.933 8.74526C13.9332 8.74547 13.9334 8.74568 13.9336 8.74589C13.9339 8.7461 13.9341 8.74631 13.9343 8.74652C13.9345 8.74673 13.9347 8.74693 13.9349 8.74714C13.9351 8.74735 13.9353 8.74756 13.9355 8.74777C13.9357 8.74797 13.9359 8.74818 13.9361 8.74839C13.9364 8.7486 13.9366 8.74881 13.9368 8.74901C13.937 8.74922 13.9372 8.74943 13.9374 8.74964C13.9376 8.74984 13.9378 8.75005 13.938 8.75026C13.9382 8.75046 13.9384 8.75067 13.9386 8.75088C13.9388 8.75108 13.939 8.75129 13.9393 8.7515C13.9395 8.7517 13.9397 8.75191 13.9399 8.75212C13.9401 8.75232 13.9403 8.75253 13.9405 8.75274C13.9407 8.75294 13.9409 8.75315 13.9411 8.75335C13.9413 8.75356 13.9415 8.75376 13.9417 8.75397C13.9419 8.75418 13.9421 8.75438 13.9423 8.75459C13.9425 8.75479 13.9427 8.755 13.943 8.7552C13.9432 8.75541 13.9434 8.75561 13.9436 8.75582C13.9438 8.75602 13.944 8.75622 13.9442 8.75643C13.9444 8.75663 13.9446 8.75684 13.9448 8.75704C13.945 8.75725 13.9452 8.75745 13.9454 8.75765C13.9456 8.75786 13.9458 8.75806 13.946 8.75826C13.9462 8.75847 13.9464 8.75867 13.9466 8.75887C13.9468 8.75908 13.947 8.75928 13.9472 8.75948C13.9474 8.75969 13.9476 8.75989 13.9478 8.76009C13.948 8.7603 13.9483 8.7605 13.9485 8.7607C13.9487 8.7609 13.9489 8.7611 13.9491 8.76131C13.9493 8.76151 13.9495 8.76171 13.9497 8.76191C13.9499 8.76211 13.9501 8.76231 13.9503 8.76252C13.9505 8.76272 13.9507 8.76292 13.9509 8.76312C13.9511 8.76332 13.9513 8.76352 13.9515 8.76372C13.9517 8.76392 13.9519 8.76412 13.9521 8.76432C13.9523 8.76453 13.9525 8.76473 13.9527 8.76493C13.9529 8.76513 13.9531 8.76533 13.9533 8.76553C13.9535 8.76572 13.9537 8.76592 13.9539 8.76612C13.9541 8.76632 13.9543 8.76652 13.9545 8.76672C13.9547 8.76692 13.9549 8.76712 13.9551 8.76732C13.9553 8.76752 13.9555 8.76772 13.9557 8.76791C13.9559 8.76811 13.9561 8.76831 13.9563 8.76851C13.9565 8.76871 13.9567 8.76891 13.9569 8.7691C13.9571 8.7693 13.9573 8.7695 13.9574 8.7697C13.9576 8.76989 13.9578 8.77009 13.958 8.77029C13.9582 8.77048 13.9584 8.77068 13.9586 8.77088C13.9588 8.77108 13.959 8.77127 13.9592 8.77147C13.9594 8.77166 13.9596 8.77186 13.9598 8.77206C13.96 8.77225 13.9602 8.77245 13.9604 8.77264C13.9606 8.77284 13.9608 8.77303 13.961 8.77323C13.9612 8.77343 13.9614 8.77362 13.9616 8.77382C13.9618 8.77401 13.962 8.7742 13.9622 8.7744C13.9623 8.77459 13.9625 8.77479 13.9627 8.77498C13.9629 8.77518 13.9631 8.77537 13.9633 8.77556C13.9635 8.77576 13.9637 8.77595 13.9639 8.77614C13.9641 8.77634 13.9643 8.77653 13.9645 8.77672C13.9647 8.77692 13.9649 8.77711 13.9651 8.7773C13.9652 8.77749 13.9654 8.77769 13.9656 8.77788C13.9658 8.77807 13.966 8.77826 13.9662 8.77846C13.9664 8.77865 13.9666 8.77884 13.9668 8.77903C13.967 8.77922 13.9672 8.77941 13.9674 8.7796C13.9675 8.7798 13.9677 8.77999 13.9679 8.78018C13.9681 8.78037 13.9683 8.78056 13.9685 8.78075C13.9687 8.78094 13.9689 8.78113 13.9691 8.78132C13.9693 8.78151 13.9694 8.7817 13.9696 8.78189L15.0303 7.72123C15.0301 7.72104 15.0299 7.72085 15.0297 7.72066C15.0295 7.72047 15.0294 7.72028 15.0292 7.72009C15.029 7.7199 15.0288 7.71971 15.0286 7.71952C15.0284 7.71933 15.0282 7.71914 15.028 7.71894C15.0278 7.71875 15.0276 7.71856 15.0274 7.71837C15.0273 7.71818 15.0271 7.71799 15.0269 7.7178C15.0267 7.7176 15.0265 7.71741 15.0263 7.71722C15.0261 7.71703 15.0259 7.71683 15.0257 7.71664C15.0255 7.71645 15.0253 7.71626 15.0251 7.71606C15.0249 7.71587 15.0248 7.71568 15.0246 7.71548C15.0244 7.71529 15.0242 7.7151 15.024 7.7149C15.0238 7.71471 15.0236 7.71452 15.0234 7.71432C15.0232 7.71413 15.023 7.71393 15.0228 7.71374C15.0226 7.71354 15.0224 7.71335 15.0222 7.71315C15.022 7.71296 15.0218 7.71277 15.0216 7.71257C15.0214 7.71237 15.0213 7.71218 15.0211 7.71198C15.0209 7.71179 15.0207 7.71159 15.0205 7.7114C15.0203 7.7112 15.0201 7.711 15.0199 7.71081C15.0197 7.71061 15.0195 7.71042 15.0193 7.71022C15.0191 7.71002 15.0189 7.70982 15.0187 7.70963C15.0185 7.70943 15.0183 7.70923 15.0181 7.70904C15.0179 7.70884 15.0177 7.70864 15.0175 7.70844C15.0173 7.70824 15.0171 7.70805 15.0169 7.70785C15.0167 7.70765 15.0165 7.70745 15.0163 7.70725C15.0161 7.70706 15.0159 7.70686 15.0157 7.70666C15.0155 7.70646 15.0153 7.70626 15.0151 7.70606C15.0149 7.70586 15.0147 7.70566 15.0145 7.70546C15.0143 7.70526 15.0141 7.70506 15.0139 7.70487C15.0137 7.70467 15.0135 7.70447 15.0133 7.70426C15.0131 7.70407 15.0129 7.70387 15.0127 7.70366C15.0125 7.70346 15.0123 7.70326 15.0121 7.70306C15.0119 7.70286 15.0117 7.70266 15.0115 7.70246C15.0113 7.70226 15.0111 7.70206 15.0109 7.70186C15.0107 7.70165 15.0105 7.70145 15.0103 7.70125C15.0101 7.70105 15.0099 7.70085 15.0097 7.70065C15.0095 7.70044 15.0093 7.70024 15.0091 7.70004C15.0089 7.69984 15.0087 7.69963 15.0085 7.69943C15.0083 7.69923 15.0081 7.69903 15.0079 7.69882C15.0077 7.69862 15.0075 7.69842 15.0073 7.69821C15.0071 7.69801 15.0069 7.69781 15.0067 7.6976C15.0065 7.6974 15.0063 7.6972 15.0061 7.69699C15.0059 7.69679 15.0057 7.69659 15.0055 7.69638C15.0053 7.69618 15.005 7.69597 15.0048 7.69577C15.0046 7.69556 15.0044 7.69536 15.0042 7.69516C15.004 7.69495 15.0038 7.69475 15.0036 7.69454C15.0034 7.69434 15.0032 7.69413 15.003 7.69393C15.0028 7.69372 15.0026 7.69352 15.0024 7.69331C15.0022 7.6931 15.002 7.6929 15.0018 7.69269C15.0016 7.69249 15.0014 7.69228 15.0011 7.69208C15.0009 7.69187 15.0007 7.69166 15.0005 7.69146C15.0003 7.69125 15.0001 7.69104 14.9999 7.69084C14.9997 7.69063 14.9995 7.69042 14.9993 7.69022C14.9991 7.69001 14.9989 7.6898 14.9987 7.6896C14.9985 7.68939 14.9983 7.68918 14.998 7.68898C14.9978 7.68877 14.9976 7.68856 14.9974 7.68835C14.9972 7.68815 14.997 7.68794 14.9968 7.68773C14.9966 7.68752 14.9964 7.68731 14.9962 7.68711C14.996 7.6869 14.9958 7.68669 14.9956 7.68648C14.9953 7.68627 14.9951 7.68606 14.9949 7.68586C14.9947 7.68565 14.9945 7.68544 14.9943 7.68523C14.9941 7.68502 14.9939 7.68481 14.9937 7.6846C14.9935 7.6844 14.9933 7.68419 14.9931 7.68398C14.9928 7.68377 14.9926 7.68356 14.9924 7.68335C14.9922 7.68314 14.992 7.68293 14.9918 7.68272C14.9916 7.68251 14.9914 7.6823 14.9912 7.68209C14.991 7.68188 14.9907 7.68167 14.9905 7.68146C14.9903 7.68125 14.9901 7.68104 14.9899 7.68083C14.9897 7.68062 14.9895 7.68041 14.9893 7.6802C14.9891 7.67999 14.9889 7.67978 14.9886 7.67957C14.9884 7.67936 14.9882 7.67915 14.988 7.67894C14.9878 7.67872 14.9876 7.67851 14.9874 7.6783C14.9872 7.67809 14.987 7.67788 14.9867 7.67767C14.9865 7.67746 14.9863 7.67725 14.9861 7.67703C14.9859 7.67682 14.9857 7.67661 14.9855 7.6764C14.9853 7.67619 14.985 7.67598 14.9848 7.67576C14.9846 7.67555 14.9844 7.67534 14.9842 7.67513C14.984 7.67492 14.9838 7.6747 14.9836 7.67449C14.9834 7.67428 14.9831 7.67407 14.9829 7.67386C14.9827 7.67364 14.9825 7.67343 14.9823 7.67322C14.9821 7.67301 14.9819 7.67279 14.9817 7.67258C14.9814 7.67237 14.9812 7.67216 14.981 7.67194C14.9808 7.67173 14.9806 7.67152 14.9804 7.6713C14.9802 7.67109 14.9799 7.67088 14.9797 7.67066C14.9795 7.67045 14.9793 7.67024 14.9791 7.67002C14.9789 7.66981 14.9787 7.6696 14.9785 7.66938C14.9782 7.66917 14.978 7.66896 14.9778 7.66874C14.9776 7.66853 14.9774 7.66831 14.9772 7.6681C14.977 7.66789 14.9767 7.66767 14.9765 7.66746C14.9763 7.66725 14.9761 7.66703 14.9759 7.66682C14.9757 7.6666 14.9755 7.66639 14.9752 7.66617C14.975 7.66596 14.9748 7.66575 14.9746 7.66553C14.9744 7.66532 14.9742 7.6651 14.974 7.66489C14.9737 7.66467 14.9735 7.66446 14.9733 7.66424C14.9731 7.66403 14.9729 7.66381 14.9727 7.6636C14.9725 7.66338 14.9722 7.66317 14.972 7.66295C14.9718 7.66274 14.9716 7.66252 14.9714 7.66231C14.9712 7.6621 14.971 7.66188 14.9707 7.66166C14.9705 7.66145 14.9703 7.66123 14.9701 7.66102C14.9699 7.6608 14.9697 7.66059 14.9694 7.66037C14.9692 7.66016 14.969 7.65994 14.9688 7.65973C14.9686 7.65951 14.9684 7.6593 14.9682 7.65908C14.9679 7.65886 14.9677 7.65865 14.9675 7.65843C14.9673 7.65822 14.9671 7.658 14.9669 7.65779C14.9666 7.65757 14.9664 7.65735 14.9662 7.65714C14.966 7.65692 14.9658 7.65671 14.9656 7.65649C14.9653 7.65627 14.9651 7.65606 14.9649 7.65584C14.9647 7.65563 14.9645 7.65541 14.9643 7.65519C14.964 7.65498 14.9638 7.65476 14.9636 7.65454C14.9634 7.65433 14.9632 7.65411 14.963 7.6539C14.9628 7.65368 14.9625 7.65346 14.9623 7.65325C14.9621 7.65303 14.9619 7.65281 14.9617 7.6526C14.9615 7.65238 14.9612 7.65216 14.961 7.65195C14.9608 7.65173 14.9606 7.65151 14.9604 7.6513C14.9602 7.65108 14.9599 7.65086 14.9597 7.65065C14.9595 7.65043 14.9593 7.65021 14.9591 7.65C14.9589 7.64978 14.9586 7.64956 14.9584 7.64935C14.9582 7.64913 14.958 7.64891 14.9578 7.6487C14.9576 7.64848 14.9573 7.64826 14.9571 7.64804C14.9569 7.64783 14.9567 7.64761 14.9565 7.64739C14.9562 7.64718 14.956 7.64696 14.9558 7.64674C14.9556 7.64653 14.9554 7.64631 14.9552 7.64609C14.9549 7.64587 14.9547 7.64566 14.9545 7.64544C14.9543 7.64522 14.9541 7.64501 14.9539 7.64479C14.9536 7.64457 14.9534 7.64435 14.9532 7.64414C14.953 7.64392 14.9528 7.6437 14.9526 7.64348C14.9523 7.64327 14.9521 7.64305 14.9519 7.64283C14.9517 7.64262 14.9515 7.6424 14.9513 7.64218C14.951 7.64196 14.9508 7.64175 14.9506 7.64153C14.9504 7.64131 14.9502 7.64109 14.95 7.64088C14.9497 7.64066 14.9495 7.64044 14.9493 7.64022C14.9491 7.64001 14.9489 7.63979 14.9486 7.63957C14.9484 7.63936 14.9482 7.63914 14.948 7.63892C14.9478 7.6387 14.9476 7.63849 14.9473 7.63827C14.9471 7.63805 14.9469 7.63783 14.9467 7.63762C14.9465 7.6374 14.9463 7.63718 14.946 7.63696C14.9458 7.63675 14.9456 7.63653 14.9454 7.63631C14.9452 7.63609 14.9449 7.63588 14.9447 7.63566C14.9445 7.63544 14.9443 7.63522 14.9441 7.63501C14.9439 7.63479 14.9436 7.63457 14.9434 7.63435C14.9432 7.63414 14.943 7.63392 14.9428 7.6337C14.9426 7.63348 14.9423 7.63327 14.9421 7.63305C14.9419 7.63283 14.9417 7.63262 14.9415 7.6324C14.9413 7.63218 14.941 7.63196 14.9408 7.63175C14.9406 7.63153 14.9404 7.63131 14.9402 7.63109C14.94 7.63088 14.9397 7.63066 14.9395 7.63044C14.9393 7.63022 14.9391 7.63001 14.9389 7.62979C14.9386 7.62957 14.9384 7.62936 14.9382 7.62914C14.938 7.62892 14.9378 7.6287 14.9376 7.62849C14.9373 7.62827 14.9371 7.62805 14.9369 7.62784C14.9367 7.62762 14.9365 7.6274 14.9363 7.62718C14.936 7.62697 14.9358 7.62675 14.9356 7.62653C14.9354 7.62632 14.9352 7.6261 14.935 7.62588C14.9347 7.62566 14.9345 7.62545 14.9343 7.62523C14.9341 7.62501 14.9339 7.6248 14.9337 7.62458C14.9334 7.62436 14.9332 7.62415 14.933 7.62393C14.9328 7.62371 14.9326 7.6235 14.9324 7.62328C14.9321 7.62306 14.9319 7.62285 14.9317 7.62263C14.9315 7.62241 14.9313 7.6222 14.9311 7.62198C14.9308 7.62176 14.9306 7.62155 14.9304 7.62133C14.9302 7.62111 14.93 7.6209 14.9298 7.62068C14.9295 7.62046 14.9293 7.62025 14.9291 7.62003C14.9289 7.61981 14.9287 7.6196 14.9285 7.61938C14.9282 7.61916 14.928 7.61895 14.9278 7.61873C14.9276 7.61852 14.9274 7.6183 14.9272 7.61808C14.9269 7.61787 14.9267 7.61765 14.9265 7.61744C14.9263 7.61722 14.9261 7.617 14.9259 7.61679C14.9256 7.61657 14.9254 7.61635 14.9252 7.61614C14.925 7.61592 14.9248 7.61571 14.9246 7.61549C14.9243 7.61528 14.9241 7.61506 14.9239 7.61484C14.9237 7.61463 14.9235 7.61441 14.9233 7.6142C14.9231 7.61398 14.9228 7.61377 14.9226 7.61355C14.9224 7.61333 14.9222 7.61312 14.922 7.6129C14.9218 7.61269 14.9215 7.61247 14.9213 7.61226C14.9211 7.61204 14.9209 7.61183 14.9207 7.61161C14.9205 7.6114 14.9203 7.61118 14.92 7.61097C14.9198 7.61075 14.9196 7.61054 14.9194 7.61032C14.9192 7.61011 14.919 7.60989 14.9188 7.60968C14.9185 7.60946 14.9183 7.60925 14.9181 7.60903C14.9179 7.60882 14.9177 7.6086 14.9175 7.60839C14.9172 7.60818 14.917 7.60796 14.9168 7.60775C14.9166 7.60753 14.9164 7.60732 14.9162 7.6071C14.916 7.60689 14.9157 7.60668 14.9155 7.60646C14.9153 7.60625 14.9151 7.60603 14.9149 7.60582C14.9147 7.60561 14.9145 7.60539 14.9143 7.60518C14.914 7.60496 14.9138 7.60475 14.9136 7.60454C14.9134 7.60432 14.9132 7.60411 14.913 7.6039C14.9128 7.60368 14.9125 7.60347 14.9123 7.60326C14.9121 7.60304 14.9119 7.60283 14.9117 7.60262C14.9115 7.6024 14.9113 7.60219 14.9111 7.60198C14.9108 7.60176 14.9106 7.60155 14.9104 7.60134C14.9102 7.60113 14.91 7.60091 14.9098 7.6007C14.9096 7.60049 14.9093 7.60027 14.9091 7.60006C14.9089 7.59985 14.9087 7.59964 14.9085 7.59942C14.9083 7.59921 14.9081 7.599 14.9079 7.59879C14.9076 7.59858 14.9074 7.59836 14.9072 7.59815C14.907 7.59794 14.9068 7.59773 14.9066 7.59752C14.9064 7.5973 14.9062 7.59709 14.906 7.59688C14.9057 7.59667 14.9055 7.59646 14.9053 7.59625C14.9051 7.59603 14.9049 7.59582 14.9047 7.59561C14.9045 7.5954 14.9043 7.59519 14.9041 7.59498C14.9038 7.59477 14.9036 7.59456 14.9034 7.59435C14.9032 7.59414 14.903 7.59392 14.9028 7.59371C14.9026 7.5935 14.9024 7.59329 14.9022 7.59308C14.9019 7.59287 14.9017 7.59266 14.9015 7.59245C14.9013 7.59224 14.9011 7.59203 14.9009 7.59182C14.9007 7.59161 14.9005 7.5914 14.9003 7.59119C14.9001 7.59098 14.8998 7.59077 14.8996 7.59056C14.8994 7.59035 14.8992 7.59014 14.899 7.58993C14.8988 7.58972 14.8986 7.58952 14.8984 7.58931C14.8982 7.5891 14.898 7.58889 14.8978 7.58868C14.8975 7.58847 14.8973 7.58826 14.8971 7.58805C14.8969 7.58784 14.8967 7.58764 14.8965 7.58743C14.8963 7.58722 14.8961 7.58701 14.8959 7.5868C14.8957 7.58659 14.8955 7.58639 14.8953 7.58618C14.895 7.58597 14.8948 7.58576 14.8946 7.58556C14.8944 7.58535 14.8942 7.58514 14.894 7.58493C14.8938 7.58473 14.8936 7.58452 14.8934 7.58431C14.8932 7.5841 14.893 7.5839 14.8928 7.58369C14.8926 7.58348 14.8923 7.58328 14.8921 7.58307C14.8919 7.58286 14.8917 7.58266 14.8915 7.58245C14.8913 7.58224 14.8911 7.58204 14.8909 7.58183C14.8907 7.58162 14.8905 7.58142 14.8903 7.58121C14.8901 7.58101 14.8899 7.5808 14.8897 7.58059C14.8895 7.58039 14.8893 7.58018 14.8891 7.57998C14.8888 7.57977 14.8886 7.57957 14.8884 7.57936C14.8882 7.57916 14.888 7.57895 14.8878 7.57875C14.8876 7.57854 14.8874 7.57834 14.8872 7.57813C14.887 7.57793 14.8868 7.57772 14.8866 7.57752C14.8864 7.57732 14.8862 7.57711 14.886 7.57691C14.8858 7.5767 14.8856 7.5765 14.8854 7.5763C14.8852 7.57609 14.885 7.57589 14.8848 7.57569C14.8846 7.57548 14.8844 7.57528 14.8841 7.57508C14.8839 7.57487 14.8837 7.57467 14.8835 7.57447C14.8833 7.57426 14.8831 7.57406 14.8829 7.57386C14.8827 7.57366 14.8825 7.57345 14.8823 7.57325C14.8821 7.57305 14.8819 7.57285 14.8817 7.57265C14.8815 7.57244 14.8813 7.57224 14.8811 7.57204C14.8809 7.57184 14.8807 7.57164 14.8805 7.57144C14.8803 7.57123 14.8801 7.57103 14.8799 7.57083C14.8797 7.57063 14.8795 7.57043 14.8793 7.57023C14.8791 7.57003 14.8789 7.56983 14.8787 7.56963C14.8785 7.56943 14.8783 7.56923 14.8781 7.56903C14.8779 7.56883 14.8777 7.56863 14.8775 7.56843C14.8773 7.56823 14.8771 7.56803 14.8769 7.56783C14.8767 7.56763 14.8765 7.56743 14.8763 7.56723C14.8761 7.56703 14.8759 7.56684 14.8757 7.56664C14.8755 7.56644 14.8753 7.56624 14.8751 7.56604C14.8749 7.56584 14.8747 7.56564 14.8745 7.56545C14.8743 7.56525 14.8741 7.56505 14.8739 7.56485C14.8737 7.56466 14.8735 7.56446 14.8733 7.56426C14.8731 7.56406 14.8729 7.56387 14.8727 7.56367C14.8725 7.56347 14.8723 7.56328 14.8722 7.56308C14.872 7.56288 14.8718 7.56269 14.8716 7.56249C14.8714 7.56229 14.8712 7.5621 14.871 7.5619C14.8708 7.56171 14.8706 7.56151 14.8704 7.56131C14.8702 7.56112 14.87 7.56092 14.8698 7.56073C14.8696 7.56053 14.8694 7.56034 14.8692 7.56014C14.869 7.55995 14.8688 7.55976 14.8686 7.55956C14.8684 7.55937 14.8682 7.55917 14.8681 7.55898C14.8679 7.55878 14.8677 7.55859 14.8675 7.5584C14.8673 7.5582 14.8671 7.55801 14.8669 7.55782C14.8667 7.55762 14.8665 7.55743 14.8663 7.55724C14.8661 7.55704 14.8659 7.55685 14.8657 7.55666C14.8655 7.55647 14.8653 7.55627 14.8652 7.55608C14.865 7.55589 14.8648 7.5557 14.8646 7.55551C14.8644 7.55532 14.8642 7.55512 14.864 7.55493C14.8638 7.55474 14.8636 7.55455 14.8634 7.55436C14.8632 7.55417 14.8631 7.55398 14.8629 7.55379C14.8627 7.5536 14.8625 7.55341 14.8623 7.55322C14.8621 7.55303 14.8619 7.55284 14.8617 7.55265C14.8615 7.55246 14.8613 7.55227 14.8612 7.55208C14.861 7.55189 14.8608 7.5517 14.8606 7.55151C14.8604 7.55132 14.8602 7.55113 14.86 7.55095C14.8598 7.55076 14.8596 7.55057 14.8595 7.55038C14.8593 7.55019 14.8591 7.55001 14.8589 7.54982C14.8587 7.54963 14.8585 7.54944 14.8583 7.54926C14.8581 7.54907 14.858 7.54888 14.8578 7.5487C14.8576 7.54851 14.8574 7.54832 14.8572 7.54814C14.857 7.54795 14.8568 7.54776 14.8567 7.54758C14.8565 7.54739 14.8563 7.54721 14.8561 7.54702C14.8559 7.54684 14.8557 7.54665 14.8555 7.54647C14.8554 7.54628 14.8552 7.5461 14.855 7.54591C14.8548 7.54573 14.8546 7.54554 14.8544 7.54536C14.8542 7.54518 14.8541 7.54499 14.8539 7.54481C14.8537 7.54462 14.8535 7.54444 14.8533 7.54426C14.8531 7.54408 14.853 7.54389 14.8528 7.54371C14.8526 7.54353 14.8524 7.54334 14.8522 7.54316C14.8521 7.54298 14.8519 7.5428 14.8517 7.54262C14.8515 7.54243 14.8513 7.54225 14.8511 7.54207C14.851 7.54189 14.8508 7.54171 14.8506 7.54153C14.8504 7.54135 14.8502 7.54117 14.8501 7.54099C14.8499 7.54081 14.8497 7.54063 14.8495 7.54045C14.8493 7.54027 14.8492 7.54009 14.849 7.53991C14.8488 7.53973 14.8486 7.53955 14.8484 7.53937C14.8483 7.53919 14.8481 7.53901 14.8479 7.53884C14.8477 7.53866 14.8476 7.53848 14.8474 7.5383C14.8472 7.53812 14.847 7.53795 14.8468 7.53777C14.8467 7.53759 14.8465 7.53741 14.8463 7.53724C14.8461 7.53706 14.846 7.53688 14.8458 7.53671C14.8456 7.53653 14.8454 7.53635 14.8453 7.53618C14.8451 7.536 14.8449 7.53583 14.8447 7.53565C14.8445 7.53548 14.8444 7.5353 14.8442 7.53513C14.844 7.53495 14.8438 7.53478 14.8437 7.5346C14.8435 7.53443 14.8433 7.53425 14.8432 7.53408C14.843 7.53391 14.8428 7.53373 14.8426 7.53356C14.8425 7.53339 14.8423 7.53321 14.8421 7.53304C14.8419 7.53287 14.8418 7.53269 14.8416 7.53252C14.8414 7.53235 14.8413 7.53218 14.8411 7.53201C14.8409 7.53184 14.8407 7.53166 14.8406 7.53149C14.8404 7.53132 14.8402 7.53115 14.8401 7.53098C14.8399 7.53081 14.8397 7.53064 14.8395 7.53047C14.8394 7.5303 14.8392 7.53013 14.839 7.52996C14.8389 7.52979 14.8387 7.52962 14.8385 7.52945C14.8384 7.52928 14.8382 7.52911 14.838 7.52894C14.8378 7.52878 14.8377 7.52861 14.8375 7.52844C14.8373 7.52827 14.8372 7.5281 14.837 7.52794C14.8368 7.52777 14.8367 7.5276 14.8365 7.52744C14.8363 7.52727 14.8362 7.5271 14.836 7.52694C14.8358 7.52677 14.8357 7.5266 14.8355 7.52644C14.8353 7.52627 14.8352 7.52611 14.835 7.52594C14.8348 7.52578 14.8347 7.52561 14.8345 7.52545C14.8344 7.52528 14.8342 7.52512 14.834 7.52495C14.8339 7.52479 14.8337 7.52463 14.8335 7.52446C14.8334 7.5243 14.8332 7.52414 14.833 7.52397C14.8329 7.52381 14.8327 7.52365 14.8326 7.52349C14.8324 7.52332 14.8322 7.52316 14.8321 7.523C14.8319 7.52284 14.8317 7.52268 14.8316 7.52251C14.8314 7.52235 14.8313 7.52219 14.8311 7.52203C14.8309 7.52187 14.8308 7.52171 14.8306 7.52155C14.8305 7.52139 14.8303 7.52123 14.8301 7.52107C14.83 7.52091 14.8298 7.52075 14.8297 7.5206C14.8295 7.52044 14.8294 7.52028 14.8292 7.52012C14.829 7.51996 14.8289 7.5198 14.8287 7.51965C14.8286 7.51949 14.8284 7.51933 14.8282 7.51917C14.8281 7.51902 14.8279 7.51886 14.8278 7.5187C14.8276 7.51855 14.8275 7.51839 14.8273 7.51824C14.8272 7.51808 14.827 7.51793 14.8268 7.51777C14.8267 7.51762 14.8265 7.51746 14.8264 7.51731C14.8262 7.51715 14.8261 7.517 14.8259 7.51684C14.8258 7.51669 14.8256 7.51654 14.8255 7.51638C14.8253 7.51623 14.8252 7.51608 14.825 7.51592C14.8248 7.51577 14.8247 7.51562 14.8245 7.51547C14.8244 7.51532 14.8242 7.51516 14.8241 7.51501C14.8239 7.51486 14.8238 7.51471 14.8236 7.51456C14.8235 7.51441 14.8233 7.51426 14.8232 7.51411C14.823 7.51396 14.8229 7.51381 14.8227 7.51366C14.8226 7.51351 14.8224 7.51336 14.8223 7.51321C14.8221 7.51306 14.822 7.51291 14.8218 7.51277C14.8217 7.51262 14.8215 7.51247 14.8214 7.51232C14.8212 7.51218 14.8211 7.51203 14.821 7.51188C14.8208 7.51173 14.8207 7.51159 14.8205 7.51144C14.8204 7.5113 14.8202 7.51115 14.8201 7.51101C14.8199 7.51086 14.8198 7.51071 14.8196 7.51057C14.8195 7.51042 14.8194 7.51028 14.8192 7.51014C14.8191 7.50999 14.8189 7.50985 14.8188 7.5097C14.8186 7.50956 14.8185 7.50942 14.8183 7.50928C14.8182 7.50913 14.8181 7.50899 14.8179 7.50885C14.8178 7.50871 14.8176 7.50856 14.8175 7.50842C14.8174 7.50828 14.8172 7.50814 14.8171 7.508C14.8169 7.50786 14.8168 7.50772 14.8167 7.50758C14.8165 7.50744 14.8164 7.5073 14.8162 7.50716C14.8161 7.50702 14.816 7.50688 14.8158 7.50674C14.8157 7.5066 14.8155 7.50646 14.8154 7.50633C14.8153 7.50619 14.8151 7.50605 14.815 7.50591C14.8148 7.50578 14.8147 7.50564 14.8146 7.5055C14.8144 7.50537 14.8143 7.50523 14.8142 7.50509C14.814 7.50496 14.8139 7.50482 14.8138 7.50469C14.8136 7.50455 14.8135 7.50442 14.8134 7.50428C14.8132 7.50415 14.8131 7.50401 14.813 7.50388C14.8128 7.50375 14.8127 7.50361 14.8126 7.50348C14.8124 7.50335 14.8123 7.50322 14.8122 7.50308C14.812 7.50295 14.8119 7.50282 14.8118 7.50269C14.8116 7.50255 14.8115 7.50242 14.8114 7.50229C14.8112 7.50216 14.8111 7.50203 14.811 7.5019C14.8108 7.50177 14.8107 7.50164 14.8106 7.50151C14.8105 7.50138 14.8103 7.50125 14.8102 7.50113C14.8101 7.501 14.8099 7.50087 14.8098 7.50074C14.8097 7.50061 14.8096 7.50048 14.8094 7.50036C14.8093 7.50023 14.8092 7.5001 14.8091 7.49998C14.8089 7.49985 14.8088 7.49972 14.8087 7.4996C14.8085 7.49947 14.8084 7.49935 14.8083 7.49922C14.8082 7.4991 14.808 7.49897 14.8079 7.49885C14.8078 7.49873 14.8077 7.4986 14.8076 7.49848C14.8074 7.49835 14.8073 7.49823 14.8072 7.49811C14.8071 7.49799 14.8069 7.49786 14.8068 7.49774C14.8067 7.49762 14.8066 7.4975 14.8065 7.49738C14.8063 7.49726 14.8062 7.49714 14.8061 7.49702C14.806 7.49689 14.8058 7.49678 14.8057 7.49665C14.8056 7.49654 14.8055 7.49642 14.8054 7.4963C14.8053 7.49618 14.8051 7.49606 14.805 7.49594C14.8049 7.49582 14.8048 7.49571 14.8047 7.49559C14.8045 7.49547 14.8044 7.49535 14.8043 7.49524C14.8042 7.49512 14.8041 7.49501 14.804 7.49489C14.8038 7.49477 14.8037 7.49466 14.8036 7.49454C14.8035 7.49443 14.8034 7.49431 14.8033 7.4942C14.8032 7.49409 14.803 7.49397 14.8029 7.49386C14.8028 7.49375 14.8027 7.49363 14.8026 7.49352C14.8025 7.49341 14.8024 7.4933 14.8023 7.49318C14.8021 7.49307 14.802 7.49296 14.8019 7.49285C14.8018 7.49274 14.8017 7.49263 14.8016 7.49252C14.8015 7.49241 14.8014 7.4923 14.8013 7.49219C14.8012 7.49208 14.801 7.49197 14.8009 7.49186C14.8008 7.49176 14.8007 7.49165 14.8006 7.49154C14.8005 7.49143 14.8004 7.49132 14.8003 7.49122C14.8002 7.49111 14.8001 7.49101 14.8 7.4909C14.7999 7.49079 14.7998 7.49069 14.7997 7.49058C14.7996 7.49048 14.7994 7.49037 14.7993 7.49027C14.7992 7.49016 14.7991 7.49006 14.799 7.48996C14.7989 7.48985 14.7988 7.48975 14.7987 7.48965C14.7986 7.48954 14.7985 7.48944 14.7984 7.48934C14.7983 7.48924 14.7982 7.48914 14.7981 7.48904C14.798 7.48894 14.7979 7.48884 14.7978 7.48873C14.7977 7.48863 14.7976 7.48854 14.7975 7.48844C14.7974 7.48834 14.7973 7.48824 14.7972 7.48814C14.7971 7.48804 14.797 7.48794 14.7969 7.48785C14.7968 7.48775 14.7967 7.48765 14.7966 7.48755C14.7965 7.48746 14.7964 7.48736 14.7963 7.48726C14.7962 7.48717 14.7961 7.48707 14.7961 7.48698C14.796 7.48688 14.7959 7.48679 14.7958 7.48669C14.7957 7.4866 14.7956 7.48651 14.7955 7.48641C14.7954 7.48632 14.7953 7.48623 14.7952 7.48614C14.7951 7.48604 14.795 7.48595 14.7949 7.48586C14.7948 7.48577 14.7948 7.48568 14.7947 7.48559C14.7946 7.4855 14.7945 7.48541 14.7944 7.48532C14.7943 7.48523 14.7942 7.48514 14.7941 7.48505C14.794 7.48496 14.7939 7.48487 14.7939 7.48478C14.7938 7.4847 14.7937 7.48461 14.7936 7.48452C14.7935 7.48443 14.7934 7.48435 14.7933 7.48426C14.7932 7.48417 14.7932 7.48409 14.7931 7.484C14.793 7.48392 14.7929 7.48383 14.7928 7.48375C14.7927 7.48366 14.7927 7.48358 14.7926 7.4835C14.7925 7.48341 14.7924 7.48333 14.7923 7.48325C14.7922 7.48317 14.7922 7.48308 14.7921 7.483C14.792 7.48292 14.7919 7.48284 14.7918 7.48276C14.7918 7.48268 14.7917 7.4826 14.7916 7.48252C14.7915 7.48244 14.7914 7.48236 14.7914 7.48228C14.7913 7.4822 14.7912 7.48212 14.7911 7.48204C14.791 7.48197 14.791 7.48189 14.7909 7.48181C14.7908 7.48173 14.7907 7.48166 14.7907 7.48158C14.7906 7.48151 14.7905 7.48143 14.7904 7.48136C14.7904 7.48128 14.7903 7.48121 14.7902 7.48113C14.7901 7.48106 14.7901 7.48098 14.79 7.48091C14.7899 7.48084 14.7898 7.48076 14.7898 7.48069C14.7897 7.48062 14.7896 7.48055 14.7895 7.48048C14.7895 7.4804 14.7894 7.48033 14.7893 7.48026C14.7893 7.48019 14.7892 7.48012 14.7891 7.48005C14.7891 7.47998 14.789 7.47991 14.7889 7.47985C14.7889 7.47978 14.7888 7.47971 14.7887 7.47964C14.7886 7.47957 14.7886 7.47951 14.7885 7.47944C14.7884 7.47937 14.7884 7.47931 14.7883 7.47924C14.7882 7.47918 14.7882 7.47911 14.7881 7.47905C14.7881 7.47898 14.788 7.47892 14.7879 7.47885C14.7879 7.47879 14.7878 7.47873 14.7877 7.47866C14.7877 7.4786 14.7876 7.47854 14.7875 7.47848C14.7875 7.47842 14.7874 7.47835 14.7874 7.47829C14.7873 7.47823 14.7872 7.47817 14.7872 7.47811C14.7871 7.47805 14.7871 7.47799 14.787 7.47793C14.7869 7.47788 14.7869 7.47782 14.7868 7.47776C14.7868 7.4777 14.7867 7.47764 14.7867 7.47759C14.7866 7.47753 14.7865 7.47747 14.7865 7.47742C14.7864 7.47736 14.7864 7.47731 14.7863 7.47725C14.7863 7.4772 14.7862 7.47714 14.7862 7.47709C14.7861 7.47703 14.7861 7.47698 14.786 7.47693C14.7859 7.47687 14.7859 7.47682 14.7858 7.47677C14.7858 7.47672 14.7857 7.47667 14.7857 7.47662C14.7856 7.47657 14.7856 7.47652 14.7855 7.47647C14.7855 7.47642 14.7854 7.47637 14.7854 7.47632C14.7853 7.47627 14.7853 7.47622 14.7852 7.47617C14.7852 7.47612 14.7852 7.47608 14.7851 7.47603C14.7851 7.47598 14.785 7.47594 14.785 7.47589C14.7849 7.47585 14.7849 7.4758 14.7848 7.47576C14.7848 7.47571 14.7847 7.47567 14.7847 7.47562C14.7847 7.47558 14.7846 7.47554 14.7846 7.47549C14.7845 7.47545 14.7845 7.47541 14.7844 7.47537C14.7844 7.47533 14.7844 7.47528 14.7843 7.47524C14.7843 7.4752 14.7842 7.47516 14.7842 7.47512C14.7842 7.47508 14.7841 7.47504 14.7841 7.47501C14.784 7.47497 14.784 7.47493 14.784 7.47489C14.7839 7.47485 14.7839 7.47482 14.7839 7.47478C14.7838 7.47474 14.7838 7.47471 14.7837 7.47467C14.7837 7.47464 14.7837 7.4746 14.7836 7.47457C14.7836 7.47453 14.7836 7.4745 14.7835 7.47447C14.7835 7.47443 14.7835 7.4744 14.7834 7.47437C14.7834 7.47434 14.7834 7.47431 14.7833 7.47427C14.7833 7.47424 14.7833 7.47421 14.7833 7.47418C14.7832 7.47415 14.7832 7.47412 14.7832 7.47409C14.7831 7.47406 14.7831 7.47404 14.7831 7.47401C14.7831 7.47398 14.783 7.47395 14.783 7.47393C14.783 7.4739 14.7829 7.47387 14.7829 7.47385C14.7829 7.47382 14.7829 7.4738 14.7828 7.47377C14.7828 7.47375 14.7828 7.47372 14.7828 7.4737C14.7827 7.47368 14.7827 7.47365 14.7827 7.47363C14.7827 7.47361 14.7827 7.47359 14.7826 7.47356C14.7826 7.47354 14.7826 7.47352 14.7826 7.4735C14.7826 7.47348 14.7825 7.47346 14.7825 7.47344C14.7825 7.47342 14.7825 7.47341 14.7825 7.47339C14.7824 7.47337 14.7824 7.47335 14.7824 7.47333C14.7824 7.47332 14.7824 7.4733 14.7824 7.47329C14.7823 7.47327 14.7823 7.47325 14.7823 7.47324C14.7823 7.47322 14.7823 7.47321 14.7823 7.4732C14.7823 7.47318 14.7822 7.47317 14.7822 7.47316C14.7822 7.47315 14.7822 7.47313 14.7822 7.47312C14.7822 7.47311 14.7822 7.4731 14.7822 7.47309C14.7822 7.47308 14.7821 7.47307 14.7821 7.47306C14.7821 7.47305 14.7821 7.47304 14.7821 7.47303C14.7821 7.47303 14.7821 7.47302 14.7821 7.47301C14.7821 7.47301 14.7821 7.473 14.7821 7.47299C14.7821 7.47299 14.7821 7.47298 14.7821 7.47298C14.782 7.47297 14.782 7.47297 14.782 7.47297C14.782 7.47296 14.782 7.47296 14.782 7.47296C14.782 7.47295 14.782 7.47295 14.782 7.47295C14.782 7.47295 14.782 7.47295 14.2517 8.00328ZM2.63001 9.3213C2.45431 9.14559 2.45427 8.86072 2.62994 8.68497L1.56905 7.62455C0.807815 8.38612 0.80795 9.62055 1.56935 10.382L2.63001 9.3213ZM7.56972 13.6246C7.39398 13.8003 7.10906 13.8003 6.93332 13.6246L5.87266 14.6853C6.63418 15.4468 7.86885 15.4468 8.63038 14.6853L7.56972 13.6246Z" />
        <path d="M13.4212 13.6839L15 10L16.5788 13.6839C16.8367 14.2856 16.7302 14.9815 16.3042 15.4784C15.6187 16.2782 14.3813 16.2782 13.6958 15.4784C13.2698 14.9815 13.1633 14.2856 13.4212 13.6839Z" />
      </svg>
    ),
    position: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2763_46009)">
          <path
            d="M1.78284 6.04191L8.66697 7.05953C8.79506 7.07847 8.89278 7.18261 8.90354 7.31164L9.48164 14.2465"
            stroke="#254E5F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.76332 6.02604L14.4544 1.51971C14.6684 1.44371 14.8704 1.65896 14.7809 1.86773C14.6915 2.07651 9.47724 14.2468 9.47724 14.2468"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2763_46009">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),

    pfr: (
      <svg
        style={style}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_301_19717)">
          <path
            d="M5.37549 4.7533C5.37549 6.50767 6.90213 7.21628 8.25558 7.21628M5.37549 4.7533C5.37549 2.99893 6.90213 2.27769 8.25558 2.27769C9.60902 2.27769 11.249 2.97853 11.249 4.74699M5.37549 4.7533H4.76575M4.76575 12.0407V4.7533M3 9.24999C1.44606 9.24999 0.75 8.287 0.75 6.99998C0.75 5.71296 1.79334 4.7533 3.08036 4.7533H4.76575M8.25558 7.21628C9.60902 7.21628 11.249 6.51544 11.249 4.74699M8.25558 7.21628L8.25238 11.0335C8.25238 8.55367 8.25238 6.70084 8.25238 4.7533C8.25238 3.92093 8.25238 3.07126 8.25238 2.14794M11.249 4.74699L12.9196 4.74999C14.2067 4.74999 15.25 5.71297 15.25 6.99999C15.25 8.28701 14.2067 9.24999 12.9196 9.24999C12.9196 9.24999 12.9196 9.24999 12.9196 9.24999C12.9196 9.24999 11.7381 9.24999 11 9.24999M1.97656 14.7561L12.3526 12.5464M11.249 14.2638L15.8477 13.2969M8.25238 2.14794C8.25238 1.47792 8.25238 0.769118 8.25238 0V2.14794Z"
            stroke="white"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_301_19717">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    fns: (
      <svg
        style={style}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_301_19663)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.10377 1.62539C5.27033 1.51871 5.53203 1.47675 5.79377 1.52217C5.89334 1.53944 5.96968 1.56582 6.01943 1.58915C6.03747 1.65451 6.05814 1.73447 6.0808 1.82549H7.62393C7.54702 1.49947 7.4699 1.18881 7.41263 1.01234C7.29689 0.655733 7.0208 0.435052 6.81022 0.311809C6.58172 0.178071 6.31613 0.0903862 6.05019 0.0442452C5.52956 -0.0460851 4.8604 -2.64472e-05 4.29474 0.362277L5.10377 1.62539ZM7.83159 3.32549H6.43184C6.47162 3.49241 6.50653 3.63167 6.53167 3.71547L7.83159 3.32549ZM3.9491 2.38795L2.58171 1.16829C1.96756 0.620494 1.0019 0.805752 0.633088 1.53918L0.140936 2.48026L0.13668 2.48839L0.132624 2.49663C0.0679996 2.62794 0.0396678 2.76522 0.0268215 2.83702C0.0117538 2.92123 1.03011e-05 3.02198 1.03011e-05 3.11632V5.8787C1.03011e-05 6.07788 0.0476061 6.27417 0.138832 6.45122L0.80317 6.10893L0.138832 6.45123C0.551032 7.25124 0.902802 7.85253 1.3808 8.3641C1.86211 8.8792 2.43368 9.26379 3.22273 9.70127L3.22966 9.70575L3.23678 9.71041L3.24588 9.71634C3.55897 9.91996 3.94556 9.97206 4.29909 9.86186L4.2788 9.84519C3.94832 9.57377 3.7432 9.16941 3.7432 8.72742V8.27279C3.13177 7.92186 2.76805 7.6517 2.47681 7.34001C2.1562 6.99688 1.88713 6.56522 1.50001 5.81794V3.12522L1.5001 3.12433L1.50104 3.11631L1.82269 2.50127L3.7432 4.2143V3.07549C3.7432 2.8215 3.81896 2.5852 3.9491 2.38795ZM5.2432 5.22762V3.54224L6.08041 4.289L5.2432 5.22762ZM4.72183 10.2091L3.09922 11.8387L1.3432 9.54411C1.09147 9.21517 0.620736 9.15258 0.291794 9.40431C-0.0371487 9.65604 -0.0997393 10.1268 0.151994 10.4557L2.42958 13.4319L3.40444 14.7057C3.65617 15.0347 4.1269 15.0972 4.45584 14.8455C4.78478 14.5938 4.84737 14.1231 4.59564 13.7941L4.01912 13.0408L5.88632 11.1654L4.72183 10.2091ZM6.94953 10.0976L5.78505 9.14121L6.26992 8.65423C6.56218 8.3607 7.03705 8.35967 7.33058 8.65193C7.62411 8.94418 7.62514 9.41906 7.33288 9.71259L6.94953 10.0976ZM6.19186 11.4164L5.85985 11.8603C5.85174 11.8711 5.84393 11.8822 5.83641 11.8934C5.36932 12.5941 5.4674 13.528 6.06986 14.1163L7.47623 15.4896L8.00023 16.0012L8.52421 15.4895L9.93049 14.1162C10.5329 13.528 10.631 12.5941 10.1639 11.8935C10.1565 11.8823 10.1487 11.8713 10.1407 11.8606L9.8091 11.4169L8.64872 12.3699L8.92301 12.7369C8.9814 12.8356 8.96531 12.9622 8.88248 13.0431L8.00019 13.9047L7.11782 13.0431C7.03501 12.9622 7.01891 12.8356 7.07724 12.737L7.35222 12.3694L6.19186 11.4164ZM7.81289 10.8067L7.58177 10.6169C7.61551 10.6348 7.64831 10.6555 7.67986 10.6791C7.73039 10.7169 7.7748 10.7599 7.81289 10.8067ZM8.18712 10.8079L8.42066 10.6161C8.38652 10.6342 8.35333 10.6551 8.32143 10.6789C8.27034 10.7171 8.22551 10.7605 8.18712 10.8079ZM10.1392 11.1457L11.0643 12.2143C11.0224 12.386 11.0001 12.5654 11.0001 12.7499C11.0001 13.9926 12.0075 14.9999 13.2501 14.9999C14.4928 14.9999 15.5001 13.9926 15.5001 12.7499C15.5001 11.5073 14.4928 10.4999 13.2501 10.4999C12.7581 10.4999 12.3031 10.6578 11.9327 10.9257L11.2988 10.1934L10.1392 11.1457ZM10.3167 9.05889L9.15718 10.0112L8.76449 9.55758C8.4934 9.24441 8.52751 8.77076 8.84069 8.49966C9.15386 8.22857 9.62751 8.26268 9.89861 8.57586L10.3167 9.05889ZM12.2583 8.27069C12.8676 7.92078 13.2304 7.65108 13.5211 7.34001C13.8417 6.99688 14.1107 6.56522 14.4979 5.81794V3.17451L14.1692 2.50665L12.2583 4.21102V3.07549C12.2583 2.82061 12.1821 2.58355 12.0511 2.3859L13.4162 1.16829C14.0331 0.618023 15.0047 0.807441 15.3697 1.54915L15.8694 2.56434C15.9539 2.73606 15.9979 2.92491 15.9979 3.11632V5.8787C15.9979 6.07789 15.9503 6.27418 15.859 6.45123C15.4468 7.25124 15.0951 7.85253 14.6171 8.3641C14.1358 8.87921 13.5642 9.26379 12.7751 9.70127L12.7682 9.70575L12.7611 9.71041L12.752 9.71634C12.4397 9.91945 12.0542 9.9718 11.7014 9.86269L11.7227 9.84519C12.0532 9.57377 12.2583 9.16941 12.2583 8.72742V8.27069ZM10.7583 3.53897V5.23174L9.91745 4.289L10.7583 3.53897ZM9.56825 3.32549C9.52846 3.49242 9.49355 3.63168 9.46841 3.71547L8.16848 3.32549H9.56825ZM9.91936 1.82549H8.37621C8.45313 1.49948 8.53026 1.18883 8.58753 1.01237C8.70326 0.655765 8.97935 0.435084 9.18993 0.311841C9.41844 0.178103 9.68402 0.0904183 9.94996 0.0442773C10.4706 -0.0460529 11.1398 5.73928e-06 11.7054 0.362309L10.8964 1.62543C10.7298 1.51875 10.4681 1.47678 10.2064 1.5222C10.1068 1.53947 10.0305 1.56585 9.98072 1.58918C9.96268 1.65454 9.94201 1.73448 9.91936 1.82549ZM6.07526 1.62173C6.07503 1.6218 6.07243 1.62002 6.06815 1.61617C6.07335 1.61973 6.07549 1.62165 6.07526 1.62173ZM9.9249 1.62176C9.92467 1.62169 9.92681 1.61976 9.932 1.6162C9.92772 1.62005 9.92513 1.62183 9.9249 1.62176ZM12.5001 12.7499C12.5001 12.3357 12.8359 11.9999 13.2501 11.9999C13.6643 11.9999 14.0001 12.3357 14.0001 12.7499C14.0001 13.1642 13.6643 13.4999 13.2501 13.4999C12.8359 13.4999 12.5001 13.1642 12.5001 12.7499Z"
            fill="white"
          />
          <path
            d="M5.75146 4.25439C5.75146 3.97825 5.97532 3.75439 6.25146 3.75439H9.75C10.0261 3.75439 10.25 3.97825 10.25 4.25439V8.02546C10.25 8.16825 10.189 8.30422 10.0822 8.39911L8.00073 10.2499L5.91922 8.39911C5.81252 8.30422 5.75146 8.16825 5.75146 8.02546V4.25439Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_301_19663">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),

    fss: (
      <svg
        style={style}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_301_19698)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.00043 0.0618286C3.05391 0.553737 0 3.92022 0 7.99999C0 12.0798 3.05391 15.4462 7.00043 15.9381V14.4236C3.88513 13.9428 1.5 11.2499 1.5 7.99999C1.5 4.75005 3.88513 2.0572 7.00043 1.57637V0.0618286Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.00054 5.15955C5.58837 5.33556 4.49561 6.54018 4.49561 8.00002C4.49561 9.45986 5.58837 10.6645 7.00054 10.8405V9.31519C6.42149 9.15809 5.99561 8.62879 5.99561 8.00002C5.99561 7.37125 6.42149 6.84194 7.00054 6.68484V5.15955Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.01359 12.8632C11.4313 12.5618 13.3022 10.4994 13.3022 8C13.3022 5.50062 11.4313 3.43821 9.01359 3.13684L9.01359 4.65394C10.5997 4.94233 11.8022 6.33073 11.8022 8C11.8022 9.66927 10.5997 11.0577 9.01359 11.3461L9.01359 12.8632ZM3.50017 7.98336C3.50016 7.9889 3.50015 7.99445 3.50015 8C3.50015 8.00555 3.50016 8.01109 3.50017 8.01664L3.50017 7.98336Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.00183 15.9379C9.41715 15.886 9.82257 15.8023 10.2156 15.6892L10.0083 14.9684L9.80096 14.2477C9.54125 14.3224 9.27454 14.3814 9.00183 14.4235L9.00183 15.9379ZM9.00183 1.5765C9.27454 1.61861 9.54125 1.67761 9.80096 1.75231L10.0083 1.03154L10.2156 0.310756C9.82257 0.197718 9.41715 0.113997 9.00183 0.0621103L9.00183 1.5765ZM2.60179e-06 7.9944C2.60163e-06 7.99626 6.94114e-07 7.99813 6.93951e-07 7.99999C6.93789e-07 8.00185 2.60097e-06 8.00371 2.60081e-06 8.00557L2.60179e-06 7.9944ZM11.507 14.347L11.8704 15.0031C13.1859 14.2745 14.2745 13.1859 15.0031 11.8704L14.347 11.507L13.6909 11.1436C13.0987 12.213 12.213 13.0987 11.1436 13.6909L11.507 14.347ZM16 7.99999C16 8.76865 15.8916 9.512 15.6892 10.2156L14.9685 10.0083L14.2477 9.80095C14.4117 9.23082 14.5 8.62699 14.5 7.99999C14.5 7.37299 14.4117 6.76916 14.2477 6.19903L14.9685 5.99172L15.6892 5.78441C15.8916 6.48798 16 7.23132 16 7.99999ZM14.347 4.49297L15.0031 4.12959C14.2745 2.81404 13.186 1.72549 11.8704 0.996876L11.507 1.65297L11.1436 2.30906C12.213 2.90132 13.0987 3.78699 13.6909 4.85635L14.347 4.49297Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_301_19698">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),

    rosstat: (
      <svg
        style={style}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_301_19686)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25 -3.40741C5.83579 -3.40741 5.5 -3.07162 5.5 -2.65741V5.25V6H6.04431C6.01924 6.88365 5.9313 7.97233 5.7783 8.99672C5.60581 10.1517 5.36425 11.1257 5.08839 11.6517C4.9303 11.9531 4.99502 12.3232 5.24602 12.5531C6.00259 13.246 6.51216 14.1199 6.83469 14.8425C6.99441 15.2004 7.10431 15.5122 7.17364 15.7321C7.20823 15.8418 7.23251 15.9279 7.24769 15.9847C7.25528 16.0131 7.26058 16.034 7.26374 16.0469L7.2669 16.0599L7.26696 16.0601L7.26705 16.0605L7.26836 16.0601L8.72733 16.0633L8.72874 16.0637L8.72883 16.0633L8.73147 16.0528C8.73433 16.0415 8.73924 16.0225 8.74636 15.9966C8.76062 15.9446 8.78371 15.8649 8.81702 15.7621C8.88375 15.5564 8.99091 15.2603 9.14937 14.9122C9.46776 14.2128 9.98444 13.3228 10.7791 12.5314C11.0121 12.2994 11.0668 11.9428 10.9141 11.6517C10.6381 11.1253 10.3957 10.151 10.2223 8.99617C10.0686 7.97181 9.97988 6.88331 9.95467 6H10.5V5.25V-2.65741C10.5 -3.07162 10.1642 -3.40741 9.75 -3.40741H6.25ZM7.26185 9.2183C7.39847 8.30356 7.48607 7.34368 7.52622 6.5H8.47287C8.51332 7.34396 8.60163 8.30403 8.73896 9.21885C8.87971 10.1564 9.08068 11.1104 9.36257 11.8473C8.76617 12.5166 8.32753 13.2129 8.01136 13.8234C7.6959 13.1946 7.25298 12.4803 6.64618 11.8306C6.92459 11.0958 7.12287 10.1488 7.26185 9.2183ZM7 5H9V-1.90741H7V5ZM13.9998 10C13.1543 10 12.4642 10.3346 11.9004 10.7562L11.9871 12.7106C12.1906 12.4933 12.3939 12.2896 12.6168 12.1022C13.0811 11.7117 13.5164 11.5 13.9998 11.5C14.1381 11.5 14.2778 11.5473 14.406 11.6263C14.4689 11.6651 14.5224 11.7077 14.5634 11.7463C14.605 11.7855 14.6234 11.8108 14.6247 11.8125L14.6247 11.8126L16.0006 11.3993V3.69846C16.0006 3.41602 15.8936 3.17155 15.7834 2.99447C15.6678 2.80891 15.5149 2.64214 15.3453 2.5029C15.0131 2.23021 14.5376 2 13.9998 2C13.2584 2 12.3722 2.30975 11.5478 2.80977L11.6268 4.59077C12.4928 3.86908 13.4543 3.5 13.9998 3.5C14.1131 3.5 14.263 3.55514 14.3935 3.66224C14.4456 3.70507 14.4806 3.7451 14.5006 3.77318V10.0593C14.3444 10.0221 14.1769 10 13.9998 10ZM4.01309 12.7113L4.10187 10.7582C3.53756 10.3357 2.84664 10 1.99982 10C1.82273 10 1.65521 10.0221 1.49902 10.0593V3.77319C1.519 3.74511 1.55397 3.70508 1.60613 3.66225C1.73659 3.55515 1.88649 3.50001 1.99982 3.50001C2.54723 3.50001 3.51348 3.87168 4.38188 4.59837L4.46288 2.8165C3.63531 2.31254 2.74455 2.00001 1.99982 2.00001C1.46199 2.00001 0.986485 2.23022 0.654337 2.50291C0.484728 2.64215 0.331762 2.80892 0.21622 2.99448C0.105966 3.17156 -0.000976562 3.41603 -0.000976562 3.69847V11.3993L1.37486 11.8126L1.37493 11.8125C1.37615 11.8108 1.39454 11.7855 1.43615 11.7463C1.47714 11.7077 1.53066 11.6651 1.59359 11.6263C1.72182 11.5473 1.86152 11.5 1.99982 11.5C2.48317 11.5 2.9185 11.7117 3.38283 12.1022C3.60596 12.2898 3.80936 12.4938 4.01309 12.7113ZM14.516 3.79747C14.5172 3.80043 14.518 3.80193 14.5181 3.80193C14.5181 3.80194 14.5179 3.80145 14.5175 3.80047C14.5171 3.79975 14.5166 3.79874 14.516 3.79747ZM1.48154 3.80194C1.48144 3.80195 1.48204 3.80047 1.48364 3.79748C1.48243 3.80044 1.48163 3.80194 1.48154 3.80194Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_301_19686">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),

    drafts: (
      <svg
        style={style}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.75391 9H10.2499M8.00192 6.75L8.00192 11.25"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.75 2C2.75 1.30964 3.30964 0.75 4 0.75H9.51938C9.59532 0.75 9.66715 0.784522 9.71459 0.843827L13.1952 5.19461C13.2307 5.23894 13.25 5.29401 13.25 5.35078V14C13.25 14.6904 12.6904 15.25 12 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14V2Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M10 5V0.121094L10.063 0.161085C10.1558 0.219959 10.2382 0.29372 10.307 0.379404L13.757 4.67705C13.8043 4.73591 13.8447 4.79993 13.8776 4.86789L13.9414 5H10Z"
          fill="white"
        />
      </svg>
    ),

    sfr: (
      <svg
        style={style}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_301_19674)">
          <path
            d="M12.8786 -6.05103L6.4445 4.02825L4.3184 4.062C2.56969 4.08976 1.13552 5.45593 1.02292 7.20123V7.20123C0.891501 9.23816 2.54254 10.9457 4.58273 10.883L5.4445 10.8564L10.2223 3.96829L11.8117 3.94306C13.6865 3.9133 15.2223 5.42492 15.2223 7.29997V7.29997C15.2223 9.11397 13.7813 10.5999 11.9682 10.6557L9.66672 10.7265L3.98457 19.0233"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </g>
        <defs>
          <clipPath id="clip0_301_19674">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    urn: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 12.25C9 12.6642 9.33579 13 9.75 13C10.1642 13 10.5 12.6642 10.5 12.25H9ZM10.5 6.75C10.5 6.33579 10.1642 6 9.75 6C9.33579 6 9 6.33579 9 6.75H10.5ZM5.50403 12.25C5.50403 12.6642 5.83981 13 6.25403 13C6.66824 13 7.00403 12.6642 7.00403 12.25H5.50403ZM7.00403 6.75C7.00403 6.33579 6.66824 6 6.25403 6C5.83981 6 5.50403 6.33579 5.50403 6.75H7.00403ZM0.75 3.00002C0.335786 3.00002 0 3.33581 0 3.75002C0 4.16424 0.335786 4.50002 0.75 4.50002V3.00002ZM15.25 4.50002C15.6642 4.50002 16 4.16424 16 3.75002C16 3.33581 15.6642 3.00002 15.25 3.00002V4.50002ZM14 4.19989C14 3.78568 13.6642 3.44989 13.25 3.44989C12.8358 3.44989 12.5 3.78568 12.5 4.19989H14ZM3.75006 0C3.33584 0 3.00006 0.335786 3.00006 0.75C3.00006 1.16421 3.33584 1.5 3.75006 1.5V0ZM12.2501 1.5C12.6643 1.5 13.0001 1.16421 13.0001 0.75C13.0001 0.335786 12.6643 0 12.2501 0V1.5ZM10.5 12.25V6.75H9V12.25H10.5ZM7.00403 12.25V6.75H5.50403V12.25H7.00403ZM0.75 4.50002H15.25V3.00002H0.75V4.50002ZM2 4.19989V14.55H3.5V4.19989H2ZM3.45 16H12.55V14.5H3.45V16ZM14 14.55V4.19989H12.5V14.55H14ZM12.55 16C13.3508 16 14 15.3508 14 14.55H12.5C12.5 14.5224 12.5224 14.5 12.55 14.5V16ZM2 14.55C2 15.3508 2.64919 16 3.45 16V14.5C3.47761 14.5 3.5 14.5224 3.5 14.55H2ZM3.75006 1.5H12.2501V0H3.75006V1.5Z"
          fill="#D12E34"
        />
      </svg>
    ),
    urn_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <g clipPath="url(#clip0_2594_1251)">
          <path
            d="M9.75 12.25L9.75 6.75M6.25403 12.25L6.25403 6.75"
            stroke="#254E5F"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M0.75 3.00002C0.335786 3.00002 0 3.33581 0 3.75002C0 4.16424 0.335786 4.50002 0.75 4.50002V3.00002ZM15.25 4.50002C15.6642 4.50002 16 4.16424 16 3.75002C16 3.33581 15.6642 3.00002 15.25 3.00002V4.50002ZM14 4.19989C14 3.78568 13.6642 3.44989 13.25 3.44989C12.8358 3.44989 12.5 3.78568 12.5 4.19989H14ZM3.75006 0C3.33584 0 3.00006 0.335786 3.00006 0.75C3.00006 1.16421 3.33584 1.5 3.75006 1.5V0ZM12.2501 1.5C12.6643 1.5 13.0001 1.16421 13.0001 0.75C13.0001 0.335786 12.6643 0 12.2501 0V1.5ZM0.75 4.50002H15.25V3.00002H0.75V4.50002ZM2 4.19989V14.55H3.5V4.19989H2ZM3.45 16H12.55V14.5H3.45V16ZM14 14.55V4.19989H12.5V14.55H14ZM12.55 16C13.3508 16 14 15.3508 14 14.55H12.5C12.5 14.5224 12.5224 14.5 12.55 14.5V16ZM2 14.55C2 15.3508 2.64919 16 3.45 16V14.5C3.47761 14.5 3.5 14.5224 3.5 14.55H2ZM3.75006 1.5H12.2501V0H3.75006V1.5Z" />
        </g>
        <defs>
          <clipPath id="clip0_2594_1251">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),

    file_check_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M6.25 9.25L7.75 11.25L10.25 7.25"
          stroke="#254E5F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g filter="url(#filter0_i_1427_439)">
          <path
            d="M2.75 2C2.75 1.30964 3.30964 0.75 4 0.75H9.51938C9.59532 0.75 9.66715 0.784522 9.71459 0.843827L13.1952 5.19461C13.2307 5.23894 13.25 5.29401 13.25 5.35078V14C13.25 14.6904 12.6904 15.25 12 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14V2Z"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <path
          d="M10 5V0.121094L10.2031 0.25L13.8281 4.76562L13.9414 5H10Z"
          fill="#254E5F"
          stroke="#254E5F"
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <filter
            id="filter0_i_1427_439"
            x="2"
            y="0"
            width="12"
            height="17"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_1427_439"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1427_439"
            x1="2"
            y1="16"
            x2="17.36"
            y2="4.48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3C9F83" />
            <stop offset="1" stopColor="#4BA1A5" />
          </linearGradient>
        </defs>
      </svg>
    ),

    file_default_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M5.75 8.25H10.25M5.75 5H8.25M5.75 11.5H10.246"
          stroke="#254E5F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.75 2C2.75 1.30964 3.30964 0.75 4 0.75H9.51938C9.59532 0.75 9.66715 0.784522 9.71459 0.843827L13.1952 5.19461C13.2307 5.23894 13.25 5.29401 13.25 5.35078V14C13.25 14.6904 12.6904 15.25 12 15.25H4C3.30964 15.25 2.75 14.6904 2.75 14V2Z"
          strokeWidth="1.5"
        />
        <path
          d="M10 5V0.121094L10.063 0.161085C10.1558 0.219959 10.2382 0.29372 10.307 0.379404L13.757 4.67705C13.8043 4.73591 13.8447 4.79993 13.8776 4.86789L13.9414 5H10Z"
          fill="#254E5F"
          stroke="#254E5F"
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    catalog_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          fill="#254E5F"
          stroke="none"
          d="M3.502 6.25a.75.75 0 0 0-1.5 0h1.5Zm-1.5 0v7h1.5v-7h-1.5ZM4.752 16h7.996v-1.5H4.752V16Zm9.245-1.25v-8.5h-1.5v8.5h1.5ZM12.748 16c.69 0 1.25-.56 1.25-1.25h-1.5a.25.25 0 0 1 .25-.25V16ZM2.003 13.25A2.75 2.75 0 0 0 4.752 16v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Z"
        />
        <path
          strokeWidth="1.5"
          d="M2.75 2.75a2 2 0 0 1 2-2h8a.5.5 0 0 1 .5.5v10.5a.5.5 0 0 1-.5.5h-8a2 2 0 0 1-2-2v-7.5Z"
        />
      </svg>
    ),
    user_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          stroke="#254E5F"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M9.455 9.298a4 4 0 0 1 4 4v1.355"
        />
        <path
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M2.748 14.653v-1.355a4 4 0 0 1 4-4h2.758c1.055 0 2.063.436 2.786 1.204M10.75 3.548a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z"
        />
      </svg>
    ),
    users_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <g strokeLinecap="round" strokeWidth="1.5" clipPath="url(#a)">
          <path
            stroke="#254E5F"
            d="M11.49 14.653v-1.355a4 4 0 0 0-4-4m7.763 5.355v-1.355A3.996 3.996 0 0 0 13.517 10M11 6.162A2.751 2.751 0 0 0 11 1"
          />
          <path d="M.796 14.653v-1.355a4 4 0 0 1 4-4h2.76c1.054 0 2.062.436 2.785 1.204M8.799 3.548a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
    logout: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          stroke="#254E5F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5.25 12.5.75 8l4.5-4.5m5 4.502H.751"
        />
        <path
          stroke="#D12E34"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11.75 1.75h1.5a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-1.5"
        />
      </svg>
    ),
    controls: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          fillRule="evenodd"
          d="M.938 4.344a.75.75 0 0 1 .75-.75h1.937a.75.75 0 0 1 0 1.5H1.687a.75.75 0 0 1-.75-.75Zm6 0a.75.75 0 0 1 .75-.75h7.062a.75.75 0 0 1 0 1.5H7.687a.75.75 0 0 1-.75-.75ZM9.5 11.64a.75.75 0 0 1-.75.75H1.687a.75.75 0 0 1 0-1.5H8.75a.75.75 0 0 1 .75.75Zm6 0a.75.75 0 0 1-.75.75h-1.938a.75.75 0 0 1 0-1.5h1.938a.75.75 0 0 1 .75.75Z"
          clipRule="evenodd"
        />
        <path
          fill="#254E5F"
          fillRule="evenodd"
          d="M4.438 4.344a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Zm1.25-2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM12 11.64a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-1.25 2.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    bell_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          stroke="#254E5F"
          strokeWidth="1.5"
          d="M4.75 14s-.008 1.25 1.246 1.25M7.25 14s0 1.25-1.254 1.25m0 0V14"
        />
        <path
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.273 1.184c0 .172.727.156.727.156s.726.016.726-.156c0-.077-.214-.434-.726-.434s-.727.353-.727.434ZM11.967 8.262c.61.92 1.726 1.634 1.555 2.725a41.842 41.842 0 0 1-.218 1.263H2.803s-.106-.57-.212-1.262c-.166-1.092.962-1.817 1.536-2.76 1.14-1.871-1.3-6.488 3.926-6.488 5.26 0 2.687 4.676 3.914 6.522Z"
        />
      </svg>
    ),
    question_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          stroke="#254E5F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.9"
          d="M8 14.867v.01"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3.82 5.298a4.175 4.175 0 1 1 4.176 4.176v2.396"
        />
      </svg>
    ),
    list_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <g clipPath="url(#clip0_2994_1092)">
          <path
            d="M1.18091 3.74H1.19091"
            stroke="#254E5F"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4.93091 3.75H15.4309"
            stroke="#254E5F"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M1.18091 8H1.19091M1.18091 12.25H1.19091"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4.93091 8H15.4309M4.93091 12.25H15.4309"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2994_1092">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0.180908)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    x_cross_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M8.70758 7.46967L8.17725 6.93934L7.11659 8L7.64692 8.53033L8.70758 7.46967ZM12.7734 13.6569C13.0663 13.9497 13.5412 13.9497 13.8341 13.6569C14.127 13.364 14.127 12.8891 13.8341 12.5962L12.7734 13.6569ZM7.64692 8.53033L12.7734 13.6569L13.8341 12.5962L8.70758 7.46967L7.64692 8.53033Z"
          fill="#254E5F"
        />
        <path
          d="M13.127 2.88L2.88002 13.127M2.88 2.88001L7.83593 7.83594"
          stroke="#D12E34"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    circle_question_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_175_591)">
          <path
            d="M5.75 6.495C5.75 5.25235 6.75736 4.245 8 4.24499C9.24264 4.24499 10.25 5.25235 10.25 6.49499C10.25 7.73764 9.24264 8.74499 8 8.74499L8 9.49759"
            stroke="#254E5F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="8"
            cy="8"
            r="7.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 11.745L8 11.755"
            stroke="#254E5F"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_175_591">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    mail_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_175_584)">
          <path
            d="M15 3L9.30158 7.88436C8.5526 8.52634 7.4474 8.52634 6.69842 7.88436L1 3"
            stroke="#254E5F"
            strokeWidth="1.5"
          />
          <rect
            x="0.75"
            y="0.75"
            width="10.5"
            height="14.5"
            rx="1.25"
            transform="matrix(-4.37114e-08 1 1 4.37114e-08 -3.27835e-08 2)"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_175_584">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 16 0)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    download_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_175_522)">
          <path
            d="M12.5049 6.75004L8.00488 11.25L3.50488 6.75005M8.00726 0.750021L8.00726 11.249"
            stroke="#254E5F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.75 10.75L0.75 13.25C0.75 14.3546 1.64543 15.25 2.75 15.25L13.2549 15.25C14.3594 15.25 15.2549 14.3546 15.2549 13.25L15.2549 10.75"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_175_522">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    download_high: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_175_18319)">
          <path
            d="M3.75 0.9375H2.1875C1.49714 0.9375 0.9375 1.49714 0.9375 2.1875V17.8125C0.9375 18.5029 1.49714 19.0625 2.1875 19.0625H17.8125C18.5029 19.0625 19.0625 18.5029 19.0625 17.8125V2.1875C19.0625 1.49714 18.5029 0.9375 17.8125 0.9375H16.25M13.76 8.75L10.01 12.5M10.01 12.5L10.005 1.25M10.01 12.5L6.25998 8.75"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_175_18319">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    copy_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.25 12.75V13.25C9.25 13.8023 8.80228 14.25 8.25 14.25H2.75C2.19772 14.25 1.75 13.8023 1.75 13.25V7.75C1.75 7.19772 2.1977 6.75 2.74998 6.75C2.9005 6.75 3.06733 6.75 3.25 6.75"
          stroke="#254E5F"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
        <path
          d="M6.75 2.75C6.75 2.19772 7.19772 1.75 7.75 1.75H13.25C13.8023 1.75 14.25 2.19772 14.25 2.75V8.25C14.25 8.80228 13.8023 9.25 13.25 9.25H7.75C7.19772 9.25 6.75 8.80228 6.75 8.25V2.75Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    plus_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_175_19604)">
          <path
            d="M10.003 0.942871L10.003 19.0571M19.0601 9.99997L0.945862 10"
            stroke="#254E5F"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10.003 0.942871V9.99999M19.0601 9.99997L0.945862 10"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    ),
    headphones_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_175_579)">
          <path
            d="M14 7C14 3.68629 11.3137 1 8 0.999999C4.68629 0.999999 2 3.68629 2 7M14 10C14 16 11 15 7 15"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15.5 7C15.5 6.17157 14.8284 5.5 14 5.5C13.7239 5.5 13.5 5.72386 13.5 6L13.5 11C13.5 11.2761 13.7239 11.5 14 11.5C14.8284 11.5 15.5 10.8284 15.5 10L15.5 7ZM7 14.5C6.72386 14.5 6.5 14.7239 6.5 15C6.5 15.2761 6.72386 15.5 7 15.5L9 15.5C9.27614 15.5 9.5 15.2761 9.5 15C9.5 14.7239 9.27614 14.5 9 14.5L7 14.5ZM2 5.5C1.17157 5.5 0.5 6.17157 0.5 7L0.5 10C0.499999 10.8284 1.17157 11.5 2 11.5C2.27614 11.5 2.5 11.2761 2.5 11L2.5 6C2.5 5.72386 2.27614 5.5 2 5.5Z"
            fill="#254E5F"
            stroke="#254E5F"
          />
        </g>
        <defs>
          <clipPath id="clip0_175_579">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 16 0)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    chat_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_175_599)">
          <path
            d="M4.99854 5.5L4.99954 5.5M7.99954 5.5L8.00054 5.5M11.0005 5.5L11.0015 5.5"
            stroke="#254E5F"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.754618 8.99657L0.754619 13.9281C0.754619 13.9285 0.754882 13.9289 0.755277 13.929L0.755727 13.9292C0.756123 13.9293 0.756565 13.9292 0.756835 13.9289L3.54076 10.6069C3.73076 10.3801 4.0114 10.2492 4.30721 10.2492L13.95 10.2492C14.668 10.2492 15.25 9.66713 15.25 8.94916L15.25 2.04768C15.25 1.32971 14.668 0.747679 13.95 0.74768L2.05 0.747681C1.33203 0.747681 0.75 1.32971 0.75 2.04768L0.754618 8.99657Z"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_175_599">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),

    archive_secondary: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.25 7.75H6.75"
          stroke="#254E5F"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M15.25 13.55V5.45C15.25 5.0634 14.9366 4.75 14.55 4.75H6.25L5.44348 3.13695C5.3249 2.8998 5.08252 2.75 4.81738 2.75H1.45C1.0634 2.75 0.75 3.0634 0.75 3.45V13.55C0.75 13.9366 1.0634 14.25 1.45 14.25H14.55C14.9366 14.25 15.25 13.9366 15.25 13.55Z"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),

    cash: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 16"
        fill="none"
      >
        <g clipPath="url(#clip0_1659_457)">
          <path d="M14.6137 5.40925C15.028 5.40925 15.3637 5.07346 15.3637 4.65925C15.3637 4.24504 15.028 3.90925 14.6137 3.90925V5.40925ZM4.02789 3.90925C3.61368 3.90925 3.27789 4.24504 3.27789 4.65925C3.27789 5.07346 3.61368 5.40925 4.02789 5.40925V3.90925ZM2.67695 3.13232H13.352V1.63232H2.67695V3.13232ZM13.352 12.8678H2.67695V14.3678H13.352V12.8678ZM2.12695 12.3178V3.68232H0.626953V12.3178H2.12695ZM13.902 9.70312V12.3178H15.402V9.70312H13.902ZM13.902 3.68232V7.70312H15.402V3.68232H13.902ZM2.67695 12.8678C2.3732 12.8678 2.12695 12.6216 2.12695 12.3178H0.626953C0.626953 13.45 1.54477 14.3678 2.67695 14.3678V12.8678ZM13.352 14.3678C14.4842 14.3678 15.402 13.45 15.402 12.3178H13.902C13.902 12.6216 13.6558 12.8678 13.352 12.8678V14.3678ZM13.352 3.13232C13.6558 3.13232 13.902 3.37857 13.902 3.68232H15.402C15.402 2.55014 14.4842 1.63232 13.352 1.63232V3.13232ZM2.67695 1.63232C1.54477 1.63232 0.626953 2.55014 0.626953 3.68232H2.12695C2.12695 3.37857 2.3732 3.13232 2.67695 3.13232V1.63232ZM14.6137 3.90925H4.02789V5.40925H14.6137V3.90925Z" />
          <path
            d="M11.9341 7.75398C11.9341 7.58829 12.0684 7.45398 12.2341 7.45398H15.5264C15.6921 7.45398 15.8264 7.58829 15.8264 7.75398V9.65398C15.8264 9.81966 15.6921 9.95398 15.5264 9.95398H12.2341C12.0684 9.95398 11.9341 9.81966 11.9341 9.65398V7.75398Z"
            stroke={strokeSecond}
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_1659_457">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0.595703)"
            />
          </clipPath>
        </defs>
      </svg>
    ),

    cash_filled: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 16"
        fill="none"
      >
        <g clipPath="url(#clip0_1659_456)">
          <path
            d="M13.352 2.38232H2.67695C1.95898 2.38232 1.37695 2.96435 1.37695 3.68232V12.3178C1.37695 13.0358 1.95898 13.6178 2.67695 13.6178H13.352C14.07 13.6178 14.652 13.0358 14.652 12.3178V6.70312V3.68232C14.652 2.96435 14.07 2.38232 13.352 2.38232Z"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15.4003 4H4.02783"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M11.9341 7.75398C11.9341 7.58829 12.0684 7.45398 12.2341 7.45398H15.5264C15.6921 7.45398 15.8264 7.58829 15.8264 7.75398V9.65398C15.8264 9.81966 15.6921 9.95398 15.5264 9.95398H12.2341C12.0684 9.95398 11.9341 9.81966 11.9341 9.65398V7.75398Z"
            fill="#254E5F"
            stroke="#254E5F"
          />
        </g>
        <defs>
          <clipPath id="clip0_1659_456">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0.595703)"
            />
          </clipPath>
        </defs>
      </svg>
    ),

    doc_check: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path d="M4 2.66667C4 1.19391 5.19391 0 6.66667 0H19.3592C19.7642 0 20.1473 0.18412 20.4003 0.500407L27.7078 9.63478C27.897 9.8712 28 10.1649 28 10.4677V29.3333C28 30.8061 26.8061 32 25.3333 32H6.66667C5.19391 32 4 30.8061 4 29.3333V2.66667Z" />
        <path
          d="M11 17.5L15 22.5L22 13.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 9.33333V0.242188L20.2194 0.381446C20.3431 0.459945 20.453 0.558294 20.5448 0.672538L27.5614 9.41315C27.6244 9.49163 27.6784 9.57699 27.7222 9.66761L27.8828 10H20.6667C20.2985 10 20 9.70152 20 9.33333Z"
          fill="#254E5F"
        />
      </svg>
    ),

    doc_location: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 32"
        fill="none"
      >
        <path d="M4.33301 2.66667C4.33301 1.19391 5.52692 0 6.99967 0H19.6922C20.0972 0 20.4803 0.18412 20.7333 0.500407L28.0408 9.63478C28.23 9.8712 28.333 10.1649 28.333 10.4677V29.3333C28.333 30.8061 27.1391 32 25.6663 32H6.99967C5.52691 32 4.33301 30.8061 4.33301 29.3333V2.66667Z" />
        <path
          d="M20.333 9.33333V0.242188L20.5524 0.381446C20.6761 0.459945 20.7861 0.558294 20.8778 0.672538L27.8945 9.41315C27.9575 9.49163 28.0114 9.57699 28.0552 9.66761L28.2158 10H20.9997C20.6315 10 20.333 9.70152 20.333 9.33333Z"
          fill="#254E5F"
        />
        <path
          d="M21.6667 17.2788C21.6667 19.8443 17.752 24.7993 16.6304 26.1665C16.4743 26.3567 16.1923 26.3567 16.0363 26.1665C14.9146 24.7993 11 19.8443 11 17.2788C11 14.2842 13.3878 11.8567 16.3333 11.8567C19.2789 11.8567 21.6667 14.2842 21.6667 17.2788Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="16.3327"
          cy="17.1901"
          r="0.666667"
          fill="white"
          stroke="white"
          strokeWidth="1.86667"
        />
      </svg>
    ),

    doc_lines: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 32"
        fill="none"
      >
        <path d="M4.66699 2.66667C4.66699 1.19391 5.8609 0 7.33366 0H20.0262C20.4312 0 20.8143 0.18412 21.0673 0.500407L28.3748 9.63478C28.564 9.8712 28.667 10.1649 28.667 10.4677V29.3333C28.667 30.8061 27.4731 32 26.0003 32H7.33366C5.8609 32 4.66699 30.8061 4.66699 29.3333V2.66667Z" />
        <path
          d="M20.667 9.33333V0.242188L20.8864 0.381446C21.0101 0.459945 21.12 0.558294 21.2118 0.672538L28.2284 9.41315C28.2914 9.49163 28.3454 9.57699 28.3891 9.66761L28.5498 10H21.3337C20.9655 10 20.667 9.70152 20.667 9.33333Z"
          fill="#254E5F"
        />
        <path
          d="M12.167 16.5H21.167M12.167 10H17.167M12.167 23H21.1589"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    doc_rudder: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path d="M4 2.66667C4 1.19391 5.19391 0 6.66667 0H19.3592C19.7642 0 20.1473 0.18412 20.4003 0.500407L27.7078 9.63478C27.897 9.8712 28 10.1649 28 10.4677V29.3333C28 30.8061 26.8061 32 25.3333 32H6.66667C5.19391 32 4 30.8061 4 29.3333V2.66667Z" />
        <path
          d="M20 9.33333V0.242188L20.2194 0.381446C20.3431 0.459945 20.453 0.558294 20.5448 0.672538L27.5614 9.41315C27.6244 9.49163 27.6784 9.57699 27.7222 9.66761L27.8828 10H20.6667C20.2985 10 20 9.70152 20 9.33333Z"
          fill="#254E5F"
        />
        <rect
          x="8.33301"
          y="12.0066"
          width="15.3333"
          height="15.3333"
          rx="7.66667"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M16 12.3398L16 17.0065" stroke="white" strokeWidth="2" />
        <path d="M16 21.6731L16 26.3398" stroke="white" strokeWidth="2" />
        <path
          d="M8.33301 19.6731L12.9997 19.6731"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M19 19.6731L23.6667 19.6731" stroke="white" strokeWidth="2" />
        <rect
          x="13.667"
          y="17.3398"
          width="4.66667"
          height="4.66667"
          rx="2.33333"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    ),

    doc_plus: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 32"
        fill="none"
      >
        <path d="M4.33301 2.66667C4.33301 1.19391 5.52692 0 6.99967 0H19.6922C20.0972 0 20.4803 0.18412 20.7333 0.500407L28.0408 9.63478C28.23 9.8712 28.333 10.1649 28.333 10.4677V29.3333C28.333 30.8061 27.1391 32 25.6663 32H6.99967C5.52691 32 4.33301 30.8061 4.33301 29.3333V2.66667Z" />
        <path
          d="M20.333 9.33333V0.242188L20.5524 0.381446C20.6761 0.459945 20.7861 0.558294 20.8778 0.672538L27.8945 9.41315C27.9575 9.49163 28.0114 9.57699 28.0552 9.66761L28.2158 10H20.9997C20.6315 10 20.333 9.70152 20.333 9.33333Z"
          fill="#254E5F"
        />
        <path
          d="M9.84082 18H22.8328M16.3369 11.5L16.3369 24.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    doc_cargo: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 33 32"
      >
        <path d="M4.667 2.667A2.667 2.667 0 0 1 7.334 0h12.692c.405 0 .788.184 1.041.5l7.308 9.135c.189.236.292.53.292.833v18.865A2.667 2.667 0 0 1 26 32H7.334a2.667 2.667 0 0 1-2.667-2.667V2.667Z" />
        <path
          fill="#254E5F"
          d="M20.667 9.333V.243l.22.138c.123.079.233.177.325.292l7.016 8.74c.063.079.117.164.161.255l.16.332h-7.215a.667.667 0 0 1-.667-.667Z"
        />
        <mask id="a" fill="#fff">
          <rect
            width="13.714"
            height="13.714"
            x="9.811"
            y="12.572"
            rx="1.143"
          />
        </mask>
        <rect
          width="13.714"
          height="13.714"
          x="9.811"
          y="12.572"
          stroke="#fff"
          strokeWidth="4"
          mask="url(#a)"
          rx="1.143"
        />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.662 25.353V14.075M18.662 25.353V14.075"
        />
      </svg>
    ),

    load: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clipPath="url(#clip0_1383_113)">
          <path
            d="M8 15C11.866 15 15 11.866 15 8.00001C15 7.30504 14.8987 6.63372 14.7101 6.00001"
            stroke={strokeSecond}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 15C4.13401 15 1 11.866 1 7.99998C1 4.13398 4.13401 0.999977 8 0.999977C9.48725 0.999977 10.8662 1.46379 12 2.25467"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1383_113">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),

    integration_edo_onec: (
      <svg
        style={style}
        className={clsName}
        width={width || '100%'}
        height={height || '100%'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 86 86"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.32 58.5281C14.8682 58.7967 14.7117 59.3674 14.8694 59.8688C15.2733 61.1522 15.2033 62.547 14.5132 63.7422L12.1122 67.901C11.7394 68.5467 11.9606 69.3723 12.6063 69.7451L20.0108 74.0201C20.6565 74.3929 21.4822 74.1717 21.855 73.526L24.2544 69.37C25.2909 67.5748 27.4166 66.766 29.4708 67.0445C31.547 67.326 33.6671 67.3333 35.7738 67.051C37.8293 66.7755 39.9564 67.5837 40.9933 69.3797L43.3872 73.5259C43.76 74.1716 44.5856 74.3928 45.2313 74.02L52.6358 69.745C53.2815 69.3723 53.5027 68.5466 53.1299 67.9009L50.7363 63.7549C50.2694 62.9463 50.0865 62.0465 50.142 61.1516C50.1684 60.7265 49.9886 60.3016 49.6215 60.0855L37.5791 52.9939C37.2882 52.8226 36.9316 52.8131 36.6215 52.9466C33.4793 54.2997 29.9417 53.9389 27.177 52.1773C26.8385 51.9617 26.4068 51.9367 26.0619 52.1418L15.32 58.5281Z"
          fill="#797CA4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1121 19.356C11.7393 18.7103 11.9606 17.8847 12.6063 17.5119L20.0108 13.2369C20.6565 12.8641 21.4821 13.0853 21.8549 13.731L24.2607 17.8979C25.2976 19.694 27.4248 20.5021 29.4803 20.2266C31.581 19.945 33.6951 19.9514 35.7657 20.2305C37.8186 20.5072 39.9421 19.6982 40.9778 17.9043L43.3872 13.7311C43.76 13.0854 44.5856 12.8641 45.2313 13.2369L52.6358 17.5119C53.2815 17.8847 53.5028 18.7104 53.13 19.3561L50.7275 23.5172C50.3664 24.1426 50.1751 24.8226 50.1327 25.5127C50.1096 25.8871 49.9305 26.2438 49.6081 26.4355L36.8752 34.0056C36.6061 34.1656 36.2786 34.1873 35.9832 34.0837C33.294 33.1406 30.225 33.3319 27.5635 34.8685C23.249 37.3595 21.4608 42.5457 23.0977 47.0725C23.2724 47.5555 23.107 48.1084 22.6655 48.3709L12.7207 54.2834C12.2315 54.5742 11.5967 54.3996 11.3492 53.8871C11.1446 53.4634 10.9537 53.0361 10.7765 52.6059C9.98725 50.6895 8.22425 49.2534 6.15172 49.2534H1.34614C0.600556 49.2534 -0.0038597 48.649 -0.00386047 47.9034L-0.00385931 39.3534C-0.0038596 38.6079 0.600556 38.0034 1.34614 38.0034H6.16535C8.23682 38.0034 9.99922 36.569 10.786 34.6528C11.5795 32.7201 12.6309 30.8862 13.925 29.2077C15.1913 27.5654 15.555 25.3192 14.5181 23.5232L12.1121 19.356Z"
          fill="#EEAF41"
        />
        <path d="M31 43.3339L86 75.5V10.5L31 43.3339Z" fill="#254E5F" />
      </svg>
    ),
  } as IconType;
};
