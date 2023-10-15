import React from 'react';

export function FormFields(props){
	const {
    inputText = "Yes",
    state = "Default",
    dropdown = "Yes"
  } = props;
  return (
      <>
  {(inputText == "No" && state == "Default" && dropdown == "Yes") && <>
    <div className="formFields gap-6 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[383px] top-4 flex">
      <div className="fieldProperties gap-px flex-col h-[59px] items-start w-full flex-1 min-h-0 opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative flex-1 min-h-0 opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344.5 5V47H345.5V5H344.5ZM341 50.5H5V51.5H341V50.5ZM1.5 47V5H0.5V47H1.5ZM5 1.5H12.679V0.5H5V1.5ZM332.415 1.5H341V0.5H332.415V1.5ZM5 50.5C3.067 50.5 1.5 48.933 1.5 47H0.5C0.5 49.4853 2.51472 51.5 5 51.5V50.5ZM344.5 47C344.5 48.933 342.933 50.5 341 50.5V51.5C343.485 51.5 345.5 49.4853 345.5 47H344.5ZM345.5 5C345.5 2.51471 343.485 0.5 341 0.5V1.5C342.933 1.5 344.5 3.06701 344.5 5H345.5ZM1.5 5C1.5 3.067 3.067 1.5 5 1.5V0.5C2.51472 0.5 0.5 2.51472 0.5 5H1.5Z" fill="#212121" />
          </svg>
          <svg className="rightIcon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0008 18.4143L3.22266 9.63614L4.63687 8.22192L12.0059 15.5808L19.2937 8.29299L20.7079 9.70721L12.0008 18.4143Z" fill="black" />
          </svg>
          <div className="input gap-1.5 absolute flex-row items-center opacity-100 p-0 left-[19px] top-[22px] flex">
            <span className="inputText" />
          </div>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#212121" />
            </svg>
            <div className="labelText gap-0.5 flex-row h-[18px] items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px]">Profession *</span>
            </div>
            <svg width={257} height={2} viewBox="0 0 257 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H257" stroke="#212121" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(inputText == "No" && dropdown == "No" && state == "Default") && <>
    <div className="formFields gap-6 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[383px] top-[563px] flex">
      <div className="fieldProperties gap-px flex-col h-[59px] items-start w-full flex-1 min-h-0 opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative flex-1 min-h-0 opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344.5 5V47H345.5V5H344.5ZM341 50.5H5V51.5H341V50.5ZM1.5 47V5H0.5V47H1.5ZM5 1.5H12.679V0.5H5V1.5ZM332.415 1.5H341V0.5H332.415V1.5ZM5 50.5C3.067 50.5 1.5 48.933 1.5 47H0.5C0.5 49.4853 2.51472 51.5 5 51.5V50.5ZM344.5 47C344.5 48.933 342.933 50.5 341 50.5V51.5C343.485 51.5 345.5 49.4853 345.5 47H344.5ZM345.5 5C345.5 2.51471 343.485 0.5 341 0.5V1.5C342.933 1.5 344.5 3.06701 344.5 5H345.5ZM1.5 5C1.5 3.067 3.067 1.5 5 1.5V0.5C2.51472 0.5 0.5 2.51472 0.5 5H1.5Z" fill="#212121" />
          </svg>
          <div className="input gap-1.5 absolute flex-row items-center opacity-100 p-0 left-[19px] top-[22px] flex">
            <span className="inputText" />
          </div>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#212121" />
            </svg>
            <div className="labelText gap-0.5 flex-row h-[18px] items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-[11px] font-medium text-[#212121] text-left tracking-[0px]">Profession *</span>
            </div>
            <svg width={257} height={2} viewBox="0 0 257 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H257" stroke="#212121" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(dropdown == "Yes" && state == "Error" && inputText == "Yes") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] items-start opacity-100 p-0 left-[15px] top-[367px] flex">
      <div className="fieldProperties gap-px flex-col items-start w-full opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344 5V47H346V5H344ZM341 50H5V52H341V50ZM2 47V5H0V47H2ZM5 2H12.679V0H5V2ZM332.415 2H341V0H332.415V2ZM5 50C3.34315 50 2 48.6569 2 47H0C0 49.7614 2.23858 52 5 52V50ZM344 47C344 48.6569 342.657 50 341 50V52C343.761 52 346 49.7614 346 47H344ZM346 5C346 2.23857 343.761 0 341 0V2C342.657 2 344 3.34316 344 5H346ZM2 5C2 3.34315 3.34315 2 5 2V0C2.23858 0 0 2.23858 0 5H2Z" fill="#D32F2F" />
          </svg>
          <svg className="rightIcon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 18.4143L3.22168 9.63614L4.63589 8.22192L12.005 15.5808L19.2927 8.29299L20.707 9.70721L11.9999 18.4143Z" fill="black" fillOpacity="0.87" />
          </svg>
          <div className="input gap-1.5 absolute flex-row items-center opacity-100 p-0 left-[19px] top-[22px] flex">
            <span className="inputText font-['Volta_Modern_Display'] text-base font-medium text-[rgba(0,0,0,0.87)] text-left tracking-[0px]">Input Text</span>
          </div>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#D32F2F" strokeWidth={2} />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#d32f2f] text-left tracking-[0.25px]">Error Label</span>
            </div>
            <svg width={254} height={2} viewBox="0 0 254 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H254" stroke="#D32F2F" strokeWidth={2} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(inputText == "Yes" && state == "Error + assist" && dropdown == "Yes") && <>
    <div className="formFields gap-2 absolute flex-col w-[346px] items-start opacity-100 p-0 left-[15px] top-[454px] flex">
      <div className="fieldProperties gap-px flex-col items-start w-full opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344 5V47H346V5H344ZM341 50H5V52H341V50ZM2 47V5H0V47H2ZM5 2H12.679V0H5V2ZM332.415 2H341V0H332.415V2ZM5 50C3.34315 50 2 48.6569 2 47H0C0 49.7614 2.23858 52 5 52V50ZM344 47C344 48.6569 342.657 50 341 50V52C343.761 52 346 49.7614 346 47H344ZM346 5C346 2.23857 343.761 0 341 0V2C342.657 2 344 3.34316 344 5H346ZM2 5C2 3.34315 3.34315 2 5 2V0C2.23858 0 0 2.23858 0 5H2Z" fill="#D32F2F" />
          </svg>
          <svg className="rightIcon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 18.4143L3.22168 9.63614L4.63589 8.22192L12.005 15.5808L19.2927 8.29299L20.707 9.70721L11.9999 18.4143Z" fill="black" fillOpacity="0.87" />
          </svg>
          <div className="input gap-1.5 absolute flex-row items-center opacity-100 p-0 left-[19px] top-[22px] flex">
            <span className="inputText font-['Volta_Modern_Display'] text-base font-medium text-[rgba(0,0,0,0.87)] text-left tracking-[0px]">Input Text</span>
          </div>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#D32F2F" strokeWidth={2} />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#d32f2f] text-left tracking-[0.25px]">Error Label</span>
            </div>
            <svg width={254} height={2} viewBox="0 0 254 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H254" stroke="#D32F2F" strokeWidth={2} />
            </svg>
          </div>
        </div>
      </div>
      <div className="assistiveText gap-0 flex-row items-start opacity-100 p-0 flex">
        <span className="assistiveText font-['Volta_Modern_Display'] text-xs font-medium text-[#d32f2f] text-left tracking-[0px]">Assistive</span>
      </div>
    </div>
  </>}
  {(inputText == "Yes" && state == "Error" && dropdown == "No") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[15px] top-[918px] flex">
      <div className="fieldProperties gap-px flex-col h-[59px] items-start w-full flex-1 min-h-0 opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative flex-1 min-h-0 opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344 5V47H346V5H344ZM341 50H5V52H341V50ZM2 47V5H0V47H2ZM5 2H12.679V0H5V2ZM332.415 2H341V0H332.415V2ZM5 50C3.34315 50 2 48.6569 2 47H0C0 49.7614 2.23858 52 5 52V50ZM344 47C344 48.6569 342.657 50 341 50V52C343.761 52 346 49.7614 346 47H344ZM346 5C346 2.23857 343.761 0 341 0V2C342.657 2 344 3.34316 344 5H346ZM2 5C2 3.34315 3.34315 2 5 2V0C2.23858 0 0 2.23858 0 5H2Z" fill="#D32F2F" />
          </svg>
          <div className="input gap-1.5 absolute flex-row items-center opacity-100 p-0 left-[19px] top-[22px] flex">
            <span className="inputText font-['Volta_Modern_Display'] text-base font-medium text-[rgba(0,0,0,0.87)] text-left tracking-[0px]">Input Text</span>
          </div>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#D32F2F" strokeWidth={2} />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#d32f2f] text-left tracking-[0.25px]">Error Label</span>
            </div>
            <svg width={254} height={2} viewBox="0 0 254 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H254" stroke="#D32F2F" strokeWidth={2} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(inputText == "Yes" && state == "Error + assist" && dropdown == "No") && <>
    <div className="formFields gap-2 absolute flex-col w-[346px] h-[81px] items-start opacity-100 p-0 left-[15px] top-[1005px] flex">
      <div className="fieldProperties gap-px flex-col h-[59px] items-start w-full flex-1 min-h-0 opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative flex-1 min-h-0 opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344 5V47H346V5H344ZM341 50H5V52H341V50ZM2 47V5H0V47H2ZM5 2H12.679V0H5V2ZM332.415 2H341V0H332.415V2ZM5 50C3.34315 50 2 48.6569 2 47H0C0 49.7614 2.23858 52 5 52V50ZM344 47C344 48.6569 342.657 50 341 50V52C343.761 52 346 49.7614 346 47H344ZM346 5C346 2.23857 343.761 0 341 0V2C342.657 2 344 3.34316 344 5H346ZM2 5C2 3.34315 3.34315 2 5 2V0C2.23858 0 0 2.23858 0 5H2Z" fill="#D32F2F" />
          </svg>
          <div className="input gap-1.5 absolute flex-row items-center opacity-100 p-0 left-[19px] top-[22px] flex">
            <span className="inputText font-['Volta_Modern_Display'] text-base font-medium text-[rgba(0,0,0,0.87)] text-left tracking-[0px]">Input Text</span>
          </div>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#D32F2F" strokeWidth={2} />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#d32f2f] text-left tracking-[0.25px]">Error Label</span>
            </div>
            <svg width={254} height={2} viewBox="0 0 254 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H254" stroke="#D32F2F" strokeWidth={2} />
            </svg>
          </div>
        </div>
      </div>
      <div className="assistiveText gap-0 flex-row items-start opacity-100 p-0 flex">
        <span className="assistiveText font-['Volta_Modern_Display'] text-xs font-medium text-[#d32f2f] text-left tracking-[0px]">Assistive</span>
      </div>
    </div>
  </>}
  {(dropdown == "Yes" && inputText == "No" && state == "Error") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] items-start opacity-100 p-0 left-[383px] top-[367px] flex">
      <div className="fieldProperties gap-px flex-col items-start w-full opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344 5V47H346V5H344ZM341 50H5V52H341V50ZM2 47V5H0V47H2ZM5 2H12.679V0H5V2ZM332.415 2H341V0H332.415V2ZM5 50C3.34315 50 2 48.6569 2 47H0C0 49.7614 2.23858 52 5 52V50ZM344 47C344 48.6569 342.657 50 341 50V52C343.761 52 346 49.7614 346 47H344ZM346 5C346 2.23857 343.761 0 341 0V2C342.657 2 344 3.34316 344 5H346ZM2 5C2 3.34315 3.34315 2 5 2V0C2.23858 0 0 2.23858 0 5H2Z" fill="#D32F2F" />
          </svg>
          <svg className="rightIcon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0008 18.4143L3.22266 9.63614L4.63687 8.22192L12.0059 15.5808L19.2937 8.29299L20.7079 9.70721L12.0008 18.4143Z" fill="black" fillOpacity="0.87" />
          </svg>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#D32F2F" strokeWidth={2} />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#d32f2f] text-left tracking-[0.25px]">Error Label</span>
            </div>
            <svg width={254} height={2} viewBox="0 0 254 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H254" stroke="#D32F2F" strokeWidth={2} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(dropdown == "No" && state == "Error" && inputText == "No") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[383px] top-[914px] flex">
      <div className="fieldProperties gap-px flex-col h-[59px] items-start w-full flex-1 min-h-0 opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative flex-1 min-h-0 opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344 5V47H346V5H344ZM341 50H5V52H341V50ZM2 47V5H0V47H2ZM5 2H12.679V0H5V2ZM332.415 2H341V0H332.415V2ZM5 50C3.34315 50 2 48.6569 2 47H0C0 49.7614 2.23858 52 5 52V50ZM344 47C344 48.6569 342.657 50 341 50V52C343.761 52 346 49.7614 346 47H344ZM346 5C346 2.23857 343.761 0 341 0V2C342.657 2 344 3.34316 344 5H346ZM2 5C2 3.34315 3.34315 2 5 2V0C2.23858 0 0 2.23858 0 5H2Z" fill="#D32F2F" />
          </svg>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#D32F2F" strokeWidth={2} />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#d32f2f] text-left tracking-[0.25px]">Error Label</span>
            </div>
            <svg width={254} height={2} viewBox="0 0 254 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H254" stroke="#D32F2F" strokeWidth={2} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(dropdown == "Yes" && state == "Disabled" && inputText == "Yes") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[15px] top-[279px] flex">
      <div className="fieldProperties gap-px flex-col items-start w-full opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344.5 5V47H345.5V5H344.5ZM341 50.5H5V51.5H341V50.5ZM1.5 47V5H0.5V47H1.5ZM5 1.5H12.679V0.5H5V1.5ZM332.415 1.5H341V0.5H332.415V1.5ZM5 50.5C3.067 50.5 1.5 48.933 1.5 47H0.5C0.5 49.4853 2.51472 51.5 5 51.5V50.5ZM344.5 47C344.5 48.933 342.933 50.5 341 50.5V51.5C343.485 51.5 345.5 49.4853 345.5 47H344.5ZM345.5 5C345.5 2.51471 343.485 0.5 341 0.5V1.5C342.933 1.5 344.5 3.06701 344.5 5H345.5ZM1.5 5C1.5 3.067 3.067 1.5 5 1.5V0.5C2.51472 0.5 0.5 2.51472 0.5 5H1.5Z" fill="#757575" />
          </svg>
          <svg className="rightIcon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 18.4143L3.22168 9.63614L4.63589 8.22192L12.005 15.5808L19.2927 8.29299L20.707 9.70721L11.9999 18.4143Z" fill="#757575" />
          </svg>
          <div className="input gap-1.5 absolute flex-row items-center opacity-100 p-0 left-[19px] top-[22px] flex">
            <span className="inputText font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Input Text</span>
          </div>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#757575" />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#757575] text-left tracking-[0.25px]">Disabled Label</span>
            </div>
            <svg width={235} height={2} viewBox="0 0 235 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H235" stroke="#757575" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(dropdown == "Yes" && inputText == "No" && state == "Error + assist") && <>
    <div className="formFields gap-2 absolute flex-col w-[346px] items-start opacity-100 p-0 left-[383px] top-[454px] flex">
      <div className="fieldProperties gap-px flex-col items-start w-full opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344 5V47H346V5H344ZM341 50H5V52H341V50ZM2 47V5H0V47H2ZM5 2H12.679V0H5V2ZM332.415 2H341V0H332.415V2ZM5 50C3.34315 50 2 48.6569 2 47H0C0 49.7614 2.23858 52 5 52V50ZM344 47C344 48.6569 342.657 50 341 50V52C343.761 52 346 49.7614 346 47H344ZM346 5C346 2.23857 343.761 0 341 0V2C342.657 2 344 3.34316 344 5H346ZM2 5C2 3.34315 3.34315 2 5 2V0C2.23858 0 0 2.23858 0 5H2Z" fill="#D32F2F" />
          </svg>
          <svg className="rightIcon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0008 18.4143L3.22266 9.63614L4.63687 8.22192L12.0059 15.5808L19.2937 8.29299L20.7079 9.70721L12.0008 18.4143Z" fill="black" fillOpacity="0.87" />
          </svg>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#D32F2F" strokeWidth={2} />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#d32f2f] text-left tracking-[0.25px]">Error Label</span>
            </div>
            <svg width={254} height={2} viewBox="0 0 254 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H254" stroke="#D32F2F" strokeWidth={2} />
            </svg>
          </div>
        </div>
      </div>
      <div className="assistiveText gap-0 flex-row items-start opacity-100 p-0 flex">
        <span className="assistiveText font-['Volta_Modern_Display'] text-xs font-medium text-[#d32f2f] text-left tracking-[0px]">Assistive</span>
      </div>
    </div>
  </>}
  {(dropdown == "No" && state == "Error + assist" && inputText == "No") && <>
    <div className="formFields gap-2 absolute flex-col w-[346px] h-[81px] items-start opacity-100 p-0 left-[383px] top-[1001px] flex">
      <div className="fieldProperties gap-px flex-col h-[59px] items-start w-full flex-1 min-h-0 opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative flex-1 min-h-0 opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344 5V47H346V5H344ZM341 50H5V52H341V50ZM2 47V5H0V47H2ZM5 2H12.679V0H5V2ZM332.415 2H341V0H332.415V2ZM5 50C3.34315 50 2 48.6569 2 47H0C0 49.7614 2.23858 52 5 52V50ZM344 47C344 48.6569 342.657 50 341 50V52C343.761 52 346 49.7614 346 47H344ZM346 5C346 2.23857 343.761 0 341 0V2C342.657 2 344 3.34316 344 5H346ZM2 5C2 3.34315 3.34315 2 5 2V0C2.23858 0 0 2.23858 0 5H2Z" fill="#D32F2F" />
          </svg>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#D32F2F" strokeWidth={2} />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#d32f2f] text-left tracking-[0.25px]">Error Label</span>
            </div>
            <svg width={254} height={2} viewBox="0 0 254 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H254" stroke="#D32F2F" strokeWidth={2} />
            </svg>
          </div>
        </div>
      </div>
      <div className="assistiveText gap-0 flex-row items-start opacity-100 p-0 flex">
        <span className="assistiveText font-['Volta_Modern_Display'] text-xs font-medium text-[#d32f2f] text-left tracking-[0px]">Assistive</span>
      </div>
    </div>
  </>}
  {(dropdown == "Yes" && state == "Selected" && inputText == "Yes") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[15px] top-[191px] flex">
      <div className="fieldProperties gap-px flex-col items-start w-full opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344 5V47H346V5H344ZM341 50H5V52H341V50ZM2 47V5H0V47H2ZM5 2H12.679V0H5V2ZM332.415 2H341V0H332.415V2ZM5 50C3.34315 50 2 48.6569 2 47H0C0 49.7614 2.23858 52 5 52V50ZM344 47C344 48.6569 342.657 50 341 50V52C343.761 52 346 49.7614 346 47H344ZM346 5C346 2.23857 343.761 0 341 0V2C342.657 2 344 3.34316 344 5H346ZM2 5C2 3.34315 3.34315 2 5 2V0C2.23858 0 0 2.23858 0 5H2Z" fill="#0460A9" />
          </svg>
          <svg className="rightIcon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 18.4143L3.22168 9.63614L4.63589 8.22192L12.005 15.5808L19.2927 8.29299L20.707 9.70721L11.9999 18.4143Z" fill="black" fillOpacity="0.87" />
          </svg>
          <div className="input gap-1.5 absolute flex-row items-center opacity-100 p-0 left-[19px] top-[22px] flex">
            <span className="inputText font-['Volta_Modern_Display'] text-base font-medium text-[rgba(0,0,0,0.87)] text-left tracking-[0px]">Input Text</span>
          </div>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#0460A9" strokeWidth={2} />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#0460a9] text-left tracking-[0.25px]">Selected Label</span>
            </div>
            <svg width={234} height={2} viewBox="0 0 234 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H234" stroke="#0460A9" strokeWidth={2} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(inputText == "Yes" && state == "Disabled" && dropdown == "No") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[15px] top-[830px] flex">
      <div className="fieldProperties gap-px flex-col items-start w-full opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344.5 5V47H345.5V5H344.5ZM341 50.5H5V51.5H341V50.5ZM1.5 47V5H0.5V47H1.5ZM5 1.5H12.679V0.5H5V1.5ZM332.415 1.5H341V0.5H332.415V1.5ZM5 50.5C3.067 50.5 1.5 48.933 1.5 47H0.5C0.5 49.4853 2.51472 51.5 5 51.5V50.5ZM344.5 47C344.5 48.933 342.933 50.5 341 50.5V51.5C343.485 51.5 345.5 49.4853 345.5 47H344.5ZM345.5 5C345.5 2.51471 343.485 0.5 341 0.5V1.5C342.933 1.5 344.5 3.06701 344.5 5H345.5ZM1.5 5C1.5 3.067 3.067 1.5 5 1.5V0.5C2.51472 0.5 0.5 2.51472 0.5 5H1.5Z" fill="#757575" />
          </svg>
          <div className="input gap-1.5 absolute flex-row items-center opacity-100 p-0 left-[19px] top-[22px] flex">
            <span className="inputText font-['Volta_Modern_Display'] text-base font-medium text-[#757575] text-left tracking-[0px]">Input Text</span>
          </div>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#757575" />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#757575] text-left tracking-[0.25px]">Disabled Label</span>
            </div>
            <svg width={235} height={2} viewBox="0 0 235 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H235" stroke="#757575" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(dropdown == "Yes" && inputText == "No" && state == "Disabled") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[383px] top-[279px] flex">
      <div className="fieldProperties gap-px flex-col items-start w-full opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344.5 5V47H345.5V5H344.5ZM341 50.5H5V51.5H341V50.5ZM1.5 47V5H0.5V47H1.5ZM5 1.5H12.679V0.5H5V1.5ZM332.415 1.5H341V0.5H332.415V1.5ZM5 50.5C3.067 50.5 1.5 48.933 1.5 47H0.5C0.5 49.4853 2.51472 51.5 5 51.5V50.5ZM344.5 47C344.5 48.933 342.933 50.5 341 50.5V51.5C343.485 51.5 345.5 49.4853 345.5 47H344.5ZM345.5 5C345.5 2.51471 343.485 0.5 341 0.5V1.5C342.933 1.5 344.5 3.06701 344.5 5H345.5ZM1.5 5C1.5 3.067 3.067 1.5 5 1.5V0.5C2.51472 0.5 0.5 2.51472 0.5 5H1.5Z" fill="#757575" />
          </svg>
          <svg className="rightIcon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0008 18.4143L3.22266 9.63614L4.63687 8.22192L12.0059 15.5808L19.2937 8.29299L20.7079 9.70721L12.0008 18.4143Z" fill="#757575" />
          </svg>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#757575" />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#757575] text-left tracking-[0.25px]">Disabled Label</span>
            </div>
            <svg width={235} height={2} viewBox="0 0 235 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H235" stroke="#757575" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(dropdown == "Yes" && state == "Hover" && inputText == "Yes") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[15px] top-[103px] flex">
      <div className="fieldProperties gap-px flex-col h-[59px] items-start w-full flex-1 min-h-0 opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative flex-1 min-h-0 opacity-100 p-0">
          <svg width={358} height={64} viewBox="0 0 358 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3842_68719)">
              <path d="M350.5 7V49H351.5V7H350.5ZM347 52.5H11V53.5H347V52.5ZM7.5 49V7H6.5V49H7.5ZM11 3.5H18.679V2.5H11V3.5ZM338.415 3.5H347V2.5H338.415V3.5ZM11 52.5C9.067 52.5 7.5 50.933 7.5 49H6.5C6.5 51.4853 8.51472 53.5 11 53.5V52.5ZM350.5 49C350.5 50.933 348.933 52.5 347 52.5V53.5C349.485 53.5 351.5 51.4853 351.5 49H350.5ZM351.5 7C351.5 4.51471 349.485 2.5 347 2.5V3.5C348.933 3.5 350.5 5.06701 350.5 7H351.5ZM7.5 7C7.5 5.067 9.067 3.5 11 3.5V2.5C8.51472 2.5 6.5 4.51472 6.5 7H7.5Z" fill="#0460A9" />
            </g>
            <defs>
              <filter id="filter0_d_3842_68719" x="0.5" y="0.5" width={357} height={63} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={3} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.376471 0 0 0 0 0.662745 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3842_68719" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3842_68719" result="shape" />
              </filter>
            </defs>
          </svg>
          <svg className="rightIcon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 18.4143L3.22168 9.63614L4.63589 8.22192L12.005 15.5808L19.2927 8.29299L20.707 9.70721L11.9999 18.4143Z" fill="black" fillOpacity="0.87" />
          </svg>
          <div className="input gap-1.5 absolute flex-row items-center opacity-100 p-0 left-[19px] top-[22px] flex">
            <span className="inputText font-['Volta_Modern_Display'] text-base font-medium text-[rgba(0,0,0,0.87)] text-left tracking-[0px]">Input Text</span>
          </div>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={21} height={14} viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_3842_68726)">
                <path d="M6 3H15" stroke="#0460A9" />
              </g>
              <defs>
                <filter id="filter0_d_3842_68726" x={0} y="0.5" width={21} height={13} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation={3} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.376471 0 0 0 0 0.662745 0 0 0 0.2 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3842_68726" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3842_68726" result="shape" />
                </filter>
              </defs>
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#0460a9] text-left tracking-[0.25px]">Hover Label</span>
            </div>
            <svg width={262} height={14} viewBox="0 0 262 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_3842_68728)">
                <path d="M6 3H256" stroke="#0460A9" />
              </g>
              <defs>
                <filter id="filter0_d_3842_68728" x={0} y="0.5" width={262} height={13} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation={3} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.376471 0 0 0 0 0.662745 0 0 0 0.2 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3842_68728" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3842_68728" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(dropdown == "No" && state == "Disabled" && inputText == "No") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[383px] top-[826px] flex">
      <div className="fieldProperties gap-px flex-col items-start w-full opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344.5 5V47H345.5V5H344.5ZM341 50.5H5V51.5H341V50.5ZM1.5 47V5H0.5V47H1.5ZM5 1.5H12.679V0.5H5V1.5ZM332.415 1.5H341V0.5H332.415V1.5ZM5 50.5C3.067 50.5 1.5 48.933 1.5 47H0.5C0.5 49.4853 2.51472 51.5 5 51.5V50.5ZM344.5 47C344.5 48.933 342.933 50.5 341 50.5V51.5C343.485 51.5 345.5 49.4853 345.5 47H344.5ZM345.5 5C345.5 2.51471 343.485 0.5 341 0.5V1.5C342.933 1.5 344.5 3.06701 344.5 5H345.5ZM1.5 5C1.5 3.067 3.067 1.5 5 1.5V0.5C2.51472 0.5 0.5 2.51472 0.5 5H1.5Z" fill="#757575" />
          </svg>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#757575" />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#757575] text-left tracking-[0.25px]">Disabled Label</span>
            </div>
            <svg width={235} height={2} viewBox="0 0 235 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H235" stroke="#757575" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(inputText == "Yes" && state == "Selected" && dropdown == "No") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[15px] top-[742px] flex">
      <div className="fieldProperties gap-px flex-col items-start w-full opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344 5V47H346V5H344ZM341 50H5V52H341V50ZM2 47V5H0V47H2ZM5 2H12.679V0H5V2ZM332.415 2H341V0H332.415V2ZM5 50C3.34315 50 2 48.6569 2 47H0C0 49.7614 2.23858 52 5 52V50ZM344 47C344 48.6569 342.657 50 341 50V52C343.761 52 346 49.7614 346 47H344ZM346 5C346 2.23857 343.761 0 341 0V2C342.657 2 344 3.34316 344 5H346ZM2 5C2 3.34315 3.34315 2 5 2V0C2.23858 0 0 2.23858 0 5H2Z" fill="#0460A9" />
          </svg>
          <div className="input gap-1.5 absolute flex-row items-center opacity-100 p-0 left-[19px] top-[22px] flex">
            <span className="inputText font-['Volta_Modern_Display'] text-base font-medium text-[rgba(0,0,0,0.87)] text-left tracking-[0px]">Input Text</span>
          </div>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#0460A9" strokeWidth={2} />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#0460a9] text-left tracking-[0.25px]">Selected Label</span>
            </div>
            <svg width={234} height={2} viewBox="0 0 234 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H234" stroke="#0460A9" strokeWidth={2} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(dropdown == "Yes" && state == "Default" && inputText == "Yes") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[15px] top-[15px] flex">
      <div className="fieldProperties gap-px flex-col h-[59px] items-start w-full flex-1 min-h-0 opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative flex-1 min-h-0 opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344.5 5V47H345.5V5H344.5ZM341 50.5H5V51.5H341V50.5ZM1.5 47V5H0.5V47H1.5ZM5 1.5H12.679V0.5H5V1.5ZM332.415 1.5H341V0.5H332.415V1.5ZM5 50.5C3.067 50.5 1.5 48.933 1.5 47H0.5C0.5 49.4853 2.51472 51.5 5 51.5V50.5ZM344.5 47C344.5 48.933 342.933 50.5 341 50.5V51.5C343.485 51.5 345.5 49.4853 345.5 47H344.5ZM345.5 5C345.5 2.51471 343.485 0.5 341 0.5V1.5C342.933 1.5 344.5 3.06701 344.5 5H345.5ZM1.5 5C1.5 3.067 3.067 1.5 5 1.5V0.5C2.51472 0.5 0.5 2.51472 0.5 5H1.5Z" fill="#424242" />
          </svg>
          <svg className="rightIcon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 18.4143L3.22168 9.63614L4.63589 8.22192L12.005 15.5808L19.2927 8.29299L20.707 9.70721L11.9999 18.4143Z" fill="black" fillOpacity="0.87" />
          </svg>
          <div className="input gap-1.5 absolute flex-row items-center opacity-100 p-0 left-[19px] top-[22px] flex">
            <span className="inputText font-['Volta_Modern_Display'] text-base font-medium text-[rgba(0,0,0,0.87)] text-left tracking-[0px]">Input Text</span>
          </div>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#424242" />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#424242] text-left tracking-[0.25px]">Default Label</span>
            </div>
            <svg width={243} height={2} viewBox="0 0 243 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H243" stroke="#424242" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(dropdown == "Yes" && inputText == "No" && state == "Selected") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[383px] top-[191px] flex">
      <div className="fieldProperties gap-px flex-col items-start w-full opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344 5V47H346V5H344ZM341 50H5V52H341V50ZM2 47V5H0V47H2ZM5 2H12.679V0H5V2ZM332.415 2H341V0H332.415V2ZM5 50C3.34315 50 2 48.6569 2 47H0C0 49.7614 2.23858 52 5 52V50ZM344 47C344 48.6569 342.657 50 341 50V52C343.761 52 346 49.7614 346 47H344ZM346 5C346 2.23857 343.761 0 341 0V2C342.657 2 344 3.34316 344 5H346ZM2 5C2 3.34315 3.34315 2 5 2V0C2.23858 0 0 2.23858 0 5H2Z" fill="#0460A9" />
          </svg>
          <svg className="rightIcon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0008 18.4143L3.22266 9.63614L4.63687 8.22192L12.0059 15.5808L19.2937 8.29299L20.7079 9.70721L12.0008 18.4143Z" fill="black" fillOpacity="0.87" />
          </svg>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#0460A9" strokeWidth={2} />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#0460a9] text-left tracking-[0.25px]">Selected Label</span>
            </div>
            <svg width={234} height={2} viewBox="0 0 234 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H234" stroke="#0460A9" strokeWidth={2} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(dropdown == "No" && state == "Selected" && inputText == "No") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[383px] top-[738px] flex">
      <div className="fieldProperties gap-px flex-col items-start w-full opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344 5V47H346V5H344ZM341 50H5V52H341V50ZM2 47V5H0V47H2ZM5 2H12.679V0H5V2ZM332.415 2H341V0H332.415V2ZM5 50C3.34315 50 2 48.6569 2 47H0C0 49.7614 2.23858 52 5 52V50ZM344 47C344 48.6569 342.657 50 341 50V52C343.761 52 346 49.7614 346 47H344ZM346 5C346 2.23857 343.761 0 341 0V2C342.657 2 344 3.34316 344 5H346ZM2 5C2 3.34315 3.34315 2 5 2V0C2.23858 0 0 2.23858 0 5H2Z" fill="#0460A9" />
          </svg>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#0460A9" strokeWidth={2} />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#0460a9] text-left tracking-[0.25px]">Selected Label</span>
            </div>
            <svg width={234} height={2} viewBox="0 0 234 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H234" stroke="#0460A9" strokeWidth={2} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(inputText == "Yes" && state == "Hover" && dropdown == "No") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[15px] top-[654px] flex">
      <div className="fieldProperties gap-px flex-col h-[59px] items-start w-full flex-1 min-h-0 opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative flex-1 min-h-0 opacity-100 p-0">
          <svg width={358} height={64} viewBox="0 0 358 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3842_77408)">
              <path d="M350.5 7V49H351.5V7H350.5ZM347 52.5H11V53.5H347V52.5ZM7.5 49V7H6.5V49H7.5ZM11 3.5H18.679V2.5H11V3.5ZM338.415 3.5H347V2.5H338.415V3.5ZM11 52.5C9.067 52.5 7.5 50.933 7.5 49H6.5C6.5 51.4853 8.51472 53.5 11 53.5V52.5ZM350.5 49C350.5 50.933 348.933 52.5 347 52.5V53.5C349.485 53.5 351.5 51.4853 351.5 49H350.5ZM351.5 7C351.5 4.51471 349.485 2.5 347 2.5V3.5C348.933 3.5 350.5 5.06701 350.5 7H351.5ZM7.5 7C7.5 5.067 9.067 3.5 11 3.5V2.5C8.51472 2.5 6.5 4.51472 6.5 7H7.5Z" fill="#0460A9" />
            </g>
            <defs>
              <filter id="filter0_d_3842_77408" x="0.5" y="0.5" width={357} height={63} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={3} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.376471 0 0 0 0 0.662745 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3842_77408" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3842_77408" result="shape" />
              </filter>
            </defs>
          </svg>
          <div className="input gap-1.5 absolute flex-row items-center opacity-100 p-0 left-[19px] top-[22px] flex">
            <span className="inputText font-['Volta_Modern_Display'] text-base font-medium text-[rgba(0,0,0,0.87)] text-left tracking-[0px]">Input Text</span>
          </div>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={21} height={14} viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_3842_77415)">
                <path d="M6 3H15" stroke="#0460A9" />
              </g>
              <defs>
                <filter id="filter0_d_3842_77415" x={0} y="0.5" width={21} height={13} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation={3} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.376471 0 0 0 0 0.662745 0 0 0 0.2 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3842_77415" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3842_77415" result="shape" />
                </filter>
              </defs>
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#0460a9] text-left tracking-[0.25px]">Hover Label</span>
            </div>
            <svg width={262} height={14} viewBox="0 0 262 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_3842_77417)">
                <path d="M6 3H256" stroke="#0460A9" />
              </g>
              <defs>
                <filter id="filter0_d_3842_77417" x={0} y="0.5" width={262} height={13} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation={3} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.376471 0 0 0 0 0.662745 0 0 0 0.2 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3842_77417" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3842_77417" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(dropdown == "Yes" && inputText == "No" && state == "Hover") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[383px] top-[103px] flex">
      <div className="fieldProperties gap-px flex-col h-[59px] items-start w-full flex-1 min-h-0 opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative flex-1 min-h-0 opacity-100 p-0">
          <svg width={358} height={64} viewBox="0 0 358 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3842_69207)">
              <path d="M350.5 7V49H351.5V7H350.5ZM347 52.5H11V53.5H347V52.5ZM7.5 49V7H6.5V49H7.5ZM11 3.5H18.679V2.5H11V3.5ZM338.415 3.5H347V2.5H338.415V3.5ZM11 52.5C9.067 52.5 7.5 50.933 7.5 49H6.5C6.5 51.4853 8.51472 53.5 11 53.5V52.5ZM350.5 49C350.5 50.933 348.933 52.5 347 52.5V53.5C349.485 53.5 351.5 51.4853 351.5 49H350.5ZM351.5 7C351.5 4.51471 349.485 2.5 347 2.5V3.5C348.933 3.5 350.5 5.06701 350.5 7H351.5ZM7.5 7C7.5 5.067 9.067 3.5 11 3.5V2.5C8.51472 2.5 6.5 4.51472 6.5 7H7.5Z" fill="#0460A9" />
            </g>
            <defs>
              <filter id="filter0_d_3842_69207" x="0.5" y="0.5" width={357} height={63} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={3} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.376471 0 0 0 0 0.662745 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3842_69207" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3842_69207" result="shape" />
              </filter>
            </defs>
          </svg>
          <svg className="rightIcon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0008 18.4143L3.22266 9.63614L4.63687 8.22192L12.0059 15.5808L19.2937 8.29299L20.7079 9.70721L12.0008 18.4143Z" fill="black" fillOpacity="0.87" />
          </svg>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={21} height={14} viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_3842_69214)">
                <path d="M6 3H15" stroke="#0460A9" />
              </g>
              <defs>
                <filter id="filter0_d_3842_69214" x={0} y="0.5" width={21} height={13} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation={3} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.376471 0 0 0 0 0.662745 0 0 0 0.2 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3842_69214" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3842_69214" result="shape" />
                </filter>
              </defs>
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#0460a9] text-left tracking-[0.25px]">Hover Label</span>
            </div>
            <svg width={262} height={14} viewBox="0 0 262 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_3842_69216)">
                <path d="M6 3H256" stroke="#0460A9" />
              </g>
              <defs>
                <filter id="filter0_d_3842_69216" x={0} y="0.5" width={262} height={13} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation={3} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.376471 0 0 0 0 0.662745 0 0 0 0.2 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3842_69216" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3842_69216" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(dropdown == "No" && state == "Hover" && inputText == "No") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[383px] top-[650px] flex">
      <div className="fieldProperties gap-px flex-col h-[59px] items-start w-full flex-1 min-h-0 opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative flex-1 min-h-0 opacity-100 p-0">
          <svg width={358} height={64} viewBox="0 0 358 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3842_69786)">
              <path d="M350.5 7V49H351.5V7H350.5ZM347 52.5H11V53.5H347V52.5ZM7.5 49V7H6.5V49H7.5ZM11 3.5H18.679V2.5H11V3.5ZM338.415 3.5H347V2.5H338.415V3.5ZM11 52.5C9.067 52.5 7.5 50.933 7.5 49H6.5C6.5 51.4853 8.51472 53.5 11 53.5V52.5ZM350.5 49C350.5 50.933 348.933 52.5 347 52.5V53.5C349.485 53.5 351.5 51.4853 351.5 49H350.5ZM351.5 7C351.5 4.51471 349.485 2.5 347 2.5V3.5C348.933 3.5 350.5 5.06701 350.5 7H351.5ZM7.5 7C7.5 5.067 9.067 3.5 11 3.5V2.5C8.51472 2.5 6.5 4.51472 6.5 7H7.5Z" fill="#0460A9" />
            </g>
            <defs>
              <filter id="filter0_d_3842_69786" x="0.5" y="0.5" width={357} height={63} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={3} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.376471 0 0 0 0 0.662745 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3842_69786" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3842_69786" result="shape" />
              </filter>
            </defs>
          </svg>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={21} height={14} viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_3842_69790)">
                <path d="M6 3H15" stroke="#0460A9" />
              </g>
              <defs>
                <filter id="filter0_d_3842_69790" x={0} y="0.5" width={21} height={13} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation={3} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.376471 0 0 0 0 0.662745 0 0 0 0.2 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3842_69790" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3842_69790" result="shape" />
                </filter>
              </defs>
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#0460a9] text-left tracking-[0.25px]">Hover Label</span>
            </div>
            <svg width={262} height={14} viewBox="0 0 262 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_3842_69792)">
                <path d="M6 3H256" stroke="#0460A9" />
              </g>
              <defs>
                <filter id="filter0_d_3842_69792" x={0} y="0.5" width={262} height={13} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation={3} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.376471 0 0 0 0 0.662745 0 0 0 0.2 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3842_69792" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3842_69792" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
  {(inputText == "Yes" && state == "Default" && dropdown == "No") && <>
    <div className="formFields gap-0 absolute flex-col w-[346px] h-[59px] items-start opacity-100 p-0 left-[15px] top-[566px] flex">
      <div className="fieldProperties gap-px flex-col h-[59px] items-start w-full flex-1 min-h-0 opacity-100 pt-0.5 pb-0 px-0 flex">
        <div className="field w-full h-[57px] relative flex-1 min-h-0 opacity-100 p-0">
          <svg width={346} height={52} viewBox="0 0 346 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344.5 5V47H345.5V5H344.5ZM341 50.5H5V51.5H341V50.5ZM1.5 47V5H0.5V47H1.5ZM5 1.5H12.679V0.5H5V1.5ZM332.415 1.5H341V0.5H332.415V1.5ZM5 50.5C3.067 50.5 1.5 48.933 1.5 47H0.5C0.5 49.4853 2.51472 51.5 5 51.5V50.5ZM344.5 47C344.5 48.933 342.933 50.5 341 50.5V51.5C343.485 51.5 345.5 49.4853 345.5 47H344.5ZM345.5 5C345.5 2.51471 343.485 0.5 341 0.5V1.5C342.933 1.5 344.5 3.06701 344.5 5H345.5ZM1.5 5C1.5 3.067 3.067 1.5 5 1.5V0.5C2.51472 0.5 0.5 2.51472 0.5 5H1.5Z" fill="#424242" />
          </svg>
          <div className="input gap-1.5 absolute flex-row items-center opacity-100 p-0 left-[19px] top-[22px] flex">
            <span className="inputText font-['Volta_Modern_Display'] text-base font-medium text-[rgba(0,0,0,0.87)] text-left tracking-[0px]">Input Text</span>
          </div>
          <div className="label gap-1 absolute flex-row w-[332px] h-3.5 items-center bg-white opacity-100 p-0 top-0 flex">
            <svg width={9} height={2} viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H9" stroke="#424242" />
            </svg>
            <div className="labelText gap-0.5 flex-row items-center opacity-100 p-0 flex">
              <span className="fieldLabel font-['Volta_Modern_Display'] text-xs font-medium text-[#424242] text-left tracking-[0.25px]">Default Label</span>
            </div>
            <svg width={243} height={2} viewBox="0 0 243 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H243" stroke="#424242" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>}
</>
  );
}