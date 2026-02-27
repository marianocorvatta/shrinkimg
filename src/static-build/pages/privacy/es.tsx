import { h, Fragment, FunctionalComponent } from 'preact';

const PrivacyContentEs: FunctionalComponent = () => (
  <Fragment>
    <h1>Política de Privacidad</h1>
    <p class="last-updated">Última actualización: 27 de febrero de 2026</p>

    <h2>Sin Subida de Imágenes</h2>
    <p>
      ShrinkImg procesa todas las imágenes{' '}
      <strong>completamente en tu navegador</strong>. Tus imágenes nunca se
      suben a ningún servidor. Toda la compresión y conversión ocurre localmente
      en tu dispositivo usando WebAssembly y JavaScript.
    </p>

    <h2>Sin Recopilación de Datos Personales</h2>
    <p>
      No recopilamos, almacenamos ni procesamos ningún dato personal. No
      requerimos creación de cuenta, direcciones de correo electrónico ni
      ninguna forma de registro.
    </p>

    <h2>Google Analytics</h2>
    <p>
      Usamos Google Analytics para entender cómo los visitantes interactúan con
      nuestro sitio. Google Analytics recopila datos de uso anónimos como
      páginas visitadas, tiempo en el sitio y ubicación geográfica general.
      Estos datos nos ayudan a mejorar el servicio. Podés optar por no
      participar usando una extensión del navegador como{' '}
      <a
        href="https://tools.google.com/dlpage/gaoptout"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Analytics Opt-out
      </a>
      .
    </p>

    <h2>Google AdSense</h2>
    <p>
      Usamos Google AdSense para mostrar anuncios. Google AdSense puede usar
      cookies y web beacons para mostrar anuncios basados en tus visitas previas
      a este y otros sitios web. El uso de cookies publicitarias por parte de
      Google permite a Google y sus socios mostrar anuncios basados en tu
      actividad de navegación. Podés optar por no recibir publicidad
      personalizada visitando{' '}
      <a
        href="https://www.google.com/settings/ads"
        target="_blank"
        rel="noopener noreferrer"
      >
        Configuración de Anuncios de Google
      </a>
      .
    </p>

    <h2>Cookies</h2>
    <p>ShrinkImg y sus socios de terceros pueden usar cookies para:</p>
    <ul>
      <li>Análisis (Google Analytics)</li>
      <li>Publicidad (Google AdSense)</li>
      <li>Recordar tu preferencia de consentimiento de cookies</li>
    </ul>
    <p>
      Podés controlar las cookies a través de la configuración de tu navegador.
      Desactivar las cookies puede afectar las funciones de terceros, pero no
      afectará la funcionalidad de compresión de imágenes.
    </p>

    <h2>Almacenamiento Local</h2>
    <p>
      Usamos el localStorage de tu navegador para recordar tu elección de
      consentimiento de cookies. No se almacenan datos de imagen ni información
      personal en localStorage.
    </p>

    <h2>Cumplimiento del RGPD (UE)</h2>
    <p>
      Si te encontrás en la Unión Europea, tenés derecho a acceder, rectificar o
      eliminar cualquier dato personal. Como no recopilamos datos personales, no
      hay nada que acceder, rectificar o eliminar. El consentimiento de cookies
      se solicita antes de establecer cualquier cookie no esencial.
    </p>

    <h2>Ley 25.326 — Protección de Datos Personales (Argentina)</h2>
    <p>
      En cumplimiento de la Ley 25.326 de Protección de Datos Personales de la
      República Argentina, informamos que ShrinkImg no recopila, almacena ni
      procesa datos personales. No se mantienen bases de datos de información
      personal.
    </p>

    <h2>Privacidad de Menores</h2>
    <p>
      ShrinkImg no recopila intencionalmente información de menores de 13 años.
      El servicio es una herramienta de compresión de imágenes de uso general
      que no requiere ninguna información personal.
    </p>

    <h2>Cambios en Esta Política</h2>
    <p>
      Podemos actualizar esta Política de Privacidad periódicamente. Los cambios
      se publicarán en esta página con una fecha de "Última actualización"
      actualizada.
    </p>

    <h2>Contacto</h2>
    <p>
      Si tenés preguntas sobre esta Política de Privacidad, contactanos en{' '}
      <a href="mailto:privacy@shrinkimg.com">privacy@shrinkimg.com</a>.
    </p>
  </Fragment>
);

export default PrivacyContentEs;
