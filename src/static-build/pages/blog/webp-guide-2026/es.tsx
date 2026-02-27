import { h, Fragment, FunctionalComponent } from 'preact';

const WebpGuide2026Es: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Puntos Clave</h2>
      <ul>
        <li>
          WebP tiene soporte universal en navegadores en 2026 — todos los
          navegadores principales lo soportan desde hace años
        </li>
        <li>
          WebP reduce el tamaño de archivo un 25–35% comparado con JPEG a
          calidad visual equivalente
        </li>
        <li>
          Usá WebP para fotografías, imágenes complejas y cualquier cosa que
          antes era un JPEG
        </li>
        <li>
          AVIF ofrece compresión ligeramente mejor que WebP pero codificación
          más lenta — WebP es el estándar práctico
        </li>
        <li>
          ShrinkImg convierte cualquier imagen a WebP completamente en tu
          navegador, sin necesidad de subir archivos
        </li>
      </ul>
    </div>

    <p>
      WebP existe desde 2010, pero su curva de adopción fue lenta — el soporte
      de navegadores era incompleto, WordPress no lo manejaba nativamente, y la
      mayoría de los pipelines de imágenes no estaban configurados para él. En
      2026, esas barreras desaparecieron. WebP es el formato predeterminado
      práctico para imágenes web, soportado en todas partes y entregando mejoras
      de compresión significativas sobre JPEG.
    </p>

    <p>
      Esta guía cubre todo lo que necesitás saber sobre WebP en 2026: qué es,
      cómo se compara con las alternativas, cuándo usarlo y cómo convertir tu
      biblioteca de imágenes existente.
    </p>

    <h2 id="what-is-webp">¿Qué Es WebP?</h2>

    <p>
      WebP es un formato de imagen desarrollado por Google y lanzado en 2010.
      Usa algoritmos de compresión tanto con pérdida como sin pérdida derivados
      del codec de video VP8. Las propiedades clave que lo hacen útil para la
      web:
    </p>

    <ul>
      <li>
        <strong>Compresión con pérdida:</strong> Mejor eficiencia que JPEG a
        calidad equivalente. Un WebP a calidad 80 produce un archivo más pequeño
        que un JPEG a calidad 80 con menos degradación visible.
      </li>
      <li>
        <strong>Compresión sin pérdida:</strong> Comprime mejor que PNG para
        imágenes con muchos colores mientras mantiene la reproducción exacta de
        píxeles.
      </li>
      <li>
        <strong>Soporte de transparencia:</strong> Como PNG, WebP soporta
        transparencia de canal alfa — a diferencia de JPEG.
      </li>
      <li>
        <strong>Soporte de animación:</strong> WebP puede almacenar animaciones
        como GIF, con tamaños de archivo mucho menores.
      </li>
    </ul>

    <p>
      Para uso web, el modo con pérdida es más relevante. La eficiencia de
      compresión de WebP proviene de su capacidad de modelar y descartar
      información visual de manera más inteligente que el algoritmo basado en
      DCT de JPEG.
    </p>

    <h2 id="browser-support-2026">Soporte de Navegadores en 2026</h2>

    <p>
      El soporte de WebP en 2026 es efectivamente universal para los usuarios
      web. Chrome, Firefox, Safari, Edge y Opera han soportado WebP durante
      años. Safari — históricamente el último gran rezagado — agregó soporte
      completo de WebP en Safari 14 (lanzado con iOS 14 en 2020). No hay
      segmentos significativos de tu base de usuarios que carezcan de soporte
      WebP.
    </p>

    <p>
      El antiguo workaround de servir fallbacks JPEG vía el elemento HTML{' '}
      <code>&lt;picture&gt;</code> ya no es necesario para la mayoría de los
      sitios. Podés servir archivos WebP directamente. La única excepción es si
      tenés analíticas mostrando uso significativo de versiones de navegador muy
      antiguas — pero en 2026, esa audiencia es insignificantemente pequeña para
      la mayoría de los sitios.
    </p>

    <h2 id="webp-vs-jpeg">WebP vs JPEG</h2>

    <p>
      Para fotografías e imágenes complejas con gradientes, texturas y muchos
      colores, WebP supera consistentemente a JPEG:
    </p>

    <ul>
      <li>
        <strong>Tamaño de archivo a calidad equivalente:</strong> WebP es
        típicamente 25–35% más pequeño que JPEG al mismo nivel de calidad
        perceptual.
      </li>
      <li>
        <strong>Calidad a tamaño de archivo equivalente:</strong> Un archivo
        WebP del mismo tamaño que un JPEG se verá visualmente mejor — menos
        artefactos de compresión en bloque, mejor preservación de bordes.
      </li>
      <li>
        <strong>Rango de compresión práctico:</strong> WebP a calidad 75–80 es
        el punto óptimo para entrega web — excelente calidad visual con
        reducción del tamaño de archivo del 60–75% versus fuente sin comprimir.
      </li>
    </ul>

    <p>
      La ventaja de compresión proviene del modelo de predicción más sofisticado
      de WebP. JPEG opera en bloques de 8x8 píxeles y puede producir
      "cuadriculado" visible a configuraciones de baja calidad. WebP usa tamaños
      de bloque variables y predicción intra-frame más avanzada, que produce
      mejores resultados especialmente a tasas de bits más bajas.
    </p>

    <h2 id="webp-vs-png">WebP vs PNG</h2>

    <p>
      Para imágenes que requieren transparencia o reproducción exacta de colores
      (logos, íconos, gráficos de interfaz), la comparación es menos clara:
    </p>

    <ul>
      <li>
        <strong>WebP sin pérdida vs PNG:</strong> WebP sin pérdida es
        típicamente 25–34% más pequeño que PNG. Para imágenes de alto color como
        fotos con transparencia, el ahorro es significativo.
      </li>
      <li>
        <strong>Gráficos simples:</strong> Para íconos, logos y gráficos planos
        con pocos colores, PNG frecuentemente comprime de manera comparable y
        tiene mejor soporte de herramientas en software de diseño.
      </li>
      <li>
        <strong>Recomendación:</strong> Convertí las imágenes con transparencia
        de contenido complejo (fotos de producto con fondos transparentes) a
        WebP sin pérdida. Mantenés los gráficos planos simples como PNG o
        convertílos a SVG.
      </li>
    </ul>

    <h2 id="webp-vs-avif">WebP vs AVIF</h2>

    <p>
      AVIF es el contendiente más nuevo — derivado del codec de video AV1,
      típicamente logra 10–20% mejor compresión que WebP a calidad equivalente.
      El soporte de navegadores ahora es bueno (Chrome, Firefox, Safari todos lo
      soportan), pero la codificación AVIF es significativamente más lenta que
      la codificación WebP, lo que importa para los pipelines de build.
    </p>

    <p>La guía práctica para 2026:</p>

    <ul>
      <li>
        Usá <strong>WebP</strong> como formato predeterminado para todas las
        imágenes web — ofrece excelente compresión con codificación rápida y
        soporte universal.
      </li>
      <li>
        Usá <strong>AVIF</strong> para páginas de alto tráfico donde la
        compresión máxima importa y podés permitirte tiempos de build más
        lentos, particularmente para imágenes hero y grandes imágenes de
        características.
      </li>
      <li>
        No uses <strong>JPEG</strong> para contenido nuevo si WebP es una
        opción. La brecha de compresión es demasiado significativa.
      </li>
    </ul>

    <p>
      Para una comparación completa de formatos incluyendo casos de uso, mirá
      nuestra{' '}
      <a href="/es/blog/jpg-vs-png-vs-webp-vs-avif">
        guía de JPG vs PNG vs WebP vs AVIF
      </a>
      .
    </p>

    <h2 id="when-to-use-webp">Cuándo Usar WebP</h2>

    <h3 id="photographs">Fotografías e Imágenes Complejas</h3>
    <p>
      Cualquier imagen que antes era un JPEG — fotos de producto, imágenes de
      posts de blog, imágenes hero, texturas de fondo — debería ser WebP. El
      beneficio de compresión es consistente y significativo: una biblioteca
      típica de fotografía de producto que convierte de JPEG a WebP ve una
      reducción total del tamaño del 25–35% sin pérdida de calidad perceptible.
    </p>

    <h3 id="images-with-transparency">Imágenes con Transparencia</h3>
    <p>
      WebP soporta canal alfa, convirtiéndolo en un reemplazo viable para PNG
      donde la imagen tiene contenido fotográfico con un fondo transparente —
      recortes de producto, fotos de retrato con fondos transparentes,
      superposiciones. WebP sin pérdida para gráficos simples, WebP con pérdida
      para contenido fotográfico.
    </p>

    <h3 id="performance-sensitive-pages">Páginas Sensibles al Rendimiento</h3>
    <p>
      Las páginas donde el rendimiento de{' '}
      <a href="/es/blog/core-web-vitals-images">Core Web Vitals</a> es una
      prioridad — landing pages, páginas de producto, checkout — se benefician
      más del WebP. La reducción del tamaño de archivo mejora directamente el
      LCP (Largest Contentful Paint) reduciendo el tiempo de descarga de la
      imagen más grande de la página.
    </p>

    <h2 id="converting-to-webp">Convertir tus Imágenes a WebP</h2>

    <p>
      La forma más simple de convertir imágenes a WebP sin instalar software es
      usar ShrinkImg. Soltá tus archivos JPEG, PNG o GIF en la interfaz,
      seleccioná WebP como formato de salida, configurá tu calidad (75–80 es el
      rango típico para contenido fotográfico) y descargá. La conversión corre
      completamente en tu navegador — sin subidas, sin cuenta requerida.
    </p>

    <p>
      Para la conversión masiva de toda una biblioteca de imágenes, ShrinkImg
      acepta múltiples archivos en una sola sesión. Mirá nuestra{' '}
      <a href="/es/blog/compress-images-bulk">
        guía de flujo de trabajo de compresión masiva
      </a>{' '}
      para un enfoque sistemático para convertir grandes conjuntos de imágenes.
    </p>

    <h2 id="webp-and-wordpress">WebP y WordPress</h2>

    <p>
      WordPress ha soportado subidas WebP nativamente desde la versión 5.8
      (julio 2021). En 2026, no hay requisitos de plugins para usar WebP en
      WordPress — podés subir archivos WebP directamente vía la Biblioteca de
      Medios.
    </p>

    <p>Enfoques comunes para servir WebP en WordPress:</p>

    <ul>
      <li>
        <strong>Subí WebP directamente:</strong> Convertí tus imágenes a WebP
        antes de subir. WordPress las maneja nativamente y genera miniaturas
        WebP.
      </li>
      <li>
        <strong>Usá un plugin de caché/CDN:</strong> Plugins como WP Rocket y
        Cloudflare pueden servir versiones WebP de tus imágenes JPEG/PNG
        existentes automáticamente sin volver a subir.
      </li>
      <li>
        <strong>Conversión a nivel de CDN:</strong> Cloudflare, Fastly y
        Cloudfront soportan conversión automática a WebP en el borde del CDN.
      </li>
    </ul>

    <p>
      Para una guía completa de optimización de imágenes en WordPress, mirá
      nuestra{' '}
      <a href="/es/blog/optimize-images-wordpress">
        guía de optimización de imágenes para WordPress
      </a>
      .
    </p>

    <h2 id="common-webp-mistakes">Errores Comunes con WebP que Evitar</h2>

    <ul>
      <li>
        <strong>Re-codificar WebP a WebP:</strong> Si ya tenés un archivo WebP,
        no lo recomprimás con otra herramienta esperando más ahorros.
        Re-codificar un archivo con pérdida siempre introduce pérdida de calidad
        adicional. Convertí desde archivos fuente originales (RAW, PSD, JPEG de
        alta calidad).
      </li>
      <li>
        <strong>Usar una configuración de calidad demasiado alta:</strong> WebP
        a calidad 90+ produce archivos casi tan grandes como JPEG con un
        beneficio visual mínimo en tamaños de visualización web. El rango 75–85
        es óptimo para la mayoría del contenido web.
      </li>
      <li>
        <strong>Olvidarse de redimensionar:</strong> La conversión de formato
        sola no ayuda si la imagen tiene 3000px de ancho para un slot de
        visualización de 800px. Siempre redimensioná a las dimensiones de
        visualización apropiadas como parte de tu flujo de trabajo de
        optimización.
      </li>
      <li>
        <strong>Usar WebP sin pérdida para fotografías:</strong> WebP sin
        pérdida produce archivos grandes para contenido fotográfico. Usá el modo
        con pérdida para fotos y sin pérdida para gráficos, logos e
        ilustraciones planas.
      </li>
    </ul>

    <p>
      WebP es el formato que debería estar impulsando la mayoría de las imágenes
      de tu sitio en 2026. Las preocupaciones de soporte de navegadores de años
      anteriores están resueltas. Las ventajas de compresión son reales y
      medibles. Convertir tu biblioteca JPEG existente a WebP es una de las
      tareas de optimización de imágenes de mayor impacto disponibles — a menudo
      25–35% de reducción total del peso de la página sin cambios en la
      presentación visual.
    </p>
  </Fragment>
);

export default WebpGuide2026Es;
