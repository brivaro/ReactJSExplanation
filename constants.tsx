import { SlideData } from './types';

export const SLIDES_DATA: SlideData[] = [
  {
    title: 'El Reto y Nuestra Solución',
    content: [
      '🎯 <b>El Punto de Partida:</b> Crear un curso interactivo para SCORM. El método tradicional: múltiples archivos HTML enlazados. 🔗',
      '🤔 <b>El Problema:</b> Código repetido, desorganizado y difícil de mantener. ¡Un pequeño cambio implicaba editar muchísimos archivos! 😫',
      '💡 <b>Nuestra Propuesta:</b> Una <span class="font-bold text-cyan-400">Aplicación de Página Única (SPA)</span>. Todo vive en un solo `index.html`, gestionado dinámicamente con JavaScript.',
      '✅ <b>El Resultado:</b> Un proyecto <span class="font-bold text-green-400">limpio, modular y escalable</span> que funciona como un paquete SCORM perfecto. Para el navegador, ¡sigue siendo un `index.html` normal! ✨',
    ],
  },
  {
    title: 'El "Ingrediente Secreto": React sin Compilación',
    content: [
      '🪄 <b>La "Magia" es simplicidad:</b> Evitamos entornos complejos como `create-react-app` que necesitan compilar. Fuimos mucho más directos.',
      '📚 <b>React como una Librería Más:</b> En `index.html`, incluimos React con una simple etiqueta `<script>`, ¡igual que cualquier otra librería!',
      {
        type: 'code',
        language: 'html',
        code: `<!-- index.html -->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>`,
      },
      '🚀 <b>¿Qué significa esto?:</b> Usamos <span class="font-bold text-cyan-400">React directamente en el navegador</span>. Es nuestra herramienta para crear y manipular HTML con JavaScript, sin que un framework se apodere de todo.',
      '📖 Para saber más, puedes visitar la <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:underline">documentación oficial de React</a>.',
    ],
  },
  {
    title: 'La Clave de la Organización: Los Componentes',
    content: [
      '😵 <b>El problema del "HTML gigante":</b> Un solo archivo con todo el contenido es una pesadilla para depurar.',
      '🧩 <b>Nuestra solución: ¡Componentes!</b> Dividimos la interfaz en piezas pequeñas y reutilizables. Cada "bloque" vive en su propio archivo.',
      {
        type: 'list',
        ordered: false,
        items: [
          'El menú lateral es un componente. ➡️',
          'Cada diapositiva (HomeSlide.js) es un componente. 📄',
          'Incluso las tarjetas que giran (FlippableCard.js) son componentes. 🔄',
        ],
      },
      '🏆 <b>Ventaja Principal:</b> <span class="font-bold text-amber-400">Organización y reutilización.</span> ¿Cambiar el quiz? Solo editas `Quiz.js`. Usamos el mismo componente `FlippableCard` en múltiples sitios sin reescribir código. ¡Menos trabajo, menos errores!',
    ],
  },
  {
    title: 'Construyendo la Web con JavaScript: React.createElement',
    content: [
      '🏗️ <b>¿Qué es `React.createElement`?</b> Es la forma en que React crea elementos HTML, pero usando JavaScript.',
      'Una traducción simple: Esto en HTML...',
      {
        type: 'code',
        language: 'html',
        code: `<h1 class="titulo">Hola Mundo</h1>`,
      },
      '...es equivalente a esto en React:',
      {
        type: 'code',
        language: 'javascript',
        code: `React.createElement('h1', { className: 'titulo' }, 'Hola Mundo');`,
      },
      '🤔 <b>¿Por qué usarlo?</b> Porque nos da <span class="font-bold text-purple-400">superpoderes de programación</span>: bucles, condicionales (`if/else`) e interactividad de forma mucho más limpia que con JavaScript tradicional.',
    ],
  },
  {
    title: 'Conclusión: Lo Mejor de Dos Mundos',
    content: [
      '🤝 <b>Lo Mejor de Dos Mundos:</b> Combinamos la <span class="font-bold text-gray-300">simplicidad de HTML/JS</span> con el <span class="font-bold text-cyan-400">poder de React.</span>',
      {
        type: 'list',
        ordered: true,
        items: [
          '<b>Organización Superior:</b> Código separado por responsabilidades (componentes). Fácil de mantener. 🗂️',
          '<b>Reutilización de Código:</b> Creamos componentes una vez, los usamos en todas partes. Menos código, menos errores. ♻️',
          '<b>Experiencia de Usuario Dinámica:</b> Interfaces fluidas e interactivas sin recargar la página. ⚡',
          '<b>Compatibilidad Total:</b> Todo se ejecuta en un `index.html`, garantizando compatibilidad con sistemas como SCORM. ✅',
        ],
      },
      '🎯 <b>En resumen:</b> Usamos herramientas modernas para construir un producto final clásico y robusto.',
    ],
  },
];