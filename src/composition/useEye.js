import { ref } from "vue";

export default function useEye() {
  const passwordInputType = ref('password');

  const iconEye = ref(false);

  function handleEye() {
    if (passwordInputType.value === 'password') {
      passwordInputType.value = 'text';
      iconEye.value = true
    } else {
      passwordInputType.value = 'password';
      iconEye.value = false;
    }
  }

  return {
    passwordInputType,
    handleEye,
    iconEye,
  };
}