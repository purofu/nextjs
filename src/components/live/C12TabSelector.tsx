import React from 'react';

export function C12TabSelector(props){
	const {
    size = "L(LHN)",
    selected = "Yes"
  } = props;
  return (
      <>
  {(size == "L(LHN)" && selected == "Yes") && <>
    <div className="c12TabSelector gap-6 absolute flex-col w-[1440px] items-start bg-neutral-100 opacity-100 pt-12 pb-0 px-0 left-[43px] top-[58px] flex">
      <div className="frame482656 gap-8 flex-col w-[1440px] items-start opacity-100 p-0 flex">
        <div className="frame482648 gap-2 flex-col items-start w-full opacity-100 pl-[340px] pr-0 py-0 flex">
          <div className="frame482717 gap-2 flex-row w-[1036px] justify-between items-end opacity-100 p-0 flex">
            <div className="frame482716 gap-2 flex-col w-[813px] items-start opacity-100 p-0 flex">
              <span className="whatAreYouLookingToTreat font-['Volta_Modern_Display'] text-3xl font-medium text-black text-left tracking-[0px] w-[946px]">What are you looking to treat?</span>
              <span className="selectOne font-['Volta_Modern_Display'] text-[19px] font-medium text-[#757575] text-left tracking-[0px]">Select one</span>
            </div>
            <div className="hyperlink gap-2 flex-row items-center opacity-100 p-0 flex" />
          </div>
        </div>
        <div className="frame482658 gap-0 flex-col items-start opacity-100 p-0 flex">
          <svg width={1440} height={1} viewBox="0 0 1440 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2={1440} y2="0.5" stroke="#757575" />
          </svg>
          <div className="frame482657 gap-0 flex-row w-[1376px] items-start opacity-100 pl-[315px] pr-0 py-0 flex">
            <div className="frame482655 gap-px flex-row w-[530.5px] items-end flex-1 min-w-0 bg-white opacity-100 pt-0 pb-8 px-0 flex">
              <svg width={1} height={239} viewBox="0 0 1 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="2.18557e-08" x2="0.49999" y2={239} stroke="#757575" />
              </svg>
              <div className="frame482651 gap-0 flex-col w-[354px] h-[238px] items-start opacity-100 pl-6 pr-0 pt-6 pb-0 flex">
                <div className="frame482607 gap-2 flex-col w-[222px] items-start opacity-100 p-0 flex">
                  <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#023054] text-left tracking-[0px] w-full">Prostate Cancer </span>
                  <div className="frame482605 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-[15px] font-medium text-[#023054] text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
                  </div>
                </div>
                <svg className="component46" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_215_50631)">
                    <path d="M26.6699 62.6952C26.8387 58.4777 29.2357 54.9612 32.5104 53.7148" stroke="#023054" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M37.7493 72.6102C36.9165 72.9329 36.0275 73.1109 35.1047 73.1109C32.8203 73.1109 30.7497 72.0426 29.2305 70.3066" stroke="#023054" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M48.0612 54.418C51.5835 55.6087 54.0255 58.6466 54.0255 63.1869C54.0255 68.6731 50.2444 73.1243 45.5855 73.1243C45.0116 73.1243 43.7174 73.0019 43.166 72.8684" stroke="#023054" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M42.0566 79.922C43.4408 70.2183 45.2976 61.6719 47.6158 54.205C47.8746 53.9379 48.2122 53.7599 48.5723 53.682C61.9638 50.6662 71.788 40.3616 71.7204 28.1096C71.6979 24.4261 70.7864 20.9097 69.1547 17.7159C68.8396 17.0927 68.9971 16.336 69.5823 15.9465C72.6995 13.8322 76.6832 10.4159 79.519 5.4082" stroke="#023054" strokeWidth="1.12672" strokeMiterlimit={10} />
                    <path d="M0.492188 5.4082C3.44056 10.6162 7.62681 14.1104 10.789 16.1913C11.3742 16.5808 11.5542 17.3264 11.2391 17.9496C9.70867 21.0766 8.87593 24.504 8.88718 28.1096C8.9547 40.6064 19.2853 51.0668 33.1156 53.8489C33.532 53.9268 33.9034 54.1382 34.1847 54.4498C36.6379 61.3715 38.0221 70.2183 38.9786 79.8553" stroke="#023054" strokeWidth="1.12672" strokeMiterlimit={10} />
                    <path d="M69.4988 0.277344C67.1244 4.27234 63.5008 6.69826 61.6215 7.75544C61.1489 8.02251 60.5862 7.978 60.1473 7.67754C54.7007 3.91624 47.7461 1.6461 40.1614 1.6461C32.5766 1.6461 25.5095 3.96075 20.0742 7.79995C19.6465 8.10041 19.0726 8.15605 18.6112 7.9001C16.8107 6.92083 12.9733 4.47264 10.4863 0.2996" stroke="#023054" strokeWidth="1.12672" strokeMiterlimit={10} />
                    <path d="M64.9085 30.9397C64.8522 20.9451 53.8465 12.8398 40.3263 12.8398C26.806 12.8398 15.9131 20.9451 15.9808 30.9397C16.0372 39.4855 24.0771 46.6413 34.8573 48.5403C35.173 48.5991 37.0561 48.9221 37.2704 49.1375L39.9767 52.8867C40.5743 53.4642 41.5892 53.4838 42.2094 52.9356L44.8142 49.1375C45.0172 48.9613 46.6184 48.4816 46.8891 48.4327C57.3196 46.3672 64.9762 39.3191 64.9198 30.9495L64.9085 30.9397Z" stroke="#023054" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M31.1148 66.7304C30.4918 68.9909 29.4209 70.9958 27.7368 70.9958C24.8941 70.9958 23.5799 65.1696 25.5756 62.3574C26.0039 61.7519 26.588 61.4424 27.1624 61.2272C28.4474 60.7697 29.9174 60.6755 31.1927 61.2675C31.806 61.5501 31.8449 62.3574 31.767 63.1782C31.66 64.2546 31.4458 65.5194 31.1148 66.717V66.7304Z" fill="#023054" stroke="#023054" strokeWidth="1.12672" strokeMiterlimit={10} />
                  </g>
                  <defs>
                    <clipPath id="clip0_215_50631">
                      <rect width={80} height={80} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="frame482653 gap-px flex-row w-[530.5px] items-end flex-1 min-w-0 opacity-100 pt-0 pb-8 px-0 flex">
              <svg width={2} height={239} viewBox="0 0 2 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1={1} y1="2.18557e-08" x2="0.99999" y2={239} stroke="#757575" />
              </svg>
              <div className="frame482651 gap-0 flex-col w-[354px] h-[238px] items-start opacity-100 pl-6 pr-0 pt-6 pb-0 flex">
                <div className="frame482607 gap-2 flex-col w-[222px] items-start opacity-100 p-0 flex">
                  <span className="gEPNets font-['Volta_Modern_Display'] text-[19px] font-medium text-black text-left tracking-[0px] w-full">GEP-Nets</span>
                  <div className="frame482605 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
                  </div>
                </div>
                <svg className="component46" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_215_50653)">
                    <path d="M26.6699 62.6952C26.8387 58.4777 29.2357 54.9612 32.5104 53.7148" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M37.7493 72.6102C36.9165 72.9329 36.0275 73.1109 35.1047 73.1109C32.8203 73.1109 30.7497 72.0426 29.2305 70.3066" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M48.0612 54.418C51.5835 55.6087 54.0255 58.6466 54.0255 63.1869C54.0255 68.6731 50.2444 73.1243 45.5855 73.1243C45.0116 73.1243 43.7174 73.0019 43.166 72.8684" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M42.0566 79.922C43.4408 70.2183 45.2976 61.6719 47.6158 54.205C47.8746 53.9379 48.2122 53.7599 48.5723 53.682C61.9638 50.6662 71.788 40.3616 71.7204 28.1096C71.6979 24.4261 70.7864 20.9097 69.1547 17.7159C68.8396 17.0927 68.9971 16.336 69.5823 15.9465C72.6995 13.8322 76.6832 10.4159 79.519 5.4082" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                    <path d="M0.492188 5.4082C3.44056 10.6162 7.62681 14.1104 10.789 16.1913C11.3742 16.5808 11.5542 17.3264 11.2391 17.9496C9.70867 21.0766 8.87593 24.504 8.88718 28.1096C8.9547 40.6064 19.2853 51.0668 33.1156 53.8489C33.532 53.9268 33.9034 54.1382 34.1847 54.4498C36.6379 61.3715 38.0221 70.2183 38.9786 79.8553" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                    <path d="M69.4988 0.277344C67.1244 4.27234 63.5008 6.69826 61.6215 7.75544C61.1489 8.02251 60.5862 7.978 60.1473 7.67754C54.7007 3.91624 47.7461 1.6461 40.1614 1.6461C32.5766 1.6461 25.5095 3.96075 20.0742 7.79995C19.6465 8.10041 19.0726 8.15605 18.6112 7.9001C16.8107 6.92083 12.9733 4.47264 10.4863 0.2996" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                    <path d="M64.9085 30.9397C64.8522 20.9451 53.8465 12.8398 40.3263 12.8398C26.806 12.8398 15.9131 20.9451 15.9808 30.9397C16.0372 39.4855 24.0771 46.6413 34.8573 48.5403C35.173 48.5991 37.0561 48.9221 37.2704 49.1375L39.9767 52.8867C40.5743 53.4642 41.5892 53.4838 42.2094 52.9356L44.8142 49.1375C45.0172 48.9613 46.6184 48.4816 46.8891 48.4327C57.3196 46.3672 64.9762 39.3191 64.9198 30.9495L64.9085 30.9397Z" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M31.1148 66.7304C30.4918 68.9909 29.4209 70.9958 27.7368 70.9958C24.8941 70.9958 23.5799 65.1696 25.5756 62.3574C26.0039 61.7519 26.588 61.4424 27.1624 61.2272C28.4474 60.7697 29.9174 60.6755 31.1927 61.2675C31.806 61.5501 31.8449 62.3574 31.767 63.1782C31.66 64.2546 31.4458 65.5194 31.1148 66.717V66.7304Z" fill="black" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                  </g>
                  <defs>
                    <clipPath id="clip0_215_50653">
                      <rect width={80} height={80} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && selected == "No") && <>
    <div className="c12TabSelector gap-6 absolute flex-col w-[1440px] items-start bg-neutral-100 opacity-100 pt-12 pb-0 px-0 left-[43px] top-[584px] flex">
      <div className="frame482656 gap-8 flex-col w-[1440px] items-start opacity-100 p-0 flex">
        <div className="frame482648 gap-2 flex-col items-start w-full opacity-100 pl-[340px] pr-0 py-0 flex">
          <div className="frame482717 gap-2 flex-row w-[1036px] justify-between items-end opacity-100 p-0 flex">
            <div className="frame482716 gap-2 flex-col w-[813px] items-start opacity-100 p-0 flex">
              <span className="whatAreYouLookingToTreat font-['Volta_Modern_Display'] text-3xl font-medium text-black text-left tracking-[0px] w-[946px]">What are you looking to treat?</span>
              <span className="selectOne font-['Volta_Modern_Display'] text-[19px] font-medium text-[#757575] text-left tracking-[0px]">Select one</span>
            </div>
            <div className="hyperlink gap-2 flex-row items-center opacity-100 p-0 flex" />
          </div>
        </div>
        <div className="frame482658 gap-0 flex-col items-start opacity-100 p-0 flex">
          <svg width={1440} height={1} viewBox="0 0 1440 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2={1440} y2="0.5" stroke="#757575" />
          </svg>
          <div className="frame482657 gap-0 flex-row w-[1376px] items-start opacity-100 pl-[315px] pr-0 py-0 flex">
            <div className="frame482655 gap-px flex-row w-[530.5px] items-end flex-1 min-w-0 bg-neutral-100 opacity-100 pt-0 pb-8 px-0 flex">
              <svg width={1} height={239} viewBox="0 0 1 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="2.18557e-08" x2="0.49999" y2={239} stroke="#757575" />
              </svg>
              <div className="frame482651 gap-0 flex-col w-[354px] h-[238px] items-start opacity-100 pl-6 pr-0 pt-6 pb-0 flex">
                <div className="frame482607 gap-2 flex-col w-[222px] items-start opacity-100 p-0 flex">
                  <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-medium text-black text-left tracking-[0px] w-full">Prostate Cancer </span>
                  <div className="frame482605 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
                  </div>
                </div>
                <svg className="component46" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_469_78000)">
                    <path d="M26.6699 62.6952C26.8387 58.4777 29.2357 54.9612 32.5104 53.7148" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M37.7493 72.6102C36.9165 72.9329 36.0275 73.1109 35.1047 73.1109C32.8203 73.1109 30.7497 72.0426 29.2305 70.3066" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M48.0612 54.418C51.5835 55.6087 54.0255 58.6466 54.0255 63.1869C54.0255 68.6731 50.2444 73.1243 45.5855 73.1243C45.0116 73.1243 43.7174 73.0019 43.166 72.8684" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M42.0566 79.922C43.4408 70.2183 45.2976 61.6719 47.6158 54.205C47.8746 53.9379 48.2122 53.7599 48.5723 53.682C61.9638 50.6662 71.788 40.3616 71.7204 28.1096C71.6979 24.4261 70.7864 20.9097 69.1547 17.7159C68.8396 17.0927 68.9971 16.336 69.5823 15.9465C72.6995 13.8322 76.6832 10.4159 79.519 5.4082" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                    <path d="M0.492188 5.4082C3.44056 10.6162 7.62681 14.1104 10.789 16.1913C11.3742 16.5808 11.5542 17.3264 11.2391 17.9496C9.70867 21.0766 8.87593 24.504 8.88718 28.1096C8.9547 40.6064 19.2853 51.0668 33.1156 53.8489C33.532 53.9268 33.9034 54.1382 34.1847 54.4498C36.6379 61.3715 38.0221 70.2183 38.9786 79.8553" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                    <path d="M69.4988 0.277344C67.1244 4.27234 63.5008 6.69826 61.6215 7.75544C61.1489 8.02251 60.5862 7.978 60.1473 7.67754C54.7007 3.91624 47.7461 1.6461 40.1614 1.6461C32.5766 1.6461 25.5095 3.96075 20.0742 7.79995C19.6465 8.10041 19.0726 8.15605 18.6112 7.9001C16.8107 6.92083 12.9733 4.47264 10.4863 0.2996" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                    <path d="M64.9085 30.9397C64.8522 20.9451 53.8465 12.8398 40.3263 12.8398C26.806 12.8398 15.9131 20.9451 15.9808 30.9397C16.0372 39.4855 24.0771 46.6413 34.8573 48.5403C35.173 48.5991 37.0561 48.9221 37.2704 49.1375L39.9767 52.8867C40.5743 53.4642 41.5892 53.4838 42.2094 52.9356L44.8142 49.1375C45.0172 48.9613 46.6184 48.4816 46.8891 48.4327C57.3196 46.3672 64.9762 39.3191 64.9198 30.9495L64.9085 30.9397Z" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M31.1148 66.7304C30.4918 68.9909 29.4209 70.9958 27.7368 70.9958C24.8941 70.9958 23.5799 65.1696 25.5756 62.3574C26.0039 61.7519 26.588 61.4424 27.1624 61.2272C28.4474 60.7697 29.9174 60.6755 31.1927 61.2675C31.806 61.5501 31.8449 62.3574 31.767 63.1782C31.66 64.2546 31.4458 65.5194 31.1148 66.717V66.7304Z" fill="black" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                  </g>
                  <defs>
                    <clipPath id="clip0_469_78000">
                      <rect width={80} height={80} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="frame482653 gap-px flex-row w-[530.5px] items-end flex-1 min-w-0 opacity-100 pt-0 pb-8 px-0 flex">
              <svg width={2} height={239} viewBox="0 0 2 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1={1} y1="2.18557e-08" x2="0.99999" y2={239} stroke="#757575" />
              </svg>
              <div className="frame482651 gap-0 flex-col w-[354px] h-[238px] items-start opacity-100 pl-6 pr-0 pt-6 pb-0 flex">
                <div className="frame482607 gap-2 flex-col w-[222px] items-start opacity-100 p-0 flex">
                  <span className="gEPNets font-['Volta_Modern_Display'] text-[19px] font-medium text-black text-left tracking-[0px] w-full">GEP-Nets</span>
                  <div className="frame482605 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                    <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
                  </div>
                </div>
                <svg className="component46" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_469_78016)">
                    <path d="M26.6699 62.6952C26.8387 58.4777 29.2357 54.9612 32.5104 53.7148" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M37.7493 72.6102C36.9165 72.9329 36.0275 73.1109 35.1047 73.1109C32.8203 73.1109 30.7497 72.0426 29.2305 70.3066" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M48.0612 54.418C51.5835 55.6087 54.0255 58.6466 54.0255 63.1869C54.0255 68.6731 50.2444 73.1243 45.5855 73.1243C45.0116 73.1243 43.7174 73.0019 43.166 72.8684" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M42.0566 79.922C43.4408 70.2183 45.2976 61.6719 47.6158 54.205C47.8746 53.9379 48.2122 53.7599 48.5723 53.682C61.9638 50.6662 71.788 40.3616 71.7204 28.1096C71.6979 24.4261 70.7864 20.9097 69.1547 17.7159C68.8396 17.0927 68.9971 16.336 69.5823 15.9465C72.6995 13.8322 76.6832 10.4159 79.519 5.4082" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                    <path d="M0.492188 5.4082C3.44056 10.6162 7.62681 14.1104 10.789 16.1913C11.3742 16.5808 11.5542 17.3264 11.2391 17.9496C9.70867 21.0766 8.87593 24.504 8.88718 28.1096C8.9547 40.6064 19.2853 51.0668 33.1156 53.8489C33.532 53.9268 33.9034 54.1382 34.1847 54.4498C36.6379 61.3715 38.0221 70.2183 38.9786 79.8553" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                    <path d="M69.4988 0.277344C67.1244 4.27234 63.5008 6.69826 61.6215 7.75544C61.1489 8.02251 60.5862 7.978 60.1473 7.67754C54.7007 3.91624 47.7461 1.6461 40.1614 1.6461C32.5766 1.6461 25.5095 3.96075 20.0742 7.79995C19.6465 8.10041 19.0726 8.15605 18.6112 7.9001C16.8107 6.92083 12.9733 4.47264 10.4863 0.2996" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                    <path d="M64.9085 30.9397C64.8522 20.9451 53.8465 12.8398 40.3263 12.8398C26.806 12.8398 15.9131 20.9451 15.9808 30.9397C16.0372 39.4855 24.0771 46.6413 34.8573 48.5403C35.173 48.5991 37.0561 48.9221 37.2704 49.1375L39.9767 52.8867C40.5743 53.4642 41.5892 53.4838 42.2094 52.9356L44.8142 49.1375C45.0172 48.9613 46.6184 48.4816 46.8891 48.4327C57.3196 46.3672 64.9762 39.3191 64.9198 30.9495L64.9085 30.9397Z" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                    <path d="M31.1148 66.7304C30.4918 68.9909 29.4209 70.9958 27.7368 70.9958C24.8941 70.9958 23.5799 65.1696 25.5756 62.3574C26.0039 61.7519 26.588 61.4424 27.1624 61.2272C28.4474 60.7697 29.9174 60.6755 31.1927 61.2675C31.806 61.5501 31.8449 62.3574 31.767 63.1782C31.66 64.2546 31.4458 65.5194 31.1148 66.717V66.7304Z" fill="black" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                  </g>
                  <defs>
                    <clipPath id="clip0_469_78016">
                      <rect width={80} height={80} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && selected == "Yes") && <>
    <div className="c12TabSelector gap-6 absolute flex-col w-[1440px] items-start bg-neutral-100 opacity-100 pt-12 pb-0 px-0 left-[1556px] top-[58px] flex">
      <div className="group1202 w-full h-[372px] relative p-0">
        <div className="frame482656 gap-8 flex-col w-[1440px] items-start opacity-100 p-0 flex">
          <div className="frame482659 gap-2 flex-col items-start w-full opacity-100 px-16 py-0 flex">
            <div className="frame482717 gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
              <div className="frame482716 gap-2 flex-col w-[813px] items-start opacity-100 p-0 flex">
                <span className="whatAreYouLookingToTreat font-['Volta_Modern_Display'] text-3xl font-medium text-black text-left tracking-[0px] w-[946px]">What are you looking to treat?</span>
                <span className="selectOne font-['Volta_Modern_Display'] text-[19px] font-medium text-[#757575] text-left tracking-[0px]">Select one</span>
              </div>
              <div className="hyperlink gap-2 flex-row items-center opacity-100 p-0 flex" />
            </div>
          </div>
          <div className="frame482658 gap-0 flex-col items-start opacity-100 p-0 flex">
            <svg width={1440} height={1} viewBox="0 0 1440 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2={1440} y2="0.5" stroke="#757575" />
            </svg>
            <div className="frame482657 gap-0 flex-row w-[1376px] items-start opacity-100 pl-16 pr-0 py-0 flex">
              <div className="frame482655 gap-px flex-row w-[656px] items-end flex-1 min-w-0 bg-white opacity-100 pt-0 pb-8 px-0 flex">
                <svg width={1} height={239} viewBox="0 0 1 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0.5" y1="2.18557e-08" x2="0.49999" y2={239} stroke="#757575" />
                </svg>
                <div className="frame482651 gap-0 flex-col w-[354px] h-[238px] items-start opacity-100 pl-6 pr-0 pt-6 pb-0 flex">
                  <div className="frame482607 gap-2 flex-col w-[222px] items-start opacity-100 p-0 flex">
                    <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#023054] text-left tracking-[0px] w-full">Prostate Cancer </span>
                    <div className="frame482605 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                      <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-[15px] font-medium text-[#023054] text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
                    </div>
                  </div>
                  <svg className="component46" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_215_52694)">
                      <path d="M26.6699 62.6952C26.8387 58.4777 29.2357 54.9612 32.5104 53.7148" stroke="#023054" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M37.7493 72.6102C36.9165 72.9329 36.0275 73.1109 35.1047 73.1109C32.8203 73.1109 30.7497 72.0426 29.2305 70.3066" stroke="#023054" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M48.0612 54.418C51.5835 55.6087 54.0255 58.6466 54.0255 63.1869C54.0255 68.6731 50.2444 73.1243 45.5855 73.1243C45.0116 73.1243 43.7174 73.0019 43.166 72.8684" stroke="#023054" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M42.0566 79.922C43.4408 70.2183 45.2976 61.6719 47.6158 54.205C47.8746 53.9379 48.2122 53.7599 48.5723 53.682C61.9638 50.6662 71.788 40.3616 71.7204 28.1096C71.6979 24.4261 70.7864 20.9097 69.1547 17.7159C68.8396 17.0927 68.9971 16.336 69.5823 15.9465C72.6995 13.8322 76.6832 10.4159 79.519 5.4082" stroke="#023054" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M0.492188 5.4082C3.44056 10.6162 7.62681 14.1104 10.789 16.1913C11.3742 16.5808 11.5542 17.3264 11.2391 17.9496C9.70867 21.0766 8.87593 24.504 8.88718 28.1096C8.9547 40.6064 19.2853 51.0668 33.1156 53.8489C33.532 53.9268 33.9034 54.1382 34.1847 54.4498C36.6379 61.3715 38.0221 70.2183 38.9786 79.8553" stroke="#023054" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M69.4988 0.277344C67.1244 4.27234 63.5008 6.69826 61.6215 7.75544C61.1489 8.02251 60.5862 7.978 60.1473 7.67754C54.7007 3.91624 47.7461 1.6461 40.1614 1.6461C32.5766 1.6461 25.5095 3.96075 20.0742 7.79995C19.6465 8.10041 19.0726 8.15605 18.6112 7.9001C16.8107 6.92083 12.9733 4.47264 10.4863 0.2996" stroke="#023054" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M64.9085 30.9397C64.8522 20.9451 53.8465 12.8398 40.3263 12.8398C26.806 12.8398 15.9131 20.9451 15.9808 30.9397C16.0372 39.4855 24.0771 46.6413 34.8573 48.5403C35.173 48.5991 37.0561 48.9221 37.2704 49.1375L39.9767 52.8867C40.5743 53.4642 41.5892 53.4838 42.2094 52.9356L44.8142 49.1375C45.0172 48.9613 46.6184 48.4816 46.8891 48.4327C57.3196 46.3672 64.9762 39.3191 64.9198 30.9495L64.9085 30.9397Z" stroke="#023054" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M31.1148 66.7304C30.4918 68.9909 29.4209 70.9958 27.7368 70.9958C24.8941 70.9958 23.5799 65.1696 25.5756 62.3574C26.0039 61.7519 26.588 61.4424 27.1624 61.2272C28.4474 60.7697 29.9174 60.6755 31.1927 61.2675C31.806 61.5501 31.8449 62.3574 31.767 63.1782C31.66 64.2546 31.4458 65.5194 31.1148 66.717V66.7304Z" fill="#023054" stroke="#023054" strokeWidth="1.12672" strokeMiterlimit={10} />
                    </g>
                    <defs>
                      <clipPath id="clip0_215_52694">
                        <rect width={80} height={80} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="frame482653 gap-px flex-row w-[656px] items-end flex-1 min-w-0 opacity-100 pt-0 pb-8 px-0 flex">
                <svg width={1} height={239} viewBox="0 0 1 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0.5" y1="2.18557e-08" x2="0.49999" y2={239} stroke="#757575" />
                </svg>
                <div className="frame482651 gap-0 flex-col w-[354px] h-[238px] items-start opacity-100 pl-6 pr-0 pt-6 pb-0 flex">
                  <div className="frame482607 gap-2 flex-col w-[222px] items-start opacity-100 p-0 flex">
                    <span className="gEPNets font-['Volta_Modern_Display'] text-[19px] font-medium text-black text-left tracking-[0px] w-full">GEP-Nets</span>
                    <div className="frame482605 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                      <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
                    </div>
                  </div>
                  <svg className="component46" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_215_52703)">
                      <path d="M26.6699 62.6952C26.8387 58.4777 29.2357 54.9612 32.5104 53.7148" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M37.7493 72.6102C36.9165 72.9329 36.0275 73.1109 35.1047 73.1109C32.8203 73.1109 30.7497 72.0426 29.2305 70.3066" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M48.0612 54.418C51.5835 55.6087 54.0255 58.6466 54.0255 63.1869C54.0255 68.6731 50.2444 73.1243 45.5855 73.1243C45.0116 73.1243 43.7174 73.0019 43.166 72.8684" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M42.0566 79.922C43.4408 70.2183 45.2976 61.6719 47.6158 54.205C47.8746 53.9379 48.2122 53.7599 48.5723 53.682C61.9638 50.6662 71.788 40.3616 71.7204 28.1096C71.6979 24.4261 70.7864 20.9097 69.1547 17.7159C68.8396 17.0927 68.9971 16.336 69.5823 15.9465C72.6995 13.8322 76.6832 10.4159 79.519 5.4082" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M0.492188 5.4082C3.44056 10.6162 7.62681 14.1104 10.789 16.1913C11.3742 16.5808 11.5542 17.3264 11.2391 17.9496C9.70867 21.0766 8.87593 24.504 8.88718 28.1096C8.9547 40.6064 19.2853 51.0668 33.1156 53.8489C33.532 53.9268 33.9034 54.1382 34.1847 54.4498C36.6379 61.3715 38.0221 70.2183 38.9786 79.8553" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M69.4988 0.277344C67.1244 4.27234 63.5008 6.69826 61.6215 7.75544C61.1489 8.02251 60.5862 7.978 60.1473 7.67754C54.7007 3.91624 47.7461 1.6461 40.1614 1.6461C32.5766 1.6461 25.5095 3.96075 20.0742 7.79995C19.6465 8.10041 19.0726 8.15605 18.6112 7.9001C16.8107 6.92083 12.9733 4.47264 10.4863 0.2996" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M64.9085 30.9397C64.8522 20.9451 53.8465 12.8398 40.3263 12.8398C26.806 12.8398 15.9131 20.9451 15.9808 30.9397C16.0372 39.4855 24.0771 46.6413 34.8573 48.5403C35.173 48.5991 37.0561 48.9221 37.2704 49.1375L39.9767 52.8867C40.5743 53.4642 41.5892 53.4838 42.2094 52.9356L44.8142 49.1375C45.0172 48.9613 46.6184 48.4816 46.8891 48.4327C57.3196 46.3672 64.9762 39.3191 64.9198 30.9495L64.9085 30.9397Z" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M31.1148 66.7304C30.4918 68.9909 29.4209 70.9958 27.7368 70.9958C24.8941 70.9958 23.5799 65.1696 25.5756 62.3574C26.0039 61.7519 26.588 61.4424 27.1624 61.2272C28.4474 60.7697 29.9174 60.6755 31.1927 61.2675C31.806 61.5501 31.8449 62.3574 31.767 63.1782C31.66 64.2546 31.4458 65.5194 31.1148 66.717V66.7304Z" fill="black" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                    </g>
                    <defs>
                      <clipPath id="clip0_215_52703">
                        <rect width={80} height={80} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && selected == "No") && <>
    <div className="c12TabSelector gap-6 absolute flex-col w-[1440px] items-start bg-neutral-100 opacity-100 pt-12 pb-0 px-0 left-[1556px] top-[584px] flex">
      <div className="group1202 w-full h-[372px] relative p-0">
        <div className="frame482656 gap-8 flex-col w-[1440px] items-start opacity-100 p-0 flex">
          <div className="frame482659 gap-2 flex-col items-start w-full opacity-100 px-16 py-0 flex">
            <div className="frame482717 gap-2 flex-row justify-between items-end w-full opacity-100 p-0 flex">
              <div className="frame482716 gap-2 flex-col w-[813px] items-start opacity-100 p-0 flex">
                <span className="whatAreYouLookingToTreat font-['Volta_Modern_Display'] text-3xl font-medium text-black text-left tracking-[0px] w-[946px]">What are you looking to treat?</span>
                <span className="selectOne font-['Volta_Modern_Display'] text-[19px] font-medium text-[#757575] text-left tracking-[0px]">Select one</span>
              </div>
              <div className="hyperlink gap-2 flex-row items-center opacity-100 p-0 flex" />
            </div>
          </div>
          <div className="frame482658 gap-0 flex-col items-start opacity-100 p-0 flex">
            <svg width={1440} height={1} viewBox="0 0 1440 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2={1440} y2="0.5" stroke="#757575" />
            </svg>
            <div className="frame482657 gap-0 flex-row w-[1376px] items-start opacity-100 pl-16 pr-0 py-0 flex">
              <div className="frame482655 gap-px flex-row w-[656px] items-end flex-1 min-w-0 bg-neutral-100 opacity-100 pt-0 pb-8 px-0 flex">
                <svg width={1} height={239} viewBox="0 0 1 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0.5" y1="2.18557e-08" x2="0.49999" y2={239} stroke="#757575" />
                </svg>
                <div className="frame482651 gap-0 flex-col w-[354px] h-[238px] items-start opacity-100 pl-6 pr-0 pt-6 pb-0 flex">
                  <div className="frame482607 gap-2 flex-col w-[222px] items-start opacity-100 p-0 flex">
                    <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-medium text-black text-left tracking-[0px] w-full">Prostate Cancer </span>
                    <div className="frame482605 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                      <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
                    </div>
                  </div>
                  <svg className="component46" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_469_78044)">
                      <path d="M26.6699 62.6952C26.8387 58.4777 29.2357 54.9612 32.5104 53.7148" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M37.7493 72.6102C36.9165 72.9329 36.0275 73.1109 35.1047 73.1109C32.8203 73.1109 30.7497 72.0426 29.2305 70.3066" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M48.0612 54.418C51.5835 55.6087 54.0255 58.6466 54.0255 63.1869C54.0255 68.6731 50.2444 73.1243 45.5855 73.1243C45.0116 73.1243 43.7174 73.0019 43.166 72.8684" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M42.0566 79.922C43.4408 70.2183 45.2976 61.6719 47.6158 54.205C47.8746 53.9379 48.2122 53.7599 48.5723 53.682C61.9638 50.6662 71.788 40.3616 71.7204 28.1096C71.6979 24.4261 70.7864 20.9097 69.1547 17.7159C68.8396 17.0927 68.9971 16.336 69.5823 15.9465C72.6995 13.8322 76.6832 10.4159 79.519 5.4082" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M0.492188 5.4082C3.44056 10.6162 7.62681 14.1104 10.789 16.1913C11.3742 16.5808 11.5542 17.3264 11.2391 17.9496C9.70867 21.0766 8.87593 24.504 8.88718 28.1096C8.9547 40.6064 19.2853 51.0668 33.1156 53.8489C33.532 53.9268 33.9034 54.1382 34.1847 54.4498C36.6379 61.3715 38.0221 70.2183 38.9786 79.8553" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M69.4988 0.277344C67.1244 4.27234 63.5008 6.69826 61.6215 7.75544C61.1489 8.02251 60.5862 7.978 60.1473 7.67754C54.7007 3.91624 47.7461 1.6461 40.1614 1.6461C32.5766 1.6461 25.5095 3.96075 20.0742 7.79995C19.6465 8.10041 19.0726 8.15605 18.6112 7.9001C16.8107 6.92083 12.9733 4.47264 10.4863 0.2996" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M64.9085 30.9397C64.8522 20.9451 53.8465 12.8398 40.3263 12.8398C26.806 12.8398 15.9131 20.9451 15.9808 30.9397C16.0372 39.4855 24.0771 46.6413 34.8573 48.5403C35.173 48.5991 37.0561 48.9221 37.2704 49.1375L39.9767 52.8867C40.5743 53.4642 41.5892 53.4838 42.2094 52.9356L44.8142 49.1375C45.0172 48.9613 46.6184 48.4816 46.8891 48.4327C57.3196 46.3672 64.9762 39.3191 64.9198 30.9495L64.9085 30.9397Z" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M31.1148 66.7304C30.4918 68.9909 29.4209 70.9958 27.7368 70.9958C24.8941 70.9958 23.5799 65.1696 25.5756 62.3574C26.0039 61.7519 26.588 61.4424 27.1624 61.2272C28.4474 60.7697 29.9174 60.6755 31.1927 61.2675C31.806 61.5501 31.8449 62.3574 31.767 63.1782C31.66 64.2546 31.4458 65.5194 31.1148 66.717V66.7304Z" fill="black" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                    </g>
                    <defs>
                      <clipPath id="clip0_469_78044">
                        <rect width={80} height={80} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="frame482653 gap-px flex-row w-[656px] items-end flex-1 min-w-0 opacity-100 pt-0 pb-8 px-0 flex">
                <svg width={1} height={239} viewBox="0 0 1 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0.5" y1="2.18557e-08" x2="0.49999" y2={239} stroke="#757575" />
                </svg>
                <div className="frame482651 gap-0 flex-col w-[354px] h-[238px] items-start opacity-100 pl-6 pr-0 pt-6 pb-0 flex">
                  <div className="frame482607 gap-2 flex-col w-[222px] items-start opacity-100 p-0 flex">
                    <span className="gEPNets font-['Volta_Modern_Display'] text-[19px] font-medium text-black text-left tracking-[0px] w-full">GEP-Nets</span>
                    <div className="frame482605 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                      <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-[15px] font-medium text-black text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
                    </div>
                  </div>
                  <svg className="component46" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_469_78060)">
                      <path d="M26.6699 62.6952C26.8387 58.4777 29.2357 54.9612 32.5104 53.7148" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M37.7493 72.6102C36.9165 72.9329 36.0275 73.1109 35.1047 73.1109C32.8203 73.1109 30.7497 72.0426 29.2305 70.3066" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M48.0612 54.418C51.5835 55.6087 54.0255 58.6466 54.0255 63.1869C54.0255 68.6731 50.2444 73.1243 45.5855 73.1243C45.0116 73.1243 43.7174 73.0019 43.166 72.8684" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M42.0566 79.922C43.4408 70.2183 45.2976 61.6719 47.6158 54.205C47.8746 53.9379 48.2122 53.7599 48.5723 53.682C61.9638 50.6662 71.788 40.3616 71.7204 28.1096C71.6979 24.4261 70.7864 20.9097 69.1547 17.7159C68.8396 17.0927 68.9971 16.336 69.5823 15.9465C72.6995 13.8322 76.6832 10.4159 79.519 5.4082" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M0.492188 5.4082C3.44056 10.6162 7.62681 14.1104 10.789 16.1913C11.3742 16.5808 11.5542 17.3264 11.2391 17.9496C9.70867 21.0766 8.87593 24.504 8.88718 28.1096C8.9547 40.6064 19.2853 51.0668 33.1156 53.8489C33.532 53.9268 33.9034 54.1382 34.1847 54.4498C36.6379 61.3715 38.0221 70.2183 38.9786 79.8553" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M69.4988 0.277344C67.1244 4.27234 63.5008 6.69826 61.6215 7.75544C61.1489 8.02251 60.5862 7.978 60.1473 7.67754C54.7007 3.91624 47.7461 1.6461 40.1614 1.6461C32.5766 1.6461 25.5095 3.96075 20.0742 7.79995C19.6465 8.10041 19.0726 8.15605 18.6112 7.9001C16.8107 6.92083 12.9733 4.47264 10.4863 0.2996" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M64.9085 30.9397C64.8522 20.9451 53.8465 12.8398 40.3263 12.8398C26.806 12.8398 15.9131 20.9451 15.9808 30.9397C16.0372 39.4855 24.0771 46.6413 34.8573 48.5403C35.173 48.5991 37.0561 48.9221 37.2704 49.1375L39.9767 52.8867C40.5743 53.4642 41.5892 53.4838 42.2094 52.9356L44.8142 49.1375C45.0172 48.9613 46.6184 48.4816 46.8891 48.4327C57.3196 46.3672 64.9762 39.3191 64.9198 30.9495L64.9085 30.9397Z" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M31.1148 66.7304C30.4918 68.9909 29.4209 70.9958 27.7368 70.9958C24.8941 70.9958 23.5799 65.1696 25.5756 62.3574C26.0039 61.7519 26.588 61.4424 27.1624 61.2272C28.4474 60.7697 29.9174 60.6755 31.1927 61.2675C31.806 61.5501 31.8449 62.3574 31.767 63.1782C31.66 64.2546 31.4458 65.5194 31.1148 66.717V66.7304Z" fill="black" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                    </g>
                    <defs>
                      <clipPath id="clip0_469_78060">
                        <rect width={80} height={80} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && selected == "Yes") && <>
    <div className="c12TabSelector gap-8 absolute flex-col w-[768px] items-start bg-neutral-100 opacity-100 pt-10 pb-0 px-0 left-[3147px] top-[62px] flex">
      <div className="frame482648 gap-2 flex-row justify-between items-end w-full opacity-100 px-8 py-0 flex">
        <div className="frame482734 gap-2 flex-col w-[522px] items-start opacity-100 p-0 flex">
          <span className="whatAreYouLookingToTreat font-['Volta_Modern_Display'] text-[29px] font-medium text-black text-left tracking-[-0.35px] w-[704px]">What are you looking to treat?</span>
          <span className="selectOne font-['Volta_Modern_Display'] text-[19px] font-medium text-[#757575] text-left tracking-[0px]">Select one</span>
        </div>
        <div className="hyperlink gap-2 flex-row items-center opacity-100 p-0 flex" />
      </div>
      <div className="frame482658 gap-0 flex-col w-[768px] items-start opacity-100 p-0 flex">
        <svg width={768} height={1} viewBox="0 0 768 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2={768} y2="0.5" stroke="#757575" />
        </svg>
        <div className="frame482657 gap-0 flex-row w-[736px] items-start opacity-100 p-0 flex">
          <div className="frame482655 gap-px flex-row h-full items-end flex-1 min-w-0 bg-white opacity-100 pt-0 pb-6 px-0 flex">
            <div className="frame482651 gap-0 flex-col h-full justify-between items-start w-[255px] opacity-100 pl-8 pr-0 pt-6 pb-0 flex">
              <div className="frame482607 gap-2 flex-col w-[199px] items-start opacity-100 p-0 flex">
                <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-semibold text-[#023054] text-left tracking-[0px] w-full">Prostate Cancer </span>
                <div className="frame482605 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-sm font-medium text-[#023054] text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
                </div>
              </div>
              <svg className="component46" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_215_52712)">
                  <path d="M26.6699 62.6952C26.8387 58.4777 29.2357 54.9612 32.5104 53.7148" stroke="#023054" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M37.7493 72.6102C36.9165 72.9329 36.0275 73.1109 35.1047 73.1109C32.8203 73.1109 30.7497 72.0426 29.2305 70.3066" stroke="#023054" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M48.0612 54.418C51.5835 55.6087 54.0255 58.6466 54.0255 63.1869C54.0255 68.6731 50.2444 73.1243 45.5855 73.1243C45.0116 73.1243 43.7174 73.0019 43.166 72.8684" stroke="#023054" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M42.0566 79.922C43.4408 70.2183 45.2976 61.6719 47.6158 54.205C47.8746 53.9379 48.2122 53.7599 48.5723 53.682C61.9638 50.6662 71.788 40.3616 71.7204 28.1096C71.6979 24.4261 70.7864 20.9097 69.1547 17.7159C68.8396 17.0927 68.9971 16.336 69.5823 15.9465C72.6995 13.8322 76.6832 10.4159 79.519 5.4082" stroke="#023054" strokeWidth="1.12672" strokeMiterlimit={10} />
                  <path d="M0.492188 5.4082C3.44056 10.6162 7.62681 14.1104 10.789 16.1913C11.3742 16.5808 11.5542 17.3264 11.2391 17.9496C9.70867 21.0766 8.87593 24.504 8.88718 28.1096C8.9547 40.6064 19.2853 51.0668 33.1156 53.8489C33.532 53.9268 33.9034 54.1382 34.1847 54.4498C36.6379 61.3715 38.0221 70.2183 38.9786 79.8553" stroke="#023054" strokeWidth="1.12672" strokeMiterlimit={10} />
                  <path d="M69.4988 0.277344C67.1244 4.27234 63.5008 6.69826 61.6215 7.75544C61.1489 8.02251 60.5862 7.978 60.1473 7.67754C54.7007 3.91624 47.7461 1.6461 40.1614 1.6461C32.5766 1.6461 25.5095 3.96075 20.0742 7.79995C19.6465 8.10041 19.0726 8.15605 18.6112 7.9001C16.8107 6.92083 12.9733 4.47264 10.4863 0.2996" stroke="#023054" strokeWidth="1.12672" strokeMiterlimit={10} />
                  <path d="M64.9085 30.9397C64.8522 20.9451 53.8465 12.8398 40.3263 12.8398C26.806 12.8398 15.9131 20.9451 15.9808 30.9397C16.0372 39.4855 24.0771 46.6413 34.8573 48.5403C35.173 48.5991 37.0561 48.9221 37.2704 49.1375L39.9767 52.8867C40.5743 53.4642 41.5892 53.4838 42.2094 52.9356L44.8142 49.1375C45.0172 48.9613 46.6184 48.4816 46.8891 48.4327C57.3196 46.3672 64.9762 39.3191 64.9198 30.9495L64.9085 30.9397Z" stroke="#023054" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M31.1148 66.7304C30.4918 68.9909 29.4209 70.9958 27.7368 70.9958C24.8941 70.9958 23.5799 65.1696 25.5756 62.3574C26.0039 61.7519 26.588 61.4424 27.1624 61.2272C28.4474 60.7697 29.9174 60.6755 31.1927 61.2675C31.806 61.5501 31.8449 62.3574 31.767 63.1782C31.66 64.2546 31.4458 65.5194 31.1148 66.717V66.7304Z" fill="#023054" stroke="#023054" strokeWidth="1.12672" strokeMiterlimit={10} />
                </g>
                <defs>
                  <clipPath id="clip0_215_52712">
                    <rect width={80} height={80} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="frame482653 gap-0 flex-row w-[368px] items-start flex-1 min-w-0 opacity-100 pt-0 pb-6 px-0 flex">
            <svg width={1} height={239} viewBox="0 0 1 239" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="2.18557e-08" x2="0.49999" y2={239} stroke="#757575" />
            </svg>
            <div className="frame482651 gap-0 flex-col w-[255px] h-[238px] justify-between items-start opacity-100 pl-8 pr-0 pt-6 pb-0 flex">
              <div className="frame482607 gap-2 flex-col w-[199px] items-start opacity-100 p-0 flex">
                <span className="gEPNets font-['Volta_Modern_Display'] text-[19px] font-medium text-black text-left tracking-[0px] w-full">GEP-Nets</span>
                <div className="frame482605 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-sm font-medium text-black text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
                </div>
              </div>
              <svg className="component46" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_215_52734)">
                  <path d="M26.6699 62.6952C26.8387 58.4777 29.2357 54.9612 32.5104 53.7148" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M37.7493 72.6102C36.9165 72.9329 36.0275 73.1109 35.1047 73.1109C32.8203 73.1109 30.7497 72.0426 29.2305 70.3066" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M48.0612 54.418C51.5835 55.6087 54.0255 58.6466 54.0255 63.1869C54.0255 68.6731 50.2444 73.1243 45.5855 73.1243C45.0116 73.1243 43.7174 73.0019 43.166 72.8684" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M42.0566 79.922C43.4408 70.2183 45.2976 61.6719 47.6158 54.205C47.8746 53.9379 48.2122 53.7599 48.5723 53.682C61.9638 50.6662 71.788 40.3616 71.7204 28.1096C71.6979 24.4261 70.7864 20.9097 69.1547 17.7159C68.8396 17.0927 68.9971 16.336 69.5823 15.9465C72.6995 13.8322 76.6832 10.4159 79.519 5.4082" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                  <path d="M0.492188 5.4082C3.44056 10.6162 7.62681 14.1104 10.789 16.1913C11.3742 16.5808 11.5542 17.3264 11.2391 17.9496C9.70867 21.0766 8.87593 24.504 8.88718 28.1096C8.9547 40.6064 19.2853 51.0668 33.1156 53.8489C33.532 53.9268 33.9034 54.1382 34.1847 54.4498C36.6379 61.3715 38.0221 70.2183 38.9786 79.8553" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                  <path d="M69.4988 0.277344C67.1244 4.27234 63.5008 6.69826 61.6215 7.75544C61.1489 8.02251 60.5862 7.978 60.1473 7.67754C54.7007 3.91624 47.7461 1.6461 40.1614 1.6461C32.5766 1.6461 25.5095 3.96075 20.0742 7.79995C19.6465 8.10041 19.0726 8.15605 18.6112 7.9001C16.8107 6.92083 12.9733 4.47264 10.4863 0.2996" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                  <path d="M64.9085 30.9397C64.8522 20.9451 53.8465 12.8398 40.3263 12.8398C26.806 12.8398 15.9131 20.9451 15.9808 30.9397C16.0372 39.4855 24.0771 46.6413 34.8573 48.5403C35.173 48.5991 37.0561 48.9221 37.2704 49.1375L39.9767 52.8867C40.5743 53.4642 41.5892 53.4838 42.2094 52.9356L44.8142 49.1375C45.0172 48.9613 46.6184 48.4816 46.8891 48.4327C57.3196 46.3672 64.9762 39.3191 64.9198 30.9495L64.9085 30.9397Z" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M31.1148 66.7304C30.4918 68.9909 29.4209 70.9958 27.7368 70.9958C24.8941 70.9958 23.5799 65.1696 25.5756 62.3574C26.0039 61.7519 26.588 61.4424 27.1624 61.2272C28.4474 60.7697 29.9174 60.6755 31.1927 61.2675C31.806 61.5501 31.8449 62.3574 31.767 63.1782C31.66 64.2546 31.4458 65.5194 31.1148 66.717V66.7304Z" fill="black" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                </g>
                <defs>
                  <clipPath id="clip0_215_52734">
                    <rect width={80} height={80} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && selected == "No") && <>
    <div className="c12TabSelector gap-8 absolute flex-col w-[768px] items-start bg-neutral-100 opacity-100 pt-10 pb-0 px-0 left-[3147px] top-[588px] flex">
      <div className="frame482648 gap-2 flex-row justify-between items-end w-full opacity-100 px-8 py-0 flex">
        <div className="frame482734 gap-2 flex-col items-start flex-1 min-w-0 opacity-100 p-0 flex">
          <span className="whatAreYouLookingToTreat font-['Volta_Modern_Display'] text-[29px] font-medium text-black text-left tracking-[-0.35px] w-[704px]">What are you looking to treat?</span>
          <span className="selectOne font-['Volta_Modern_Display'] text-[19px] font-medium text-[#757575] text-left tracking-[0px]">Select one</span>
        </div>
      </div>
      <div className="frame482658 gap-0 flex-col w-[768px] items-start opacity-100 p-0 flex">
        <svg width={768} height={1} viewBox="0 0 768 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2={768} y2="0.5" stroke="#757575" />
        </svg>
        <div className="frame482657 gap-0 flex-row w-[736px] items-start opacity-100 p-0 flex">
          <div className="frame482655 gap-px flex-row h-full items-end flex-1 min-w-0 bg-neutral-100 opacity-100 pt-0 pb-6 px-0 flex">
            <div className="frame482651 gap-0 flex-col h-full justify-between items-start w-[255px] opacity-100 pl-8 pr-0 pt-6 pb-0 flex">
              <div className="frame482607 gap-2 flex-col w-[199px] items-start opacity-100 p-0 flex">
                <span className="prostateCancer font-['Volta_Modern_Display'] text-[19px] font-medium text-black text-left tracking-[0px] w-full">Prostate Cancer </span>
                <div className="frame482605 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-sm font-medium text-black text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
                </div>
              </div>
              <svg className="component46" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_469_78084)">
                  <path d="M26.6699 62.6952C26.8387 58.4777 29.2357 54.9612 32.5104 53.7148" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M37.7493 72.6102C36.9165 72.9329 36.0275 73.1109 35.1047 73.1109C32.8203 73.1109 30.7497 72.0426 29.2305 70.3066" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M48.0612 54.418C51.5835 55.6087 54.0255 58.6466 54.0255 63.1869C54.0255 68.6731 50.2444 73.1243 45.5855 73.1243C45.0116 73.1243 43.7174 73.0019 43.166 72.8684" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M42.0566 79.922C43.4408 70.2183 45.2976 61.6719 47.6158 54.205C47.8746 53.9379 48.2122 53.7599 48.5723 53.682C61.9638 50.6662 71.788 40.3616 71.7204 28.1096C71.6979 24.4261 70.7864 20.9097 69.1547 17.7159C68.8396 17.0927 68.9971 16.336 69.5823 15.9465C72.6995 13.8322 76.6832 10.4159 79.519 5.4082" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                  <path d="M0.492188 5.4082C3.44056 10.6162 7.62681 14.1104 10.789 16.1913C11.3742 16.5808 11.5542 17.3264 11.2391 17.9496C9.70867 21.0766 8.87593 24.504 8.88718 28.1096C8.9547 40.6064 19.2853 51.0668 33.1156 53.8489C33.532 53.9268 33.9034 54.1382 34.1847 54.4498C36.6379 61.3715 38.0221 70.2183 38.9786 79.8553" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                  <path d="M69.4988 0.277344C67.1244 4.27234 63.5008 6.69826 61.6215 7.75544C61.1489 8.02251 60.5862 7.978 60.1473 7.67754C54.7007 3.91624 47.7461 1.6461 40.1614 1.6461C32.5766 1.6461 25.5095 3.96075 20.0742 7.79995C19.6465 8.10041 19.0726 8.15605 18.6112 7.9001C16.8107 6.92083 12.9733 4.47264 10.4863 0.2996" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                  <path d="M64.9085 30.9397C64.8522 20.9451 53.8465 12.8398 40.3263 12.8398C26.806 12.8398 15.9131 20.9451 15.9808 30.9397C16.0372 39.4855 24.0771 46.6413 34.8573 48.5403C35.173 48.5991 37.0561 48.9221 37.2704 49.1375L39.9767 52.8867C40.5743 53.4642 41.5892 53.4838 42.2094 52.9356L44.8142 49.1375C45.0172 48.9613 46.6184 48.4816 46.8891 48.4327C57.3196 46.3672 64.9762 39.3191 64.9198 30.9495L64.9085 30.9397Z" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M31.1148 66.7304C30.4918 68.9909 29.4209 70.9958 27.7368 70.9958C24.8941 70.9958 23.5799 65.1696 25.5756 62.3574C26.0039 61.7519 26.588 61.4424 27.1624 61.2272C28.4474 60.7697 29.9174 60.6755 31.1927 61.2675C31.806 61.5501 31.8449 62.3574 31.767 63.1782C31.66 64.2546 31.4458 65.5194 31.1148 66.717V66.7304Z" fill="black" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                </g>
                <defs>
                  <clipPath id="clip0_469_78084">
                    <rect width={80} height={80} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="frame482653 gap-0 flex-row w-[368px] items-start flex-1 min-w-0 opacity-100 pt-0 pb-6 px-0 flex">
            <svg width={1} height={239} viewBox="0 0 1 239" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="2.18557e-08" x2="0.49999" y2={239} stroke="#757575" />
            </svg>
            <div className="frame482651 gap-0 flex-col w-[255px] h-[238px] justify-between items-start opacity-100 pl-8 pr-0 pt-6 pb-0 flex">
              <div className="frame482607 gap-2 flex-col w-[199px] items-start opacity-100 p-0 flex">
                <span className="gEPNets font-['Volta_Modern_Display'] text-[19px] font-medium text-black text-left tracking-[0px] w-full">GEP-Nets</span>
                <div className="frame482605 gap-10 flex-col items-start w-full opacity-100 p-0 flex">
                  <span className="iWantToUnderstandMoreAboutHowToReferAPatientForPSMATreatment font-['Volta_Modern_Display'] text-sm font-medium text-black text-left tracking-[0px] w-full">I want to understand more about how to refer a patient for PSMA treatment</span>
                </div>
              </div>
              <svg className="component46" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_469_78100)">
                  <path d="M26.6699 62.6952C26.8387 58.4777 29.2357 54.9612 32.5104 53.7148" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M37.7493 72.6102C36.9165 72.9329 36.0275 73.1109 35.1047 73.1109C32.8203 73.1109 30.7497 72.0426 29.2305 70.3066" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M48.0612 54.418C51.5835 55.6087 54.0255 58.6466 54.0255 63.1869C54.0255 68.6731 50.2444 73.1243 45.5855 73.1243C45.0116 73.1243 43.7174 73.0019 43.166 72.8684" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M42.0566 79.922C43.4408 70.2183 45.2976 61.6719 47.6158 54.205C47.8746 53.9379 48.2122 53.7599 48.5723 53.682C61.9638 50.6662 71.788 40.3616 71.7204 28.1096C71.6979 24.4261 70.7864 20.9097 69.1547 17.7159C68.8396 17.0927 68.9971 16.336 69.5823 15.9465C72.6995 13.8322 76.6832 10.4159 79.519 5.4082" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                  <path d="M0.492188 5.4082C3.44056 10.6162 7.62681 14.1104 10.789 16.1913C11.3742 16.5808 11.5542 17.3264 11.2391 17.9496C9.70867 21.0766 8.87593 24.504 8.88718 28.1096C8.9547 40.6064 19.2853 51.0668 33.1156 53.8489C33.532 53.9268 33.9034 54.1382 34.1847 54.4498C36.6379 61.3715 38.0221 70.2183 38.9786 79.8553" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                  <path d="M69.4988 0.277344C67.1244 4.27234 63.5008 6.69826 61.6215 7.75544C61.1489 8.02251 60.5862 7.978 60.1473 7.67754C54.7007 3.91624 47.7461 1.6461 40.1614 1.6461C32.5766 1.6461 25.5095 3.96075 20.0742 7.79995C19.6465 8.10041 19.0726 8.15605 18.6112 7.9001C16.8107 6.92083 12.9733 4.47264 10.4863 0.2996" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                  <path d="M64.9085 30.9397C64.8522 20.9451 53.8465 12.8398 40.3263 12.8398C26.806 12.8398 15.9131 20.9451 15.9808 30.9397C16.0372 39.4855 24.0771 46.6413 34.8573 48.5403C35.173 48.5991 37.0561 48.9221 37.2704 49.1375L39.9767 52.8867C40.5743 53.4642 41.5892 53.4838 42.2094 52.9356L44.8142 49.1375C45.0172 48.9613 46.6184 48.4816 46.8891 48.4327C57.3196 46.3672 64.9762 39.3191 64.9198 30.9495L64.9085 30.9397Z" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                  <path d="M31.1148 66.7304C30.4918 68.9909 29.4209 70.9958 27.7368 70.9958C24.8941 70.9958 23.5799 65.1696 25.5756 62.3574C26.0039 61.7519 26.588 61.4424 27.1624 61.2272C28.4474 60.7697 29.9174 60.6755 31.1927 61.2675C31.806 61.5501 31.8449 62.3574 31.767 63.1782C31.66 64.2546 31.4458 65.5194 31.1148 66.717V66.7304Z" fill="black" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                </g>
                <defs>
                  <clipPath id="clip0_469_78100">
                    <rect width={80} height={80} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && selected == "Yes") && <>
    <div className="c12TabSelector gap-6 absolute flex-col w-[375px] items-start overflow-hidden bg-neutral-100 opacity-100 pt-10 pb-0 px-0 left-[4162px] top-[58px] flex">
      <div className="frame482656 gap-10 flex-col w-[375px] items-start opacity-100 p-0 flex">
        <div className="frame482648 gap-2 flex-col items-start w-full opacity-100 px-4 py-0 flex">
          <span className="whatAreYouLookingToTreat font-['Volta_Modern_Display'] text-2xl font-medium text-black text-left tracking-[-0.35px] w-full">What are you looking to treat?</span>
          <div className="frame482735 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
            <span className="selectOne font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Select one</span>
          </div>
        </div>
        <div className="frame482658 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
          <svg width={375} height={1} viewBox="0 0 375 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2={375} y2="0.5" stroke="#757575" />
          </svg>
          <div className="frame482657 gap-0 flex-row w-[375px] items-start opacity-100 p-0 flex">
            <div className="frame482655 gap-0 flex-row w-[187.5px] items-start flex-1 min-w-0 bg-white opacity-100 pt-0 pb-6 px-0 flex">
              <svg className="component46" width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_215_52758)">
                  <path d="M16.002 37.6187C16.1032 35.0882 17.5414 32.9783 19.5062 32.2305" stroke="#023054" strokeWidth="0.375" strokeMiterlimit={10} />
                  <path d="M22.6484 43.5657C22.1487 43.7593 21.6153 43.8662 21.0617 43.8662C19.691 43.8662 18.4486 43.2252 17.5371 42.1836" stroke="#023054" strokeWidth="0.375" strokeMiterlimit={10} />
                  <path d="M28.8356 32.6504C30.9489 33.3648 32.4141 35.1876 32.4141 37.9118C32.4141 41.2035 30.1454 43.8742 27.3501 43.8742C27.0058 43.8742 26.2293 43.8008 25.8984 43.7206" stroke="#023054" strokeWidth="0.375" strokeMiterlimit={10} />
                  <path d="M25.2344 47.9544C26.0649 42.1322 27.179 37.0043 28.5699 32.5242C28.7252 32.3639 28.9277 32.2571 29.1438 32.2103C37.1787 30.4009 43.0732 24.2181 43.0327 16.8669C43.0192 14.6569 42.4722 12.547 41.4932 10.6307C41.3041 10.2568 41.3987 9.80278 41.7498 9.56909C43.6201 8.30048 46.0103 6.25068 47.7118 3.24609" stroke="#023054" strokeWidth="0.845041" strokeMiterlimit={10} />
                  <path d="M0.296875 3.24609C2.0659 6.37087 4.57765 8.4674 6.47496 9.71598C6.82606 9.94967 6.9341 10.397 6.74504 10.7709C5.82677 12.6471 5.32712 14.7036 5.33387 16.8669C5.37438 24.365 11.5727 30.6413 19.8709 32.3105C20.1208 32.3572 20.3436 32.4841 20.5124 32.671C21.9843 36.8241 22.8148 42.1322 23.3887 47.9143" stroke="#023054" strokeWidth="0.845041" strokeMiterlimit={10} />
                  <path d="M41.7005 0.167969C40.2758 2.56496 38.1017 4.02052 36.9741 4.65482C36.6905 4.81507 36.3529 4.78836 36.0896 4.60809C32.8216 2.3513 28.6489 0.989223 24.098 0.989223C19.5472 0.989223 15.3069 2.37801 12.0457 4.68153C11.7891 4.86181 11.4447 4.89519 11.1679 4.74162C10.0876 4.15406 7.78516 2.68515 6.29297 0.181322" stroke="#023054" strokeWidth="0.845041" strokeMiterlimit={10} />
                  <path d="M38.9467 18.563C38.9129 12.5663 32.3095 7.70312 24.1973 7.70312C16.0852 7.70312 9.54944 12.5663 9.59003 18.563C9.62386 23.6905 14.4479 27.984 20.9159 29.1234C21.1054 29.1587 22.2352 29.3525 22.3638 29.4817L23.9876 31.7312C24.3462 32.0777 24.9551 32.0895 25.3272 31.7606L26.8901 29.4817C27.0119 29.376 27.9726 29.0882 28.135 29.0588C34.3933 27.8195 38.9873 23.5907 38.9535 18.5689L38.9467 18.563Z" stroke="#023054" strokeWidth="0.375" strokeMiterlimit={10} />
                  <path d="M18.6701 40.0379C18.2962 41.3942 17.6537 42.5971 16.6432 42.5971C14.9377 42.5971 14.1491 39.1014 15.3465 37.4141C15.6035 37.0508 15.954 36.8651 16.2986 36.7359C17.0696 36.4614 17.9516 36.4049 18.7168 36.7601C19.0848 36.9297 19.1081 37.4141 19.0614 37.9065C18.9971 38.5524 18.8686 39.3113 18.6701 40.0298V40.0379Z" fill="#023054" stroke="#023054" strokeWidth="0.845041" strokeMiterlimit={10} />
                </g>
                <defs>
                  <clipPath id="clip0_215_52758">
                    <rect width={48} height={48} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="frame482651 gap-0 flex-col h-[117px] items-start flex-1 min-w-0 opacity-100 pl-4 pr-0 pt-6 pb-0 flex">
                <div className="frame482607 gap-2 flex-col w-[140px] items-start opacity-100 p-0 flex">
                  <span className="prostateCancer font-['Volta_Modern_Display'] text-base font-semibold text-[#023054] text-left tracking-[0px] w-full">Prostate Cancer </span>
                </div>
              </div>
            </div>
            <div className="frame482653 gap-px flex-row w-[187.5px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <svg width={2} height={117} viewBox="0 0 2 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1={1} y1="2.18557e-08" x2="0.999995" y2={117} stroke="#757575" />
              </svg>
              <div className="frame482736 gap-2.5 flex-col items-start flex-1 min-w-0 opacity-100 pt-0 pb-6 px-0 flex">
                <div className="frame482651 gap-0 flex-col h-[117px] items-start w-full opacity-100 pl-4 pr-0 pt-6 pb-0 flex">
                  <div className="frame482607 gap-2 flex-col w-[140px] items-start opacity-100 p-0 flex">
                    <span className="gEPNets font-['Volta_Modern_Display'] text-base font-medium text-black text-left tracking-[0px] w-full h-[25px]">GEP-Nets</span>
                  </div>
                  <svg className="component46" width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_215_52807)">
                      <path d="M16.002 37.6167C16.1032 35.0862 17.5414 32.9763 19.5062 32.2285" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M22.6484 43.5657C22.1487 43.7593 21.6153 43.8662 21.0617 43.8662C19.691 43.8662 18.4486 43.2252 17.5371 42.1836" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M28.8356 32.6504C30.9489 33.3648 32.4141 35.1876 32.4141 37.9118C32.4141 41.2035 30.1454 43.8742 27.3501 43.8742C27.0058 43.8742 26.2293 43.8008 25.8984 43.7206" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M25.2344 47.9544C26.0649 42.1322 27.179 37.0043 28.5699 32.5242C28.7252 32.3639 28.9277 32.2571 29.1438 32.2103C37.1787 30.4009 43.0732 24.2181 43.0327 16.8669C43.0192 14.6569 42.4722 12.547 41.4932 10.6307C41.3041 10.2568 41.3987 9.80278 41.7498 9.56909C43.6201 8.30048 46.0103 6.25068 47.7118 3.24609" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M0.294922 3.24609C2.06395 6.37087 4.57569 8.4674 6.47301 9.71598C6.82411 9.94967 6.93214 10.397 6.74309 10.7709C5.82481 12.6471 5.32517 14.7036 5.33192 16.8669C5.37243 24.365 11.5708 30.6413 19.869 32.3105C20.1188 32.3572 20.3416 32.4841 20.5104 32.671C21.9824 36.8241 22.8129 42.1322 23.3868 47.9143" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M41.7005 0.166016C40.2758 2.56301 38.1017 4.01857 36.9741 4.65287C36.6905 4.81312 36.3529 4.78641 36.0896 4.60613C32.8216 2.34935 28.6489 0.98727 24.098 0.98727C19.5472 0.98727 15.3069 2.37606 12.0457 4.67958C11.7891 4.85985 11.4447 4.89324 11.1679 4.73967C10.0876 4.15211 7.78516 2.68319 6.29297 0.179369" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M38.9447 18.563C38.9109 12.5663 32.3075 7.70312 24.1954 7.70312C16.0832 7.70312 9.54748 12.5663 9.58808 18.563C9.62191 23.6905 14.4459 27.984 20.914 29.1234C21.1034 29.1587 22.2333 29.3525 22.3618 29.4817L23.9856 31.7312C24.3442 32.0777 24.9531 32.0895 25.3253 31.7606L26.8881 29.4817C27.0099 29.376 27.9707 29.0882 28.133 29.0588C34.3914 27.8195 38.9853 23.5907 38.9515 18.5689L38.9447 18.563Z" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M18.6701 40.0379C18.2962 41.3942 17.6537 42.5971 16.6432 42.5971C14.9377 42.5971 14.1491 39.1014 15.3465 37.4141C15.6035 37.0508 15.954 36.8651 16.2986 36.7359C17.0696 36.4614 17.9516 36.4049 18.7168 36.7601C19.0848 36.9297 19.1081 37.4141 19.0614 37.9065C18.9971 38.5524 18.8686 39.3113 18.6701 40.0298V40.0379Z" fill="black" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                    </g>
                    <defs>
                      <clipPath id="clip0_215_52807">
                        <rect width={48} height={48} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && selected == "No") && <>
    <div className="c12TabSelector gap-6 absolute flex-col w-[375px] items-start overflow-hidden bg-neutral-100 opacity-100 pt-10 pb-0 px-0 left-[4162px] top-[584px] flex">
      <div className="frame482656 gap-10 flex-col w-[375px] items-start opacity-100 p-0 flex">
        <div className="frame482648 gap-2 flex-col items-start w-full opacity-100 px-4 py-0 flex">
          <span className="whatAreYouLookingToTreat font-['Volta_Modern_Display'] text-2xl font-medium text-black text-left tracking-[-0.35px] w-full">What are you looking to treat?</span>
          <div className="frame482735 gap-0 flex-row items-start w-full opacity-100 p-0 flex">
            <span className="selectOne font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Select one</span>
          </div>
        </div>
        <div className="frame482658 gap-0 flex-col items-start w-full opacity-100 p-0 flex">
          <svg width={375} height={1} viewBox="0 0 375 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2={375} y2="0.5" stroke="#757575" />
          </svg>
          <div className="frame482657 gap-0 flex-row w-[375px] items-start opacity-100 p-0 flex">
            <div className="frame482655 gap-0 flex-row w-[187.5px] items-start flex-1 min-w-0 bg-neutral-100 opacity-100 pt-0 pb-6 px-0 flex">
              <svg className="component46" width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_469_78120)">
                  <path d="M16.002 37.6187C16.1032 35.0882 17.5414 32.9783 19.5062 32.2305" stroke="black" strokeWidth="0.375" strokeMiterlimit={10} />
                  <path d="M22.6484 43.5657C22.1487 43.7593 21.6153 43.8662 21.0617 43.8662C19.691 43.8662 18.4486 43.2252 17.5371 42.1836" stroke="black" strokeWidth="0.375" strokeMiterlimit={10} />
                  <path d="M28.8356 32.6504C30.9489 33.3648 32.4141 35.1876 32.4141 37.9118C32.4141 41.2035 30.1454 43.8742 27.3501 43.8742C27.0058 43.8742 26.2293 43.8008 25.8984 43.7206" stroke="black" strokeWidth="0.375" strokeMiterlimit={10} />
                  <path d="M25.2344 47.9544C26.0649 42.1322 27.179 37.0043 28.5699 32.5242C28.7252 32.3639 28.9277 32.2571 29.1438 32.2103C37.1787 30.4009 43.0732 24.2181 43.0327 16.8669C43.0192 14.6569 42.4722 12.547 41.4932 10.6307C41.3041 10.2568 41.3987 9.80278 41.7498 9.56909C43.6201 8.30048 46.0103 6.25068 47.7118 3.24609" stroke="black" strokeWidth="0.845041" strokeMiterlimit={10} />
                  <path d="M0.296875 3.24609C2.0659 6.37087 4.57765 8.4674 6.47496 9.71598C6.82606 9.94967 6.9341 10.397 6.74504 10.7709C5.82677 12.6471 5.32712 14.7036 5.33387 16.8669C5.37438 24.365 11.5727 30.6413 19.8709 32.3105C20.1208 32.3572 20.3436 32.4841 20.5124 32.671C21.9843 36.8241 22.8148 42.1322 23.3887 47.9143" stroke="black" strokeWidth="0.845041" strokeMiterlimit={10} />
                  <path d="M41.7005 0.167969C40.2758 2.56496 38.1017 4.02052 36.9741 4.65482C36.6905 4.81507 36.3529 4.78836 36.0896 4.60809C32.8216 2.3513 28.6489 0.989223 24.098 0.989223C19.5472 0.989223 15.3069 2.37801 12.0457 4.68153C11.7891 4.86181 11.4447 4.89519 11.1679 4.74162C10.0876 4.15406 7.78516 2.68515 6.29297 0.181322" stroke="black" strokeWidth="0.845041" strokeMiterlimit={10} />
                  <path d="M38.9467 18.563C38.9129 12.5663 32.3095 7.70312 24.1973 7.70312C16.0852 7.70312 9.54944 12.5663 9.59003 18.563C9.62386 23.6905 14.4479 27.984 20.9159 29.1234C21.1054 29.1587 22.2352 29.3525 22.3638 29.4817L23.9876 31.7312C24.3462 32.0777 24.9551 32.0895 25.3272 31.7606L26.8901 29.4817C27.0119 29.376 27.9726 29.0882 28.135 29.0588C34.3933 27.8195 38.9873 23.5907 38.9535 18.5689L38.9467 18.563Z" stroke="black" strokeWidth="0.375" strokeMiterlimit={10} />
                  <path d="M18.6701 40.0379C18.2962 41.3942 17.6537 42.5971 16.6432 42.5971C14.9377 42.5971 14.1491 39.1014 15.3465 37.4141C15.6035 37.0508 15.954 36.8651 16.2986 36.7359C17.0696 36.4614 17.9516 36.4049 18.7168 36.7601C19.0848 36.9297 19.1081 37.4141 19.0614 37.9065C18.9971 38.5524 18.8686 39.3113 18.6701 40.0298V40.0379Z" fill="black" stroke="black" strokeWidth="0.845041" strokeMiterlimit={10} />
                </g>
                <defs>
                  <clipPath id="clip0_469_78120">
                    <rect width={48} height={48} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="frame482651 gap-0 flex-col h-[117px] items-start flex-1 min-w-0 opacity-100 pl-4 pr-0 pt-6 pb-0 flex">
                <div className="frame482607 gap-2 flex-col w-[140px] items-start opacity-100 p-0 flex">
                  <span className="prostateCancer font-['Volta_Modern_Display'] text-base font-medium text-black text-left tracking-[0px] w-full h-[25px]">Prostate Cancer </span>
                </div>
              </div>
            </div>
            <div className="frame482653 gap-px flex-row w-[187.5px] items-start flex-1 min-w-0 opacity-100 p-0 flex">
              <svg width={2} height={117} viewBox="0 0 2 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1={1} y1="2.18557e-08" x2="0.999995" y2={117} stroke="#757575" />
              </svg>
              <div className="frame482736 gap-2.5 flex-col items-start flex-1 min-w-0 opacity-100 pt-0 pb-6 px-0 flex">
                <div className="frame482651 gap-0 flex-col h-[117px] items-start w-full opacity-100 pl-4 pr-0 pt-6 pb-0 flex">
                  <div className="frame482607 gap-2 flex-col w-[140px] items-start opacity-100 p-0 flex">
                    <span className="gEPNets font-['Volta_Modern_Display'] text-base font-medium text-black text-left tracking-[0px] w-full h-[25px]">GEP-Nets</span>
                  </div>
                  <svg className="component46" width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_469_78138)">
                      <path d="M16.002 37.6167C16.1032 35.0862 17.5414 32.9763 19.5062 32.2285" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M22.6484 43.5657C22.1487 43.7593 21.6153 43.8662 21.0617 43.8662C19.691 43.8662 18.4486 43.2252 17.5371 42.1836" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M28.8356 32.6504C30.9489 33.3648 32.4141 35.1876 32.4141 37.9118C32.4141 41.2035 30.1454 43.8742 27.3501 43.8742C27.0058 43.8742 26.2293 43.8008 25.8984 43.7206" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M25.2344 47.9544C26.0649 42.1322 27.179 37.0043 28.5699 32.5242C28.7252 32.3639 28.9277 32.2571 29.1438 32.2103C37.1787 30.4009 43.0732 24.2181 43.0327 16.8669C43.0192 14.6569 42.4722 12.547 41.4932 10.6307C41.3041 10.2568 41.3987 9.80278 41.7498 9.56909C43.6201 8.30048 46.0103 6.25068 47.7118 3.24609" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M0.294922 3.24609C2.06395 6.37087 4.57569 8.4674 6.47301 9.71598C6.82411 9.94967 6.93214 10.397 6.74309 10.7709C5.82481 12.6471 5.32517 14.7036 5.33192 16.8669C5.37243 24.365 11.5708 30.6413 19.869 32.3105C20.1188 32.3572 20.3416 32.4841 20.5104 32.671C21.9824 36.8241 22.8129 42.1322 23.3868 47.9143" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M41.7005 0.166016C40.2758 2.56301 38.1017 4.01857 36.9741 4.65287C36.6905 4.81312 36.3529 4.78641 36.0896 4.60613C32.8216 2.34935 28.6489 0.98727 24.098 0.98727C19.5472 0.98727 15.3069 2.37606 12.0457 4.67958C11.7891 4.85985 11.4447 4.89324 11.1679 4.73967C10.0876 4.15211 7.78516 2.68319 6.29297 0.179369" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                      <path d="M38.9447 18.563C38.9109 12.5663 32.3075 7.70312 24.1954 7.70312C16.0832 7.70312 9.54748 12.5663 9.58808 18.563C9.62191 23.6905 14.4459 27.984 20.914 29.1234C21.1034 29.1587 22.2333 29.3525 22.3618 29.4817L23.9856 31.7312C24.3442 32.0777 24.9531 32.0895 25.3253 31.7606L26.8881 29.4817C27.0099 29.376 27.9707 29.0882 28.133 29.0588C34.3914 27.8195 38.9853 23.5907 38.9515 18.5689L38.9447 18.563Z" stroke="black" strokeWidth="0.5" strokeMiterlimit={10} />
                      <path d="M18.6701 40.0379C18.2962 41.3942 17.6537 42.5971 16.6432 42.5971C14.9377 42.5971 14.1491 39.1014 15.3465 37.4141C15.6035 37.0508 15.954 36.8651 16.2986 36.7359C17.0696 36.4614 17.9516 36.4049 18.7168 36.7601C19.0848 36.9297 19.1081 37.4141 19.0614 37.9065C18.9971 38.5524 18.8686 39.3113 18.6701 40.0298V40.0379Z" fill="black" stroke="black" strokeWidth="1.12672" strokeMiterlimit={10} />
                    </g>
                    <defs>
                      <clipPath id="clip0_469_78138">
                        <rect width={48} height={48} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
</>
  );
}