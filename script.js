//API KEY: <SPARA ER API NYCKEL HÄR >3eeb66ed416df0b1dfe08a0716115334

let apiTrendRef="https://api.themoviedb.org/3/trending/all/day?api_key=3eeb66ed416df0b1dfe08a0716115334";
let apiPopMoveiRef="https://api.themoviedb.org/3/movie/popular?api_key=3eeb66ed416df0b1dfe08a0716115334&language=en-US&page=1";
let heroRef= document.querySelector(".hero");

let containerTrendRef= document.querySelector(".trend");
let containerPopMoveiRef= document.querySelector(".movie-container");

//-----------hämta trendiga filmer ut från API
fetch(apiTrendRef)
.then(response=>response.json())
.then(data => {
    //kontrolera om det finns något i results array 
    if (data.results.length === 0) {//tomt

        console.log("det finns inget i object");

    }else{//inte tomt
        //loop för att loopa igenom Json filen
        for (let i = 0; i < data.results.length; i++) {
            //skriver till console varje title som finns i objekt
           //console.log(data.results[i].title); 
            //console.log(i); 
            containerTrendRef.innerHTML += "<article class='movie-card'><div class='overlay'><h4>"+data.results[i].title+"</h4></div><div class='movie-pic'><img src='https://image.tmdb.org/t/p/orginal"+ data.results[i].poster_path+"'></div></article> ";
        }
        // <article class='movie-card'>
        //     <div class='overlay'>
        //         <h4>Peppermint</h4>
        //     </div>
        //     <div class='movie-pic'>
        //         <img src="img/peppermint.png">
        //     </div>
        //  </article>
    }
    

})
.catch(error => console.log("Detta är fel"+ error));// fånga felet



//----------hämta populära filmer ut från API
fetch(apiPopMoveiRef)
.then(response=>response.json())
.then(data=> {
    if (data.results.length === 0) {
        console.log("det finns inget i object");
    }else{
       //HERO
    //    <article>
    //         <h3>Filmtips: Batman</h3>
    //         <h1>The Dark Knight-triologin</h1>
    //         <p>Se hela Christopher Nolans succétrilogi om Batman (Christian Bale) som får tampas med figurer  som Jokern (Heath Ledger), Catwoman (Anne Hathaway) och Bane (Tom Hardy).</p>
    //     </article>
        heroRef.style.backgroundImage="url('https://image.tmdb.org/t/p/orginal" +data.results[6].backdrop_path +"')";
        heroRef.innerHTML
        +="<article><h3>Filmtips:"+ 
        data.results[3].title +"</h3><h1>"
        +data.results[6].title+"</h1><p>"+data.results[6].title+
        "</p></article>";
       
        for (let i = 0; i < data.results.length; i++) {
            containerPopMoveiRef.innerHTML
            +="<article class='movie-card'><div class='overlay'><h4>"
            +data.results[i].title+"</h4></div><div class='movie-pic'><img src='https://image.tmdb.org/t/p/orginal"+ 
            data.results[i].poster_path+"'></div></article>";
        }
            // <article class='movie-card'>
            //     <div class='overlay'>
            //         <h4>Peppermint</h4>
            //     </div>
            //     <div class='movie-pic'>
            //         <img src="img/peppermint.png">
            //     </div>
            // </article>
    }
})
.catch(error => console.log("Detta är fel"+ error));// fånga felet