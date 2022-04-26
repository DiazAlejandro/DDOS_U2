const venta_main = (() => {
    //Recuperar las etiquetas del HTML 
    const $button = document.getElementById("guardar");
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
        cliente_http.post('http://localhost:8090/api/v1/venta/',
            {
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

    $button.addEventListener("click", fnCallbackClick);

    const formatDate = (date) => {
        let formatted_date = date.substr(0, 10);
        return formatted_date;
    }

    const funcionExitoGet = (response) => {
        for (let index = 0; index < response.data.length; index++) {
            const idVenta = response.data[index].idVenta;
            const fechaVenta = response.data[index].fechaVenta;
            const nombreCliente = response.data[index].nombreCliente;
            const producto = response.data[index].producto;
            const cantidad = response.data[index].cantidad;
            const precioUnitario = response.data[index].precioUnitario;
            const precioTotal = response.data[index].precioTotal;
            venta_elements.createRow(idVenta, fechaVenta, nombreCliente, producto, cantidad, precioUnitario, precioTotal);
        }
        console.log(response);
    }

    const funcionExitoPost = (response) => {
        const httpResponse = response.httpCode;
        if (httpResponse >= 200 && httpResponse <= 299) {

        } else {
            alert(response);
        }
    }

    const funcionFallo = () => {

    }

    cliente_http.get('http://localhost:8090/api/v1/venta/', funcionExitoGet, funcionFallo);

})();

