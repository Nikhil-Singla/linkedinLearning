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

    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
        updateBackpack('Lid status changed.');
    },

    newStrapLength: function(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
        updateBackpack('Strap length changed');
    },
};

const markup = (backpack) => {
    return `
    <div>
        <h3>${backpack.name}</h3>
        <ul>
            <li>Volume: ${backpack.volume}</li>
            <li>Color: ${backpack.color}</li>
            <li>Number of Pockets: ${backpack.pocketNum}</li>
            <li>Strap Lengths: L - ${backpack.strapLength.left}, R - ${backpack.strapLength.right}</li>
            <li>Top Lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
        </ul>
    </div>
    `;
};

const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);