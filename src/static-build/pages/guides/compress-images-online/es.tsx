import { h, Fragment, FunctionalComponent } from 'preact';

const CompressImagesOnlineEs: FunctionalComponent = () => (
  <Fragment>
    <h1>Cómo Comprimir Imágenes Online</h1>

    <p>
      Los archivos de imagen grandes ralentizan los sitios web, ocupan
      almacenamiento y dificultan compartir. Comprimir imágenes reduce el tamaño
      del archivo manteniendo buena calidad — y podés hacerlo directamente en tu
      navegador sin instalar nada ni subir archivos a un servidor.
    </p>

    <h2>¿Por Qué Comprimir Imágenes?</h2>
    <p>
      Las imágenes suelen representar la mayor parte del peso total de una
      página web. Una sola foto sin optimizar puede pesar 3–5 MB, mientras que
      la misma imagen comprimida puede quedar en menos de 200 KB. Imágenes más
      pequeñas significan:
    </p>
    <ul>
      <li>
        <strong>Cargas más rápidas</strong> — los visitantes ven el contenido
        antes y la tasa de rebote baja.
      </li>
      <li>
        <strong>Menor consumo de datos</strong> — importante para usuarios
        móviles con planes limitados.
      </li>
      <li>
        <strong>Mejor SEO</strong> — Google usa la velocidad de carga como
        factor de posicionamiento, y los Core Web Vitals premian las imágenes
        optimizadas.
      </li>
      <li>
        <strong>Más fácil de compartir</strong> — los adjuntos de email, apps de
        mensajería y redes sociales tienen límites de tamaño.
      </li>
    </ul>

    <h2>Compresión con Pérdida vs Sin Pérdida</h2>
    <p>
      Existen dos enfoques fundamentales para la compresión de imágenes, y
      entender la diferencia te ayuda a elegir la opción correcta para cada
      situación.
    </p>

    <h3>Compresión con Pérdida (Lossy)</h3>
    <p>
      La compresión con pérdida elimina permanentemente algunos datos de la
      imagen para lograr archivos mucho más pequeños. El codificador descarta
      detalles que el ojo humano es menos propenso a notar — gradientes sutiles
      de color, texturas finas en áreas complejas y ruido de alta frecuencia.
      JPG, WebP (modo lossy) y AVIF usan compresión con pérdida. Una calidad de
      75–85 típicamente produce archivos 60–80% más pequeños que el original sin
      diferencia visible a tamaños normales de visualización.
    </p>

    <h3>Compresión Sin Pérdida (Lossless)</h3>
    <p>
      La compresión sin pérdida reduce el tamaño del archivo sin descartar datos
      — la imagen descomprimida es bit a bit idéntica a la original. PNG, WebP
      (modo lossless) y AVIF (modo lossless) soportan esto. Las reducciones de
      tamaño son más modestas (10–50%), pero es la opción correcta para capturas
      de pantalla, diagramas técnicos, pixel art y cualquier imagen donde cada
      detalle importa.
    </p>

    <h2>Cómo Comprimir Imágenes con ShrinkImg</h2>
    <p>
      ShrinkImg funciona completamente en tu navegador usando WebAssembly, así
      que tus imágenes nunca salen de tu dispositivo. Así se usa:
    </p>

    <h3>Paso 1 — Abrí Tu Imagen</h3>
    <p>
      Arrastrá y soltá una imagen en la ventana de ShrinkImg, o hacé clic para
      buscar en tus archivos. También podés pegar una imagen directamente desde
      el portapapeles.
    </p>

    <h3>Paso 2 — Elegí Formato y Calidad</h3>
    <p>
      ShrinkImg muestra tu imagen original de un lado y la versión comprimida
      del otro. Elegí un formato de salida — JPG, PNG, WebP o AVIF — y ajustá el
      control de calidad. La diferencia de tamaño se actualiza en tiempo real,
      para que encuentres el balance ideal entre calidad y tamaño.
    </p>

    <h3>Paso 3 — Compará y Descargá</h3>
    <p>
      Deslizá el control de comparación para inspeccionar detalles. Cuando estés
      conforme con el resultado, presioná <strong>Descargar</strong>. El archivo
      comprimido se genera localmente y se guarda directo en tu dispositivo.
    </p>

    <h2>Mejores Prácticas para Compresión de Imágenes</h2>
    <ul>
      <li>
        <strong>Partí de la fuente de mayor calidad</strong> — comprimir un JPG
        ya comprimido introduce más artefactos. Siempre trabajá desde el
        original o una copia sin pérdida.
      </li>
      <li>
        <strong>Redimensioná antes de comprimir</strong> — una foto de 4000 ×
        3000 mostrada a 800 px de ancho desperdicia ancho de banda. Primero
        redimensioná a las dimensiones que realmente necesitás.
      </li>
      <li>
        <strong>Usá el formato correcto</strong> — JPG para fotos, PNG para
        gráficos con transparencia, WebP o AVIF para lo mejor de ambos mundos.
        Consultá nuestra{' '}
        <a href="/es/guides/jpg-vs-png-vs-webp-vs-avif/">
          guía de comparación de formatos
        </a>{' '}
        para más detalles.
      </li>
      <li>
        <strong>Apuntá a calidad 75–85</strong> — para la mayoría de fotos, este
        rango ofrece grandes ahorros de tamaño con pérdida de calidad
        imperceptible.
      </li>
      <li>
        <strong>Verificá el resultado</strong> — siempre compará visualmente la
        salida comprimida. Algunas imágenes (texto, líneas finas, gradientes)
        son más sensibles a la compresión que otras.
      </li>
    </ul>

    <h2>La Privacidad Importa</h2>
    <p>
      Muchos compresores online suben tus imágenes a sus servidores para
      procesarlas. ShrinkImg es diferente: todo ocurre localmente en tu
      navegador. Tus fotos, capturas de pantalla y documentos nunca salen de tu
      dispositivo — ni siquiera temporalmente. Esto lo hace seguro para fotos
      personales, documentos confidenciales y cualquier cosa que prefieras
      mantener privada.
    </p>

    <a class="guide-cta" href="/es/">
      Comprimí Tus Imágenes Ahora — Gratis
    </a>
  </Fragment>
);

export default CompressImagesOnlineEs;
