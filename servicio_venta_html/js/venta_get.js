const venta_get = (() => {
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

    const funcionFallo = (err) => {
        console.log(err);
    }

    cliente_http.get('http://localhost:8090/api/v1/venta/', funcionExitoGet, funcionFallo); 

})();

