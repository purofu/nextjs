import React from 'react';

export function SquareCTA(props){
	const {
    size = "Small",
    state = "Default",
    destination = "Internal"
  } = props;
  return (
      <>
  {(size == "Small" && state == "Default" && destination == "Internal") && <>
    <div className="squareCTA w-20 h-20 absolute gap-[15.08302116394043px] bg-[#0460a9] opacity-100 p-0 left-2 top-4">
      <svg className="interactiveIcons" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.86667 5.33325L21.3333 20.7999L21.3333 9.33325L24 9.33325L24 25.3333L8 25.3333L8 22.6666L19.4667 22.6666L4 7.19992L5.86667 5.33325Z" fill="white" />
      </svg>
    </div>
  </>}
  {(size == "Small" && state == "Default" && destination == "External") && <>
    <div className="squareCTA w-20 h-20 absolute gap-[15.08302116394043px] bg-[#0460a9] opacity-100 p-0 left-[798px] top-4">
      <svg className="interactiveIcons" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66699 23.4666L22.1337 7.99992L10.667 7.99992L10.667 5.33325L26.667 5.33325L26.667 21.3333L24.0003 21.3333L24.0003 9.86659L8.53366 25.3333L6.66699 23.4666Z" fill="white" />
      </svg>
    </div>
  </>}
  {(size == "Small" && state == "Hover" && destination == "Internal") && <>
    <div className="squareCTA w-20 h-20 absolute gap-[15.08302116394043px] bg-[#023054] opacity-100 p-0 left-[331px] top-4">
      <svg className="interactiveIcons" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.86667 5.33325L21.3333 20.7999L21.3333 9.33325L24 9.33325L24 25.3333L8 25.3333L8 22.6666L19.4667 22.6666L4 7.19992L5.86667 5.33325Z" fill="white" />
      </svg>
    </div>
  </>}
  {(size == "Small" && state == "Hover" && destination == "External") && <>
    <div className="squareCTA w-20 h-20 absolute gap-[15.08302116394043px] bg-[#023054] opacity-100 p-0 left-[1121px] top-4">
      <svg className="interactiveIcons" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66699 23.4666L22.1337 7.99992L10.667 7.99992L10.667 5.33325L26.667 5.33325L26.667 21.3333L24.0003 21.3333L24.0003 9.86659L8.53366 25.3333L6.66699 23.4666Z" fill="white" />
      </svg>
    </div>
  </>}
  {(size == "Large" && state == "Default" && destination == "Internal") && <>
    <div className="squareCTA w-[120px] h-[120px] absolute gap-[22.62453269958496px] bg-[#273e54] opacity-100 p-0 left-2 top-[137px]">
      <svg className="interactiveIcons" width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.73408 8.34748L31.4297 31.0431L31.4297 14.2171L35.3428 14.2171L35.3428 37.6953L11.8645 37.6953L11.8645 33.7823L28.6906 33.7823L5.99495 11.0866L8.73408 8.34748Z" fill="white" />
      </svg>
    </div>
  </>}
  {(size == "Large" && state == "Default" && destination == "External") && <>
    <div className="squareCTA w-[120px] h-[120px] absolute gap-[22.62453269958496px] bg-[#273e54] opacity-100 p-0 left-[798px] top-[137px]">
      <svg className="interactiveIcons" width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4531 36.6375L34.5594 12.5313L16.6875 12.5313L16.6875 8.375L41.625 8.375L41.625 33.3125L37.4688 33.3125L37.4688 15.4406L13.3625 39.5469L10.4531 36.6375Z" fill="white" />
      </svg>
    </div>
  </>}
  {(size == "Large" && state == "Hover" && destination == "Internal") && <>
    <div className="squareCTA w-[120px] h-[120px] absolute gap-[22.62453269958496px] bg-[#0d2741] opacity-100 p-0 left-[329px] top-[137px]">
      <svg className="interactiveIcons" width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.73408 8.34748L31.4297 31.0431L31.4297 14.2171L35.3428 14.2171L35.3428 37.6953L11.8645 37.6953L11.8645 33.7823L28.6906 33.7823L5.99495 11.0866L8.73408 8.34748Z" fill="white" />
      </svg>
    </div>
  </>}
  {(size == "Large" && state == "Hover" && destination == "External") && <>
    <div className="squareCTA w-[120px] h-[120px] absolute gap-[22.62453269958496px] bg-[#0d2741] opacity-100 p-0 left-[1119px] top-[137px]">
      <svg className="interactiveIcons" width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4531 36.6375L34.5594 12.5313L16.6875 12.5313L16.6875 8.375L41.625 8.375L41.625 33.3125L37.4688 33.3125L37.4688 15.4406L13.3625 39.5469L10.4531 36.6375Z" fill="white" />
      </svg>
    </div>
  </>}
</>
  );
}