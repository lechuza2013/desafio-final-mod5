export const state = {
    data: {
        //Los movimientos elegidos por el Jugador y la "IA"
        currentGame: {
            computerPlay: "",
            playerPlay: "",
        },
        score: {
            computer: 0,
            player: 0,
        },
        listeners:[]
    },
    init(){
        this.setState(JSON.stringify(this.getSate()));
        const localData = localStorage.getItem("saved-state");
        this.setState(JSON.parse(localData));
    },
    getSate(){
        return this.data;
    },
    setState(newState){
        this.data = newState;
        // for (const cb of this.listeners) {
        //     cb();
        // }
        console.log("El state, ha sido cambiado.");
        console.log("El nuevo state: ", this.data);
        localStorage.setItem("saved-state", JSON.stringify(newState));
    },
    whoWins(computerPlay:string, playerPlay:string){
        // Devuelven Booleanos
        const ganaTijeras = (playerPlay == "Tijeras" && computerPlay == "Papel");
        const ganaPapel = (playerPlay == "Papel" && computerPlay == "Piedra");
        const ganaPiedra = (playerPlay == "Piedra" && computerPlay == "Tijeras");
        
        console.log("Gana tijeras: ", ganaTijeras, ", Gana Papel: ", ganaPapel, ", Gana piedra: ",ganaPiedra);
        const victory = [ganaTijeras, ganaPapel, ganaPiedra].includes(true);
        if (computerPlay == playerPlay){
            return "Empate";
        }
        else{
            return victory;
        }
    },
    addVictory(winner){
        const cb = this.getSate();
        if (winner == "player"){
            cb.score.player++;
        }
        else if (winner = "computer"){
            cb.score.computer++;
        }
        this.setState(cb);
    }
}
