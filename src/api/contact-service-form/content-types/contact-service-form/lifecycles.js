module.exports = {
  async afterCreate(event) {
      const { result } = event;

      try{
          await strapi.plugins['email'].services.email.send({
            to: 'pruebamdpemails@gmail.com',
            from: 'pruebamdpemails@gmail.com',
            subject: 'New Message Services',
            text: "Servicios",
            html:

  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
        h1{ font-size: 30px !important;}
        h2{ font-size: 25px !important;}
        h3{ font-size: 18px !important;}
        h4{ font-size: 16px !important;}
        p, a{font-size: 15px !important;}

        .claseBoton{
            width: 10%;
                background-color: #fcae3b;
                border: 2px solid #fcae3b;
                color: black;
                padding: 16px 32px;
                text-align: center;
                text-decoration: none;
                font-weight: bold;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                transition-duration: 0.4s;
                cursor: pointer;
        }
        span{
            font-family:Georgia, 'Times New Roman', Times, serif;



        }


        .claseBoton:hover{
            background-color: #000000;
            color: #ffffff;
        }
        .imag{
            width: 20px;
            height: 20px;
        }
        .contA{
            margin: 0px 5px 0 5px;
        }
        .afooter{
            color: #ffffff !important;
            text-decoration: none;
            font-size: 13px !important;
        }
    </style>
</head>
<body>
    <div style="width: 100%; background-color: #e3e3e3;">
        <div style="padding: 20px 10px 20px 10px;">
            <div style="background-color: #000000; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                <img src="https://res.cloudinary.com/dg80o93to/image/upload/v1684284050/logo_footer_small_3_8aedd87aed.png" alt="" style="width: 200px; height: 60px;">
            </div>

            <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                <h1>New Message</h1>
            <div class="text-email">
                <span style="display: block;">Nombre: ${result.nombre}</span>
                <span style="display: block;">Email: ${result.email}</span>
                <span style="display: block;">Telefono: ${result.telefono}</span>
                <span style="display: block;">Mensaje: ${result.mensaje}</span>
                <a style="margin-top: 50px;" class="claseBoton" href="mailto:${result.email}">Contact</a>
            </div>
            </div>

            <div style="background-color: #282828; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">

                <h4>Website MDP</h4>

                <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                    © 2023  todos los derechos reservados.
                </p>
            </div>


        </div>
    </div>
</body>
</html>
`
            ,
          })
      } catch(err) {
          console.log(err);
      }
  }
}
