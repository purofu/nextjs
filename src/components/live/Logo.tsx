import React from 'react';

export function Logo(props){
	const {
    color = "Yes"
  } = props;
  return (
      <>
  {(color == "Yes") && <>
    <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.94895 2.59156C5.83291 3.52954 6.12756 4.44117 6.12756 5.40637C6.12756 8.64977 3.39355 10.9556 3.39355 14.6812C3.39355 18.1134 5.79339 21.6071 12.7334 21.6071C18.9194 21.6071 22.1821 18.5789 22.1821 15.3522C22.1821 12.5914 20.1977 10.2508 16.3685 9.88284L16.3153 10.0172C17.1962 10.4041 19.1675 11.938 19.1675 15.0233C19.1675 17.9281 16.7163 20.8597 12.8669 20.8597C8.07466 20.8597 6.42266 18.0598 6.42266 15.4861C6.42266 12.1891 8.72852 9.99086 8.72852 6.98767C8.72852 4.89654 7.14678 2.83264 5.02887 2.45719L4.94895 2.59156Z" fill="#E74A21" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.8141 16.987L14.5565 0.392822H10.9109L12.6534 16.987H12.8141ZM106.518 9.06245V20.0086L104.774 20.4104V20.8601H110.25V20.4104L108.507 20.0086V9.06245H111.46L112.432 11.1408H112.807L112.526 8.40596H102.498L102.217 11.1408H102.593L103.561 9.06245H106.518ZM95.7261 14.771C96.1551 14.6608 98.6283 14.032 98.6283 11.6774C98.6283 9.80186 97.1915 8.34879 93.6539 8.34879C91.4679 8.34879 89.2556 8.39885 88.9868 8.40544V8.85423L90.4311 9.2591V20.0072L88.9868 20.4099V20.8595H94.0983V20.4103L92.4199 20.0076V15.1487H93.8642L97.559 20.8595H100.829V20.4283L99.1733 20.0076L95.7261 14.771ZM77.7168 15.646H81.8591L79.8023 10.0941H79.7838L77.7168 15.646ZM73.861 20.41L75.2719 20.0087L79.6233 8.40385L81.0785 8.03059L85.5721 20.0078L86.9822 20.41V20.8601H81.6485V20.41L83.452 20.0078L82.1786 16.565H77.3934L76.1269 20.0087L77.9326 20.41V20.8601H73.861V20.41ZM124.626 17.4316H124.971L126.136 20.1102C126.484 20.2841 127.354 20.6635 128.363 20.6635C129.872 20.6635 131.253 19.7638 131.253 18.2123C131.253 17.0183 130.482 16.3048 129.227 15.6531C128.826 15.4445 128.408 15.2276 127.99 15.0098C126.508 14.2391 125.03 13.1514 125.03 11.3993C125.03 9.4952 126.368 8.02149 129.169 8.02149C130.61 8.02149 131.842 8.42109 132.085 8.50189L132.378 11.3834H132.003L130.925 9.0732C130.725 8.97088 130.078 8.60245 129.123 8.60245C127.697 8.60245 126.723 9.48203 126.723 10.698C126.723 11.8019 127.457 12.4949 128.711 13.1444C129.176 13.3846 129.692 13.6546 130.18 13.9071C132.182 14.9439 133.132 15.9034 133.132 17.6841C133.132 19.8814 131.072 21.2449 128.514 21.2449C126.556 21.2449 125.358 20.8401 124.959 20.7154L124.626 17.4316ZM115.796 20.4104L117.54 20.0086V9.2583L115.796 8.85606V8.40596H121.274V8.85562L119.528 9.2583V20.0086L121.274 20.4104V20.8601H115.796V20.4104ZM93.2199 14.501H92.4202V9.06157C95.0756 9.06157 96.6218 9.66538 96.6218 11.8189C96.6218 13.4182 95.2399 14.501 93.2199 14.501ZM63.4067 9.25874L62.0963 8.85562V8.40596H67.1419V8.85562L65.5623 9.2583L69.0464 18.7527H69.0653L72.5493 9.25874L70.9693 8.85606V8.40596H74.7028V8.85606L73.4038 9.25874L68.9875 21.0853H67.8699L63.4067 9.25874ZM58.6089 14.9618C58.6089 11.7355 56.6771 8.60274 54.0512 8.60274C51.2565 8.60274 50.0002 11.3043 50.0002 14.1928C50.0002 17.0621 51.5942 20.6634 54.5952 20.6634C57.4083 20.6634 58.6089 17.8126 58.6089 14.9618ZM60.7474 14.3054C60.7474 18.7134 57.6897 21.2449 54.3137 21.2449C50.8999 21.2449 47.8801 18.6567 47.8801 14.6427C47.8801 10.5913 50.9377 8.02149 54.2948 8.02149C58.4218 8.02149 60.7474 11.2293 60.7474 14.3054ZM43.5503 21.0572L35.3255 10.4505V20.0086L37.0038 20.4104V20.8601H33.1777V20.4104L34.5469 20.0086V9.59643C34.4116 9.46952 33.897 9.04313 33.3643 8.92808C33.1988 8.89207 32.9713 8.85518 32.9713 8.85518V8.40596H36.216L43.2596 17.5403V9.25918L41.5826 8.85606V8.40596H45.4069V8.85606L44.0377 9.25918V18.7404C44.0377 19.6063 44.0992 20.8952 44.1115 21.0572H43.5503Z" fill="#0460A9" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6896 21.4752C18.8756 21.4752 22.1383 18.447 22.1383 15.2203C22.1383 12.4595 20.1539 10.1189 16.3247 9.75096L16.2716 9.88533C17.1525 10.2722 19.1237 11.8061 19.1237 14.8914C19.1237 17.7962 16.6725 20.7278 12.8231 20.7278C12.5363 20.7278 12.6031 21.4752 12.6896 21.4752Z" fill="#EC9A1E" />
    </svg>
  </>}
  {(color == "No") && <>
    <svg className="logo" width={135} height={23} viewBox="0 0 135 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.94895 2.59156C5.83291 3.52954 6.12756 4.44117 6.12756 5.40637C6.12756 8.64977 3.39355 10.9556 3.39355 14.6812C3.39355 18.1134 5.79339 21.6071 12.7334 21.6071C18.9194 21.6071 22.1821 18.5789 22.1821 15.3522C22.1821 12.5914 20.1977 10.2508 16.3685 9.88284L16.3153 10.0172C17.1962 10.4041 19.1675 11.938 19.1675 15.0233C19.1675 17.9281 16.7163 20.8597 12.8669 20.8597C8.07466 20.8597 6.42266 18.0598 6.42266 15.4861C6.42266 12.1891 8.72852 9.99086 8.72852 6.98767C8.72852 4.89654 7.14678 2.83264 5.02887 2.45719L4.94895 2.59156Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.8141 16.987L14.5565 0.392822H10.9109L12.6534 16.987H12.8141ZM106.518 9.06245V20.0086L104.774 20.4104V20.8601H110.25V20.4104L108.507 20.0086V9.06245H111.46L112.432 11.1408H112.807L112.526 8.40596H102.498L102.217 11.1408H102.593L103.561 9.06245H106.518ZM95.7261 14.771C96.1551 14.6608 98.6283 14.032 98.6283 11.6774C98.6283 9.80186 97.1915 8.34879 93.6539 8.34879C91.4679 8.34879 89.2556 8.39885 88.9868 8.40544V8.85423L90.4311 9.2591V20.0072L88.9868 20.4099V20.8595H94.0983V20.4103L92.4199 20.0076V15.1487H93.8642L97.559 20.8595H100.829V20.4283L99.1733 20.0076L95.7261 14.771ZM77.7168 15.646H81.8591L79.8023 10.0941H79.7838L77.7168 15.646ZM73.861 20.41L75.2719 20.0087L79.6233 8.40385L81.0785 8.03059L85.5721 20.0078L86.9822 20.41V20.8601H81.6485V20.41L83.452 20.0078L82.1786 16.565H77.3934L76.1269 20.0087L77.9326 20.41V20.8601H73.861V20.41ZM124.626 17.4316H124.971L126.136 20.1102C126.484 20.2841 127.354 20.6635 128.363 20.6635C129.872 20.6635 131.253 19.7638 131.253 18.2123C131.253 17.0183 130.482 16.3048 129.227 15.6531C128.826 15.4445 128.408 15.2276 127.99 15.0098C126.508 14.2391 125.03 13.1514 125.03 11.3993C125.03 9.4952 126.368 8.02149 129.169 8.02149C130.61 8.02149 131.842 8.42109 132.085 8.50189L132.378 11.3834H132.003L130.925 9.0732C130.725 8.97088 130.078 8.60245 129.123 8.60245C127.697 8.60245 126.723 9.48203 126.723 10.698C126.723 11.8019 127.457 12.4949 128.711 13.1444C129.176 13.3846 129.692 13.6546 130.18 13.9071C132.182 14.9439 133.132 15.9034 133.132 17.6841C133.132 19.8814 131.072 21.2449 128.514 21.2449C126.556 21.2449 125.358 20.8401 124.959 20.7154L124.626 17.4316ZM115.796 20.4104L117.54 20.0086V9.2583L115.796 8.85606V8.40596H121.274V8.85562L119.528 9.2583V20.0086L121.274 20.4104V20.8601H115.796V20.4104ZM93.2199 14.501H92.4202V9.06157C95.0756 9.06157 96.6218 9.66538 96.6218 11.8189C96.6218 13.4182 95.2399 14.501 93.2199 14.501ZM63.4067 9.25874L62.0963 8.85562V8.40596H67.1419V8.85562L65.5623 9.2583L69.0464 18.7527H69.0653L72.5493 9.25874L70.9693 8.85606V8.40596H74.7028V8.85606L73.4038 9.25874L68.9875 21.0853H67.8699L63.4067 9.25874ZM58.6089 14.9618C58.6089 11.7355 56.6771 8.60274 54.0512 8.60274C51.2565 8.60274 50.0002 11.3043 50.0002 14.1928C50.0002 17.0621 51.5942 20.6634 54.5952 20.6634C57.4083 20.6634 58.6089 17.8126 58.6089 14.9618ZM60.7474 14.3054C60.7474 18.7134 57.6897 21.2449 54.3137 21.2449C50.8999 21.2449 47.8801 18.6567 47.8801 14.6427C47.8801 10.5913 50.9377 8.02149 54.2948 8.02149C58.4218 8.02149 60.7474 11.2293 60.7474 14.3054ZM43.5503 21.0572L35.3255 10.4505V20.0086L37.0038 20.4104V20.8601H33.1777V20.4104L34.5469 20.0086V9.59643C34.4116 9.46952 33.897 9.04313 33.3643 8.92808C33.1988 8.89207 32.9713 8.85518 32.9713 8.85518V8.40596H36.216L43.2596 17.5403V9.25918L41.5826 8.85606V8.40596H45.4069V8.85606L44.0377 9.25918V18.7404C44.0377 19.6063 44.0992 20.8952 44.1115 21.0572H43.5503Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6896 21.4752C18.8756 21.4752 22.1383 18.447 22.1383 15.2203C22.1383 12.4595 20.1539 10.1189 16.3247 9.75096L16.2716 9.88533C17.1525 10.2722 19.1237 11.8061 19.1237 14.8914C19.1237 17.7962 16.6725 20.7278 12.8231 20.7278C12.5363 20.7278 12.6031 21.4752 12.6896 21.4752Z" fill="white" />
    </svg>
  </>}
</>
  );
}