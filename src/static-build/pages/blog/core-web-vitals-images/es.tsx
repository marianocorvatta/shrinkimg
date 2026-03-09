import { h, Fragment, FunctionalComponent } from 'preact';

const CoreWebVitalsImagesEs: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Puntos Clave</h2>
      <ul>
        <li>
          Los Core Web Vitals miden la experiencia real del usuario y afectan
          directamente el ranking en Google
        </li>
        <li>
          El LCP (Largest Contentful Paint) casi siempre es una imagen;
          comprimirla es la forma más rápida de mejorar el puntaje
        </li>
        <li>
          Las imágenes sin atributos width/height causan saltos de diseño (CLS)
          — siempre incluí dimensiones
        </li>
        <li>
          WebP y AVIF reducen el peso de las imágenes un 25–50% versus JPG,
          bajando directamente los tiempos de LCP
        </li>
        <li>
          Probá con PageSpeed Insights después de cada cambio para medir la
          mejora antes/después
        </li>
      </ul>
    </div>

    <p>
      En mayo de 2021, Google convirtió oficialmente los Core Web Vitals en una
      señal de ranking. Desde entonces, qué tan rápidas y estables se sienten
      tus páginas para los visitantes reales influye directamente en dónde
      aparecés en los resultados de búsqueda. Las imágenes son el factor
      dominante detrás de los puntajes pobres de Core Web Vitals — y también el
      más fácil de corregir sin tocar tu código.
    </p>

    <p>
      Esta guía explica qué significa cada Core Web Vital, cómo las imágenes lo
      afectan, y exactamente qué hacer para mejorar tus puntajes usando mejores
      prácticas de optimización de imágenes.
    </p>

    <h2 id="what-are-cwv">¿Qué Son los Core Web Vitals?</h2>

    <p>
      Los Core Web Vitals son tres métricas específicas que Google usa para
      medir la calidad de la experiencia de un usuario en una página web. A
      diferencia de las métricas de rendimiento tradicionales que miden tiempos
      de respuesta del servidor o benchmarks arbitrarios, los Core Web Vitals se
      recopilan de usuarios reales de Chrome a través del Chrome User Experience
      Report (CrUX).
    </p>

    <p>
      Esto importa porque tu puntaje no se basa en una prueba de laboratorio —
      se basa en lo que personas reales en dispositivos reales con conexiones
      reales experimentan cuando visitan tus páginas. Un puntaje que se ve bien
      en una prueba local pero que se siente lento para usuarios móviles en 4G
      se reflejará en tus datos de CrUX.
    </p>

    <h2 id="lcp">LCP — Largest Contentful Paint</h2>

    <p>
      El LCP mide cuánto tarda el elemento visible más grande en el viewport en
      terminar de renderizarse. Los umbrales de Google:
    </p>

    <ul>
      <li>
        <strong>Bueno:</strong> Menos de 2.5 segundos
      </li>
      <li>
        <strong>Necesita mejora:</strong> 2.5–4.0 segundos
      </li>
      <li>
        <strong>Pobre:</strong> Más de 4.0 segundos
      </li>
    </ul>

    <p>
      Para la gran mayoría de las páginas, el elemento LCP es una imagen —
      específicamente la imagen hero, la foto destacada, o la imagen principal
      del producto en la parte superior de la página. Esto hace que la
      optimización de imágenes sea la palanca más impactante para mejorar el
      LCP.
    </p>

    <h3 id="lcp-images">Cómo las Imágenes Grandes Perjudican el LCP</h3>
    <p>
      El navegador descubre la imagen LCP al analizar el HTML, luego debe
      descargar, decodificar y renderizar esa imagen antes de registrar el LCP.
      Cada byte extra en el archivo de imagen agrega tiempo de descarga. En una
      conexión móvil 4G típica (~25 Mbps), una imagen de 2 MB tarda unos 640 ms
      solo en descargarse. Sumá las búsquedas DNS, los handshakes SSL, el tiempo
      de respuesta del servidor y la sobrecarga de renderizado, y esa imagen
      fácilmente representa 1.5–2+ segundos de tiempo de LCP.
    </p>

    <p>
      Comprimí la misma imagen a 200 KB y la descarga baja a ~64 ms — ahorrando
      más de medio segundo directamente de tu LCP.
    </p>

    <h3 id="lcp-fixes">Correcciones Prácticas para Imágenes LCP</h3>
    <ul>
      <li>
        <strong>Comprimí agresivamente.</strong> Usá WebP o AVIF con calidad
        75–85. La imagen LCP típicamente se muestra grande, lo que hace
        innecesaria la calidad muy alta. Nuestra{' '}
        <a href="/es/blog/jpg-vs-png-vs-webp-vs-avif/">
          guía comparativa de formatos
        </a>{' '}
        muestra los ahorros de tamaño en detalle.
      </li>
      <li>
        <strong>Precargá la imagen LCP.</strong> Agregá{' '}
        <code>{'<link rel="preload" as="image" href="hero.webp" />'}</code> en
        el encabezado de tu documento para que el navegador empiece a
        descargarla antes de analizar la página completa.
      </li>
      <li>
        <strong>No uses lazy-load en la imagen LCP.</strong> Agregar{' '}
        <code>loading="lazy"</code> a la imagen LCP la retrasa hasta que el
        navegador termina el layout — lo opuesto de lo que querés. Mantené la
        imagen LCP como eager.
      </li>
      <li>
        <strong>Servila desde un CDN.</strong> La proximidad geográfica reduce
        la latencia de descarga. La mayoría de los CDNs también soportan
        conversión automática a WebP.
      </li>
    </ul>

    <h2 id="inp">INP — Interaction to Next Paint</h2>

    <p>
      INP reemplazó a FID (First Input Delay) como Core Web Vital en marzo de
      2024. Mide qué tan rápido responde la página a las interacciones del
      usuario — clics, toques, entrada de teclado — durante todo el ciclo de
      vida de la página, no solo la carga inicial.
    </p>

    <ul>
      <li>
        <strong>Bueno:</strong> Menos de 200 ms
      </li>
      <li>
        <strong>Necesita mejora:</strong> 200–500 ms
      </li>
      <li>
        <strong>Pobre:</strong> Más de 500 ms
      </li>
    </ul>

    <h3 id="inp-images">Cómo las Imágenes Afectan el INP</h3>
    <p>
      Las imágenes afectan el INP indirectamente a través del hilo principal.
      Cuando el navegador decodifica una imagen grande, bloquea el hilo
      principal — el mismo hilo que maneja JavaScript, layout e interacciones
      del usuario. Decodificar un JPEG de 4000 × 3000 puede consumir 50–100 ms
      del tiempo del hilo principal. Si un usuario toca un botón durante este
      tiempo, la respuesta se retrasa.
    </p>

    <p>
      Servir imágenes más pequeñas y correctamente comprimidas reduce el tiempo
      de decodificación y mantiene libre el hilo principal para responder a las
      interacciones. Los formatos modernos como AVIF y WebP también están
      diseñados con la decodificación eficiente en mente.
    </p>

    <h2 id="cls">CLS — Cumulative Layout Shift</h2>

    <p>
      El CLS mide la estabilidad visual — cuánto salta o se desplaza
      inesperadamente el diseño de la página mientras carga el contenido. Un
      puntaje de 0 significa sin saltos; cualquier valor por encima de 0.1
      necesita mejora.
    </p>

    <ul>
      <li>
        <strong>Bueno:</strong> Menos de 0.1
      </li>
      <li>
        <strong>Necesita mejora:</strong> 0.1–0.25
      </li>
      <li>
        <strong>Pobre:</strong> Más de 0.25
      </li>
    </ul>

    <h3 id="cls-images">Cómo las Imágenes Causan Saltos de Diseño</h3>
    <p>
      Las imágenes sin atributos <code>width</code> y <code>height</code>{' '}
      explícitos son la causa número uno de los saltos de diseño. El motivo:
      cuando el navegador encuentra una imagen sin dimensiones en el HTML, no
      reserva espacio para ella. Cuando la imagen finalmente se descarga y sus
      dimensiones se conocen, el navegador la inserta — y todo lo que está
      debajo salta hacia abajo. Este efecto de empuje hacia abajo es exactamente
      lo que mide el CLS.
    </p>

    <p>
      La solución es directa: siempre incluí width y height en cada etiqueta de
      imagen. Aunque redimensiones imágenes con CSS, el navegador usa los
      atributos HTML para calcular la proporción de aspecto y reservar el
      espacio correcto antes de que la imagen cargue.
    </p>

    <pre>
      <code>{`<!-- Causa salto de diseño: -->
<img src="producto.webp" alt="Producto">

<!-- Previene el salto de diseño: -->
<img src="producto.webp" width="800" height="600" alt="Producto">`}</code>
    </pre>

    <h3 id="cls-lazy-loading">Lazy Loading y CLS</h3>
    <p>
      El lazy loading es excelente para el rendimiento pero requiere atributos
      de width y height para funcionar sin causar saltos de diseño. Cuando una
      imagen tiene dimensiones explícitas, el navegador reserva la cantidad
      correcta de espacio en el layout inmediatamente, incluso antes de que la
      imagen cargue. Sin dimensiones, una imagen con lazy-load desplazará el
      layout cuando finalmente aparezca.
    </p>

    <h2 id="modern-formats-vitals">
      WebP y AVIF: Impacto Directo en los Core Web Vitals
    </h2>

    <p>
      Pasar de JPG a WebP o AVIF es una de las mejoras más rápidas disponibles
      para los Core Web Vitals. El motivo:
    </p>

    <ul>
      <li>
        <strong>Archivos más pequeños → LCP más rápido.</strong> WebP con
        calidad 80 produce archivos 25–35% más pequeños que JPG equivalente.
        AVIF con la misma calidad es 40–50% más pequeño. Cada byte ahorrado es
        tiempo ahorrado descargando el elemento LCP.
      </li>
      <li>
        <strong>Mejor eficiencia de decodificación.</strong> Los diseños de
        códecs modernos (AV1 para AVIF, VP8/VP9 para WebP) están específicamente
        optimizados para la decodificación rápida en navegadores, reduciendo el
        tiempo de bloqueo del hilo principal.
      </li>
      <li>
        <strong>Cargas más pequeñas → mejor INP.</strong> Menos datos para
        decodificar significa menos trabajo del hilo principal, dejando más
        margen para la capacidad de respuesta a interacciones.
      </li>
    </ul>

    <p>
      Usá <a href="/es/">ShrinkImg</a> para convertir tus imágenes a WebP o AVIF
      directamente en tu navegador. La comparación lado a lado facilita la
      verificación de la calidad antes de descargar.
    </p>

    <h2 id="pagespeed-testing">
      Cómo Probar Tu Puntaje con PageSpeed Insights
    </h2>

    <p>
      Google PageSpeed Insights (PSI) es la herramienta canónica para medir los
      Core Web Vitals. Combina datos de usuarios reales de CrUX con pruebas de
      laboratorio de Lighthouse para darte tanto datos de campo como
      recomendaciones accionables.
    </p>

    <p>Para medir el impacto de la optimización de imágenes:</p>

    <ol>
      <li>
        Ejecutá PSI en tu página antes de hacer cambios y hacé una captura de
        pantalla de los resultados. Notá tu valor de LCP y cualquier advertencia
        de "Servir imágenes en formatos de próxima generación" o "Dimensionar
        correctamente las imágenes".
      </li>
      <li>
        Comprimí y convertí tus imágenes usando ShrinkImg. Priorizá la imagen
        LCP primero — tiene el mayor impacto individual.
      </li>
      <li>
        Desplegá las imágenes optimizadas y ejecutá PSI nuevamente. Los datos de
        CrUX tardan 28 días en actualizarse, pero el puntaje de laboratorio de
        Lighthouse se actualiza de inmediato.
      </li>
      <li>
        Revisá en 4 semanas para ver la mejora de tus datos de campo en el
        informe de Core Web Vitals de Search Console.
      </li>
    </ol>

    <h2 id="practical-checklist">
      Checklist Práctico de Imágenes para Core Web Vitals
    </h2>

    <ul>
      <li>
        Comprimí la imagen LCP a WebP o AVIF con calidad 75–85 — este es tu
        cambio de mayor impacto
      </li>
      <li>
        Agregá <code>width</code> y <code>height</code> a cada etiqueta{' '}
        <code>{'<img>'}</code> para prevenir CLS
      </li>
      <li>
        No agregues <code>loading="lazy"</code> a la imagen LCP ni a ninguna
        imagen above-the-fold
      </li>
      <li>
        Agregá <code>fetchpriority="high"</code> a la imagen LCP para indicarle
        al navegador que la priorice
      </li>
      <li>
        Precargá la imagen LCP con una etiqueta{' '}
        <code>{'<link rel="preload" as="image">'}</code>
      </li>
      <li>
        Redimensioná las imágenes a su tamaño de visualización real — nunca más
        grande
      </li>
      <li>
        Usá <code>loading="lazy"</code> en todas las imágenes below-the-fold
        para reducir la carga inicial de la página
      </li>
      <li>
        Probá antes y después con PageSpeed Insights para medir el impacto
      </li>
    </ul>

    <p>
      Los Core Web Vitals son la señal más concreta de Google de que la
      experiencia del usuario importa para el ranking. La optimización de
      imágenes es el camino más rápido para mejorar las tres métricas — no
      requiere cambios de código, ni actualizaciones de infraestructura, ni
      herramientas especializadas más allá de un buen compresor de imágenes.
    </p>

    <p>
      Empezá con tu imagen LCP, comprimila en <a href="/es/">ShrinkImg</a>, y
      ejecutá PageSpeed Insights antes y después. La mejora será inmediata y
      medible. Para más contexto, leé nuestra guía sobre{' '}
      <a href="/es/blog/why-image-compression-matters/">
        por qué la compresión de imágenes es clave para el rendimiento web
      </a>
      .
    </p>
  </Fragment>
);

export default CoreWebVitalsImagesEs;
