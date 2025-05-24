class Library{

    constructor(){
    this.cards=document.querySelectorAll(".box");
    this.cards=Array.from(this.cards);
    this.body=document.querySelector("body");
    this.header=document.querySelector(".header");
    this.grid=document.querySelector(".grid");
    this.header_buttons=this.header.querySelectorAll("button");
    this.grid_buttons=this.grid.querySelectorAll("button");
    this.buttons_pressed=false;
    /* header buttons functions */
    this.remove=document.querySelector(".remove");
    this.remove_pressed=0;
    this.remove_clicked=false;
    this.deleted_Cards=[];
    this.add=document.querySelector(".add");
    this.state=document.querySelector(".status");
    this.out=document.createElement("button");
    this.out.classList.add("clicked");
    this.out.textContent="cancel";
    /* for Add button */
    this.added_buttons=3;
    this.wrapper=document.querySelector(".wrapper");
    this.Add=document.querySelector(".add");
    /* for read_Status button */
    this.change_state=[];
    this.state_pressed=0;
    this.state_clicked=false;

        this.cards.forEach(card =>
        {
            card.addEventListener("click", ()=>
            {
            if(this.buttons_pressed===false)
                {
                    this.create_pop_up(card);
                }
            else{
                card.classList.toggle("chosen");
                if(card.classList.contains("chosen") && this.state_clicked && !this.change_state.includes(card))
                    {
                    this.change_state.push(card);
                    }
                else if(card.classList.contains("chosen") && !this.deleted_Cards.includes(card) && this.remove_clicked)
                    {
                    this.deleted_Cards.push(card);
                    }
                else if(!card.classList.contains("chosen")){
                    index=deleted_Cards.indexOf(card);
                    index1=change_state.indexOf(card);
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
    }
    create_pop_up(index){
        this.cancel=document.createElement("button");
        this.okay=document.createElement("button");

        this.div=document.createElement("div");
        this.div.style="position: absolute;width:500px;height:300px;background-color:lightgrey;top:50%;left:35%;opacity:1;border-radius:15px;z-index:10;";
        this.input_container=document.createElement("form");
        this.input_container.className="input_container";

        this.input_title=document.createElement("input");
        this.input_author=document.createElement("input");
        this.input_pages=document.createElement("input");
        this.read=document.createElement("input");
        this.input_read=document.createElement("div");

        this.input_title.id="title";
        this.input_author.id="author";
        this.input_pages.id="pages";
        this.input_read.id="read";

        this.label_title=document.createElement("label");
        this.label_author=document.createElement("label");
        this.label_pages=document.createElement("label");
        this.label_read=document.createElement("label");
        
        this.label_title.htmlFor="title";
        this.label_title.textContent="title";
        this.label_author.htmlFor="author";
        this.label_author.textContent="author";
        this.label_pages.htmlFor="pages";
        this.label_pages.textContent="pages";
        this.label_read.htmlFor="read";
        this.label_read.textContent="read";

        this.input_container.append(this.label_title,this.input_title);
        this.input_container.append(this.label_author,this.input_author);
        this.input_container.append(this.label_pages,this.input_pages);
        this.input_container.append(this.input_read);

        /* input container styling */
        this.input_container.style="width:100%;height:100%;display:grid; grid-template-columns:1fr 1fr 1fr 1fr; grid-template-rows:1fr 1fr 1fr;font-size:20px;";
        this.cancel.style="grid-column:1/5; grid-row:1/1; justify-self:end;display:flex;align-items:start;justify-content:end;margin-right:20px;margin-top:10px;font-size:20px;background-color:transparent;cursor:pointer;";
        this.okay.style="grid-column:1/5; grid-row:5/5; justify-self:end;font-size:20px;margin-bottom:0px;width:60px;cursor:pointer;";
        this.label_title.style="grid-column:1/2; grid-row:2/3;text-align:center;";
        this.input_title.style="grid-column:2/3; grid-row:2/3;height:20px;border-radius:15px;margin-right:10px;";
        this.input_title.required=true;
        this.input_title.name="title";
        this.label_author.style="grid-column:1/2;grid-row:3/4;text-align:center;";
        this.input_author.style="grid-column:2/3;grid-row:3/4;height:20px;border-radius:15px;margin-right:10px;";
        this.input_author.required=true;
        this.input_author.name="author";
        this.label_pages.style="grid-column:3/4; grid-row:2/3;text-align:center;";
        this.input_pages.style="grid-column:4/5; grid-row:2/3;height:20px;border-radius:15px;margin-right:10px;";
        this.input_pages.name="pages";
        this.input_author.required=true;
        this.input_pages.type="number";
        this.input_read.append(this.label_read,this.read);
        this.label_read.style="font-size:30px;";
        this.read.style="aspect-ratio:1;height:20px;border:100%;margin-top:9px;margin-left:5px;";
        this.read.name="read";
        this.input_read.style="grid-column:4/5; grid-row:3/4;height:20px;border-radius:15px;margin-right:10px;display:flex;justify-content:center;";
        this.read.type="checkbox";
        this.okay.type="submit";
        this.okay.textContent="Ok";
        this.cancel.textContent="X";

        this.input_container.append(this.okay);
        this.input_container.append(this.cancel);
        this.div.append(this.input_container);
   
        this.header.style="opacity:0.1";
        this.header_buttons.forEach(button =>{
            button.disabled=true;
            button.classList.remove("custom_hover");
        });
        this.grid.style="opacity:0.1";
        this.grid_buttons.forEach(button =>{
            button.disabled=true;
            button.classList.remove("custom_hover");
        });
        this.body.appendChild(this.div);
        this.cancel.addEventListener("click", () =>
        {
        this.remove_pop_up(this.cancel);
        
        })
        this.input_container.addEventListener("submit",(event)=>
        {
            event.preventDefault();
            this.formData=new FormData(event.target);
            this.orig_title=index.querySelector(".Title");
            this.orig_author=index.querySelector(".Author");
            this.orig_pages=index.querySelector(".Pages");
            this.orig_read=index.querySelector(".Read");
            this.orig_title.textContent=this.formData.get("title");
            this.orig_author.textContent=`Author: ${this.formData.get("author")}`;
            this.orig_pages.textContent=this.formData.get("pages");
            this.orig_read.textContent=this.formData.get("read") ? "Read Before":"Not Read Before";
            this.remove_pop_up(this.okay);
            
        })

    }
    remove_pop_up(button)
    {
        button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
        this.header.style="opacity:1";
        this.grid.style="opacity:1";

        this.header_buttons.forEach(button =>{
            button.disabled=false;
            button.classList.add("custom_hover");
        });
        this.grid_buttons.forEach(button =>{
            button.disabled=false;
            button.classList.add("custom_hover");
    });
    this.buttons_pressed=false;
    }
    buttons_listener()
    {
        this.remove.addEventListener("click", ()=>
        {
            this.remove_clicked=true;
            this.remove_pressed+=1;
            this.header.style="background-color: rgba(0, 0, 0, 0.1);";
            this.remove.classList.add("clicked");
            this.state.disabled=true;
            this.add.disabled=true;
            this.out.classList.add("out");
            this.header.appendChild(this.out);
            this.buttons_pressed=true;
            if(this.remove_pressed===2)
                {
                    this.reset(this.remove);
                }
        });
        this.out.addEventListener("click",()=>
        {
            this.remove_Cancelled();
        });
        this.Add.addEventListener("click",()=>
        {
            this.add_create_pop_up();
        })
    }
    reset(button)
    {
        this.remove_clicked=false;
        this.remove_pressed=0;
        this.deleted_Cards.forEach(card =>
            {
                card.parentNode.removeChild(card);
            })
        this.header.style="background-color:black";
        this.remove.classList.remove("clicked");
        this.header.removeChild(this.out);
        this.state.disabled=false;
        this.add.disabled=false;
        this.deleted_Cards=[];
        this.buttons_pressed=false;
    }
    remove_Cancelled()
        {
            this.remove_pressed=0;
            this.state.disabled=false;
            this.add.disabled=false;
            this.deleted_Cards=[];
            this.buttons_pressed=false;
            this.header.style="background-color:black";
            this.remove.classList.remove("clicked");
            this.header.removeChild(this.out);
            this.cards.forEach(card =>
            {
                card.classList.remove("chosen");
            }
            )
        }
        add_create_pop_up()
        {
    this.cancel=document.createElement("button");
    this.okay=document.createElement("button");

   this.div=document.createElement("div");
   this.div.style="position: absolute;width:500px;height:300px;background-color:lightgrey;top:50%;left:35%;opacity:1;border-radius:15px;z-index:10;";
   this.input_container=document.createElement("form");
   this.input_container.className="input_container";

   this.input_title=document.createElement("input");
   this.input_author=document.createElement("input");
        this.input_pages=document.createElement("input");
        this.read=document.createElement("input");
        this.input_read=document.createElement("div");

        this.input_title.id="title";
        this.input_author.id="author";
        this.input_pages.id="pages";
        this.input_read.id="read";

        this.label_title=document.createElement("label");
        this.label_author=document.createElement("label");
        this.label_pages=document.createElement("label");
        this.label_read=document.createElement("label");
        
        this.label_title.htmlFor="title";
        this.label_title.textContent="title";
        this.label_author.htmlFor="author";
        this.label_author.textContent="author";
        this.label_pages.htmlFor="pages";
        this.label_pages.textContent="pages";
        this.label_read.htmlFor="read";
        this.label_read.textContent="read";

        this.input_container.append(this.label_title,this.input_title);
        this.input_container.append(this.label_author,this.input_author);
        this.input_container.append(this.label_pages,this.input_pages);
        this.input_container.append(this.input_read);

        /* input container styling */
        this.input_container.style="width:100%;height:100%;display:grid; grid-template-columns:1fr 1fr 1fr 1fr; grid-template-rows:1fr 1fr 1fr;font-size:20px;";
        this.cancel.style="grid-column:1/5; grid-row:1/1; justify-self:end;display:flex;align-items:start;justify-content:end;margin-right:20px;margin-top:10px;font-size:20px;background-color:transparent;cursor:pointer;";
        this.okay.style="grid-column:1/5; grid-row:5/5; justify-self:end;font-size:20px;margin-bottom:0px;width:60px;cursor:pointer;";
        this.label_title.style="grid-column:1/2; grid-row:2/3;text-align:center;";
        this.input_title.style="grid-column:2/3; grid-row:2/3;height:20px;border-radius:15px;margin-right:10px;";
        this.input_title.required=true;
        this.input_title.name="title";
        this.label_author.style="grid-column:1/2;grid-row:3/4;text-align:center;";
        this.input_author.style="grid-column:2/3;grid-row:3/4;height:20px;border-radius:15px;margin-right:10px;";
        this.input_author.required=true;
        this.input_author.name="author";
        this.label_pages.style="grid-column:3/4; grid-row:2/3;text-align:center;";
        this.input_pages.style="grid-column:4/5; grid-row:2/3;height:20px;border-radius:15px;margin-right:10px;";
        this.input_pages.name="pages";
        this.input_author.required=true;
        this.input_pages.type="number";
        this.input_read.append(this.label_read,this.read);
        this.label_read.style="font-size:30px;";
        this.read.style="aspect-ratio:1;height:20px;border:100%;margin-top:9px;margin-left:5px;";
        this.read.name="read";
        this.input_read.style="grid-column:4/5; grid-row:3/4;height:20px;border-radius:15px;margin-right:10px;display:flex;justify-content:center;";
        this.read.type="checkbox";
        this.okay.type="submit";
        this.okay.textContent="Ok";
        this.cancel.textContent="X";

        this.input_container.append(this.okay);
        this.input_container.append(this.cancel);
        this.div.append(this.input_container);
   
        this.header.style="opacity:0.1";
        this.header_buttons.forEach(button =>{
            button.disabled=true;
            button.classList.remove("custom_hover");
        });
        this.grid.style="opacity:0.1";
        this.grid_buttons.forEach(button =>{
            button.disabled=true;
            button.classList.remove("custom_hover");
        });
        this.body.appendChild(this.div);
        this.cancel.addEventListener("click", () =>
        {
        this.remove_pop_up(this.cancel);
        
})
        this.input_container.addEventListener("submit",(event)=>
{
    event.preventDefault();
    this.added_buttons++;
    this.formdata=new FormData(event.target);
    this.container=document.createElement("button");
    this.container.classList.add("box",`${this.added_buttons}`,"custom_hover");
    this.p1=document.createElement("p");
    this.p1.className="Title";
    this.p1.textContent=this.formdata.get("title");
    this.p2=document.createElement("p");
    this.p2.className="Author";
    this.p2.textContent=`Author: ${this.formdata.get("author")}`;
    this.p3=document.createElement("p");
    this.p3.className="Pages";
    this.p3.textContent=this.formdata.get("pages");
    this.p4=document.createElement("p");
    this.p4.className="Read";
    this.p4.textContent=this.formdata.get("read")?"Read Before":"Not Read Before";
    this.container.appendChild(this.p1);
    this.container.appendChild(this.p2);
    this.container.appendChild(this.p3);
    this.container.appendChild(this.p4);
    this.grid.appendChild(this.container);
    this.cards.push(this.container);
    this.container.addEventListener("click",()=>
    {
        if(this.buttons_pressed===false)
    {
        create_pop_up(container);
    }
    else{
         this.container.classList.toggle("chosen");
        if(this.container.classList.contains("chosen") && this.state_clicked && !this.change_state.includes(this.container))
        {
            this.change_state.push(this.container);
        }
        else if(this.container.classList.contains("chosen") && !this.deleted_Cards.includes(this.container) && this.remove_clicked)
        {
            this.deleted_Cards.push(this.container);
        }
        else if(!this.container.classList.contains("chosen")){
            index=deleted_Cards.indexOf(container);
            index1=change_state.indexOf(container);
            if(index!=-1)
            {
                this.deleted_Cards.splice(index,1);
            }
            else if(index1!=-1)
            {
                this.change_state.splice(index1,1);
            }
        }
    }
    })
    this.body.removeChild(this.div);
    this.header.style="opacity:1";
   this.header_buttons.forEach(button =>{
    button.disabled=false;
    button.classList.add("custom_hover");
   });
   this.grid.style="opacity:1";
   this.grid_buttons.forEach(button =>{
    button.disabled=false;
    button.classList.add("custom_hover");
   });

    })
    }
    state_button_listener()
    {
    this.state.addEventListener("click",()=>
        {
            this.state_clicked=true;
            this.state_pressed+=1;
            this.state.classList.add("clicked");
            this.header.style="background-color: rgba(0, 0, 0, 0.1);";
            this.buttons_pressed=true;
            this.remove.disabled=true;
            this.add.disabled=true;
            if(this.state_pressed===2)
            {
                this.state_pressed=0;
                this.change_state.forEach(card =>
                {
                    this.current_state=card.querySelector(".Read");
                    this.current_state.textContent=this.current_state.textContent==="Read Before"?"Not Read Before":"Read Before";
                }
                )
                this.status_reset();
        }});
    }
    status_reset()
    {
        this.state_clicked=false;
        this.state_pressed=0;
        this.header.style="background-color:black";
        this.state.classList.remove("clicked");
        this.remove.disabled=false;
        this.add.disabled=false;
        this.buttons_pressed=false;
        this.cards.forEach(card => card.classList.remove("chosen"));
        this.change_state.forEach(card =>
        {
            this.index=this.change_state.indexOf(card);
            this.change_state.splice(this.index,1);
        }
        )
        this.change_state=[];
    }
}
const lib=new Library();
lib.buttons_listener();
lib.state_button_listener();