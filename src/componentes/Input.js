import React from "react";

export const Input = (props) => {
    const {
        srcImg,
        altImg,
        inputType,
        inputName,
        inputPlaceholder,
        value,
        setValue
    } = props;
  
  
  
    return (
    <div className="email">
      <img src={srcImg} alt={altImg} />
      <input
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        value={value}
        onChange={(evento) => setValue(evento.target.value)}
      />
    </div>
  );
};
