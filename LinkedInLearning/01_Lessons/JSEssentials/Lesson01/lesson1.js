/** Create a Backpack object, populate some HTML to display properties.
 *  
 */

// Single line comment

/*
    Multi Line Comment works like this too.
*/

const updateBackpack = (update) => {
    let main = document.querySelector("main"); // Select the element main from the document.
    main.innerHTML = markup(backpack)
    console.info(update)
}

const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus){
        this.lidOpen = lidStatus;
        updateBackpack('lid status changed')
    }
}