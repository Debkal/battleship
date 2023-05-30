class Ship {
    constructor(length){
        this.length=length ;
        this.hit= 0;
        this.sunk= false;
    }
    hits() {
        return this.hit++;
    }
    isSunk(length=this.length, hit=this.hit,sunk=this.sunk) {
        if(length===hit){
            return this.sunk=true;
        }
    }
}
class Gameboard {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.grid = this.createBoard();
        this.horizontal=true;
    }
    createBoard(){
        const grid = Array(10).fill(null).map((_, i) => Array(10).fill(false))
        return grid;
    }
    insertShip(ship,grid=this.grid,x=this.x,y=this.y,horizontal=this.horizontal){
        if(horizontal===true){
            for(let i=x;i<x+ship.length;i++){
                grid[x][y+i]='S';
            }
        }
        else if(horizontal===false){
            for(let i=y;i<y+ship.length;i++){
                grid[x+i][y]='S';
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
    #canPlace(ship){

    }
}

export {Ship,Gameboard};

