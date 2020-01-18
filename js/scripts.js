$(document).ready(function () {
  // load ui elements
  var ui = new UI();

  //---------  BUSINESS LOGIC ----------
  var result = [
    ['Ruby', './img/ruby.jpeg'],
    ['C#', './img/c-sharp.png'],
    ['JavaScript', './img/js.png'],
    ['Go', './img/go.png'],
    ['Python', './img/python.jpeg'],
    ['Rust', './img/rust.png'],
    ['Swift', './img/swift.png'],
    ['have reset the qestions.', './img/lang-banner-01.png']
  ];

  // submit button listener
  ui.submitBtn.click(function (event) {
    event.preventDefault();
    runSurvey();
  });

  function runSurvey() {
    if (ui.q1 && ui.q2 && ui.q3 && ui.q4) {
      // toggle between reset and submit
      if (ui.reDoState) {
        writeOutResult(getResult());
        ui.subTitle.fadeToggle()
        ui.resetBtn();
      } else {
        ui.resetBtn();
        ui.subTitle.fadeToggle();
        writeOutResult(7);
        ui.questionClass.hide();

      } // <--- toggle end

      // picking language logic

    } else {
      // catch if answers have not been given
      ui.modalTitle.text('Error!');
      ui.modalOutPut.text('Please answer all questiosn');
    }
  }

  // sending UI data to update DOM
  function writeOutResult(answer) {
    ui.modalTitle.text('The Results Are In!');
    ui.modalOutPut.text('You should learn ' + result[answer][0]);
    ui.titleOutPut.text('Learn ' + result[answer][0])
    ui.img.attr("src", result[answer][1]);
  }

  // evaluate what Language a person should learn
  function getResult(reset) {
    var answer;
    // q1
    var firstQ = function () {
      if (ui.q1 === 'games') {
        answer = 1; //C#
      } else if (ui.q1 === 'mobile') {
        answer = 6; //swift
      } else if (ui.q1 === 'robots') {
        answer = 4; //python
      } else if (ui.q1 === 'desktop') {
        answer = 1; //C#
      } else if (ui.q1 === 'websites') {
        webDevQ2();
      } else {
        console.log('error on question 1')
      }
    } // q1 end

    // q2 websites
    var webDevQ2 = function () {
      if (ui.q2 === "projects") {
        porjectsQ3();
      } else if (ui.q2 === "build") {
        answer = 0; //ruby
      } else if (ui.q2 === "employed") {
        employedQ3();
      } else {
        console.log('error question 2 webdev : all conditions failed');
      }
    }; // q2 end

    // q3 freelance projects
    var porjectsQ3 = function () {
      if (ui.q3 === "large") {
        answer = 1; //C# 
      } else if (ui.q3 === "small") {
        bleedingEdgeQ4();
      } else if (ui.q3 === "home") {
        bleedingEdgeQ4();
      } else {
        console.log('error question 3 projects : all conditions failed')
      }
    }; //q3 projects end

    // q3 employed
    var employedQ3 = function () {
      if (ui.q3 === "large") {
        answer = 1; //C# 
      } else if (ui.q3 === "small") {
        answer = 2; //Javascript
      } else if (ui.q3 === "home") {
        answer = 2; //Javascript
      } else {
        console.log('error question 3 employed : all conditions failed')
      }
    }// q3 employed end

    // q4 bleeding edge
    var bleedingEdgeQ4 = function () {
      if (ui.q4 === "early") {
        answer = 1; //Go
      } else if (ui.q4 === "proven") {
        answer = 0; //ruby
      } else if (ui.q4 === "no") {
        answer = 2; //Javascript
      } else {
        console.log('error question 4 : all conditions failed')
      }
    }

    firstQ();
    return answer;
  }// getResults end
  // end business logic
}); // < ---- document ready end



//------ THE DOM FUNCTIONS ----- 
function UI() {
  // private DOM elements
  var arrow = $('#arrow');
  var question = $('form');
  var inputBtns = $("input[type='radio']");

  // public DOM elements
  this.submitBtn = $('#submit');
  this.modalTitle = $('h5');
  this.modalOutPut = $('#modal-out-put');
  this.titleOutPut = $('#title-out-put');
  this.img = $('#out-put-img');
  this.subTitle = $('h2');
  this.questionClass = $('.question');
  this.reDoState = true;

  // public Answer Variables
  this.q1;
  this.q2;
  this.q3;
  this.q4;
  this.q5;
  this.checkbox;

  // public Function
  this.resetBtn = function () {
    if (that.reDoState) {
      that.submitBtn.text('Reset').attr('type', 'reset').removeClass('btn-primary').addClass('btn-danger');
      that.reDoState = false;
    } else {
      that.submitBtn.text('Submit').attr('type', 'submit').removeClass('btn-danger').addClass('btn-primary');
      that.reDoState = true;
      that.q1 = false;
      arrow.show();
      inputBtns.prop('checked', false);
    }
  };

  // share 'this' to inner function
  var that = this;

  // creating radio button listeners
  inputBtns.click(function () {
    //question 1
    var q1Value = $("input[name='q1']:checked").val();
    question.next().show();
    if (q1Value) {
      that.q1 = q1Value;
      question.find('.question').eq(0).slideDown();
    }
    // question 2
    var q2Value = $("input[name='q2']:checked").val();
    if (q2Value) {
      that.q2 = q2Value;
      question.find('.question').eq(1).slideDown();
    }
    // question 3
    var q3Value = $("input[name='q3']:checked").val();
    if (q3Value) {
      that.q3 = q3Value;
      question.find('.question').eq(2).slideDown();
    }
    // question 4
    var q4Value = $("input[name='q4']:checked").val();
    if (q4Value) {
      that.q4 = q4Value;
      question.find('.question').eq(3).slideDown();
    }
    // question 5
    var q5Value = $("input[name='q5']:checked").val();
    if (q5Value) {
      that.q5 = q5Value;
      question.find('.question').eq(4).slideDown();
      that.submitBtn.removeClass('btn-light').addClass('btn-primary');
      arrow.hide();
    }
  }); // end radio listener

  // checkbox listener. only using here. no need to make public variable.
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(":checked")) {
      that.checkbox = true;
    } else if ($(this).is(":not(:checked)")) {
      that.checkbox = false;
    }
  });
} // < ----- UI end