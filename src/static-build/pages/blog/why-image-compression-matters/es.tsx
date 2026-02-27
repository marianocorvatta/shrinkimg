import { h, Fragment, FunctionalComponent } from 'preact';

const WhyImageCompressionMattersEs: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Puntos Clave</h2>
      <ul>
        <li>
          Las imágenes sin optimizar representan hasta el 75% del peso total de
          una página web
        </li>
        <li>
          Un retraso de 1 segundo en la carga puede reducir las conversiones un
          7%
        </li>
        <li>
          Los Core Web Vitals de Google premian directamente a las páginas que
          cargan rápido
        </li>
        <li>
          La compresión de imágenes puede reducir el tamaño entre un 60–80% sin
          pérdida visible de calidad
        </li>
        <li>
          Páginas más rápidas significan menos rebote, menor consumo de ancho de
          banda y menores costos de hosting
        </li>
      </ul>
    </div>

    <p>
      Si tu sitio web tarda más de tres segundos en cargar, probablemente estés
      perdiendo casi la mitad de tus visitantes antes de que vean tu contenido.
      ¿El factor principal detrás de las páginas lentas? Las imágenes. Son
      esenciales para un diseño atractivo, pero sin una compresión adecuada
      sabotean silenciosamente el rendimiento, el posicionamiento SEO y los
      resultados de tu sitio.
    </p>

    <p>
      En esta guía, analizamos exactamente por qué comprimir imágenes es
      fundamental en 2026, qué significa para tu posicionamiento en buscadores y
      cómo podés empezar a optimizar hoy.
    </p>

    <h2 id="page-load-speed">El Impacto en la Velocidad de Carga</h2>

    <p>
      Según HTTP Archive, las imágenes representan aproximadamente el 50% del
      peso total de una página web promedio — y en sitios con muchas imágenes,
      como tiendas online o portfolios, esa cifra sube al 75% o más. Una sola
      imagen hero sin comprimir puede pesar entre 3 y 5 MB. Multiplicá eso por
      una galería de fotos de productos y estás pidiendo a tus visitantes que
      descarguen decenas de megabytes antes de poder interactuar con tu página.
    </p>

    <p>
      Investigaciones de Google muestran que cuando el tiempo de carga aumenta
      de 1 a 3 segundos, la probabilidad de que un usuario abandone sube un 32%.
      Si llega a 5 segundos, ese número salta al 90%. Cada fracción de segundo
      importa, y la compresión de imágenes es la forma más rápida de reducir el
      tiempo de carga sin tocar tu código ni la infraestructura del servidor.
    </p>

    <p>
      Una imagen bien comprimida que originalmente pesaba 2.5 MB puede bajar
      fácilmente a 200–400 KB — una reducción del 80–90% — manteniéndose
      visualmente idéntica en los tamaños que se muestran en pantalla. Eso se
      traduce directamente en páginas que cargan en menos de dos segundos en
      lugar de cinco.
    </p>

    <h2 id="core-web-vitals">
      Core Web Vitals de Google y Posicionamiento SEO
    </h2>

    <p>
      Desde que Google introdujo los Core Web Vitals como señal de ranking, la
      experiencia de página se convirtió en un factor medible que determina
      dónde aparece tu sitio en los resultados de búsqueda. Tres métricas
      impulsan la puntuación:
    </p>

    <ul>
      <li>
        <strong>Largest Contentful Paint (LCP)</strong> — mide qué tan rápido
        carga el contenido principal visible. En la mayoría de las páginas, el
        elemento LCP es una imagen. Google recomienda un LCP menor a 2.5
        segundos.
      </li>
      <li>
        <strong>Interaction to Next Paint (INP)</strong> — mide la capacidad de
        respuesta. Las imágenes pesadas bloquean el hilo principal y retrasan la
        interactividad.
      </li>
      <li>
        <strong>Cumulative Layout Shift (CLS)</strong> — mide la estabilidad
        visual. Las imágenes sin dimensiones explícitas causan saltos de diseño
        mientras cargan.
      </li>
    </ul>

    <p>
      Las imágenes sobredimensionadas perjudican directamente el LCP. Si tu
      imagen hero es un PNG sin comprimir de 4 MB, el navegador gasta segundos
      valiosos descargándola y decodificándola antes de que aparezca algo en
      pantalla. Comprimí esa misma imagen a WebP o AVIF con calidad 80 y baja a
      150–300 KB, llevando tu LCP bien por debajo del umbral de 2.5 segundos.
    </p>

    <p>
      Los sitios que aprueban los tres Core Web Vitals obtienen un mejor
      posicionamiento en búsqueda de forma medible. Un estudio de Searchmetrics
      encontró que las páginas mejor posicionadas cargan un 20% más rápido que
      las de la segunda página de resultados. La optimización de imágenes es uno
      de los cambios más simples que podés hacer con el mayor retorno en
      inversión SEO.
    </p>

    <h2 id="mobile-experience">Experiencia de Usuario en Móviles</h2>

    <p>
      Los dispositivos móviles representan más del 60% del tráfico web global, y
      los usuarios móviles son aún menos pacientes que los de escritorio. A
      menudo están en conexiones celulares más lentas — 4G promedia alrededor de
      25 Mbps en la práctica, y las conexiones 3G todavía existen en muchas
      regiones.
    </p>

    <p>
      Una página cargada con imágenes sin comprimir que tarda 2 segundos en una
      conexión de banda ancha rápida puede tardar 8–12 segundos en una conexión
      móvil típica. Esa es la diferencia entre una venta y un cliente perdido.
      Comprimir imágenes asegura que tu sitio cargue rápido sin importar la
      velocidad de conexión del visitante.
    </p>

    <p>
      Los formatos modernos como{' '}
      <a href="/es/blog/jpg-vs-png-vs-webp-vs-avif">WebP y AVIF</a> ofrecen
      ratios de compresión significativamente mejores que los tradicionales JPG
      y PNG. AVIF en particular puede producir archivos un 50% más pequeños que
      JPG con la misma calidad visual — un cambio radical para el rendimiento
      móvil.
    </p>

    <h2 id="bandwidth-savings">Ahorro de Ancho de Banda y Costos de Hosting</h2>

    <p>
      Cada byte que tu servidor entrega cuesta dinero. Los proveedores de CDN
      como Cloudflare, AWS CloudFront y Fastly cobran según la transferencia de
      datos. Si tu sitio recibe 100,000 visitas por mes con un promedio de 3 MB
      de imágenes por página, son 300 GB de datos de imágenes solamente.
    </p>

    <p>
      Comprimí esas imágenes un 70% y bajás a 90 GB — un ahorro de 210 GB por
      mes. Dependiendo de los precios de tu CDN, eso puede traducirse en cientos
      de dólares ahorrados anualmente. Para sitios con mucho tráfico, los
      ahorros se multiplican rápidamente.
    </p>

    <p>
      El ahorro de ancho de banda también beneficia directamente a tus
      visitantes. Los usuarios con planes de datos móviles limitados consumen
      menos de su asignación, y los visitantes en regiones donde los datos son
      caros — algo común en partes de África, Sudamérica y el Sudeste Asiático —
      agradecerán una página más liviana.
    </p>

    <h2 id="bounce-rate">Reducción de la Tasa de Rebote</h2>

    <p>
      La relación entre velocidad de página y tasa de rebote está bien
      documentada. Investigaciones de Akamai descubrieron que un retraso de 100
      milisegundos en el tiempo de carga reduce las tasas de conversión hasta un
      7%. Amazon reportó que cada 100 ms de latencia les costaba un 1% en
      ventas.
    </p>

    <p>
      Tus visitantes hacen juicios rápidos. Si una página se siente lenta —
      incluso de forma subconsciente — es más probable que presionen el botón de
      volver atrás. Las imágenes que cargan lento crean una cascada de
      impresiones negativas: espacios en blanco donde deberían estar las fotos,
      saltos de diseño cuando las imágenes aparecen, y una sensación general de
      que el sitio no es confiable o no está bien mantenido.
    </p>

    <p>
      Las imágenes comprimidas eliminan estos problemas. La página se renderiza
      rápido, el diseño se mantiene estable y los visitantes pueden enfocarse en
      tu contenido en vez de esperar a que aparezca.
    </p>

    <h2 id="how-to-compress">Cómo Empezar a Comprimir Tus Imágenes Hoy</h2>

    <p>
      La buena noticia es que la compresión de imágenes no requiere herramientas
      costosas ni conocimientos técnicos avanzados. Con{' '}
      <a href="/es/">ShrinkImg</a>, podés comprimir imágenes directamente en tu
      navegador — sin subir archivos, sin instalaciones, y con total privacidad
      ya que todo se ejecuta localmente en tu dispositivo.
    </p>

    <p>Acá te dejamos un flujo de trabajo práctico:</p>

    <ul>
      <li>
        <strong>Redimensioná primero</strong> — si tu imagen tiene 4000 px de
        ancho pero se muestra a 800 px, redimensionala antes de comprimir. Vas a
        eliminar píxeles innecesarios y obtener un archivo mucho más pequeño.
      </li>
      <li>
        <strong>Elegí el formato correcto</strong> — usá WebP para el mejor
        equilibrio entre calidad y tamaño, AVIF para máxima compresión, y PNG
        solo cuando necesites transparencia lossless. Revisá nuestra{' '}
        <a href="/es/blog/jpg-vs-png-vs-webp-vs-avif">
          guía comparativa de formatos
        </a>{' '}
        para recomendaciones detalladas.
      </li>
      <li>
        <strong>Apuntá a calidad 75–85</strong> — para fotografías, este rango
        ofrece una reducción del 60–80% en tamaño de archivo sin pérdida de
        calidad perceptible en tamaños normales de visualización.
      </li>
      <li>
        <strong>Siempre compará</strong> — ShrinkImg muestra las versiones
        original y comprimida lado a lado para que puedas verificar el resultado
        antes de descargar.
      </li>
    </ul>

    <h2 id="real-world-impact">El Impacto Real: Antes y Después</h2>

    <p>
      Pensá en un sitio web típico de un pequeño negocio con 10 páginas, cada
      una con 3–5 imágenes. Sin optimización, el peso total de imágenes podría
      ser de 50 MB en todo el sitio. Después de la compresión:
    </p>

    <ul>
      <li>El peso total de imágenes baja a ~10 MB (reducción del 80%)</li>
      <li>
        El tiempo promedio de carga disminuye de 4.5 segundos a 1.8 segundos
      </li>
      <li>
        El LCP mejora de 3.8 segundos a 1.5 segundos (aprobando Core Web Vitals)
      </li>
      <li>
        El uso mensual de ancho de banda baja más de 200 GB para un sitio con
        tráfico moderado
      </li>
      <li>
        La tasa de rebote típicamente disminuye entre un 15–25% después de las
        mejoras de velocidad
      </li>
    </ul>

    <p>
      Estos no son números teóricos — son el tipo de resultados que los dueños
      de sitios ven consistentemente cuando se comprometen a comprimir cada
      imagen antes de publicar. El esfuerzo es mínimo, pero el impacto en
      rendimiento, SEO y experiencia de usuario es sustancial.
    </p>

    <p>
      Si tenés un{' '}
      <a href="/es/blog/optimize-images-wordpress">sitio en WordPress</a>, la
      optimización de imágenes es aún más crítica ya que los temas y page
      builders tienden a agregar múltiples tamaños de imagen por cada carga.
    </p>

    <p>
      La compresión de imágenes no es opcional en 2026 — es una parte
      fundamental de construir sitios web rápidos, accesibles y amigables con
      los buscadores. Empezá a comprimir tus imágenes hoy y comprobá la
      diferencia por vos mismo.
    </p>
  </Fragment>
);

export default WhyImageCompressionMattersEs;
