<script>
	import { goto } from '$app/navigation';
    import {auth} from "../firebase"
  import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
  import {onMount} from 'svelte'
  import { dataStore } from "../stores"



  onMount(async()=>{
    render();
  })
  let phone,otp,bName, dName, coderes
  function render(){
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  'size': 'invisible',
  'callback': (response) => {
    console.log(response);
  }}, auth);
    recaptchaVerifier.render()

  }

const send=()=>{
    const appVerifier = window.recaptchaVerifier;
    console.log(appVerifier);
    let x="+91"+ phone
  signInWithPhoneNumber(auth, x, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      coderes = confirmationResult;
      console.log(coderes);
      document.getElementById("otpDiv").classList.remove("invisible")
      document.getElementById("phone").value=phone
      // ...
    }).catch((error) => {
      console.log(error.message);
    });
}

const verify=()=>{
  document.getElementById("otpDiv").classList.add("invisible")
  coderes.confirm(otp).then((result) => {
  // User signed in successfully.
  document.getElementById("verifyDiv").classList.remove("invisible")
    var btn =document.getElementById("submit")
    btn.classList.remove("cursor-not-allowed")
    btn.disabled=false
  const user = result.user;
  console.log(user);
  // ...
}).catch((error) => {
  alert(error.message)
});
}

const handleSubmit = () => {
    const obj ={...$dataStore, bName:bName, dName:dName, contact:phone }
        $dataStore=obj;
        console.log($dataStore);
		// goto('/step-3');
	};
</script>

<div class="flex items-center justify-center w-auto h-screen  ">
	<div class="bg-gray-50 grid md:grid-cols-2 justify-center items-center pt-20 lg:pt-0 rounded-lg shadow-lg w-full h-full md:w-4/5 lg:h-3/4">
		<p class="text-center text-3xl mx-auto font-bold  text-gray-600 ">
			You are halfway there! <br />
			<span class="text-lg text-gray-400 font-normal">Just fill out the form!</span>
		</p>
            
        <form class="w-full">
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Business Name/Your Name :</label>
                <input type="text" bind:value={bName} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your business name" >
            </div>
            <div class="mb-6">
                <label for="disName" class="block mb-2 text-sm font-medium text-gray-900 ">Display Name :</label>
                <input type="text" bind:value={dName} id="disName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your display name">
            </div>
            <div class="w-full flex justify-center" id ="recaptcha-container"></div>
              <div class="">
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 ">Contact No. :</label>
                <div class="grid grid-cols-4">
                    <input type="number" id="phone" bind:value={phone} class="w-full col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 " placeholder="Your Contact No.">
                    <button on:click|preventDefault={send} class="mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto md:px-1 lg:px-3 py-2.5 text-center">Get OTP</button>
                </div> 
            </div>
            <div id="otpDiv" class="w-full invisible bg-green-100 px-2 py-0.5 flex items-center"><img class="w-4 h-4 mr-4" src="src\images\check.png" alt=""><p class="text-gray-600 text-sm font-medium">Message sent</p></div>
            <div class="">
                <label for="otp" class="block mb-2 text-sm font-medium text-gray-900 ">Verify your contact No. :</label>
                <div class="grid grid-cols-4">
                    <input type="number" id="otp" bind:value={otp} class="w-full col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 " placeholder="Verification OTP">
                    <button on:click|preventDefault={verify} class="mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center">Verify</button>
                </div>                
            </div>
            <div id="verifyDiv" class="w-full invisible bg-green-100 px-2 py-0.5 flex items-center"><img class="w-4 h-4 mr-4" src="src\images\check.png" alt=""><p class="text-gray-600 text-sm font-medium">Contact no. verifed.</p></div>
            <div class="flex mt-2 justify-center">
                <button id="submit" on:click|preventDefault={handleSubmit} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-not-allowed" disabled>Submit</button>
            </div>
        </form>
	</div>
</div>

<style>
    input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>