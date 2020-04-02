$( document ).ready(function() {
  var termlookupelemnt = document.getElementById("elcn_anticipatedentrytermid");
  if(termlookupelemnt != null)
    termlookupelemnt.parentElement.firstElementChild.innerHTML = "Start Term 2";

  var academictermlookup = document.getElementById("academic-level");
  if(academictermlookup != null){
    $('#academic-level').empty();
    var selectValues = {"": "Select All", "5d99d30e-1642-ea11-a971-aa48a8c660d7": "test 1", "203096d4-da65-e911-80ec-0e2c8f1ebd26": "test 2" };
    $.each(selectValues, function(key, value) {
       $('#academic-level')
            .append($('<option>', { value : key })
            .text(value));
    });
  }
)};
