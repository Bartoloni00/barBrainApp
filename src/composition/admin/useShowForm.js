import { ref } from 'vue';

export default function useShowForm() {
  const formShowed = ref('add');

  function showAddForm() {
    formShowed.value = 'add';
  }

  function showUpdateForm() {
    formShowed.value = 'update';
  }

  function showDeleteForm() {
    formShowed.value = 'delete';
  }

  return {
    formShowed,
    showAddForm,
    showUpdateForm,
    showDeleteForm,
  };
}