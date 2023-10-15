import React from 'react';

export function C60InteractiveMap(props){
  return (
      <>
  {(size == "S") && <>
    <div className="c60InteractiveMap gap-5 absolute flex-col w-[375px] items-center bg-[#eeeeee] opacity-100 px-0 py-8 left-[2949px] top-4 flex">
      <div className="frame483083 gap-[-234px] flex-col items-center opacity-100 p-0 flex">
        <div className="map w-[375px] h-[658px] relative opacity-100 p-0">
          <div className="frame483045 w-[375px] h-[657px] absolute overflow-hidden opacity-100 p-0 left-0 top-px">
            <svg className="radius" width={151} height={152} viewBox="0 0 151 152" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_2865_136043)">
                <circle cx="75.5" cy="71.9297" r="10.5" fill="#0D2741" />
              </g>
              <defs>
                <filter id="filter0_d_2865_136043" x={0} y="0.429688" width={151} height={151} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation="32.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2865_136043" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2865_136043" result="shape" />
                </filter>
              </defs>
            </svg>
            <img src="/images/map.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="map w-[375px] h-[657px] absolute opacity-100 object-cover p-0 left-0 top-0" />
            <svg width={151} height={151} viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_2865_136046)">
                <circle cx="75.5" cy="71.5" r="10.5" fill="#0D2741" />
              </g>
              <defs>
                <filter id="filter0_d_2865_136046" x={0} y={0} width={151} height={151} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation="32.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2865_136046" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2865_136046" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <svg className="mapPin" width={33} height={43} viewBox="0 0 33 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4871 42.9059C16.5692 42.7966 16.6047 42.7453 16.6448 42.6977C20.78 37.8207 24.9571 32.9782 29.04 28.0563C32.9138 23.3875 33.9394 18.053 32.1439 12.2806C30.1804 5.97149 24.4466 1.50524 17.8571 0.968427C13.8535 0.641673 10.1626 1.59673 6.92053 3.97736C1.92121 7.64821 -0.372676 12.6541 0.0491447 18.826C0.288052 22.3288 1.6543 25.433 3.93885 28.1207C7.2061 31.9634 10.4631 35.8153 13.7257 39.6626C14.6272 40.725 15.5315 41.7856 16.4871 42.9068V42.9059Z" fill="white" />
            <path d="M16.4871 42.9059C15.5324 41.7837 14.6272 40.7241 13.7257 39.6617C10.4631 35.8144 7.2061 31.9634 3.93885 28.1198C1.6543 25.433 0.288052 22.3288 0.0491452 18.826C-0.372675 12.6541 1.92121 7.64825 6.9196 3.9774C10.1626 1.59583 13.8526 0.641712 17.8571 0.968466C24.4466 1.50621 30.1804 5.97153 32.1439 12.2816C33.9404 18.054 32.9138 23.3875 29.04 28.0573C24.9571 32.9782 20.78 37.8207 16.6448 42.6987C16.6047 42.7463 16.5692 42.7976 16.4871 42.9068V42.9059Z" fill="#0460A9" />
            <circle cx="16.5" cy="17.4062" r="8.5" fill="white" />
          </svg>
          <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
            <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
            <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
          </svg>
          <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
            <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
            <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
          </svg>
          <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
            <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
            <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
          </svg>
          <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
            <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
            <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
          </svg>
        </div>
        <div className="c62FacilityCard gap-6 flex-col w-[343px] items-start rounded bg-white opacity-100 p-5 !hidden flex">
          <div className="title gap-0 flex-row items-start w-full opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px] w-[258.5px] flex-1 min-w-0">Hospital Paris Saint-Joseph</span>
            <div className="distance gap-1 flex-row items-center opacity-100 pt-1 pb-0 px-0 flex">
              <div className="interactiveIcons w-[13.5px] h-[13.5px] relative opacity-100 p-0">
                <div className="boundingBox absolute w-[13.5px] h-[13.5px] bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
              </div>
              <span className="8Km font-['Volta_Modern_Display'] text-[13px] font-medium text-black text-right tracking-[0px]">8 km</span>
            </div>
          </div>
          <div className="services gap-3 flex-col items-start w-full opacity-100 p-0 flex">
            <span className="services font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[174px]">Services</span>
            <div className="tags gap-3 flex-row h-6 items-center w-full opacity-100 p-0 flex">
              <span className="imaging font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Imaging</span>
              <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
              <span className="therapies font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Therapies</span>
            </div>
            <div className="breaker w-[303px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
          </div>
          <div className="frame482974 gap-3 flex-col w-[303px] items-start opacity-100 p-0 flex">
            <span className="productsAtThisFaciility font-['Volta_Modern_Display'] text-[13px] font-semibold text-black text-left tracking-[0px] w-[174px]">Products at this faciility </span>
            <div className="frame482929 gap-0 flex-col w-[303px] items-start opacity-100 p-0 flex">
              <div className="tags gap-2.5 flex-row flex-wrap w-[303px] items-center opacity-100 p-0 flex">
                <span className="lutathera font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
                <div className="rectangle5726 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
                <span className="locametz font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
                <div className="rectangle5727 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
                <span className="pluvicto font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
                <div className="rectangle5728 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
                <span className="lutathera font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Lutathera®</span>
                <span className="locametz font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Locametz®</span>
                <div className="rectangle5730 w-px h-[15px] relative bg-[#c6ced7] opacity-100 p-0" />
                <span className="pluvicto font-['Volta_Modern_Display'] text-[13px] font-medium text-[#0d2741] text-left tracking-[0px]">Pluvicto™</span>
              </div>
            </div>
            <div className="rectangle5687 w-[303px] h-px relative bg-[#bdbdbd] opacity-100 p-0" />
            <div className="frame483006 gap-1 flex-col items-start w-full opacity-100 pt-4 pb-0 px-0 flex">
              <div className="dropdown gap-0 flex-row items-center opacity-100 p-0 flex">
                <span className="contactInformation font-['Volta_Modern_Display'] text-base font-semibold text-[#212121] text-left tracking-[0px]">Contact &amp; Information</span>
                <div className="frame483007 gap-1 flex-row items-center opacity-100 p-0 flex">
                  <div className="interactiveIcons w-7 h-7 relative opacity-100 p-0">
                    <div className="boundingBox absolute w-7 h-7 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && version == "1") && <>
    <div className="c60InteractiveMap w-[769px] h-[691px] absolute overflow-hidden opacity-100 p-0 left-[1818px] top-4">
      <img src="/images/map.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="map w-[1553px] h-[694px] absolute left-[-515px] opacity-100 object-cover p-0 top-0" />
      <div className="group3112 w-[179px] h-[388px] absolute p-0">
        <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
          <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
          <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
        </svg>
        <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
          <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
          <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
        </svg>
        <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
          <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
          <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
        </svg>
        <div className="mapCluster w-[66px] h-[66px] relative opacity-100 p-0">
          <svg width={66} height={66} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={33} cy={33} r={33} fill="#0460A9" />
          </svg>
          <span className="12 font-['Volta_Modern_Display'] text-[35px] font-medium text-white text-center tracking-[-0.35px] absolute left-[-21.21%] right-[-21.21%] w-[94px] top-[18.18%] bottom-[16.67%]">4</span>
        </div>
        <div className="mapCluster w-[66px] h-[66px] relative opacity-100 p-0">
          <svg width={66} height={66} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={33} cy={33} r={33} fill="#0460A9" />
          </svg>
          <span className="12 font-['Volta_Modern_Display'] text-[35px] font-medium text-white text-center tracking-[-0.35px] absolute left-[-21.21%] right-[-21.21%] w-[94px] top-[18.18%] bottom-[16.67%]">2</span>
        </div>
      </div>
      <div className="fullSizeMap w-[46px] h-[46px] absolute opacity-100 p-0 left-96 top-3">
        <div className="group3077 w-[46px] h-[46px] absolute p-0">
          <div className="rectangle5679 w-[46px] h-[46px] relative bg-white opacity-100 p-0" />
        </div>
        <div className="interactiveIcons w-6 h-6 absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
          <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={12} height={20} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99758 19.6534L0.34375 9.99953L9.99758 0.345703L11.4168 1.7649L3.18218 9.99953L11.4168 18.2342L9.99758 19.6534Z" fill="#1C1B1F" />
          </svg>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && version == "2") && <>
    <div className="c60InteractiveMap w-[769px] h-[691px] absolute overflow-hidden opacity-100 p-0 left-[1818px] top-[794px]">
      <img src="/images/map.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="map w-[1564px] h-[699px] absolute left-[-347px] opacity-100 object-cover p-0 -top-2" />
      <div className="fullSizeMap w-[46px] h-[46px] absolute opacity-100 p-0 left-96 top-3">
        <div className="group3077 w-[46px] h-[46px] absolute p-0">
          <div className="rectangle5679 w-[46px] h-[46px] relative bg-white opacity-100 p-0" />
        </div>
        <div className="interactiveIcons w-6 h-6 absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
          <div className="boundingBox absolute w-6 h-6 bg-[#d9d9d9] opacity-100 p-0 inset-[0%]" />
          <svg width={12} height={20} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99758 19.6534L0.34375 9.99953L9.99758 0.345703L11.4168 1.7649L3.18218 9.99953L11.4168 18.2342L9.99758 19.6534Z" fill="#1C1B1F" />
          </svg>
        </div>
      </div>
      <svg width={143} height={143} viewBox="0 0 143 143" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2865_136067)">
          <circle cx="71.5" cy="67.5" r="6.5" fill="#0D2741" />
        </g>
        <defs>
          <filter id="filter0_d_2865_136067" x={0} y={0} width={143} height={143} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation="32.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2865_136067" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2865_136067" result="shape" />
          </filter>
        </defs>
      </svg>
      <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
        <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
        <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
      </svg>
      <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
        <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
        <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
      </svg>
      <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
        <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
        <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
      </svg>
      <div className="component67 w-8 h-[34px] absolute opacity-100 p-0 left-[276px] top-[476px]">
        <div className="rectangle5742 absolute w-[14.13px] h-[3.61px] bg-white opacity-100 p-0 left-[39.53%] right-[16.33%] top-[85.86%] bottom-[3.51%]" />
        <div className="rectangle5736 absolute w-[3.91px] h-[28.32px] bg-white opacity-100 p-0 left-[33.42%] right-[54.35%] top-[6.09%] bottom-[10.62%]" />
        <div className="rectangle5737 absolute w-[13.83px] h-[22.79px] bg-white opacity-100 p-0 left-[41.29%] right-[15.5%] top-[28.36%] bottom-[4.61%]" />
        <div className="rectangle5738 absolute w-[7.45px] h-[14.93px] bg-white opacity-100 p-0 left-[70.1%] right-[6.61%] top-[37.58%] bottom-[18.52%]" />
        <div className="rectangle5739 absolute w-[4.55px] h-[6.56px] bg-white opacity-100 p-0 left-[6.45%] right-[79.32%] top-[42.58%] bottom-[38.13%]" />
        <div className="rectangle5740 absolute w-[5.79px] h-[8.98px] bg-white opacity-100 p-0 left-[19.18%] right-[62.73%] top-[48.67%] bottom-[24.92%]" />
        <div className="rectangle5741 absolute w-[5.52px] h-[2.18px] bg-white opacity-100 p-0 left-[25.71%] right-[57.03%] top-[75.08%] bottom-[18.52%]" />
        <img src="/images/image246.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="image246 absolute h-[34px] w-8 opacity-100 object-cover p-0 inset-[0%]" />
      </div>
    </div>
  </>}
  {(size == "L" && version == "1") && <>
    <div className="c60InteractiveMap w-[1440px] h-[977px] absolute overflow-hidden opacity-100 p-0 left-4 top-4">
      <img src="/images/map.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="map w-[1440px] h-[977px] absolute opacity-100 object-cover p-0 left-0 top-0" />
      <div className="pins w-[708px] h-[718px] absolute p-0">
        <div className="mapCluster w-[66px] h-[66px] relative opacity-100 p-0">
          <svg width={66} height={66} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={33} cy={33} r={33} fill="#0460A9" />
          </svg>
          <span className="12 font-['Volta_Modern_Display'] text-[35px] font-medium text-white text-center tracking-[-0.35px] absolute left-[-21.21%] right-[-21.21%] w-[94px] top-[18.18%] bottom-[16.67%]">12</span>
        </div>
        <div className="mapCluster w-[66px] h-[66px] relative opacity-100 p-0">
          <svg width={66} height={66} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={33} cy={33} r={33} fill="#0460A9" />
          </svg>
          <span className="12 font-['Volta_Modern_Display'] text-[35px] font-medium text-white text-center tracking-[-0.35px] absolute left-[-21.21%] right-[-21.21%] w-[94px] top-[18.18%] bottom-[16.67%]">4</span>
        </div>
        <div className="mapCluster w-[66px] h-[66px] relative opacity-100 p-0">
          <svg width={66} height={66} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={33} cy={33} r={33} fill="#0460A9" />
          </svg>
          <span className="12 font-['Volta_Modern_Display'] text-[35px] font-medium text-white text-center tracking-[-0.35px] absolute left-[-21.21%] right-[-21.21%] w-[94px] top-[18.18%] bottom-[16.67%]">8</span>
        </div>
        <div className="mapCluster w-[66px] h-[66px] relative opacity-100 p-0">
          <svg width={66} height={66} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={33} cy={33} r={33} fill="#0460A9" />
          </svg>
          <span className="12 font-['Volta_Modern_Display'] text-[35px] font-medium text-white text-center tracking-[-0.35px] absolute left-[-21.21%] right-[-21.21%] w-[94px] top-[18.18%] bottom-[16.67%]">2</span>
        </div>
        <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
          <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
          <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
        </svg>
        <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
          <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
          <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
        </svg>
        <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
          <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
          <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
        </svg>
        <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
          <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
          <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
        </svg>
        <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
          <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
          <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
        </svg>
        <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
          <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
          <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
        </svg>
        <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
          <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
          <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
        </svg>
      </div>
    </div>
  </>}
  {(size == "L" && version == "2") && <>
    <div className="c60InteractiveMap w-[1440px] h-[977px] absolute overflow-hidden opacity-100 p-0 left-4 top-[1066px]">
      <img src="/images/map.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="map w-[1440px] h-[977px] absolute opacity-100 object-cover p-0 left-0 top-0" />
      <svg className="radius" width={151} height={151} viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2865_136091)">
          <circle cx="75.5" cy="71.5" r="10.5" fill="#0D2741" />
        </g>
        <defs>
          <filter id="filter0_d_2865_136091" x={0} y={0} width={151} height={151} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation="32.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2865_136091" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2865_136091" result="shape" />
          </filter>
        </defs>
      </svg>
      <div className="pins w-[209px] h-[291px] absolute p-0">
        <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
          <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
          <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
        </svg>
        <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
          <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
          <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
        </svg>
        <svg className="mapPin" width={33} height={42} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4871 41.9996C16.5692 41.8904 16.6047 41.8391 16.6448 41.7914C20.78 36.9144 24.9571 32.0719 29.04 27.1501C32.9138 22.4812 33.9394 17.1467 32.1439 11.3744C30.1804 5.06524 24.4466 0.598986 17.8571 0.0621766C13.8535 -0.264577 10.1626 0.690477 6.92053 3.07111C1.92121 6.74196 -0.372676 11.7478 0.0491447 17.9197C0.288052 21.4225 1.6543 24.5267 3.93885 27.2145C7.2061 31.0571 10.4631 34.9091 13.7257 38.7564C14.6272 39.8188 15.5315 40.8793 16.4871 42.0006V41.9996Z" fill="white" />
          <path d="M16.4871 41.9997C15.5324 40.8775 14.6272 39.8179 13.7257 38.7555C10.4631 34.9082 7.2061 31.0571 3.93885 27.2136C1.6543 24.5267 0.288052 21.4226 0.0491452 17.9198C-0.372675 11.7479 1.92121 6.742 6.9196 3.07115C10.1626 0.689583 13.8526 -0.264538 17.8571 0.0622158C24.4466 0.599959 30.1804 5.06528 32.1439 11.3754C33.9404 17.1477 32.9138 22.4813 29.04 27.151C24.9571 32.0719 20.78 36.9144 16.6448 41.7924C16.6047 41.84 16.5692 41.8914 16.4871 42.0006V41.9997Z" fill="#0460A9" />
          <circle cx="16.5" cy="16.5" r="8.5" fill="white" />
        </svg>
      </div>
      <div className="hover w-8 h-[34px] absolute opacity-100 p-0 left-[303px] top-[389px]">
        <div className="rectangle5742 absolute w-[14.13px] h-[3.61px] bg-white opacity-100 p-0 left-[39.53%] right-[16.33%] top-[85.86%] bottom-[3.51%]" />
        <div className="rectangle5736 absolute w-[3.91px] h-[28.32px] bg-white opacity-100 p-0 left-[33.42%] right-[54.35%] top-[6.09%] bottom-[10.62%]" />
        <div className="rectangle5737 absolute w-[13.83px] h-[22.79px] bg-white opacity-100 p-0 left-[41.29%] right-[15.5%] top-[28.36%] bottom-[4.61%]" />
        <div className="rectangle5738 absolute w-[7.45px] h-[14.93px] bg-white opacity-100 p-0 left-[70.1%] right-[6.61%] top-[37.58%] bottom-[18.52%]" />
        <div className="rectangle5739 absolute w-[4.55px] h-[6.56px] bg-white opacity-100 p-0 left-[6.45%] right-[79.32%] top-[42.58%] bottom-[38.13%]" />
        <div className="rectangle5740 absolute w-[5.79px] h-[8.98px] bg-white opacity-100 p-0 left-[19.18%] right-[62.73%] top-[48.67%] bottom-[24.92%]" />
        <div className="rectangle5741 absolute w-[5.52px] h-[2.18px] bg-white opacity-100 p-0 left-[25.71%] right-[57.03%] top-[75.08%] bottom-[18.52%]" />
        <img src="/images/image246.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="image246 absolute h-[34px] w-8 opacity-100 object-cover p-0 inset-[0%]" />
      </div>
    </div>
  </>}
</>
  );
}