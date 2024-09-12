import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";

import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: "jwt-compositionapi.firebaseapp.com",
  projectId: "jwt-compositionapi",
  storageBucket: "jwt-compositionapi.appspot.com",
  messagingSenderId: "837842723586",
  appId: "1:837842723586:web:6ef43a0c3f02898387181b"
};


initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'light',
          cssLayer: false
      }
    }
});

app.mount('#app')
