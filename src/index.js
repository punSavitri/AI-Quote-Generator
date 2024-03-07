//alert("testing..");
function displayQuote(response) {
  console.log(response.data.answer);
  //adding typewriter plugin to animate text
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: ""
  })
}

function generateQuote(event) {
  event.preventDefault();

  let userInstructionInput = document.querySelector("#user-instruction-input-field");
  let value = userInstructionInput.value;
  console.log(value);

  let apiKey = "4c3a38t82d64bfo4330f17ff02bfbd97";
  let context = "You are a expert AI assistant to personalised quote based on user personal interest.Your mission is to generate a short quote in basic HTML and separate line with a <br/>.Make sure your answer is clear and precise . Please include author's name wrap inside single quotation symbol a <strong> element at the bottom of the answer. Add - before author's name. Make sure to follow the user instruction.";
  //generating the poem based on whatever the user typed in the input field 
  let prompt = `User instruction:Generate a famous, inspirational, motivational quote about ${userInstructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  //assigning variable and inject into HTML
  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="blink">⏳Generating your quote about ${userInstructionInput.value}</div>`;

  //make a api call
  axios.get(apiUrl).then(displayQuote);


}
let quoteGeneraterFormElement = document.querySelector("#quote-generator");
quoteGeneraterFormElement.addEventListener("submit", generateQuote);