//DOM ELEMENTS
const agregar = document.querySelector("#agregar");
const borrar = document.querySelector("#borrar");
const btnAgregar = document.querySelector("#btnAgregar");
const btnBorrar = document.querySelector("#btnBorrar");
const listado = document.querySelector("#listado");

//INTEGRANTES
const listaIntegrantes = [];

const actualizarLista = () => {
  listado.textContent = listaIntegrantes.join(", ");
};

btnAgregar.addEventListener("click", () => {
  if (agregar.value.trim()) {
    listaIntegrantes.push(agregar.value);
  } else {
    alert("🙀 El campo está vacío!");
    agregar.focus();
  }

  actualizarLista();
});

btnBorrar.addEventListener("click", () => {
  const index = listaIntegrantes.findIndex(
    (estudiante) => estudiante === borrar.value
  );

  if (borrar.value.trim() && index === -1) {
    alert("❓ Ups! Parece que no hay un integrante con ese nombre");
  } else if (borrar.value.trim()) {
    listaIntegrantes.splice(index, 1);
  } else {
    alert("🙀 El campo está vacío!");
    borrar.focus();
  }

  actualizarLista();
});