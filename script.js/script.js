//creo mi clase
class Player {
  constructor(nombre, telefono, email, password){

    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
    this.password = password;
}
};

//Creo objetos para guardar en array
const player1 = new Player("Matias", 1233455667, "matias@player.com", "Contraseña1A");
const player2 = new Player("Yanina", 1145654347, "yanina@player.com", "Contraseña1A");
const player3 = new Player("Romina", 1198776655, "romina@player.com", "Contraseña1A");

const players = [player1,player2,player3];

localStorage.setItem("players", JSON.stringify(players));
console.log(JSON.parse(localStorage.getItem("players")));

array2[0].registrarse();