import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box } from '@chakra-ui/react';

const Tareas = () => {
  const [tareas, setTareas] = useState([
    { id: 1, descripcion: 'Hacer la compra', detalle: 'Comprar alimentos y productos necesarios.' },
    { id: 2, descripcion: 'Estudiar para el examen', detalle: 'Revisar los materiales de estudio y repasar conceptos clave.' },
    { id: 3, descripcion: 'Hacer ejercicio', detalle: 'Realizar una sesión de ejercicios físicos para mantenerse activo.' },
  ]);

  return (
    <div>
      <h1>Listado de Tareas</h1>
      <Accordion allowToggle>
        {tareas.map((tarea) => (
          <AccordionItem key={tarea.id}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {tarea.descripcion}
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {tarea.detalle}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Tareas;
