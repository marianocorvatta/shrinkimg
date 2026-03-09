import { h, Fragment, FunctionalComponent } from 'preact';

const ImageOptimizationMistakesSeoEs: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Puntos Clave</h2>
      <ul>
        <li>
          La mayoría de los problemas de SEO de imágenes caen en dos categorías:
          archivos demasiado grandes, o metadatos faltantes o incorrectos
        </li>
        <li>
          Las imágenes sin comprimir son la causa principal de puntuaciones de
          velocidad de página lentas
        </li>
        <li>
          El texto alternativo faltante es tanto una falla de accesibilidad como
          una señal de SEO perdida
        </li>
        <li>
          Servir imágenes sobredimensionadas (más anchas que el slot de
          visualización) desperdicia ancho de banda sin beneficio visual
        </li>
        <li>
          Los nombres de archivos genéricos como IMG_4532.jpg no proporcionan
          ninguna señal de palabras clave a los motores de búsqueda
        </li>
      </ul>
    </div>

    <p>
      Las imágenes son la fuente más común de problemas de velocidad de página y
      una de las áreas más ignoradas del SEO en página. Los errores rara vez son
      exóticos — la mayoría de los sitios cometen el mismo puñado de errores que
      son sencillos de corregir una vez que sabés qué buscar.
    </p>

    <p>
      Acá están los diez errores más comunes de optimización de imágenes, por
      qué perjudican tu posicionamiento y cómo corregirlos.
    </p>

    <h2 id="mistake-1">1. No Comprimir las Imágenes Antes de Subirlas</h2>

    <p>
      El error más común y de mayor impacto: subir imágenes en resolución de
      cámara (3–15 MB cada una) directamente a un CMS sin compresión. Un solo
      JPEG sin comprimir de una cámara moderna puede ser más grande que toda una
      página web bien optimizada.
    </p>

    <p>
      <strong>Por qué perjudica:</strong> El tiempo de carga de la página
      impacta directamente en los puntajes de Core Web Vitals — el LCP en
      particular frecuentemente está bloqueado por el tiempo de descarga de una
      imagen hero grande. Google usa señales de experiencia de página incluyendo
      Core Web Vitals como factor de posicionamiento. Las páginas lentas también
      ven tasas de rebote más altas, lo que agrava el daño al SEO.
    </p>

    <p>
      <strong>Solución:</strong> Comprimí cada imagen antes de subirla a tu CMS.
      Usá ShrinkImg para comprimir imágenes completamente en tu navegador — no
      se requieren subidas a servidores de terceros. Apuntá a 80–150 KB para
      imágenes de posts de blog, 150–300 KB para imágenes hero y 60–120 KB para
      miniaturas de producto.
    </p>

    <h2 id="mistake-2">2. Usar JPEG Cuando WebP Está Disponible</h2>

    <p>
      JPEG fue el estándar web para fotografías durante décadas, pero WebP lo
      supera en todas las métricas medibles. En 2026, el soporte de WebP en
      navegadores es universal — no hay razón para servir JPEG para contenido
      nuevo.
    </p>

    <p>
      <strong>Por qué perjudica:</strong> WebP produce archivos 25–35% más
      pequeños que JPEG a calidad equivalente. Eso es una cantidad significativa
      de peso de página innecesario que cada visitante tiene que descargar. Para
      sitios de e-commerce con cientos de imágenes de producto, el impacto
      acumulado es sustancial.
    </p>

    <p>
      <strong>Solución:</strong> Convertí todas las imágenes nuevas a WebP antes
      de subir. Para bibliotecas JPEG existentes, priorizá convertir primero las
      páginas de mayor tráfico. ShrinkImg convierte cualquier imagen a WebP
      directamente en tu navegador. Mirá nuestra{' '}
      <a href="/es/blog/webp-guide-2026/">guía completa de WebP</a> para más
      detalles.
    </p>

    <h2 id="mistake-3">3. Texto Alternativo Faltante o Genérico</h2>

    <p>
      El texto alternativo (el atributo <code>alt</code> en las etiquetas{' '}
      <code>&lt;img&gt;</code>) sirve dos propósitos: provee una descripción de
      texto para los lectores de pantalla (accesibilidad), y le da a los motores
      de búsqueda una descripción textual del contenido de la imagen (SEO).
    </p>

    <p>
      <strong>Por qué perjudica:</strong> Los motores de búsqueda no pueden
      interpretar el contenido de las imágenes como lo hacen los humanos. El
      texto alternativo es la señal principal que usan para entender de qué
      trata una imagen. El texto alternativo faltante significa que la imagen no
      contribuye nada a tu targeting de palabras clave. El texto alternativo
      genérico como "imagen" o "foto" es solo marginalmente mejor que faltante.
      Esto también crea fallas de accesibilidad que pueden tener implicaciones
      legales.
    </p>

    <p>
      <strong>Solución:</strong> Escribí texto alternativo descriptivo para cada
      imagen no decorativa. Incluí palabras clave relevantes de forma natural —
      describí lo que muestra la imagen, no lo que querés posicionar. Para
      imágenes de producto: "Zapatilla de running de cuero azul, vista lateral"
      es mejor que "zapatilla" o dejarlo en blanco. Las imágenes decorativas
      (separadores, patrones de fondo) deben tener <code>alt=""</code>.
    </p>

    <h2 id="mistake-4">4. Servir Imágenes Sobredimensionadas</h2>

    <p>
      Un error común al construir sitios responsivos: subir una imagen grande
      única (2000px de ancho) y dejar que CSS la escale para adaptarse a
      contenedores más pequeños. El navegador descarga la imagen en resolución
      completa independientemente del tamaño de visualización.
    </p>

    <p>
      <strong>Por qué perjudica:</strong> Los usuarios móviles con pantallas más
      pequeñas descargan el mismo archivo grande que los usuarios de escritorio
      — desperdiciando ancho de banda y ralentizando los tiempos de carga.
      PageSpeed Insights de Google marcará esto como "Dimensionar imágenes
      correctamente" e impacta directamente en tu puntaje de rendimiento.
    </p>

    <p>
      <strong>Solución:</strong> Redimensioná las imágenes para que coincidan
      con sus dimensiones de visualización antes de subir. Si una imagen de post
      de blog se muestra a 800px de ancho en escritorio y 400px en móvil, servá
      una imagen de 800px (no una de 2400px). Para resultados óptimos,
      implementá imágenes responsivas con el atributo HTML <code>srcset</code>{' '}
      para servir diferentes tamaños a diferentes dispositivos. ShrinkImg te
      permite establecer un ancho máximo al comprimir — usalo para redimensionar
      y comprimir en un solo paso.
    </p>

    <h2 id="mistake-5">5. Nombres de Archivos Genéricos</h2>

    <p>
      Nombres de archivos como <code>IMG_4532.jpg</code>,{' '}
      <code>DSC00291.jpg</code> o <code>imagen (1).jpg</code> no proporcionan
      información contextual a los motores de búsqueda. También son inútiles
      para el posicionamiento en la Búsqueda de Imágenes de Google.
    </p>

    <p>
      <strong>Por qué perjudica:</strong> Los nombres de archivos son una señal
      de SEO débil pero real. Más importante, afectan cómo aparecen las imágenes
      en la Búsqueda de Imágenes de Google — las imágenes con nombres
      descriptivos aparecen para consultas relevantes, mientras que los nombres
      predeterminados de cámara no.
    </p>

    <p>
      <strong>Solución:</strong> Nombrá los archivos de imagen de forma
      descriptiva usando guiones para separar palabras:{' '}
      <code>zapatilla-running-cuero-azul-vista-lateral.webp</code> es mejor que{' '}
      <code>IMG_4532.jpg</code>. Incluí la palabra clave principal de la página
      de forma natural. Renombrá los archivos antes de subir — renombrarlos
      después rompe las URLs existentes y requiere redirecciones.
    </p>

    <h2 id="mistake-6">6. No Usar Carga Diferida (Lazy Loading)</h2>

    <p>
      Por defecto, los navegadores descargan todas las imágenes de una página
      como parte de la carga inicial — incluyendo imágenes que están muy por
      debajo del fold y no se verán hasta que el usuario se desplace.
    </p>

    <p>
      <strong>Por qué perjudica:</strong> Descargar imágenes fuera de pantalla
      retrasa la renderización del contenido visible, empeorando el LCP y otros
      Core Web Vitals. También desperdicia ancho de banda para usuarios que no
      se desplazan hasta el final de páginas largas.
    </p>

    <p>
      <strong>Solución:</strong> Agregá <code>loading="lazy"</code> a todas las
      imágenes que no están en el viewport inicial. Para la imagen hero o la
      primera imagen que ve un usuario, usá <code>loading="eager"</code>
      (o omitís el atributo — eager es el predeterminado). La mayoría de las
      plataformas CMS modernas y constructores de páginas soportan carga
      diferida nativa.
    </p>

    <h2 id="mistake-7">7. Atributos de Ancho y Alto Faltantes</h2>

    <p>
      Cuando las imágenes no tienen atributos explícitos de ancho y alto en su
      HTML, el navegador no conoce sus dimensiones hasta que se descargan. Esto
      causa cambios de diseño cuando las imágenes se cargan.
    </p>

    <p>
      <strong>Por qué perjudica:</strong> Los cambios de diseño son medidos por
      la métrica de Core Web Vitals CLS (Cumulative Layout Shift). Los puntajes
      altos de CLS indican una experiencia de usuario deficiente — contenido que
      salta mientras se cargan las imágenes — y Google usa CLS como señal de
      posicionamiento. También degrada el rendimiento percibido.
    </p>

    <p>
      <strong>Solución:</strong> Siempre incluí los atributos <code>width</code>{' '}
      y <code>height</code> en las etiquetas <code>&lt;img&gt;</code>. El CSS
      moderno puede usar estos para calcular la relación de aspecto y reservar
      espacio, previniendo cambios de diseño. La mayoría de las plataformas CMS
      hacen esto automáticamente cuando se suben imágenes a través de la
      biblioteca de medios.
    </p>

    <h2 id="mistake-8">8. Sobrecomprimir Imágenes Pequeñas</h2>

    <p>
      En la búsqueda de tamaños de archivo pequeños, algunos sitios aplican
      compresión agresiva a imágenes que se muestran pequeñas — miniaturas,
      avatares, íconos. En tamaños de visualización pequeños, los artefactos de
      compresión se vuelven proporcionalmente más visibles.
    </p>

    <p>
      <strong>Por qué perjudica:</strong> Una miniatura comprimida a calidad 50
      en tamaño de visualización de 150px mostrará artefactos visibles —
      texturas en bloque, bandas de color — que se ven poco profesionales y
      reflejan mal la calidad del sitio. Esto importa para E-A-T (Experiencia,
      Autoridad, Confiabilidad), que Google usa para evaluar la calidad del
      sitio.
    </p>

    <p>
      <strong>Solución:</strong> Para miniaturas mostradas por debajo de 300px,
      usá calidad 80–85 en lugar de valores más bajos. El tamaño adicional del
      archivo es mínimo (los archivos de miniaturas son pequeños de todas
      formas), y la mejora de calidad es visible. Reservá la compresión agresiva
      para imágenes grandes donde el impacto en el tamaño de archivo es
      significativo.
    </p>

    <h2 id="mistake-9">9. Ignorar las Imágenes Open Graph</h2>

    <p>
      Las imágenes Open Graph (OG) son las imágenes de vista previa que se
      muestran cuando una URL se comparte en redes sociales. La mayoría de los
      sitios o las ignoran (dependiendo de la selección automática de imágenes)
      o usan la misma imagen grande sin optimizar para cada página.
    </p>

    <p>
      <strong>Por qué perjudica:</strong> Las imágenes OG sin optimizar pueden
      ser muy grandes — frecuentemente capturas de pantalla o banners en
      resolución completa. Aunque no afectan directamente la velocidad de la
      página (no están en la página), afectan cómo aparece el sitio cuando se
      comparte y pueden impactar las tasas de clics del tráfico social, lo que
      afecta las métricas generales de participación del sitio.
    </p>

    <p>
      <strong>Solución:</strong> Creá imágenes OG dedicadas con tamaño de
      1200×630px para cada página clave. Comprimílas como WebP o JPEG a calidad
      80. Configurálas vía la etiqueta meta <code>og:image</code>. Hacélas
      visualmente distintas por página — no uses la misma imagen genérica para
      todo tu sitio.
    </p>

    <h2 id="mistake-10">
      10. Sin Sitemap de Imágenes o Datos Estructurados Faltantes
    </h2>

    <p>
      Google descubre imágenes a través del rastreo, pero los sitemaps de
      imágenes hacen esto más confiable. Para e-commerce, los datos
      estructurados para imágenes de producto son una oportunidad adicional
      perdida.
    </p>

    <p>
      <strong>Por qué perjudica:</strong> Sin un sitemap de imágenes, Google
      puede perderse imágenes incrustadas vía CSS background-image o JavaScript.
      Para e-commerce, los datos estructurados de imágenes de producto pueden
      habilitar resultados ricos en Google Shopping y la búsqueda de imágenes,
      lo que genera tráfico adicional.
    </p>

    <p>
      <strong>Solución:</strong> Incluí información de imágenes en tu sitemap
      XML (agregá etiquetas <code>&lt;image:image&gt;</code> para las imágenes
      clave de cada página). Para e-commerce, implementá el marcado de esquema
      de Producto incluyendo la propiedad <code>image</code>. La mayoría de los
      plugins de SEO (Yoast, RankMath) manejan los sitemaps de imágenes
      automáticamente si están configurados.
    </p>

    <h2 id="getting-started">
      Por Dónde Empezar: Lista de Correcciones Priorizadas
    </h2>

    <p>
      Si enfrentás múltiples problemas en tu sitio, atacálos en orden de
      impacto:
    </p>

    <ol>
      <li>
        Comprimí todas las imágenes (error #1) — el mayor impacto por lejos
      </li>
      <li>Convertí a WebP (error #2) — fácil de combinar con la compresión</li>
      <li>
        Corregí el texto alternativo faltante (error #3) — accesibilidad y SEO
        combinados
      </li>
      <li>
        Agregá carga diferida (error #6) — un cambio de atributo, impacto
        medible
      </li>
      <li>
        Redimensioná imágenes sobredimensionadas (error #4) — especialmente para
        rendimiento móvil
      </li>
      <li>
        Corregí nombres de archivos en contenido nuevo (error #5) — no renombrés
        archivos existentes sin redirecciones
      </li>
    </ol>

    <p>
      Para un enfoque integral de rendimiento de imágenes que cubre{' '}
      <a href="/es/blog/core-web-vitals-images/">Core Web Vitals</a> en detalle,
      o un flujo de trabajo de optimización completo para{' '}
      <a href="/es/blog/image-optimization-ecommerce/">
        imágenes de producto de e-commerce
      </a>
      , mirá esas guías dedicadas. Empezá con la compresión — corregir el error
      #1 solo frecuentemente produce una reducción del 30–60% en el peso total
      de la página y una mejora medible en el rendimiento en búsquedas.
    </p>
  </Fragment>
);

export default ImageOptimizationMistakesSeoEs;
