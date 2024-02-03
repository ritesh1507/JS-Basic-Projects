const todoTask=[];
let list='';

document.getElementById("display").style.display="none";

function renderList(){
    list='';
    for(let i=0;i<todoTask.length;i++){
        let temp = `
            <div id="display-rows">
                <input type="checkbox" id="check">
                <div id="date"> ${todoTask[i].dueDate} </div>
                <div id="task"> ${todoTask[i].name} </div>  
                <button onclick="
                todoTask.splice(${i}, 1);
                renderList();"
                id="delete">Delete</button>
            </div>
            `;
        list+=temp;
        console.log(todoTask[i].dueDate);
    }
    document.getElementById("display").innerHTML=list;

    if(todoTask.length===0){
        document.getElementById("display").style.display="none";
    }
    else{
        document.getElementById("display").style.display="block";
    }
}

document.getElementById("add").onclick=function(){
    let name= document.getElementById("text1").value;
    let dueDate= document.getElementById("date-time").value;
    document.getElementById("text1").value='';
    document.getElementById("date-time").value='';
    todoTask.push({
        name:name,
        dueDate:dueDate.split('T').join(" ")
    });
    console.log(dueDate.split('T'));
    // document.getElementById("display").innerHTML=list;
    console.log(todoTask);
    console.log(list);
    renderList();
}

document.getElementById("clear").onclick=function(){
    todoTask.length = 0;
    console.log(todoTask);
    renderList();
}