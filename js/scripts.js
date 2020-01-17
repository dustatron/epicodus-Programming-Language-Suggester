$(document).ready(function(){
  var answered = false;

  var ui = new UI();

  ui.submitBtn.click(function(event){
    event.preventDefault();
    runSurvey();
  });

  function runSurvey() {
    if(ui.q1 && ui.q2 && ui.q3 && ui.q4 && ui.q5 && ui.checkbox) {
      ui.outPut.text('q1 = ' + ui.q1 + ' || q2 = ' + ui.q2 + ' || q3 = ' + ui.q3 + ' || q4 ' + ui.q4 + ' || q5 = ' + ui.q5 + ' checkbox = ' + ui.checkbox);
      ui.img.attr("src", "/img/c-sharp.png");
    } else {
      alert('Please answer all questions');
      
    }
  }

});


function UI() {
  this.submitBtn = $('#submit');
  this.outPut = $('#out-put');
  this.img = $('#out-put-img');
  this.name = $('#name');
  this.q1;
  this.q2;
  this.q3;
  this.q4;
  this.q5;
  this.checkbox;


  var that = this;

  $("input[type='radio']").click(function(){

    var q1Value = $("input[name='q1']:checked").val();
    if(q1Value){
      that.q1 = q1Value;
    }

    var q2Value = $("input[name='q2']:checked").val();
    if(q2Value){
      that.q2 = q2Value;
    }

    var q3Value = $("input[name='q3']:checked").val();
    if(q3Value){
      that.q3 = q3Value;
    }

    var q4Value = $("input[name='q4']:checked").val();
    if(q4Value){
      that.q4 = q4Value;
    }

    var q5Value = $("input[name='q5']:checked").val();
    if(q5Value){
      that.q5 = q5Value;
    }

  }); //End radio listener

  $('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
      that.checkbox = true;
    } else if($(this).is(":not(:checked)")) {
      that.checkbox = false;
    }
  }); 


}