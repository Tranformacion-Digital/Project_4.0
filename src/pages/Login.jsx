import React, {useRef} from "react";
import '@styles/Login.scss';
import logo from '@Logos/UD.png';

const dataUsers = [
    {
        "id": 1,
        "user": "admin",
        "password": "admin",
        "email": "admin@email.com"
    },
    {
        "id": 2,
        "user": "Jsalamanca",
        "password": "HolaMundo",
        "email": "juan.salamanca@email.com"
    },
    {
        "id": 3,
        "user": "Cmedina",
        "password": "abc1234yz",
        "email": "carlos.medina@email.com"
    }
];

const users = dataUsers.map(data => data.user);
const passwords = dataUsers.map(data => data.password)

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
        // event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('user'),
            password: formData.get('password')
        }
        
        let username = users.find(user => user == data.username);
        let password = passwords.find(pass => pass === data.password)

        if(typeof(username) === 'string' && typeof(password) === 'string'){
            // alert(`OK, user: ${username} y password: ${password}`);
        } else {
            event.preventDefault();
            // alert(`Falla, user: ${username} y password: ${password}`);
            const p = document.getElementById('info');
            p.innerHTML = 'Falla usuario o contrasena'
        }
    }

    return (
        <div className='user-data--container'>
        <section className="logo--container">
            <img src={logo} alt='Logo UD'  />
        </section>

        <section className="data-container">
            <form action={'/Home'} className="user-info" ref={form}>
                <p>Usuario</p>
                <input type="text" name="user" placeholder="username" />
                <p>Contraseña</p>
                <input type="password" name="password" placeholder="********" />
                <button type="submit" id="button-submit" onClick={handleSubmit}>
                    Ingresar
                </button>
            </form>

            <p id="info"></p>

            <div className="user-create">
                <a href="/RecorveryPassword">¿Olvido la contraseña?</a>
                <a href='/CreateUser'>Crear usuario</a>
            </div>
        </section>
    </div>
    );
}

export default Login;
