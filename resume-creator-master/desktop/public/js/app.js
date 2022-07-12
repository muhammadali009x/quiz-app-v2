

function signup_func1(){
    
    if(filled == true){
        document.getElementById('fname').value = UsersArr1[ind-1].fname;
        document.getElementById('lname').value = UsersArr1[ind-1].lname;
        document.getElementById('email').value = UsersArr1[ind-1].email
        document.getElementById('confemail').value = UsersArr1[ind-1].confemail
        document.getElementById('pass').value = UsersArr1[ind-1].pass
        document.getElementById('confpass').value = UsersArr1[ind-1].confpass
        document.getElementById("dvOne-tab").style.backgroundColor = "#add7a8";
        document.getElementById("dvOne-tab").style.border = "3px solid  #add7a8";    

    }
}

function signup_func2(){
    if(filled == true){
        document.getElementById("dvOne-tab").style.backgroundColor = "#add7a8";
        document.getElementById("dvOne-tab").style.border = "3px solid  #add7a8";    
    }
}

function signup_func3(){
}
function Users_Form1(fname, lname, email, confemail, pass, confpass) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.confemail = confemail;
    this.pass = pass;
    this.confpass = confpass;

}
function Users_Form2(NearestOff, address, address2, city, state, country, postalcode, phone, mphone) {
    this.NearestOff = NearestOff;
    this.address = address;
    this.address2 = address2;
    this.city = city;
    this.state = state;
    this.country = country;
    this.postalcode = postalcode;
    this.phone = phone;
    this.mphone = mphone;

}
// var arr = [10]
// arr[0] = new Students("Anam", 20, 'karachi...')

// console.log(arr[0])
var UsersArr1 = [];
var UsersArr2 = [];
var ind = 0;
let fname;
let lname;
let email;
let confemail;
let pass ;
let confpass;

let NearestOff;
let address;
let address2;
let city;
let state;
let country;
let postalcode;
let phone;
let mphone;

let filled = false;
UsersArr1[ind] = new Users_Form1();
UsersArr2[ind] = new Users_Form2();

function submit_Form1(){
    fname = document.getElementById('fname').value
    lname = document.getElementById('lname').value
    email = document.getElementById('email').value

    filled = false;

    if((fname != "" && lname != "" && email != "" && confemail) && (email === confemail)){

        UsersArr1[ind].fname = fname;
        UsersArr1[ind].lname = lname;
        UsersArr1[ind].email = email;
        UsersArr1[ind].confemail = confemail;
        UsersArr1[ind].pass = pass;
        UsersArr1[ind].confpass = confpass;
        filled = true;
        signup_func2();
        document.getElementById("dvOne-tab").style.backgroundColor = "#add7a8";
        document.getElementById("dvOne-tab").style.border = "3px solid  #add7a8";    


        submit_Form2();
        // function submit_Form2(){
        //     NearestOff = document.getElementById('NearestOff').value
        //     address = document.getElementById('address').value
        //     address2 = document.getElementById('address2').value
        //     confemcityail = document.getElementById('city').value
        //     state = document.getElementById('state').value
        //     country = document.getElementById('country').value
        //     postalcode = document.getElementById('postalcode').value
        //     phone = document.getElementById('phone').value
        //     mphone = document.getElementById('mphone').value

        //     if(NearestOff != "Nearest Office" && address != "" && address2  != address && city != "" && state != "State" && country != "Country" && postalcode != "" && phone != "" && mphone != phone)
        //     {
        //         console.log("abcd")
        //     }
        // }
        
        ind++;
    }
    else if(email !== confemail){
        document.querySelector('.required-mark-confemail').innerHTML = "Confirm Email Address is not matched from above field";
    }
    else if(pass !== confpass){
        document.querySelector('.required-mark-confemail').innerHTML = "*";
    }
    else{
        document.querySelector('.required-mark-confemail').innerHTML = "*";
        document.getElementById('error-emptyfields').innerHTML = "Please All above fields"
    }
        
}