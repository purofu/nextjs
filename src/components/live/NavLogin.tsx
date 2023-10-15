import React from 'react';

export function NavLogin(props){
	const {
    state = "default"
  } = props;
  return (
      <>
  {(state == "default") && <>
    <svg className="navLogin" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={14} cy={14} r={14} transform="rotate(-180 14 14)" fill="#023054" />
      <path d="M14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.10051C21.274 1.475 17.713 -8.99315e-07 14 -1.22392e-06L14 14L14 28Z" fill="#A9B4BF" />
    </svg>
  </>}
  {(state == "hover") && <>
    <svg className="navLogin" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={14} cy={14} r={14} transform="rotate(-180 14 14)" fill="#00223D" />
      <path d="M14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.10051C21.274 1.475 17.713 -8.99315e-07 14 -1.22392e-06L14 14L14 28Z" fill="#516476" />
    </svg>
  </>}
</>
  );
}