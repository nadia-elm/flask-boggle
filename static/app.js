

let $Form = $('#guessForm')
let $score = $('#score')
let $results = $('#results')
let score = 0
let $timer = $("#timer")
let seconds = 30
let $input = $("#word")
 let $guess = $("#word").val();
let $startBtn =$('#start')

$startBtn.on('click',function(e){
  e.preventDefault()
  timer()
})





function timer(){
  setInterval(() => {
    if( seconds > 0 ){
      seconds--
      $timer.text(`Time Remaining : ${seconds}`)
      $input.show()
    }
    else{
      clearInterval()
      // $input.hide()
      window.location.reload()


    }

},1000)
}

$Form.submit(async function (evt){
  evt.preventDefault()
   $guess = $("#word").val();
  let res = await axios.get('/check_word', {params : {'guess' : $guess}})
  let response = res.data.result 
  checkWord(response)
   $input.val('');
 
})

function checkWord(result){
  if(result == 'ok'){
    $results.text(' correct  word!')
    score += $guess.length;
    $score.text(`Score is : ${score}`)
     
  }
  else if ( result == 'not-on-board'){
    $results.text( `${$guess} not-on-board `)
      
  }
  else{
    $results.text(`${$guess}  is not-word`)
      
  } 
 
}


async function saveScore(){
  await axios.post('/check_score', {
    params :{
      'score' : score
    }
  })
}
 




