<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
.container {
  width: 400px;
  font-family: "Roboto", sans-serif;
  margin: auto;
}

a {
  color: black;
}

.centered-container {
  height: 96vh;
  position: relative;
}

.signup {
  gap: 20px;
  width: 400px;
  height: 474px;
  position: absolute;
  top: 50%;
  margin-top: -237px;
}

.signin {
  gap: 20px;
  width: 400px;
  height: 388px;
  position: absolute;
  top: 50%;
  margin-top: -194px;
}

.pokemon {
  margin-bottom: 20px;
}
.form-auth {
  border: 0.1px solid #ffffff;
  box-shadow: 0px 0px 16px 0px #3a3a3a1a;
  border-radius: 20px;
  padding: 24px;
}

.shadow {
  position: relative;
  box-shadow: 0 6px 4px -4px #3a3a3a1a;
}

.route {
  color: #365fac;
  border-bottom: 2px solid #365fac;
  position: absolute;
  top: 0;
  bottom: 0;
}

.nav-container {
  display: flex;
  justify-content: center;
  gap: 32px;
  height: 46px;
  align-items: center;
}

.nav-link {
  position: relative;
  line-height: 46px;
}

.input {
  width: 352px;
  height: 32px;
  border: 1px solid #d9d9d9 !important;
  border-radius: 2px !important;
}

.input.p-inputtext:focus {
  border-color: #d1e5f5 !important;
}

.input::placeholder {
  color: #d9d9d9 !important;
}

.column {
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  margin-top: 16px;
}

.info-input {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.btn {
  background-color: #365fac !important;
  border: 1px solid #365fac !important;
  border-radius: 2px !important;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043) !important;
}

.btn:focus {
  background-color: #1e90ff !important;
  border: 1px solid #1e90ff !important;
}

.btn:hover {
  background-color: #1e90ff !important;
  border: 1px solid #1e90ff !important;
}

label {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.label-with-star {
  display: inline-flex;
  align-items: center;
}

.star {
  font-family: SimSong;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: right;
  color: #ff4d4f;
  margin-right: 2px;
  position: relative;
  top: 0.14em;
}
</style>
