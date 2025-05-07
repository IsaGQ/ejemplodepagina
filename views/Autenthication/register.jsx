import React from "react";

const Autenthication = () => {
    return (
        <>
            <div>
                Login
            </div>
            <div className="mb-3">
                <form className="col-md-12">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </form>
            </div>
            <div>
                <form className="col-md-12">
                    <input type="text" className="form-control" id="nama" placeholder="Introduzca su nombre" />
                </form>
            </div>
            <div>
                <form className="col-md-12">
                    <input type="text" className="form-control" id="lastname" placeholder="Introduzca sus apellidos" />
                </form>
            </div>
            <div>
                <form className="col-md-12">
                    <input type="text" className="form-control" id="email" placeholder="Introduzca su email" />
                </form>
            </div>
            <div>
                <form className="col-md-12">
                    <input type="text" className="form-control" id="password" placeholder="Introduzca su password" />
                </form>
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">Registrarse</button>
            </div>

        </>

    );
}
export default Autenthication;