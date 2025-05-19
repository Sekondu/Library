let cards=document.querySelectorAll(".box");
cards=Array.from(cards);
let body=document.querySelector("body");
let header=document.querySelector(".header");
let grid=document.querySelector(".grid");
let header_buttons=header.querySelectorAll("button");
let grid_buttons=grid.querySelectorAll("button");

let header_styles=header_buttons[0].getAttribute("style");
let buttons_pressed=false;
cards.forEach(card =>
{
card.addEventListener("click", ()=>
{
    if(buttons_pressed===false)
    {
        create_pop_up(card);
    }
    else{
         card.classList.toggle("chosen");
        if(card.classList.contains("chosen") && state_clicked && !change_state.includes(card))
        {
            change_state.push(card);
        }
        else if(card.classList.contains("chosen") && !deleted_Cards.includes(card) && remove_clicked)
        {
            deleted_Cards.push(card);
        }
        else if(!card.classList.contains("chosen")){
            let index=deleted_Cards.indexOf(card);
            let index1=change_state.indexOf(card);
            if(index!=-1)
            {
                deleted_Cards.splice(index,1);
            }
            else if(index1!=-1)
            {
                change_state.splice(index1,1);
            }
        }
    }
})
});
function create_pop_up(index){
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
   input_container.style="width:100%;height:100%;display:grid; grid-template-columns:1fr 1fr 1fr 1fr; grid-template-rows:1fr 1fr 1fr;font-size:20px;";
   cancel.style="grid-column:1/5; grid-row:1/1; justify-self:end;display:flex;align-items:start;justify-content:end;margin-right:20px;margin-top:10px;font-size:20px;background-color:transparent;cursor:pointer;";
   okay.style="grid-column:1/5; grid-row:5/5; justify-self:end;font-size:20px;margin-bottom:0px;width:60px;cursor:pointer;";
   label_title.style="grid-column:1/2; grid-row:2/3;text-align:center;";
   input_title.style="grid-column:2/3; grid-row:2/3;height:20px;border-radius:15px;margin-right:10px;";
   input_title.required=true;
   input_title.name="title";
   label_author.style="grid-column:1/2;grid-row:3/4;text-align:center;";
   input_author.style="grid-column:2/3;grid-row:3/4;height:20px;border-radius:15px;margin-right:10px;";
   input_author.required=true;
   input_author.name="author";
   label_pages.style="grid-column:3/4; grid-row:2/3;text-align:center;";
   input_pages.style="grid-column:4/5; grid-row:2/3;height:20px;border-radius:15px;margin-right:10px;";
   input_pages.name="pages";
   input_author.required=true;
   input_pages.type="number";
   input_read.append(label_read,read);
   label_read.style="font-size:30px;";
   read.style="aspect-ratio:1;height:20px;border:100%;margin-top:9px;margin-left:5px;";
   read.name="read";
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
   remove_pop_up(cancel);
   
})
input_container.addEventListener("submit",(event)=>
    {
        event.preventDefault();
        let formData=new FormData(event.target);
        let orig_title=index.querySelector(".Title");
        let orig_author=index.querySelector(".Author");
        let orig_pages=index.querySelector(".Pages");
        let orig_read=index.querySelector(".Read");
        orig_title.textContent=formData.get("title");
        orig_author.textContent=`Author: ${formData.get("author")}`;
        orig_pages.textContent=formData.get("pages");
        orig_read.textContent=formData.get("read") ? "Read Before":"Not Read Before";
        remove_pop_up(okay);
        
    })

}
function remove_pop_up(button)
{
    button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
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
   buttons_pressed=false;
}

/* header buttons functions */
let remove=document.querySelector(".remove");
let remove_pressed=0;
let remove_clicked=false;
let deleted_Cards=[];
let add=document.querySelector(".add");
let state=document.querySelector(".status");
let out=document.createElement("button");
out.classList.add("clicked");
out.textContent="cancel";  
remove.addEventListener("click", ()=>
{
    remove_clicked=true;
    remove_pressed+=1;
header.style="background-color: rgba(0, 0, 0, 0.1);";
remove.classList.add("clicked");
state.disabled=true;
add.disabled=true;
out.classList.add("out");
header.appendChild(out);
buttons_pressed=true;
if(remove_pressed===2)
    {
        reset(remove);
    }
});
out.addEventListener("click",()=>
{
    remove_Cancelled();
});
function reset(button)
{
    remove_clicked=false;
    remove_pressed=0;
     deleted_Cards.forEach(card =>{
    card.parentNode.removeChild(card);
        })
        header.style="background-color:black";
        remove.classList.remove("clicked");
        header.removeChild(out);
        state.disabled=false;
        add.disabled=false;
        deleted_Cards=[];
        buttons_pressed=false;
}
function remove_Cancelled()
{
    remove_pressed=0;
    state.disabled=false;
    add.disabled=false;
    deleted_Cards=[];
    buttons_pressed=false;
    header.style="background-color:black";
    remove.classList.remove("clicked");
    header.removeChild(out);
    cards.forEach(card =>
    {
        card.classList.remove("chosen");
    }
    )
}
/* for Add button */
let added_buttons=3;
let wrapper=document.querySelector(".wrapper");
let Add=document.querySelector(".add");
Add.addEventListener("click",()=>
{
    add_create_pop_up();
})
function add_create_pop_up()
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
   input_container.style="width:100%;height:100%;display:grid; grid-template-columns:1fr 1fr 1fr 1fr; grid-template-rows:1fr 1fr 1fr;font-size:20px;";
   cancel.style="grid-column:1/5; grid-row:1/1; justify-self:end;display:flex;align-items:start;justify-content:end;margin-right:20px;margin-top:10px;font-size:20px;background-color:transparent;cursor:pointer;";
   okay.style="grid-column:1/5; grid-row:5/5; justify-self:end;font-size:20px;margin-bottom:0px;width:60px;cursor:pointer;";
   label_title.style="grid-column:1/2; grid-row:2/3;text-align:center;";
   input_title.style="grid-column:2/3; grid-row:2/3;height:20px;border-radius:15px;margin-right:10px;";
   input_title.required=true;
   input_title.name="title";
   label_author.style="grid-column:1/2;grid-row:3/4;text-align:center;";
   input_author.style="grid-column:2/3;grid-row:3/4;height:20px;border-radius:15px;margin-right:10px;";
   input_author.required=true;
   input_author.name="author";
   label_pages.style="grid-column:3/4; grid-row:2/3;text-align:center;";
   input_pages.style="grid-column:4/5; grid-row:2/3;height:20px;border-radius:15px;margin-right:10px;";
   input_pages.name="pages";
   input_author.required=true;
   input_pages.type="number";
   input_read.append(label_read,read);
   label_read.style="font-size:30px;";
   read.style="aspect-ratio:1;height:20px;border:100%;margin-top:9px;margin-left:5px;";
   read.name="read";
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
   remove_pop_up(cancel);
   
})
input_container.addEventListener("submit",(event)=>
{
    event.preventDefault();
    added_buttons++;
    let formdata=new FormData(event.target);
    let container=document.createElement("button");
    container.classList.add("box",`${added_buttons}`,"custom_hover");
    let p1=document.createElement("p");
    p1.className="Title";
    p1.textContent=formdata.get("title");
    let p2=document.createElement("p");
    p2.className="Author";
    p2.textContent=`Author: ${formdata.get("author")}`;
    let p3=document.createElement("p");
    p3.className="Pages";
    p3.textContent=formdata.get("pages");
    let p4=document.createElement("p");
    p4.className="Read";
    p4.textContent=formdata.get("read")?"Read Before":"Not Read Before";
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(p3);
    container.appendChild(p4);
    grid.appendChild(container);
    cards.push(container);
    container.addEventListener("click",()=>
    {
        if(buttons_pressed===false)
    {
        create_pop_up(container);
    }
    else{
         container.classList.toggle("chosen");
        if(container.classList.contains("chosen") && state_clicked && !change_state.includes(container))
        {
            change_state.push(container);
        }
        else if(container.classList.contains("chosen") && !deleted_Cards.includes(container) && remove_clicked)
        {
            deleted_Cards.push(container);
        }
        else if(!container.classList.contains("chosen")){
            let index=deleted_Cards.indexOf(container);
            let index1=change_state.indexOf(container);
            if(index!=-1)
            {
                deleted_Cards.splice(index,1);
            }
            else if(index1!=-1)
            {
                change_state.splice(index1,1);
            }
        }
    }
    })
    body.removeChild(div);
    header.style="opacity:1";
   header_buttons.forEach(button =>{
    button.disabled=false;
    button.classList.add("custom_hover");
   });
   grid.style="opacity:1";
   grid_buttons.forEach(button =>{
    button.disabled=false;
    button.classList.add("custom_hover");
   });
})

}
function add_remove_pop_up()
{
    input_container.parentNode.removeChild(div);
}
{

}
let change_state=[];
let state_pressed=0;
let state_clicked=false;
state.addEventListener("click",()=>
{
    state_clicked=true;
    state_pressed+=1;
state.classList.add("clicked");
header.style="background-color: rgba(0, 0, 0, 0.1);";
buttons_pressed=true;
remove.disabled=true;
add.disabled=true;
if(state_pressed===2)
{
    state_pressed=0;
    change_state.forEach(card =>
    {
        let current_state=card.querySelector(".Read");
        current_state.textContent=current_state.textContent==="Read Before"?"Not Read Before":"Read Before";
    }
    )
    status_reset();
}
}
)
function status_reset()
{
    state_clicked=false;
    state_pressed=0;
    header.style="background-color:black";
    state.classList.remove("clicked");
    remove.disabled=false;
    add.disabled=false;
    buttons_pressed=false;
    cards.forEach(card => card.classList.remove("chosen"));
    change_state.forEach(card =>
    {
        let index=change_state.indexOf(card);
        change_state.splice(index,1);
    }
    )
    change_state=[];
}