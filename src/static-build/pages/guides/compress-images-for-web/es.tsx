import { h, Fragment, FunctionalComponent } from 'preact';

const CompressImagesForWebEs: FunctionalComponent = () => (
  <Fragment>
    <h1>Comprimir Imágenes para WordPress, Web y Email</h1>

    <p>
      Las imágenes sin optimizar son la causa número uno de sitios web lentos.
      Ya sea que tengas un blog en WordPress, estés armando una landing page o
      enviando un newsletter, las imágenes correctamente comprimidas hacen que
      todo sea más rápido. Esta guía cubre técnicas prácticas de optimización
      para los tres escenarios más comunes.
    </p>

    <h2>Por Qué el Tamaño de Imagen Importa para el Rendimiento Web</h2>
    <p>
      La investigación de Google muestra que el 53% de los usuarios móviles
      abandonan una página que tarda más de 3 segundos en cargar. Las imágenes
      suelen representar el 50–70% del peso total de una página, convirtiéndolas
      en la mayor palanca que podés mover. Las imágenes optimizadas mejoran:
    </p>
    <ul>
      <li>
        <strong>Largest Contentful Paint (LCP)</strong> — el Core Web Vital que
        mide cuándo el contenido principal se vuelve visible. Las imágenes hero
        grandes son la causa más común de puntuaciones LCP deficientes.
      </li>
      <li>
        <strong>Time to Interactive</strong> — menos bytes significan que el
        navegador termina de descargar antes y puede enfocarse en ejecutar
        JavaScript.
      </li>
      <li>
        <strong>Costos de ancho de banda</strong> — especialmente relevante si
        usás un CDN con ancho de banda medido o servís usuarios en conexiones
        móviles lentas.
      </li>
    </ul>

    <h2>Comprimir Imágenes para WordPress</h2>
    <p>
      WordPress facilita subir imágenes grandes, pero no siempre hace un buen
      trabajo comprimiéndolas. Estos son pasos prácticos:
    </p>

    <h3>Antes de Subir</h3>
    <ul>
      <li>
        <strong>Redimensioná al ancho de contenido de tu tema</strong> — la
        mayoría de los temas de WordPress muestran contenido a 800–1200 px de
        ancho. Subir una foto de 4000 px desperdicia espacio aunque WordPress
        genere tamaños más pequeños.
      </li>
      <li>
        <strong>Comprimí con ShrinkImg primero</strong> — arrastrá tu imagen a
        ShrinkImg, elegí WebP o JPG con calidad 80, y descargá el archivo
        optimizado antes de subirlo a WordPress.
      </li>
      <li>
        <strong>Usá WebP cuando sea posible</strong> — WordPress 5.8+ soporta
        subidas WebP de forma nativa. Los archivos WebP son 25–35% más pequeños
        que los JPG. Consultá nuestra{' '}
        <a href="/es/guides/what-is-webp/">guía sobre WebP</a> para más
        detalles.
      </li>
    </ul>

    <h3>Tamaños Recomendados para WordPress</h3>
    <table>
      <thead>
        <tr>
          <th>Tipo de Imagen</th>
          <th>Ancho</th>
          <th>Formato</th>
          <th>Tamaño Objetivo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Imagen destacada del blog</td>
          <td>1200 px</td>
          <td>WebP o JPG</td>
          <td>&lt; 150 KB</td>
        </tr>
        <tr>
          <td>Imagen dentro del contenido</td>
          <td>800 px</td>
          <td>WebP o JPG</td>
          <td>&lt; 100 KB</td>
        </tr>
        <tr>
          <td>Miniatura</td>
          <td>300 px</td>
          <td>WebP o JPG</td>
          <td>&lt; 30 KB</td>
        </tr>
        <tr>
          <td>Logo / ícono</td>
          <td>Según necesidad</td>
          <td>PNG o SVG</td>
          <td>&lt; 20 KB</td>
        </tr>
      </tbody>
    </table>

    <h2>Comprimir Imágenes para Sitios Web y Landing Pages</h2>
    <p>
      Más allá de WordPress, los mismos principios aplican a cualquier sitio
      web. Acá van consejos adicionales:
    </p>

    <h3>Usá Imágenes Responsivas</h3>
    <p>
      El atributo HTML <code>srcset</code> te permite servir diferentes tamaños
      de imagen según el ancho de pantalla del visitante. Preparé 2–3 tamaños de
      cada imagen (pequeño, mediano, grande) y dejá que el navegador elija el
      correcto.
    </p>

    <h3>Carga Diferida para Imágenes Fuera de Pantalla</h3>
    <p>
      Agregá <code>loading="lazy"</code> a las imágenes que no son visibles
      cuando la página carga por primera vez. Esto posterga la descarga hasta
      que el usuario se acerque al scroll, acelerando la pintura inicial.
    </p>

    <h3>Elegí el Formato Correcto</h3>
    <p>
      Para un análisis más profundo de selección de formato, consultá nuestra{' '}
      <a href="/es/guides/jpg-vs-png-vs-webp-vs-avif/">
        comparación JPG vs PNG vs WebP vs AVIF
      </a>
      . En resumen: usá WebP o AVIF para fotos, PNG para gráficos con
      transparencia, y SVG para íconos y logos.
    </p>

    <h2>Comprimir Imágenes para Email</h2>
    <p>
      Los clientes de email son notoriamente inconsistentes con el renderizado
      de imágenes. Tené en cuenta estas restricciones:
    </p>
    <ul>
      <li>
        <strong>Quedáte con JPG y PNG</strong> — muchos clientes de email no
        soportan WebP o AVIF. JPG para fotos, PNG para logos con transparencia.
      </li>
      <li>
        <strong>Mantené el tamaño total del email bajo 1 MB</strong> —
        incluyendo HTML, imágenes y todos los recursos. Los emails grandes se
        recortan en Gmail y activan filtros de spam.
      </li>
      <li>
        <strong>Limitá el ancho de imagen a 600 px</strong> — el ancho estándar
        de contenido de email. No hay beneficio en enviar imágenes más grandes.
      </li>
      <li>
        <strong>Comprimí agresivamente</strong> — las imágenes de email pueden
        tolerar menor calidad (60–70) ya que se muestran pequeñas y los usuarios
        no hacen zoom.
      </li>
    </ul>

    <h3>Tamaños Recomendados para Email</h3>
    <table>
      <thead>
        <tr>
          <th>Tipo de Imagen</th>
          <th>Ancho</th>
          <th>Formato</th>
          <th>Tamaño Objetivo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Banner hero</td>
          <td>600 px</td>
          <td>JPG</td>
          <td>&lt; 80 KB</td>
        </tr>
        <tr>
          <td>Imagen de producto</td>
          <td>300 px</td>
          <td>JPG</td>
          <td>&lt; 40 KB</td>
        </tr>
        <tr>
          <td>Logo</td>
          <td>200 px</td>
          <td>PNG</td>
          <td>&lt; 15 KB</td>
        </tr>
      </tbody>
    </table>

    <h2>Checklist Rápido de Optimización</h2>
    <ul>
      <li>
        Redimensioná las imágenes a las dimensiones de visualización — nunca
        servir más grande de lo necesario.
      </li>
      <li>Comprimí con ShrinkImg a calidad 75–85 para fotos.</li>
      <li>Usá WebP o AVIF para sitios web, JPG/PNG para email.</li>
      <li>Agregá carga diferida a las imágenes fuera de pantalla.</li>
      <li>
        Usá imágenes responsivas con <code>srcset</code> para soporte
        multi-dispositivo.
      </li>
      <li>
        Siempre revisá visualmente la salida comprimida antes de publicar.
      </li>
    </ul>

    <a class="guide-cta" href="/es/">
      Optimizá Tus Imágenes Ahora — Gratis
    </a>
  </Fragment>
);

export default CompressImagesForWebEs;
