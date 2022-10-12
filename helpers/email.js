import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) => {
    /* console.log('DATOS', datos) */

    const { email, nombre, token } = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });

    //Informacion de email
    const info = await transport.sendMail({
        from: '"Up-Task - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Confirma tu Cuenta",
        text: "Compueba tu cuenta en UpTask",
        html: `<p>Hola ${nombre}, confirma tu cuenta en UpTask</p>
        <p>Tu cuenta ya esta casi lista, solo debes confirmarla en el siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
        </p>

        <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje.</p>
        `
    })
}

export const emailOlvidePassword = async (datos) => {
    /* console.log('DATOS', datos) */

    const { email, nombre, token } = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });

    //Informacion de email
    const info = await transport.sendMail({
        from: '"Up-Task - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Reestablece tu Password",
        text: "Reestablece tu Password",
        html: `<p>Hola ${nombre}, has solicitado reestablecer tu password.</p>
        <p>Sigue el siguiente enlace para generar un nuevo password:
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablece Password</a>
        </p>

        <p>Si tu no solicitaste el cambio, puedes ignorar este mensaje.</p>
        `
    })
}