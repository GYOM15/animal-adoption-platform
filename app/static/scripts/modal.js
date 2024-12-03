document.addEventListener("DOMContentLoaded", () => {
    const showModal = (animalData) => {
        const modalContainer = document.getElementById('modal-container');
        const modalTitle = document.getElementById('modal-title');
        const modalDetails = document.getElementById('modal-details');

        modalTitle.textContent = animalData.nom;

        modalDetails.innerHTML = `
            <div class="modal-content-container">
                <div class="modal-text">
                    <p>Espèce : ${animalData.espece}</p>
                    <p>Race : ${animalData.race}</p>
                    <p>Âge : ${animalData.age} ans</p>
                    <p>Email : ${animalData.email}</p>
                    <p>Description : ${animalData.description}</p>
                    <p>Adresse : ${animalData.adresse}</p>
                </div>
                <div class="modal-image">
                    <img src="${animalData.image}" alt="Image de ${animalData.nom}">
                </div>
            </div>
        `;

        modalContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    };

    const closeModal = () => {
        const modalContainer = document.getElementById('modal-container');
        modalContainer.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    };

    document.querySelectorAll('.contact-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.pet-card');
            const animalData = {
                nom: card.querySelector('h3').textContent,
                espece: card.getAttribute('data-espece'),
                race: card.getAttribute('data-race'),
                age: card.getAttribute('data-age'),
                email: card.getAttribute('data-email'),
                description: card.querySelector('p').textContent,
                adresse: card.getAttribute('data-adresse'),
                image: card.querySelector('img').getAttribute('src'),
            };

            showModal(animalData);
        });
    });

    document.querySelector('.close-modal').addEventListener('click', closeModal);

    document.getElementById('modal-container').addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});