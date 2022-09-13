var name_student_array = [] 
function submit(){
  for(var i = 1; i <= 4; i++){
    var name_student = document.getElementById("name_of_the_student_" +i).value ;
    console.log(name_student)
    name_student_array.push(name_student)
  }
  console.log(name_student_array)
  document.getElementById("display_name_with_commas").innerHTML = name_student_array;
  var remove_comma = name_student_array.join(" ") 
  console.log(remove_comma)
  document.getElementById("display_name_without_commas").innerHTML = remove_comma;
  document.getElementById("submit_button").style.display = "none";
  document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
    name_student_array.sort()
    console.log(name_student_array)
    document.getElementById("display_name_with_commas").innerHTML = name_student_array;
    var remove_comma = name_student_array.join(" ") 
    console.log(remove_comma)
    document.getElementById("display_name_without_commas").innerHTML = remove_comma;
}