import emtorno from './model/emtorno.js';

for (const empreend of emtorno) {
  var puxandoCentralizFig = document.querySelector('.centralizacao_3fig');
  var areazita  = createAreaPEmTornServ(empreend);
  puxandoCentralizFig.insertAdjacentHTML('beforeend', areazita);
}

function createAreaPEmTornServ(empreend){
  return `<div class="zoom">
            <div class="partezinha">
              <img src="${empreend.image}">
              <div class="text-item">
                <h2>${empreend.oque}</h2>
                <h3>${empreend.descri}</h3>
              </div>
            </div>
          </div>`;
}
