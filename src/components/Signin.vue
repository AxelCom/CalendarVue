<template>
    <div>
        <b-button v-b-modal.modal1>S'enregistrer</b-button>

        <!-- Modal Component -->
        <b-modal id="modal1" title="S'enregistrer">
            <p class="my-4">Enregistrez vous !</p>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "Signin"
    }
</script>