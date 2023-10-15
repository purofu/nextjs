import React from 'react';

export function Box(props){
  return (
      <div className="box gap-0 flex-row w-[480px] h-[200px] items-start opacity-100 p-0 flex">
  <div className="buttonProperties gap-0 flex-row h-full items-start flex-1 min-w-0 opacity-100 p-0 flex">
    <div className="secondaryBlue gap-2 flex-col h-full justify-between items-center flex-1 min-w-0 border rounded bg-[#fbfbfb] opacity-100 p-0 border-[#9e9e9e] flex">
      <div className="contentContainer gap-2 flex-row h-10 justify-between items-center w-full opacity-100 px-4 py-0 flex">
        <span className="buttonLabel font-['Volta_Modern_Display'] text-[11px] font-semibold text-[#616161] text-left tracking-[0px]">DocCheck iframe</span>
      </div>
    </div>
  </div>
</div>
  );
}