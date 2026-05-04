
//let url=`https://corsproxy.io/?https://www.fruityvice.com/api/fruit/${name}`;
let inp=document.querySelector("input");
let p=document.querySelector("p");
let allfruits=[];

let sbtn=document.querySelector("#sbtn");
sbtn.addEventListener("click", async function(){
    let name=inp.value;
     
    
     let fruits= await getfruit(name);
     inp.value="";

});

async function getfruit(name){
    if(inp.value===""){
        p.innerText="please enter the fruit";
    
        return;
    }
     
    
    try{
        sbtn.innerText="Loading..."
    let res=await axios.get( "fruits.json");
     allfruits=res.data;  
    let fruit=allfruits.find(f=>f.name.toLowerCase().includes(name.toLowerCase()));

    //p.innerText="Fruit Name :"+ name + "\n"+"family : " + data.family + "\n" + "Genus : " + data.genus;

    p.innerText=`
    Name : ${fruit.name}
    Family : ${fruit.family}
    Genus : ${fruit.genus}
 
    Nutritions :
 
      Calories : ${fruit.nutritions?.calories|| "N/A"}
      sugar : ${fruit.nutritions?.sugar|| "N/A"}
      Fat : ${fruit.nutritions?.fat|| "N/A"}
      Carbohydrates : ${fruit.nutritions?.carbohydrates|| "N/A"}
      Proteins : ${fruit.nutritions?.protein || "N/A"}
    `;
   
   console.log(res.data);
   
   
    
}catch(error){
    p.innerText="Invalid Fruit Name ";
   console.log("error:",error);
    return;
}
finally{
    sbtn.innerText="Search";
}

}




//let urll="https://corsproxy.io/?https://www.fruityvice.com/api/fruit/all";
//let urll="https://www.fruityvice.com/api/fruit/all";
//let urll = "https://api.allorigins.win/raw?url=https://www.fruityvice.com/api/fruit/all";

let rbtn=document.querySelector("#rbtn");
rbtn.addEventListener("click", function(){
     randomfruit();

});

async function randomfruit(){
    try{
        rbtn.innerText="Loading..."
    let res=await axios.get("fruits.json");

    let ran=Math.floor(Math.random()*res.data.length);
    let fruits=res.data[ran];

    console.log(res.data);
    
    let p=document.querySelector("p");
   // p.innerText="Fruit Name : " + fruits +"\n"+ "Family : "+ family  + "\n"+ "Genus : " + genus + "\n" + "Nutritions : " + nut; 

   p.innerText=`
   Name : ${fruits.name}
   Family : ${fruits.family}
   Genus : ${fruits.genus}

   Nutritions :

     Calories : ${fruits.nutritions.calories}
     sugar : ${fruits.nutritions.sugar}
     Fat : ${fruits.nutritions.fat}
     Carbohydrates : ${fruits.nutritions.carbohydrates}
     Proteins : ${fruits.nutritions.protein }
   `;
    
    
    
}catch(error){
    console.log("error:",error);
    p.innerText="Error! Try again";
}finally{
    rbtn.innerText="Random Fruit";
}
}
