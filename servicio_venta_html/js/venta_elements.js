const venta_elements = (() => {
    const $table = document.getElementById("ventas");
    const $tBody = $table.children[1];

    const _createRow = (idVenta, fechaVenta, nombreCliente, producto, cantidad, precioUnitario, precioTotal) => {
        const $tr = document.createElement("tr"); //Crear un renglón table row 
        // td --> Table Data 
        const $tdIdVenta = document.createElement("td");
        const $tdFechaVenta = document.createElement("td");
        const $tdNombreCliente = document.createElement("td");
        const $tdProducto = document.createElement("td");
        const $tdCantidad = document.createElement("td");
        const $tdPrecioUnitario = document.createElement("td");
        const $tdPrecioTotal = document.createElement("td");

        const $tdAcciones = document.createElement("td");
        const $buttonEdit = _editButton();
        const $buttonDelete = _deleteButton();

        $tdIdVenta.innerText = idVenta;
        $tdFechaVenta.innerText = fechaVenta;
        $tdNombreCliente.innerText = nombreCliente;
        $tdProducto.innerText = producto;
        $tdCantidad.innerText = cantidad;
        $tdPrecioUnitario.innerText = precioUnitario;
        $tdPrecioTotal.innerText = precioTotal;

        $tdAcciones.appendChild($buttonEdit);
        $tdAcciones.appendChild($buttonDelete);


        $tr.appendChild($tdIdVenta);
        $tr.appendChild($tdFechaVenta);
        $tr.appendChild($tdNombreCliente);
        $tr.appendChild($tdProducto);
        $tr.appendChild($tdCantidad);
        $tr.appendChild($tdPrecioUnitario);
        $tr.appendChild($tdPrecioTotal);
        $tr.appendChild($tdAcciones);
        $tBody.appendChild($tr);
    }

    const _editButton = () => {
        const $buttonEdit = document.createElement("button");
        $buttonEdit.innerText = "Editar";

        $buttonEdit.addEventListener("click", (event) => {
            const $tdParent = event.target.parentElement;
            const $trParent = $tdParent.parentElement;


            const $inputIdVenta = document.getElementById("idVenta");
            $inputIdVenta.value = $trParent.children[0].innerText;

            const $inputFechaVenta = document.getElementById("fechaVenta");
            $inputFechaVenta.value = $trParent.children[1].innerText;

            const $inputNombreCliente = document.getElementById("nombreCliente");
            $inputNombreCliente.value = $trParent.children[2].innerText;

            const $inputProducto = document.getElementById("producto");
            $inputProducto.value = $trParent.children[3].innerText;

            const $inputCantidad = document.getElementById("cantidad");
            $inputCantidad.value = $trParent.children[4].innerText;

            const $inputPrecioUnitario = document.getElementById("precioUnitario");
            $inputPrecioUnitario.value = $trParent.children[5].innerText;

            const $inputPrecioTotal = document.getElementById("precioTotal");
            $inputPrecioTotal.value = $trParent.children[6].innerText;

            $tBody.removeChild($trParent);
        });
        return $buttonEdit;
    }

    const _deleteButton = () => {
        const $buttonDelete = document.createElement("button");
        $buttonDelete.innerText = "Eliminar";

        $buttonDelete.addEventListener("click", (event) => {
            const $tdParent = event.target.parentElement;
            const $trParent = $tdParent.parentElement;
            console.log($trParent.children[0].innerText);
            //const $inputId = document.getElementById("id");
            //$inputId.value = $trParent.children[0].innerText;
            $tBody.removeChild($trParent);
        });
        return $buttonDelete;
    }

    return {
        createRow: _createRow
    }
})();