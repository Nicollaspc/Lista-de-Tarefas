    let input = document.getElementById("input");
    let btnAdicionar = document.getElementById("btnAdicionar")
    let main = document.getElementById("area-lista");
    let contador = 0;
    function addTarefa(){
        valorInput = input.value;

        if(valorInput !== "" && valorInput !== null && valorInput !== undefined){
            contador++;
            novoItem = ` <div class="item" id= "${contador}">
                    <div class="icone" onclick = "marcarTarefa(${contador})"><i id = "icone_${contador}" class="fa-regular fa-circle"></i></div>
                    <div class="texto" onclick = "marcarTarefa(${contador})"><p>${valorInput}</p></div>
                    <div class="botao">
                    <button onclick = "deletar(${contador})"><i class="fa-solid fa-trash"></i>Remover</button>
                    </div>
                </div>`

                main.innerHTML += novoItem;

                input.value = "";
                input.focus();
        }
    }

    function marcarTarefa(id){
        let item = document.getElementById(id);
        let classe = item.getAttribute("class");
        console.log(classe);

        if(classe == "item"){
            item.classList.add("clicado");


            let icone = document.getElementById("icone_" + id);
            icone.classList.remove("fa-regular" , "fa-circle");
            icone.classList.add("fa-solid" , "fa-circle-check");
        }
        else{
            item.classList.remove("clicado");


            let icone = document.getElementById("icone_" + id);
            icone.classList.remove("fa-solid" , "fa-circle-check");
            icone.classList.add("fa-regular" , "fa-circle");
        }
    }
     
    function deletar(id){
        let remover = document.getElementById(id);
        remover.remove();
    }

    input.addEventListener("keyup", function(event){
        //se a pessoa aperta a tecla enter 
        if( event.keyCode === 13 ){
            event.preventDefault();
            btnAdicionar.click();
        }
    })
 

