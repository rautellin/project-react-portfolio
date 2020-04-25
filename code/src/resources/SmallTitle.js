import React from 'react'
import { motion } from 'framer-motion'

export const SmallTitle = () => {

  document.addEventListener('DOMContentLoaded', () => {

    const animateSGV = () => {
      const arrow = document.getElementById('visible')
      arrow.style.transitionDelay = `3s`
      arrow.style.webkitTransitionDelay = `3s`
      arrow.style.mozTransitionDelay = `3s`
      arrow.style.oTransitionDelay = `3s`
      arrow.style.opacity = 1
      arrow.style.color = `white`
    }

    animateSGV('title', 0, 0.25)

  }, false)

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }


  return (
    <>
      <div className="container">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 349.875 42.12"
          className="item"
        >

          <motion.path
            d="M 35.865 9.18 L 42.075 9.18 L 33.3 33.39 L 26.55 33.39 L 21.105 18.36 L 15.48 33.39 L 8.73 33.39 L 0 9.18 L 6.615 9.18 L 12.33 25.56 L 18.27 9.18 L 24.21 9.18 L 29.97 25.56 L 35.865 9.18 Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { delay: 1.2, duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
          <motion.path
            d="M 68.94 23.265 L 50.625 23.265 Q 51.12 25.515 52.965 26.82 A 6.935 6.935 0 0 0 55.623 27.941 A 9.693 9.693 0 0 0 57.555 28.125 A 10.83 10.83 0 0 0 59.286 27.993 A 8.123 8.123 0 0 0 60.908 27.562 A 7.777 7.777 0 0 0 62.987 26.352 A 9.427 9.427 0 0 0 63.63 25.785 L 67.365 29.835 A 10.999 10.999 0 0 1 61.605 33.266 Q 59.805 33.72 57.662 33.748 A 21.708 21.708 0 0 1 57.375 33.75 Q 53.28 33.75 50.13 32.153 A 12.162 12.162 0 0 1 46.616 29.523 A 11.334 11.334 0 0 1 45.27 27.72 A 11.981 11.981 0 0 1 43.587 22.18 A 14.58 14.58 0 0 1 43.56 21.285 A 12.872 12.872 0 0 1 44.287 16.919 A 11.889 11.889 0 0 1 45.248 14.873 Q 46.935 12.015 49.882 10.418 Q 52.83 8.82 56.475 8.82 Q 60.03 8.82 62.91 10.35 Q 65.79 11.88 67.432 14.738 A 12.305 12.305 0 0 1 68.941 19.294 A 15.755 15.755 0 0 1 69.075 21.375 Q 69.075 21.502 68.955 23.072 A 549.457 549.457 0 0 1 68.94 23.265 Z M 50.535 19.17 L 62.46 19.17 A 6.444 6.444 0 0 0 61.831 17.192 A 5.526 5.526 0 0 0 60.48 15.503 A 5.762 5.762 0 0 0 57.164 14.157 A 7.495 7.495 0 0 0 56.52 14.13 A 6.965 6.965 0 0 0 54.548 14.398 A 5.615 5.615 0 0 0 52.515 15.48 A 5.53 5.53 0 0 0 50.705 18.361 A 7.37 7.37 0 0 0 50.535 19.17 Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { delay: 0.1, duration: 2, ease: "easeInOut" },
              fill: { delay: 1.2, duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
          <motion.path
            d="M 80.46 30.6 L 80.46 33.39 L 73.755 33.39 L 73.755 0 L 80.775 0 L 80.775 11.745 A 8.731 8.731 0 0 1 85.936 8.992 A 12.663 12.663 0 0 1 88.065 8.82 A 12.675 12.675 0 0 1 92.603 9.622 A 11.941 11.941 0 0 1 94.207 10.373 Q 96.975 11.925 98.55 14.738 A 12.273 12.273 0 0 1 99.971 19.041 A 15.868 15.868 0 0 1 100.125 21.285 A 14.987 14.987 0 0 1 99.743 24.738 A 11.895 11.895 0 0 1 98.55 27.833 Q 96.975 30.645 94.208 32.198 A 12.244 12.244 0 0 1 88.485 33.744 A 14.433 14.433 0 0 1 88.065 33.75 A 12.605 12.605 0 0 1 84.978 33.395 A 8.35 8.35 0 0 1 80.46 30.6 Z M 86.85 27.99 A 6.528 6.528 0 0 0 89.063 27.629 A 5.665 5.665 0 0 0 91.283 26.168 Q 93.015 24.345 93.015 21.285 A 8.76 8.76 0 0 0 92.781 19.205 A 6.076 6.076 0 0 0 91.283 16.402 Q 89.55 14.58 86.85 14.58 A 6.528 6.528 0 0 0 84.637 14.941 A 5.665 5.665 0 0 0 82.417 16.402 Q 80.685 18.225 80.685 21.285 A 8.76 8.76 0 0 0 80.919 23.365 A 6.076 6.076 0 0 0 82.417 26.168 Q 84.15 27.99 86.85 27.99 Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { delay: 0.2, duration: 2, ease: "easeInOut" },
              fill: { delay: 1.2, duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
          <motion.path
            d="M 135.18 0 L 142.2 0 L 142.2 33.39 L 135.495 33.39 L 135.495 30.6 A 8.444 8.444 0 0 1 130.534 33.501 A 12.852 12.852 0 0 1 127.935 33.75 Q 124.515 33.75 121.748 32.22 Q 118.98 30.69 117.405 27.855 A 12.429 12.429 0 0 1 115.984 23.531 A 15.915 15.915 0 0 1 115.83 21.285 A 15.023 15.023 0 0 1 116.224 17.775 A 12.053 12.053 0 0 1 117.405 14.715 Q 118.98 11.88 121.748 10.35 A 12.353 12.353 0 0 1 127.09 8.844 A 14.769 14.769 0 0 1 127.935 8.82 A 11.793 11.793 0 0 1 131.005 9.198 A 8.387 8.387 0 0 1 135.18 11.745 L 135.18 0 Z M 129.15 27.99 A 6.336 6.336 0 0 0 131.502 27.566 A 5.805 5.805 0 0 0 133.56 26.167 A 6.123 6.123 0 0 0 135.143 23.079 A 8.907 8.907 0 0 0 135.315 21.285 A 8.635 8.635 0 0 0 135.073 19.184 A 6.048 6.048 0 0 0 133.56 16.402 A 5.838 5.838 0 0 0 129.315 14.582 A 7.616 7.616 0 0 0 129.15 14.58 Q 126.45 14.58 124.695 16.403 A 6.123 6.123 0 0 0 123.112 19.491 A 8.907 8.907 0 0 0 122.94 21.285 A 8.635 8.635 0 0 0 123.182 23.386 A 6.048 6.048 0 0 0 124.695 26.168 A 5.87 5.87 0 0 0 128.899 27.986 A 7.808 7.808 0 0 0 129.15 27.99 Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { delay: 0.3, duration: 2, ease: "easeInOut" },
              fill: { delay: 1.2, duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
          <motion.path
            d="M 172.26 23.265 L 153.945 23.265 Q 154.44 25.515 156.285 26.82 A 6.935 6.935 0 0 0 158.943 27.941 A 9.693 9.693 0 0 0 160.875 28.125 A 10.83 10.83 0 0 0 162.606 27.993 A 8.123 8.123 0 0 0 164.228 27.562 A 7.777 7.777 0 0 0 166.307 26.352 A 9.427 9.427 0 0 0 166.95 25.785 L 170.685 29.835 A 10.999 10.999 0 0 1 164.925 33.266 Q 163.125 33.72 160.982 33.748 A 21.708 21.708 0 0 1 160.695 33.75 Q 156.6 33.75 153.45 32.153 A 12.162 12.162 0 0 1 149.936 29.523 A 11.334 11.334 0 0 1 148.59 27.72 A 11.981 11.981 0 0 1 146.907 22.18 A 14.58 14.58 0 0 1 146.88 21.285 A 12.872 12.872 0 0 1 147.607 16.919 A 11.889 11.889 0 0 1 148.568 14.873 Q 150.255 12.015 153.203 10.418 Q 156.15 8.82 159.795 8.82 Q 163.35 8.82 166.23 10.35 Q 169.11 11.88 170.753 14.738 A 12.305 12.305 0 0 1 172.261 19.294 A 15.755 15.755 0 0 1 172.395 21.375 Q 172.395 21.502 172.275 23.072 A 549.457 549.457 0 0 1 172.26 23.265 Z M 153.855 19.17 L 165.78 19.17 A 6.444 6.444 0 0 0 165.151 17.192 A 5.526 5.526 0 0 0 163.8 15.503 A 5.762 5.762 0 0 0 160.484 14.157 A 7.495 7.495 0 0 0 159.84 14.13 A 6.965 6.965 0 0 0 157.868 14.398 A 5.615 5.615 0 0 0 155.835 15.48 A 5.53 5.53 0 0 0 154.025 18.361 A 7.37 7.37 0 0 0 153.855 19.17 Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { delay: 0.4, duration: 2, ease: "easeInOut" },
              fill: { delay: 1.2, duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
          <motion.path
            d="M 194.355 9.18 L 201.105 9.18 L 190.89 33.39 L 183.645 33.39 L 173.475 9.18 L 180.72 9.18 L 187.425 25.65 L 194.355 9.18 Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { delay: 0.5, duration: 2, ease: "easeInOut" },
              fill: { delay: 1.2, duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
          <motion.path
            d="M 227.565 23.265 L 209.25 23.265 Q 209.745 25.515 211.59 26.82 A 6.935 6.935 0 0 0 214.248 27.941 A 9.693 9.693 0 0 0 216.18 28.125 A 10.83 10.83 0 0 0 217.911 27.993 A 8.123 8.123 0 0 0 219.533 27.562 A 7.777 7.777 0 0 0 221.612 26.352 A 9.427 9.427 0 0 0 222.255 25.785 L 225.99 29.835 A 10.999 10.999 0 0 1 220.23 33.266 Q 218.43 33.72 216.287 33.748 A 21.708 21.708 0 0 1 216 33.75 Q 211.905 33.75 208.755 32.153 A 12.162 12.162 0 0 1 205.241 29.523 A 11.334 11.334 0 0 1 203.895 27.72 A 11.981 11.981 0 0 1 202.212 22.18 A 14.58 14.58 0 0 1 202.185 21.285 A 12.872 12.872 0 0 1 202.912 16.919 A 11.889 11.889 0 0 1 203.873 14.873 Q 205.56 12.015 208.508 10.418 Q 211.455 8.82 215.1 8.82 Q 218.655 8.82 221.535 10.35 Q 224.415 11.88 226.058 14.738 A 12.305 12.305 0 0 1 227.566 19.294 A 15.755 15.755 0 0 1 227.7 21.375 Q 227.7 21.502 227.58 23.072 A 549.457 549.457 0 0 1 227.565 23.265 Z M 209.16 19.17 L 221.085 19.17 A 6.444 6.444 0 0 0 220.456 17.192 A 5.526 5.526 0 0 0 219.105 15.503 A 5.762 5.762 0 0 0 215.789 14.157 A 7.495 7.495 0 0 0 215.145 14.13 A 6.965 6.965 0 0 0 213.173 14.398 A 5.615 5.615 0 0 0 211.14 15.48 A 5.53 5.53 0 0 0 209.33 18.361 A 7.37 7.37 0 0 0 209.16 19.17 Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { delay: 0.6, duration: 2, ease: "easeInOut" },
              fill: { delay: 1.2, duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
          <motion.path
            d="M 232.38 33.39 L 232.38 0 L 239.4 0 L 239.4 33.39 L 232.38 33.39 Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { delay: 0.7, duration: 2, ease: "easeInOut" },
              fill: { delay: 1.2, duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
          <motion.path
            d="M 253.391 33.245 A 15.733 15.733 0 0 0 257.445 33.75 A 17.06 17.06 0 0 0 259.193 33.662 A 13.779 13.779 0 0 0 264.285 32.152 Q 267.3 30.555 269.01 27.72 A 11.568 11.568 0 0 0 270.117 25.29 A 12.966 12.966 0 0 0 270.72 21.285 A 14.58 14.58 0 0 0 270.693 20.39 A 11.981 11.981 0 0 0 269.01 14.85 Q 267.3 12.015 264.285 10.418 Q 261.27 8.82 257.445 8.82 A 17.171 17.171 0 0 0 255.809 8.896 A 13.97 13.97 0 0 0 250.582 10.417 Q 247.545 12.015 245.835 14.85 A 11.568 11.568 0 0 0 244.728 17.28 A 12.966 12.966 0 0 0 244.125 21.285 A 14.58 14.58 0 0 0 244.152 22.18 A 11.981 11.981 0 0 0 245.835 27.72 Q 247.545 30.555 250.583 32.153 A 13.411 13.411 0 0 0 253.391 33.245 Z M 257.445 27.99 A 6.528 6.528 0 0 0 259.658 27.629 A 5.665 5.665 0 0 0 261.878 26.168 Q 263.61 24.345 263.61 21.285 A 8.76 8.76 0 0 0 263.376 19.205 A 6.076 6.076 0 0 0 261.878 16.402 Q 260.145 14.58 257.445 14.58 Q 254.745 14.58 252.99 16.403 A 6.123 6.123 0 0 0 251.407 19.491 A 8.907 8.907 0 0 0 251.235 21.285 A 8.635 8.635 0 0 0 251.477 23.386 A 6.048 6.048 0 0 0 252.99 26.168 A 5.87 5.87 0 0 0 257.194 27.986 A 7.808 7.808 0 0 0 257.445 27.99 Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { delay: 0.8, duration: 2, ease: "easeInOut" },
              fill: { delay: 1.2, duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
          <motion.path
            d="M 282.42 30.825 L 282.42 42.12 L 275.4 42.12 L 275.4 9.18 L 282.105 9.18 L 282.105 11.97 A 8.424 8.424 0 0 1 286.954 9.098 A 12.923 12.923 0 0 1 289.71 8.82 A 12.675 12.675 0 0 1 294.248 9.622 A 11.941 11.941 0 0 1 295.852 10.373 Q 298.62 11.925 300.195 14.738 A 12.273 12.273 0 0 1 301.616 19.041 A 15.868 15.868 0 0 1 301.77 21.285 A 14.987 14.987 0 0 1 301.388 24.738 A 11.895 11.895 0 0 1 300.195 27.833 Q 298.62 30.645 295.853 32.198 A 12.244 12.244 0 0 1 290.13 33.744 A 14.433 14.433 0 0 1 289.71 33.75 A 11.81 11.81 0 0 1 286.573 33.356 A 8.547 8.547 0 0 1 282.42 30.825 Z M 288.495 27.99 A 6.528 6.528 0 0 0 290.708 27.629 A 5.665 5.665 0 0 0 292.928 26.168 Q 294.66 24.345 294.66 21.285 A 8.76 8.76 0 0 0 294.426 19.205 A 6.076 6.076 0 0 0 292.928 16.402 Q 291.195 14.58 288.495 14.58 A 6.528 6.528 0 0 0 286.282 14.941 A 5.665 5.665 0 0 0 284.062 16.402 Q 282.33 18.225 282.33 21.285 A 8.76 8.76 0 0 0 282.564 23.365 A 6.076 6.076 0 0 0 284.062 26.168 Q 285.795 27.99 288.495 27.99 Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { delay: 0.9, duration: 2, ease: "easeInOut" },
              fill: { delay: 1.2, duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
          <motion.path
            d="M 330.03 23.265 L 311.715 23.265 Q 312.21 25.515 314.055 26.82 A 6.935 6.935 0 0 0 316.713 27.941 A 9.693 9.693 0 0 0 318.645 28.125 A 10.83 10.83 0 0 0 320.376 27.993 A 8.123 8.123 0 0 0 321.998 27.562 A 7.777 7.777 0 0 0 324.077 26.352 A 9.427 9.427 0 0 0 324.72 25.785 L 328.455 29.835 A 10.999 10.999 0 0 1 322.695 33.266 Q 320.895 33.72 318.752 33.748 A 21.708 21.708 0 0 1 318.465 33.75 Q 314.37 33.75 311.22 32.153 A 12.162 12.162 0 0 1 307.706 29.523 A 11.334 11.334 0 0 1 306.36 27.72 A 11.981 11.981 0 0 1 304.677 22.18 A 14.58 14.58 0 0 1 304.65 21.285 A 12.872 12.872 0 0 1 305.377 16.919 A 11.889 11.889 0 0 1 306.338 14.873 Q 308.025 12.015 310.973 10.418 Q 313.92 8.82 317.565 8.82 Q 321.12 8.82 324 10.35 Q 326.88 11.88 328.523 14.738 A 12.305 12.305 0 0 1 330.031 19.294 A 15.755 15.755 0 0 1 330.165 21.375 Q 330.165 21.502 330.045 23.072 A 549.457 549.457 0 0 1 330.03 23.265 Z M 311.625 19.17 L 323.55 19.17 A 6.444 6.444 0 0 0 322.921 17.192 A 5.526 5.526 0 0 0 321.57 15.503 A 5.762 5.762 0 0 0 318.254 14.157 A 7.495 7.495 0 0 0 317.61 14.13 A 6.965 6.965 0 0 0 315.638 14.398 A 5.615 5.615 0 0 0 313.605 15.48 A 5.53 5.53 0 0 0 311.795 18.361 A 7.37 7.37 0 0 0 311.625 19.17 Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { delay: 1, duration: 2, ease: "easeInOut" },
              fill: { delay: 1.2, duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
          <motion.path
            d="M 349.875 8.82 L 349.875 15.3 Q 348.866 15.222 348.426 15.212 A 5.24 5.24 0 0 0 348.3 15.21 Q 345.625 15.21 343.977 16.538 A 5.376 5.376 0 0 0 343.575 16.898 Q 342.141 18.312 341.91 20.914 A 11.806 11.806 0 0 0 341.865 21.96 L 341.865 33.39 L 334.845 33.39 L 334.845 9.18 L 341.55 9.18 L 341.55 12.375 A 7.707 7.707 0 0 1 344.554 9.896 A 9.268 9.268 0 0 1 344.948 9.72 A 11.221 11.221 0 0 1 347.637 8.98 A 14.989 14.989 0 0 1 349.875 8.82 Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { delay: 1.1, duration: 2, ease: "easeInOut" },
              fill: { delay: 1.2, duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
        </motion.svg>
      </div>
    </>
  )
}



