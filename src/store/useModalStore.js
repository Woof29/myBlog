import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  const isVisible = ref(false);
  const modalComp = ref(null);
  const modalProps = ref({});

  const handleOpenModal = (comp, props) => {
    isVisible.value = true;
    modalComp.value = comp;
    modalProps.value = props;
  };

  const handleCloseModal = () => {
    isVisible.value = false;
    modalComp.value = null;
    modalProps.value = {};
  };

  return {
    isVisible,
    modalComp,
    modalProps,
    handleOpenModal,
    handleCloseModal,
  };
});
