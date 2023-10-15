import React from 'react';

export function C43TitleBody(props){
	const {
    size = "L(LHN)"
  } = props;
  return (
      <>
  {(size == "L") && <>
    <div className="c43TitleBody gap-[138px] absolute flex-row w-[1440px] items-start bg-white opacity-100 pl-12 pr-0 pt-16 pb-24 left-[1545px] top-2 flex">
      <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-[546px]">Neuroendocrine tumours are otherwise know as NETs</span>
      <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[660px]">Neuroendocrine tumours (NETs) are a group of neoplasms that originate in secretory cells known as neuroendocrine cells, which are distributed throughout the body. These can be associated with debilitating symptoms and may sometimes severely compromise a patient’s overall health.<br />Understand the fundamentals of NETs, exploring the nature of these tumours, their classification and grading and diagnosis and treatment. Using this background knowledge will allow you to further your understanding of gasteroenteropancreatic neuroendocrine tumours (GEP-NETs).</span>
    </div>
  </>}
  {(size == "L(LHN)") && <>
    <div className="c43TitleBody gap-28 absolute flex-row w-[1164px] items-start bg-white opacity-100 pl-16 pr-0 pt-16 pb-24 left-2 top-[21px] flex">
      <span className="title font-['Volta_Modern_Display'] text-[50px] font-medium text-[#212121] text-left tracking-[0px] w-[418px]">Neuroendocrine tumours are otherwise known as NETs</span>
      <span className="subcopy font-['Volta_Modern_Display'] text-[23px] font-medium text-[#212121] text-left tracking-[0px] w-[506px]">Neuroendocrine tumours (NETs) are a group of neoplasms that originate in secretory cells known as neuroendocrine cells, which are distributed throughout the body. These can be associated with debilitating symptoms and may sometimes severely compromise a patient’s overall health.<br />Understand the fundamentals of NETs, exploring the nature of these tumours, their classification and grading and diagnosis and treatment. Using this background knowledge will allow you to further your understanding of gasteroenteropancreatic neuroendocrine tumours (GEP-NETs).</span>
    </div>
  </>}
  {(size == "S") && <>
    <div className="c43TitleBody gap-12 absolute flex-col w-[375px] items-center bg-white opacity-100 pt-10 pb-16 px-4 left-[4490px] top-2 flex">
      <span className="title font-['Volta_Modern_Display'] text-[32px] font-medium text-[#212121] text-left tracking-[-0.35px] w-full">Neuroendocrine tumours are otherwise known as NETs</span>
      <span className="subcopy font-['Volta_Modern_Display'] text-[21px] font-medium text-[#212121] text-left tracking-[0px] w-full">Neuroendocrine tumours (NETs) are a group of neoplasms that originate in secretory cells known as neuroendocrine cells, which are distributed throughout the body. These can be associated with debilitating symptoms and may sometimes severely compromise a patient’s overall health.<br /><br />Understand the fundamentals of NETs, exploring the nature of these tumours, their classification and grading and diagnosis and treatment. Using this background knowledge will allow you to further your understanding of gasteroenteropancreatic neuroendocrine tumours (GEP-NETs).</span>
    </div>
  </>}
  {(size == "M") && <>
    <div className="c43TitleBody gap-2 absolute flex-col w-[768px] items-start overflow-hidden bg-white opacity-100 pt-10 pb-16 px-8 left-[3267px] top-2 flex">
      <div className="content gap-[85px] flex-row w-[704px] items-start opacity-100 p-0 flex">
        <span className="title font-['Volta_Modern_Display'] text-[38px] font-medium text-[#212121] text-left tracking-[-0.35px] w-[279px]">Neuroendocrine tumours are otherwise known as NETs</span>
        <span className="subcopy font-['Volta_Modern_Display'] text-2xl font-medium text-[#212121] text-left tracking-[0px] w-[340px]">Neuroendocrine tumours (NETs) are a group of neoplasms that originate in secretory cells known as neuroendocrine cells, which are distributed throughout the body. These can be associated with debilitating symptoms and may sometimes severely compromise a patient’s overall health.<br /><br />Understand the fundamentals of NETs, exploring the nature of these tumours, their classification and grading and diagnosis and treatment. Using this background knowledge will allow you to further your understanding of gasteroenteropancreatic neuroendocrine tumours (GEP-NETs).</span>
      </div>
    </div>
  </>}
</>
  );
}