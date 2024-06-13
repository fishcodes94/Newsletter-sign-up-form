

const emailInputValue= document.querySelector("input");
const subscribeButton= document.querySelector("button");
const formContent= document.querySelector("#form-info");
const submissionPost= document.querySelector("#submission-post");
const dismissBtn= document.querySelector("#dismiss");

function submitEmail(){
    document.querySelector("#hiding-div").classList.add('hidden');
    document.querySelector("#submission-hiding").classList.remove('hidden');
    submissionPost.innerHTML = `A confirmation email has been sent to <strong> ${emailInputValue.value}. </strong> Please open it and click the button to confirm your subscription.`
    
}

formContent.addEventListener('submit', function(e){
    e.preventDefault();
    submitEmail();
})

dismissBtn.addEventListener('click', function(){

    document.querySelector("#submission-hiding").classList.add('hidden');
    document.querySelector("#hiding-div").classList.remove('hidden');
    emailInputValue.value= " ";
})