

let $Form = $('#guessForm')

let $guess = $('#word')
let submitBtn =document.getElementById('submitBtn')



// submitBtn.addEventListener('click',async function(e){
//   e.preventDefault();
//   // let word = $guess.val();
//   let response = await checkWord();
//   console.log(response)
// })
// // $Form.on('submit',function(e){
//   e.preventDefault()
//   let word = $guess.val();
//   console.log(word)
// })


async function checkWord(){
  let word = $guess.val()
  const res = await axios.get('/check_word',{params:{word :word}})
  // return res
  
}

// async function displayResult(){
//   await checkWord()
//   console.log(res.data.result)
// }

 $Form.on('submit',checkWord)
// // $Form.on('submit', function(e){
// //   e.preventDefault()
// //   checkWord
// // })