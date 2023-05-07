<script>

 import { city } from './store';

 let ciudad;

 const getInput = ( ) => {
  city.setCity(ciudad)
 }

</script>

<input class="input" type="text" bind:value={ciudad} />
<button class="btn" on:click={getInput}>Añadir ciudad</button>

<style>
  .input {
    height: 35px;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin-right: 5px;
  }
  .btn {
    height: 35px;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
  }
</style>
