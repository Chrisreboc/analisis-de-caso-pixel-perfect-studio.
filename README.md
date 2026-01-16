# ÁNALISIS PIXEL PERFECT STUDIO

## 1.DIAGNOSTICO TÉCNICO DE PROBLEMA

Los problemas presentes en los proyectos de Pixel Perfect Studio debido a la falta de una metodología de organización y modularización de estilos ha probocado:

- conflictos entre estilos: muchos componentes y clases presentes en sus páginas web y documentación son genericos y se repiten, esto genera conflictos debido a que hay más de un estilo que aplica a diferentes etiquetas o secciones, dejando solo los últimos presentes, ya que, CSS funciona en sistema cascada.

- dicultad para escalar componentes: no hay un orden claro, por lo que no se pueden diferenciar los componentes para ser reutilizados, generando un programación de tipo "espagetti".

- inconsistencias visuales: los elementos, ya sea etiquetas, clases y estilos, al ser generados por diversos programadores, no poseen una estructura fácil de seguir, esto lleva a incosistencias visuales a nivel de diseño y de estructura.

- perdida de tiempo: en un mundo comeptitivo, en Pixel Pefect Studio desarrolla muchos proyectos consecutivos, requiere de optimizar sus tiempos y sacar mayor fruto de ello. Los conflictos en los componentes llevan a que los desarrolladores tengan que invertir mucho tiempo en en comprender el código.

## 2.EVALUACIÓN Y JUSTIFICACIÓN DE METODOLOGÍA


1-

Hay tres metodologías que podrían ser aplicadas a este caso:

BEM (Block, Element, Modifier): Este sistema trabaja por bloque, elemento y modificador (form / button / button--submit) útil para modularizar componentes permitiendo ser reutilizados y mantiene elementos aninados, pero muchos componente pueden llevar a generación de clases muy complejas si es que hay muchos elementos anidados.

OOCSS: Este sistema sugiere separar la estructura de la piel (skin). En este caso un componente tendría sus características de tipo estructurales (margin, padding, border, etc.) pero en otro apartado (skin) tendríamos todos sus modificadores (background-color, color, carácteristicas de fuentes, etc.), pero vuelve más complejo HTML pues las etiquetas requieren multiples clases para un solo elemento.

SMACSS: Este sistema propone organizar los componentes en niveles, estas serían: bases (reset, base, tipografías), layouts (header, footer, sidebar), module (cards, accordion, form), state (estados para elementos interactivos), theme (dark-theme, light-theme), si bien organiza muchas características de las componentes, pero su subjetividad genera una línea borrosa respecto a la organizavión de ciertos componentes, y en proyectos de pequeña envergadura, fragmenta inecesariamente los componentes.

2-

La elección más optima, sería una hibrido entre la metodología BEM y SMACSS. Esto se debe a que con la anidación BEM el código sería más fácil de leer, ya que, componentes padres e hijos están relacionados mendiante sus clases y la meotodógia modular de SMACSS nos permite dar una organización a nuestros componentes, basados en sus características, ya sean, componentes base, layouts, modulos, estados, temas, los cuales serían independientes y apicables en todo el contenido. Una cosa rescatable de OOCSS es la cualidad de poseer skins, pero en este caso, lo aplicaremos conforme as SMACSS que trabaja por "theme" la cual sería una clasé de modifier pero independiente de la clase.

## 3.DISEÑO E IMPLEMENTACIÓN TÉCNICA

Acceso a repositorio Github: https://github.com/Chrisreboc/analisis-de-caso-pixel-perfect-stidio..git

deploy github: por añadir.

## 4.DOCUMENTACIÓN TÉCNICA INTERNA

Por añadir.

## 5. REFLEXIÓN FINAL DEL PROCESO

Por añadir.


