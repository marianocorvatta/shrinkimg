import { h, Fragment, FunctionalComponent } from 'preact';

const CompressImagesBulkEs: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Puntos Clave</h2>
      <ul>
        <li>
          La compresión masiva es esencial cuando migrás sitios, construís
          catálogos o preparás portfolios
        </li>
        <li>
          ShrinkImg te permite soltar múltiples archivos a la vez — cada uno se
          procesa en tu navegador sin subir nada
        </li>
        <li>
          La misma configuración en todo el lote (mismo formato, misma calidad)
          produce un resultado visualmente uniforme
        </li>
        <li>
          Redimensioná antes de comprimir: establecé un ancho máximo por tipo de
          imagen y aplicalo uniformemente
        </li>
        <li>
          Nombrá los archivos sistemáticamente antes de comprimir para que la
          organización posterior sea rápida
        </li>
      </ul>
    </div>

    <p>
      La mayoría de las guías de compresión de imágenes se enfoca en una imagen
      a la vez. Pero las situaciones donde la compresión importa más — lanzar un
      sitio nuevo, migrar una biblioteca de contenido, subir un catálogo de
      productos — involucran decenas o cientos de imágenes a la vez. Manejarlas
      individualmente es impracticable. Necesitás un flujo de trabajo masivo y
      repetible.
    </p>

    <p>
      Esta guía cubre cuándo es necesaria la compresión masiva de imágenes, cómo
      manejarla eficientemente con ShrinkImg, y cómo mantener la calidad y
      consistencia en lotes grandes.
    </p>

    <h2 id="when-you-need-bulk">Cuándo Necesitás Comprimir Imágenes en Lote</h2>

    <h3 id="site-migration">Migración de Sitio Web</h3>
    <p>
      Migrar un sitio a una nueva plataforma — de Squarespace a WordPress, de un
      CMS personalizado a Shopify, de un hosting a otro — es el momento ideal
      para auditar y optimizar cada imagen de tu biblioteca. Las imágenes
      subidas hace años, antes del soporte de formatos modernos, pueden ser
      JPEGs sin comprimir de exportaciones de cámara. Un pase de compresión
      masiva antes de importar puede reducir tu biblioteca de medios un 60–80%.
    </p>

    <h3 id="ecommerce-catalog">Catálogo de Productos E-commerce</h3>
    <p>
      Lanzar una tienda nueva con 50, 200 o 500 productos significa procesar
      igual número de fotos de producto — a menudo en múltiples tamaños (imagen
      principal, miniatura, zoom). Este es exactamente el escenario donde un
      enfoque masivo sistemático vale la pena. Mirá nuestra{' '}
      <a href="/es/blog/image-optimization-ecommerce">
        guía de optimización de imágenes para e-commerce
      </a>{' '}
      para recomendaciones de tamaño por tipo de imagen.
    </p>

    <h3 id="portfolio-gallery">Portfolio o Galería de Fotos</h3>
    <p>
      Fotógrafos, diseñadores e ilustradores frecuentemente necesitan exportar
      todo un portfolio para la web. Las exportaciones de RAW de cámara o PSDs
      en alta resolución pueden pesar 10–30 MB cada una. La compresión masiva
      los lleva a tamaños web sin degradar la calidad visual que exhibe tu
      trabajo.
    </p>

    <h3 id="content-audit">Auditoría de Biblioteca de Contenido</h3>
    <p>
      Los blogs y sitios de noticias establecidos acumulan años de imágenes sin
      optimizar. Hacer un pase masivo sobre las imágenes de contenido antiguo
      reduce el peso de las páginas más viejas y puede mejorar los puntajes de{' '}
      <a href="/es/blog/core-web-vitals-images">Core Web Vitals</a> en todo el
      sitio cuando esas páginas se rastrean y los datos de CrUX se actualizan.
    </p>

    <h2 id="how-shrinkimg-handles-bulk">
      Cómo ShrinkImg Maneja Múltiples Archivos
    </h2>

    <p>
      ShrinkImg acepta múltiples archivos en una sola sesión. Podés arrastrar
      una carpeta de imágenes a la interfaz o seleccionar múltiples archivos a
      la vez desde el selector de archivos. Cada imagen se encola y procesa de
      forma independiente — la compresión se ejecuta completamente en tu
      navegador usando WebAssembly, así que nada se sube a ningún servidor. Toda
      tu biblioteca de imágenes permanece en tu dispositivo.
    </p>

    <p>
      Esto es particularmente importante para flujos de trabajo masivos con
      contenido sensible — fotos de clientes, imágenes confidenciales de
      productos antes de un lanzamiento, documentos personales convertidos a
      imágenes. Para una explicación completa de por qué la compresión basada en
      navegador es más segura que las herramientas del lado del servidor, mirá
      nuestra guía sobre{' '}
      <a href="/es/blog/online-image-compression-privacy">
        privacidad y seguridad en la compresión de imágenes
      </a>
      .
    </p>

    <h2 id="consistent-settings">Mantener Consistencia en un Lote</h2>

    <p>
      El mayor riesgo en la compresión masiva es la inconsistencia — algunas
      imágenes quedan más nítidas, otras más suaves, sin lógica visible en la
      variación. Así se evita:
    </p>

    <h3 id="same-format">
      Usá el Mismo Formato para Todas las Imágenes del Mismo Tipo
    </h3>
    <p>
      Decidí de antemano: las fotos de producto van en WebP con calidad 80, los
      logos van en PNG con máxima compresión, las imágenes hero van en WebP con
      calidad 85. Mezclar formatos sin un criterio claro crea un dolor de cabeza
      de mantenimiento e inconsistencia visual cuando las imágenes se muestran
      juntas en una grilla.
    </p>

    <h3 id="consistent-quality">Fijá la Configuración de Calidad</h3>
    <p>
      Elegí una configuración de calidad y aplicala uniformemente. Para
      fotografías, 75–80 es el rango correcto para entrega web — produce una
      reducción del 60–75% en tamaño de archivo sin diferencia perceptible en
      tamaños de visualización típicos. Evitá la tentación de aumentar la
      calidad para imágenes "importantes" — en tamaños web, la diferencia entre
      calidad 80 y calidad 95 es invisible pero la diferencia en tamaño de
      archivo es sustancial.
    </p>

    <h3 id="max-width">Establecé un Ancho Máximo por Categoría de Imagen</h3>
    <p>
      Establecé objetivos de ancho antes de empezar y aplicalos uniformemente:
    </p>
    <ul>
      <li>Imágenes hero: 1600 px</li>
      <li>Imágenes de posts de blog: 1200 px</li>
      <li>Imágenes de producto: 1000 px</li>
      <li>Miniaturas de galería: 500 px</li>
      <li>Tarjetas de contenido relacionado: 400 px</li>
    </ul>
    <p>
      Redimensioná cada imagen en una categoría a su ancho objetivo antes de
      aplicar la compresión. Las dimensiones consistentes hacen que el resultado
      comprimido sea visualmente uniforme y aseguran que no estés sirviendo
      archivos innecesariamente grandes en ningún slot.
    </p>

    <h2 id="organize-before">Organizá los Archivos Antes de Empezar</h2>

    <p>
      La compresión masiva es más fácil cuando tus archivos fuente están
      organizados antes de empezar, no después. Unos minutos de organización
      previa ahorran horas de confusión cuando los archivos comprimidos llegan a
      tu carpeta de descargas.
    </p>

    <h3 id="naming-convention">Establecé una Convención de Nombres</h3>
    <p>
      Nombrá los archivos fuente de acuerdo a su destino antes de comprimir. Un
      esquema de nombres como <code>categoria-nombre-producto-tamaño.webp</code>{' '}
      (p. ej., <code>zapatillas-trail-running-1000.webp</code>) deja claro de
      inmediato qué es el archivo, dónde pertenece y qué variante de tamaño
      representa.
    </p>

    <p>
      Evitá nombres como <code>IMG_4532.jpg</code> o <code>foto (1).jpg</code>.
      Cuando tenés 200 archivos comprimidos en una carpeta, los nombres
      genéricos hacen que emparejarlos con sus destinos sea un ejercicio manual
      frustrante.
    </p>

    <h3 id="folder-structure">Ordená por Tipo de Imagen</h3>
    <p>Agrupá las imágenes por tipo antes de comprimir:</p>
    <ul>
      <li>
        <code>/heroes/</code> — imágenes a ancho completo
      </li>
      <li>
        <code>/productos/</code> — fotos principales de producto
      </li>
      <li>
        <code>/miniaturas/</code> — imágenes pequeñas para tarjetas
      </li>
      <li>
        <code>/logos/</code> — gráficos PNG
      </li>
    </ul>
    <p>
      Procesá cada carpeta por separado, aplicando la configuración correcta
      para ese tipo de imagen. De esta forma el resultado ya está ordenado para
      cuando estés listo para subir.
    </p>

    <h2 id="workflow-recommendations">
      Flujo de Trabajo para Compresión Masiva
    </h2>

    <p>
      Acá está un proceso paso a paso confiable para comprimir un lote grande
      sin errores ni retrabajos:
    </p>

    <ol>
      <li>
        <strong>Auditá tus archivos fuente.</strong> Identificá cuáles imágenes
        ya están optimizadas (si las hay) y cuáles necesitan procesamiento.
        Separé las que no necesitan publicarse — el stock muerto es mejor
        eliminarlo que comprimirlo.
      </li>
      <li>
        <strong>Renombrá todos los archivos</strong> según tu convención de
        nombres antes de tocar las imágenes. Es mucho más fácil hacerlo en los
        archivos originales que en los resultados.
      </li>
      <li>
        <strong>Ordená por categoría</strong> (heroes, productos, miniaturas,
        logos) en carpetas separadas.
      </li>
      <li>
        <strong>Decidí la configuración por categoría:</strong> formato (WebP
        para fotos, PNG para gráficos), calidad (80 para estándar, 85 para
        hero), ancho máximo.
      </li>
      <li>
        <strong>Abrí ShrinkImg y soltá la primera carpeta de categoría.</strong>{' '}
        Aplicá configuración consistente y descargá todos los resultados.
      </li>
      <li>
        <strong>Revisá spot-check de cinco imágenes aleatorias</strong> de cada
        lote antes de subir. Verificá que la calidad se vea correcta y que los
        tamaños de archivo estén en el rango esperado.
      </li>
      <li>
        <strong>Subí a tu CMS o CDN</strong> en el mismo orden categoría por
        categoría en que los comprimiste.
      </li>
    </ol>

    <h2 id="quality-control">Control de Calidad a Escala</h2>

    <p>
      La comparación lado a lado en ShrinkImg te permite detectar problemas
      antes de descargar. Al procesar un lote, prestá especial atención a:
    </p>

    <ul>
      <li>
        <strong>Imágenes con texto fino o líneas definidas</strong> — estas son
        más sensibles a la compresión lossy. Considerá subir la calidad a 85
        para imágenes que contienen etiquetas de producto, precios o texto
        instructivo.
      </li>
      <li>
        <strong>Imágenes con áreas planas de color sólido</strong> — la
        compresión puede introducir bandas en gradientes y rellenos sólidos.
        Revisalas cuidadosamente, especialmente para imágenes críticas de marca.
      </li>
      <li>
        <strong>Imágenes muy oscuras o muy brillantes</strong> — el detalle de
        sombras y el recorte de luces se exageran con la compresión agresiva.
        Verificá que el detalle importante en luces y sombras se preserve.
      </li>
    </ul>

    <h2 id="post-batch-audit">Después del Lote: Verificá Antes de Publicar</h2>

    <p>Antes de subir las imágenes comprimidas a un sitio en vivo:</p>

    <ul>
      <li>
        Confirmá que el tamaño total del archivo está en el rango esperado. Si
        tu lote fuente era de 500 MB, una reducción del 70% debería producir
        aproximadamente 150 MB de resultado. Significativamente más sugiere que
        la configuración no se aplicó de forma consistente.
      </li>
      <li>
        Abrí cinco imágenes de resultado seleccionadas aleatoriamente en un
        navegador y compáralas con la fuente. La diferencia debería ser
        imperceptible en los tamaños en que aparecerán en la página.
      </li>
      <li>
        Pasá una página de prueba por{' '}
        <a href="/es/blog/core-web-vitals-images">PageSpeed Insights</a> después
        de subir el primer lote para verificar la mejora de rendimiento
        esperada.
      </li>
    </ul>

    <p>
      La compresión masiva de imágenes es una operación de alto impacto — unas
      horas de procesamiento sistemático pueden mejorar dramáticamente el
      rendimiento de tu sitio, reducir los costos de hosting y corregir{' '}
      <a href="/es/blog/why-image-compression-matters">
        la causa número uno de las páginas web lentas
      </a>{' '}
      en toda tu biblioteca de contenido a la vez. Empezá con tus páginas más
      pesadas primero, trabajá categoría por categoría, y usá ShrinkImg para
      mantener cada imagen fuera del servidor hasta que ya esté optimizada.
    </p>
  </Fragment>
);

export default CompressImagesBulkEs;
