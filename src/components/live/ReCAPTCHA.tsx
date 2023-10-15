import React from 'react';

export function ReCAPTCHA(props){
  return (
      <div className="reCAPTCHA w-[302px] h-[76px] relative opacity-100 p-0">
  <div className="bg w-[302px] h-[76px] absolute border shadow-[0px_0px_4px_rgba(0,0,0,0.08)] bg-[#f9f9f9] opacity-100 p-0 rounded-[3px] border-[#d3d3d3] top-0" />
  <div className="reCAPTCHA w-[66px] h-[62px] absolute opacity-100 p-0 right-[7px] top-[7px]">
    <div className="text w-[55.42px] h-[19.68px] absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
      <svg width={56} height={21} viewBox="0 0 56 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.2373 3.52734C4.10059 3.50456 3.95247 3.49316 3.79297 3.49316C3.20052 3.49316 2.7985 3.74544 2.58691 4.25V8H1.68359V2.7168H2.5625L2.57715 3.32715C2.87337 2.85514 3.29329 2.61914 3.83691 2.61914C4.0127 2.61914 4.14616 2.64193 4.2373 2.6875V3.52734Z" fill="#555555" />
        <path d="M7.16699 8.09766C6.45085 8.09766 5.86816 7.86328 5.41895 7.39453C4.96973 6.92253 4.74512 6.29264 4.74512 5.50488V5.33887C4.74512 4.81478 4.8444 4.34766 5.04297 3.9375C5.24479 3.52409 5.52474 3.20182 5.88281 2.9707C6.24414 2.73633 6.63477 2.61914 7.05469 2.61914C7.74154 2.61914 8.27539 2.84538 8.65625 3.29785C9.03711 3.75033 9.22754 4.39811 9.22754 5.24121V5.61719H5.64844C5.66146 6.13802 5.81283 6.55957 6.10254 6.88184C6.39551 7.20085 6.7666 7.36035 7.21582 7.36035C7.53483 7.36035 7.80501 7.29525 8.02637 7.16504C8.24772 7.03483 8.44141 6.8623 8.60742 6.64746L9.15918 7.07715C8.71647 7.75749 8.05241 8.09766 7.16699 8.09766ZM7.05469 3.36133C6.6901 3.36133 6.38411 3.49479 6.13672 3.76172C5.88932 4.02539 5.73633 4.39648 5.67773 4.875H8.32422V4.80664C8.29818 4.34766 8.17448 3.99284 7.95312 3.74219C7.73177 3.48828 7.43229 3.36133 7.05469 3.36133Z" fill="#555555" />
        <path d="M15.6484 5.74414C15.5605 6.49609 15.2822 7.07715 14.8135 7.4873C14.348 7.89421 13.7279 8.09766 12.9531 8.09766C12.1133 8.09766 11.4395 7.79655 10.9316 7.19434C10.4271 6.59212 10.1748 5.78646 10.1748 4.77734V4.09375C10.1748 3.43294 10.292 2.85189 10.5264 2.35059C10.764 1.84928 11.0993 1.46517 11.5322 1.19824C11.9652 0.92806 12.4665 0.792969 13.0361 0.792969C13.7913 0.792969 14.3968 1.00456 14.8525 1.42773C15.3083 1.84766 15.5736 2.43034 15.6484 3.17578H14.7061C14.6247 2.60938 14.4473 2.19922 14.1738 1.94531C13.9036 1.69141 13.5244 1.56445 13.0361 1.56445C12.4372 1.56445 11.9668 1.78581 11.625 2.22852C11.2865 2.67122 11.1172 3.30111 11.1172 4.11816V4.80664C11.1172 5.57812 11.2783 6.19173 11.6006 6.64746C11.9229 7.10319 12.3737 7.33105 12.9531 7.33105C13.474 7.33105 13.8727 7.21387 14.1494 6.97949C14.4294 6.74186 14.6149 6.33008 14.7061 5.74414H15.6484Z" fill="#555555" />
        <path d="M20.8584 6.14453H17.8799L17.2109 8H16.2441L18.959 0.890625H19.7793L22.499 8H21.5371L20.8584 6.14453ZM18.1631 5.37305H20.5801L19.3691 2.04785L18.1631 5.37305Z" fill="#555555" />
        <path d="M24.3936 5.2168V8H23.4561V0.890625H26.0781C26.8561 0.890625 27.4648 1.08919 27.9043 1.48633C28.347 1.88346 28.5684 2.40918 28.5684 3.06348C28.5684 3.75358 28.3519 4.28581 27.9189 4.66016C27.4893 5.03125 26.8724 5.2168 26.0684 5.2168H24.3936ZM24.3936 4.4502H26.0781C26.5794 4.4502 26.9635 4.33301 27.2305 4.09863C27.4974 3.861 27.6309 3.51921 27.6309 3.07324C27.6309 2.65007 27.4974 2.31152 27.2305 2.05762C26.9635 1.80371 26.5973 1.67188 26.1318 1.66211H24.3936V4.4502Z" fill="#555555" />
        <path d="M34.6768 1.66211H32.3916V8H31.459V1.66211H29.1787V0.890625H34.6768V1.66211Z" fill="#555555" />
        <path d="M40.8242 5.74414C40.7363 6.49609 40.458 7.07715 39.9893 7.4873C39.5238 7.89421 38.9036 8.09766 38.1289 8.09766C37.2891 8.09766 36.6152 7.79655 36.1074 7.19434C35.6029 6.59212 35.3506 5.78646 35.3506 4.77734V4.09375C35.3506 3.43294 35.4678 2.85189 35.7021 2.35059C35.9398 1.84928 36.2751 1.46517 36.708 1.19824C37.1409 0.92806 37.6423 0.792969 38.2119 0.792969C38.9671 0.792969 39.5726 1.00456 40.0283 1.42773C40.4841 1.84766 40.7493 2.43034 40.8242 3.17578H39.8818C39.8005 2.60938 39.623 2.19922 39.3496 1.94531C39.0794 1.69141 38.7002 1.56445 38.2119 1.56445C37.613 1.56445 37.1426 1.78581 36.8008 2.22852C36.4622 2.67122 36.293 3.30111 36.293 4.11816V4.80664C36.293 5.57812 36.4541 6.19173 36.7764 6.64746C37.0986 7.10319 37.5495 7.33105 38.1289 7.33105C38.6497 7.33105 39.0485 7.21387 39.3252 6.97949C39.6051 6.74186 39.7907 6.33008 39.8818 5.74414H40.8242Z" fill="#555555" />
        <path d="M47.5723 8H46.6299V4.71387H43.0459V8H42.1084V0.890625H43.0459V3.94727H46.6299V0.890625H47.5723V8Z" fill="#555555" />
        <path d="M53.251 6.14453H50.2725L49.6035 8H48.6367L51.3516 0.890625H52.1719L54.8916 8H53.9297L53.251 6.14453ZM50.5557 5.37305H52.9727L51.7617 2.04785L50.5557 5.37305Z" fill="#555555" />
        <path d="M0.75 16.5391V18.7656H0V13.0781H2.09766C2.72005 13.0781 3.20703 13.237 3.55859 13.5547C3.91276 13.8724 4.08984 14.293 4.08984 14.8164C4.08984 15.3685 3.91667 15.7943 3.57031 16.0938C3.22656 16.3906 2.73307 16.5391 2.08984 16.5391H0.75ZM0.75 15.9258H2.09766C2.4987 15.9258 2.80599 15.832 3.01953 15.6445C3.23307 15.4544 3.33984 15.181 3.33984 14.8242C3.33984 14.4857 3.23307 14.2148 3.01953 14.0117C2.80599 13.8086 2.51302 13.7031 2.14062 13.6953H0.75V15.9258Z" fill="#555555" />
        <path d="M6.97656 15.1875C6.86719 15.1693 6.7487 15.1602 6.62109 15.1602C6.14714 15.1602 5.82552 15.362 5.65625 15.7656V18.7656H4.93359V14.5391H5.63672L5.64844 15.0273C5.88542 14.6497 6.22135 14.4609 6.65625 14.4609C6.79688 14.4609 6.90365 14.4792 6.97656 14.5156V15.1875Z" fill="#555555" />
        <path d="M8.42969 18.7656H7.70703V14.5391H8.42969V18.7656ZM7.64844 13.418C7.64844 13.3008 7.68359 13.2018 7.75391 13.1211C7.82682 13.0404 7.93359 13 8.07422 13C8.21484 13 8.32161 13.0404 8.39453 13.1211C8.46745 13.2018 8.50391 13.3008 8.50391 13.418C8.50391 13.5352 8.46745 13.6328 8.39453 13.7109C8.32161 13.7891 8.21484 13.8281 8.07422 13.8281C7.93359 13.8281 7.82682 13.7891 7.75391 13.7109C7.68359 13.6328 7.64844 13.5352 7.64844 13.418Z" fill="#555555" />
        <path d="M10.9844 17.7852L12.0312 14.5391H12.7695L11.2539 18.7656H10.7031L9.17188 14.5391H9.91016L10.9844 17.7852Z" fill="#555555" />
        <path d="M16.0117 18.7656C15.9701 18.6823 15.9362 18.5339 15.9102 18.3203C15.5742 18.6693 15.1732 18.8438 14.707 18.8438C14.2904 18.8438 13.9479 18.7266 13.6797 18.4922C13.4141 18.2552 13.2812 17.9557 13.2812 17.5938C13.2812 17.1536 13.4479 16.8125 13.7812 16.5703C14.1172 16.3255 14.5885 16.2031 15.1953 16.2031H15.8984V15.8711C15.8984 15.6185 15.8229 15.418 15.6719 15.2695C15.5208 15.1185 15.2982 15.043 15.0039 15.043C14.7461 15.043 14.5299 15.1081 14.3555 15.2383C14.181 15.3685 14.0938 15.526 14.0938 15.7109H13.3672C13.3672 15.5 13.4414 15.2969 13.5898 15.1016C13.7409 14.9036 13.944 14.7474 14.1992 14.6328C14.457 14.5182 14.7396 14.4609 15.0469 14.4609C15.5339 14.4609 15.9154 14.5833 16.1914 14.8281C16.4674 15.0703 16.6107 15.4049 16.6211 15.832V17.7773C16.6211 18.1654 16.6706 18.474 16.7695 18.7031V18.7656H16.0117ZM14.8125 18.2148C15.0391 18.2148 15.2539 18.1562 15.457 18.0391C15.6602 17.9219 15.8073 17.7695 15.8984 17.582V16.7148H15.332C14.4466 16.7148 14.0039 16.974 14.0039 17.4922C14.0039 17.7188 14.0794 17.8958 14.2305 18.0234C14.3815 18.151 14.5755 18.2148 14.8125 18.2148Z" fill="#555555" />
        <path d="M19.4492 18.2539C19.707 18.2539 19.9323 18.1758 20.125 18.0195C20.3177 17.8633 20.4245 17.668 20.4453 17.4336H21.1289C21.1159 17.6758 21.0326 17.9062 20.8789 18.125C20.7253 18.3438 20.5195 18.5182 20.2617 18.6484C20.0065 18.7786 19.7357 18.8438 19.4492 18.8438C18.8737 18.8438 18.4154 18.6523 18.0742 18.2695C17.7357 17.8841 17.5664 17.3581 17.5664 16.6914V16.5703C17.5664 16.1589 17.6419 15.793 17.793 15.4727C17.944 15.1523 18.1602 14.9036 18.4414 14.7266C18.7253 14.5495 19.0599 14.4609 19.4453 14.4609C19.9193 14.4609 20.3125 14.6029 20.625 14.8867C20.9401 15.1706 21.1081 15.5391 21.1289 15.9922H20.4453C20.4245 15.7188 20.3203 15.4948 20.1328 15.3203C19.9479 15.1432 19.7188 15.0547 19.4453 15.0547C19.0781 15.0547 18.793 15.1875 18.5898 15.4531C18.3893 15.7161 18.2891 16.0977 18.2891 16.5977V16.7344C18.2891 17.2214 18.3893 17.5964 18.5898 17.8594C18.7904 18.1224 19.0768 18.2539 19.4492 18.2539Z" fill="#555555" />
        <path d="M23.3242 17.707L24.3086 14.5391H25.082L23.3828 19.418C23.1198 20.1211 22.7018 20.4727 22.1289 20.4727L21.9922 20.4609L21.7227 20.4102V19.8242L21.918 19.8398C22.1628 19.8398 22.3529 19.7904 22.4883 19.6914C22.6263 19.5924 22.7396 19.4115 22.8281 19.1484L22.9883 18.7188L21.4805 14.5391H22.2695L23.3242 17.707Z" fill="#555555" />
        <path d="M37.9297 13.6953H36.1016V18.7656H35.3555V13.6953H33.5312V13.0781H37.9297V13.6953Z" fill="#555555" />
        <path d="M40.0234 18.8438C39.4505 18.8438 38.9844 18.6562 38.625 18.2812C38.2656 17.9036 38.0859 17.3997 38.0859 16.7695V16.6367C38.0859 16.2174 38.1654 15.8438 38.3242 15.5156C38.4857 15.1849 38.7096 14.9271 38.9961 14.7422C39.2852 14.5547 39.5977 14.4609 39.9336 14.4609C40.4831 14.4609 40.9102 14.6419 41.2148 15.0039C41.5195 15.3659 41.6719 15.8841 41.6719 16.5586V16.8594H38.8086C38.819 17.276 38.9401 17.6133 39.1719 17.8711C39.4062 18.1263 39.7031 18.2539 40.0625 18.2539C40.3177 18.2539 40.5339 18.2018 40.7109 18.0977C40.888 17.9935 41.043 17.8555 41.1758 17.6836L41.6172 18.0273C41.263 18.5716 40.7318 18.8438 40.0234 18.8438ZM39.9336 15.0547C39.6419 15.0547 39.3971 15.1615 39.1992 15.375C39.0013 15.5859 38.8789 15.8828 38.832 16.2656H40.9492V16.2109C40.9284 15.8438 40.8294 15.5599 40.6523 15.3594C40.4753 15.1562 40.2357 15.0547 39.9336 15.0547Z" fill="#555555" />
        <path d="M44.5547 15.1875C44.4453 15.1693 44.3268 15.1602 44.1992 15.1602C43.7253 15.1602 43.4036 15.362 43.2344 15.7656V18.7656H42.5117V14.5391H43.2148L43.2266 15.0273C43.4635 14.6497 43.7995 14.4609 44.2344 14.4609C44.375 14.4609 44.4818 14.4792 44.5547 14.5156V15.1875Z" fill="#555555" />
        <path d="M45.9023 14.5391L45.9219 15.0078C46.2318 14.6432 46.6497 14.4609 47.1758 14.4609C47.7669 14.4609 48.1693 14.6875 48.3828 15.1406C48.5234 14.9375 48.7057 14.7734 48.9297 14.6484C49.1562 14.5234 49.4232 14.4609 49.7305 14.4609C50.6576 14.4609 51.1289 14.9518 51.1445 15.9336V18.7656H50.4219V15.9766C50.4219 15.6745 50.3529 15.4492 50.2148 15.3008C50.0768 15.1497 49.8451 15.0742 49.5195 15.0742C49.2513 15.0742 49.0286 15.1549 48.8516 15.3164C48.6745 15.4753 48.5716 15.6901 48.543 15.9609V18.7656H47.8164V15.9961C47.8164 15.3815 47.5156 15.0742 46.9141 15.0742C46.4401 15.0742 46.1159 15.276 45.9414 15.6797V18.7656H45.2188V14.5391H45.9023Z" fill="#555555" />
        <path d="M54.6992 17.6445C54.6992 17.4492 54.625 17.2982 54.4766 17.1914C54.3307 17.082 54.0742 16.9883 53.707 16.9102C53.3424 16.832 53.0521 16.7383 52.8359 16.6289C52.6224 16.5195 52.4635 16.3893 52.3594 16.2383C52.2578 16.0872 52.207 15.9076 52.207 15.6992C52.207 15.3529 52.3529 15.0599 52.6445 14.8203C52.9388 14.5807 53.3138 14.4609 53.7695 14.4609C54.2487 14.4609 54.6367 14.5846 54.9336 14.832C55.2331 15.0794 55.3828 15.3958 55.3828 15.7812H54.6562C54.6562 15.5833 54.5716 15.4128 54.4023 15.2695C54.2357 15.1263 54.0247 15.0547 53.7695 15.0547C53.5065 15.0547 53.3008 15.112 53.1523 15.2266C53.0039 15.3411 52.9297 15.4909 52.9297 15.6758C52.9297 15.8503 52.9987 15.9818 53.1367 16.0703C53.2747 16.1589 53.5234 16.2435 53.8828 16.3242C54.2448 16.4049 54.5378 16.5013 54.7617 16.6133C54.9857 16.7253 55.151 16.8607 55.2578 17.0195C55.3672 17.1758 55.4219 17.3672 55.4219 17.5938C55.4219 17.9714 55.2708 18.2747 54.9688 18.5039C54.6667 18.7305 54.2747 18.8438 53.793 18.8438C53.4544 18.8438 53.1549 18.7839 52.8945 18.6641C52.6341 18.5443 52.4297 18.3776 52.2812 18.1641C52.1354 17.9479 52.0625 17.7148 52.0625 17.4648H52.7852C52.7982 17.707 52.8945 17.8997 53.0742 18.043C53.2565 18.1836 53.4961 18.2539 53.793 18.2539C54.0664 18.2539 54.2852 18.1992 54.4492 18.0898C54.6159 17.9779 54.6992 17.8294 54.6992 17.6445Z" fill="#555555" />
      </svg>
      <svg width={3} height={1} viewBox="0 0 3 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.32812 0.964844H0.277344V0.199219H2.32812V0.964844Z" fill="black" />
      </svg>
      <div className="terms w-[23px] h-2.5 absolute overflow-hidden opacity-100 p-0 left-[33px] top-[10.20703125px]" />
      <div className="privacy w-[25px] h-2.5 absolute overflow-hidden opacity-100 p-0 left-0 top-[10.20703125px]" />
    </div>
    <svg className="reCAPTCHASymbol" width={31} height={31} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_5_797)">
        <path d="M26.401 6.33783C26.2655 6.16908 26.126 6.0031 25.9824 5.84004C23.6876 3.234 20.5214 1.55399 17.0769 1.1147C13.6324 0.675412 10.1459 1.50698 7.27051 3.45365L11.387 9.53409C12.783 8.58899 14.4757 8.18526 16.148 8.39854C17.8203 8.61181 19.3574 9.42745 20.4716 10.6927C20.7213 10.9763 20.9459 11.2781 21.1441 11.5947L17.5003 15.2385H29.6097V3.12915L26.401 6.33783Z" fill="#1C3AA9" />
      </g>
      <g filter="url(#filter1_d_5_797)">
        <path d="M15.2385 1.00049H3.12913L6.30096 4.1723C3.93077 6.08776 2.227 8.7199 1.45684 11.6902C0.585324 15.0514 0.969142 18.6151 2.5364 21.7137L9.08876 18.3995C8.32786 16.8952 8.14151 15.165 8.56464 13.5331C8.98776 11.9013 9.99131 10.4796 11.3873 9.53452C11.4424 9.49724 11.4979 9.4608 11.5539 9.42521L15.2385 13.1098V1.00049Z" fill="#4285F4" />
      </g>
      <g filter="url(#filter2_d_5_797)">
        <path d="M1 15.3716H13.1093L9.45072 19.0302C10.2265 20.2318 11.3592 21.1693 12.6981 21.705C14.2634 22.3312 16.0032 22.3652 17.5917 21.8007C19.1803 21.2363 20.5085 20.112 21.3277 18.6385L26.6238 23.9213C24.9537 26.1132 22.6744 27.7873 20.0504 28.7197C16.7784 29.8824 13.1948 29.8123 9.97081 28.5225C7.70288 27.6153 5.72237 26.1482 4.20162 24.2793L1 27.4809V15.3716Z" fill="#ABABAB" />
      </g>
      <defs>
        <filter id="filter0_d_5_797" x="6.27051" y={0} width="24.3389" height="16.2385" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.38 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_797" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_797" result="shape" />
        </filter>
        <filter id="filter1_d_5_797" x={0} y="0.000488281" width="16.2383" height="22.7131" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.38 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_797" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_797" result="shape" />
        </filter>
        <filter id="filter2_d_5_797" x={0} y="14.3716" width="27.624" height="16.1719" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.38 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_797" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_797" result="shape" />
        </filter>
      </defs>
    </svg>
  </div>
  <div className="robot w-[130px] h-7 absolute opacity-100 p-0 left-[13px] top-[23px]">
    <svg width={89} height={12} viewBox="0 0 89 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5625 11H0.25V1.04688H1.5625V11Z" fill="black" />
      <path d="M3.85938 3.84961L3.1416 3.35742C3.56543 2.76497 3.78418 2.14062 3.79785 1.48438V0.5H5.04883V1.38867C5.04427 1.8444 4.93034 2.30013 4.70703 2.75586C4.48828 3.20703 4.20573 3.57161 3.85938 3.84961Z" fill="black" />
      <path d="M7.62598 3.60352L7.66016 4.42383C8.20247 3.78581 8.93392 3.4668 9.85449 3.4668C10.889 3.4668 11.5931 3.86328 11.9668 4.65625C12.2129 4.30078 12.5319 4.01367 12.9238 3.79492C13.3203 3.57617 13.7874 3.4668 14.3252 3.4668C15.9476 3.4668 16.7725 4.32585 16.7998 6.04395V11H15.5352V6.11914C15.5352 5.59049 15.4144 5.19629 15.1729 4.93652C14.9313 4.6722 14.5257 4.54004 13.9561 4.54004C13.4867 4.54004 13.097 4.68131 12.7871 4.96387C12.4772 5.24186 12.2972 5.61784 12.2471 6.0918V11H10.9756V6.15332C10.9756 5.0778 10.4492 4.54004 9.39648 4.54004C8.56706 4.54004 7.99967 4.89323 7.69434 5.59961V11H6.42969V3.60352H7.62598Z" fill="black" />
      <path d="M23.3828 3.60352L23.4238 4.5332C23.9889 3.82227 24.7272 3.4668 25.6387 3.4668C27.2018 3.4668 27.9902 4.34863 28.0039 6.1123V11H26.7393V6.10547C26.7347 5.57227 26.6117 5.17806 26.3701 4.92285C26.1331 4.66764 25.7617 4.54004 25.2559 4.54004C24.8457 4.54004 24.4857 4.64941 24.1758 4.86816C23.8659 5.08691 23.6243 5.37402 23.4512 5.72949V11H22.1865V3.60352H23.3828Z" fill="black" />
      <path d="M29.5762 7.2334C29.5762 6.50879 29.7174 5.8571 30 5.27832C30.2871 4.69954 30.6836 4.25293 31.1895 3.93848C31.6999 3.62402 32.2809 3.4668 32.9326 3.4668C33.9398 3.4668 34.7533 3.81543 35.373 4.5127C35.9974 5.20996 36.3096 6.13737 36.3096 7.29492V7.38379C36.3096 8.10384 36.1706 8.75098 35.8926 9.3252C35.6191 9.89486 35.2249 10.3392 34.71 10.6582C34.1995 10.9772 33.6117 11.1367 32.9463 11.1367C31.9437 11.1367 31.1302 10.7881 30.5059 10.0908C29.8861 9.39355 29.5762 8.4707 29.5762 7.32227V7.2334ZM30.8477 7.38379C30.8477 8.2041 31.0368 8.86263 31.415 9.35938C31.7979 9.85612 32.3083 10.1045 32.9463 10.1045C33.5889 10.1045 34.0993 9.85384 34.4775 9.35254C34.8558 8.84668 35.0449 8.1403 35.0449 7.2334C35.0449 6.4222 34.8512 5.76595 34.4639 5.26465C34.0811 4.75879 33.5706 4.50586 32.9326 4.50586C32.3083 4.50586 31.8047 4.75423 31.4219 5.25098C31.0391 5.74772 30.8477 6.45866 30.8477 7.38379Z" fill="black" />
      <path d="M39.6113 1.8125V3.60352H40.9922V4.58105H39.6113V9.16797C39.6113 9.46419 39.6729 9.6875 39.7959 9.83789C39.9189 9.98372 40.1286 10.0566 40.4248 10.0566C40.5706 10.0566 40.7712 10.0293 41.0264 9.97461V11C40.6937 11.0911 40.3701 11.1367 40.0557 11.1367C39.4906 11.1367 39.0645 10.9658 38.7773 10.624C38.4902 10.2822 38.3467 9.79688 38.3467 9.16797V4.58105H37V3.60352H38.3467V1.8125H39.6113Z" fill="black" />
      <path d="M50.5146 11C50.4417 10.8542 50.3825 10.5944 50.3369 10.2207C49.749 10.8314 49.0472 11.1367 48.2314 11.1367C47.5023 11.1367 46.903 10.9316 46.4336 10.5215C45.9688 10.1068 45.7363 9.58268 45.7363 8.94922C45.7363 8.17904 46.028 7.58203 46.6113 7.1582C47.1992 6.72982 48.0241 6.51562 49.0859 6.51562H50.3164V5.93457C50.3164 5.49251 50.1842 5.1416 49.9199 4.88184C49.6556 4.61751 49.2659 4.48535 48.751 4.48535C48.2998 4.48535 47.9216 4.59928 47.6162 4.82715C47.3109 5.05501 47.1582 5.33073 47.1582 5.6543H45.8867C45.8867 5.28516 46.0166 4.92969 46.2764 4.58789C46.5407 4.24154 46.8962 3.9681 47.3428 3.76758C47.7939 3.56706 48.2884 3.4668 48.8262 3.4668C49.6784 3.4668 50.346 3.68099 50.8291 4.10938C51.3122 4.5332 51.5628 5.11881 51.5811 5.86621V9.27051C51.5811 9.94954 51.6676 10.4896 51.8408 10.8906V11H50.5146ZM48.416 10.0361C48.8125 10.0361 49.1885 9.93359 49.5439 9.72852C49.8994 9.52344 50.1569 9.25684 50.3164 8.92871V7.41113H49.3252C47.7757 7.41113 47.001 7.86458 47.001 8.77148C47.001 9.16797 47.1331 9.47786 47.3975 9.70117C47.6618 9.92448 48.0013 10.0361 48.416 10.0361Z" fill="black" />
      <path d="M60.6113 4.73828C60.4199 4.70638 60.2126 4.69043 59.9893 4.69043C59.1598 4.69043 58.597 5.04362 58.3008 5.75V11H57.0361V3.60352H58.2666L58.2871 4.45801C58.7018 3.7972 59.2897 3.4668 60.0508 3.4668C60.2969 3.4668 60.4837 3.4987 60.6113 3.5625V4.73828Z" fill="black" />
      <path d="M61.3086 7.2334C61.3086 6.50879 61.4499 5.8571 61.7324 5.27832C62.0195 4.69954 62.416 4.25293 62.9219 3.93848C63.4323 3.62402 64.0133 3.4668 64.665 3.4668C65.6722 3.4668 66.4857 3.81543 67.1055 4.5127C67.7298 5.20996 68.042 6.13737 68.042 7.29492V7.38379C68.042 8.10384 67.903 8.75098 67.625 9.3252C67.3516 9.89486 66.9574 10.3392 66.4424 10.6582C65.932 10.9772 65.3441 11.1367 64.6787 11.1367C63.6761 11.1367 62.8626 10.7881 62.2383 10.0908C61.6185 9.39355 61.3086 8.4707 61.3086 7.32227V7.2334ZM62.5801 7.38379C62.5801 8.2041 62.7692 8.86263 63.1475 9.35938C63.5303 9.85612 64.0407 10.1045 64.6787 10.1045C65.3213 10.1045 65.8317 9.85384 66.21 9.35254C66.5882 8.84668 66.7773 8.1403 66.7773 7.2334C66.7773 6.4222 66.5837 5.76595 66.1963 5.26465C65.8135 4.75879 65.3031 4.50586 64.665 4.50586C64.0407 4.50586 63.5371 4.75423 63.1543 5.25098C62.7715 5.74772 62.5801 6.45866 62.5801 7.38379Z" fill="black" />
      <path d="M75.8896 7.38379C75.8896 8.514 75.6299 9.42318 75.1104 10.1113C74.5908 10.7949 73.8936 11.1367 73.0186 11.1367C72.0843 11.1367 71.362 10.8063 70.8516 10.1455L70.79 11H69.6279V0.5H70.8926V4.41699C71.403 3.78353 72.1071 3.4668 73.0049 3.4668C73.9027 3.4668 74.6068 3.80632 75.1172 4.48535C75.6322 5.16439 75.8896 6.09408 75.8896 7.27441V7.38379ZM74.625 7.24023C74.625 6.37891 74.4587 5.71354 74.126 5.24414C73.7933 4.77474 73.3148 4.54004 72.6904 4.54004C71.8564 4.54004 71.2572 4.92741 70.8926 5.70215V8.90137C71.2799 9.67611 71.8838 10.0635 72.7041 10.0635C73.3102 10.0635 73.7819 9.82878 74.1191 9.35938C74.4564 8.88997 74.625 8.18359 74.625 7.24023Z" fill="black" />
      <path d="M77.1543 7.2334C77.1543 6.50879 77.2956 5.8571 77.5781 5.27832C77.8652 4.69954 78.2617 4.25293 78.7676 3.93848C79.278 3.62402 79.859 3.4668 80.5107 3.4668C81.5179 3.4668 82.3314 3.81543 82.9512 4.5127C83.5755 5.20996 83.8877 6.13737 83.8877 7.29492V7.38379C83.8877 8.10384 83.7487 8.75098 83.4707 9.3252C83.1973 9.89486 82.8031 10.3392 82.2881 10.6582C81.7777 10.9772 81.1898 11.1367 80.5244 11.1367C79.5218 11.1367 78.7083 10.7881 78.084 10.0908C77.4642 9.39355 77.1543 8.4707 77.1543 7.32227V7.2334ZM78.4258 7.38379C78.4258 8.2041 78.6149 8.86263 78.9932 9.35938C79.376 9.85612 79.8864 10.1045 80.5244 10.1045C81.167 10.1045 81.6774 9.85384 82.0557 9.35254C82.4339 8.84668 82.623 8.1403 82.623 7.2334C82.623 6.4222 82.4294 5.76595 82.042 5.26465C81.6592 4.75879 81.1488 4.50586 80.5107 4.50586C79.8864 4.50586 79.3828 4.75423 79 5.25098C78.6172 5.74772 78.4258 6.45866 78.4258 7.38379Z" fill="black" />
      <path d="M87.1895 1.8125V3.60352H88.5703V4.58105H87.1895V9.16797C87.1895 9.46419 87.251 9.6875 87.374 9.83789C87.4971 9.98372 87.7067 10.0566 88.0029 10.0566C88.1488 10.0566 88.3493 10.0293 88.6045 9.97461V11C88.2718 11.0911 87.9482 11.1367 87.6338 11.1367C87.0687 11.1367 86.6426 10.9658 86.3555 10.624C86.0684 10.2822 85.9248 9.79688 85.9248 9.16797V4.58105H84.5781V3.60352H85.9248V1.8125H87.1895Z" fill="black" />
    </svg>
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.9259 2H2.07407C2.03316 2 2 2.03316 2 2.07407V25.9259C2 25.9668 2.03316 26 2.07407 26H25.9259C25.9668 26 26 25.9668 26 25.9259V2.07407C26 2.03316 25.9668 2 25.9259 2ZM25.9259 0H2.07407C0.928595 0 0 0.928595 0 2.07407V25.9259C0 27.0714 0.928595 28 2.07407 28H25.9259C27.0714 28 28 27.0714 28 25.9259V2.07407C28 0.928595 27.0714 0 25.9259 0Z" fill="#C1C1C1" />
    </svg>
    <div className="checkbox w-6 h-6 absolute -translate-x-2/4 bg-white opacity-100 p-0 left-2/4 top-2/4" />
  </div>
</div>
  );
}