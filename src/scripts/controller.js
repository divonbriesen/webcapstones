
function buildContents(_idOfElementToBuild)
{
    getEntity();
    buildHtml(_idOfElementToBuild); 
}


function getEntity() {
    // just to show we've got client side js going in our infrastructure
    console.log("you've loaded the team page for von Dubman. That is all.");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
         //   console.log("get successful " + this.responseText);
            Entity = JSON.parse(this.responseText);
         //   console.log("got the Entity: " + Entity);
        } else {
            console.log("get failed");
        }
    };

    xhttp.open("GET", "/entity/5dbb86e1881df31c2cac275e", true);
    xhttp.send();
}


function buildHtml(_idOfElementToBuild) 
{
    var elementToChange = document.getElementById(_idOfElementToBuild);

    for(i = 1; i <= 3; i ++)
    {
        
        getEntity(); // don't need to have return b/c global
        var currentEntity = Entity;
        var currentId = currentEntity._id;
        var currentName = currentEntity.Name;
        var currentDescription = currentEntity.Description

        //var sCombinedString = `${currentId + currentName + currentDescription}. `

        var aLabel = document.createElement("label");
        aLabel.setAttribute("id", "label" + i);
        aLabel.setAttribute("class", "entitylabel");
        var aTextNode = document.createTextNode("ID:" + currentId);
        aLabel.appendChild(aTextNode);
    
        elementToChange.appendChild(aLabel);

        var aLabel = document.createElement("label");
        var aTextNode = document.createTextNode("| Name: " + currentName);
        aLabel.appendChild(aTextNode);
        elementToChange.appendChild(aLabel);

        
        var aLabel = document.createElement("label");
        var aTextNode = document.createTextNode("| Description: " + currentDescription);
        aLabel.appendChild(aTextNode);
        elementToChange.appendChild(aLabel);

        var aBr = document.createElement("br");
        var anHr = document.createElement("hr");
    
        elementToChange.appendChild(aBr); 

    }
    elementToChange.appendChild(anHr); 

}

function postGet() {
    //console.log(JSON.parse(this.responseText));
    console.log("this text serves no purpose");
    console.log(Entity);
}
