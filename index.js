//User Stories - Quiz
// Quiz should have a starting page with start button
// should use form structure for answers
// should follow A11y guidelines (what about for photo quiz?? alt:descriptions?)
// Each questions should be on a sepparate page
// upon completion there should be an ending page with score report and restart button

/*class Question {
  constructor(text, answers, correctAnswer, imageUrl, imageAltText) {
    this.text = text
    this.answers = answers
    this.correctAnswer = correctAnswer
    this.imageUrl = imageUrl
    this.imageAltText = imageAltText
  }
}

class Quiz {
  constructor(questions) {
    this.score = 0
    this.currentQuestion = 0
    this.answers = []
    this.questions = questions
  }
}*/

const QUESTIONS_STORE = [
  //store all questions and corresponding image, array
   {question:"Who created this scuplture?", answer0: "R Mutt", answer1: "Jeff Koons", answer2: " Damien Hirst", answer3: "John Baldessari", correctAnswer: "2", imageUrl:"http://www.damienhirst.com/images/hirstimage/DHS16239full_771_0.jpg", imageAlt:"A cow with a rooster on it's back in a glass encased box of formaldehyde"
   },
   {question:"Who created this work of projection art?", answer0: "Ryan Trecartin", answer1: "Cory Arcangel", answer2: "Pippilotti Rist", answer3: "Bill Viola", correctAnswer: "1", imageUrl:"https://i.kinja-img.com/gawker-media/image/upload/s---fscGzKr--/c_fill,fl_progressive,g_center,h_358,q_80,w_636/18rh58swg9hsejpg.jpg", imageAlt: "Super Mario Brothers Clouds"},
   {question:"Who created this sculpture?", answer0: "Mike Kelley", answer1: "Paul McCarthy", answer2: "The Dino Twins", answer3: "Henry Moore", correctAnswer: "1", imageUrl:"http://3.bp.blogspot.com/_CwRT88Bu43Y/SUci6WdwYVI/AAAAAAAAEwg/jTTrvHN07y0/s400/santa.jpg", imageAlt:"An outdoor scuplture of Santa holding a butt plug"},
   {question:"Who created this performance/video piece?", answer0: "SuperFlex", answer1: "Gary Hill", answer2: " Matthew Barney", answer3: "Tony Oursler", correctAnswer: "0", imageUrl:"http://www.1301pe.com/common/images/news/floodedmcdonalds_bg.jpg", imageAlt:"A McDonalds submerged in water"},
   {question:"Who created this painting?", answer0: "Tracy Emin", answer1: "Anslem Kiefer", answer2: " Kara Walker", answer3: "Chris Ofili", correctAnswer: "3", imageUrl:"http://africanah.org/wp-content/uploads/2014/12/OfiliVirginMary1996.jpg", imageAlt:"A painting of a black woman, painted in a suggestive manner, with blotches of cow dung on the canvas"},
   {question:"Who created this installation?", answer0:"Carston Höller", answer1:"Yayoi Kusama", answer2:"Olafur Eliasson", answer3:"Antony Gormley", correctAnswer:"4",
   imageUrl:"https://www.centrobotin.org/wp-content/uploads/2017/05/MEGAMENU-PROGRAMACION-Holler.jpg", imageAlt:"An installation room filled with black silhouette sculptures staring into nowhere"}
  ]

const QUIZ = {
  questions: QUESTIONS_STORE,
  currentQuestion: 0,
  score: 0
}

const renderStartPage = () =>{
  //render start page with short overview and start button
  $('body').html(`
  <img id="questionImage" src="/images/Laurie_Anderson.jpg" alt="Laurie Anderson US Tour 1983">
   <header role="banner">
      <h1>Quiz</h1>
    </header>
    <main role="main">
      <section role="region" id="startPage">
        <h2>How well do you know your contemporary artists?</h2>
        <nav role="navigation">
          <input type="button" role="button" id="startButton" value="Start">
        </nav>
      </section>
    </main>
  `)
  $('nav').on('click', event=>{
    console.log("start quiz")
     $('body').html('') //clear page
    renderQuestionPage(QUIZ.questions[0])
  }

  )
 // console.log('`renderStartPages` ran')
}

const renderQuestionPage = (question) =>{
    $('body').append(`
     <img id="questionImage" src="${question.imageUrl}" alt="${question.imageAlt}">
    <header role="banner">
        <h1>Quiz</h1>
      </header>
      <main role="main">
      <section role="region" id="questionPage">
        <section role="region" id="feedback">
        </section>
        <section role="region" id="question">
          <h3 id="currentQuestion">Question ${QUIZ.currentQuestion+1} of ${QUIZ.questions.length}</h3>

          <h2 id="questionText">${question.question}</h2>
        </section>
        <section role="region" id="userInput">
          <form role="form" id="questionForm" action="#">
            <fieldset>
              <!-- <legend>Answers</legend> -->
              <ul>
                <li>
                  <input type="radio" name="answer" id="answer1" value="0" required>
                  <label for="answer1" class="questionLabel">${question.answer0}</label>
                </li>
                <li>
                  <input type="radio" name="answer" id="answer2" value="1">
                  <label for="answer2">${question.answer1}</label>
                </li>
                <li>
                  <input type="radio" name="answer" id="answer3" value="2">
                  <label for="answer3">${question.answer2}</label>
                </li>
                <li>
                  <input type="radio" name="answer" id="answer4" value="3">
                  <label for="answer4">${question.answer3}</label>
                </li>
              </ul>
            </fieldset>
            <input type="submit">
          </form>
        </section>
      </section>
      `)
    $('form').submit(event=>{
      event.preventDefault();
      const selectedAnswer = $('input[name=answer]:checked').val()
      console.log(`selectedAnswer = ${selectedAnswer}`)
      checkScore(selectedAnswer)
    })
}

const renderFinalPage = () =>{
  // render final page with final score and start button
  $('body').append(`
  <img id="finalImage" src="https://dl.dropboxusercontent.com/s/4lpz6lkda8s6gny/Tracey_Emin.jpg?dl=0" alt="Tracy Emin's installation of her bed">
   <header role="banner">
      <h1>Quiz</h1>
   </header>
   <main role="main">
      <section role="region" id="finalPage">
          <h2>You've completed the quiz.</h2>
          <h3 id="score">Your score was ${QUIZ.score} out of ${QUIZ.questions.length}</h3>
          <nav role="navigation" id="returnStartPage">
            <input type="button" role="button" id="resetButton" value="Start Over">
          </nav>
        </section>
   </main>
  `)
  $('nav').on('click', event =>{
// use better event handler, .on('submit' ..
    $('body').html('') //clear page
    renderStartPage()
  }
  )
  console.log('`renderFinalPage` ran')
}

const checkScore = (submittedAnswer) =>{
  console.log(QUIZ.questions[QUIZ.currentQuestion].correctAnswer, submittedAnswer)
  if(QUIZ.questions[QUIZ.currentQuestion].correctAnswer == submittedAnswer){
    QUIZ.score++
    popUp('correct')
  }else{
    console.log("answer incorrect")
    popUp('incorrect')
  }
 // return QUIZ.score
  console.log('`currentScore` ran')
}

const popUp = (popUpAnswer) =>{
  if (popUpAnswer == 'correct'){
      console.log('correct answer!!')
        $('section').html(`
        <section role="region" id="correctAnswerPage">
          <h2>Correct!!</h2>
          <h3>You have ${QUIZ.score} correct answer(s)</h3>
          <nav role="navigation">
            <input type="button" role="button" id="next" value="next">
          </nav>
        </section>

    `)
    $('nav').on('click', event=>{
      console.log("next question")
       $('body').html('') //clear page
      QUIZ.currentQuestion++
      console.log(`current question: ${QUIZ.currentQuestion}`)
      if (QUIZ.currentQuestion < QUIZ.questions.length) {
        renderQuestionPage(QUIZ.questions[QUIZ.currentQuestion])
      } else {
        renderFinalPage()
      }
    }
    )
  }else{
    console.log('incorrect answer!!')
        $('section').html(`
        <section role="region" id="falseAnswerPage">
          <h2>You Are Incorrect!</h2>
          <h3>You have ${QUIZ.score} correct answer(s)</h3>
          <nav role="navigation">
            <input type="button" role="button" id="next" value="next">
          </nav>
        </section>
    `)
    $('nav').on('click', event=>{
      console.log("next question")
       $('body').html('') //clear page
      QUIZ.currentQuestion++
      console.log(`current question: ${QUIZ.currentQuestion}`)
      if (QUIZ.currentQuestion < QUIZ.questions.length) {
        renderQuestionPage(QUIZ.questions[QUIZ.currentQuestion])
      } else {
        renderFinalPage()
      }
    }
    )

}
}

$(renderStartPage)
