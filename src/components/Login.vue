<template>
  <div>
    <b-button v-b-modal.modalPrevent>Se connecter</b-button>

    <!-- Modal Component -->
    <b-modal
      id="modalPrevent"
      ref="modal"
      title="Se connecter"
      @ok="handleOk"
      @shown="clear"
    >
      <form @submit.stop.prevent="handleSubmit">
        <b-form-input
          type="text"
          placeholder="Entrez votre adresse mail "
          v-model="mail"
        />
        <b-form-input
          type="password"
          placeholder="Entrez votre mot de passe"
          v-model="password"
        />
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Login",
    data: function () {
        return {
            mail: "",
            password: "",
            names: []
        };
    },
  methods: {
    clear() {
      this.mail = "";
      this.password = "";
    },
    handleOk(evt) {
      evt.preventDefault();
      if (!this.mail) {
        alert("Veuillez rentrer votre adresse mail");
      } else {
        this.handleSubmit();
      }
    },
    handleSubmit() {
      this.names.push(this.name + " "+this.password);
      this.clear();
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  }
};
</script>
