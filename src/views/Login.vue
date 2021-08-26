<template>
  <div class="login">
    <div class="section-top-border">
      <div class="row">
        <div class="col-lg-8 col-md-8 center">
          <h3 class="mb-30">Log in</h3>
          <form v-on:submit.prevent="submit()">
            <div class="mt-10">
              <input
                type="email"
                name="EMAIL"
                v-model="newSessionParams.email"
                placeholder="Email address"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Email address'"
                required
                class="single-input"
              />
            </div>
            <div class="mt-10">
              <input
                type="password"
                name="PASSWORD"
                v-model="newSessionParams.password"
                placeholder="Your password"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Your password'"
                required
                class="single-input"
              />
            </div>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
