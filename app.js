
let url=`https://corsproxy.io/?https://www.fruityvice.com/api/fruit/${name}`;
let inp=document.querySelector("input");
let p=document.querySelector("p");

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
    let res=await axios.get(url + name);
    let data=res.data;
    
    //p.innerText="Fruit Name :"+ name + "\n"+"family : " + data.family + "\n" + "Genus : " + data.genus;

    p.innerText=`
    Name : ${name}
    Family : ${data.family}
    Genus : ${data.genus}
 
    Nutritions :
 
      Calories : ${data.nutritions.calories}
      sugar : ${data.nutritions.sugar}
      Fat : ${data.nutritions.fat}
      Carbohydrates : ${data.nutritions.carbohydrates}
      Proteins : ${data.nutritions.protein }
    `;
   
   console.log(res.data);
   
   
    
}catch(error){
    p.innerText="Fruit not found in our database.Please try another!";
   console.log("error:",error);
    return;
}
finally{
    sbtn.innerText="Search";
}

}




let urll="https://corsproxy.io/?https://www.fruityvice.com/api/fruit/all";

let rbtn=document.querySelector("#rbtn");
rbtn.addEventListener("click", function(){
     ranfruit();

});

async function ranfruit(){
    try{
        rbtn.innerText="Loading..."
    let res=await axios.get(urll);
    let ran=Math.floor(Math.random()*res.data.length);
    let fruits=res.data[ran];
    
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
    
    rbtn.innerText="Random Fruit";
    
}catch(error){
    console.log("error:",error);
}
}