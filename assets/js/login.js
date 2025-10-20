// Login + Admin panel logic embedded in login.html
const authConfig = { user: 'admin@parroquiansa.cl', pass: 'admin123' };

function initLogin(){
  const form = document.getElementById('login-form');
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const error = document.getElementById('login-error');
    if(email === authConfig.user && password === authConfig.pass){
      // show admin panel
      document.getElementById('login-section').style.display='none';
      document.getElementById('admin-section').style.display='block';
      loadAdminData();
    } else {
      error.textContent = 'Credenciales inválidas';
      setTimeout(()=>error.textContent='',3000);
    }
  });
}

function loadAdminData(){
  // Example datasets
  const data = {
    bautismos: [
      {id:1,nombre:'Juan Pérez',fecha:'2025-05-15',lugar:'Parroquia NSA',observaciones:'Padrinos: María y Pedro'},
      {id:2,nombre:'Ana García',fecha:'2025-06-20',lugar:'Parroquia NSA',observaciones:'Ceremonia privada'}
    ],
    comuniones: [
      {id:1,nombre:'Carlos López',fecha:'2025-04-10',lugar:'Parroquia NSA',observaciones:'Primera Comunión'}
    ],
    confirmaciones:[{id:1,nombre:'Roberto Torres',fecha:'2025-08-25',lugar:'Parroquia NSA',observaciones:'Confirmación adultos'}],
    matrimonios:[{id:1,nombre:'Felipe y Carolina',fecha:'2025-09-30',lugar:'Parroquia NSA',observaciones:'Ceremonia 17:00'}]
  };
  window._adminData = data;
  renderSection('bautismos');
}

function renderSection(key){
  const tableBody = document.getElementById('records-body');
  const title = document.getElementById('admin-title');
  const list = window._adminData[key] || [];
  title.textContent = key.charAt(0).toUpperCase() + key.slice(1);
  tableBody.innerHTML = '';
  list.forEach(r=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${r.nombre}</td><td>${r.fecha}</td><td>${r.lugar}</td><td>${r.observaciones}</td><td><button class="btn" onclick="generateCertificate(${JSON.stringify(JSON.stringify(r))},'${key}')">Generar PDF</button></td>`;
    tableBody.appendChild(tr);
  });
}

function generateCertificate(regJson, tipo){
  // regJson is a JSON-string encoded twice due to inline stringify; parse twice
  const registro = JSON.parse(JSON.parse(regJson));
  // Create PDF using jsPDF (assumes jspdf is loaded via CDN in login.html)
  const doc = new window.jspdf.jsPDF({unit:'pt',format:'a4'});
  const margin = 60;
  doc.setFontSize(18);
  doc.text('Certificado Sacramental – Parroquia Nuestra Señora de los Ángeles', margin, 100);
  doc.setFontSize(12);
  doc.text(`Tipo de sacramento: ${tipo.charAt(0).toUpperCase()+tipo.slice(1)}`, margin, 150);
  doc.text(`Nombre completo: ${registro.nombre}`, margin, 175);
  doc.text(`Fecha: ${registro.fecha}`, margin, 200);
  doc.text(`Lugar: ${registro.lugar}`, margin, 225);
  doc.text('Observaciones: ' + registro.observaciones, margin, 250);

  // Firma placeholder
  doc.setLineWidth(0.5);
  doc.line(margin, 420, 250, 420);
  doc.text('Firma del Párroco', margin, 440);

  doc.save(`certificado_${registro.nombre.replace(/\s+/g,'_')}.pdf`);
}

// Expose functions for inline onclick
window.renderSection = renderSection;
window.generateCertificate = generateCertificate;
window.initLogin = initLogin;

// Init on DOM ready
document.addEventListener('DOMContentLoaded',()=>{initLogin();});
