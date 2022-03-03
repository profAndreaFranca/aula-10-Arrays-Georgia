//array ou vetor ou matriz = Variável composta

//indices         0      1        2
var musicas = ["Queen","Hole","Kittie"]
console.log(musicas);

//para inserir novos elementos no final do array usamos push
musicas.push("Mitsky");
console.log(musicas);
//para remover o ultimo elemento usamos pop 

//musicas.pop();
//console.log(musicas);

//removendo elementos específicos

//musicas.splice(2,1);
//console.log(musicas);

//exibindo elementos específicos:
console.log(musicas[0])
console.log(musicas[1])
console.log(musicas[2])
console.log(musicas[3])
console.log(musicas[4])

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background("#1fcc92");


  drawSprites();
}

