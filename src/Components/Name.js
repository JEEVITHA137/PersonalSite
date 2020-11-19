import React,{Component} from 'react';
import RunAnimation from './Animation';
import './Name.css';
class Name extends Component{

render(){
  return(
    <div className="">
    <div className="name">
    <h2>Welcome</h2>
    <div className="textname">
    <svg viewBox="0 0 420 69" fill="transparent" xmlns="http://www.w3.org/2000/svg" className="svg">
    <path d="M12.5 51H0.09375V6H12.5V51Z" stroke="white" stroke-width="2"/>
    <path d="M33.1237 10.875C33.1237 11.8333 32.9987 12.8125 32.7487 13.8125C32.4987 14.8125 32.1446 15.7812 31.6862 16.7188C31.2487 17.6562 30.7279 18.5521 30.1237 19.4062C29.5196 20.2396 28.8633 20.9792 28.155 21.625L23.655 19.25C24.0925 18.9167 24.53 18.4792 24.9675 17.9375C25.4258 17.3958 25.6967 16.8542 25.78 16.3125C25.1758 16.125 24.6238 15.8542 24.1238 15.5C23.6446 15.1458 23.2279 14.7292 22.8738 14.25C22.5196 13.7708 22.2383 13.25 22.03 12.6875C21.8425 12.1042 21.7488 11.5 21.7488 10.875C21.7488 10.1042 21.8946 9.375 22.1863 8.6875C22.4988 7.97917 22.905 7.375 23.405 6.875C23.9258 6.35417 24.53 5.94792 25.2175 5.65625C25.905 5.34375 26.6446 5.1875 27.4362 5.1875C28.2279 5.1875 28.9675 5.33333 29.655 5.625C30.3425 5.91667 30.9467 6.32292 31.4675 6.84375C31.9883 7.36458 32.3946 7.96875 32.6862 8.65625C32.9779 9.34375 33.1237 10.0833 33.1237 10.875Z" stroke="white" stroke-width="2"/>
    <path d="M51.3725 17.4375L47.8725 51H40.2163L47.8725 6H59.2162L69.7475 40.3438L80.4037 6H91.7475L98.1225 51H85.4975L81.7787 18.3125L72.9975 51H61.6537L51.3725 17.4375Z" stroke="white" stroke-width="2"/>
    <path d="M139.589 36.875C139.589 39.7708 139.214 42.7188 138.464 45.7188C137.735 48.6979 136.703 51.5833 135.37 54.375C134.057 57.1875 132.474 59.8125 130.62 62.25C128.766 64.6875 126.724 66.8125 124.495 68.625L119.683 65.7188C120.933 64.0104 122.026 62.0729 122.964 59.9062C123.901 57.7396 124.682 55.4896 125.307 53.1562C125.932 50.8229 126.401 48.4792 126.714 46.125C127.026 43.7708 127.182 41.5312 127.182 39.4062V6H139.589V36.875Z" stroke="white" stroke-width="2"/>
    <path d="M158.869 33.875C160.16 34.1667 161.452 34.3958 162.744 34.5625C164.035 34.7292 165.337 34.8125 166.65 34.8125C168.025 34.8125 169.296 34.6875 170.462 34.4375C171.65 34.1667 172.671 33.7292 173.525 33.125C174.4 32.5 175.087 31.6771 175.587 30.6562C176.087 29.6354 176.337 28.3646 176.337 26.8438C176.337 25.6146 176.171 24.4896 175.837 23.4688C175.504 22.4479 175.004 21.5729 174.337 20.8438C173.692 20.1146 172.89 19.5521 171.931 19.1562C170.973 18.7396 169.858 18.5312 168.587 18.5312C167.4 18.5312 166.327 18.75 165.369 19.1875C164.431 19.625 163.598 20.2188 162.869 20.9688C162.16 21.6979 161.546 22.5521 161.025 23.5312C160.525 24.5104 160.108 25.5312 159.775 26.5938C159.442 27.6562 159.202 28.7292 159.056 29.8125C158.91 30.8958 158.837 31.9167 158.837 32.875C158.837 33.0417 158.837 33.2083 158.837 33.375C158.837 33.5417 158.848 33.7083 158.869 33.875ZM184.9 26.75C184.9 28.2292 184.66 29.5521 184.181 30.7188C183.702 31.8646 183.046 32.875 182.212 33.75C181.4 34.625 180.452 35.3646 179.369 35.9688C178.285 36.5729 177.129 37.0729 175.9 37.4688C174.671 37.8438 173.4 38.1146 172.087 38.2812C170.796 38.4479 169.535 38.5312 168.306 38.5312C166.744 38.5312 165.202 38.4271 163.681 38.2188C162.16 37.9896 160.66 37.6354 159.181 37.1562C159.41 38.5312 159.775 39.8438 160.275 41.0938C160.775 42.3229 161.442 43.4062 162.275 44.3438C163.108 45.2604 164.129 45.9896 165.337 46.5312C166.567 47.0729 168.015 47.3438 169.681 47.3438C170.785 47.3438 171.837 47.1771 172.837 46.8438C173.837 46.5104 174.754 46.0417 175.587 45.4375C176.421 44.8333 177.15 44.1146 177.775 43.2812C178.421 42.4479 178.942 41.5208 179.337 40.5L183.9 42.1875C183.212 43.8333 182.265 45.2604 181.056 46.4688C179.869 47.6562 178.515 48.6458 176.994 49.4375C175.494 50.2083 173.89 50.7812 172.181 51.1562C170.494 51.5312 168.817 51.7188 167.15 51.7188C164.4 51.7188 161.858 51.2604 159.525 50.3438C157.192 49.4062 155.181 48.1042 153.494 46.4375C151.806 44.7708 150.483 42.7812 149.525 40.4688C148.567 38.1562 148.087 35.625 148.087 32.875C148.087 30.125 148.567 27.5938 149.525 25.2812C150.483 22.9688 151.806 20.9792 153.494 19.3125C155.181 17.6458 157.192 16.3542 159.525 15.4375C161.858 14.5 164.4 14.0312 167.15 14.0312C168.483 14.0312 169.848 14.125 171.244 14.3125C172.64 14.5 173.994 14.8021 175.306 15.2188C176.619 15.6146 177.858 16.1354 179.025 16.7812C180.192 17.4271 181.202 18.2292 182.056 19.1875C182.931 20.125 183.619 21.2188 184.119 22.4688C184.64 23.7188 184.9 25.1458 184.9 26.75Z" stroke="white" stroke-width="2"/>
    <path d="M201.461 33.875C202.753 34.1667 204.045 34.3958 205.336 34.5625C206.628 34.7292 207.93 34.8125 209.242 34.8125C210.617 34.8125 211.888 34.6875 213.055 34.4375C214.242 34.1667 215.263 33.7292 216.117 33.125C216.992 32.5 217.68 31.6771 218.18 30.6562C218.68 29.6354 218.93 28.3646 218.93 26.8438C218.93 25.6146 218.763 24.4896 218.43 23.4688C218.097 22.4479 217.597 21.5729 216.93 20.8438C216.284 20.1146 215.482 19.5521 214.524 19.1562C213.565 18.7396 212.451 18.5312 211.18 18.5312C209.992 18.5312 208.92 18.75 207.961 19.1875C207.024 19.625 206.19 20.2188 205.461 20.9688C204.753 21.6979 204.138 22.5521 203.617 23.5312C203.117 24.5104 202.701 25.5312 202.367 26.5938C202.034 27.6562 201.795 28.7292 201.649 29.8125C201.503 30.8958 201.43 31.9167 201.43 32.875C201.43 33.0417 201.43 33.2083 201.43 33.375C201.43 33.5417 201.44 33.7083 201.461 33.875ZM227.492 26.75C227.492 28.2292 227.253 29.5521 226.774 30.7188C226.295 31.8646 225.638 32.875 224.805 33.75C223.992 34.625 223.045 35.3646 221.961 35.9688C220.878 36.5729 219.722 37.0729 218.492 37.4688C217.263 37.8438 215.992 38.1146 214.68 38.2812C213.388 38.4479 212.128 38.5312 210.899 38.5312C209.336 38.5312 207.795 38.4271 206.274 38.2188C204.753 37.9896 203.253 37.6354 201.774 37.1562C202.003 38.5312 202.367 39.8438 202.867 41.0938C203.367 42.3229 204.034 43.4062 204.867 44.3438C205.701 45.2604 206.722 45.9896 207.93 46.5312C209.159 47.0729 210.607 47.3438 212.274 47.3438C213.378 47.3438 214.43 47.1771 215.43 46.8438C216.43 46.5104 217.347 46.0417 218.18 45.4375C219.013 44.8333 219.742 44.1146 220.367 43.2812C221.013 42.4479 221.534 41.5208 221.93 40.5L226.492 42.1875C225.805 43.8333 224.857 45.2604 223.649 46.4688C222.461 47.6562 221.107 48.6458 219.586 49.4375C218.086 50.2083 216.482 50.7812 214.774 51.1562C213.086 51.5312 211.409 51.7188 209.742 51.7188C206.992 51.7188 204.451 51.2604 202.117 50.3438C199.784 49.4062 197.774 48.1042 196.086 46.4375C194.399 44.7708 193.076 42.7812 192.117 40.4688C191.159 38.1562 190.68 35.625 190.68 32.875C190.68 30.125 191.159 27.5938 192.117 25.2812C193.076 22.9688 194.399 20.9792 196.086 19.3125C197.774 17.6458 199.784 16.3542 202.117 15.4375C204.451 14.5 206.992 14.0312 209.742 14.0312C211.076 14.0312 212.44 14.125 213.836 14.3125C215.232 14.5 216.586 14.8021 217.899 15.2188C219.211 15.6146 220.451 16.1354 221.617 16.7812C222.784 17.4271 223.795 18.2292 224.649 19.1875C225.524 20.125 226.211 21.2188 226.711 22.4688C227.232 23.7188 227.492 25.1458 227.492 26.75Z" stroke="white" stroke-width="2"/>
    <path d="M253.929 51H244.429L231.304 14.9062H241.866L251.491 43.6562L260.835 14.9062H268.148L253.929 51Z" stroke="white" stroke-width="2"/>
    <path d="M284.99 6.1875C284.99 6.97917 284.834 7.72917 284.521 8.4375C284.23 9.14583 283.823 9.76042 283.302 10.2812C282.782 10.8021 282.167 11.2188 281.459 11.5312C280.75 11.8229 280 11.9688 279.209 11.9688C278.417 11.9688 277.667 11.8229 276.959 11.5312C276.271 11.2188 275.667 10.8021 275.146 10.2812C274.625 9.76042 274.209 9.14583 273.896 8.4375C273.605 7.72917 273.459 6.97917 273.459 6.1875C273.459 5.39583 273.605 4.65625 273.896 3.96875C274.209 3.26042 274.625 2.64583 275.146 2.125C275.667 1.60417 276.271 1.19792 276.959 0.90625C277.667 0.59375 278.417 0.4375 279.209 0.4375C280 0.4375 280.75 0.59375 281.459 0.90625C282.167 1.19792 282.782 1.60417 283.302 2.125C283.823 2.64583 284.23 3.26042 284.521 3.96875C284.834 4.65625 284.99 5.39583 284.99 6.1875ZM284.521 51H273.927V14.9375H284.521V51Z" stroke="white" stroke-width="2"/>
    <path d="M308.27 51H297.676V19.0938H291.114V14.9062H297.676V1.625H308.27V14.9062H319.207V19.0938H308.27V51Z" stroke="white" stroke-width="2"/>
    <path d="M362.3 30.3125C362.3 32.75 361.998 35.2917 361.394 37.9375C360.81 40.5833 359.987 43.1771 358.925 45.7188C357.862 48.2604 356.592 50.6458 355.112 52.875C353.633 55.125 352.008 57.0625 350.237 58.6875L346.269 56.5312C346.831 55.4896 347.362 54.3229 347.862 53.0312C348.362 51.7396 348.81 50.375 349.206 48.9375C349.623 47.4792 349.987 45.9792 350.3 44.4375C350.633 42.8958 350.904 41.375 351.112 39.875C351.342 38.3542 351.508 36.8854 351.612 35.4688C351.737 34.0312 351.8 32.6979 351.8 31.4688C351.8 30.6562 351.769 29.7917 351.706 28.875C351.644 27.9375 351.508 27.0104 351.3 26.0938C351.112 25.1562 350.852 24.2604 350.519 23.4062C350.185 22.5521 349.737 21.8021 349.175 21.1562C348.633 20.5104 347.967 19.9896 347.175 19.5938C346.404 19.1979 345.487 19 344.425 19C343.383 19 342.456 19.2396 341.644 19.7188C340.831 20.1771 340.112 20.7917 339.487 21.5625C338.862 22.3125 338.321 23.1771 337.862 24.1562C337.425 25.1354 337.06 26.1458 336.769 27.1875C336.498 28.2083 336.3 29.2188 336.175 30.2188C336.05 31.2188 335.987 32.1146 335.987 32.9062V51H325.394V1.625H335.956V20.2188C337.31 18.2396 338.967 16.7188 340.925 15.6562C342.904 14.5729 345.092 14.0312 347.487 14.0312C349.987 14.0312 352.165 14.4375 354.019 15.25C355.873 16.0625 357.415 17.1979 358.644 18.6562C359.873 20.0938 360.79 21.8125 361.394 23.8125C361.998 25.7917 362.3 27.9583 362.3 30.3125Z" stroke="white" stroke-width="2"/>
    <path d="M406.892 51H396.33V46.6875C395.08 48.3958 393.57 49.6667 391.799 50.5C390.049 51.3125 388.122 51.7188 386.017 51.7188C383.267 51.7188 380.809 51.2292 378.642 50.25C376.476 49.2708 374.642 47.9375 373.142 46.25C371.642 44.5417 370.497 42.5417 369.705 40.25C368.913 37.9583 368.517 35.5 368.517 32.875C368.517 30.25 368.913 27.7917 369.705 25.5C370.497 23.2083 371.642 21.2188 373.142 19.5312C374.642 17.8229 376.476 16.4792 378.642 15.5C380.809 14.5208 383.267 14.0312 386.017 14.0312C387.413 14.0312 388.736 14.2396 389.986 14.6562C391.257 15.0729 392.413 15.6667 393.455 16.4375C394.517 17.1875 395.445 18.1042 396.236 19.1875C397.049 20.25 397.684 21.4375 398.142 22.75L402.83 14.9062H406.892V51ZM396.267 32.875C396.267 31.9375 396.215 30.9479 396.111 29.9062C396.028 28.8646 395.872 27.8333 395.642 26.8125C395.413 25.7917 395.09 24.8229 394.674 23.9062C394.278 22.9688 393.757 22.1458 393.111 21.4375C392.486 20.7083 391.726 20.1354 390.83 19.7188C389.934 19.3021 388.892 19.0938 387.705 19.0938C386.517 19.0938 385.486 19.3125 384.611 19.75C383.736 20.1667 382.986 20.7396 382.361 21.4688C381.736 22.1771 381.215 23 380.799 23.9375C380.403 24.875 380.09 25.8542 379.861 26.875C379.632 27.8958 379.465 28.9271 379.361 29.9688C379.278 30.9896 379.236 31.9583 379.236 32.875C379.236 33.7917 379.278 34.7708 379.361 35.8125C379.465 36.8542 379.632 37.8854 379.861 38.9062C380.09 39.9271 380.403 40.9062 380.799 41.8438C381.215 42.7812 381.736 43.6146 382.361 44.3438C382.986 45.0521 383.736 45.625 384.611 46.0625C385.486 46.4792 386.517 46.6875 387.705 46.6875C388.788 46.6875 389.747 46.4688 390.58 46.0312C391.434 45.5729 392.174 44.9688 392.799 44.2188C393.445 43.4688 393.986 42.6146 394.424 41.6562C394.861 40.6979 395.215 39.7083 395.486 38.6875C395.757 37.6667 395.955 36.6562 396.08 35.6562C396.205 34.6354 396.267 33.7083 396.267 32.875Z" stroke="white" stroke-width="2"/>
    </svg>

    <svg viewBox="420 0 450 69" fill="transparent" xmlns="http://www.w3.org/2000/svg" className="svg1">
    <path d="M460.421 51H449.078L432.265 6H444.921L457.39 42.2188L468.671 6H476.359L460.421 51Z" stroke="white" stroke-width="2"/>
    <path d="M487.951 33.875C489.243 34.1667 490.535 34.3958 491.826 34.5625C493.118 34.7292 494.42 34.8125 495.733 34.8125C497.108 34.8125 498.378 34.6875 499.545 34.4375C500.733 34.1667 501.753 33.7292 502.608 33.125C503.483 32.5 504.17 31.6771 504.67 30.6562C505.17 29.6354 505.42 28.3646 505.42 26.8438C505.42 25.6146 505.253 24.4896 504.92 23.4688C504.587 22.4479 504.087 21.5729 503.42 20.8438C502.774 20.1146 501.972 19.5521 501.014 19.1562C500.055 18.7396 498.941 18.5312 497.67 18.5312C496.483 18.5312 495.41 18.75 494.451 19.1875C493.514 19.625 492.68 20.2188 491.951 20.9688C491.243 21.6979 490.628 22.5521 490.108 23.5312C489.608 24.5104 489.191 25.5312 488.858 26.5938C488.524 27.6562 488.285 28.7292 488.139 29.8125C487.993 30.8958 487.92 31.9167 487.92 32.875C487.92 33.0417 487.92 33.2083 487.92 33.375C487.92 33.5417 487.93 33.7083 487.951 33.875ZM513.983 26.75C513.983 28.2292 513.743 29.5521 513.264 30.7188C512.785 31.8646 512.128 32.875 511.295 33.75C510.483 34.625 509.535 35.3646 508.451 35.9688C507.368 36.5729 506.212 37.0729 504.983 37.4688C503.753 37.8438 502.483 38.1146 501.17 38.2812C499.878 38.4479 498.618 38.5312 497.389 38.5312C495.826 38.5312 494.285 38.4271 492.764 38.2188C491.243 37.9896 489.743 37.6354 488.264 37.1562C488.493 38.5312 488.858 39.8438 489.358 41.0938C489.858 42.3229 490.524 43.4062 491.358 44.3438C492.191 45.2604 493.212 45.9896 494.42 46.5312C495.649 47.0729 497.097 47.3438 498.764 47.3438C499.868 47.3438 500.92 47.1771 501.92 46.8438C502.92 46.5104 503.837 46.0417 504.67 45.4375C505.503 44.8333 506.233 44.1146 506.858 43.2812C507.503 42.4479 508.024 41.5208 508.42 40.5L512.983 42.1875C512.295 43.8333 511.347 45.2604 510.139 46.4688C508.951 47.6562 507.597 48.6458 506.076 49.4375C504.576 50.2083 502.972 50.7812 501.264 51.1562C499.576 51.5312 497.899 51.7188 496.233 51.7188C493.483 51.7188 490.941 51.2604 488.608 50.3438C486.274 49.4062 484.264 48.1042 482.576 46.4375C480.889 44.7708 479.566 42.7812 478.608 40.4688C477.649 38.1562 477.17 35.625 477.17 32.875C477.17 30.125 477.649 27.5938 478.608 25.2812C479.566 22.9688 480.889 20.9792 482.576 19.3125C484.264 17.6458 486.274 16.3542 488.608 15.4375C490.941 14.5 493.483 14.0312 496.233 14.0312C497.566 14.0312 498.93 14.125 500.326 14.3125C501.722 14.5 503.076 14.8021 504.389 15.2188C505.701 15.6146 506.941 16.1354 508.108 16.7812C509.274 17.4271 510.285 18.2292 511.139 19.1875C512.014 20.125 512.701 21.2188 513.201 22.4688C513.722 23.7188 513.983 25.1458 513.983 26.75Z" stroke="white" stroke-width="2"/>
    <path d="M558.763 30.3125C558.763 32.75 558.46 35.2917 557.856 37.9375C557.273 40.5833 556.45 43.1771 555.388 45.7188C554.325 48.2604 553.054 50.6458 551.575 52.875C550.096 55.125 548.471 57.0625 546.7 58.6875L542.731 56.5312C543.294 55.4896 543.825 54.3229 544.325 53.0312C544.825 51.7396 545.273 50.375 545.669 48.9375C546.085 47.4792 546.45 45.9792 546.763 44.4375C547.096 42.8958 547.367 41.375 547.575 39.875C547.804 38.3542 547.971 36.8854 548.075 35.4688C548.2 34.0312 548.263 32.6979 548.263 31.4688C548.263 30.6562 548.231 29.7917 548.169 28.875C548.106 27.9375 547.971 27.0104 547.763 26.0938C547.575 25.1562 547.315 24.2604 546.981 23.4062C546.648 22.5521 546.2 21.8021 545.638 21.1562C545.096 20.5104 544.429 19.9896 543.638 19.5938C542.867 19.1979 541.95 19 540.888 19C539.846 19 538.919 19.2396 538.106 19.7188C537.294 20.1771 536.575 20.7917 535.95 21.5625C535.325 22.3125 534.783 23.1771 534.325 24.1562C533.888 25.1354 533.523 26.1458 533.231 27.1875C532.96 28.2083 532.763 29.2188 532.638 30.2188C532.513 31.2188 532.45 32.1146 532.45 32.9062V51H521.856V14.9062H525.919L530.763 23.3125C531.346 21.9167 532.075 20.6458 532.95 19.5C533.825 18.3542 534.815 17.375 535.919 16.5625C537.023 15.75 538.242 15.125 539.575 14.6875C540.929 14.25 542.388 14.0312 543.95 14.0312C546.45 14.0312 548.627 14.4375 550.481 15.25C552.335 16.0625 553.877 17.1979 555.106 18.6562C556.335 20.0938 557.252 21.8125 557.856 23.8125C558.46 25.7917 558.763 27.9583 558.763 30.3125Z" stroke="white" stroke-width="2"/>
    <path d="M577.574 51H567.011V1.625H577.574V34.0312C579.303 32.7812 581.001 31.4062 582.667 29.9062C584.355 28.4062 585.959 26.8333 587.48 25.1875C589.001 23.5208 590.407 21.8229 591.699 20.0938C593.011 18.3646 594.157 16.6354 595.136 14.9062H602.324C600.865 17.3646 599.136 19.8229 597.136 22.2812C595.136 24.7188 592.959 27.0521 590.605 29.2812L602.449 51H590.792L582.386 35.9375C580.824 37 579.22 37.9792 577.574 38.875V51Z" stroke="white" stroke-width="2"/>
    <path d="M644.323 51H633.76V46.6875C632.51 48.3958 631 49.6667 629.229 50.5C627.479 51.3125 625.552 51.7188 623.448 51.7188C620.698 51.7188 618.239 51.2292 616.073 50.25C613.906 49.2708 612.073 47.9375 610.573 46.25C609.073 44.5417 607.927 42.5417 607.135 40.25C606.343 37.9583 605.948 35.5 605.948 32.875C605.948 30.25 606.343 27.7917 607.135 25.5C607.927 23.2083 609.073 21.2188 610.573 19.5312C612.073 17.8229 613.906 16.4792 616.073 15.5C618.239 14.5208 620.698 14.0312 623.448 14.0312C624.843 14.0312 626.166 14.2396 627.416 14.6562C628.687 15.0729 629.843 15.6667 630.885 16.4375C631.948 17.1875 632.875 18.1042 633.666 19.1875C634.479 20.25 635.114 21.4375 635.573 22.75L640.26 14.9062H644.323V51ZM633.698 32.875C633.698 31.9375 633.645 30.9479 633.541 29.9062C633.458 28.8646 633.302 27.8333 633.073 26.8125C632.843 25.7917 632.52 24.8229 632.104 23.9062C631.708 22.9688 631.187 22.1458 630.541 21.4375C629.916 20.7083 629.156 20.1354 628.26 19.7188C627.364 19.3021 626.323 19.0938 625.135 19.0938C623.948 19.0938 622.916 19.3125 622.041 19.75C621.166 20.1667 620.416 20.7396 619.791 21.4688C619.166 22.1771 618.645 23 618.229 23.9375C617.833 24.875 617.52 25.8542 617.291 26.875C617.062 27.8958 616.895 28.9271 616.791 29.9688C616.708 30.9896 616.666 31.9583 616.666 32.875C616.666 33.7917 616.708 34.7708 616.791 35.8125C616.895 36.8542 617.062 37.8854 617.291 38.9062C617.52 39.9271 617.833 40.9062 618.229 41.8438C618.645 42.7812 619.166 43.6146 619.791 44.3438C620.416 45.0521 621.166 45.625 622.041 46.0625C622.916 46.4792 623.948 46.6875 625.135 46.6875C626.218 46.6875 627.177 46.4688 628.01 46.0312C628.864 45.5729 629.604 44.9688 630.229 44.2188C630.875 43.4688 631.416 42.6146 631.854 41.6562C632.291 40.6979 632.645 39.7083 632.916 38.6875C633.187 37.6667 633.385 36.6562 633.51 35.6562C633.635 34.6354 633.698 33.7083 633.698 32.875Z" stroke="white" stroke-width="2"/>
    <path d="M668.04 51H657.446V19.0938H650.884V14.9062H657.446V1.625H668.04V14.9062H678.977V19.0938H668.04V51Z" stroke="white" stroke-width="2"/>
    <path d="M692.226 33.875C693.518 34.1667 694.81 34.3958 696.101 34.5625C697.393 34.7292 698.695 34.8125 700.008 34.8125C701.383 34.8125 702.653 34.6875 703.82 34.4375C705.008 34.1667 706.028 33.7292 706.883 33.125C707.758 32.5 708.445 31.6771 708.945 30.6562C709.445 29.6354 709.695 28.3646 709.695 26.8438C709.695 25.6146 709.528 24.4896 709.195 23.4688C708.862 22.4479 708.362 21.5729 707.695 20.8438C707.049 20.1146 706.247 19.5521 705.289 19.1562C704.33 18.7396 703.216 18.5312 701.945 18.5312C700.758 18.5312 699.685 18.75 698.726 19.1875C697.789 19.625 696.955 20.2188 696.226 20.9688C695.518 21.6979 694.903 22.5521 694.383 23.5312C693.883 24.5104 693.466 25.5312 693.133 26.5938C692.799 27.6562 692.56 28.7292 692.414 29.8125C692.268 30.8958 692.195 31.9167 692.195 32.875C692.195 33.0417 692.195 33.2083 692.195 33.375C692.195 33.5417 692.205 33.7083 692.226 33.875ZM718.258 26.75C718.258 28.2292 718.018 29.5521 717.539 30.7188C717.06 31.8646 716.403 32.875 715.57 33.75C714.758 34.625 713.81 35.3646 712.726 35.9688C711.643 36.5729 710.487 37.0729 709.258 37.4688C708.028 37.8438 706.758 38.1146 705.445 38.2812C704.153 38.4479 702.893 38.5312 701.664 38.5312C700.101 38.5312 698.56 38.4271 697.039 38.2188C695.518 37.9896 694.018 37.6354 692.539 37.1562C692.768 38.5312 693.133 39.8438 693.633 41.0938C694.133 42.3229 694.799 43.4062 695.633 44.3438C696.466 45.2604 697.487 45.9896 698.695 46.5312C699.924 47.0729 701.372 47.3438 703.039 47.3438C704.143 47.3438 705.195 47.1771 706.195 46.8438C707.195 46.5104 708.112 46.0417 708.945 45.4375C709.778 44.8333 710.508 44.1146 711.133 43.2812C711.778 42.4479 712.299 41.5208 712.695 40.5L717.258 42.1875C716.57 43.8333 715.622 45.2604 714.414 46.4688C713.226 47.6562 711.872 48.6458 710.351 49.4375C708.851 50.2083 707.247 50.7812 705.539 51.1562C703.851 51.5312 702.174 51.7188 700.508 51.7188C697.758 51.7188 695.216 51.2604 692.883 50.3438C690.549 49.4062 688.539 48.1042 686.851 46.4375C685.164 44.7708 683.841 42.7812 682.883 40.4688C681.924 38.1562 681.445 35.625 681.445 32.875C681.445 30.125 681.924 27.5938 682.883 25.2812C683.841 22.9688 685.164 20.9792 686.851 19.3125C688.539 17.6458 690.549 16.3542 692.883 15.4375C695.216 14.5 697.758 14.0312 700.508 14.0312C701.841 14.0312 703.205 14.125 704.601 14.3125C705.997 14.5 707.351 14.8021 708.664 15.2188C709.976 15.6146 711.216 16.1354 712.383 16.7812C713.549 17.4271 714.56 18.2292 715.414 19.1875C716.289 20.125 716.976 21.2188 717.476 22.4688C717.997 23.7188 718.258 25.1458 718.258 26.75Z" stroke="white" stroke-width="2"/>
    <path d="M757.194 39.4688C757.194 41.0521 756.965 42.4583 756.506 43.6875C756.048 44.9167 755.423 45.9896 754.631 46.9062C753.84 47.8021 752.902 48.5625 751.819 49.1875C750.735 49.7917 749.569 50.2812 748.319 50.6562C747.09 51.0312 745.798 51.3021 744.444 51.4688C743.09 51.6354 741.746 51.7188 740.412 51.7188C738.621 51.7188 737.037 51.6042 735.662 51.375C734.287 51.1458 732.975 50.7812 731.725 50.2812C730.475 49.7604 729.225 49.0938 727.975 48.2812C726.746 47.4688 725.371 46.4792 723.85 45.3125L730.006 40.2812C730.569 41.3438 731.308 42.3125 732.225 43.1875C733.162 44.0417 734.131 44.7812 735.131 45.4062C736.131 46.0312 737.1 46.5104 738.037 46.8438C738.975 47.1771 739.735 47.3438 740.319 47.3438C740.798 47.3438 741.34 47.3333 741.944 47.3125C742.548 47.2708 743.162 47.2083 743.787 47.125C744.412 47.0208 745.027 46.875 745.631 46.6875C746.235 46.5 746.767 46.25 747.225 45.9375C747.704 45.6042 748.079 45.1979 748.35 44.7188C748.642 44.2188 748.787 43.625 748.787 42.9375C748.787 42.2292 748.6 41.6146 748.225 41.0938C747.871 40.5521 747.402 40.0833 746.819 39.6875C746.235 39.2917 745.569 38.9583 744.819 38.6875C744.069 38.4167 743.308 38.1771 742.537 37.9688C741.787 37.7604 741.058 37.5833 740.35 37.4375C739.642 37.2708 739.027 37.1146 738.506 36.9688C737.548 36.6979 736.537 36.4271 735.475 36.1562C734.412 35.8646 733.36 35.5417 732.319 35.1875C731.277 34.8125 730.277 34.375 729.319 33.875C728.381 33.375 727.548 32.7812 726.819 32.0938C726.11 31.3854 725.537 30.5625 725.1 29.625C724.683 28.6667 724.475 27.5521 724.475 26.2812C724.475 23.9479 724.933 22 725.85 20.4375C726.787 18.8542 728.017 17.5938 729.537 16.6562C731.058 15.6979 732.787 15.0208 734.725 14.625C736.662 14.2292 738.631 14.0312 740.631 14.0312C742.006 14.0312 743.454 14.1771 744.975 14.4688C746.496 14.7396 747.975 15.1562 749.412 15.7188C750.85 16.2604 752.194 16.9271 753.444 17.7188C754.694 18.5104 755.735 19.4167 756.569 20.4375L750.412 25.5C749.954 24.25 749.35 23.1771 748.6 22.2812C747.871 21.3854 747.069 20.6562 746.194 20.0938C745.34 19.5104 744.454 19.0833 743.537 18.8125C742.642 18.5417 741.808 18.4062 741.037 18.4062C740.287 18.4062 739.444 18.4375 738.506 18.5C737.569 18.5625 736.683 18.7396 735.85 19.0312C735.037 19.3229 734.34 19.7708 733.756 20.375C733.194 20.9583 732.912 21.7708 732.912 22.8125C732.912 23.5625 733.079 24.2083 733.412 24.75C733.767 25.2708 734.225 25.7292 734.787 26.125C735.35 26.5 735.985 26.8229 736.694 27.0938C737.423 27.3438 738.162 27.5729 738.912 27.7812C739.662 27.9688 740.392 28.1354 741.1 28.2812C741.808 28.4271 742.444 28.5833 743.006 28.75C743.965 29.0208 744.975 29.3021 746.037 29.5938C747.121 29.8646 748.183 30.1875 749.225 30.5625C750.267 30.9167 751.267 31.3438 752.225 31.8438C753.204 32.3229 754.058 32.9167 754.787 33.625C755.517 34.3333 756.1 35.1667 756.537 36.125C756.975 37.0625 757.194 38.1771 757.194 39.4688Z" stroke="white" stroke-width="2"/>
    <path d="M801.505 51H790.943V46.6875C789.693 48.3958 788.182 49.6667 786.411 50.5C784.661 51.3125 782.734 51.7188 780.63 51.7188C777.88 51.7188 775.422 51.2292 773.255 50.25C771.088 49.2708 769.255 47.9375 767.755 46.25C766.255 44.5417 765.109 42.5417 764.318 40.25C763.526 37.9583 763.13 35.5 763.13 32.875C763.13 30.25 763.526 27.7917 764.318 25.5C765.109 23.2083 766.255 21.2188 767.755 19.5312C769.255 17.8229 771.088 16.4792 773.255 15.5C775.422 14.5208 777.88 14.0312 780.63 14.0312C782.026 14.0312 783.349 14.2396 784.599 14.6562C785.87 15.0729 787.026 15.6667 788.068 16.4375C789.13 17.1875 790.057 18.1042 790.849 19.1875C791.661 20.25 792.297 21.4375 792.755 22.75L797.443 14.9062H801.505V51ZM790.88 32.875C790.88 31.9375 790.828 30.9479 790.724 29.9062C790.64 28.8646 790.484 27.8333 790.255 26.8125C790.026 25.7917 789.703 24.8229 789.286 23.9062C788.89 22.9688 788.37 22.1458 787.724 21.4375C787.099 20.7083 786.338 20.1354 785.443 19.7188C784.547 19.3021 783.505 19.0938 782.318 19.0938C781.13 19.0938 780.099 19.3125 779.224 19.75C778.349 20.1667 777.599 20.7396 776.974 21.4688C776.349 22.1771 775.828 23 775.411 23.9375C775.015 24.875 774.703 25.8542 774.474 26.875C774.245 27.8958 774.078 28.9271 773.974 29.9688C773.89 30.9896 773.849 31.9583 773.849 32.875C773.849 33.7917 773.89 34.7708 773.974 35.8125C774.078 36.8542 774.245 37.8854 774.474 38.9062C774.703 39.9271 775.015 40.9062 775.411 41.8438C775.828 42.7812 776.349 43.6146 776.974 44.3438C777.599 45.0521 778.349 45.625 779.224 46.0625C780.099 46.4792 781.13 46.6875 782.318 46.6875C783.401 46.6875 784.359 46.4688 785.193 46.0312C786.047 45.5729 786.786 44.9688 787.411 44.2188C788.057 43.4688 788.599 42.6146 789.036 41.6562C789.474 40.6979 789.828 39.7083 790.099 38.6875C790.37 37.6667 790.568 36.6562 790.693 35.6562C790.818 34.6354 790.88 33.7083 790.88 32.875Z" stroke="white" stroke-width="2"/>
    <path d="M848.535 30.3125C848.535 32.75 848.233 35.2917 847.629 37.9375C847.045 40.5833 846.222 43.1771 845.16 45.7188C844.097 48.2604 842.827 50.6458 841.347 52.875C839.868 55.125 838.243 57.0625 836.472 58.6875L832.504 56.5312C833.066 55.4896 833.597 54.3229 834.097 53.0312C834.597 51.7396 835.045 50.375 835.441 48.9375C835.858 47.4792 836.222 45.9792 836.535 44.4375C836.868 42.8958 837.139 41.375 837.347 39.875C837.577 38.3542 837.743 36.8854 837.847 35.4688C837.972 34.0312 838.035 32.6979 838.035 31.4688C838.035 30.6562 838.004 29.7917 837.941 28.875C837.879 27.9375 837.743 27.0104 837.535 26.0938C837.347 25.1562 837.087 24.2604 836.754 23.4062C836.42 22.5521 835.972 21.8021 835.41 21.1562C834.868 20.5104 834.202 19.9896 833.41 19.5938C832.639 19.1979 831.722 19 830.66 19C829.618 19 828.691 19.2396 827.879 19.7188C827.066 20.1771 826.347 20.7917 825.722 21.5625C825.097 22.3125 824.556 23.1771 824.097 24.1562C823.66 25.1354 823.295 26.1458 823.004 27.1875C822.733 28.2083 822.535 29.2188 822.41 30.2188C822.285 31.2188 822.222 32.1146 822.222 32.9062V51H811.629V14.9062H815.691L820.535 23.3125C821.118 21.9167 821.847 20.6458 822.722 19.5C823.597 18.3542 824.587 17.375 825.691 16.5625C826.795 15.75 828.014 15.125 829.347 14.6875C830.702 14.25 832.16 14.0312 833.722 14.0312C836.222 14.0312 838.4 14.4375 840.254 15.25C842.108 16.0625 843.65 17.1979 844.879 18.6562C846.108 20.0938 847.025 21.8125 847.629 23.8125C848.233 25.7917 848.535 27.9583 848.535 30.3125Z" stroke="white" stroke-width="2" />
    </svg>

    </div>
    <h2 className="quotes pt-3">Run - Chase - Retain<br/>Apply What you choose in the race of learning</h2>
    </div>
    <RunAnimation/>
    </div>
  );
}
}

export default Name;
