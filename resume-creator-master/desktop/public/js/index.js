
const profileForm_content1 = document.querySelector(".profileForm-form1")
const profileForm_content2 = document.querySelector(".profileForm-form2")
const profileForm_content3 = document.querySelector(".profileForm-form3")


//#region Form textFields
let txt_fname = document.getElementById('fname')
let txt_lname = document.getElementById('lname')
let txt_email = document.getElementById('email')
//#endregion

visibility_ofOthersForms(
    profileForm_content1, 
    profileForm_content2,
    profileForm_content3
)


let dvOne_tab = document.querySelector(".dvOne-tab");
let dvTwo_tab = document.querySelector(".dvTwo-tab");
let dvThree_tab = document.querySelector(".dvThree-tab");
let tabs_strings = document.getElementById("tabs-strings");

dvOne_tab.addEventListener("click", profileForm1)
dvTwo_tab.addEventListener("click", ()=>{profileForm2("#ff7b00", "#fff", "#fff")});
dvThree_tab.addEventListener("click", ()=>{profileForm3("#ff7b00", "#fff", "#fff")});



profileTabsColorChanger(dvOne_tab, dvTwo_tab, dvThree_tab, "#ff7b00", "#fff", "#fff");

function profileForm1(color1, color2, color3){
    profileTabsColorChanger(dvOne_tab, dvTwo_tab, dvThree_tab, "#ff7b00", "#fff", "#fff");
    //#region forms visibility
    visibility_ofOthersForms(
        profileForm_content1, 
        profileForm_content2,
        profileForm_content3
    )
    //#endregion 
}
function profileForm2(color1, color2, color3){
    profileTabsColorChanger(dvTwo_tab, dvOne_tab, dvThree_tab, color1, color2, color3);  ;
    //#region forms visibility
    visibility_ofOthersForms(
        profileForm_content2, 
        profileForm_content1,
        profileForm_content3
    )
    //#endregion 
}
function profileForm3(color1, color2, color3){
    profileTabsColorChanger(dvThree_tab, dvTwo_tab, dvOne_tab, color1, color2, color3);
    //#region forms visibility
    visibility_ofOthersForms(
        profileForm_content3, 
        profileForm_content2,
        profileForm_content1
    )
    //#endregion 
}

function submit_Form1(){
    profileForm2("#ff7b00", "#add7a8", "#fff");
}


function submit_Form2(){
    profileForm3("#ff7b00", "#add7a8", "#add7a8");
}



