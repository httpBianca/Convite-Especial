const btt = document.querySelector('button');
const aceitar = document.querySelector('.aceitar');

btt.addEventListener('click', function convite(){
    aceitar.innerHTML = 
    `Não fez mais do que sua obrigação ao aceitar, agora se liga nas informações!! <br> <b>Lugar:</b> Campo de Futebol (IFCE) <br> <b>Horário:</b> Apartir das <b>16:00 horas </b>; <br>
    <img src="a_turma_toda.png">`
});
