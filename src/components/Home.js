// src/components/Home.js
import React from 'react';
import { Box, Image, Progress, Heading } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Heading as="h1" size="xl">
        Bienvenido a Gestionador de Tareas
      </Heading>
      <Image src="/imagen1.png" alt="Descripción de la imagen" />
      <Heading as="h1" size="md">
        Podrás gestionar tus tareas de forma eficiente para cumplir con tus pendientes del día a día
      </Heading>
      <Progress value={80} />
    </Box>
  );
};

export default Home;
