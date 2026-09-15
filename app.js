/* ============ DATA ============ */
// Status pembayaran: 'lunas' | 'menunggak' | 'today' | 'besok' | null (kosong)
let rooms = [
  { no:'1B', lantai:1, status:'terisi', nama:'Budi Santoso', hp:'0812-3456-7801', masukDisplay:'01 Jan 2026', masukISO:'2026-01-01', tarif:850000, jatuhTempo:'01 Okt 2026', pay:'lunas', menunggakHari:0, tglBayar:'01 Sep 2026', metode:'Transfer BCA' },
  { no:'1C', lantai:1, status:'terisi', nama:'Andi Wirawan', hp:'0813-2211-4590', masukDisplay:'05 Feb 2026', masukISO:'2026-02-05', tarif:800000, jatuhTempo:'05 Sep 2026', pay:'menunggak', menunggakHari:7, tglBayar:'-', metode:'-' },
  { no:'1D', lantai:1, status:'terisi', nama:'Siti Aisyah', hp:'0857-7712-3390', masukDisplay:'10 Mar 2026', masukISO:'2026-03-10', tarif:800000, jatuhTempo:'13 Sep 2026', pay:'besok', menunggakHari:0, tglBayar:'-', metode:'-' },
  { no:'1E', lantai:1, status:'terisi', nama:'Dewi Lestari', hp:'0821-5566-7788', masukDisplay:'20 Mar 2026', masukISO:'2026-03-20', tarif:850000, jatuhTempo:'20 Sep 2026', pay:'lunas', menunggakHari:0, tglBayar:'20 Agu 2026', metode:'QRIS' },
  { no:'1F', lantai:1, status:'terisi', nama:'Agus Salim', hp:'0838-1122-9987', masukDisplay:'12 Apr 2026', masukISO:'2026-04-12', tarif:800000, jatuhTempo:'12 Sep 2026', pay:'today', menunggakHari:0, tglBayar:'-', metode:'-' },
  { no:'1G', lantai:1, status:'kosong' },
  { no:'1H', lantai:1, status:'terisi', nama:'Rina Marlina', hp:'0812-9988-1122', masukDisplay:'25 Apr 2026', masukISO:'2026-04-25', tarif:850000, jatuhTempo:'25 Sep 2026', pay:'lunas', menunggakHari:0, tglBayar:'25 Agu 2026', metode:'Tunai' },
  { no:'2A', lantai:2, status:'terisi', nama:'Nur Hidayah', hp:'0857-1122-3344', masukDisplay:'15 Jan 2026', masukISO:'2026-01-15', tarif:900000, jatuhTempo:'15 Sep 2026', pay:'lunas', menunggakHari:0, tglBayar:'15 Agu 2026', metode:'QRIS' },
  { no:'2B', lantai:2, status:'terisi', nama:'Hendra Gunawan', hp:'0812-5566-8899', masukDisplay:'22 Feb 2026', masukISO:'2026-02-22', tarif:900000, jatuhTempo:'22 Sep 2026', pay:'lunas', menunggakHari:0, tglBayar:'22 Agu 2026', metode:'Transfer BCA' },
  { no:'2C', lantai:2, status:'terisi', nama:'Yuni Kartika', hp:'0838-9900-1122', masukDisplay:'14 Mar 2026', masukISO:'2026-03-14', tarif:900000, jatuhTempo:'14 Sep 2026', pay:'lunas', menunggakHari:0, tglBayar:'14 Agu 2026', metode:'Transfer BCA' },
  { no:'2D', lantai:2, status:'terisi', nama:'Taufik Hidayat', hp:'0819-2233-4455', masukDisplay:'28 Apr 2026', masukISO:'2026-04-28', tarif:950000, jatuhTempo:'28 Sep 2026', pay:'lunas', menunggakHari:0, tglBayar:'28 Agu 2026', metode:'Tunai' },
  { no:'2E', lantai:2, status:'terisi', nama:'Maya Sari', hp:'0812-6677-8899', masukDisplay:'03 Mei 2026', masukISO:'2026-05-03', tarif:900000, jatuhTempo:'03 Sep 2026', pay:'menunggak', menunggakHari:9, tglBayar:'-', metode:'-' },
  { no:'2F', lantai:2, status:'terisi', nama:'Bayu Aji', hp:'0857-3344-5566', masukDisplay:'18 Mei 2026', masukISO:'2026-05-18', tarif:900000, jatuhTempo:'18 Sep 2026', pay:'lunas', menunggakHari:0, tglBayar:'18 Agu 2026', metode:'Transfer Mandiri' },
  { no:'2G', lantai:2, status:'terisi', nama:'Indah Permata', hp:'0821-7788-9900', masukDisplay:'10 Jun 2026', masukISO:'2026-06-10', tarif:950000, jatuhTempo:'10 Sep 2026', pay:'menunggak', menunggakHari:2, tglBayar:'-', metode:'-' },
  { no:'2H', lantai:2, status:'kosong' },
  { no:'2I', lantai:2, status:'terisi', nama:'Wahyu Setiawan', hp:'0813-6677-8899', masukDisplay:'27 Jun 2026', masukISO:'2026-06-27', tarif:900000, jatuhTempo:'27 Sep 2026', pay:'lunas', menunggakHari:0, tglBayar:'27 Agu 2026', metode:'QRIS' },
  { no:'3A', lantai:3, status:'terisi', nama:'Lina Wati', hp:'0838-4455-6677', masukDisplay:'05 Jul 2026', masukISO:'2026-07-05', tarif:950000, jatuhTempo:'05 Okt 2026', pay:'lunas', menunggakHari:0, tglBayar:'05 Sep 2026', metode:'Transfer BCA' },
  { no:'3B', lantai:3, status:'terisi', nama:'Maya Sari', hp:'0812-6677-8899', masukDisplay:'03 Mei 2026', masukISO:'2026-05-03', tarif:900000, jatuhTempo:'03 Sep 2026', pay:'menunggak', menunggakHari:9, tglBayar:'-', metode:'-' },
];

const chartData = [
  { label:'Apr', value:13200000, current:false },
  { label:'Mei', value:13800000, current:false },
  { label:'Jun', value:14300000, current:false },
  { label:'Jul', value:14900000, current:false },
  { label:'Agu', value:15650000, current:false },
  { label:'Sep', value:9800000, current:true },
];

/* ============ HELPERS ============ */
function rupiah(n){ return 'Rp' + n.toLocaleString('id-ID'); }
function initials(name){
  return name.split(' ').filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase();
}
function payBadge(room){
  if(room.status==='kosong') return '<span class="badge badge-kosong">Kosong</span>';
  switch(room.pay){
    case 'lunas': return '<span class="badge badge-lunas">Lunas</span>';
    case 'menunggak': return `<span class="badge badge-menunggak">Menunggak (${room.menunggakHari} hari)</span>`;
    case 'today': return '<span class="badge badge-today">Jatuh Tempo Hari Ini</span>';
    case 'besok': return '<span class="badge badge-besok">Jatuh Tempo Besok</span>';
    default: return '';
  }
}
function occupied(){ return rooms.filter(r=>r.status==='terisi'); }
function empties(){ return rooms.filter(r=>r.status==='kosong'); }
function attentionRooms(){
  const order = { menunggak:0, today:1, besok:2 };
  return occupied()
    .filter(r=>r.pay!=='lunas')
    .sort((a,b)=>{
      const oa=order[a.pay], ob=order[b.pay];
      if(oa!==ob) return oa-ob;
      return (b.menunggakHari||0)-(a.menunggakHari||0);
    });
}
function showToast(msg){
  const wrap = document.getElementById('toastWrap');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg><span>${msg}</span>`;
  wrap.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('show'));
  setTimeout(()=>{
    el.classList.remove('show');
    setTimeout(()=>el.remove(), 250);
  }, 2600);
}

/* ============ RENDER: DASHBOARD ============ */
function renderAttentionTable(){
  const body = document.getElementById('attentionTableBody');
  const list = attentionRooms();
  if(list.length===0){
    body.innerHTML = `<tr><td colspan="6" class="empty-state">Semua kamar dalam status lunas. Tidak ada yang perlu ditindaklanjuti.</td></tr>`;
    return;
  }
  body.innerHTML = list.map(r=>`
    <tr>
      <td><span class="cell-room">${r.no}</span></td>
      <td>
        <div class="cell-name">${r.nama}</div>
        <div class="cell-sub">${r.hp}</div>
      </td>
      <td>${r.jatuhTempo}</td>
      <td>${payBadge(r)}</td>
      <td>${rupiah(r.tarif)}</td>
      <td>
        <div class="row-actions">
          <button class="btn btn-gold btn-sm" onclick="tagihPenghuni('${r.no}')">Tagih</button>
          <button class="btn btn-ghost btn-sm" onclick="openDetail('${r.no}')">Detail</button>
        </div>
      </td>
    </tr>
  `).join('');
}

/* ============ RENDER: KAMAR & PENGHUNI ============ */
function renderFloors(){
  const container = document.getElementById('floorContainer');
  const floors = [1,2];
  container.innerHTML = floors.map(f=>{
    const list = rooms.filter(r=>r.lantai===f);
    const tiles = list.map(r=>{
      if(r.status==='kosong'){
        return `
          <div class="room-tile kosong" onclick="openPenghuniModal('add','${r.no}')" style="cursor:pointer;">
            <div class="room-no">${r.no}</div>
            <div class="room-add">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
              Isi kamar
            </div>
          </div>`;
      }
      const dotColor = r.pay==='lunas' ? 'var(--emerald-600)' : r.pay==='menunggak' ? 'var(--clay-600)' : r.pay==='today' ? 'var(--gold-600)' : 'var(--amber-600)';
      return `
        <div class="room-tile terisi" onclick="openDetail('${r.no}')" style="cursor:pointer;">
          <div>
            <div class="room-no">${r.no}</div>
            <div class="room-name">${r.nama}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="room-status-dot" style="background:${dotColor};"></span>
            <span class="cell-sub">${r.pay==='lunas'?'Lunas':r.pay==='menunggak'?'Menunggak':r.pay==='today'?'Hari ini':'Besok'}</span>
          </div>
        </div>`;
    }).join('');
    return `
      <div class="floor-block">
        <div class="floor-title">Lantai ${f}</div>
        <div class="room-grid">${tiles}</div>
      </div>`;
  }).join('');
}

function renderKamarTable(filterText=''){
  const body = document.getElementById('kamarTableBody');
  const q = filterText.trim().toLowerCase();
  const filtered = rooms.filter(r=>{
    if(!q) return true;
    return r.no.toLowerCase().includes(q) || (r.nama && r.nama.toLowerCase().includes(q));
  });
  if(filtered.length===0){
    body.innerHTML = `<tr><td colspan="7" class="empty-state">Tidak ada data yang cocok dengan pencarian.</td></tr>`;
    return;
  }
  body.innerHTML = filtered.map(r=>{
    if(r.status==='kosong'){
      return `
        <tr>
          <td><span class="cell-room">${r.no}</span></td>
          <td colspan="4" class="cell-sub">Kamar kosong — belum ada penghuni</td>
          <td>${payBadge(r)}</td>
          <td>
            <div class="row-actions">
              <button class="btn btn-primary btn-sm" onclick="openPenghuniModal('add','${r.no}')">Isi Kamar</button>
            </div>
          </td>
        </tr>`;
    }
    return `
      <tr>
        <td><span class="cell-room">${r.no}</span></td>
        <td class="cell-name">${r.nama}</td>
        <td>${r.hp}</td>
        <td>${r.masukDisplay}</td>
        <td>${rupiah(r.tarif)} <span class="cell-sub">/bln</span></td>
        <td>${payBadge(r)}</td>
        <td>
          <div class="row-actions">
            <button class="icon-only" title="Edit" onclick="openPenghuniModal('edit','${r.no}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </button>
            <button class="icon-only" title="Hapus" onclick="hapusPenghuni('${r.no}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg>
            </button>
          </div>
        </td>
      </tr>`;
  }).join('');
}

/* ============ RENDER: PEMBAYARAN ============ */
function renderPembayaranTable(filterText='', filterStatus='semua'){
  const body = document.getElementById('pembayaranTableBody');
  const q = filterText.trim().toLowerCase();
  let list = occupied();
  if(q){
    list = list.filter(r=>r.no.toLowerCase().includes(q) || r.nama.toLowerCase().includes(q));
  }
  if(filterStatus!=='semua'){
    list = list.filter(r=>r.pay===filterStatus);
  }
  if(list.length===0){
    body.innerHTML = `<tr><td colspan="8" class="empty-state">Tidak ada data pembayaran yang cocok.</td></tr>`;
    return;
  }
  body.innerHTML = list.map(r=>`
    <tr>
      <td><span class="cell-room">${r.no}</span></td>
      <td class="cell-name">${r.nama}</td>
      <td>${rupiah(r.tarif)}</td>
      <td>${r.jatuhTempo}</td>
      <td>${payBadge(r)}</td>
      <td>${r.tglBayar}</td>
      <td>${r.metode}</td>
      <td>
        <div class="row-actions">
          ${r.pay!=='lunas' ? `<button class="btn btn-gold btn-sm" onclick="tagihPenghuni('${r.no}')">Tagih</button>` : `<button class="btn btn-ghost btn-sm" onclick="cetakKwitansi('${r.no}')">Kwitansi</button>`}
          <button class="icon-only" title="Detail" onclick="openDetail('${r.no}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 16v-5"/><circle cx="12" cy="8" r="0.6" fill="currentColor"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

/* ============ RENDER: LAPORAN ============ */
function renderChart(){
  const wrap = document.getElementById('chartWrap');
  const max = Math.max(...chartData.map(d=>d.value)) * 1.08;
  wrap.innerHTML = chartData.map(d=>{
    const h = Math.round((d.value/max)*160);
    return `
      <div class="chart-col">
        <div class="chart-value">${(d.value/1000000).toFixed(1)}jt</div>
        <div class="chart-bar ${d.current?'current':''}" style="height:${h}px;"></div>
        <div class="chart-label">${d.label}</div>
      </div>`;
  }).join('');
}
function renderLaporanTable(){
  const body = document.getElementById('laporanTableBody');
  body.innerHTML = occupied().map(r=>`
    <tr>
      <td><span class="cell-room">${r.no}</span></td>
      <td class="cell-name">${r.nama}</td>
      <td>${rupiah(r.tarif)}</td>
      <td>${payBadge(r)}</td>
      <td>${r.tglBayar}</td>
    </tr>
  `).join('');
}

/* ============ NOTIFICATIONS ============ */
function renderNotifications(){
  const panel = document.getElementById('notifPanel');
  const menunggak = occupied().filter(r=>r.pay==='menunggak').length;
  const today = occupied().filter(r=>r.pay==='today').length;
  const besok = occupied().filter(r=>r.pay==='besok').length;
  const kosong = empties().length;
  const items = [
    { color:'var(--clay-600)', title:`${menunggak} kamar menunggak pembayaran`, sub:'Segera kirim pengingat ke penghuni terkait' },
    { color:'var(--gold-600)', title:`${today} kamar jatuh tempo hari ini`, sub:'Pastikan tagihan sudah dikirim' },
    { color:'var(--amber-600)', title:`${besok} kamar jatuh tempo besok`, sub:'Ingatkan penghuni sebelum tenggat' },
    { color:'var(--emerald-600)', title:`${kosong} kamar kosong tersedia`, sub:'Bisa ditawarkan ke calon penghuni baru' },
  ];
  panel.innerHTML = `<h4>Notifikasi</h4>` + items.map(it=>`
    <div class="notif-item">
      <span class="notif-dot" style="background:${it.color};"></span>
      <div class="notif-text"><b>${it.title}</b><span>${it.sub}</span></div>
    </div>
  `).join('');
}

/* ============ RENDER ALL ============ */
function renderAll(){
  renderAttentionTable();
  renderFloors();
  renderKamarTable(document.getElementById('kamarSearch').value);
  renderPembayaranTable(document.getElementById('pembayaranSearch').value, document.getElementById('pembayaranFilter').value);
  renderLaporanTable();
  renderNotifications();
  document.getElementById('detailCloseBtnDummy');
}

/* ============ NAVIGATION ============ */
const pageTitles = {
  dashboard: ['Dashboard', 'Sabtu, 12 September 2026'],
  kamar: ['Kamar & Penghuni', 'Kelola data kamar dan penghuni Kost Zamrud'],
  pembayaran: ['Pembayaran', 'Catat dan pantau pembayaran uang kos'],
  laporan: ['Laporan', 'Ringkasan pengelolaan kos periode berjalan'],
};
function goToPage(page){
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active', b.dataset.page===page));
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active', p.id===('page-'+page)));
  document.getElementById('pageTitle').textContent = pageTitles[page][0];
  document.getElementById('pageSub').textContent = pageTitles[page][1];
  closeSidebarMobile();
  window.scrollTo({top:0, behavior:'smooth'});
}
document.querySelectorAll('.nav-item').forEach(btn=>{
  btn.addEventListener('click', ()=>goToPage(btn.dataset.page));
});
document.querySelectorAll('[data-goto]').forEach(btn=>{
  btn.addEventListener('click', ()=>goToPage(btn.dataset.goto));
});

/* ============ MOBILE SIDEBAR ============ */
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
function openSidebarMobile(){ sidebar.classList.add('open'); overlay.classList.add('open'); }
function closeSidebarMobile(){ sidebar.classList.remove('open'); overlay.classList.remove('open'); }
document.getElementById('hamburgerBtn').addEventListener('click', openSidebarMobile);
overlay.addEventListener('click', closeSidebarMobile);

/* ============ NOTIFICATION PANEL TOGGLE ============ */
const notifBtn = document.getElementById('notifBtn');
const notifPanel = document.getElementById('notifPanel');
notifBtn.addEventListener('click', (e)=>{
  e.stopPropagation();
  notifPanel.classList.toggle('open');
});
document.addEventListener('click', (e)=>{
  if(!notifPanel.contains(e.target) && e.target!==notifBtn){
    notifPanel.classList.remove('open');
  }
});

/* ============ SEARCH & FILTER ============ */
document.getElementById('kamarSearch').addEventListener('input', (e)=>renderKamarTable(e.target.value));
document.getElementById('pembayaranSearch').addEventListener('input', (e)=>renderPembayaranTable(e.target.value, document.getElementById('pembayaranFilter').value));
document.getElementById('pembayaranFilter').addEventListener('change', (e)=>renderPembayaranTable(document.getElementById('pembayaranSearch').value, e.target.value));

/* ============ ACTIONS ============ */
function tagihPenghuni(no){
  const r = rooms.find(x=>x.no===no);
  if(!r) return;
  showToast(`Pengingat pembayaran terkirim ke ${r.nama} (Kamar ${r.no})`);
}
function cetakKwitansi(no){
  const r = rooms.find(x=>x.no===no);
  if(!r) return;
  showToast(`Kwitansi kamar ${r.no} — ${r.nama} sedang disiapkan`);
}
function hapusPenghuni(no){
  const r = rooms.find(x=>x.no===no);
  if(!r) return;
  const ok = confirm(`Hapus data penghuni "${r.nama}" dari kamar ${r.no}? Kamar akan ditandai kosong kembali.`);
  if(!ok) return;
  r.status='kosong';
  delete r.nama; delete r.hp; delete r.masukDisplay; delete r.masukISO;
  delete r.tarif; delete r.jatuhTempo; delete r.pay; delete r.menunggakHari;
  delete r.tglBayar; delete r.metode;
  renderAll();
  showToast(`Kamar ${no} sekarang berstatus kosong`);
}

/* ============ DETAIL MODAL ============ */
const detailBackdrop = document.getElementById('detailModalBackdrop');
function openDetail(no){
  const r = rooms.find(x=>x.no===no);
  if(!r) return;
  document.getElementById('detailSub').textContent = `Kamar ${r.no} · Lantai ${r.lantai}`;
  const body = document.getElementById('detailBody');
  if(r.status==='kosong'){
    body.innerHTML = `
      <div class="detail-row"><span>Status kamar</span><span>Kosong</span></div>
      <div class="detail-row"><span>Lantai</span><span>${r.lantai}</span></div>
    `;
  } else {
    body.innerHTML = `
      <div class="detail-row"><span>Nama penghuni</span><span>${r.nama}</span></div>
      <div class="detail-row"><span>No. HP / WhatsApp</span><span>${r.hp}</span></div>
      <div class="detail-row"><span>Tanggal masuk</span><span>${r.masukDisplay}</span></div>
      <div class="detail-row"><span>Tarif per bulan</span><span>${rupiah(r.tarif)}</span></div>
      <div class="detail-row"><span>Jatuh tempo berikutnya</span><span>${r.jatuhTempo}</span></div>
      <div class="detail-row"><span>Status pembayaran</span><span>${payBadge(r)}</span></div>
      <div class="detail-row"><span>Pembayaran terakhir</span><span>${r.tglBayar}${r.metode!=='-'?' · '+r.metode:''}</span></div>
    `;
  }
  detailBackdrop.classList.add('open');
}
document.getElementById('detailModalClose').addEventListener('click', ()=>detailBackdrop.classList.remove('open'));
document.getElementById('detailCloseBtn').addEventListener('click', ()=>detailBackdrop.classList.remove('open'));
detailBackdrop.addEventListener('click', (e)=>{ if(e.target===detailBackdrop) detailBackdrop.classList.remove('open'); });

/* ============ PENGHUNI MODAL (ADD / EDIT) ============ */
const penghuniBackdrop = document.getElementById('penghuniModalBackdrop');
const penghuniForm = document.getElementById('penghuniForm');
let currentMode = 'add';
let currentRoomNo = null;

function openPenghuniModal(mode, roomNo){
  currentMode = mode;
  currentRoomNo = roomNo;
  const kamarSelect = document.getElementById('fKamar');

  if(mode==='add'){
    document.getElementById('penghuniModalTitle').textContent = 'Tambah Penghuni';
    document.getElementById('penghuniModalSub').textContent = 'Isi data penghuni baru untuk kamar yang kosong';
    document.getElementById('penghuniSubmit').textContent = 'Simpan Penghuni';
    const avail = empties();
    kamarSelect.innerHTML = avail.map(r=>`<option value="${r.no}">${r.no} (Lantai ${r.lantai})</option>`).join('');
    if(roomNo) kamarSelect.value = roomNo;
    kamarSelect.disabled = false;
    penghuniForm.reset();
    kamarSelect.value = roomNo || (avail[0] ? avail[0].no : '');
    document.getElementById('fTarif').value = '';
  } else {
    const r = rooms.find(x=>x.no===roomNo);
    document.getElementById('penghuniModalTitle').textContent = 'Ubah Data Penghuni';
    document.getElementById('penghuniModalSub').textContent = `Perbarui data untuk kamar ${r.no}`;
    document.getElementById('penghuniSubmit').textContent = 'Simpan Perubahan';
    kamarSelect.innerHTML = `<option value="${r.no}">${r.no} (Lantai ${r.lantai})</option>`;
    kamarSelect.disabled = true;
    document.getElementById('fNama').value = r.nama;
    document.getElementById('fHp').value = r.hp;
    document.getElementById('fMasuk').value = r.masukISO;
    document.getElementById('fTarif').value = r.tarif;
  }
  penghuniBackdrop.classList.add('open');
}
function closePenghuniModal(){ penghuniBackdrop.classList.remove('open'); }
document.getElementById('btnTambahPenghuni').addEventListener('click', ()=>openPenghuniModal('add', null));
document.getElementById('penghuniModalClose').addEventListener('click', closePenghuniModal);
document.getElementById('penghuniCancel').addEventListener('click', closePenghuniModal);
penghuniBackdrop.addEventListener('click', (e)=>{ if(e.target===penghuniBackdrop) closePenghuniModal(); });

function formatMasukDisplay(iso){
  const bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
  const [y,m,d] = iso.split('-');
  return `${d} ${bulan[parseInt(m,10)-1]} ${y}`;
}

penghuniForm.addEventListener('submit', function(e){
  e.preventDefault();
  const nama = document.getElementById('fNama').value.trim();
  const kamarNo = document.getElementById('fKamar').value;
  const hp = document.getElementById('fHp').value.trim();
  const masukISO = document.getElementById('fMasuk').value;
  const tarif = parseInt(document.getElementById('fTarif').value, 10) || 0;

  if(!nama || !kamarNo || !hp || !masukISO || !tarif){
    showToast('Lengkapi semua data terlebih dahulu');
    return;
  }

  const room = rooms.find(x=>x.no===kamarNo);
  if(!room) return;

  if(currentMode==='add'){
    room.status = 'terisi';
    room.nama = nama;
    room.hp = hp;
    room.masukISO = masukISO;
    room.masukDisplay = formatMasukDisplay(masukISO);
    room.tarif = tarif;
    room.jatuhTempo = formatMasukDisplay(masukISO) + ' (bulan depan)';
    room.pay = 'lunas';
    room.menunggakHari = 0;
    room.tglBayar = formatMasukDisplay(masukISO);
    room.metode = 'Tunai';
    showToast(`${nama} berhasil ditambahkan ke kamar ${kamarNo}`);
  } else {
    room.nama = nama;
    room.hp = hp;
    room.masukISO = masukISO;
    room.masukDisplay = formatMasukDisplay(masukISO);
    room.tarif = tarif;
    showToast(`Data kamar ${kamarNo} berhasil diperbarui`);
  }

  closePenghuniModal();
  renderAll();
});

/* ============ PRINT & CSV EXPORT ============ */
document.getElementById('btnCetak').addEventListener('click', ()=>window.print());
document.getElementById('btnUnduh').addEventListener('click', ()=>{
  const rows = [['No Kamar','Nama Penghuni','Tarif','Status','Tanggal Bayar']];
  occupied().forEach(r=>{
    const statusText = r.pay==='lunas' ? 'Lunas' : r.pay==='menunggak' ? `Menunggak ${r.menunggakHari} hari` : r.pay==='today' ? 'Jatuh tempo hari ini' : 'Jatuh tempo besok';
    rows.push([r.no, r.nama, r.tarif, statusText, r.tglBayar]);
  });
  const csv = rows.map(row=>row.map(cell=>`"${String(cell).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob(['\ufeff'+csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'laporan-pembayaran-kost-zamrud-sep-2026.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Laporan CSV berhasil diunduh');
});

/* ============ INIT ============ */
renderChart();
renderAll();
