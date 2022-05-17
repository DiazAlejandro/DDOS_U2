const venta_update = (() => {
    //Recuperar las etiquetas del HTML 
    const $button_insert = document.getElementById("actualizar");
    const $inputIdVenta = document.getElementById("idVenta");
    const $inputFechaVenta = document.getElementById("fechaVenta");
    const $inputNombreCliente = document.getElementById("nombreCliente");
    const $inputProducto = document.getElementById("producto");
    const $inputCantidad = document.getElementById("cantidad");
    const $inputPrecioUnitario = document.getElementById("precioUnitario");
    const $inputPrecioTotal = document.getElementById("precioTotal");

    const fnCallbackClick = (target) => {
        const idVenta = $inputIdVenta.value;
        const fechaVenta = $inputFechaVenta.value;
        const nombreCliente = $inputNombreCliente.value;
        const producto = $inputProducto.value;
        const cantidad = $inputCantidad.value;
        const precioUnitario = $inputPrecioUnitario.value;
        const precioTotal = $inputPrecioTotal.value;
        cliente_http.update('http://localhost:8090/api/v1/venta/'+idVenta,
            {
                idVenta: idVenta,
                cantidad: cantidad,
                fechaVenta: fechaVenta,
                nombreCliente: nombreCliente,
                precioTotal: precioTotal,
                precioUnitario: precioUnitario,
                producto: producto
            }
            , funcionExitoPost, funcionFallo);
        venta_elements.createRow(idVenta, fechaVenta, nombreCliente, producto, cantidad, precioUnitario, precioTotal);
    };

    $button_insert.addEventListener("click", fnCallbackClick);

    const funcionExitoPost = (response) => {
        const httpResponse = response.httpCode;
        if (httpResponse >= 200 && httpResponse <= 299) {

        } else {
            alert(response);
        }
    }
    
    const funcionFallo = (err) => {
        console.log(err);
    }

    cliente_http.get('http://localhost:8090/api/v1/venta/', funcionExitoPost, funcionFallo);
})();

