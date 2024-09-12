<template>
  <div class="centered-container">
    <div class="surface-card border-round w-full signup">
      <div class="pokemon text-center">
        <img src="\Frame11.png" alt="logo" />
      </div>
      <div class="form-auth">
        <div class="text-center mb-5 shadow nav-container">
          <Message v-if="authStore.error" severity="warn">{{ authStore.error }}</Message>
          <router-link
            to="/"
            class="no-underline nav-link"
            :class="{ route: $route.path === '/' }"
          >
            Sign up
          </router-link>

          <router-link
            to="/signin"
            class="no-underline nav-link"
            :class="{ route: $route.path === '/signin' }"
          >
            Sign in
          </router-link>
        </div>

        <div class="flex column">
          <div class="info-input">
            <label for="email" class="block text-900 font-medium"
              ><span class="star">*</span>Login</label
            >
            <InputText
              id="email"
              v-model="email"
              type="text"
              placeholder="Input login"
              class="input"
            />
          </div>
          <div class="info-input">
            <label for="password" class="label-with-star"
              ><span class="star">*</span>Password</label
            >
            <InputText
              id="password"
              v-model="password"
              type="password"
              placeholder="Input password"
              class="input"
            />
          </div>
          <div class="info-input">
            <label for="confirmPassword" class="block text-900 font-medium"
              ><span class="star">*</span>Password confirmation</label
            >
            <InputText
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              placeholder="Input password again"
              class="input"
            />
          </div>
          <Message v-if="passwordError" severity="error">{{ passwordError }}</Message>
          <Loader v-if="authStore.loader" />
          <Button v-else label="Sign up" class="w-full btn" @click="signUp"></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

import Loader from "../components/myLoader.vue";

const authStore = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const passwordError = ref("");

const signUp = async () => {
  passwordError.value = "";

  if (password.value !== confirmPassword.value) {
    passwordError.value = "Пароли не совпадают";
    return;
  }

  await authStore.auth({ email: email.value, password: password.value }, "signup");
  router.push("/home");
};
</script>
