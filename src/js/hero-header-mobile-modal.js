(() => {
  const refs = {
    openModalBtn: document.querySelector('[header-mobile-modal-open]'),
    closeModalBtn: document.querySelector('[header-mobile-modal-close]'),
    modal: document.querySelector('[header-mobile-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
