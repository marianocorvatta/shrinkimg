import { h, Fragment, FunctionalComponent } from 'preact';

const OptimizeImagesWordpressEs: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Puntos Clave</h2>
      <ul>
        <li>
          WordPress genera múltiples tamaños por cada imagen subida,
          multiplicando el espacio desperdiciado
        </li>
        <li>
          Comprimir imágenes antes de subirlas es más efectivo que depender de
          plugins
        </li>
        <li>
          Apuntar a calidad 75–85 en WebP o AVIF reduce los archivos un 60–80%
          sin pérdida visible
        </li>
        <li>
          Dimensiones adecuadas, lazy loading y elección de formato son los tres
          pilares de la optimización
        </li>
        <li>
          Las imágenes optimizadas mejoran directamente los Core Web Vitals y el
          posicionamiento en buscadores
        </li>
      </ul>
    </div>

    <p>
      WordPress alimenta más del 40% de todos los sitios web en internet, y las
      imágenes son la razón número uno por la que la mayoría de esos sitios
      cargan más lento de lo que deberían. El manejo de medios predeterminado de
      WordPress es conveniente pero lejos de ser óptimo — genera múltiples
      tamaños de imagen al subir, los almacena todos sin comprimir, y sirve el
      tamaño que el tema solicite sin importar el peso real del archivo.
    </p>

    <p>
      El consejo típico es instalar un plugin de optimización de imágenes. Pero
      los plugins agregan carga, muchos requieren suscripciones pagas para la
      mejor compresión, y procesan imágenes en tu servidor (usando CPU y
      memoria) o las suben a servicios de terceros. Hay un enfoque mejor:
      optimizá tus imágenes antes de que toquen WordPress.
    </p>

    <h2 id="why-wordpress-slow">
      Por Qué los Sitios WordPress Se Vuelven Lentos Con Imágenes Sin Optimizar
    </h2>

    <p>
      Cuando subís una sola imagen a WordPress, el sistema típicamente crea de
      cuatro a seis tamaños adicionales: miniatura (150x150), mediano (300 px de
      ancho), mediano-grande (768 px de ancho), grande (1024 px de ancho), y a
      veces variantes de 1536 px y 2048 px. Si tu tema o page builder registra
      tamaños personalizados, la cantidad sube aún más.
    </p>

    <p>
      Subí una foto de 5 MB de tu cámara y WordPress podría generar 20–30 MB de
      datos de imagen totales a partir de esa sola carga. Hacé esto 50 veces
      para un catálogo de productos y tu biblioteca de medios contiene de golpe
      más de un gigabyte de imágenes en gran parte sin optimizar.
    </p>

    <p>
      El resultado es predecible:{' '}
      <a href="/es/blog/why-image-compression-matters/">
        las páginas cargan lento
      </a>
      , los puntajes de Core Web Vitals sufren, los visitantes rebotan y el
      posicionamiento en buscadores cae. La buena noticia es que este problema
      es completamente prevenible.
    </p>

    <h2 id="compress-before-upload">Comprimí Antes de Subir Con ShrinkImg</h2>

    <p>
      El paso más efectivo que podés tomar es comprimir cada imagen antes de
      subirla a WordPress. De esta forma, cada tamaño derivado que WordPress
      genera hereda la optimización de tu fuente ya comprimida.
    </p>

    <p>
      Así es el flujo de trabajo con <a href="/es/">ShrinkImg</a>:
    </p>

    <h3 id="step-1">Paso 1 — Redimensioná al Tamaño Máximo de Visualización</h3>
    <p>
      Antes de comprimir, determiná el ancho máximo al que tu imagen se va a
      mostrar en tu sitio. Para la mayoría de los temas WordPress, el área de
      contenido tiene entre 800 y 1200 px de ancho. Las imágenes hero a ancho
      completo pueden necesitar 1600–2000 px. No hay razón para subir una imagen
      de 4000 px si lo máximo que se va a mostrar es 1200 px.
    </p>

    <p>
      Abrí tu imagen en ShrinkImg, usá la opción de redimensionar para
      establecer el ancho objetivo, y después aplicá la compresión.
      Redimensionar primero reduce drásticamente el tamaño del archivo porque
      estás eliminando millones de píxeles innecesarios antes de que la
      compresión siquiera empiece.
    </p>

    <h3 id="step-2">Paso 2 — Elegí el Formato Correcto</h3>
    <p>
      WordPress soporta WebP desde la versión 5.8, y el soporte de AVIF mejora
      con cada release. Para los mejores resultados:
    </p>

    <ul>
      <li>
        <strong>WebP</strong> es la opción moderna más segura — 25–35% más
        pequeño que JPG con soporte nativo en WordPress. La mayoría de los temas
        y page builders manejan WebP sin problemas.
      </li>
      <li>
        <strong>AVIF</strong> ofrece una compresión aún mejor (hasta 50% más
        pequeño que JPG) pero el soporte en WordPress todavía está madurando.
        Probá con tu tema antes de comprometerte con AVIF en todo el sitio.
      </li>
      <li>
        <strong>JPG</strong> sigue siendo un fallback sólido cuando se necesita
        máxima compatibilidad, especialmente para newsletters por email o
        compartir en redes sociales donde la plataforma puede no soportar
        formatos nuevos.
      </li>
    </ul>

    <p>
      ¿No estás seguro de qué formato es mejor para tus imágenes? Nuestra{' '}
      <a href="/es/blog/jpg-vs-png-vs-webp-vs-avif/">
        guía completa de comparación de formatos
      </a>{' '}
      desglosa las fortalezas y compromisos de cada opción.
    </p>

    <h3 id="step-3">Paso 3 — Apuntá al Nivel de Calidad Correcto</h3>
    <p>
      Para fotografías, calidad 75–85 es el punto ideal. En este rango, los
      archivos se reducen un 60–80% mientras se mantienen visualmente idénticos
      en los tamaños mostrados en una página WordPress típica. ShrinkImg muestra
      las versiones original y comprimida lado a lado, para que puedas confirmar
      que no hay diferencia visible antes de descargar.
    </p>

    <p>
      Para gráficos, logos y capturas de pantalla — cualquier cosa con texto o
      bordes definidos — usá PNG con máxima compresión o WebP lossless. Estos
      necesitan precisión perfecta de píxeles, y la compresión lossy crearía
      artefactos visibles.
    </p>

    <h3 id="step-4">Paso 4 — Subí a WordPress</h3>
    <p>
      Una vez comprimida, subí tu imagen optimizada a la Biblioteca de Medios de
      WordPress como de costumbre. WordPress va a generar sus tamaños derivados
      desde tu fuente ya optimizada, manteniendo todas las variantes livianas.
      Una fuente WebP de 200 KB podría producir miniaturas de 5–15 KB cada una,
      comparado con 30–80 KB desde un original sin comprimir.
    </p>

    <h2 id="recommended-dimensions">Dimensiones Recomendadas para WordPress</h2>

    <p>
      Diferentes áreas de contenido necesitan diferentes tamaños de imagen. Acá
      tenés una referencia práctica para layouts comunes de WordPress:
    </p>

    <table>
      <thead>
        <tr>
          <th>Uso de la imagen</th>
          <th>Ancho recomendado</th>
          <th>Notas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Imagen destacada de post</td>
          <td>1200 px</td>
          <td>Cubre la mayoría de temas y compartir en redes</td>
        </tr>
        <tr>
          <td>Hero / banner a ancho completo</td>
          <td>1600–2000 px</td>
          <td>Pantallas más anchas necesitan más píxeles</td>
        </tr>
        <tr>
          <td>Imágenes en contenido</td>
          <td>800–1000 px</td>
          <td>Coincide con el ancho típico de columna de contenido</td>
        </tr>
        <tr>
          <td>Imágenes de producto (WooCommerce)</td>
          <td>800–1000 px</td>
          <td>Verificá el tamaño de galería de tu tema</td>
        </tr>
        <tr>
          <td>Miniaturas / grillas de galería</td>
          <td>400–600 px</td>
          <td>Dejá que WordPress maneje los derivados más chicos</td>
        </tr>
        <tr>
          <td>Logo</td>
          <td>300–500 px</td>
          <td>Usá PNG o SVG para renderizado nítido</td>
        </tr>
      </tbody>
    </table>

    <p>
      Subir imágenes más grandes de lo necesario desperdicia almacenamiento y
      ancho de banda. Redimensioná antes de comprimir, y tu biblioteca de medios
      de WordPress se mantiene liviana y rápida.
    </p>

    <h2 id="lazy-loading">Habilitá y Entendé el Lazy Loading</h2>

    <p>
      Desde WordPress 5.5, el lazy loading nativo está habilitado por defecto.
      Esto significa que las imágenes debajo del viewport visible no se cargan
      hasta que el visitante se desplaza cerca de ellas. Es una mejora de
      rendimiento significativa — en vez de descargar 20 imágenes de golpe, el
      navegador solo busca las 3–4 visibles en el viewport inicial.
    </p>

    <p>
      El lazy loading funciona automáticamente para imágenes agregadas a través
      del editor de bloques. Sin embargo, hay algunas cosas a tener en cuenta:
    </p>

    <ul>
      <li>
        <strong>No uses lazy-load en la imagen LCP</strong> — la imagen hero
        principal o imagen destacada en la parte superior de la página debe
        cargarse inmediatamente. Agregar <code>loading="eager"</code> o{' '}
        <code>fetchpriority="high"</code> asegura que el navegador la priorice.
        Muchos temas modernos manejan esto automáticamente.
      </li>
      <li>
        <strong>Siempre definí ancho y alto</strong> — las imágenes con lazy
        loading sin dimensiones causan saltos de diseño (CLS). El editor de
        bloques de WordPress agrega estas automáticamente, pero verificá si
        estás insertando imágenes con código personalizado.
      </li>
      <li>
        <strong>El lazy loading no arregla archivos grandes</strong> — retrasa
        cuándo se cargan las imágenes, no cuántos datos consumen. Una imagen de
        3 MB sigue siendo de 3 MB cuando finalmente carga. La compresión y el
        dimensionamiento adecuado importan de todas formas.
      </li>
    </ul>

    <h2 id="core-web-vitals-wordpress">Impacto en SEO y Core Web Vitals</h2>

    <p>
      Los Core Web Vitals de Google miden directamente el tipo de problemas que
      causan las imágenes sin optimizar. Así se relaciona la optimización de
      imágenes con cada métrica:
    </p>

    <ul>
      <li>
        <strong>Largest Contentful Paint (LCP)</strong> — tu imagen hero es casi
        siempre el elemento LCP. Comprimirla de 2 MB a 200 KB puede mejorar el
        LCP entre 1 y 3 segundos. El umbral de Google es 2.5 segundos.
      </li>
      <li>
        <strong>Interaction to Next Paint (INP)</strong> — las imágenes pesadas
        consumen ancho de banda y tiempo del hilo principal para decodificación.
        Imágenes más pequeñas liberan recursos para manejar interacciones del
        usuario.
      </li>
      <li>
        <strong>Cumulative Layout Shift (CLS)</strong> — las imágenes sin
        atributos explícitos de ancho/alto causan saltos de diseño. Siempre
        incluí dimensiones, y el editor de bloques de WordPress lo hace por
        defecto.
      </li>
    </ul>

    <p>
      Los sitios WordPress que aprueban los tres Core Web Vitals
      consistentemente se posicionan mejor en los resultados de búsqueda. La
      optimización de imágenes es el cambio de mayor impacto que la mayoría de
      los dueños de sitios WordPress pueden hacer — no requiere cambios de
      código, ni mejoras de servidor, ni herramientas pagas.
    </p>

    <h2 id="complete-checklist">
      Checklist Completo de Optimización de Imágenes para WordPress
    </h2>

    <ul>
      <li>
        Redimensioná las imágenes a su tamaño máximo de visualización antes de
        subir
      </li>
      <li>
        Comprimí con <a href="/es/">ShrinkImg</a> a calidad 75–85 (para fotos)
      </li>
      <li>Usá WebP como formato predeterminado (AVIF si tu tema lo soporta)</li>
      <li>
        Usá PNG solo para gráficos con transparencia o requerimientos de píxel
        perfecto
      </li>
      <li>
        Verificá que el lazy loading esté activo (está activado por defecto
        desde WP 5.5)
      </li>
      <li>
        Asegurate de que la imagen hero/destacada cargue de forma eager, no lazy
      </li>
      <li>Siempre incluí atributos de ancho y alto en las imágenes</li>
      <li>
        Probá tus páginas con Google PageSpeed Insights para verificar las
        mejoras
      </li>
      <li>
        Auditá periódicamente tu biblioteca de medios en busca de cargas
        antiguas sobredimensionadas
      </li>
    </ul>

    <p>
      No necesitás plugins, servicios pagos ni procesamiento del lado del
      servidor para tener un sitio WordPress rápido. Comprimiendo y
      redimensionando imágenes antes de subirlas — un proceso que toma segundos
      con ShrinkImg — te asegurás de que cada página cargue rápido, se posicione
      bien y entregue una experiencia fluida para cada visitante.
    </p>
  </Fragment>
);

export default OptimizeImagesWordpressEs;
