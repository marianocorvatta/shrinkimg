import { h, Fragment, FunctionalComponent } from 'preact';

const JpgVsPngVsWebpVsAvifEs: FunctionalComponent = () => (
  <Fragment>
    <h1>JPG vs PNG vs WebP vs AVIF — ¿Qué Formato Usar?</h1>

    <p>
      Elegir el formato de imagen correcto puede reducir el tamaño del archivo a
      la mitad — o duplicarlo — dependiendo del contenido. Esta guía analiza los
      cuatro formatos de imagen web más comunes para que puedas elegir el mejor
      en cada situación.
    </p>

    <h2>Comparación Rápida</h2>
    <table>
      <thead>
        <tr>
          <th>Característica</th>
          <th>JPG</th>
          <th>PNG</th>
          <th>WebP</th>
          <th>AVIF</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Compresión</td>
          <td>Con pérdida</td>
          <td>Sin pérdida</td>
          <td>Ambas</td>
          <td>Ambas</td>
        </tr>
        <tr>
          <td>Transparencia</td>
          <td>No</td>
          <td>Sí</td>
          <td>Sí</td>
          <td>Sí</td>
        </tr>
        <tr>
          <td>Animación</td>
          <td>No</td>
          <td>No (APNG)</td>
          <td>Sí</td>
          <td>Sí</td>
        </tr>
        <tr>
          <td>Soporte en navegadores</td>
          <td>Universal</td>
          <td>Universal</td>
          <td>96%+</td>
          <td>92%+</td>
        </tr>
        <tr>
          <td>Ideal para</td>
          <td>Fotos</td>
          <td>Gráficos, capturas</td>
          <td>Uso web general</td>
          <td>Máxima compresión</td>
        </tr>
      </tbody>
    </table>

    <h2>JPG (JPEG)</h2>
    <p>
      JPG ha sido el formato de fotos predeterminado en la web desde los años
      90. Usa compresión con pérdida optimizada para fotografías de tono
      continuo, y todos los navegadores, dispositivos y editores lo soportan.
    </p>
    <h3>Cuándo Usar JPG</h3>
    <ul>
      <li>Fotos e imágenes complejas con muchos colores y gradientes.</li>
      <li>Cuando necesitás compatibilidad universal sin excepciones.</li>
      <li>Adjuntos de email — todos los clientes de correo manejan JPG.</li>
    </ul>
    <h3>Cuándo Evitar JPG</h3>
    <ul>
      <li>
        Imágenes que necesitan transparencia — JPG no soporta canales alfa.
      </li>
      <li>
        Capturas con mucho texto o arte lineal — JPG crea artefactos visibles en
        bordes nítidos.
      </li>
      <li>
        Cuando necesitás calidad sin pérdida — cada guardado degrada la imagen.
      </li>
    </ul>

    <h2>PNG</h2>
    <p>
      PNG usa compresión sin pérdida y soporta transparencia alfa completa. Es
      el formato ideal para gráficos, logos, íconos y capturas de pantalla donde
      los bordes nítidos y el texto deben mantenerse claros.
    </p>
    <h3>Cuándo Usar PNG</h3>
    <ul>
      <li>Gráficos, logos e íconos con bordes nítidos o texto.</li>
      <li>Imágenes que requieren transparencia.</li>
      <li>Capturas de pantalla y diagramas donde cada píxel importa.</li>
    </ul>
    <h3>Cuándo Evitar PNG</h3>
    <ul>
      <li>
        Fotografías — los archivos PNG de fotos son enormes comparados con JPG.
      </li>
      <li>
        Cuando el tamaño del archivo es prioridad y la calidad con pérdida es
        aceptable.
      </li>
    </ul>

    <h2>WebP</h2>
    <p>
      Desarrollado por Google, WebP soporta compresión con y sin pérdida,
      transparencia y animación — todo en un formato. Los archivos WebP con
      pérdida son típicamente 25–35% más pequeños que los JPG equivalentes, y
      WebP sin pérdida es un 25% más pequeño que PNG. Aprendé más en nuestra{' '}
      <a href="/es/guides/what-is-webp/">guía sobre WebP</a>.
    </p>
    <h3>Cuándo Usar WebP</h3>
    <ul>
      <li>Uso web general — maneja bien fotos y gráficos.</li>
      <li>Cuando querés archivos más pequeños que JPG/PNG sin pasar a AVIF.</li>
      <li>Imágenes animadas como alternativa más liviana a GIF.</li>
    </ul>
    <h3>Cuándo Evitar WebP</h3>
    <ul>
      <li>
        Cuando apuntás a navegadores muy antiguos o software que no lo soporta.
      </li>
      <li>
        Flujos de trabajo de impresión que requieren TIFF o formatos sin
        comprimir.
      </li>
    </ul>

    <h2>AVIF</h2>
    <p>
      AVIF es el formato más nuevo de esta lista, basado en el códec de video
      AV1. Ofrece las mejores tasas de compresión — frecuentemente 50% más
      pequeño que JPG a calidad visual equivalente — y soporta transparencia,
      HDR y amplia gama de colores.
    </p>
    <h3>Cuándo Usar AVIF</h3>
    <ul>
      <li>Cuando querés el menor tamaño de archivo posible para fotos.</li>
      <li>
        Imágenes de alta calidad donde cada kilobyte importa (ej. sitios
        mobile-first).
      </li>
      <li>Contenido HDR o de amplia gama de colores.</li>
    </ul>
    <h3>Cuándo Evitar AVIF</h3>
    <ul>
      <li>
        Cuando necesitás velocidad de codificación — AVIF es más lento que otros
        formatos.
      </li>
      <li>
        Cuando las brechas de soporte en navegadores son inaceptables (Safari
        antiguo, algunos navegadores Android).
      </li>
    </ul>

    <h2>Recomendaciones</h2>
    <p>Para la mayoría de los casos, esta es una guía de decisión simple:</p>
    <ul>
      <li>
        <strong>Fotos para la web</strong> → usá WebP con fallback a JPG, o AVIF
        si podés servir fallbacks.
      </li>
      <li>
        <strong>Logos, íconos, capturas</strong> → usá PNG, o WebP sin pérdida
        para archivos más pequeños.
      </li>
      <li>
        <strong>Máxima compresión</strong> → usá AVIF donde sea soportado, WebP
        como fallback.
      </li>
      <li>
        <strong>Compatibilidad universal</strong> → mantené JPG para fotos, PNG
        para gráficos.
      </li>
    </ul>
    <p>
      Sin importar qué formato elijas, comprimir tus imágenes antes de
      publicarlas es la optimización más impactante que podés hacer. Consultá
      nuestra{' '}
      <a href="/es/guides/compress-images-for-web/">
        guía para comprimir imágenes para la web
      </a>{' '}
      para consejos prácticos.
    </p>

    <a class="guide-cta" href="/es/">
      Probá Todos los Formatos en ShrinkImg — Gratis
    </a>
  </Fragment>
);

export default JpgVsPngVsWebpVsAvifEs;
