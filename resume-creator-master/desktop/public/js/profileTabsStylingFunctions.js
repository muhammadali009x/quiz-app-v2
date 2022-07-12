
function visibility_ofOthersForms(form1_toShow, form2_toHidden, form3_toHidden){
    form1_toShow.style.display = "inline";
    form2_toHidden.style.display = "none";
    form3_toHidden.style.display = "none";
}
function profileTabsColorChanger(tab_toColor, tab_toReset1, tab_toReset2, color1, color2, color3){
    tab_toColor.style.backgroundColor = color1;
    tab_toColor.style.border = `3px solid ${color1}`;

    tab_toReset1.style.backgroundColor = color2;
    tab_toReset1.style.border = "3px solid #ebf3eb";

    tab_toReset2.style.backgroundColor = color3;
    tab_toReset2.style.border = "3px solid #ebf3eb";

    tabs_strings.style.marginTop = "0px";
}