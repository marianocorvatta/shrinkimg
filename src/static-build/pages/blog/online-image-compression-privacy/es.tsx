import { h, Fragment, FunctionalComponent } from 'preact';

const OnlineImageCompressionPrivacyEs: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Puntos Clave</h2>
      <ul>
        <li>
          Las herramientas de compresión del lado del servidor suben tus
          imágenes a servidores externos — las herramientas basadas en navegador
          nunca lo hacen
        </li>
        <li>
          ShrinkImg corre completamente en tu navegador usando WebAssembly: tus
          imágenes nunca salen de tu dispositivo
        </li>
        <li>
          Para contenido sensible (fotos de clientes, imágenes confidenciales de
          productos, escaneos médicos), la compresión basada en navegador es la
          única opción segura
        </li>
        <li>
          Sin cuenta, sin inicio de sesión, sin retención: nada se almacena,
          registra o procesa en ningún servidor
        </li>
        <li>
          El cumplimiento de GDPR e HIPAA es mucho más simple cuando los datos
          nunca salen de tu dispositivo
        </li>
      </ul>
    </div>

    <p>
      Cuando comprimís una imagen usando una herramienta online, ¿adónde va
      realmente tu imagen? Para la mayoría de las herramientas, la respuesta es:
      a un servidor en algún lugar. Tu archivo se transmite por internet, se
      procesa en hardware externo y — dependiendo de la política de privacidad
      de la herramienta — potencialmente se registra, retiene o analiza. Para la
      gran mayoría de las imágenes, esto es una preocupación menor. Para
      contenido sensible, es una preocupación significativa.
    </p>

    <p>
      Esta guía explica la diferencia entre la compresión del lado del servidor
      y la basada en navegador, qué pasa realmente con tus archivos en cada
      enfoque, y por qué importa para casos de uso específicos.
    </p>

    <h2 id="how-server-side-works">
      Cómo Funciona la Compresión del Lado del Servidor
    </h2>

    <p>
      Las herramientas tradicionales de compresión de imágenes online operan con
      un modelo sencillo: tu navegador envía el archivo de imagen a sus
      servidores, su servidor ejecuta software de compresión (ImageMagick,
      libvips, Sharp, o similar), y te devuelve el resultado comprimido. La
      imagen existe en infraestructura externa durante el proceso — y a veces
      por más tiempo.
    </p>

    <p>
      Las implicaciones de privacidad dependen completamente de las prácticas de
      manejo de datos de la herramienta:
    </p>

    <ul>
      <li>
        <strong>Transmisión:</strong> Tu imagen viaja por internet al servidor
        de otra persona. HTTPS la encripta en tránsito, pero el servidor de
        destino puede leerla.
      </li>
      <li>
        <strong>Procesamiento:</strong> La imagen se escribe en almacenamiento
        temporal en el servidor para procesarse. En infraestructura ocupada, los
        archivos temporales pueden persistir más de lo esperado por caché o
        modos de falla.
      </li>
      <li>
        <strong>Retención:</strong> Algunas herramientas retienen las imágenes
        subidas por un período (horas, días) para soportar funciones como
        re-descarga o historial de procesamiento. Revisá la política de
        privacidad. "Eliminamos las imágenes después de X horas" significa que
        igual existieron en servidores externos.
      </li>
      <li>
        <strong>Registros:</strong> La infraestructura de servidores registra
        solicitudes. Los logs de acceso pueden capturar nombres de archivos,
        tamaños, direcciones IP y timestamps, incluso cuando el contenido de las
        imágenes no se retiene explícitamente.
      </li>
    </ul>

    <p>
      Nada de esto es necesariamente malicioso — así es como funciona el
      procesamiento del lado del servidor. Pero significa que tus imágenes
      salieron de tu control.
    </p>

    <h2 id="how-browser-based-works">
      Cómo Funciona la Compresión Basada en Navegador
    </h2>

    <p>
      Las herramientas basadas en navegador como ShrinkImg adoptan un enfoque
      fundamentalmente diferente. En lugar de enviar tu imagen a un servidor,
      ejecutan el código de compresión directamente dentro de tu navegador
      usando WebAssembly (WASM) — un formato de instrucción binario que los
      navegadores modernos pueden ejecutar a velocidad casi nativa.
    </p>

    <p>
      Las bibliotecas de compresión (para WebP, AVIF, PNG, JPEG) se compilan a
      WASM y se cargan en tu pestaña del navegador. Cuando comprimís una imagen,
      el procesamiento ocurre completamente en el entorno sandboxed del
      navegador. Los datos de tu imagen nunca salen de tu dispositivo — viajan
      solo desde tu sistema de archivos a la memoria del navegador y de vuelta.
    </p>

    <p>
      Desde una perspectiva de red, el único tráfico es la carga inicial de la
      página y la descarga del módulo WASM. Después de eso, no se realizan
      solicitudes de salida que contengan los datos de tu imagen.
    </p>

    <h2 id="what-this-means-for-sensitive-content">
      Qué Significa Esto para Contenido Sensible
    </h2>

    <h3 id="client-photos">Fotografía de Clientes y Trabajo Profesional</h3>
    <p>
      Los fotógrafos y videógrafos que trabajan con imágenes de clientes —
      bodas, eventos corporativos, editorial — frecuentemente tienen
      obligaciones de confidencialidad. Enviar fotos de clientes a través de un
      servicio de compresión de terceros, aunque sea brevemente, plantea
      preguntas sobre consentimiento y manejo de datos. La compresión basada en
      navegador elimina esas preguntas completamente: las imágenes de clientes
      se quedan en tu hardware.
    </p>

    <h3 id="product-images-pre-launch">
      Imágenes de Producto Previas al Lanzamiento
    </h3>
    <p>
      Los equipos de e-commerce que preparan lanzamientos de productos a menudo
      necesitan comprimir imágenes semanas antes de salir al aire. Enviar fotos
      de productos no lanzados a servidores de terceros — incluso de buena
      reputación — crea una exposición de datos innecesaria. Si estás
      optimizando imágenes para un lanzamiento y esas imágenes representan
      secretos comerciales o productos no publicados, la compresión basada en
      navegador las mantiene fuera de infraestructura externa hasta que estés
      listo para publicar.
    </p>

    <h3 id="medical-legal-documents">Documentos Médicos o Legales</h3>
    <p>
      Los documentos escaneados, imágenes médicas y documentación legal se
      convierten frecuentemente a formatos de imagen para compartir o archivar.
      Comprimir estos a través de herramientas del lado del servidor plantea
      preocupaciones inmediatas de HIPAA, GDPR y privilegio abogado-cliente. Una
      herramienta basada en navegador sin transmisión al servidor evita estos
      problemas completamente — no hay procesador de datos con quien firmar
      acuerdos, no hay subida que auditar.
    </p>

    <h3 id="corporate-confidential">Materiales Confidenciales Corporativos</h3>
    <p>
      Presentaciones, organigramas, informes financieros capturados como
      capturas de pantalla, mockups de diseño internos — las organizaciones
      comprimen rutinariamente imágenes que contienen información que no
      sobreviviría una auditoría de seguridad si se enviara a servidores
      externos. La compresión basada en navegador es la solución directa.
    </p>

    <h2 id="gdpr-and-compliance">GDPR, HIPAA y Cumplimiento Normativo</h2>

    <p>
      El GDPR define el "procesamiento" de manera amplia — incluye transmitir,
      almacenar y analizar datos personales. Si tus imágenes contienen personas
      identificables (caras, nombres, direcciones visibles en documentos),
      enviarlas a un servidor de terceros para compresión probablemente
      constituye procesamiento de datos personales bajo el GDPR. Eso significa
      que necesitás una base legal, un acuerdo de procesamiento de datos con el
      proveedor de la herramienta y potencialmente divulgación en tus avisos de
      privacidad.
    </p>

    <p>
      HIPAA es aún más explícito: la información de salud protegida (PHI) no
      puede transmitirse a terceros sin un Acuerdo de Asociado de Negocios
      (BAA). La mayoría de las herramientas de compresión online no ofrecen
      BAAs.
    </p>

    <p>
      Con la compresión basada en navegador, estas preguntas de cumplimiento
      desaparecen. No hay procesador de datos. No ocurre ninguna transmisión de
      datos personales. No se requiere BAA. Las imágenes se quedan en el
      dispositivo de la persona que realiza la compresión.
    </p>

    <h2 id="questions-to-ask">
      Preguntas para Evaluar Cualquier Herramienta de Compresión
    </h2>

    <p>
      Antes de usar cualquier herramienta de compresión de imágenes para
      contenido sensible, preguntá:
    </p>

    <ul>
      <li>
        <strong>¿Dónde se realiza el procesamiento?</strong> ¿Es del lado del
        cliente (navegador) o del servidor? Si la herramienta requiere conexión
        a internet para comprimir, es del lado del servidor.
      </li>
      <li>
        <strong>
          ¿Qué dice la política de privacidad sobre la retención de imágenes?
        </strong>{' '}
        "No almacenamos imágenes" e "Las imágenes se eliminan después de 24
        horas" son afirmaciones muy diferentes.
      </li>
      <li>
        <strong>¿Hay un acuerdo de procesamiento de datos disponible?</strong>{' '}
        Para uso empresarial bajo GDPR o HIPAA, necesitás un DPA o BAA con
        cualquier herramienta que procese datos en tu nombre.
      </li>
      <li>
        <strong>¿La herramienta funciona sin conexión?</strong> Una herramienta
        basada en navegador que funciona sin internet después de la carga
        inicial es una fuerte señal de procesamiento genuinamente del lado del
        cliente.
      </li>
      <li>
        <strong>
          ¿Quién es el propietario de la herramienta y dónde están sus
          servidores?
        </strong>{' '}
        Para el GDPR, la ubicación de la infraestructura de procesamiento
        importa — pueden aplicar requisitos de residencia de datos en la UE.
      </li>
    </ul>

    <h2 id="shrinkimg-approach">Cómo Maneja Esto ShrinkImg</h2>

    <p>
      ShrinkImg fue construido específicamente alrededor del procesamiento
      basado en navegador. El pipeline de compresión — codificación WebP,
      codificación AVIF, optimización PNG, re-codificación JPEG — corre
      completamente vía WebAssembly en tu pestaña del navegador. Ningún dato de
      imagen se transmite a ningún servidor en ningún punto del proceso de
      compresión.
    </p>

    <p>
      Por eso ShrinkImg funciona incluso si te desconectás de internet después
      de cargar la página. Los módulos WASM se cachean en tu navegador; la
      compresión en sí no requiere acceso a la red. Para flujos de trabajo
      masivos con imágenes sensibles — mirá nuestra{' '}
      <a href="/es/blog/compress-images-bulk">
        guía de compresión masiva de imágenes
      </a>{' '}
      — esto significa que podés procesar toda una biblioteca de imágenes
      confidenciales sin que ninguna salga de tu dispositivo.
    </p>

    <p>
      No hay cuentas de usuario, no hay historial de subidas, no hay registro de
      sesión del contenido de las imágenes. Cuando cerrás la pestaña del
      navegador, la sesión termina. Nada persiste excepto los archivos
      comprimidos descargados en tu almacenamiento local.
    </p>

    <h2 id="practical-recommendations">Recomendaciones Prácticas</h2>

    <ul>
      <li>
        <strong>
          Para imágenes web generales (fotos de stock, gráficos decorativos,
          imágenes de productos no sensibles):
        </strong>{' '}
        cualquier herramienta de compresión de buena reputación está bien. La
        conveniencia y la calidad de salida son los factores principales.
      </li>
      <li>
        <strong>
          Para trabajo con clientes, materiales previos al lanzamiento, o
          cualquier cosa con obligaciones de confidencialidad:
        </strong>{' '}
        usá exclusivamente una herramienta basada en navegador. La diferencia de
        privacidad no es teórica.
      </li>
      <li>
        <strong>Para contextos de salud, legales o financieros:</strong> la
        compresión basada en navegador sin transmisión al servidor es la única
        opción compatible a menos que tengas acuerdos DPA/BAA explícitos en su
        lugar.
      </li>
      <li>
        <strong>
          Para organizaciones con políticas de seguridad de la información:
        </strong>{' '}
        la compresión basada en navegador puede aprobarse como categoría sin
        requerir revisiones de seguridad por herramienta, ya que no ocurre
        egreso de datos.
      </li>
    </ul>

    <p>
      La compresión de imágenes es una tarea rutinaria, pero la herramienta que
      elegís determina adónde van tus imágenes. Para contenido sensible, la
      brecha entre las herramientas del lado del servidor y las basadas en
      navegador no es menor — es la diferencia entre los datos que se quedan en
      tu dispositivo y los datos que lo abandonan. Si esa distinción importa
      para tu caso de uso, <a href="/es/">ShrinkImg</a> está construido para
      mantenerlos de tu lado.
    </p>
  </Fragment>
);

export default OnlineImageCompressionPrivacyEs;
