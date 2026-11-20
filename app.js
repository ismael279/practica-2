
async function cargarDatos() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
  
  const datos = await respuesta.json();

  
  console.log(datos);

  
  const lista = document.getElementById("lista");

  datos.slice(0, 10).forEach(post => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
    lista.append(tarjeta);
  });
}


async function cargarUsuarios() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await respuesta.json();

  const contenedor = document.getElementById("usuarios");

  usuarios.forEach(usuario => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    
    tarjeta.innerHTML = `
      <h2>${usuario.name}</h2>
      <p>Email: ${usuario.email}</p>
      <p>Ciudad: ${usuario.address.city}</p>
    `;
    contenedor.append(tarjeta);
  });
}

cargarDatos();
cargarUsuarios();
