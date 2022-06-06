Nesse projeto eu criei um jogo onde o objetivo é percorrer a maior distância possível sem bater nos obstáculos. 

Depois de criar os elementos do HTML, foi feito o CSS junto com os keyframes que dá movimento ao player e o obstáculo. 

No JavaScript primeiro foi criado consts para capturar os elementos do HTML, depois eu fiz uma function “jump” que coloca e tira a classe “jump” da div do player que tem dentro dela o keyframe responsável por fazer o player pular. 

Depois foi criado um setInterval que fica registrando a posição dos elementos para poder verificar as condições (IF) e determinar se os elementos vão se colidir, junto outro IF foi criado que registra a distância percorrida e mostra no HTML.  

Para resetar o jogo eu coloquei um method chamado reload() para resetar a página sempre que clicar com o mouse na tela do jogo. 

E no final do script tem o addEventListenner que captura se alguma tecla foi pressionada, adicionando a function “jump”. 
