const form = document.getElementById('form-persona');
const tablaCuerpo = document.getElementById('tabla-cuerpo');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    // Calcular IMC ($IMC = peso / altura^2$)
    const imc = (peso / (altura * altura)).toFixed(2);

    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
        <td>${altura} m</td>
        <td>${peso} kg</td>
        <td><strong>${imc}</strong></td>
        <td><button class="btn-delete">Quitar</button></td>
    `;

    fila.querySelector('.btn-delete').addEventListener('click', function() {
        fila.remove();
    });

    tablaCuerpo.appendChild(fila);
    form.reset();
});