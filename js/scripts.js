$(document).ready(function(){
  var ui = new UI();
  var result = [
    ['Ruby', 'img/ruby.jpeg'],
    ['C#', 'img/c-sharp.png'],
    ['JavaScript', 'img/js.png'],
    ['Go', 'img/go.png'],
    ['Python', 'img/python.jpeg'],
    ['Rust', 'img/rust.png'],
    ['Swift', 'img/swift.png']
  ];

  ui.submitBtn.click(function(event){
    event.preventDefault();
    runSurvey();
  });

  function runSurvey() {
    if(ui.q1) {
      writeOutResult(6);
    } else {
      ui.modalTitle.text('Error!');
      ui.modalOutPut.text('Please answer all questiosn');
    }
  }

  function writeOutResult(answer) {
    ui.modalTitle.text('The Results Are In!');
    ui.modalOutPut.text('Your should learn ' + result[answer][0]);
    ui.titleOutPut.text('Learn ' + result[answer][0])
    ui.img.attr("src", result[answer][1]);
  }
}); //document ready end



function UI() {
  //DOM elements
  this.submitBtn = $('#submit');
  this.modalTitle = $('h5');
  this.modalOutPut = $('#modal-out-put');
  this.titleOutPut = $('#title-out-put');
  this.img = $('#out-put-img');
  this.name = $('#name');


  var question = $('form');

  //answers
  this.q1;
  this.q2;
  this.q3;
  this.q4;
  this.q5;
  this.checkbox;


  var that = this;

  $("input[type='radio']").click(function(){

    var q1Value = $("input[name='q1']:checked").val();
    question.next().show();
    if(q1Value){
      that.q1 = q1Value;
      question.find('.question').eq(0).slideDown();
    }

    var q2Value = $("input[name='q2']:checked").val();
    if(q2Value){
      that.q2 = q2Value;
      question.find('.question').eq(1).slideDown();
    }

    var q3Value = $("input[name='q3']:checked").val();
    if(q3Value){
      that.q3 = q3Value;
      question.find('.question').eq(2).slideDown();
    }

    var q4Value = $("input[name='q4']:checked").val();
    if(q4Value){
      that.q4 = q4Value;
      question.find('.question').eq(3).slideDown();
    }

    var q5Value = $("input[name='q5']:checked").val();
    if(q5Value){
      that.q5 = q5Value;
      question.find('.question').eq(4).slideDown();
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