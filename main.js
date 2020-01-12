function displayText(){
  let isCompleteFormValid = true;
  let formData = {};
  //textbox
   let txtBox = document.querySelector("#usrId");
   if(/^[a-z]+$/.test(txtBox.value)){
    document.querySelector("#txtBoxErr").innerHTML = "";
    formData.username = txtBox.value;
    
   }else{
    document.querySelector("#txtBoxErr").innerHTML = "Please Enter a valid Name";
    isCompleteFormValid = false;
   }

   //password
   let pwdBox = document.querySelector("#pwdId");
   if(pwdBox.value.length === 0){
    document.querySelector("#pwdErrMsg").innerHTML = "Please Enter a valid password";
    isCompleteFormValid = false;
   }else{
    document.querySelector("#pwdErrMsg").innerHTML = "";
    formData.password = pwdBox.value;
   }

   //select
   let crsSelect = document.querySelector("#courseId");
   if(crsSelect.value.length === 0){
    document.querySelector("#crsErrMsg").innerHTML = "Please Select a Course";
    isCompleteFormValid = false;
   }else{
    document.querySelector("#crsErrMsg").innerHTML = "";
    formData.course = crsSelect.value;
   }

   //CheckBox
   let checkBoxes = document.querySelectorAll("[name='vehicle']:checked");
   if(checkBoxes.length == 0){
      document.querySelector("#vehicleErrMsg").innerHTML = "Please select a Vehicle";
      isCompleteFormValid = false;
   }else{
      document.querySelector("#vehicleErrMsg").innerHTML = "";
      let values="";
      for(let i =0;i<checkBoxes.length;i++){
        values+=checkBoxes[i].value+",";
      }
      formData.vehicles = values.substr(0,values.length-1);
   }

   //Radio Button
   let genders = document.querySelectorAll("[name='gender']");
   let isValid = false;
   let values="";
   for(let i = 0;i<genders.length;i++){
     if(genders[i].checked == true){
       isValid = true;
       values = genders[i].value;
       break;
     }
   }
   if(!isValid){
      document.querySelector("#genderErrMsg").innerHTML = "Please select a gender";
      isCompleteFormValid = false;
   }else{
      document.querySelector("#genderErrMsg").innerHTML = "";
      formData.gender = values;
   }

   //textArea
   let txtArea = document.querySelector("#addr");
   if(txtArea.value.length === 0){
    document.querySelector("#addrErr").innerHTML = "Please Enter a valid Address";
    isCompleteFormValid = false;
   }else{
    document.querySelector("#addrErr").innerHTML = "";
    formData.address = txtArea.value;
   }
   if(isCompleteFormValid){
   console.log(formData);
   generateOutput(formData);
   }
}
function generateOutput(formData){
let tblRow = `<tr>
            <td>${formData.username}</td>
            <td>${formData.vehicles}</td>
</tr>`;

  document.querySelector("#rgsTbl").children[1].innerHTML = tblRow;
 
}