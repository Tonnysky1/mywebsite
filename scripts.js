// Mostrar/ocultar el menú lateral
document.getElementById('menu-toggle').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
});

// Inicializar FullCalendar
document.addEventListener('DOMContentLoaded', () => {
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', // Vista inicial: mes
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: [
      // Eventos de ejemplo
      { title: 'Audiencia preliminar', date: '2023-10-20' },
      { title: 'Vencimiento de plazo', date: '2023-10-25' },
      { title: 'Presentación de documentos', date: '2023-10-30' },
    ],
  });
  calendar.render();
});

// Cargar notificaciones dinámicas
const notifications = [
  'Nuevo caso asignado: #123',
  'Recordatorio: Revisar documentos del caso #456',
  'Actualización: Caso #789 completado',
];

const notificationList = document.getElementById('notification-list');
notifications.forEach((notification) => {
  const li = document.createElement('li');
  li.textContent = notification;
  notificationList.appendChild(li);
});

// Lógica de filtrado (esqueleto)
document.getElementById('status-filter').addEventListener('change', (event) => {
  const status = event.target.value;
  console.log(`Filtrar por estatus: ${status}`);
  // Aquí puedes agregar la lógica para filtrar casos
});