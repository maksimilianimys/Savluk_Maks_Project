const modalOverlay = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal-content');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const formFields = document.querySelectorAll('#feedbackForm input');
const feedbackForm = document.getElementById('feedbackForm');
const modalTitle = document.getElementById('modalTitle');
const successMessage = document.getElementById('successMessage');

openModalButton.addEventListener('click', openModal);

openModalButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        openModal();
    }
});

closeModalButton.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    formFields.forEach(field => {
        field.classList.remove('error');
        field.placeholder = '';

        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
            field.placeholder = 'Поле обов\'язкове до заповнення';
        }
    });

    if (isValid) {
        feedbackForm.style.display = 'none';
        modalContent.classList.add('shrink');
        modalTitle.style.display = 'none';
        successMessage.style.display = 'block';
        feedbackForm.reset();
    }
});

formFields.forEach(field => {
    field.addEventListener('input', () => {
        if (field.classList.contains('error')) {
            field.classList.remove('error');
            field.placeholder = '';
        }
    });
});

function openModal() {
    modalOverlay.classList.add('active');
    modalContent.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    modalContent.classList.remove('active');
    document.body.style.overflow = '';

    formFields.forEach(field => {
        field.classList.remove('error');
        field.placeholder = '';
    });

    feedbackForm.reset();
    feedbackForm.style.display = 'block';
    modalContent.classList.remove('shrink');
    modalTitle.style.display = 'block';
    successMessage.style.display = 'none';
}