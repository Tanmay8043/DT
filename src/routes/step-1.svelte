<script>
import { goto } from "$app/navigation";
import { dataStore } from "../stores"

    let value="business"
    
    const handleClick=(type)=>{
        goto("http://localhost:3000/step-2")
        const obj ={...$dataStore, type:type }
        $dataStore=obj;
        console.log($dataStore);
    }

</script>

<div class="flex items-center justify-center h-screen ">
    <div class="bg-gray-50 lg:flex pt-36 lg:pt-0 items-center justify-evenly rounded-lg shadow-lg w-full h-full md:w-4/5 lg:h-3/4 ">
        <p class="text-center text-3xl font-bold text-gray-600 ">Start Your Digital Transformation</p>
        
        <div class=" ">
            <div class="container mb-2 mt-6 md:mt-12 flex mx-auto w-full items-center justify-center pb-20">
                <ul class="flex flex-col p-4">
                    <li class="border-gray-400 flex flex-row my-6" on:click={()=>{handleClick("business")}}>
                        <div class="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 rounded-2xl border-4 border-gray-300 hover:shadow ">
                            <div class="w-10 h-10 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-orange-400 justify-center items-center mr-2 p-2">icon</div>
                            <div class="flex-1 pl-1 mr-16">
                                <div class="font-medium text-gray-600">
                                    Business
                                    <br/>
                                    <p class="text-xs">Stores, Saloons, दुकान, cafe, stall, outlet, etc.</p>
                                </div>
                            </div>
                        </div>   
                    </li>
                    <li class="border-gray-400 flex flex-row mt-6" on:click={()=>{handleClick("individual")}}>
                        <div class="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 rounded-2xl border-4 hover:shadow border-gray-300">
                            <div class="w-10 h-10 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-orange-400 justify-center items-center mr-2 p-2">
                                icon
                            </div>
                            <div class="flex-1 pl-1 mr-16">
                                <div class="font-medium text-gray-600">
                                    Individual Brand
                                    <br/>
                                    <p class="text-xs">Doctor, Lawyer, Consultant, Professional, etc.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</div>