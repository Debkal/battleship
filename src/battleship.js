class Ship {
    constructor(length){
        this.length=length ;
        this.hit=0;
        this.ship= []
        this.sunk= false;
    }
    hits() {
        return this.hit++;
    }
    isSunk(length=this.length, hit=this.hit) {
        if(length===hit){
            return this.sunk=true;
        }
    }
}
class Gameboard {
    constructor(){
        this.grid = this.createBoard();
        this.horizontal=true;
    }
    createBoard(){
        const grid = Array(10).fill(null).map((_, i) => Array(10).fill(false))
        return grid;
    }
    insertShip(ship,x,y,grid=this.grid,horizontal=this.horizontal){
        if(horizontal===true){
            for(let i=0;i<ship.length;i++){
                grid[x+i][y]='S';
            }
        }
        else{
            for(let i=0;i<ship.length;i++){
                grid[x][y+i]='S';
            }
        }
        return;
    }
    isHorizontal(){
        return this.horizontal=true;
    }
    notHorizontal(){
        return this.horizontal=false;
    }
    receieveAttack(x,y){
        let result = this.grid[x][y];
        if(result=='S'){
            this.grid[x][y] = 'H';
            let temp = new Ship;
            return result, temp.hits();
        }
        if(result ==false){
            this.grid[x][y] = 'M';
            return result;
        }
    }
    #canPlace(ship){

    }
}

export {Ship,Gameboard};

