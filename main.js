let sections = document.getElementsByTagName("section");

for(let i=0; i<sections.length; i++){
    sections[i].addEventListener("click", () =>{
        if(i<sections.length-1){
            console.log("if")
            for(let j=0; j<sections.length;j++){
                if(j!=i+1){
                    sections[j].classList.add("hide");
                    sections[i+1].classList.remove('hide')
                }
            }
        }
        //--------------------- looping!!!!!
        // }else{
        //     console.log("else")
        //     for(let j=0; j<sections.length;j++){
        //         if(j!=0){
        //             sections[j].classList.add("hide");
        //             sections[0].classList.remove('hide')
        //         }
        //     }
        // } 
    })
}

