import { h, Fragment, FunctionalComponent } from 'preact';

const ReduceImageSizeEmailEs: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Puntos Clave</h2>
      <ul>
        <li>
          La mayoría de los clientes de email limitan el email total a 10–25 MB;
          las imágenes deben estar muy por debajo
        </li>
        <li>
          Apuntá a imágenes individuales de menos de 200 KB — 50–100 KB es ideal
          para renderizado rápido
        </li>
        <li>
          Redimensioná primero: 600 px de ancho es el estándar para el contenido
          de email
        </li>
        <li>
          JPG es el formato más seguro para fotos en email; PNG para logos y
          gráficos con transparencia
        </li>
        <li>
          Evitá WebP y AVIF en email — Outlook y muchos clientes móviles no los
          soportan
        </li>
      </ul>
    </div>

    <p>
      Las campañas de email viven y mueren por sus imágenes. Un newsletter
      bellamente diseñado con imágenes sobredimensionadas puede nunca
      renderizarse completamente — las imágenes demasiado pesadas cargan lento,
      activan los filtros de spam, y hacen que Gmail corte tu mensaje con un
      aviso de "Ver mensaje completo". Optimizar el tamaño de las imágenes es
      una de las cosas más prácticas que podés hacer para mejorar la
      entregabilidad y el engagement de tus emails.
    </p>

    <p>
      Esta guía cubre exactamente qué límites aplican, qué dimensiones usar, y
      cómo comprimir imágenes para email sin pérdida de calidad perceptible.
    </p>

    <h2 id="email-size-limits">Límites de Peso en Clientes de Email</h2>

    <p>
      Cada proveedor de email tiene reglas sobre qué tan grande puede ser un
      email antes de que se corte o rechace. Acá está lo que necesitás saber:
    </p>

    <table>
      <thead>
        <tr>
          <th>Cliente / Proveedor</th>
          <th>Límite total del email</th>
          <th>Comportamiento al superarlo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gmail</td>
          <td>102 KB (HTML)</td>
          <td>
            Corta el mensaje y oculta contenido; las imágenes igual cargan desde
            el servidor
          </td>
        </tr>
        <tr>
          <td>Outlook (escritorio)</td>
          <td>~20 MB total</td>
          <td>Puede bloquear o marcar como spam potencial</td>
        </tr>
        <tr>
          <td>Yahoo Mail</td>
          <td>25 MB total</td>
          <td>Rechaza los mensajes que exceden el límite</td>
        </tr>
        <tr>
          <td>Apple Mail</td>
          <td>Sin límite fijo</td>
          <td>Renderizado más lento con imágenes grandes</td>
        </tr>
        <tr>
          <td>ESPs (Mailchimp, etc.)</td>
          <td>Típicamente 10–30 MB</td>
          <td>Carga rechazada si supera el umbral</td>
        </tr>
      </tbody>
    </table>

    <p>
      El umbral de corte de Gmail es el más importante. Gmail corta el HTML de
      cualquier email que supere los 102 KB — las imágenes en sí se hospedan
      externamente y cargan por separado, pero el HTML pesado alrededor de las
      imágenes te hace superar el límite. Mantené todo el email liviano.
    </p>

    <p>
      Más prácticamente: las imágenes en emails casi siempre están hospedadas en
      un servidor y referenciadas por URL, no incrustadas en el email. El tamaño
      que importa es qué tan rápido descargan esas imágenes en el cliente de
      email del destinatario. Una imagen hero de 2 MB renderiza lento incluso en
      una conexión rápida, y directamente no carga para usuarios con datos
      móviles limitados.
    </p>

    <h2 id="recommended-dimensions">
      Dimensiones Recomendadas para Imágenes de Email
    </h2>

    <p>
      El diseño de email se ha estandarizado en un ancho de contenido de{' '}
      <strong>600 px</strong>. Esto funciona en Outlook, Gmail y Apple Mail
      tanto en escritorio como en móvil. Las imágenes más anchas de 600 px las
      escala el cliente de email de todas formas, así que solo estás sirviendo
      píxeles innecesarios.
    </p>

    <table>
      <thead>
        <tr>
          <th>Tipo de imagen</th>
          <th>Ancho recomendado</th>
          <th>Tamaño objetivo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hero / imagen de encabezado</td>
          <td>600 px</td>
          <td>Menos de 150 KB</td>
        </tr>
        <tr>
          <td>Imágenes de producto (ancho completo)</td>
          <td>600 px</td>
          <td>Menos de 100 KB</td>
        </tr>
        <tr>
          <td>Imágenes de producto (grilla 2 columnas)</td>
          <td>280–300 px</td>
          <td>Menos de 50 KB</td>
        </tr>
        <tr>
          <td>Logo / encabezado</td>
          <td>200–300 px</td>
          <td>Menos de 30 KB</td>
        </tr>
        <tr>
          <td>Miniatura / ícono</td>
          <td>100–150 px</td>
          <td>Menos de 15 KB</td>
        </tr>
        <tr>
          <td>Fondo / banner</td>
          <td>1200 px (para pantallas retina)</td>
          <td>Menos de 200 KB</td>
        </tr>
      </tbody>
    </table>

    <p>
      Para pantallas retina (alta densidad de píxeles), podés servir imágenes al
      doble de su tamaño de visualización — así una columna de 600 px usaría una
      imagen de 1200 px — pero comprimí agresivamente para mantener el tamaño
      del archivo bajo control.
    </p>

    <h2 id="best-formats">Mejores Formatos de Imagen para Email</h2>

    <p>
      A diferencia de los navegadores web, los clientes de email tienen soporte
      muy desigual para formatos modernos. Esto hace que la elección de formato
      sea más conservadora para email que para páginas web.
    </p>

    <h3 id="jpg-for-photos">JPG para Fotografías</h3>
    <p>
      JPG es la opción más segura para fotografías en email. Todos los clientes
      de email en todos los dispositivos lo soportan. Usá calidad 70–80 para
      email — un poco más baja que para web, porque las imágenes de email son
      típicamente más pequeñas, así que la reducción de calidad se nota menos.
    </p>

    <h3 id="png-for-graphics">PNG para Logos y Gráficos</h3>
    <p>
      Usá PNG para logos, íconos y cualquier gráfico con transparencia o bordes
      definidos. PNG renderiza texto y líneas nítidas que JPG suavizaría o
      introduciría artefactos. Comprimí los archivos PNG antes de subir — muchas
      herramientas de diseño exportan PNGs con metadatos incrustados y perfiles
      de color innecesarios que inflan significativamente el tamaño.
    </p>

    <h3 id="avoid-modern-formats">Evitá WebP y AVIF en Email</h3>
    <p>
      WebP y AVIF son excelentes para páginas web pero deben evitarse en email.
      Microsoft Outlook (todas las versiones de escritorio) no soporta WebP.
      Muchos clientes de email móvil — incluyendo algunas versiones de Gmail en
      Android — tienen soporte inconsistente de WebP. Ya que las imágenes rotas
      en email son mucho peores que archivos JPG ligeramente más grandes,
      quedate con JPG y PNG.
    </p>

    <h3 id="gif-for-animation">GIF para Animación Simple</h3>
    <p>
      Si necesitás animación en email, GIF sigue siendo la opción universal.
      Outlook solo muestra el primer cuadro de un GIF, así que diseñá el primer
      cuadro para que funcione como imagen estática. Mantené los GIFs animados
      por debajo de 500 KB — los GIFs grandes son la causa más común de emails
      de renderizado lento.
    </p>

    <h2 id="compress-without-quality-loss">
      Cómo Comprimir Imágenes de Email Sin Perder Calidad
    </h2>

    <p>
      La clave está en que las imágenes de email se ven a tamaños pequeños en
      pantallas que a menudo se sostienen a distancia de un brazo. A 600 px de
      ancho, una calidad de 70–80 en JPG es visualmente indistinguible de
      calidad 95 — pero el archivo es 3–4 veces más pequeño.
    </p>

    <h3 id="step-by-step">Paso a Paso Con ShrinkImg</h3>

    <p>
      <a href="/es/">ShrinkImg</a> funciona completamente en tu navegador, así
      que tus imágenes nunca salen de tu dispositivo. Acá está el flujo de
      trabajo:
    </p>

    <ol>
      <li>
        <strong>Abrí tu imagen en ShrinkImg.</strong> Arrastrá y soltá o pegá
        directamente desde tu portapapeles.
      </li>
      <li>
        <strong>Redimensioná a las dimensiones del email.</strong> Establecé el
        ancho a 600 px (o la dimensión apropiada para tu layout de email). Este
        es el paso más impactante — redimensionar de 3000 px a 600 px solo
        reduce el tamaño del archivo aproximadamente un 96% antes de cualquier
        compresión.
      </li>
      <li>
        <strong>Elegí JPG y configurá calidad 70–80.</strong> La vista previa
        lado a lado te permite verificar que la calidad se ve aceptable antes de
        descargar. Para la mayoría de las fotografías, 75 es el punto ideal.
      </li>
      <li>
        <strong>Revisá el tamaño del archivo.</strong> El objetivo es menos de
        100–150 KB para una imagen de email a ancho completo. Si todavía está
        por encima, bajá la calidad a 65 y revisá nuevamente.
      </li>
      <li>
        <strong>Descargá y subí a tu ESP.</strong> Cargá el archivo comprimido a
        Mailchimp, Klaviyo, Brevo o la plataforma que uses.
      </li>
    </ol>

    <h2 id="spam-and-deliverability">
      Imágenes, Filtros de Spam y Entregabilidad
    </h2>

    <p>
      Las imágenes pesadas afectan más que la velocidad de renderizado — pueden
      afectar si tu email llega a la bandeja de entrada. Los filtros de spam
      analizan la proporción de imágenes respecto al texto. Un email que es
      principalmente imágenes con poco texto es un patrón clásico de spam, así
      que siempre incluí texto alt significativo y una cantidad razonable de
      cuerpo de texto junto con tus imágenes.
    </p>

    <p>Otros consejos de entregabilidad relacionados con imágenes:</p>

    <ul>
      <li>
        <strong>Nunca incrustes imágenes como base64 en el HTML.</strong> Esto
        infla masivamente el tamaño del email y activa los filtros de spam.
        Siempre hospedá las imágenes externamente y referenciá por URL.
      </li>
      <li>
        <strong>Siempre incluí texto alt.</strong> Muchos destinatarios tienen
        las imágenes deshabilitadas por defecto (especialmente en Outlook). El
        texto alt asegura que tu mensaje comunique incluso cuando las imágenes
        no cargan.
      </li>
      <li>
        <strong>Usá URLs de imagen en HTTPS.</strong> Los enlaces de imagen HTTP
        pueden ser bloqueados por clientes de email o marcados como inseguros.
      </li>
      <li>
        <strong>Probá antes de enviar.</strong> Herramientas como Litmus o Email
        on Acid muestran cómo se renderiza tu email en distintos clientes y
        marcan imágenes sobredimensionadas.
      </li>
    </ul>

    <h2 id="quick-reference">
      Referencia Rápida: Checklist de Imágenes para Email
    </h2>

    <ul>
      <li>
        Imágenes hero: 600 px de ancho, JPG calidad 70–80, menos de 150 KB
      </li>
      <li>Imágenes de producto: 280–600 px según columnas, menos de 100 KB</li>
      <li>Logos: PNG, menos de 30 KB</li>
      <li>
        GIFs animados: menos de 500 KB, el primer cuadro funciona como fallback
        estático
      </li>
      <li>Sin WebP ni AVIF (Outlook no los soporta)</li>
      <li>Texto alt en cada imagen</li>
      <li>Hospedá imágenes externamente — nunca incrustés como base64</li>
    </ul>

    <p>
      Optimizar las imágenes para email no es complicado una vez que conocés los
      objetivos. Redimensioná a 600 px, comprimí a calidad 75, exportá como JPG,
      y tendrás imágenes que cargan rápido, se renderizan de forma consistente y
      nunca activan el aviso de corte de Gmail. Todo el flujo de trabajo lleva
      menos de un minuto por imagen con <a href="/es/">ShrinkImg</a>.
    </p>

    <p>
      Si querés profundizar en las opciones de formato para otros contextos,
      mirá nuestra{' '}
      <a href="/es/blog/jpg-vs-png-vs-webp-vs-avif/">
        guía completa de formatos de imagen
      </a>{' '}
      o aprendé{' '}
      <a href="/es/blog/why-image-compression-matters/">
        por qué la compresión de imágenes es clave para el rendimiento web
      </a>
      .
    </p>
  </Fragment>
);

export default ReduceImageSizeEmailEs;
