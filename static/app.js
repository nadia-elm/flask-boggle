let $answer = $("#word");
let word = $answer.val();
const $Form = $("#guessForm");
$Form.on("submit", function (e) {
  e.preventDefault();
  console.log($answer.val())
});
$Form.on('submit',handleSubmit)

async function handleSubmit(){
const resp = await axios.get('/check-guess',{params : {word : word}});
console.log(resp.data.result)

}

