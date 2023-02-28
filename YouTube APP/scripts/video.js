
//document.querySelector("body").addEventListener("load",append);


import {navbar} from "./component/navbar.js"

document.getElementById("navbar").innerHTML=navbar();

window.onload=append();


function append(){

    console.log("hello");

let {snippet, videoId}=JSON.parse(localStorage.getItem("clicked_video")) || {};

// <iframe width="560" height="315" src="https://www.youtube.com/embed/2v8jwItpwJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

let iframe=document.createElement("iframe");
iframe.setAttribute("src",`https://www.youtube.com/embed/${videoId}?autoplay=1`);
iframe.setAttribute("width","100%");
iframe.setAttribute("height","500px");
iframe.setAttribute("allowfullscreen",true);
iframe.setAttribute("allow","accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture");

let p_title=document.createElement("p");
p_title.setAttribute("id","channel_title");
p_title.innerText=snippet.title;


let p_channel_name=document.createElement("p");
p_channel_name.setAttribute("id","channel_name");
p_channel_name.innerText=snippet.channelTitle;

document.getElementById("container").append(iframe,p_title,p_channel_name);


}