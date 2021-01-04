import React from "react";

const Logo = (props) => {
  return (
    <div className={props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="314"
        height="314"
        viewBox="0 0 650 650"
      >
        <defs>
          <radialGradient
            id="ascension-c"
            cx="50%"
            cy="0%"
            r="95.315%"
            fx="50%"
            fy="0%"
          >
            <stop offset="0%" stopColor="#6B6B6B" />
            <stop offset="100%" stopColor="#393939" />
          </radialGradient>
          <rect
            id="ascension-b"
            width="570"
            height="570"
            x="0"
            y="0"
            rx="285"
          />
          <filter
            id="ascension-a"
            width="108.9%"
            height="109.5%"
            x="-4.5%"
            y="-2.4%"
            filterUnits="objectBoundingBox"
          >
            <feOffset dy="15" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="6"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.22 0"
            />
          </filter>
          <linearGradient id="ascension-f" x1="50%" x2="50%" y1="50%" y2="100%">
            <stop offset="0%" stopColor="#FFF" />
            <stop offset="100%" stopColor="#E6C08D" />
          </linearGradient>
          <circle id="ascension-e" cx="77.605" cy="77.605" r="77.605" />
          <filter
            id="ascension-d"
            width="112.9%"
            height="112.9%"
            x="-6.4%"
            y="-5.2%"
            filterUnits="objectBoundingBox"
          >
            <feMorphology
              in="SourceAlpha"
              radius="1"
              result="shadowSpreadOuter1"
            />
            <feOffset
              dy="2"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="4"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            />
          </filter>
          <radialGradient
            id="ascension-i"
            cx="50%"
            cy="0%"
            r="102.77%"
            fx="50%"
            fy="0%"
            gradientTransform="matrix(0 .96063 -1 0 .5 -.48)"
          >
            <stop offset="0%" stopColor="#F2DCC1" />
            <stop offset="100%" stopColor="#ECBB7E" />
          </radialGradient>
          <ellipse
            id="ascension-h"
            cx="77.605"
            cy="78.073"
            rx="57.035"
            ry="59.373"
          />
          <filter
            id="ascension-g"
            width="104.4%"
            height="105.1%"
            x="-2.2%"
            y="-1.3%"
            filterUnits="objectBoundingBox"
          >
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius=".5"
              result="shadowSpreadOuter1"
            />
            <feOffset
              dy="2"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            />
            <feColorMatrix
              in="shadowOffsetOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            />
          </filter>
          <linearGradient
            id="ascension-j"
            x1="99.898%"
            x2="103.553%"
            y1="214.827%"
            y2="-59.067%"
          >
            <stop offset="0%" stopColor="#D6D6D6" />
            <stop offset="100%" stopColor="snow" />
          </linearGradient>
          <linearGradient id="ascension-m" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FAF0E2" />
            <stop offset="100%" stopColor="#F2DCC1" />
          </linearGradient>
          <path
            id="ascension-l"
            d="M121.247175,33.6699807 C121.024734,46.8983215 121.470132,54.7436214 122.583369,57.2058806 C122.583369,57.2058806 105.664105,57.2058806 71.8255787,57.2058806 L121.247175,33.6699807 Z"
          />
          <filter
            id="ascension-k"
            width="126.5%"
            height="179.9%"
            x="-7.9%"
            y="-28.9%"
            filterUnits="objectBoundingBox"
          >
            <feMorphology
              in="SourceAlpha"
              radius="1"
              result="shadowSpreadOuter1"
            />
            <feOffset
              dy="2"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="4"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            />
          </filter>
          <linearGradient id="ascension-p" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FBEDD8" />
            <stop offset="100%" stopColor="#F6D7B0" />
          </linearGradient>
          <path
            id="ascension-o"
            d="M-2.65742983e-14,76.6977673 L127.400362,76.6977673 C129.990907,86.2922032 133.307905,93.4522235 137.351358,98.1778283 C137.351358,98.1778283 129.194775,102.943218 112.881611,112.473998 C78.2720502,93.2072766 53.2399361,90.7904955 37.7852686,105.223655 C37.7852686,105.223655 25.1901791,95.7150256 -2.65742983e-14,76.6977673 Z"
          />
          <filter
            id="ascension-n"
            width="110.9%"
            height="155.1%"
            x="-4.4%"
            y="-22.4%"
            filterUnits="objectBoundingBox"
          >
            <feMorphology
              in="SourceAlpha"
              radius="1"
              result="shadowSpreadOuter1"
            />
            <feOffset
              dy="2"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="4"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            />
          </filter>
          <linearGradient
            id="ascension-q"
            x1="469.716%"
            x2="500.459%"
            y1="214.827%"
            y2="-59.067%"
          >
            <stop offset="0%" stopColor="#D6D6D6" />
            <stop offset="100%" stopColor="snow" />
          </linearGradient>
          <linearGradient
            id="ascension-r"
            x1="584.639%"
            x2="623.8%"
            y1="212.401%"
            y2="-57.462%"
          >
            <stop offset="0%" stopColor="#D6D6D6" />
            <stop offset="100%" stopColor="snow" />
          </linearGradient>
          <linearGradient id="ascension-u" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#F5E4C7" />
            <stop offset="100%" stopColor="#E7C496" />
          </linearGradient>
          <path
            id="ascension-t"
            d="M146.997123,110.510103 C153.7749,119.408251 159.933444,125.301897 165.472755,128.191041 C165.472755,128.191041 162.018909,133.024896 155.111217,142.692605 C141.273495,133.395082 133.056325,127.300096 130.459706,124.407645 C130.459706,124.407645 135.972178,119.775131 146.997123,110.510103 Z"
          />
          <filter
            id="ascension-s"
            width="151.8%"
            height="157.1%"
            x="-25.8%"
            y="-22.2%"
            filterUnits="objectBoundingBox"
          >
            <feMorphology
              in="SourceAlpha"
              radius="1"
              result="shadowSpreadOuter1"
            />
            <feOffset
              dy="2"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="4"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            />
          </filter>
          <linearGradient
            id="ascension-v"
            x1="584.639%"
            x2="623.8%"
            y1="115.791%"
            y2="6.466%"
          >
            <stop offset="0%" stopColor="#D6D6D6" />
            <stop offset="100%" stopColor="snow" />
          </linearGradient>
          <linearGradient id="ascension-y" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#F2E1C4" />
            <stop offset="100%" stopColor="#E1BF92" />
          </linearGradient>
          <path
            id="ascension-x"
            d="M178.898621,137.36289 C187.87873,142.948557 195.129822,145.990891 200.651899,146.489894 C200.651899,146.489894 197.28842,157.17722 190.56146,178.551872 C181.117615,165.915464 174.108388,158.304906 169.533778,155.720199 C169.533778,155.720199 172.655392,149.601096 178.898621,137.36289 Z"
          />
          <filter
            id="ascension-w"
            width="160.4%"
            height="141%"
            x="-30.2%"
            y="-17.4%"
            filterUnits="objectBoundingBox"
          >
            <feMorphology
              in="SourceAlpha"
              radius="1"
              result="shadowSpreadOuter1"
            />
            <feOffset
              dy="2"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="4"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            />
          </filter>
          <linearGradient id="ascension-B" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FAF0E2" />
            <stop offset="100%" stopColor="#F2DCC1" />
          </linearGradient>
          <path
            id="ascension-A"
            d="M121.247175,33.6699807 C121.024734,46.8983215 121.470132,54.7436214 122.583369,57.2058806 C122.583369,57.2058806 105.664105,57.2058806 71.8255787,57.2058806 L121.247175,33.6699807 Z"
          />
          <filter
            id="ascension-z"
            width="126.5%"
            height="179.9%"
            x="-7.9%"
            y="-28.9%"
            filterUnits="objectBoundingBox"
          >
            <feMorphology
              in="SourceAlpha"
              radius="1"
              result="shadowSpreadOuter1"
            />
            <feOffset
              dy="2"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="4"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            />
          </filter>
          <path
            id="ascension-D"
            d="M-2.65742983e-14,76.6977673 L127.400362,76.6977673 C129.990907,86.2922032 133.307905,93.4522235 137.351358,98.1778283 C137.351358,98.1778283 129.194775,102.943218 112.881611,112.473998 C78.2720502,93.2072766 53.2399361,90.7904955 37.7852686,105.223655 C37.7852686,105.223655 25.1901791,95.7150256 -2.65742983e-14,76.6977673 Z"
          />
          <filter
            id="ascension-C"
            width="110.9%"
            height="155.1%"
            x="-4.4%"
            y="-22.4%"
            filterUnits="objectBoundingBox"
          >
            <feMorphology
              in="SourceAlpha"
              radius="1"
              result="shadowSpreadOuter1"
            />
            <feOffset
              dy="2"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="4"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            />
          </filter>
          <path
            id="ascension-F"
            d="M146.997123,110.510103 C153.7749,119.408251 159.933444,125.301897 165.472755,128.191041 C165.472755,128.191041 162.018909,133.024896 155.111217,142.692605 C141.273495,133.395082 133.056325,127.300096 130.459706,124.407645 C130.459706,124.407645 135.972178,119.775131 146.997123,110.510103 Z"
          />
          <filter
            id="ascension-E"
            width="151.8%"
            height="157.1%"
            x="-25.8%"
            y="-22.2%"
            filterUnits="objectBoundingBox"
          >
            <feMorphology
              in="SourceAlpha"
              radius="1"
              result="shadowSpreadOuter1"
            />
            <feOffset
              dy="2"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="4"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            />
          </filter>
          <path
            id="ascension-H"
            d="M178.898621,137.36289 C187.87873,142.948557 195.129822,145.990891 200.651899,146.489894 C200.651899,146.489894 197.28842,157.17722 190.56146,178.551872 C181.117615,165.915464 174.108388,158.304906 169.533778,155.720199 C169.533778,155.720199 172.655392,149.601096 178.898621,137.36289 Z"
          />
          <filter
            id="ascension-G"
            width="160.4%"
            height="141%"
            x="-30.2%"
            y="-17.4%"
            filterUnits="objectBoundingBox"
          >
            <feMorphology
              in="SourceAlpha"
              radius="1"
              result="shadowSpreadOuter1"
            />
            <feOffset
              dy="2"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="4"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            />
          </filter>
          <linearGradient
            id="ascension-I"
            x1="584.639%"
            x2="623.8%"
            y1="61.993%"
            y2="42.064%"
          >
            <stop offset="0%" stopColor="#D6D6D6" />
            <stop offset="100%" stopColor="snow" />
          </linearGradient>
          <linearGradient id="ascension-L" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#E3D1B2" />
            <stop offset="100%" stopColor="#C3A47B" />
          </linearGradient>
          <path
            id="ascension-K"
            d="M250.486685,185.13 C250.486685,185.13 253.271669,203.505864 258.841636,240.257591 C249.680532,248.240317 245.099979,261.567664 245.099979,280.239631 C245.099979,290.132779 247.330481,297.365353 251.791486,301.937355 L233.736365,443.884512 L233.673,442.915 L233.610271,443.884512 L215.555151,301.937355 C220.016155,297.365353 222.246657,290.132779 222.246657,280.239631 C222.246657,261.567664 217.666105,248.240317 208.505,240.257591 C214.074968,203.505864 216.859952,185.13 216.859952,185.13 C216.880613,185.13367 216.901274,185.137333 216.921935,185.140989 L216.92,185.13 C217.646325,185.262844 218.373364,185.386937 219.101115,185.502277 C223.989599,186.25744 228.846885,186.637429 233.673597,186.642245 C238.510278,186.637414 243.378128,186.255786 248.276683,185.497361 C248.993912,185.383412 249.710621,185.260959 250.426636,185.13 L250.426636,185.13 L250.42564,185.140823 C250.445988,185.137222 250.466336,185.133614 250.486685,185.13 Z"
          />
          <filter
            id="ascension-J"
            width="139.2%"
            height="104.5%"
            x="-19.6%"
            y="-3%"
            filterUnits="objectBoundingBox"
          >
            <feMorphology
              in="SourceAlpha"
              radius="1"
              result="shadowSpreadOuter1"
            />
            <feOffset
              dy="2"
              in="shadowSpreadOuter1"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="4"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            />
          </filter>
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(15 15)">
          <use
            fill="#000"
            filter="url(#ascension-a)"
            xlinkHref="#ascension-b"
          />
          <use fill="url(#ascension-c)" xlinkHref="#ascension-b" />
          <g transform="translate(52 63)">
            <g transform="translate(155.992)">
              <use
                fill="#000"
                filter="url(#ascension-d)"
                xlinkHref="#ascension-e"
              />
              <use fill="url(#ascension-f)" xlinkHref="#ascension-e" />
              <use
                fill="#000"
                filter="url(#ascension-g)"
                xlinkHref="#ascension-h"
              />
              <use fill="url(#ascension-i)" xlinkHref="#ascension-h" />
            </g>
            <g transform="translate(0 35.141)">
              <path
                fill="url(#ascension-j)"
                d="M146.997123,2.65742983e-14 C138.835724,19.6403433 136.55837,38.7089701 140.16506,57.2058806 C140.16506,57.2058806 137.47524,57.2058806 132.0956,57.2058806 C129.028365,45.2684376 128.701441,34.6673047 131.114829,25.4024819 C133.528217,16.137659 138.822314,7.67016503 146.997123,2.65742983e-14 Z"
              />
              <use
                fill="#000"
                filter="url(#ascension-k)"
                xlinkHref="#ascension-l"
              />
              <use fill="url(#ascension-m)" xlinkHref="#ascension-l" />
              <use
                fill="#000"
                filter="url(#ascension-n)"
                xlinkHref="#ascension-o"
              />
              <use fill="url(#ascension-p)" xlinkHref="#ascension-o" />
              <path
                fill="url(#ascension-q)"
                d="M146.476214,76.6977673 C148.951218,82.8929804 151.075143,86.8984459 152.847988,88.7141636 C152.847988,88.7141636 150.897699,90.0103881 146.997123,92.6028372 C141.502808,83.14716 138.755651,77.84547 138.755651,76.6977673 C138.755651,76.6977673 141.329172,76.6977673 146.476214,76.6977673 Z"
              />
              <path
                fill="url(#ascension-r)"
                d="M155.111217,103.889275 C158.669252,100.962405 160.44827,99.4989698 160.44827,99.4989698 C160.44827,99.4989698 171.525362,112.609491 175.834293,114.508303 C175.834293,114.508303 174.182567,116.361858 170.879114,120.06897 C167.17637,116.870092 164.416506,114.338435 162.599522,112.473998 C160.782538,110.609561 158.286436,107.747987 155.111217,103.889275 Z"
              />
              <use
                fill="#000"
                filter="url(#ascension-s)"
                xlinkHref="#ascension-t"
              />
              <use fill="url(#ascension-u)" xlinkHref="#ascension-t" />
              <path
                fill="url(#ascension-v)"
                d="M187.104159,121.685418 C195.488552,126.40774 201.793294,129.046891 206.018384,129.602872 C206.018384,129.602872 205.240867,131.625779 203.685833,135.671592 C195.846712,134.59754 189.245008,131.997998 183.880722,127.872966 C183.880722,127.872966 184.955201,125.81045 187.104159,121.685418 Z"
              />
              <use
                fill="#000"
                filter="url(#ascension-w)"
                xlinkHref="#ascension-x"
              />
              <use fill="url(#ascension-y)" xlinkHref="#ascension-x" />
            </g>
            <g transform="matrix(-1 0 0 1 466.565 35.141)">
              <path
                fill="url(#ascension-j)"
                d="M146.997123,2.65742983e-14 C138.835724,19.6403433 136.55837,38.7089701 140.16506,57.2058806 C140.16506,57.2058806 137.47524,57.2058806 132.0956,57.2058806 C129.028365,45.2684376 128.701441,34.6673047 131.114829,25.4024819 C133.528217,16.137659 138.822314,7.67016503 146.997123,2.65742983e-14 Z"
              />
              <use
                fill="#000"
                filter="url(#ascension-z)"
                xlinkHref="#ascension-A"
              />
              <use fill="url(#ascension-B)" xlinkHref="#ascension-A" />
              <use
                fill="#000"
                filter="url(#ascension-C)"
                xlinkHref="#ascension-D"
              />
              <use fill="url(#ascension-p)" xlinkHref="#ascension-D" />
              <path
                fill="url(#ascension-q)"
                d="M146.476214,76.6977673 C148.951218,82.8929804 151.075143,86.8984459 152.847988,88.7141636 C152.847988,88.7141636 150.897699,90.0103881 146.997123,92.6028372 C141.502808,83.14716 138.755651,77.84547 138.755651,76.6977673 C138.755651,76.6977673 141.329172,76.6977673 146.476214,76.6977673 Z"
              />
              <path
                fill="url(#ascension-r)"
                d="M155.111217,103.889275 C158.669252,100.962405 160.44827,99.4989698 160.44827,99.4989698 C160.44827,99.4989698 171.525362,112.609491 175.834293,114.508303 C175.834293,114.508303 174.182567,116.361858 170.879114,120.06897 C167.17637,116.870092 164.416506,114.338435 162.599522,112.473998 C160.782538,110.609561 158.286436,107.747987 155.111217,103.889275 Z"
              />
              <use
                fill="#000"
                filter="url(#ascension-E)"
                xlinkHref="#ascension-F"
              />
              <use fill="url(#ascension-u)" xlinkHref="#ascension-F" />
              <path
                fill="url(#ascension-v)"
                d="M187.104159,121.685418 C195.488552,126.40774 201.793294,129.046891 206.018384,129.602872 C206.018384,129.602872 205.240867,131.625779 203.685833,135.671592 C195.846712,134.59754 189.245008,131.997998 183.880722,127.872966 C183.880722,127.872966 184.955201,125.81045 187.104159,121.685418 Z"
              />
              <use
                fill="#000"
                filter="url(#ascension-G)"
                xlinkHref="#ascension-H"
              />
              <use fill="url(#ascension-y)" xlinkHref="#ascension-H" />
            </g>
            <path
              fill="url(#ascension-I)"
              d="M219.192179,168.014159 C228.659835,169.495111 238.128325,169.495111 247.597651,168.014159 C247.597651,168.014159 247.910215,170.136818 248.535343,174.382136 C236.580822,176.761811 226.506032,176.761811 218.310973,174.382136 C218.310973,174.382136 218.604708,172.259477 219.192179,168.014159 Z"
            />
            <use
              fill="#000"
              filter="url(#ascension-J)"
              xlinkHref="#ascension-K"
            />
            <use fill="url(#ascension-L)" xlinkHref="#ascension-K" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
