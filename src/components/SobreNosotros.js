import React from 'react';
import { Divider, Image } from '@chakra-ui/react';

const SobreNosotros = () => {
  return (
    <div>
      <h1>Sobre Nosotros</h1>
      <p>
        Esta aplicación fue creada con el propósito de ayudarte a gestionar tus tareas de manera eficiente,
        optimizando tu tiempo y fomentando la disciplina en tus actividades diarias.
      </p>
      <Divider my={4} />
      <h2>Tecnologías Utilizadas</h2>
      <p>
        Desarrollado con tecnologías modernas, nuestro gestionador de tareas está impulsado por React y utiliza
        React Router para la navegación. Estas herramientas permiten una experiencia de usuario fluida y
        una estructura de aplicación robusta.
      </p>
      <Divider my={4} />
      <h2>Nuestro Compromiso</h2>
      <p>
        Nos esforzamos por proporcionar una aplicación intuitiva y fácil de usar que mejore tu productividad
        y te permita concentrarte en lo que realmente importa. ¡Gracias por ser parte de nuestra comunidad!
      </p>
      {/* Agrega la imagen a continuación */}
      <Image src="/imagen2.jpg" />
    </div>
  );
};

export default SobreNosotros;
