import { signUpService } from '../../../../lib/utils/auth'
import '../styles/SignIn.css'

function generatePassword() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$&?';
    const longitud = 10;
    let contrasena = '';

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[indiceAleatorio];
    }

    return contrasena;
}
const emailsArray = [
    {
        email: 'al200201@edu.uaa.mx',
        nombre: 'fabian',
        apellidoMaterno: 'rodriguez',
        apellidoPaterno: 'herrera',
        grupo: '1',
    },
    {
        email: 'al200202@edu.uaa.mx',
        nombre: 'fabian2',
        apellidoMaterno: 'rodriguez2',
        apellidoPaterno: 'herrera2',
        grupo: '2',
    },
]

export default function AddStudentsUI() {
    const signUpController = async (userEmail, pass) => {
        try {
            await signUpService(userEmail, pass)

        } catch (err) {
            console.log('error in 3rd layer of auth services', err)
        }
    }
    const accountCreationOrchestation = async (accountEmailArray) => {
        if (Array.isArray(accountEmailArray)) {
            const success = []
            accountEmailArray.map(async (account, i) => {
                const password = generatePassword()
                const temp = {
                    ...account,
                    contrasenia: password,
                    id: i,
                }

                await signUpController(account.email, password)

                const r = await fetch('http://localhost:8081/estudiante', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(temp),
                })
                const j = await r.json()
                const serverPayload = { ...j }
                console.log(serverPayload)
                
                if (Object.hasOwn(serverPayload, 'apellidoMaterno')) {
                    success.push(i)
                }
            })
            console.log('cuentas creadas con éxito', success.length)
        }
    }

    return (
        <div className='SignIn__Card'>
            <div className='SignIn__inputGroup'>
                <span className='SignIn__formTitle'>
                    Crear usuarios segun los correos que brindaron los estudiantes
                </span>

                <span className='SignIn__inputLine'>
                    <button
                        type='button'
                        className='SignIn__formBtn'
                        onClick={() => {
                            accountCreationOrchestation(emailsArray)
                        }}
                    >
                        crear emails
                    </button>
                </span>

            </div>
        </div>
    )
}