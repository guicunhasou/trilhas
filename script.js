const textoI = document.getElementById('textoI');
const textoF = document.getElementById('textoF');
const bolaI = document.getElementById('bolaI');
const bolaF = document.getElementById('bolaF');
const caminhoI = document.getElementById('caminhoI');
const caminhoF = document.getElementById('caminhoF');
const fundo = document.getElementById('fundo');


//nivel
bolaI.addEventListener('mouseover', () => {
  textoI.style.display = 'none';
  caminhoI.style.display = 'block';
  caminhoF.style.display = 'block';
  bolaF.style.display = 'block';
  fundo.style.display = 'block';
});

//recomecar
fundo.addEventListener('mouseover', () => {
  textoI.style.display = 'block';
  caminhoI.style.display = 'none';
  caminhoF.style.display = 'none';
  bolaF.style.display = 'none';
  fundo.style.display = 'none';
  textoF.style.display = 'none';
  bolaI.style.display = 'block';
});

//terminar
bolaF.addEventListener('mouseover', () => {
  textoF.style.display = 'block';
  caminhoI.style.display = 'none';
  caminhoF.style.display = 'none';
  bolaI.style.display = 'none';
});