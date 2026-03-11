import { h, Fragment, FunctionalComponent } from 'preact';

const WhatIsWebpEs: FunctionalComponent = () => (
  <Fragment>
    <h1>¿Qué es WebP y Por Qué Deberías Usarlo?</h1>

    <p>
      WebP es un formato de imagen moderno desarrollado por Google que ofrece
      compresión superior para imágenes en la web. Soporta compresión con y sin
      pérdida, transparencia e incluso animación — combinando las mejores
      características de JPG, PNG y GIF en un solo formato con archivos más
      pequeños.
    </p>

    <h2>Breve Historia de WebP</h2>
    <p>
      Google introdujo WebP en 2010 como parte de su esfuerzo por hacer la web
      más rápida. El formato está basado en el códec de video VP8 (luego
      actualizado a VP8L para sin pérdida) y fue diseñado desde cero para
      distribución web. Inicialmente controversial por su soporte limitado en
      navegadores, WebP ha sido adoptado desde entonces por todos los
      navegadores principales y hoy lo usan millones de sitios web en todo el
      mundo.
    </p>

    <h2>Ventajas de WebP sobre JPG y PNG</h2>

    <h3>Archivos Más Pequeños</h3>
    <p>
      Este es el mayor punto a favor de WebP. En las propias pruebas de Google,
      las imágenes WebP con pérdida son 25–34% más pequeñas que JPGs comparables
      a la misma calidad visual. Los archivos WebP sin pérdida son
      aproximadamente un 26% más pequeños que los PNG. Para un sitio web que
      sirve miles de imágenes, estos ahorros se traducen directamente en tiempos
      de carga más rápidos y menores costos de ancho de banda.
    </p>

    <h3>Soporte de Transparencia</h3>
    <p>
      A diferencia de JPG, WebP soporta transparencia con canal alfa tanto en
      modo con pérdida como sin pérdida. WebP con pérdida y transparencia es
      particularmente útil — es algo que ningún otro formato ampliamente
      soportado ofrece, y los archivos son dramáticamente más pequeños que los
      PNG equivalentes.
    </p>

    <h3>Soporte de Animación</h3>
    <p>
      WebP animado es una alternativa moderna a GIF con mucha mejor compresión y
      profundidad de color. Los archivos WebP animados soportan color de 24 bits
      y transparencia alfa, mientras que GIF está limitado a 256 colores. Para
      sitios que usan imágenes animadas, cambiar de GIF a WebP animado puede
      reducir el tamaño de los archivos en un 50% o más.
    </p>

    <h3>Un Solo Formato para Todo</h3>
    <p>
      En lugar de mantener archivos JPG separados para fotos y archivos PNG para
      gráficos, podés usar WebP para ambos. Esto simplifica tu pipeline de
      assets y reduce la cantidad de decisiones de formato que tenés que tomar.
    </p>

    <h2>Compatibilidad con Navegadores</h2>
    <p>WebP es ahora soportado por todos los navegadores modernos:</p>
    <ul>
      <li>
        <strong>Chrome</strong> — desde la versión 17 (2012)
      </li>
      <li>
        <strong>Firefox</strong> — desde la versión 65 (2019)
      </li>
      <li>
        <strong>Safari</strong> — desde la versión 14 (2020)
      </li>
      <li>
        <strong>Edge</strong> — desde la versión 18 (2018)
      </li>
      <li>
        <strong>Opera</strong> — desde la versión 12 (2012)
      </li>
    </ul>
    <p>
      Según Can I Use, WebP es soportado por más del 96% de los navegadores a
      nivel mundial. Los únicos que quedan fuera son versiones muy antiguas que
      representan una fracción mínima del tráfico.
    </p>

    <h2>WebP vs AVIF</h2>
    <p>
      AVIF es la siguiente evolución en formatos de imagen web, ofreciendo
      incluso mejor compresión que WebP — típicamente 20–30% más pequeño a
      calidad equivalente. Sin embargo, WebP todavía tiene ventajas:
    </p>
    <ul>
      <li>
        <strong>Mayor soporte en navegadores</strong> — WebP con 96%+ vs AVIF
        con 92%+.
      </li>
      <li>
        <strong>Codificación más rápida</strong> — WebP codifica
        significativamente más rápido que AVIF, haciéndolo mejor para flujos de
        conversión en tiempo real.
      </li>
      <li>
        <strong>Ecosistema más maduro</strong> — mejor soporte de herramientas y
        CMS.
      </li>
    </ul>
    <p>
      Para una comparación completa de formatos, consultá nuestra{' '}
      <a href="/es/guides/jpg-vs-png-vs-webp-vs-avif/">
        guía JPG vs PNG vs WebP vs AVIF
      </a>
      .
    </p>

    <h2>Cómo Convertir Imágenes a WebP</h2>
    <p>Convertir tus imágenes existentes a WebP es sencillo con ShrinkImg:</p>

    <h3>Paso 1 — Abrí Tu Imagen</h3>
    <p>
      Arrastrá y soltá cualquier JPG, PNG u otra imagen en ShrinkImg. La app
      funciona completamente en tu navegador — nada se sube a ningún servidor.
    </p>

    <h3>Paso 2 — Seleccioná WebP como Formato de Salida</h3>
    <p>
      En el panel de configuración de salida, elegí WebP. Ajustá el control de
      calidad — para fotos, 75–85 suele ser el punto ideal. Para gráficos y
      capturas de pantalla, probá el modo sin pérdida para una salida
      pixel-perfect.
    </p>

    <h3>Paso 3 — Compará y Descargá</h3>
    <p>
      Usá la comparación lado a lado para verificar que la salida se vea bien.
      Revisá la reducción de tamaño mostrada debajo de la imagen. Cuando estés
      conforme, hacé clic en <strong>Descargar</strong> para guardar el archivo
      WebP.
    </p>

    <h2>Cuándo Usar WebP</h2>
    <ul>
      <li>
        Imágenes de sitios web — fotos, banners, miniaturas, imágenes de
        productos.
      </li>
      <li>Gráficos que necesitan transparencia sin el gran tamaño de PNG.</li>
      <li>Contenido animado como reemplazo de GIF.</li>
      <li>
        Cualquier escenario donde quieras un formato moderno único y bien
        soportado. Consultá nuestra{' '}
        <a href="/es/guides/compress-images-for-web/">
          guía de optimización web
        </a>{' '}
        para tamaños y configuraciones recomendadas.
      </li>
    </ul>

    <h2>Cuándo No Usar WebP</h2>
    <ul>
      <li>
        <strong>Campañas de email</strong> — muchos clientes de email no
        soportan WebP. Quedáte con JPG y PNG para email.
      </li>
      <li>
        <strong>Flujos de trabajo de impresión</strong> — usá TIFF o el formato
        original sin comprimir.
      </li>
      <li>
        <strong>Cuando AVIF es una opción</strong> — si los navegadores de tu
        audiencia lo soportan y querés archivos aún más pequeños.
      </li>
    </ul>

    <a class="guide-cta" href="/es/">
      Convertí a WebP Ahora — Gratis
    </a>
  </Fragment>
);

export default WhatIsWebpEs;
