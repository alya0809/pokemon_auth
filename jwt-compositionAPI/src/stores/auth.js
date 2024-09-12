import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue';

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE;

export const useAuthStore = defineStore('auth', () => {
const userInformation = ref({
  token: '',
  email: '',
  userId: '',
  refreshToken: '',
  expiresIn: ''
})

  const error = ref('');
  const loader = ref(false);

  const auth = async (payload, type) => {
    const typeUrl = type === 'signup' ? 'signUp' : 'signInWithPassword'; 
    error.value = '';
    loader.value = true;
    try {
      let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${typeUrl}?key=${apiKey}`, {
        ...payload,
        returnSecureToken: true
      });
      userInformation.value = {
        token: 'response.data.idToken',
        email: 'response.data.email',
        userId: 'response.data.localId',
        refreshToken: 'response.data.refreshToken',
        expiresIn: 'response.data.expiresIn'
      }
      console.log(response.data);
      
    } catch(err) {
      switch (err.response.data.error.message) {
        case 'EMAIL_EXISTS':
          error.value = "Пользователь с таким email существует"
          break;
        case 'OPERATION_NOT_ALLOWED':
          error.value = "Операция запрещена"
          break;
        case 'EMAIL_NOT_FOUND':
          error.value = "Пользователь с таким email не обнаружен"
          break;
        case 'INVALID_PASSWORD':
          error.value = "Пароль неверный"
          break;
        default:
          error.value = "Ошибка"
          break;
      }
      throw error.value;
    } finally {
        loader.value = false;
    }
  }

  return { auth, userInformation, error, loader }
})
