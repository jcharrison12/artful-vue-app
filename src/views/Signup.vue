<template>
  <div class="signup">
    <div class="section-top-border">
      <div class="row">
        <div class="col-lg-8 col-md-8 center">
          <h3 class="mb-30">Sign up</h3>
          <form v-on:submit.prevent="submit()">
            <div class="mt-10">
              <input
                type="text"
                v-model="newUserParams.username"
                name="username"
                placeholder="Username"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Username'"
                required
                class="single-input"
              />
            </div>
            <div class="mt-10">
              <input
                type="email"
                name="EMAIL"
                v-model="newUserParams.email"
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
                v-model="newUserParams.password"
                placeholder="Your password"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Your password'"
                required
                class="single-input"
              />
            </div>
            <div class="mt-10">
              <input
                type="password"
                name="PASSWORD"
                v-model="newUserParams.password_confirmation"
                placeholder="Password confirmation"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Password confirmation'"
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
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
