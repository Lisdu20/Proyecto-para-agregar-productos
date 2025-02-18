const productos =[];

document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const codigo =document.getElementById('codigo').value;
    const categoria =document.getElementById('categoria').value;
    const stock =parseFloat(document.getElementById('stock').value);

    let existe = productos.some(producto => producto.codigo === codigo);

    if (existe) {
        mostrarMensaje('Error: Código repetido', 'error');
      } else {
        productos.push({ codigo, nombre, categoria, stock });
        mostrarMensaje('Producto agregado correctamente', 'exito');
        e.target.reset();
      }
    });

    function mostrarMensaje(texto, tipo) {
        const mensaje = document.getElementById('mensaje');
        mensaje.textContent = texto;
        mensaje.className = `mensaje ${tipo}`;
        mensaje.style.display = 'block';
        setTimeout(() => mensaje.style.display = 'none', 3000);
      }

