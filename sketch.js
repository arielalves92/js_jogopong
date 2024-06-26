//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro/2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;


//variaveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150
let velocidadeYOponente;


let colidiu = false;
// PONTOS
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background ("black");
  mostrarBolinha ();
  mostrarRaquete (xRaquete,yRaquete);
  mostraRaqueteOponente(xRaqueteOponente,yRaqueteOponente);
  movimentaBolinha ();
  movimentaMinhaRaquete ();
  movimentaRaqueteOponente();
  verificaColizaoBorda ();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente) 
  marcaPonto();
  incluirPlacar();
}
  
function mostrarBolinha (){
    circle (xBolinha, yBolinha, diametro)}
function mostrarRaquete (x,y){
    rect (x, y, raqueteLargura, raqueteAltura)}
function movimentaBolinha (){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;}
function mostraRaqueteOponente() {
    rect(xRaqueteOponente, yRaqueteOponente, raqueteLargura, raqueteAltura);
}
function movimentaMinhaRaquete (){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10}
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10}
}
function movimentaRaqueteOponente() {
   if (keyIsDown(87)){
    yRaqueteOponente -= 10}
  if (keyIsDown(83)){
    yRaqueteOponente += 10}
}
function verificaColizaoBorda (){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1}
  if (yBolinha + raio > height || yBolinha - raio < 0){
  velocidadeYBolinha *= -1}
}
function colisaoRaqueteOponenteBiblioteca() {
    colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteLargura, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
}
function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteLargura, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
}  
function incluirPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}
function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
      ponto.play();
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
      ponto.play();
    }
}
function preload() {
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}





