class Ship {
    constructor(type,length,x,y){
        this.type =type;
        this.length=length ;
        this.hit=0;
        this.sunk= false;
        this.x=x ;
        this.y=y ;
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
        this.ships= [];
        this.misses= [];
    }
    createBoard(){
        const grid = Array(10).fill(null).map((_, i) => Array(10).fill(false))
        return grid;
    }
    insertShip(ship,grid=this.grid,horizontal=this.horizontal){
        if(horizontal===true){
            for(let i=0;i<ship.length;i++){
                grid[ship.x+i][ship.y]=ship.type;
                
            }
        }
        else{
            for(let i=0;i<ship.length;i++){
                grid[ship.x][ship.y+i]=ship.type;
            }
        }
        this.ships.push(ship);
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
        if(result ==false){
            this.grid[x][y] = 'M';
            this.misses.push([{x:x,y:y}]);
        }
        else{
            this.grid[x][y] = 'H';
            let  temp = new Ship();
            return this.ships[0].hit++;
        }
        return;
    }
    #canPlace(ship){

    }
}

export {Ship,Gameboard};

