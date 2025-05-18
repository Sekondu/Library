const card=document.querySelector(".one");
let body=document.querySelector("body");
let header=document.querySelector(".header");
let grid=document.querySelector(".grid");
let header_buttons=header.querySelectorAll("button");
let grid_buttons=grid.querySelectorAll("button");

let header_styles=header_buttons[0].getAttribute("style");
card.addEventListener("click", ()=>
{
    let cancel=document.createElement("button");
    let okay=document.createElement("button");

   let div=document.createElement("div");
   div.style="position: absolute;width:500px;height:300px;background-color:lightgrey;top:50%;left:35%;opacity:1;border-radius:15px;z-index:10;";
   let input_container=document.createElement("form");
   input_container.className="input_container";

   let input_title=document.createElement("input");
   let input_author=document.createElement("input");
   let input_pages=document.createElement("input");
   let read=document.createElement("input");
   let input_read=document.createElement("div");

   input_title.id="title";
   input_author.id="author";
   input_pages.id="pages";
   input_read.id="read";

   let label_title=document.createElement("label");
   let label_author=document.createElement("label");
   let label_pages=document.createElement("label");
   let label_read=document.createElement("label");
   
   label_title.htmlFor="title";
   label_title.textContent="title";
   label_author.htmlFor="author";
   label_author.textContent="author";
   label_pages.htmlFor="pages";
   label_pages.textContent="pages";
   label_read.htmlFor="read";
   label_read.textContent="read";

   input_container.append(label_title,input_title);
   input_container.append(label_author,input_author);
   input_container.append(label_pages,input_pages);
   input_container.append(input_read);

   /* input container styling */
   input_container.style="width:100%;height:100%;display:grid; grid-template-columns:1fr 1fr 1fr 1fr; grid-template-rows:1fr 1fr 1fr;";
   cancel.style="grid-column:1/5; grid-row:1/1; justify-self:end;";
   okay.style="grid-column:1/5; grid-row:5/5; justify-self:end;";
   label_title.style="grid-column:1/2; grid-row:2/3;text-align:center;";
   input_title.style="grid-column:2/3; grid-row:2/3;height:20px;border-radius:15px;margin-right:10px;";
   label_author.style="grid-column:1/2;grid-row:3/4;text-align:center;";
   input_author.style="grid-column:2/3;grid-row:3/4;height:20px;border-radius:15px;margin-right:10px;";
   label_pages.style="grid-column:3/4; grid-row:2/3;text-align:center;";
   input_pages.style="grid-column:4/5; grid-row:2/3;height:20px;border-radius:15px;margin-right:10px;";
   input_read.append(label_read,read);
   label_read.style="font-size:30px;";
   read.style="aspect-ratio:1;height:20px;border:100%;margin-top:9px;margin-left:5px;";
   input_read.style="grid-column:4/5; grid-row:3/4;height:20px;border-radius:15px;margin-right:10px;display:flex;justify-content:center;";
   read.type="checkbox";
   okay.type="submit";
   okay.textContent="Ok";
   cancel.textContent="X";

    input_container.append(okay);
   input_container.append(cancel);
   div.append(input_container);
   
   header.style="opacity:0.1";
   header_buttons.forEach(button =>{
    button.disabled=true;
    button.classList.remove("custom_hover");
   });
   grid.style="opacity:0.1";
   grid_buttons.forEach(button =>{
    button.disabled=true;
    button.classList.remove("custom_hover");
   });
   body.appendChild(div);
   cancel.addEventListener("click", () =>
{
    cancel.parentNode.parentNode.parentNode.removeChild(cancel.parentNode.parentNode);
    header.style="opacity:1";
    grid.style="opacity:1";

    header_buttons.forEach(button =>{
    button.disabled=false;
    button.classList.add("custom_hover");
   });
   grid_buttons.forEach(button =>{
    button.disabled=false;
    button.classList.add("custom_hover");
   });

})
})