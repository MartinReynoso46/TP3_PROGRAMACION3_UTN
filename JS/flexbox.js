        const productos = [
            { id: 1, nombre: "Mesa Ratona", categoria: "Carpintería" },
            { id: 2, nombre: "Estante Flotante", categoria: "Carpintería" },
            { id: 3, nombre: "Silla de Pino", categoria: "Carpintería" },
            { id: 4, nombre: "Código C++", categoria: "Programación" },
            { id: 5, nombre: "App React", categoria: "Programación" },
            { id: 6, nombre: "Script JS", categoria: "Programación" }
        ];

        const container = document.getElementById('container-cards');
        const btn = document.getElementById('btn-interact');
        let resaltado = false;

        function renderCards() {
            container.innerHTML = '';
            productos.forEach(prod => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <h3>${prod.nombre}</h3>
                    <p>ID: ${prod.id}</p>
                    <p><strong>${prod.categoria}</strong></p>
                `;

                if (resaltado && prod.id % 2 !== 0) {
                    card.classList.add('highlight');
                }
                
                container.appendChild(card);
            });
        }

        btn.addEventListener('click', () => {
            resaltado = !resaltado;
            btn.textContent = resaltado ? "Quitar Resaltado" : "Resaltar impares";
            renderCards();
        });

        renderCards();