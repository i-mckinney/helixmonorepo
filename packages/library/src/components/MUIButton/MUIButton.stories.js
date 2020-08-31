import React from "react";
import MUIButton from ".";

export default {
    title:"MUIButton"
}

export const basicButton = ()=> <MUIButton> Basic Button</MUIButton>

export const coloredButton = ()=> 
<>
<MUIButton type="primary"> Primary Button</MUIButton>
<br/>
<br/>
<MUIButton type="secondary"> Secondary Button</MUIButton>
</>
export const disabledButton = ()=> <MUIButton disabled > Primary Button</MUIButton>