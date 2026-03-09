import { h, Fragment, FunctionalComponent } from 'preact';

const JpgVsPngVsWebpVsAvifEs: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Puntos Clave</h2>
      <ul>
        <li>
          JPG es ideal para fotografías cuando se necesita compatibilidad amplia
        </li>
        <li>
          PNG es la opción para gráficos con transparencia o detalle perfecto
        </li>
        <li>
          WebP genera archivos 25–35% más pequeños que JPG con soporte casi
          universal
        </li>
        <li>
          AVIF ofrece la mejor compresión — hasta 50% más pequeño que JPG — pero
          la codificación es más lenta
        </li>
        <li>
          Elegir el formato correcto para cada imagen es una de las mejoras de
          rendimiento más fáciles
        </li>
      </ul>
    </div>

    <p>
      Elegir el formato de imagen correcto es una de las decisiones con mayor
      impacto que podés tomar para el rendimiento web. Cada formato — JPG, PNG,
      WebP y AVIF — tiene fortalezas y compromisos distintos. Usá el incorrecto
      y estarás sirviendo archivos innecesariamente grandes o sacrificando
      calidad donde importa.
    </p>

    <p>
      Esta guía cubre qué hace bien cada formato, dónde falla y cuándo usarlo.
      Ya sea que estés construyendo un portfolio, una tienda online o un blog,
      entender estos formatos te va a ayudar a entregar páginas rápidas sin
      comprometer la calidad visual.
    </p>

    <h2 id="jpg-format">JPG (JPEG): El Formato Fotográfico Universal</h2>

    <p>
      JPG ha sido el formato fotográfico estándar en la web desde los años 90.
      Usa compresión con pérdida (lossy), lo que significa que descarta
      permanentemente algunos datos de la imagen para lograr archivos más
      pequeños. El codificador analiza la imagen y elimina detalles que el ojo
      humano tiene menos probabilidad de notar — transiciones de color sutiles,
      ruido fino y texturas de alta frecuencia.
    </p>

    <h3 id="jpg-strengths">Fortalezas de JPG</h3>
    <ul>
      <li>
        <strong>Soporte universal</strong> — todos los navegadores,
        dispositivos, clientes de correo y editores de imagen manejan JPG sin
        problemas.
      </li>
      <li>
        <strong>Excelente para fotos</strong> — el algoritmo lossy está diseñado
        específicamente para imágenes fotográficas de tono continuo.
      </li>
      <li>
        <strong>Calidad ajustable</strong> — podés ajustar la calidad de 1 a
        100, intercambiando tamaño de archivo por fidelidad visual. Calidad
        75–85 es el punto ideal para la mayoría del uso web.
      </li>
      <li>
        <strong>Tamaños pequeños</strong> — una foto JPG de alta calidad es
        típicamente 60–80% más pequeña que el bitmap sin comprimir equivalente.
      </li>
    </ul>

    <h3 id="jpg-limitations">Limitaciones de JPG</h3>
    <ul>
      <li>
        <strong>Sin transparencia</strong> — JPG no soporta canales alfa. Si
        necesitás fondos transparentes, buscá PNG, WebP o AVIF.
      </li>
      <li>
        <strong>Artefactos de compresión</strong> — con calidad baja, JPG
        produce bloques visibles y bandas de color, especialmente alrededor de
        bordes definidos y texto.
      </li>
      <li>
        <strong>Sin animación</strong> — JPG es un formato de un solo cuadro.
        Para imágenes animadas, considerá WebP o GIF.
      </li>
      <li>
        <strong>Pérdida generacional</strong> — volver a guardar un JPG acumula
        artefactos. Siempre comprimí desde la fuente original, no desde un JPG
        ya comprimido.
      </li>
    </ul>

    <h2 id="png-format">PNG: Calidad Sin Pérdida y Transparencia</h2>

    <p>
      PNG fue creado como reemplazo libre de patentes para GIF y se ha
      convertido en el estándar para gráficos que requieren reproducción sin
      pérdida o transparencia. A diferencia de JPG, PNG preserva cada píxel
      exactamente como es — la imagen descomprimida es bit a bit idéntica a la
      original.
    </p>

    <h3 id="png-strengths">Fortalezas de PNG</h3>
    <ul>
      <li>
        <strong>Compresión sin pérdida</strong> — ninguna pérdida de calidad.
        Cada píxel se preserva exactamente.
      </li>
      <li>
        <strong>Transparencia completa</strong> — soporta canales alfa de 8 bits
        para transparencia suave y parcial (sombras semitransparentes, bordes
        antialiasing).
      </li>
      <li>
        <strong>Bordes definidos y texto</strong> — ideal para capturas de
        pantalla, logos, diagramas, elementos de UI y cualquier cosa con líneas
        nítidas.
      </li>
      <li>
        <strong>Soporte universal</strong> — todos los navegadores y
        herramientas modernos manejan PNG.
      </li>
    </ul>

    <h3 id="png-limitations">Limitaciones de PNG</h3>
    <ul>
      <li>
        <strong>Archivos grandes para fotos</strong> — un PNG fotográfico puede
        ser 5–10 veces más grande que un JPG equivalente. La compresión sin
        pérdida simplemente no puede competir con lossy para imágenes de tono
        continuo.
      </li>
      <li>
        <strong>Sin animación nativa</strong> — APNG existe pero tiene soporte
        limitado y archivos grandes comparado con alternativas.
      </li>
    </ul>

    <h2 id="webp-format">WebP: El Todoterreno Moderno</h2>

    <p>
      Desarrollado por Google, WebP está diseñado para reemplazar tanto JPG como
      PNG en la web. Soporta compresión lossy, compresión lossless,
      transparencia y animación — todo en un solo formato. Desde 2023, WebP es
      soportado por todos los navegadores principales incluyendo Chrome,
      Firefox, Safari y Edge.
    </p>

    <h3 id="webp-strengths">Fortalezas de WebP</h3>
    <ul>
      <li>
        <strong>Más pequeño que JPG</strong> — WebP lossy produce archivos
        25–35% más pequeños que JPG con calidad visual equivalente.
      </li>
      <li>
        <strong>Más pequeño que PNG</strong> — WebP lossless es típicamente 26%
        más pequeño que PNG.
      </li>
      <li>
        <strong>Soporte de transparencia</strong> — WebP lossy con alfa es
        dramáticamente más pequeño que PNG con transparencia.
      </li>
      <li>
        <strong>Soporte de animación</strong> — WebP animado es
        significativamente más pequeño que GIF con mejor profundidad de color.
      </li>
      <li>
        <strong>Soporte de navegadores casi universal</strong> — más del 97% de
        los navegadores en uso hoy soportan WebP.
      </li>
    </ul>

    <h3 id="webp-limitations">Limitaciones de WebP</h3>
    <ul>
      <li>
        <strong>No ideal para impresión</strong> — los flujos de trabajo de
        diseño e impresión todavía típicamente requieren JPG, TIFF o PNG.
      </li>
      <li>
        <strong>Velocidad de codificación</strong> — la codificación WebP es más
        lenta que JPG, aunque esto solo importa para procesamiento en tiempo
        real.
      </li>
    </ul>

    <h2 id="avif-format">AVIF: Compresión Máxima</h2>

    <p>
      AVIF es el formato más nuevo en esta comparación, basado en el códec de
      video AV1 desarrollado por la Alliance for Open Media. Lleva la eficiencia
      de compresión más allá que cualquier formato de imagen anterior, y el
      soporte de navegadores ha crecido rápidamente — Chrome, Firefox, Safari
      (16.4+) y Edge lo soportan.
    </p>

    <h3 id="avif-strengths">Fortalezas de AVIF</h3>
    <ul>
      <li>
        <strong>La mejor compresión disponible</strong> — los archivos AVIF son
        típicamente 50% más pequeños que JPG y 20% más pequeños que WebP con
        calidad equivalente.
      </li>
      <li>
        <strong>Excelente fidelidad de color</strong> — soporta HDR, gama amplia
        de colores (WCG) y profundidad de color de 10/12 bits.
      </li>
      <li>
        <strong>Transparencia y animación</strong> — soporte completo de canal
        alfa y secuencias animadas.
      </li>
      <li>
        <strong>Limpio en tasas de bits bajas</strong> — donde JPG muestra
        artefactos en bloque, AVIF degrada de forma más elegante con una
        apariencia más suave y menos objetable.
      </li>
    </ul>

    <h3 id="avif-limitations">Limitaciones de AVIF</h3>
    <ul>
      <li>
        <strong>Codificación lenta</strong> — la compresión AVIF es
        computacionalmente costosa. Codificar una sola imagen puede tardar 5–20
        veces más que JPG. Esto lo hace menos adecuado para procesamiento en
        tiempo real pero perfecto para assets precomprimidos.
      </li>
      <li>
        <strong>Soporte creciente pero no universal</strong> — alrededor del 93%
        de los navegadores soportan AVIF. Versiones antiguas de Safari y algunos
        navegadores de nicho no, así que podrías necesitar un fallback en JPG o
        WebP.
      </li>
      <li>
        <strong>Soporte limitado en herramientas</strong> — muchos editores de
        imágenes todavía carecen de exportación AVIF nativa. Herramientas
        basadas en navegador como <a href="/es/">ShrinkImg</a> llenan este vacío
        muy bien.
      </li>
    </ul>

    <h2 id="comparison-table">Tabla Comparativa de Formatos</h2>

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
          <td>Tipo de compresión</td>
          <td>Lossy</td>
          <td>Lossless</td>
          <td>Ambos</td>
          <td>Ambos</td>
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
          <td>No</td>
          <td>Sí</td>
          <td>Sí</td>
        </tr>
        <tr>
          <td>Soporte de navegadores</td>
          <td>100%</td>
          <td>100%</td>
          <td>97%+</td>
          <td>93%+</td>
        </tr>
        <tr>
          <td>Ideal para</td>
          <td>Fotos</td>
          <td>Gráficos, capturas</td>
          <td>Uso web general</td>
          <td>Máxima compresión</td>
        </tr>
        <tr>
          <td>Tamaño (foto, calidad ~80)</td>
          <td>Base</td>
          <td>5–10x más grande</td>
          <td>25–35% más chico</td>
          <td>50% más chico</td>
        </tr>
        <tr>
          <td>Velocidad de codificación</td>
          <td>Rápida</td>
          <td>Rápida</td>
          <td>Moderada</td>
          <td>Lenta</td>
        </tr>
        <tr>
          <td>Profundidad de color</td>
          <td>8 bits</td>
          <td>8/16 bits</td>
          <td>8 bits</td>
          <td>8/10/12 bits</td>
        </tr>
      </tbody>
    </table>

    <h2 id="when-to-use">Cuándo Usar Cada Formato</h2>

    <h3 id="use-jpg">Usá JPG cuando:</h3>
    <ul>
      <li>
        Necesitás máxima compatibilidad (email, sistemas legacy, redes sociales)
      </li>
      <li>Estás sirviendo fotografías y no necesitás transparencia</li>
      <li>El tamaño del archivo es menos crítico que el soporte universal</li>
    </ul>

    <h3 id="use-png">Usá PNG cuando:</h3>
    <ul>
      <li>
        Necesitás calidad sin pérdida (capturas de pantalla, diagramas, pixel
        art)
      </li>
      <li>Necesitás transparencia con máxima compatibilidad</li>
      <li>La imagen tiene bordes definidos, texto o colores planos</li>
    </ul>

    <h3 id="use-webp">Usá WebP cuando:</h3>
    <ul>
      <li>Querés el mejor equilibrio entre calidad, tamaño y compatibilidad</li>
      <li>Necesitás transparencia con archivos más pequeños que PNG</li>
      <li>Querés un solo formato que funcione para fotos y gráficos</li>
    </ul>

    <h3 id="use-avif">Usá AVIF cuando:</h3>
    <ul>
      <li>La máxima reducción de tamaño es la prioridad</li>
      <li>Podés proveer un fallback en WebP o JPG para navegadores antiguos</li>
      <li>Estás precomprimiendo assets (no generando al vuelo)</li>
      <li>Necesitás soporte de HDR o gama amplia de colores</li>
    </ul>

    <h2 id="practical-recommendation">Recomendación Práctica para 2026</h2>

    <p>
      Para la mayoría de los sitios web hoy, el mejor enfoque es servir AVIF
      como formato principal con un fallback en WebP. Esto cubre el 97%+ de los
      navegadores con compresión óptima. Para los casos restantes, un fallback
      en JPG asegura compatibilidad universal.
    </p>

    <p>
      Si manejar múltiples formatos te parece demasiado trabajo, simplemente
      convertir todo a WebP es una excelente estrategia de formato único. Vas a
      obtener archivos 25–35% más pequeños que JPG con preocupaciones de
      compatibilidad despreciables.
    </p>

    <p>
      Sin importar qué formato elijas, siempre comprimí tus imágenes antes de
      publicar. <a href="/es/">ShrinkImg</a> te permite comparar formatos lado a
      lado en tu navegador, para que veas exactamente cuánto espacio ahorra cada
      uno con tus imágenes específicas — todo sin subir un solo archivo.
      Entender{' '}
      <a href="/es/blog/why-image-compression-matters/">
        por qué la compresión de imágenes es importante
      </a>{' '}
      es el primer paso hacia sitios web más rápidos y eficientes.
    </p>
  </Fragment>
);

export default JpgVsPngVsWebpVsAvifEs;
