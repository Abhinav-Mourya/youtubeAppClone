// let search_btn=document.getElementById("search_btn");
// search_btn.addEventListener("click",search_videos());


import {navbar} from "./component/navbar.js"

document.getElementById("navbar").innerHTML=navbar();


document.getElementById("search_btn").addEventListener("click",() =>{


search_videos();

})

const search_videos= async() => {


try{

    const API="AIzaSyDD4Hp4iJsSF2T9K7BH7BnAEhPkDU835CQ";
    let search_name=document.getElementById("search_box").value;

let ans= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search_name}&key=${API}`);


let data=await ans.json();
let actual_data=data.items;
console.log(actual_data);
append(actual_data);

}

catch(error){

    console.log(error);
}

};


const append=(arr) =>{

document.getElementById("container").innerHTML=null;

let sorting_div=document.getElementById("sorting_div");
sorting_div.style.display="block";

let sort_by=document.getElementById("sort_by");
sort_by.style.display="block";

arr.forEach(({snippet, id:{videoId}}) =>{

    let div_tag=document.createElement("div");
  
    let image_tag=document.createElement("img");
    image_tag.setAttribute("src",snippet.thumbnails.high.url);
    
    let p_title=document.createElement("p");
    p_title.setAttribute("id","channel_title");
    p_title.innerText=snippet.title;
    
    let p_channel_name=document.createElement("p");
    p_channel_name.setAttribute("id","channel_name");
    p_channel_name.innerText=snippet.channelTitle;
    
    div_tag.append(image_tag,p_title,p_channel_name);
    div_tag.addEventListener("click",() =>{

      
       let data={

        snippet:snippet,
        videoId:videoId
       }

       localStorage.setItem("clicked_video",JSON.stringify(data));

      window.location.href="video.html";

       });
    
    document.getElementById("container").append(div_tag);


})



}


document.querySelector("#alphabetically").addEventListener("click",sorting_alphabet);

async function sorting_alphabet(){

try{

    const API="AIzaSyDD4Hp4iJsSF2T9K7BH7BnAEhPkDU835CQ";
    let search_name=document.getElementById("search_box").value;

    let ans= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=title&maxResults=20&q=${search_name}&key=${API}`);


let data=await ans.json();
console.log(data);
let actual_data=data.items;
append(actual_data);

}

catch(error){
    
    console.log(error);
}

}





document.querySelector("#views").addEventListener("click",sorting_views);

async function sorting_views(){

try{

    const API="AIzaSyDD4Hp4iJsSF2T9K7BH7BnAEhPkDU835CQ";
    let search_name=document.getElementById("search_box").value;

    let ans= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&maxResults=20&q=${search_name}&key=${API}`);


let data=await ans.json();
console.log(data);
let actual_data=data.items;
append(actual_data);

}

catch(error){
    
    console.log(error);
}

}




document.querySelector("#Popularity").addEventListener("click",sorting_popularity);

async function sorting_popularity(){

try{

    const API="AIzaSyDD4Hp4iJsSF2T9K7BH7BnAEhPkDU835CQ";
    let search_name=document.getElementById("search_box").value;

    let ans= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&maxResults=20&q=${search_name}&key=${API}`);


let data=await ans.json();
console.log(data);
let actual_data=data.items;
append(actual_data);

}

catch(error){
    
    console.log(error);
}

}



document.getElementById("signin_btn").addEventListener("click",function(){


    window.location.href="authentication.html";
})




let signin_btn=document.getElementById("signin_btn");

let object=JSON.parse(localStorage.getItem("user_data"));
console.log(object);

if(object==null)
{
    signin_btn.innerText="SIGN IN";
}
else
{
signin_btn.innerText=object.username;
}

localStorage.removeItem("user_data");

