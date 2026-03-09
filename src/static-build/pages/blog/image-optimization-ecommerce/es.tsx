import { h, Fragment, FunctionalComponent } from 'preact';

const ImageOptimizationEcommerceEs: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Puntos Clave</h2>
      <ul>
        <li>
          Una mejora de 100 ms en el tiempo de carga se correlaciona con un 1%
          más de ingresos en tiendas online
        </li>
        <li>
          Las páginas de producto con imágenes optimizadas convierten hasta un
          25% mejor que las lentas
        </li>
        <li>
          Usá imágenes de producto de 800–1200 px comprimidas a WebP con calidad
          80
        </li>
        <li>
          Las miniaturas deben pesar menos de 15 KB — se cargan todas juntas en
          páginas de categoría
        </li>
        <li>
          Google Shopping tiene requisitos de calidad de imagen; las imágenes
          mal optimizadas afectan el rendimiento de los anuncios
        </li>
      </ul>
    </div>

    <p>
      En el e-commerce, los milisegundos se traducen directamente en dinero. Un
      estudio de Deloitte encontró que una mejora de 0.1 segundos en la
      velocidad del sitio móvil aumentó las tasas de conversión en un 8.4% y el
      valor promedio del pedido en un 9.2%. Las imágenes son el mayor
      contribuyente a las páginas de producto lentas — y el más fácil de
      solucionar.
    </p>

    <p>
      Esta guía cubre todo lo que necesitás saber sobre la optimización de
      imágenes de producto: los tamaños, formatos y niveles de compresión
      correctos que maximizan la calidad visual mientras mantienen tus páginas
      de producto lo suficientemente rápidas para convertir.
    </p>

    <h2 id="speed-conversions">
      Cómo la Velocidad Afecta las Conversiones en E-commerce
    </h2>

    <p>
      La investigación sobre velocidad de página y conversiones es inequívoca.
      Google encontró que el 53% de los usuarios móviles abandona una página que
      tarda más de 3 segundos en cargar. Para una tienda que genera $50,000 por
      mes, reducir 2 segundos del tiempo de carga de tu página de producto
      podría significar $10,000–$15,000 en ingresos mensuales adicionales.
    </p>

    <p>
      Las páginas de producto son típicamente las páginas más pesadas en un
      sitio de e-commerce. Un solo listing de producto puede cargar 1 imagen
      principal, 5–8 fotos de galería, una imagen de zoom y 10–20 miniaturas de
      productos relacionados. Si cada imagen es un JPG sin comprimir de una
      cámara o herramienta de diseño, podrías estar sirviendo fácilmente 30–50
      MB de imágenes en una sola página.
    </p>

    <p>
      Comprimí esas mismas imágenes correctamente y el total baja a 2–4 MB — una
      reducción de más del 90% sin diferencia de calidad visible en tamaños de
      visualización. Eso se traduce en páginas de producto que cargan en menos
      de 2 segundos en lugar de 8.
    </p>

    <h2 id="product-image-sizes">
      Tamaños Recomendados para Imágenes de Producto
    </h2>

    <p>
      Diferentes contextos de imagen en una página de producto tienen diferentes
      requisitos. Acá tenés una referencia práctica:
    </p>

    <table>
      <thead>
        <tr>
          <th>Tipo de imagen</th>
          <th>Tamaño recomendado</th>
          <th>Tamaño objetivo</th>
          <th>Notas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Imagen principal del producto</td>
          <td>1000–1200 px</td>
          <td>80–150 KB</td>
          <td>Soporta zoom sin ser excesivo</td>
        </tr>
        <tr>
          <td>Zoom / vista ampliada</td>
          <td>2000–2400 px</td>
          <td>200–400 KB</td>
          <td>Solo se carga al interactuar el usuario</td>
        </tr>
        <tr>
          <td>Miniaturas de galería</td>
          <td>100–150 px</td>
          <td>5–15 KB</td>
          <td>Se cargan todas a la vez — mantené muy pequeñas</td>
        </tr>
        <tr>
          <td>Miniatura de categoría / listing</td>
          <td>400–600 px</td>
          <td>20–50 KB</td>
          <td>Varias se cargan simultáneamente en páginas de categoría</td>
        </tr>
        <tr>
          <td>Productos relacionados</td>
          <td>300–400 px</td>
          <td>15–30 KB</td>
          <td>A menudo se muestran 8–20 a la vez</td>
        </tr>
        <tr>
          <td>Carrito / mini-carrito</td>
          <td>80–120 px</td>
          <td>3–8 KB</td>
          <td>Muy pequeñas — mantené bajo 10 KB</td>
        </tr>
      </tbody>
    </table>

    <h3 id="zoom-images">Una Nota sobre las Imágenes de Zoom</h3>
    <p>
      Muchas tiendas usan plugins de zoom en JavaScript que cargan una imagen de
      alta resolución cuando el usuario pasa el cursor o toca el producto. Estas
      imágenes de zoom necesitan ser más grandes — 2000–2400 px — pero no
      necesitan cargarse con la página inicial. Configurá tu plugin de zoom para
      cargarlas de forma lazy al interactuar. Una imagen de zoom de 400 KB que
      carga solo cuando se solicita no tiene impacto en el tiempo de carga
      inicial.
    </p>

    <h2 id="best-format">Mejor Formato para Imágenes de Producto</h2>

    <p>
      <strong>
        WebP es la mejor opción para imágenes de producto en 2026.
      </strong>{' '}
      Es soportado por todos los navegadores modernos (97%+) y produce archivos
      25–35% más pequeños que JPGs equivalentes. Para una tienda con 500
      productos, esto se traduce en gigabytes de ahorro de almacenamiento y
      cargas de páginas de categoría dramáticamente más rápidas.
    </p>

    <p>
      Si tu plataforma no soporta cargas WebP nativamente (algunos temas viejos
      de Shopify, Magento 1), usá JPG con calidad 80–85. Evitá PNG para fotos de
      producto — los archivos son enormes y no ofrecen ningún beneficio de
      calidad sobre JPG para imágenes fotográficas.
    </p>

    <p>
      Para gráficos con transparencia — imágenes de estilo de vida con fondos
      recortados, superposiciones de marca — WebP con canal alfa o PNG son ambas
      opciones válidas. WebP será significativamente más pequeño.
    </p>

    <h2 id="shopify-platforms">Notas por Plataforma</h2>

    <h3 id="shopify">Shopify</h3>
    <p>
      Shopify sirve automáticamente WebP a los navegadores que lo soportan y
      JPEG a los demás, pero solo si subís imágenes fuente de alta calidad. Subí
      JPG con calidad 85+ o WebP — Shopify recodifica con sus propias
      configuraciones. La calidad de la imagen fuente importa porque Shopify
      genera múltiples tamaños a partir de ella.
    </p>

    <h3 id="woocommerce">WooCommerce</h3>
    <p>
      WooCommerce funciona como WordPress — genera múltiples variantes de tamaño
      desde tu carga. Comprimí y redimensioná tus imágenes antes de subir, como
      se describe en nuestra{' '}
      <a href="/es/blog/optimize-images-wordpress/">
        guía de optimización de imágenes para WordPress
      </a>
      . Las cargas WebP son soportadas desde WooCommerce 8.x con el tema
      correcto.
    </p>

    <h2 id="google-shopping">Requisitos de Imagen de Google Shopping</h2>

    <p>
      Si corrés anuncios de Google Shopping, la calidad de la imagen afecta
      directamente el rendimiento de tus anuncios. Los requisitos y mejores
      prácticas de Google:
    </p>

    <ul>
      <li>
        <strong>Tamaño mínimo:</strong> 100 × 100 px (250 × 250 px para ropa).
        Google recomienda al menos 800 × 800 px para el mejor rendimiento de
        anuncios.
      </li>
      <li>
        <strong>Tamaño máximo de archivo:</strong> 16 MB. En la práctica,
        imágenes de más de 2 MB pueden ralentizar el rastreo de tu feed.
      </li>
      <li>
        <strong>Sin marcas de agua, bordes ni texto promocional</strong>{' '}
        superpuesto en la imagen principal del producto. Las tasas de rechazo
        aumentan cuando las imágenes violan esto.
      </li>
      <li>
        <strong>Fondos blancos o neutros</strong> funcionan mejor para la
        mayoría de las categorías de productos.
      </li>
    </ul>

    <p>
      Una imagen de producto de 800 × 800 px en WebP con calidad 80 típicamente
      pesa alrededor de 40–80 KB — bien dentro de los límites y rápida de
      rastrear.
    </p>

    <h2 id="mobile-shopping">Experiencia de Compra Móvil</h2>

    <p>
      El comercio móvil representa más del 70% del tráfico de e-commerce
      globalmente. Los compradores móviles son impacientes — un retraso de 1
      segundo en móvil aumenta la tasa de rebote en un 123%, según
      investigaciones de Google.
    </p>

    <p>
      En móvil, las imágenes de producto se cargan secuencialmente mientras el
      usuario hace scroll. Las grillas de miniaturas son particularmente
      problemáticas — una página de categoría que muestra 24 productos, cada uno
      con una miniatura de 200 KB, está descargando 4.8 MB solo por los tiles de
      productos. Reducí las miniaturas a 30 KB cada una y estás sirviendo 720 KB
      en cambio — la página carga 6 veces más rápido.
    </p>

    <p>Optimizaciones prácticas para móvil:</p>

    <ul>
      <li>
        Usá lazy loading en imágenes debajo del fold — dejá que el navegador
        cargue primero los productos visibles
      </li>
      <li>
        Servís imágenes más pequeñas a viewports móviles usando atributos{' '}
        <code>srcset</code> y <code>sizes</code> donde tu plataforma lo soporte
      </li>
      <li>
        Mantené las imágenes de producto above-the-fold (la primera fila de una
        página de categoría) con carga eager y menos de 50 KB cada una
      </li>
      <li>
        Nunca uses imágenes de alta resolución para grillas de miniaturas —
        generá y comprimí tamaños de miniatura dedicados
      </li>
    </ul>

    <h2 id="batch-workflow">
      Cómo Comprimir Imágenes de Producto Con ShrinkImg
    </h2>

    <p>Para un catálogo de productos, el flujo de trabajo es:</p>

    <ol>
      <li>
        <strong>Empezá desde la fuente de más alta calidad.</strong> Usá las
        fotos originales de estudio o renders antes de cualquier compresión.
        Comprimir un JPG ya comprimido acumula artefactos.
      </li>
      <li>
        <strong>Redimensioná a 1000–1200 px de ancho.</strong> Este es el tamaño
        correcto para una imagen principal de producto que también soporte un
        zoom razonable.
      </li>
      <li>
        <strong>Comprimí a WebP con calidad 80.</strong>{' '}
        <a href="/es/">ShrinkImg</a> muestra el antes/después lado a lado —
        verificá que no haya diferencia de calidad visible antes de descargar.
      </li>
      <li>
        <strong>Creá versiones de miniatura separadas.</strong> Para páginas de
        categoría, redimensioná a 400–500 px y comprimí a calidad 75. Estas
        cargan en bloque así que cada KB cuenta.
      </li>
      <li>
        <strong>Nombrá los archivos de forma consistente.</strong> Una
        convención de nombres consistente (producto-slug-1.webp,
        producto-slug-2.webp) hace que la gestión de assets sea mucho más fácil
        a escala.
      </li>
    </ol>

    <p>
      La inversión inicial de tiempo de comprimir tu catálogo de productos paga
      dividendos continuamente. Páginas de producto más rápidas, mejores
      puntajes de Core Web Vitals, menores costos de ancho de banda del CDN y
      mayores tasas de conversión son todos efectos posteriores de este esfuerzo
      único.
    </p>

    <p>
      Para una comprensión más profunda de{' '}
      <a href="/es/blog/why-image-compression-matters/">
        por qué la compresión de imágenes es clave para el rendimiento web
      </a>{' '}
      o para aprender sobre las diferencias entre{' '}
      <a href="/es/blog/jpg-vs-png-vs-webp-vs-avif/">JPG, PNG, WebP y AVIF</a>,
      revisá esas guías después.
    </p>
  </Fragment>
);

export default ImageOptimizationEcommerceEs;
