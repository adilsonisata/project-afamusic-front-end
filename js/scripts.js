//função pra selecionar elemento
const selectElement = (s) => document.querySelector(s);
//abrir o menu com click
selectElement('.open').addEventListener('click', () => {
	selectElement('.nav-list').classList.add('active');
});
//fecha o menu com click
selectElement('.close').addEventListener('click', () => {
	selectElement('.nav-list').classList.remove('active');
});
