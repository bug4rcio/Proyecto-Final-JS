const profesores = [
    { nombre: 'Juan', materia: 'Matemáticas' },
    { nombre: 'Miguel', materia: 'Español' },
    { nombre: 'María', materia: 'Inglés' },
    { nombre: 'Pedro', materia: 'Programación' },
    { nombre: 'Luis', materia: 'Física' },
    { nombre: 'Ana', materia: 'Química' },
];

// obtenemos nuestro div de nuestro HTML
//  Obtenemos por querySelector, en este caso al usar este metodo tenemos que decirle que es 
//  si es un id usamos # si es una clase usamos .

//  si queremos usar getDocumentById solo ponemos el nombre del id sin #
const profesoresSection = document.querySelector('#profesores-section');


// Creamos una función que se encargue de renderizar los profesores
// renderProfesores(); se encargará de mostrar los profesores en el HTML
const renderProfesores = () => {

    // profesoresSection se encargara de iniciar nuestra seccion en vacio
    profesoresSection.innerHTML = '';

    // recorremos el array de profesores y por cada profesor creamos un div
    profesores.forEach(profesor => {
        // aqui creamos un div por cada profesor
        const div = document.createElement('div');

        // le agregamos una clase al div llamada profesor, esta clase la usaremos para darle estilos y estara en nuestro css
        div.classList.add('profesor');

        // le agregamos elementos al div
        div.innerHTML = `
        <h3>${profesor.nombre}</h3>
        <p>${profesor.materia}</p>
        `;

        // agregamos el div a la seccion de profesores nuestra variable de arriba profesoresSection
        profesoresSection.appendChild(div);
    });
}

// llamamos a la función para que se ejecute y muestre los profesores
renderProfesores();


// creamos una función que se encargue de agregar un profesor
agregarProfesor = () => {
    // obtenemos el nombre del profesor
    const nombre = document.querySelector('#nombre').value;

    // obtenemos la materia del profesor
    const materia = document.querySelector('#materia').value;

    // validamos que los campos no esten vacios
    if (nombre === '' || materia === '') {
        alert('Debes llenar todos los campos');
        return;
    }

    // creamos un objeto con los datos del profesor
    const profesor = { nombre, materia };

    // agregamos el profesor al array de profesores
    profesores.push(profesor);

    // llamamos a la función para que se ejecute y muestre los profesores
    renderProfesores();

    // limpiamos los campos
    document.querySelector('#nombre').value = '';
    document.querySelector('#materia').value = '';
}