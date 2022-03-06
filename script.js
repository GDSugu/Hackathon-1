let outer = document.createElement("div")
outer.className="outer"
let container = document.createElement("div")
container.className="container"
let row = document.createElement("div")
row.className="row"
let heading = document.createElement("h1");
heading.innerHTML= " POKEMON CHARACTERISTICS"
container.append(heading,row);
outer.append(container);
document.body.append(outer)

async function pokemon(){

    for(let i=0;i<50;i++){

        let column = document.createElement("div")
        column.className = "col-md-12"
        column.setAttribute("id","name")
        let boxpart= document.createElement("div")
        boxpart.className="boxpart text-center"

        let title = document.createElement("div")
        title.className="title"
        
        let pokemonlist = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=50&offset=20`);
        let pokemonlist1 = await pokemonlist.json();
        let pokemonname = pokemonlist1.results[i].name
       
        let pokemonability = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
        let pokemonability1 = await pokemonability.json();
        let pokability1 = pokemonability1.abilities.map(ele => ele.ability.name)
        
        let pokemonmoves = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
        let pokemonmoves1 = await pokemonmoves.json();
    
        let pokmoves = pokemonmoves1.moves.map(ele => ele.move.name)
        let pokemonweight = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
        let pokemonweight1 = await pokemonweight.json();
        let pokweight =pokemonweight1.weight
        
        let name = document.createElement("h4")
        name.className="name"
        name.innerHTML=pokemonname

        let ability1 = document.createElement("div")
        ability1.className="ability text-center"
        let description1 = document.createElement("li")
        description1.innerHTML= `Ability:${pokability1}`;

        let moves = document.createElement("div")
        moves.className="moves"
        moves.innerHTML="Moves"
        let description2 = document.createElement("div")
        description2.className="description2"
        description2.innerHTML= `${pokmoves}`

        let weight = document.createElement("div")
        weight.className="weight text-center"
        let description3 = document.createElement("div")
        description3.innerHTML=`Weight:${pokweight}`

        moves.append(description2)
        weight.append(description3)
        ability1.append(description1)
        title.append(name)
        boxpart.append(title,ability1,weight,moves)
        column.append(boxpart)
        row.append(column);
        
    }  
}
pokemon()









