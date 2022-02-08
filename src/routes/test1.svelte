<script>
  import DeleteModal from "../components/Modal.svelte";
  import {onMount} from "svelte"

  

  onMount(async()=>{
    show();
    
  })
  

  const show=()=>{
        var el =document.getElementById("showModal");
        el.classList.toggle("hidden")
    };
</script>

<DeleteModal show={show}/>
