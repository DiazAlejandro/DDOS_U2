const venta_main2 = (() => {
    //Recuperar las etiquetas del HTML 
    const $button = document.getElementById("guardar");
    const $inputIdVenta = document.getElementById("idVenta");
    const $inputFechaVenta = document.getElementById("fechaVenta");
    const $inputNombreCliente = document.getElementById("nombreCliente");
    const $inputProducto = document.getElementById("producto");
    const $inputCantidad = document.getElementById("cantidad");
    const $inputPrecioUnitario = document.getElementById("precioUnitario");
    const $inputPrecioTotal = document.getElementById("precioTotal");

    const fnCallbackClick = async (target) => {
        const idVenta = $inputIdVenta.value;
        const fechaVenta = $inputFechaVenta.value;
        const nombreCliente = $inputNombreCliente.value;
        const producto = $inputProducto.value;
        const cantidad = $inputCantidad.value;
        const precioUnitario = $inputPrecioUnitario.value;
        const precioTotal = $inputPrecioTotal.value;

        console.time("peticion A");
        cliente_http.post('http://localhost:8090/api/v1/venta/',
            {
                cantidad: cantidad,
                fechaVenta: fechaVenta,
                nombreCliente: nombreCliente,
                precioTotal: precioTotal,
                precioUnitario: precioUnitario,
                producto: producto
            },
            generateFnExito("peticion A"),funcionFallo
        );
            
        console.time("peticion B");
        cliente_http.post('http://localhost:8090/api/v1/venta/',
            {
                cantidad: cantidad,
                fechaVenta: fechaVenta,
                nombreCliente: nombreCliente,
                precioTotal: precioTotal,
                precioUnitario: precioUnitario,
                producto: producto
            },
            generateFnExito("peticion B"),funcionFallo
        );

        console.time("peticion C");
        cliente_http.post('http://localhost:8090/api/v1/venta/',
            {
                cantidad: cantidad,
                fechaVenta: fechaVenta,
                nombreCliente: nombreCliente,
                precioTotal: precioTotal,
                precioUnitario: precioUnitario,
                producto: producto
            },
            generateFnExito("peticion C"),funcionFallo
        );
        console.time("peticion D");
        cliente_http.post('http://localhost:8090/api/v1/venta/',
            {
                cantidad: cantidad,
                fechaVenta: fechaVenta,
                nombreCliente: nombreCliente,
                precioTotal: precioTotal,
                precioUnitario: precioUnitario,
                producto: producto
            },
            generateFnExito("peticion D"),funcionFallo
        );
    };

    $button.addEventListener("click", fnCallbackClick);


    const generateFnExito = (labelTime = '') => {
        const funtionChild = (response) => {
            console.timeEnd(labelTime);
            const httpResponse = response.httpCode;
            if (httpResponse >= 200 && httpResponse <= 299) {
                const idVenta = $inputIdVenta.value;
                const fechaVenta = $inputFechaVenta.value;
                const nombreCliente = $inputNombreCliente.value;
                const producto = $inputProducto.value;
                const cantidad = $inputCantidad.value;
                const precioUnitario = $inputPrecioUnitario.value;
                const precioTotal = $inputPrecioTotal.value;
                venta_elements.createRow(idVenta, fechaVenta, nombreCliente, producto, cantidad, precioUnitario, precioTotal);
            } else {
                alert(response);
            }
        }
        return funtionChild;
    };
    
    const funcionFallo = (err) => {
        console.log(err);
    }

})();

