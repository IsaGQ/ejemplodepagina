import React from "react";

const Autenthication = () => {
    return (
        <>
            <div>
                Login
            </div>
            <div className="mb-3">
                <form className="col-md-12">
                    <label>Username: </label>
                    <input type="text" className="form-control" id="username" placeholder="Username" />
                </form>
            </div>
            <div className="mb-3">
                <form className="col-md-12">
                    <label>Password: </label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </form>
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">Enviar</button>
            </div>

        </>

    );
}
export default Autenthication;