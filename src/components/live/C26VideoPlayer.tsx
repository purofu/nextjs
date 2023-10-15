import React from 'react';

export function C26VideoPlayer(props){
	const {
    size = "L(LHN)",
    sectionHead = "Yes",
    bodyCopy = "No"
  } = props;
  return (
      <>
  {(size == "L(LHN)" && sectionHead == "Yes" && bodyCopy == "No") && <>
    <div className="c26VideoPlayer gap-16 absolute flex-col w-[1164px] items-start bg-white opacity-100 p-16 left-4 top-[54px] flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[1100px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame482660 gap-6 flex-col items-start opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-[1036px]">Monitoring Progression</span>
        <div className="videoPlayers w-[1036px] h-[583px] relative overflow-hidden opacity-100 p-0">
          <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[1036px] h-[583px] absolute opacity-100 object-cover p-0 left-0 top-0" />
          <div className="overlays w-[417px] h-[585px] absolute p-0">
            <div className="w-[417px] h-[585px] relative p-0 blur">
              <div className="w-[417px] h-[585px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
            </div>
            <div className="shadows w-[417px] h-[583px] relative p-0">
              <div className="darker w-[417px] h-[108px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              <div className="darker w-[417px] h-[108px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
            </div>
          </div>
          <div className="playButton w-[131px] h-32 absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
            <svg width={131} height={128} viewBox="0 0 131 128" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M130 64C130 98.7722 101.144 127 65.5 127C29.8557 127 1 98.7722 1 64C1 29.2278 29.8557 1 65.5 1C101.144 1 130 29.2278 130 64Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth={2} />
            </svg>
            <div className="interactiveIcons w-12 h-12 absolute opacity-100 p-0 left-[45px] top-10">
              <svg className="play" width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 42V2L41 22L1 42Z" stroke="white" strokeWidth={2} />
              </svg>
            </div>
          </div>
          <div className="playTime gap-[156px] absolute flex-row items-end opacity-100 p-0 left-12 top-[493px] flex">
            <div className="timer w-[131px] h-11 relative opacity-100 p-0">
              <div className="rectangle3873 absolute w-[85.99px] h-[43.9px] border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-[34.36%] right-[0%] top-[0%] bottom-[0.23%]" />
              <div className="rectangle3875 absolute w-[45.36px] h-[43.9px] border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-[0%] right-[65.38%] top-[0.23%] bottom-[0%]" />
              <span className="0139 font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-center tracking-[0px] absolute -translate-y-2/4 left-[49.34%] right-[14.78%] top-2/4"> 01:39</span>
              <div className="hourglassbottom w-[18.9px] h-[18.68px] absolute p-0">
                <div className="boundingBox w-[18.9px] h-[18.68px] relative bg-white opacity-100 p-0" />
                <svg width={11} height={15} viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.57181 6.8831C6.41784 6.8831 7.11395 6.5533 7.66013 5.89368C8.20631 5.23406 8.47939 4.46617 8.47939 3.59002V1.25493H2.66423V3.59002C2.66423 4.46617 2.93732 5.23406 3.48349 5.89368C4.02967 6.5533 4.72578 6.8831 5.57181 6.8831ZM0.210938 14.4871V13.7087H1.87674V11.3737C1.87674 10.4726 2.12938 9.66002 2.63468 8.93604C3.13997 8.21205 3.81816 7.72732 4.66923 7.48184C3.81816 7.23635 3.13997 6.75162 2.63468 6.02764C2.12938 5.30366 1.87674 4.49112 1.87674 3.59002V1.25493H0.210938V0.476562H10.9327V1.25493H9.26689V3.59002C9.26689 4.49112 9.01424 5.30366 8.50894 6.02764C8.00365 6.75162 7.32546 7.23635 6.47439 7.48184C7.32546 7.72732 8.00365 8.21205 8.50894 8.93604C9.01424 9.66002 9.26689 10.4726 9.26689 11.3737V13.7087H10.9327V14.4871H0.210938Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && sectionHead == "Yes" && bodyCopy == "Yes") && <>
    <div className="c26VideoPlayer gap-16 absolute flex-col w-[1164px] items-start bg-white opacity-100 p-16 left-8 top-[2182px] flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[1100px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame482660 gap-12 flex-col items-start opacity-100 p-0 flex">
        <div className="videoPlayers w-[1036px] h-[583px] relative overflow-hidden opacity-100 p-0">
          <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[1036px] h-[583px] absolute opacity-100 object-cover p-0 left-0 top-0" />
          <div className="overlays w-[417px] h-[585px] absolute p-0">
            <div className="w-[417px] h-[585px] relative p-0 blur">
              <div className="w-[417px] h-[585px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
            </div>
            <div className="shadows w-[417px] h-[583px] relative p-0">
              <div className="darker w-[417px] h-[108px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              <div className="darker w-[417px] h-[108px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
            </div>
          </div>
          <div className="playButton w-[131px] h-32 absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
            <svg width={131} height={128} viewBox="0 0 131 128" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M130 64C130 98.7722 101.144 127 65.5 127C29.8557 127 1 98.7722 1 64C1 29.2278 29.8557 1 65.5 1C101.144 1 130 29.2278 130 64Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth={2} />
            </svg>
            <div className="interactiveIcons w-12 h-12 absolute opacity-100 p-0 left-[45px] top-10">
              <svg className="play" width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 42V2L41 22L1 42Z" stroke="white" strokeWidth={2} />
              </svg>
            </div>
          </div>
          <div className="playTime gap-[156px] absolute flex-row items-end opacity-100 p-0 left-12 top-[493px] flex">
            <div className="timer w-[131px] h-11 relative opacity-100 p-0">
              <div className="rectangle3873 absolute w-[85.99px] h-[43.9px] border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-[34.36%] right-[0%] top-[0%] bottom-[0.23%]" />
              <div className="rectangle3875 absolute w-[45.36px] h-[43.9px] border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-[0%] right-[65.38%] top-[0.23%] bottom-[0%]" />
              <span className="0139 font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-center tracking-[0px] absolute -translate-y-2/4 left-[49.34%] right-[14.78%] top-2/4"> 01:39</span>
              <div className="hourglassbottom w-[18.9px] h-[18.68px] absolute p-0">
                <div className="boundingBox w-[18.9px] h-[18.68px] relative bg-white opacity-100 p-0" />
                <svg width={11} height={15} viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.57181 6.8831C6.41784 6.8831 7.11395 6.5533 7.66013 5.89368C8.20631 5.23406 8.47939 4.46617 8.47939 3.59002V1.25493H2.66423V3.59002C2.66423 4.46617 2.93732 5.23406 3.48349 5.89368C4.02967 6.5533 4.72578 6.8831 5.57181 6.8831ZM0.210938 14.4871V13.7087H1.87674V11.3737C1.87674 10.4726 2.12938 9.66002 2.63468 8.93604C3.13997 8.21205 3.81816 7.72732 4.66923 7.48184C3.81816 7.23635 3.13997 6.75162 2.63468 6.02764C2.12938 5.30366 1.87674 4.49112 1.87674 3.59002V1.25493H0.210938V0.476562H10.9327V1.25493H9.26689V3.59002C9.26689 4.49112 9.01424 5.30366 8.50894 6.02764C8.00365 6.75162 7.32546 7.23635 6.47439 7.48184C7.32546 7.72732 8.00365 8.21205 8.50894 8.93604C9.01424 9.66002 9.26689 10.4726 9.26689 11.3737V13.7087H10.9327V14.4871H0.210938Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="frame482659 gap-4 flex-col items-start opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-[1036px]">Monitoring Progression</span>
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[948px]">Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. Eu etiam quis odio tellus at. A felis tellus et neque ultrices. Gravida ultrices accumsan etiam aliquet massa mus in. Dictum tempor id at nunc pellentesque. Vitae id at risus pharetra tristique sit tristique tincidunt massa. A sit egestas accumsan nunc ipsum purus. Est rhoncus sagittis tincidunt tortor et semper sapien aliquam a. Accumsan varius dictum sapien varius. Quis eu magna in sed lectus eu. Ultricies ultrices nibh etiam molestie quam. <br />Adipiscing vel quam eu pharetra sed condimentum sagittis. Pulvinar in malesuada ut aliquam in euismod augue.Quam sit sed augue imperdiet vulputate pellentesque faucibus ac congue. Sagittis eu vitae donec </span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && sectionHead == "No" && bodyCopy == "Yes") && <>
    <div className="c26VideoPlayer gap-16 absolute flex-col w-[1164px] items-start bg-white opacity-100 p-16 left-8 top-[3656px] flex">
      <div className="frame482660 gap-12 flex-col items-start opacity-100 p-0 flex">
        <div className="videoPlayers w-[1036px] h-[583px] relative overflow-hidden opacity-100 p-0">
          <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[1036px] h-[583px] absolute opacity-100 object-cover p-0 left-0 top-0" />
          <div className="overlays w-[417px] h-[585px] absolute p-0">
            <div className="w-[417px] h-[585px] relative p-0 blur">
              <div className="w-[417px] h-[585px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
            </div>
            <div className="shadows w-[417px] h-[583px] relative p-0">
              <div className="darker w-[417px] h-[108px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              <div className="darker w-[417px] h-[108px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
            </div>
          </div>
          <div className="playButton w-[131px] h-32 absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
            <svg width={131} height={128} viewBox="0 0 131 128" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M130 64C130 98.7722 101.144 127 65.5 127C29.8557 127 1 98.7722 1 64C1 29.2278 29.8557 1 65.5 1C101.144 1 130 29.2278 130 64Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth={2} />
            </svg>
            <div className="interactiveIcons w-12 h-12 absolute opacity-100 p-0 left-[45px] top-10">
              <svg className="play" width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 42V2L41 22L1 42Z" stroke="white" strokeWidth={2} />
              </svg>
            </div>
          </div>
          <div className="playTime gap-[156px] absolute flex-row items-end opacity-100 p-0 left-12 top-[493px] flex">
            <div className="timer w-[131px] h-11 relative opacity-100 p-0">
              <div className="rectangle3873 absolute w-[85.99px] h-[43.9px] border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-[34.36%] right-[0%] top-[0%] bottom-[0.23%]" />
              <div className="rectangle3875 absolute w-[45.36px] h-[43.9px] border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-[0%] right-[65.38%] top-[0.23%] bottom-[0%]" />
              <span className="0139 font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-center tracking-[0px] absolute -translate-y-2/4 left-[49.34%] right-[14.78%] top-2/4"> 01:39</span>
              <div className="hourglassbottom w-[18.9px] h-[18.68px] absolute p-0">
                <div className="boundingBox w-[18.9px] h-[18.68px] relative bg-white opacity-100 p-0" />
                <svg width={11} height={15} viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.57181 6.8831C6.41784 6.8831 7.11395 6.5533 7.66013 5.89368C8.20631 5.23406 8.47939 4.46617 8.47939 3.59002V1.25493H2.66423V3.59002C2.66423 4.46617 2.93732 5.23406 3.48349 5.89368C4.02967 6.5533 4.72578 6.8831 5.57181 6.8831ZM0.210938 14.4871V13.7087H1.87674V11.3737C1.87674 10.4726 2.12938 9.66002 2.63468 8.93604C3.13997 8.21205 3.81816 7.72732 4.66923 7.48184C3.81816 7.23635 3.13997 6.75162 2.63468 6.02764C2.12938 5.30366 1.87674 4.49112 1.87674 3.59002V1.25493H0.210938V0.476562H10.9327V1.25493H9.26689V3.59002C9.26689 4.49112 9.01424 5.30366 8.50894 6.02764C8.00365 6.75162 7.32546 7.23635 6.47439 7.48184C7.32546 7.72732 8.00365 8.21205 8.50894 8.93604C9.01424 9.66002 9.26689 10.4726 9.26689 11.3737V13.7087H10.9327V14.4871H0.210938Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="frame482659 gap-4 flex-col items-start opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-[1036px]">Monitoring Progression</span>
          <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[948px]">Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. Eu etiam quis odio tellus at. A felis tellus et neque ultrices. Gravida ultrices accumsan etiam aliquet massa mus in. Dictum tempor id at nunc pellentesque. Vitae id at risus pharetra tristique sit tristique tincidunt massa. A sit egestas accumsan nunc ipsum purus. Est rhoncus sagittis tincidunt tortor et semper sapien aliquam a. Accumsan varius dictum sapien varius. Quis eu magna in sed lectus eu. Ultricies ultrices nibh etiam molestie quam. <br />Adipiscing vel quam eu pharetra sed condimentum sagittis. Pulvinar in malesuada ut aliquam in euismod augue.Quam sit sed augue imperdiet vulputate pellentesque faucibus ac congue. Sagittis eu vitae donec </span>
        </div>
      </div>
    </div>
  </>}
  {(size == "L(LHN)" && sectionHead == "No" && bodyCopy == "No") && <>
    <div className="c26VideoPlayer gap-16 absolute flex-col w-[1164px] items-start bg-white opacity-100 p-16 left-4 top-[1194px] flex">
      <div className="frame482660 gap-6 flex-col items-start opacity-100 p-0 flex">
        <div className="videoPlayers w-[1036px] h-[583px] relative overflow-hidden opacity-100 p-0">
          <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[1036px] h-[583px] absolute opacity-100 object-cover p-0 left-0 top-0" />
          <div className="overlays w-[417px] h-[585px] absolute p-0">
            <div className="w-[417px] h-[585px] relative p-0 blur">
              <div className="w-[417px] h-[585px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
            </div>
            <div className="shadows w-[417px] h-[583px] relative p-0">
              <div className="darker w-[417px] h-[108px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              <div className="darker w-[417px] h-[108px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
            </div>
          </div>
          <div className="playButton w-[131px] h-32 absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
            <svg width={131} height={128} viewBox="0 0 131 128" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M130 64C130 98.7722 101.144 127 65.5 127C29.8557 127 1 98.7722 1 64C1 29.2278 29.8557 1 65.5 1C101.144 1 130 29.2278 130 64Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth={2} />
            </svg>
            <div className="interactiveIcons w-12 h-12 absolute opacity-100 p-0 left-[45px] top-10">
              <svg className="play" width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 42V2L41 22L1 42Z" stroke="white" strokeWidth={2} />
              </svg>
            </div>
          </div>
          <div className="playTime gap-[156px] absolute flex-row items-end opacity-100 p-0 left-12 top-[493px] flex">
            <div className="timer w-[131px] h-11 relative opacity-100 p-0">
              <div className="rectangle3873 absolute w-[85.99px] h-[43.9px] border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-[34.36%] right-[0%] top-[0%] bottom-[0.23%]" />
              <div className="rectangle3875 absolute w-[45.36px] h-[43.9px] border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-[0%] right-[65.38%] top-[0.23%] bottom-[0%]" />
              <span className="0139 font-['Volta_Modern_Display'] text-[19px] font-medium text-white text-center tracking-[0px] absolute -translate-y-2/4 left-[49.34%] right-[14.78%] top-2/4"> 01:39</span>
              <div className="hourglassbottom w-[18.9px] h-[18.68px] absolute p-0">
                <div className="boundingBox w-[18.9px] h-[18.68px] relative bg-white opacity-100 p-0" />
                <svg width={11} height={15} viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.57181 6.8831C6.41784 6.8831 7.11395 6.5533 7.66013 5.89368C8.20631 5.23406 8.47939 4.46617 8.47939 3.59002V1.25493H2.66423V3.59002C2.66423 4.46617 2.93732 5.23406 3.48349 5.89368C4.02967 6.5533 4.72578 6.8831 5.57181 6.8831ZM0.210938 14.4871V13.7087H1.87674V11.3737C1.87674 10.4726 2.12938 9.66002 2.63468 8.93604C3.13997 8.21205 3.81816 7.72732 4.66923 7.48184C3.81816 7.23635 3.13997 6.75162 2.63468 6.02764C2.12938 5.30366 1.87674 4.49112 1.87674 3.59002V1.25493H0.210938V0.476562H10.9327V1.25493H9.26689V3.59002C9.26689 4.49112 9.01424 5.30366 8.50894 6.02764C8.00365 6.75162 7.32546 7.23635 6.47439 7.48184C7.32546 7.72732 8.00365 8.21205 8.50894 8.93604C9.01424 9.66002 9.26689 10.4726 9.26689 11.3737V13.7087H10.9327V14.4871H0.210938Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && sectionHead == "Yes" && bodyCopy == "No") && <>
    <div className="c26VideoPlayer gap-16 absolute flex-col w-[1440px] items-start bg-white opacity-100 px-12 py-16 left-[1383px] top-[54px] flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[1392px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame482661 gap-6 flex-col items-start opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-[1344px]">Monitoring Progression</span>
        <div className="videoPlayers w-[1344px] h-[756px] relative overflow-hidden opacity-100 p-0">
          <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[1344px] h-[757px] absolute opacity-100 object-cover p-0 left-0 top-0" />
          <div className="overlays w-[513px] h-[757px] absolute p-0">
            <div className="w-[513px] h-[757px] relative p-0 blur">
              <div className="w-[513px] h-[757px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
            </div>
            <div className="shadows w-[513px] h-[754.41px] relative p-0">
              <div className="darker w-[513px] h-[139.75px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              <div className="darker w-[513px] h-[139.75px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
            </div>
          </div>
          <div className="playTime gap-[195.89654541015625px] absolute flex-row h-14 items-end border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-16 top-[636px] flex">
            <div className="timer w-[164px] h-[55px] relative opacity-100 p-0">
              <div className="rectangle3875 absolute top-[-1.35%] w-[56.83px] h-[55.74px] opacity-100 p-0 border-[1.26px] border-white left-[0%] right-[65.35%] bottom-[0%]" />
              <span className="0139 font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] absolute w-[59px] h-[31px] left-2/4 right-[14.02%] inset-y-[21.82%]">01:39</span>
              <div className="hourglassbottom w-[23.66px] h-[23.35px] absolute p-0">
                <div className="boundingBox w-[23.66px] h-[23.35px] relative bg-white opacity-100 p-0" />
                <svg width={14} height={18} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.8246 8.10192C7.88376 8.10192 8.75522 7.68967 9.43899 6.86515C10.1227 6.04062 10.4646 5.08076 10.4646 3.98557V1.0667H3.18458V3.98557C3.18458 5.08076 3.52646 6.04062 4.21022 6.86515C4.89399 7.68967 5.76545 8.10192 6.8246 8.10192ZM0.113281 17.6069V16.634H2.19871V13.7151C2.19871 12.5887 2.515 11.5731 3.14758 10.6681C3.78016 9.76311 4.62919 9.1572 5.69466 8.85034C4.62919 8.54349 3.78016 7.93757 3.14758 7.0326C2.515 6.12762 2.19871 5.11194 2.19871 3.98557V1.0667H0.113281V0.09375H13.5359V1.0667H11.4505V3.98557C11.4505 5.11194 11.1342 6.12762 10.5016 7.0326C9.86904 7.93757 9.02002 8.54349 7.95455 8.85034C9.02002 9.1572 9.86904 9.76311 10.5016 10.6681C11.1342 11.5731 11.4505 12.5887 11.4505 13.7151V16.634H13.5359V17.6069H0.113281Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="playButton w-[164.5px] h-[161px] absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
            <svg width={165} height={161} viewBox="0 0 165 161" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M163.503 80.5014C163.503 124.389 127.146 160.003 82.2514 160.003C37.3571 160.003 1 124.389 1 80.5014C1 36.6142 37.3571 1 82.2514 1C127.146 1 163.503 36.6142 163.503 80.5014Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth={2} />
            </svg>
            <div className="interactiveIcons absolute w-16 h-16 opacity-100 p-0 left-[33.63%] right-[27.46%] top-[30.43%] bottom-[29.81%]">
              <svg className="play" width={58} height={58} viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.6582 55.6673V2.33398L54.9915 29.0007L1.6582 55.6673Z" stroke="white" strokeWidth={2} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && sectionHead == "Yes" && bodyCopy == "Yes") && <>
    <div className="c26VideoPlayer gap-16 absolute flex-col w-[1440px] items-start bg-white opacity-100 px-12 py-16 left-[1399px] top-[2182px] flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[1392px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[25px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame482661 gap-6 flex-col items-start opacity-100 p-0 flex">
        <div className="frame482659 gap-12 flex-col w-[1344px] items-start opacity-100 p-0 flex">
          <div className="videoPlayers w-[1344px] h-[756px] relative overflow-hidden opacity-100 p-0">
            <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[1344px] h-[757px] absolute opacity-100 object-cover p-0 left-0 top-0" />
            <div className="overlays w-[513px] h-[757px] absolute p-0">
              <div className="w-[513px] h-[757px] relative p-0 blur">
                <div className="w-[513px] h-[757px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
              </div>
              <div className="shadows w-[513px] h-[754.41px] relative p-0">
                <div className="darker w-[513px] h-[139.75px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
                <div className="darker w-[513px] h-[139.75px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              </div>
            </div>
            <div className="playTime gap-[195.89654541015625px] absolute flex-row h-14 items-end border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-16 top-[636px] flex">
              <div className="timer w-[164px] h-[55px] relative opacity-100 p-0">
                <div className="rectangle3875 absolute top-[-1.35%] w-[56.83px] h-[55.74px] opacity-100 p-0 border-[1.26px] border-white left-[0%] right-[65.35%] bottom-[0%]" />
                <span className="0139 font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] absolute w-[59px] h-[31px] left-2/4 right-[14.02%] inset-y-[21.82%]">01:39</span>
                <div className="hourglassbottom w-[23.66px] h-[23.35px] absolute p-0">
                  <div className="boundingBox w-[23.66px] h-[23.35px] relative bg-white opacity-100 p-0" />
                  <svg width={14} height={18} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.8246 8.10192C7.88376 8.10192 8.75522 7.68967 9.43899 6.86515C10.1227 6.04062 10.4646 5.08076 10.4646 3.98557V1.0667H3.18458V3.98557C3.18458 5.08076 3.52646 6.04062 4.21022 6.86515C4.89399 7.68967 5.76545 8.10192 6.8246 8.10192ZM0.113281 17.6069V16.634H2.19871V13.7151C2.19871 12.5887 2.515 11.5731 3.14758 10.6681C3.78016 9.76311 4.62919 9.1572 5.69466 8.85034C4.62919 8.54349 3.78016 7.93757 3.14758 7.0326C2.515 6.12762 2.19871 5.11194 2.19871 3.98557V1.0667H0.113281V0.09375H13.5359V1.0667H11.4505V3.98557C11.4505 5.11194 11.1342 6.12762 10.5016 7.0326C9.86904 7.93757 9.02002 8.54349 7.95455 8.85034C9.02002 9.1572 9.86904 9.76311 10.5016 10.6681C11.1342 11.5731 11.4505 12.5887 11.4505 13.7151V16.634H13.5359V17.6069H0.113281Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="playButton w-[164.5px] h-[161px] absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
              <svg width={165} height={161} viewBox="0 0 165 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M163.503 80.5014C163.503 124.389 127.146 160.003 82.2514 160.003C37.3571 160.003 1 124.389 1 80.5014C1 36.6142 37.3571 1 82.2514 1C127.146 1 163.503 36.6142 163.503 80.5014Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth={2} />
              </svg>
              <div className="interactiveIcons absolute w-16 h-16 opacity-100 p-0 left-[33.63%] right-[27.46%] top-[30.43%] bottom-[29.81%]">
                <svg className="play" width={58} height={58} viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.6582 55.6673V2.33398L54.9915 29.0007L1.6582 55.6673Z" stroke="white" strokeWidth={2} />
                </svg>
              </div>
            </div>
          </div>
          <div className="frame482659 gap-4 flex-col w-[1344px] items-start opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-full">Monitoring Progression</span>
            <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[1116px]">Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. Eu etiam quis odio tellus at. A felis tellus et neque ultrices. Gravida ultrices accumsan etiam aliquet massa mus in. Dictum tempor id at nunc pellentesque. Vitae id at risus pharetra tristique sit tristique tincidunt massa. A sit egestas accumsan nunc ipsum purus. Est rhoncus sagittis tincidunt tortor et semper sapien aliquam a. Accumsan varius dictum sapien varius. Quis eu magna in sed lectus eu. Ultricies ultrices nibh etiam molestie quam. <br />Adipiscing vel quam eu pharetra sed condimentum sagittis. Pulvinar in malesuada ut aliquam in euismod augue.Quam sit sed augue imperdiet vulputate pellentesque faucibus ac congue. Sagittis eu vitae donec </span>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && sectionHead == "No" && bodyCopy == "Yes") && <>
    <div className="c26VideoPlayer gap-16 absolute flex-col w-[1440px] items-start bg-white opacity-100 px-12 py-16 left-[1399px] top-[3656px] flex">
      <div className="frame482661 gap-6 flex-col items-start opacity-100 p-0 flex">
        <div className="frame482659 gap-12 flex-col w-[1344px] items-start opacity-100 p-0 flex">
          <div className="videoPlayers w-[1344px] h-[756px] relative overflow-hidden opacity-100 p-0">
            <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[1344px] h-[757px] absolute opacity-100 object-cover p-0 left-0 top-0" />
            <div className="overlays w-[513px] h-[757px] absolute p-0">
              <div className="w-[513px] h-[757px] relative p-0 blur">
                <div className="w-[513px] h-[757px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
              </div>
              <div className="shadows w-[513px] h-[754.41px] relative p-0">
                <div className="darker w-[513px] h-[139.75px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
                <div className="darker w-[513px] h-[139.75px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              </div>
            </div>
            <div className="playTime gap-[195.89654541015625px] absolute flex-row h-14 items-end border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-16 top-[636px] flex">
              <div className="timer w-[164px] h-[55px] relative opacity-100 p-0">
                <div className="rectangle3875 absolute top-[-1.35%] w-[56.83px] h-[55.74px] opacity-100 p-0 border-[1.26px] border-white left-[0%] right-[65.35%] bottom-[0%]" />
                <span className="0139 font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] absolute w-[59px] h-[31px] left-2/4 right-[14.02%] inset-y-[21.82%]">01:39</span>
                <div className="hourglassbottom w-[23.66px] h-[23.35px] absolute p-0">
                  <div className="boundingBox w-[23.66px] h-[23.35px] relative bg-white opacity-100 p-0" />
                  <svg width={14} height={18} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.8246 8.10192C7.88376 8.10192 8.75522 7.68967 9.43899 6.86515C10.1227 6.04062 10.4646 5.08076 10.4646 3.98557V1.0667H3.18458V3.98557C3.18458 5.08076 3.52646 6.04062 4.21022 6.86515C4.89399 7.68967 5.76545 8.10192 6.8246 8.10192ZM0.113281 17.6069V16.634H2.19871V13.7151C2.19871 12.5887 2.515 11.5731 3.14758 10.6681C3.78016 9.76311 4.62919 9.1572 5.69466 8.85034C4.62919 8.54349 3.78016 7.93757 3.14758 7.0326C2.515 6.12762 2.19871 5.11194 2.19871 3.98557V1.0667H0.113281V0.09375H13.5359V1.0667H11.4505V3.98557C11.4505 5.11194 11.1342 6.12762 10.5016 7.0326C9.86904 7.93757 9.02002 8.54349 7.95455 8.85034C9.02002 9.1572 9.86904 9.76311 10.5016 10.6681C11.1342 11.5731 11.4505 12.5887 11.4505 13.7151V16.634H13.5359V17.6069H0.113281Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="playButton w-[164.5px] h-[161px] absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
              <svg width={165} height={161} viewBox="0 0 165 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M163.503 80.5014C163.503 124.389 127.146 160.003 82.2514 160.003C37.3571 160.003 1 124.389 1 80.5014C1 36.6142 37.3571 1 82.2514 1C127.146 1 163.503 36.6142 163.503 80.5014Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth={2} />
              </svg>
              <div className="interactiveIcons absolute w-16 h-16 opacity-100 p-0 left-[33.63%] right-[27.46%] top-[30.43%] bottom-[29.81%]">
                <svg className="play" width={58} height={58} viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.6582 55.6673V2.33398L54.9915 29.0007L1.6582 55.6673Z" stroke="white" strokeWidth={2} />
                </svg>
              </div>
            </div>
          </div>
          <div className="frame482659 gap-4 flex-col w-[1344px] items-start opacity-100 p-0 flex">
            <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-full">Monitoring Progression</span>
            <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[1116px]">Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. Eu etiam quis odio tellus at. A felis tellus et neque ultrices. Gravida ultrices accumsan etiam aliquet massa mus in. Dictum tempor id at nunc pellentesque. Vitae id at risus pharetra tristique sit tristique tincidunt massa. A sit egestas accumsan nunc ipsum purus. Est rhoncus sagittis tincidunt tortor et semper sapien aliquam a. Accumsan varius dictum sapien varius. Quis eu magna in sed lectus eu. Ultricies ultrices nibh etiam molestie quam. <br />Adipiscing vel quam eu pharetra sed condimentum sagittis. Pulvinar in malesuada ut aliquam in euismod augue.Quam sit sed augue imperdiet vulputate pellentesque faucibus ac congue. Sagittis eu vitae donec </span>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "L" && sectionHead == "No" && bodyCopy == "No") && <>
    <div className="c26VideoPlayer gap-16 absolute flex-col w-[1440px] items-start bg-white opacity-100 px-12 py-16 left-[1383px] top-[1194px] flex">
      <div className="frame482661 gap-6 flex-col items-start opacity-100 p-0 flex">
        <div className="videoPlayers w-[1344px] h-[756px] relative overflow-hidden opacity-100 p-0">
          <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[1344px] h-[757px] absolute opacity-100 object-cover p-0 left-0 top-0" />
          <div className="overlays w-[513px] h-[757px] absolute p-0">
            <div className="w-[513px] h-[757px] relative p-0 blur">
              <div className="w-[513px] h-[757px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
            </div>
            <div className="shadows w-[513px] h-[754.41px] relative p-0">
              <div className="darker w-[513px] h-[139.75px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              <div className="darker w-[513px] h-[139.75px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
            </div>
          </div>
          <div className="playTime gap-[195.89654541015625px] absolute flex-row h-14 items-end border bg-[rgba(0,0,0,0.1)] opacity-100 p-0 border-white left-16 top-[636px] flex">
            <div className="timer w-[164px] h-[55px] relative opacity-100 p-0">
              <div className="rectangle3875 absolute top-[-1.35%] w-[56.83px] h-[55.74px] opacity-100 p-0 border-[1.26px] border-white left-[0%] right-[65.35%] bottom-[0%]" />
              <span className="0139 font-['Volta_Modern_Display'] text-[23px] font-medium text-white text-left tracking-[0px] absolute w-[59px] h-[31px] left-2/4 right-[14.02%] inset-y-[21.82%]">01:39</span>
              <div className="hourglassbottom w-[23.66px] h-[23.35px] absolute p-0">
                <div className="boundingBox w-[23.66px] h-[23.35px] relative bg-white opacity-100 p-0" />
                <svg width={14} height={18} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.8246 8.10192C7.88376 8.10192 8.75522 7.68967 9.43899 6.86515C10.1227 6.04062 10.4646 5.08076 10.4646 3.98557V1.0667H3.18458V3.98557C3.18458 5.08076 3.52646 6.04062 4.21022 6.86515C4.89399 7.68967 5.76545 8.10192 6.8246 8.10192ZM0.113281 17.6069V16.634H2.19871V13.7151C2.19871 12.5887 2.515 11.5731 3.14758 10.6681C3.78016 9.76311 4.62919 9.1572 5.69466 8.85034C4.62919 8.54349 3.78016 7.93757 3.14758 7.0326C2.515 6.12762 2.19871 5.11194 2.19871 3.98557V1.0667H0.113281V0.09375H13.5359V1.0667H11.4505V3.98557C11.4505 5.11194 11.1342 6.12762 10.5016 7.0326C9.86904 7.93757 9.02002 8.54349 7.95455 8.85034C9.02002 9.1572 9.86904 9.76311 10.5016 10.6681C11.1342 11.5731 11.4505 12.5887 11.4505 13.7151V16.634H13.5359V17.6069H0.113281Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="playButton w-[164.5px] h-[161px] absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
            <svg width={165} height={161} viewBox="0 0 165 161" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M163.503 80.5014C163.503 124.389 127.146 160.003 82.2514 160.003C37.3571 160.003 1 124.389 1 80.5014C1 36.6142 37.3571 1 82.2514 1C127.146 1 163.503 36.6142 163.503 80.5014Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth={2} />
            </svg>
            <div className="interactiveIcons absolute w-16 h-16 opacity-100 p-0 left-[33.63%] right-[27.46%] top-[30.43%] bottom-[29.81%]">
              <svg className="play" width={58} height={58} viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.6582 55.6673V2.33398L54.9915 29.0007L1.6582 55.6673Z" stroke="white" strokeWidth={2} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && sectionHead == "Yes" && bodyCopy == "No") && <>
    <div className="c26VideoPlayer gap-10 absolute flex-col w-[768px] items-start bg-white opacity-100 px-8 py-10 left-[3026px] top-[54px] flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[736px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame482554 gap-6 flex-col items-start w-full opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[35px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Monitoring Progression</span>
        <div className="videoPlayers w-[704px] h-[396.17px] relative overflow-hidden opacity-100 p-0">
          <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[703.7px] h-[396px] absolute opacity-100 object-cover p-0 left-0 top-0" />
          <div className="overlays w-[234.67px] h-[397px] absolute p-0">
            <div className="w-[234.67px] h-[396px] relative p-0 blur">
              <div className="w-[234.67px] h-[396px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
            </div>
            <div className="shadows w-[234.67px] h-[397px] relative p-0">
              <div className="darker w-[234.67px] h-[73.54px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              <div className="darker w-[234.67px] h-[73.54px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
            </div>
            <div className="playTime w-[93.71px] h-8 gap-[80.6771240234375px] relative bg-[rgba(0,0,0,0.1)] opacity-100 p-0">
              <span className="0139 font-['Volta_Modern_Display'] text-sm font-medium text-white text-center tracking-[0px] absolute w-[45.66px] h-[20.57px] left-[41.46%] right-[9.82%] top-[17.86%] bottom-[17.85%]"> 01:39</span>
              <div className="hourglassbottom w-[16.08px] h-[15.12px] absolute p-0">
                <div className="boundingBox w-[16.08px] h-[15.12px] relative bg-white opacity-100 p-0" />
                <svg width={10} height={12} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.0329 5.79328C5.75259 5.79328 6.34473 5.52642 6.80934 4.99268C7.27395 4.45894 7.50625 3.8376 7.50625 3.12865V1.23919H2.55956V3.12865C2.55956 3.8376 2.79186 4.45894 3.25647 4.99268C3.72108 5.52642 4.31322 5.79328 5.0329 5.79328ZM0.472656 11.9461V11.3163H1.88967V9.42685C1.88967 8.69772 2.10459 8.04025 2.53442 7.45443C2.96425 6.86861 3.54115 6.47639 4.26512 6.27775C3.54115 6.07912 2.96425 5.68689 2.53442 5.10108C2.10459 4.51526 1.88967 3.85779 1.88967 3.12865V1.23919H0.472656V0.609375H9.59315V1.23919H8.17614V3.12865C8.17614 3.85779 7.96122 4.51526 7.53139 5.10108C7.10156 5.68689 6.52466 6.07912 5.80069 6.27775C6.52466 6.47639 7.10156 6.86861 7.53139 7.45443C7.96122 8.04025 8.17614 8.69772 8.17614 9.42685V11.3163H9.59315V11.9461H0.472656Z" fill="white" />
                </svg>
              </div>
              <div className="icon w-[32.1px] h-[32.1px] absolute border opacity-100 p-0 border-white left-0 top-0" />
              <div className="time w-[63px] h-8 absolute border opacity-100 p-0 border-white left-[30.953125px] top-0" />
            </div>
          </div>
          <div className="playButton w-[81.88px] h-20 absolute opacity-100 p-0 left-8 top-8">
            <svg width={82} height={80} viewBox="0 0 82 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M81.125 40C81.125 61.6609 63.1489 79.25 40.9375 79.25C18.7261 79.25 0.75 61.6609 0.75 40C0.75 18.3391 18.7261 0.75 40.9375 0.75C63.1489 0.75 81.125 18.3391 81.125 40Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth="1.5" />
            </svg>
            <div className="interactiveIcons w-6 h-6 absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
              <svg className="play" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.19922 22V2L21.1992 12L1.19922 22Z" stroke="white" strokeWidth={2} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && sectionHead == "Yes" && bodyCopy == "Yes") && <>
    <div className="c26VideoPlayer gap-10 absolute flex-col w-[768px] items-start bg-white opacity-100 px-8 py-10 left-[3042px] top-[2182px] flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[736px] items-start opacity-100 p-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame482554 gap-12 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="videoPlayers w-[704px] h-[396.17px] relative overflow-hidden opacity-100 p-0">
          <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[703.7px] h-[396px] absolute opacity-100 object-cover p-0 left-0 top-0" />
          <div className="overlays w-[234.67px] h-[397px] absolute p-0">
            <div className="w-[234.67px] h-[396px] relative p-0 blur">
              <div className="w-[234.67px] h-[396px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
            </div>
            <div className="shadows w-[234.67px] h-[397px] relative p-0">
              <div className="darker w-[234.67px] h-[73.54px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              <div className="darker w-[234.67px] h-[73.54px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
            </div>
            <div className="playTime w-[93.71px] h-8 gap-[80.6771240234375px] relative bg-[rgba(0,0,0,0.1)] opacity-100 p-0">
              <span className="0139 font-['Volta_Modern_Display'] text-sm font-medium text-white text-center tracking-[0px] absolute w-[45.66px] h-[20.57px] left-[41.46%] right-[9.82%] top-[17.86%] bottom-[17.85%]"> 01:39</span>
              <div className="hourglassbottom w-[16.08px] h-[15.12px] absolute p-0">
                <div className="boundingBox w-[16.08px] h-[15.12px] relative bg-white opacity-100 p-0" />
                <svg width={10} height={12} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.0329 5.79328C5.75259 5.79328 6.34473 5.52642 6.80934 4.99268C7.27395 4.45894 7.50625 3.8376 7.50625 3.12865V1.23919H2.55956V3.12865C2.55956 3.8376 2.79186 4.45894 3.25647 4.99268C3.72108 5.52642 4.31322 5.79328 5.0329 5.79328ZM0.472656 11.9461V11.3163H1.88967V9.42685C1.88967 8.69772 2.10459 8.04025 2.53442 7.45443C2.96425 6.86861 3.54115 6.47639 4.26512 6.27775C3.54115 6.07912 2.96425 5.68689 2.53442 5.10108C2.10459 4.51526 1.88967 3.85779 1.88967 3.12865V1.23919H0.472656V0.609375H9.59315V1.23919H8.17614V3.12865C8.17614 3.85779 7.96122 4.51526 7.53139 5.10108C7.10156 5.68689 6.52466 6.07912 5.80069 6.27775C6.52466 6.47639 7.10156 6.86861 7.53139 7.45443C7.96122 8.04025 8.17614 8.69772 8.17614 9.42685V11.3163H9.59315V11.9461H0.472656Z" fill="white" />
                </svg>
              </div>
              <div className="icon w-[32.1px] h-[32.1px] absolute border opacity-100 p-0 border-white left-0 top-0" />
              <div className="time w-[63px] h-8 absolute border opacity-100 p-0 border-white left-[30.953125px] top-0" />
            </div>
          </div>
          <div className="playButton w-[81.88px] h-20 absolute opacity-100 p-0 left-8 top-8">
            <svg width={82} height={80} viewBox="0 0 82 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M81.125 40C81.125 61.6609 63.1489 79.25 40.9375 79.25C18.7261 79.25 0.75 61.6609 0.75 40C0.75 18.3391 18.7261 0.75 40.9375 0.75C63.1489 0.75 81.125 18.3391 81.125 40Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth="1.5" />
            </svg>
            <div className="interactiveIcons w-6 h-6 absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
              <svg className="play" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.19922 22V2L21.1992 12L1.19922 22Z" stroke="white" strokeWidth={2} />
              </svg>
            </div>
          </div>
        </div>
        <div className="content gap-4 flex-col w-[704px] items-start opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[38px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Monitoring Progression</span>
          <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-[646px]">Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. Eu etiam quis odio tellus at. A felis tellus et neque ultrices. Gravida ultrices accumsan etiam aliquet massa mus in. Dictum tempor id at nunc pellentesque. Vitae id at risus pharetra tristique sit tristique tincidunt massa. A sit egestas accumsan nunc ipsum purus. Est rhoncus sagittis tincidunt tortor et semper sapien aliquam a. Accumsan varius dictum sapien varius. Quis eu magna in sed lectus eu. Ultricies ultrices nibh etiam molestie quam. <br />Adipiscing vel quam eu pharetra sed condimentum sagittis. Pulvinar in malesuada ut aliquam in euismod augue.Quam sit sed augue imperdiet vulputate pellentesque faucibus ac congue. Sagittis eu vitae donec </span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && sectionHead == "No" && bodyCopy == "Yes") && <>
    <div className="c26VideoPlayer gap-10 absolute flex-col w-[768px] items-start bg-white opacity-100 px-8 py-10 left-[3042px] top-[3656px] flex">
      <div className="frame482554 gap-12 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="videoPlayers w-[704px] h-[396.17px] relative overflow-hidden opacity-100 p-0">
          <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[703.7px] h-[396px] absolute opacity-100 object-cover p-0 left-0 top-0" />
          <div className="overlays w-[234.67px] h-[397px] absolute p-0">
            <div className="w-[234.67px] h-[396px] relative p-0 blur">
              <div className="w-[234.67px] h-[396px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
            </div>
            <div className="shadows w-[234.67px] h-[397px] relative p-0">
              <div className="darker w-[234.67px] h-[73.54px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              <div className="darker w-[234.67px] h-[73.54px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
            </div>
            <div className="playTime w-[93.71px] h-8 gap-[80.6771240234375px] relative bg-[rgba(0,0,0,0.1)] opacity-100 p-0">
              <span className="0139 font-['Volta_Modern_Display'] text-sm font-medium text-white text-center tracking-[0px] absolute w-[45.66px] h-[20.57px] left-[41.46%] right-[9.82%] top-[17.86%] bottom-[17.85%]"> 01:39</span>
              <div className="hourglassbottom w-[16.08px] h-[15.12px] absolute p-0">
                <div className="boundingBox w-[16.08px] h-[15.12px] relative bg-white opacity-100 p-0" />
                <svg width={10} height={12} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.0329 5.79328C5.75259 5.79328 6.34473 5.52642 6.80934 4.99268C7.27395 4.45894 7.50625 3.8376 7.50625 3.12865V1.23919H2.55956V3.12865C2.55956 3.8376 2.79186 4.45894 3.25647 4.99268C3.72108 5.52642 4.31322 5.79328 5.0329 5.79328ZM0.472656 11.9461V11.3163H1.88967V9.42685C1.88967 8.69772 2.10459 8.04025 2.53442 7.45443C2.96425 6.86861 3.54115 6.47639 4.26512 6.27775C3.54115 6.07912 2.96425 5.68689 2.53442 5.10108C2.10459 4.51526 1.88967 3.85779 1.88967 3.12865V1.23919H0.472656V0.609375H9.59315V1.23919H8.17614V3.12865C8.17614 3.85779 7.96122 4.51526 7.53139 5.10108C7.10156 5.68689 6.52466 6.07912 5.80069 6.27775C6.52466 6.47639 7.10156 6.86861 7.53139 7.45443C7.96122 8.04025 8.17614 8.69772 8.17614 9.42685V11.3163H9.59315V11.9461H0.472656Z" fill="white" />
                </svg>
              </div>
              <div className="icon w-[32.1px] h-[32.1px] absolute border opacity-100 p-0 border-white left-0 top-0" />
              <div className="time w-[63px] h-8 absolute border opacity-100 p-0 border-white left-[30.953125px] top-0" />
            </div>
          </div>
          <div className="playButton w-[81.88px] h-20 absolute opacity-100 p-0 left-8 top-8">
            <svg width={82} height={80} viewBox="0 0 82 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M81.125 40C81.125 61.6609 63.1489 79.25 40.9375 79.25C18.7261 79.25 0.75 61.6609 0.75 40C0.75 18.3391 18.7261 0.75 40.9375 0.75C63.1489 0.75 81.125 18.3391 81.125 40Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth="1.5" />
            </svg>
            <div className="interactiveIcons w-6 h-6 absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
              <svg className="play" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.19922 22V2L21.1992 12L1.19922 22Z" stroke="white" strokeWidth={2} />
              </svg>
            </div>
          </div>
        </div>
        <div className="content gap-4 flex-col w-[704px] items-start opacity-100 p-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[38px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Monitoring Progression</span>
          <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-[646px]">Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. Eu etiam quis odio tellus at. A felis tellus et neque ultrices. Gravida ultrices accumsan etiam aliquet massa mus in. Dictum tempor id at nunc pellentesque. Vitae id at risus pharetra tristique sit tristique tincidunt massa. A sit egestas accumsan nunc ipsum purus. Est rhoncus sagittis tincidunt tortor et semper sapien aliquam a. Accumsan varius dictum sapien varius. Quis eu magna in sed lectus eu. Ultricies ultrices nibh etiam molestie quam. <br />Adipiscing vel quam eu pharetra sed condimentum sagittis. Pulvinar in malesuada ut aliquam in euismod augue.Quam sit sed augue imperdiet vulputate pellentesque faucibus ac congue. Sagittis eu vitae donec </span>
        </div>
      </div>
    </div>
  </>}
  {(size == "M" && sectionHead == "No" && bodyCopy == "No") && <>
    <div className="c26VideoPlayer gap-10 absolute flex-col w-[768px] items-start bg-white opacity-100 px-8 py-10 left-[3026px] top-[1194px] flex">
      <div className="frame482554 gap-6 flex-col items-start w-full opacity-100 p-0 flex">
        <div className="videoPlayers w-[704px] h-[396.17px] relative overflow-hidden opacity-100 p-0">
          <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[703.7px] h-[396px] absolute opacity-100 object-cover p-0 left-0 top-0" />
          <div className="overlays w-[234.67px] h-[397px] absolute p-0">
            <div className="w-[234.67px] h-[396px] relative p-0 blur">
              <div className="w-[234.67px] h-[396px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
            </div>
            <div className="shadows w-[234.67px] h-[397px] relative p-0">
              <div className="darker w-[234.67px] h-[73.54px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              <div className="darker w-[234.67px] h-[73.54px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
            </div>
            <div className="playTime w-[93.71px] h-8 gap-[80.6771240234375px] relative bg-[rgba(0,0,0,0.1)] opacity-100 p-0">
              <span className="0139 font-['Volta_Modern_Display'] text-sm font-medium text-white text-center tracking-[0px] absolute w-[45.66px] h-[20.57px] left-[41.46%] right-[9.82%] top-[17.86%] bottom-[17.85%]"> 01:39</span>
              <div className="hourglassbottom w-[16.08px] h-[15.12px] absolute p-0">
                <div className="boundingBox w-[16.08px] h-[15.12px] relative bg-white opacity-100 p-0" />
                <svg width={10} height={12} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.0329 5.79328C5.75259 5.79328 6.34473 5.52642 6.80934 4.99268C7.27395 4.45894 7.50625 3.8376 7.50625 3.12865V1.23919H2.55956V3.12865C2.55956 3.8376 2.79186 4.45894 3.25647 4.99268C3.72108 5.52642 4.31322 5.79328 5.0329 5.79328ZM0.472656 11.9461V11.3163H1.88967V9.42685C1.88967 8.69772 2.10459 8.04025 2.53442 7.45443C2.96425 6.86861 3.54115 6.47639 4.26512 6.27775C3.54115 6.07912 2.96425 5.68689 2.53442 5.10108C2.10459 4.51526 1.88967 3.85779 1.88967 3.12865V1.23919H0.472656V0.609375H9.59315V1.23919H8.17614V3.12865C8.17614 3.85779 7.96122 4.51526 7.53139 5.10108C7.10156 5.68689 6.52466 6.07912 5.80069 6.27775C6.52466 6.47639 7.10156 6.86861 7.53139 7.45443C7.96122 8.04025 8.17614 8.69772 8.17614 9.42685V11.3163H9.59315V11.9461H0.472656Z" fill="white" />
                </svg>
              </div>
              <div className="icon w-[32.1px] h-[32.1px] absolute border opacity-100 p-0 border-white left-0 top-0" />
              <div className="time w-[63px] h-8 absolute border opacity-100 p-0 border-white left-[30.953125px] top-0" />
            </div>
          </div>
          <div className="playButton w-[81.88px] h-20 absolute opacity-100 p-0 left-8 top-8">
            <svg width={82} height={80} viewBox="0 0 82 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M81.125 40C81.125 61.6609 63.1489 79.25 40.9375 79.25C18.7261 79.25 0.75 61.6609 0.75 40C0.75 18.3391 18.7261 0.75 40.9375 0.75C63.1489 0.75 81.125 18.3391 81.125 40Z" fill="black" fillOpacity="0.1" stroke="white" strokeWidth="1.5" />
            </svg>
            <div className="interactiveIcons w-6 h-6 absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
              <svg className="play" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.19922 22V2L21.1992 12L1.19922 22Z" stroke="white" strokeWidth={2} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && sectionHead == "Yes" && bodyCopy == "No") && <>
    <div className="c26VideoPlayer gap-10 absolute flex-col w-[375px] items-start overflow-hidden bg-white opacity-100 px-0 py-10 left-[3997px] top-[54px] flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[375px] items-start opacity-100 pl-4 pr-0 py-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame1052 gap-3 flex-col items-start opacity-100 p-0 flex">
        <div className="frame482415 gap-0 flex-row items-center w-full opacity-100 px-4 py-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[28px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[343px] flex-1 min-w-0">Monitoring Progression</span>
        </div>
        <div className="videoPlayers gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="video w-[375px] h-[210px] relative overflow-hidden opacity-100 p-0">
            <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[428.88px] h-[286.19px] absolute top-[-35.19921875px] left-[-1.078125px] opacity-100 object-cover p-0" />
            <div className="overlays w-[143px] h-[210px] absolute p-0">
              <div className="w-[143px] h-[210px] relative p-0 blur">
                <div className="w-[143px] h-[210px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
              </div>
              <div className="shadows w-[143px] h-[209.77px] relative p-0">
                <div className="darker w-[143px] h-[38.77px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
                <div className="darker w-[143px] h-[38.77px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              </div>
            </div>
            <div className="playButton w-[59.8px] h-[58.53px] absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
              <svg width={61} height={60} viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.9889 30.1864C59.9889 46.0625 46.836 58.9509 30.5882 58.9509C14.3405 58.9509 1.1875 46.0625 1.1875 30.1864C1.1875 14.3103 14.3405 1.42188 30.5882 1.42188C46.836 1.42188 59.9889 14.3103 59.9889 30.1864Z" fill="black" fillOpacity="0.1" stroke="white" />
              </svg>
              <div className="interactiveIcons w-[18px] h-[18px] absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
                <svg className="play" width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 17.5V2.5L16.5 10L1.5 17.5Z" stroke="white" strokeWidth={2} />
                </svg>
              </div>
            </div>
            <div className="playTime w-[82px] h-7 absolute gap-[80.6771240234375px] bg-[rgba(0,0,0,0.1)] opacity-100 p-0 left-4 top-[158px]">
              <span className="0139 font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-center tracking-[0px] absolute w-[39.95px] left-[41.46%] right-[9.82%] top-[17.86%] bottom-[14.29%]"> 01:39</span>
              <div className="hourglassbottom w-[14.07px] h-[13.23px] absolute p-0">
                <div className="boundingBox w-[14.07px] h-[13.23px] relative bg-white opacity-100 p-0" />
                <svg width={9} height={11} viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.02928 4.82107C4.659 4.82107 5.17713 4.58757 5.58366 4.12055C5.99019 3.65353 6.19346 3.10985 6.19346 2.48953V0.836249H1.8651V2.48953C1.8651 3.10985 2.06837 3.65353 2.4749 4.12055C2.88143 4.58757 3.39956 4.82107 4.02928 4.82107ZM0.0390625 10.2048V9.65373H1.27895V8.00045C1.27895 7.36246 1.467 6.78717 1.84311 6.27458C2.21921 5.76199 2.724 5.41879 3.35747 5.24499C2.724 5.07118 2.21921 4.72798 1.84311 4.2154C1.467 3.70281 1.27895 3.12752 1.27895 2.48953V0.836249H0.0390625V0.285156H8.0195V0.836249H6.77961V2.48953C6.77961 3.12752 6.59156 3.70281 6.21545 4.2154C5.83935 4.72798 5.33456 5.07118 4.70109 5.24499C5.33456 5.41879 5.83935 5.76199 6.21545 6.27458C6.59156 6.78717 6.77961 7.36246 6.77961 8.00045V9.65373H8.0195V10.2048H0.0390625Z" fill="white" />
                </svg>
              </div>
              <div className="icon w-7 h-7 absolute opacity-100 p-0 border-[0.5px] border-white left-0 top-0" />
              <div className="time w-[55px] h-7 absolute opacity-100 p-0 border-r-[0.5px] border-r-white border-y-[0.5px] border-y-white left-[27px] top-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && sectionHead == "Yes" && bodyCopy == "Yes") && <>
    <div className="c26VideoPlayer gap-10 absolute flex-col w-[375px] items-start overflow-hidden bg-white opacity-100 px-0 py-10 left-[4013px] top-[2182px] flex">
      <div className="sectionHeading gap-[-1px] flex-col w-[375px] items-start opacity-100 pl-4 pr-0 py-0 flex">
        <div className="frame1199 gap-2 flex-row items-start border opacity-100 px-[9px] py-[5px] border-black flex">
          <span className="sectionHeading font-['Volta_Modern_Display'] text-[17px] font-medium text-black text-left tracking-[0px]">Section heading</span>
        </div>
        <div className="1pxDivider w-full h-px relative overflow-hidden bg-[#212121] opacity-100 p-0" />
      </div>
      <div className="frame1052 gap-8 flex-col items-start opacity-100 p-0 flex">
        <div className="videoPlayers gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="video w-[375px] h-[210px] relative overflow-hidden opacity-100 p-0">
            <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[428.88px] h-[286.19px] absolute top-[-35.19921875px] left-[-1.078125px] opacity-100 object-cover p-0" />
            <div className="overlays w-[143px] h-[210px] absolute p-0">
              <div className="w-[143px] h-[210px] relative p-0 blur">
                <div className="w-[143px] h-[210px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
              </div>
              <div className="shadows w-[143px] h-[209.77px] relative p-0">
                <div className="darker w-[143px] h-[38.77px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
                <div className="darker w-[143px] h-[38.77px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              </div>
            </div>
            <div className="playButton w-[59.8px] h-[58.53px] absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
              <svg width={61} height={60} viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.9889 30.1864C59.9889 46.0625 46.836 58.9509 30.5882 58.9509C14.3405 58.9509 1.1875 46.0625 1.1875 30.1864C1.1875 14.3103 14.3405 1.42188 30.5882 1.42188C46.836 1.42188 59.9889 14.3103 59.9889 30.1864Z" fill="black" fillOpacity="0.1" stroke="white" />
              </svg>
              <div className="interactiveIcons w-[18px] h-[18px] absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
                <svg className="play" width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 17.5V2.5L16.5 10L1.5 17.5Z" stroke="white" strokeWidth={2} />
                </svg>
              </div>
            </div>
            <div className="playTime w-[82px] h-7 absolute gap-[80.6771240234375px] bg-[rgba(0,0,0,0.1)] opacity-100 p-0 left-4 top-[158px]">
              <span className="0139 font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-center tracking-[0px] absolute w-[39.95px] left-[41.46%] right-[9.82%] top-[17.86%] bottom-[14.29%]"> 01:39</span>
              <div className="hourglassbottom w-[14.07px] h-[13.23px] absolute p-0">
                <div className="boundingBox w-[14.07px] h-[13.23px] relative bg-white opacity-100 p-0" />
                <svg width={9} height={11} viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.02928 4.82107C4.659 4.82107 5.17713 4.58757 5.58366 4.12055C5.99019 3.65353 6.19346 3.10985 6.19346 2.48953V0.836249H1.8651V2.48953C1.8651 3.10985 2.06837 3.65353 2.4749 4.12055C2.88143 4.58757 3.39956 4.82107 4.02928 4.82107ZM0.0390625 10.2048V9.65373H1.27895V8.00045C1.27895 7.36246 1.467 6.78717 1.84311 6.27458C2.21921 5.76199 2.724 5.41879 3.35747 5.24499C2.724 5.07118 2.21921 4.72798 1.84311 4.2154C1.467 3.70281 1.27895 3.12752 1.27895 2.48953V0.836249H0.0390625V0.285156H8.0195V0.836249H6.77961V2.48953C6.77961 3.12752 6.59156 3.70281 6.21545 4.2154C5.83935 4.72798 5.33456 5.07118 4.70109 5.24499C5.33456 5.41879 5.83935 5.76199 6.21545 6.27458C6.59156 6.78717 6.77961 7.36246 6.77961 8.00045V9.65373H8.0195V10.2048H0.0390625Z" fill="white" />
                </svg>
              </div>
              <div className="icon w-7 h-7 absolute opacity-100 p-0 border-[0.5px] border-white left-0 top-0" />
              <div className="time w-[55px] h-7 absolute opacity-100 p-0 border-r-[0.5px] border-r-white border-y-[0.5px] border-y-white left-[27px] top-0" />
            </div>
          </div>
        </div>
        <div className="frame482675 gap-4 flex-col items-center w-full opacity-100 px-4 py-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[32px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Monitoring Progression</span>
          <span className="subcopy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. Eu etiam quis odio tellus at. A felis tellus et neque ultrices. Gravida ultrices accumsan etiam aliquet massa mus in. Dictum tempor id at nunc pellentesque. Vitae id at risus pharetra tristique sit tristique tincidunt massa. A sit egestas accumsan nunc ipsum purus. Est rhoncus sagittis tincidunt tortor et semper sapien aliquam a. Accumsan varius dictum sapien varius. Quis eu magna in sed lectus eu. Ultricies ultrices nibh etiam molestie quam. <br />Adipiscing vel quam eu pharetra sed condimentum sagittis. Pulvinar in malesuada ut aliquam in euismod augue.Quam sit sed augue imperdiet vulputate pellentesque faucibus ac congue. Sagittis eu vitae donec </span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && sectionHead == "No" && bodyCopy == "Yes") && <>
    <div className="c26VideoPlayer gap-10 absolute flex-col w-[375px] items-start overflow-hidden bg-white opacity-100 px-0 py-10 left-[4013px] top-[3656px] flex">
      <div className="frame1052 gap-8 flex-col items-start opacity-100 p-0 flex">
        <div className="videoPlayers gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="video w-[375px] h-[210px] relative overflow-hidden opacity-100 p-0">
            <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[428.88px] h-[286.19px] absolute top-[-35.19921875px] left-[-1.078125px] opacity-100 object-cover p-0" />
            <div className="overlays w-[143px] h-[210px] absolute p-0">
              <div className="w-[143px] h-[210px] relative p-0 blur">
                <div className="w-[143px] h-[210px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
              </div>
              <div className="shadows w-[143px] h-[209.77px] relative p-0">
                <div className="darker w-[143px] h-[38.77px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
                <div className="darker w-[143px] h-[38.77px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              </div>
            </div>
            <div className="playButton w-[59.8px] h-[58.53px] absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
              <svg width={61} height={60} viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.9889 30.1864C59.9889 46.0625 46.836 58.9509 30.5882 58.9509C14.3405 58.9509 1.1875 46.0625 1.1875 30.1864C1.1875 14.3103 14.3405 1.42188 30.5882 1.42188C46.836 1.42188 59.9889 14.3103 59.9889 30.1864Z" fill="black" fillOpacity="0.1" stroke="white" />
              </svg>
              <div className="interactiveIcons w-[18px] h-[18px] absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
                <svg className="play" width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 17.5V2.5L16.5 10L1.5 17.5Z" stroke="white" strokeWidth={2} />
                </svg>
              </div>
            </div>
            <div className="playTime w-[82px] h-7 absolute gap-[80.6771240234375px] bg-[rgba(0,0,0,0.1)] opacity-100 p-0 left-4 top-[158px]">
              <span className="0139 font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-center tracking-[0px] absolute w-[39.95px] left-[41.46%] right-[9.82%] top-[17.86%] bottom-[14.29%]"> 01:39</span>
              <div className="hourglassbottom w-[14.07px] h-[13.23px] absolute p-0">
                <div className="boundingBox w-[14.07px] h-[13.23px] relative bg-white opacity-100 p-0" />
                <svg width={9} height={11} viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.02928 4.82107C4.659 4.82107 5.17713 4.58757 5.58366 4.12055C5.99019 3.65353 6.19346 3.10985 6.19346 2.48953V0.836249H1.8651V2.48953C1.8651 3.10985 2.06837 3.65353 2.4749 4.12055C2.88143 4.58757 3.39956 4.82107 4.02928 4.82107ZM0.0390625 10.2048V9.65373H1.27895V8.00045C1.27895 7.36246 1.467 6.78717 1.84311 6.27458C2.21921 5.76199 2.724 5.41879 3.35747 5.24499C2.724 5.07118 2.21921 4.72798 1.84311 4.2154C1.467 3.70281 1.27895 3.12752 1.27895 2.48953V0.836249H0.0390625V0.285156H8.0195V0.836249H6.77961V2.48953C6.77961 3.12752 6.59156 3.70281 6.21545 4.2154C5.83935 4.72798 5.33456 5.07118 4.70109 5.24499C5.33456 5.41879 5.83935 5.76199 6.21545 6.27458C6.59156 6.78717 6.77961 7.36246 6.77961 8.00045V9.65373H8.0195V10.2048H0.0390625Z" fill="white" />
                </svg>
              </div>
              <div className="icon w-7 h-7 absolute opacity-100 p-0 border-[0.5px] border-white left-0 top-0" />
              <div className="time w-[55px] h-7 absolute opacity-100 p-0 border-r-[0.5px] border-r-white border-y-[0.5px] border-y-white left-[27px] top-0" />
            </div>
          </div>
        </div>
        <div className="frame482675 gap-4 flex-col items-center w-full opacity-100 px-4 py-0 flex">
          <span className="title font-['Volta_Modern_Display'] text-[32px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Monitoring Progression</span>
          <span className="subcopy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Tortor viverra sit tellus suscipit. Blandit viverra tincidunt eget lacinia. Orci viverra dui gravida dolor suspendisse tortor cras neque accumsan. Eu etiam quis odio tellus at. A felis tellus et neque ultrices. Gravida ultrices accumsan etiam aliquet massa mus in. Dictum tempor id at nunc pellentesque. Vitae id at risus pharetra tristique sit tristique tincidunt massa. A sit egestas accumsan nunc ipsum purus. Est rhoncus sagittis tincidunt tortor et semper sapien aliquam a. Accumsan varius dictum sapien varius. Quis eu magna in sed lectus eu. Ultricies ultrices nibh etiam molestie quam. <br />Adipiscing vel quam eu pharetra sed condimentum sagittis. Pulvinar in malesuada ut aliquam in euismod augue.Quam sit sed augue imperdiet vulputate pellentesque faucibus ac congue. Sagittis eu vitae donec </span>
        </div>
      </div>
    </div>
  </>}
  {(size == "S" && sectionHead == "No" && bodyCopy == "No") && <>
    <div className="c26VideoPlayer gap-10 absolute flex-col w-[375px] items-start overflow-hidden bg-white opacity-100 px-0 py-10 left-[3997px] top-[1194px] flex">
      <div className="frame1052 gap-3 flex-col items-start opacity-100 p-0 flex">
        <div className="videoPlayers gap-3 flex-col items-start opacity-100 p-0 flex">
          <div className="video w-[375px] h-[210px] relative overflow-hidden opacity-100 p-0">
            <img src="/images/video.png" onerror="this.src='http://svgur.com/i/x4x.svg'" className="video w-[428.88px] h-[286.19px] absolute top-[-35.19921875px] left-[-1.078125px] opacity-100 object-cover p-0" />
            <div className="overlays w-[143px] h-[210px] absolute p-0">
              <div className="w-[143px] h-[210px] relative p-0 blur">
                <div className="w-[143px] h-[210px] relative bg-[rgba(0,0,0,0.3)] opacity-100 p-0 blur" />
              </div>
              <div className="shadows w-[143px] h-[209.77px] relative p-0">
                <div className="darker w-[143px] h-[38.77px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
                <div className="darker w-[143px] h-[38.77px] relative bg-[linear-gradient(135deg,rgba(0,0,0,0),#000000)] opacity-[0.699999988079071] p-0 shadow" />
              </div>
            </div>
            <div className="playButton w-[59.8px] h-[58.53px] absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
              <svg width={61} height={60} viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.9889 30.1864C59.9889 46.0625 46.836 58.9509 30.5882 58.9509C14.3405 58.9509 1.1875 46.0625 1.1875 30.1864C1.1875 14.3103 14.3405 1.42188 30.5882 1.42188C46.836 1.42188 59.9889 14.3103 59.9889 30.1864Z" fill="black" fillOpacity="0.1" stroke="white" />
              </svg>
              <div className="interactiveIcons w-[18px] h-[18px] absolute -translate-x-2/4 opacity-100 p-0 left-2/4 top-2/4">
                <svg className="play" width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 17.5V2.5L16.5 10L1.5 17.5Z" stroke="white" strokeWidth={2} />
                </svg>
              </div>
            </div>
            <div className="playTime w-[82px] h-7 absolute gap-[80.6771240234375px] bg-[rgba(0,0,0,0.1)] opacity-100 p-0 left-4 top-[158px]">
              <span className="0139 font-['Volta_Modern_Display'] text-[15px] font-medium text-white text-center tracking-[0px] absolute w-[39.95px] left-[41.46%] right-[9.82%] top-[17.86%] bottom-[14.29%]"> 01:39</span>
              <div className="hourglassbottom w-[14.07px] h-[13.23px] absolute p-0">
                <div className="boundingBox w-[14.07px] h-[13.23px] relative bg-white opacity-100 p-0" />
                <svg width={9} height={11} viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.02928 4.82107C4.659 4.82107 5.17713 4.58757 5.58366 4.12055C5.99019 3.65353 6.19346 3.10985 6.19346 2.48953V0.836249H1.8651V2.48953C1.8651 3.10985 2.06837 3.65353 2.4749 4.12055C2.88143 4.58757 3.39956 4.82107 4.02928 4.82107ZM0.0390625 10.2048V9.65373H1.27895V8.00045C1.27895 7.36246 1.467 6.78717 1.84311 6.27458C2.21921 5.76199 2.724 5.41879 3.35747 5.24499C2.724 5.07118 2.21921 4.72798 1.84311 4.2154C1.467 3.70281 1.27895 3.12752 1.27895 2.48953V0.836249H0.0390625V0.285156H8.0195V0.836249H6.77961V2.48953C6.77961 3.12752 6.59156 3.70281 6.21545 4.2154C5.83935 4.72798 5.33456 5.07118 4.70109 5.24499C5.33456 5.41879 5.83935 5.76199 6.21545 6.27458C6.59156 6.78717 6.77961 7.36246 6.77961 8.00045V9.65373H8.0195V10.2048H0.0390625Z" fill="white" />
                </svg>
              </div>
              <div className="icon w-7 h-7 absolute opacity-100 p-0 border-[0.5px] border-white left-0 top-0" />
              <div className="time w-[55px] h-7 absolute opacity-100 p-0 border-r-[0.5px] border-r-white border-y-[0.5px] border-y-white left-[27px] top-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>}
</>
  );
}