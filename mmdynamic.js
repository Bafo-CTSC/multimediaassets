load()

// Get the modal
function modals(){

  const beebotmodal = document.getElementById("beebotmodal");
  const oculus1modal = document.getElementById("oculus1modal");
  const oculus2modal = document.getElementById('oculus2modal');
  const printer3d1modal = document.getElementById('printer3d1modal');
  const printer3d2modal = document.getElementById('printer3d2modal');
  const cora1modal = document.getElementById('cora1modal');
  const cora2modal = document.getElementById('cora2modal');
  const ev31modal = document.getElementById('ev31modal');
  const ev32modal = document.getElementById('ev32modal');
  const ev33modal = document.getElementById('ev33modal');
  const ev34modal = document.getElementById('ev34modal');
  const mmkeymodal = document.getElementById('mmkeymodal');
  const mmusemodal = document.getElementById('mmusemodal');
  const mmworkstatmodal = document.getElementById('mmwrkstatmodal');

}


// Get the button that opens the modal
function modalbuttons(){

  const beebotbtn = document.getElementById("beebots").addEventListener('click', openBeebotModal);
  const oculus1btn = document.getElementById("oculus1").addEventListener('click', openOculus1Modal);
  const oculus2btn = document.getElementById("oculus2").addEventListener('click', openOculus2Modal);
  const printer3d1btn = document.getElementById("3drinter1").addEventListener('click', openprinter3d1Modal);
  const printer3d2btn = document.getElementById("3dprinter2").addEventListener('click', openprinter3d2Modal);
  const cora1btn = document.getElementById('codeontheroad1').addEventListener('click', opencora1Modal);
  const cora2btn = document.getElementById('codeontheroad2').addEventListener('click', opencora2Modal);
  const ev31btn = document.getElementById('EV31').addEventListener('click', openev31Modal);
  const ev32btn = document.getElementById('EV32').addEventListener('click', openev32Modal);
  const ev33btn = document.getElementById('EV33').addEventListener('click', openev33Modal);
  const ev34btn = document.getElementById('EV34').addEventListener('click', openev34Modal);
  const mmkeybtn = document.getElementById('mmkey').addEventListener('click', openmmkeyModal);
  const mmusebtn = document.getElementById('roomuse').addEventListener('click', openuseModal);
}

// Get the cancel buttons
function cancelmodalbuttons(){

  const cancelbeebotbtn = document.getElementById('cancelbeebot').addEventListener('click', cancelForm);
  const canceloculus1btn = document.getElementById('canceloculus1').addEventListener('click', cancelForm);
  const canceloculus2btn = document.getElementById('canceloculus2').addEventListener('click', cancelForm);
  const cancel3d1btn = document.getElementById('cancel3d1').addEventListener('click', cancelForm);
  const cancel3d2btn = document.getElementById('cancel3d2').addEventListener('click', cancelForm);
  const cancelcora1btn = document.getElementById('cancelcora1').addEventListener('click', cancelForm);
  const cancelcora2btn = document.getElementById('cancelcora2').addEventListener('click', cancelForm);
  const cancelev31btn = document.getElementById('cancelev31').addEventListener('click', cancelForm);
  const cancelev32btn = document.getElementById('cancelev32').addEventListener('click', cancelForm);
  const cancelev33btn = document.getElementById('cancelev33').addEventListener('click', cancelForm);
  const cancelev34btn = document.getElementById('cancelev34').addEventListener('click', cancelForm);
  const cancelmmkeybtn = document.getElementById('cancelmmkey').addEventListener('click', cancelForm);
  const cancelmmusebtn = document.getElementById('canceluse').addEventListener('click', cancelForm);
}

function load(){
  modalbuttons()
  cancelmodalbuttons()
}

// Forms
function cancelForm() {

  oculus1modal.style.display = 'none';
  beebotmodal.style.display = 'none';
  oculus2modal.style.display = 'none';
  printer3d1modal.style.display = 'none';
  printer3d2modal.style.display = 'none';
  cora1modal.style.display = 'none';
  cora2modal.style.display = 'none';
  ev31modal.style.display = 'none';
  ev32modal.style.display = 'none';
  ev33modal.style.display = 'none';
  ev34modal.style.display = 'none';
  mmkeymodal.style.display = 'none';
  mmusemodal.style.display = 'none'; 
}

function openOculus1Modal() {
  oculus1modal.style.display = 'block';
}

function openOculus2Modal() {
  oculus2modal.style.display = 'block';

}

function openBeebotModal() {
  beebotmodal.style.display = 'block';
}

function openprinter3d1Modal() {
  printer3d1modal.style.display = 'block';
}

function openprinter3d2Modal() {
  printer3d2modal.style.display = 'block';
}

function opencora1Modal() {
  cora1modal.style.display = 'block';
}

function opencora2Modal() {
  cora2modal.style.display = 'block';
}

function openev31Modal() {
  ev31modal.style.display = 'block';
}

function openev32Modal() {
  ev32modal.style.display = 'block';
}

function openev33Modal() {
  ev33modal.style.display = 'block';
}

function openev34Modal() {
  ev34modal.style.display = 'block';
}

function openmmkeyModal(){
  mmkeymodal.style.display = 'block';
}

function openuseModal(){
  mmusemodal.style.display = 'block';
}