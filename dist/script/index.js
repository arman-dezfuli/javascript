function addItame() {
    var inputData;
    inputData = document.getElementById("input").value;
    if (inputData == "") {
        alert("لطفا فید را پر کنید!");
    }else{
        document.getElementById("input").value = "";
        var pTag, spanTag, task, divCon, remTag, remove;
        pTag = document.createElement("p");
        pTag.style.marginTop = "10px";
        pTag.style.fontSize = "1.5rem";
        pTag.style.padding = "10px";
        spanTag = document.createElement("span");
        task = document.createTextNode(inputData);
        spanTag.appendChild(task);
        pTag.appendChild(spanTag);
        divCon = document.getElementById("div");
        divCon.appendChild(pTag);
        remTag =document.createElement("span");
        remText = document.createTextNode("  X");
        remTag.style.color = "red";
        remTag.style.cursor = "pointer";
        remTag.appendChild(remText);
        pTag.appendChild(remTag);
        pTag.addEventListener("click", taskDone);
        function taskDone () {
            spanTag.style.textDecoration = "line-through";
            spanTag.style.color = "#229954";
        }
        remove = document.createAttribute("onclick");
        remove.value = "this.parentNode.remove();";
        remTag.setAttributeNode(remove);
    }
}