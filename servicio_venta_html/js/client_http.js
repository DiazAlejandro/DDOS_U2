const cliente_http = (() => {
    //Promesas: Cuando podemos usar algo con algo 
    const _get = (url, fnExito, fnFallo) => {
        fetch(url).
            then((resp) => resp.json()).
            then(fnExito).catch(fnFallo);
    };

    //LLamada asíncrona 
    const _post = (url, payload, fnExito, fnFallo) => {
        fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then((resp) => resp.json())
            .then(fnExito)
            .catch(fnFallo);
    };

    const _postAsync = async (url, payload) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const responseJSON = await response.json();

        return responseJSON;
    };

    const _delete = async (url, id) => {
        fetch(url+id, {
            method: 'DELETE'
        });
    }

    const _update = (url, payload, fnExito, fnFallo) => {
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
        })
            .then((resp) => resp.json())
            .then(fnExito)
            .catch(fnFallo);
    };
    return {
        get: _get,
        post: _post,
        delete: _delete,
        update: _update
        //postAsync: _postAsync
    };

})();