# ÁNALISIS PIXEL PERFECT STUDIO

## 1.DIAGNOSTICO TÉCNICO DE PROBLEMA

Los problemas presentes en los proyectos de Pixel Perfect Studio son debido a la falta de una metodologías de organización y modularización de estilos, lo cual ha probocado los siguientes problemas:

- conflictos entre estilos: muchos componentes y clases presentes en sus páginas web y documentación son genéricos y se repiten, esto genera conflictos debido a que hay más de un estilo que aplica a diferentes etiquetas o secciones, dejando solo los últimos presentes, ya que, CSS funciona con un sistema de cascada (cascade).

- dicultad para escalar componentes: no hay un orden claro, por lo que no se pueden diferenciar los componentes para ser reutilizados, generando una programación de tipo "espagetti".

- inconsistencias visuales: los elementos, ya sea etiquetas, clases y estilos, al ser generados por diversos programadores, no poseen una estructura fácil de seguir, esto lleva a incosistencias visuales a nivel de diseño y de estructura.

- perdida de tiempo: en un mundo competitivo, en Pixel Pefect Studio se desarrollan muchos proyectos consecutivos, requiere de optimizar sus tiempos y sacar mayor fruto de ello. Los conflictos en los componentes llevan a que los desarrolladores tengan que invertir mucho tiempo en comprender el código.

## 2.EVALUACIÓN Y JUSTIFICACIÓN DE METODOLOGÍA


1-

Hay tres metodologías que podrían ser aplicadas a este caso:

BEM (Block, Element, Modifier): Este sistema trabaja por bloque, elemento y modificador (form / button / button--submit) útil para modularizar componentes permitiendo ser reutilizados y mantieniendo los elementos aninados, pero muchos componentes pueden llevar a generación de clases muy complejas si es que hay muchos elementos anidados.

OOCSS: Este sistema sugiere separar la estructura de la piel (skin). En este caso un componente tendría sus características de tipo estructurales (margin, padding, border, etc.) pero en otro apartado (skin) tendríamos todos sus modificadores (background-color, color, carácteristicas de fuentes, etc.), pero vuelve más complejo HTML pues las etiquetas requieren multiples clases para un solo elemento.

SMACSS: Este sistema propone organizar los componentes en niveles, estas serían: bases (reset, base, tipografías, etc.), layouts (header, footer, sidebar, etc.), module (cards, accordion, form, etc.), state (estados para elementos interactivos), theme (dark-theme, light-theme, etc.), si bien organiza muchas características de las componentes, su subjetividad genera una línea borrosa respecto a la organizavión de ciertos componentes, y en proyectos de pequeña envergadura, los fragmenta inecesariamente.

2-

La elección más optima, sería una híbrido entre la metodología BEM y SMACSS. Esto se debe a que con la anidación BEM el código sería más fácil de leer, ya que, componentes padres e hijos están relacionados mendiante sus clases y la meotodógia modular de SMACSS nos permite dar una organización a nuestros componentes, basados en sus características, ya sean, componentes base, layouts, modulos, estados, temas, los cuales serían independientes y apicables en todo el contenido. Una cosa rescatable de OOCSS es la cualidad de poseer skins, pero en este caso, lo aplicaremos conforme a SMACSS que posee "themes" la cual sería una clasé de modifier pero independiente de la clase del módulo.

## 3.DISEÑO E IMPLEMENTACIÓN TÉCNICA

Acceso a repositorio Github: https://github.com/Chrisreboc/analisis-de-caso-pixel-perfect-studio..git

deploy github: https://chrisreboc.github.io/analisis-de-caso-pixel-perfect-studio./

## 4.DOCUMENTACIÓN TÉCNICA INTERNA

La nueva metodología cuenta con un sistema de anidado BEM, en este caso hay componentes padre los cuales dan nombres a los hijos, esto facilita el reconocer a que módulo corresponde cada componente y que función cumplen, junto con un sistema de organización SMACSS basado en:

- base: Base contiene todos los elementos que son base de la página, es decir, que deben estar cargados antes de ingresar cualquiera sea el contenido. Sus componentes son un reset de estilos (reset.scss), una base (base.scss) que contiene las configuraciones generales de body, html, headlings, parrafes, etc. Y tipografías importadas (typography.scss) en dónde se enceuntran las tipografías de la página.

- layouts: Layouyts contiene todas las características relacionadas a la estructuración o configuración visual de la página, es decir, cuenta con las características del encabezado (header.scss), contenedor principal (main-container.scss) y pie de página (footer.scss).

- module: Module es dónde se almacenan los estilos de los módulos, ya sean, accordion, forms, cards, slodeshows, tabs, etc. En este caso cómo ejemplo contiene un módulo card, slideshow y tab que están presentes en el display de la página y que se pueden reutilizar.

- theme: Theme contiene los temas aplicables a la página los cuales nos ayudan a customizar los colores de componentes o de temas generales de la página, es decir en este caso se agregaron 2 temas: el tema predeterminado (theme-default) y un tema anaranjado (theme-orange).

- styles.scss: Este documento importa en un orden lógico las características de la página, ya sea, los reset, las bases, tipografías, layouts, módulos y theme. En él los desarrolladores pueden implementar los estilos de nuevos módulos que puedan desarrollar o importar desde otras librerías.

las funciones que cumplen estos apartados son:

 - reset: contiene el reset de estilos, usualmente este archivo no será modificado, pero si puede ser reutilizado en diversos proyectos.

- base: contiene las características de los elementos base de la página, este apartado lo más probable es que tampoco sea modificado, ya que otorga una base para el proyecto y se puede reutilizar, en esta están presentes las características del html, body, headlings y parrefes (en los que estos contendran las fuentes principales que represeten a la empresa y tamaños por defecto para estas etiquetas).

- tipografía: contiene tipografías importadas, en esta carpeta los desarrolladores pueden ingresar nuevas fuentes según lo requiera un proyecto y modificar "base" con las nuevas fuentes de ser necesario, todo depende del proyecto.

- header: header contiene el display del encabezado, si bien en este ejemplo es simple que contiene solo un título, los desarrolladores, pueden en el agregar un formato que se pueda repetir a largo de los proyectos, ya sea si estos contienen botones, barras de busqueda o redirecciones.

-main-container: este contiene el display de contenidos dentro de la página, en este caso posee un display estilo flex que se organiza en columnas y mantiene el contenido centrado, lo que permite al desarrollador agregar módulos y que estos de adapten al formato de una forma simple y rápida, y de estar dentro de un módulo card, o un módulo vacio, poder organizarlos uno a lado de otro, con las características que deseen.

- footer: contiene las características del pie de página, el formato es simple de momento, pero se puede establecer uno que contenga los apartados requeridos, ya sea contactos, ayuda, servicios, formularios, or redirecciones especificas. está diseñado para siempre estár al pie de página no importa si hay poco o mucho contenido.

- module: en esta sección están todos los estilos de módulos que los desarrolladores puedan implementar, Ya sea un formulario, tarjetas, mostradores de imágenes, etc. Con cada módulo dasarrollado, al trabajar html es solo cosa de utilizar las clases de dicho módulo y el moódulo se adaptará automáticamente a sus estilos.

- theme: Este contiene los temas aplicables, en este apartado los desarrolladores podrán implementar sus propios temás personalizados, que puedan afectar a los diferentes componentes o módulos de la página, esto también deja abierta la puerta a skins de estilo OOCSS incluso si este sistema no considera ese formato de momento, o características de implementación de colores individuales, estilo primary, danger, warning, etc.

## 5. REFLEXIÓN FINAL DEL PROCESO

1. Los desafíos que se presentaron al aplicar esta metodología a un proyecto fueron desarrollar un layout, lejos de todo el contenido o módulos resultaron eficientes rápidamente, pero en un principio al desarrollar el layout, ciertas cosas no funcionaban o no seguían el orden esperado, pero al establecer reglas claras al layout todo fúncionó de maravilla. Otro desafío fue agregar temas que pudieran afectar a todo el contenido o solo a algunas componentes, pero la implementación de variables como colores (var) facilitaron posteriormente hacer cualquier tipo de tema e implementarlo, fue solo cosa de buscar una paleta de colores adecuada.

2. La metodología mantendrá un orden de todos los componentes y los hará fácil de comprender y encontrar, permitiendo que sean reutilizados y que los temas sean implementados con facilidad , que pueda crecer a tener colores o tamaños de fuentes específicos y acercarlo más a las características de una librería o framework según lo requiera.

3. Al implementar esta metodología, los desarrolladores podrán montar rápidamente los diversos módulos que requieran, habrá un orden en sus estilos, se comprenderá qué estilos de componentes son hijos, ya que, estarán relacionados por clase y por anidación, esto ahorrará tiempo en lectura de código y de estilos no importa si no es el mismo desarrollador trabajando en x proyecto. También permitirá a los desarrolladores reutilizar módulos con rápidez los cuales tendrán sus estilos implementados automáticamente, no requeriran del crear ID a menos de que sean inputs específicos o de crear clases innecesarias, pues estás están definidas por módulo lo que evita el duplicado de estilos o código aún más mediante SASS.

Además permitirá trabajar temas los cuales se podrán implementar de página completa o simplemente para un módulo específico. Creación de propios temas según lo requiera el proyecto, añadir nuevos módulos que posteriormente serán reutilizables, y crecimiento en caso de que se requieran colores específicos para componentes específicas, si bien el ejemplo presente solo posee temas, da la posibilidad a crecer en esa dirección, incluso en la creación de tamaños y peso de fuentes aplicados por clase.