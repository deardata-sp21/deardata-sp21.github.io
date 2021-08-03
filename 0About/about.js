
var dropdownHeight = "300px";
var dropdownPadding = "0px"
var dropDownVisible = false;
var numAssign = 6;
var bodyPadding = "30px";

// opens or closes the dropdown menu
function blog_dropdown(){
    var dropdown = document.getElementById("blog_dropdown");
    var dropdown_text = document.getElementById("blog_dropdown_text");
    var blog_btn = document.getElementById("blog");

    if (dropDownVisible) {
        // dropdown is visible -> going to close it
        dropdown.style.height = "0px";
        dropdown.style.marginTop = "0px";

        dropdown_text.style.marginTop = "0px"
        dropdown_text.style.display = "none"

        blog_btn.classList.remove("blog_select");
        
        blog_dropdown_textHelper("none");
    } else {
        // dropdown is hidden -> going to show it
        update_dropdown_height();

        dropdown.style.height = dropdownHeight;
        dropdown.style.marginTop = "10px";

        dropdown_text.style.marginTop = "10px";
        dropdown_text.style.display = "flex"
        
        blog_btn.classList.add("blog_select");

        blog_dropdown_textHelper("block");
    }
    dropDownVisible = !dropDownVisible;
}
// shows or hides the assignment texts
function blog_dropdown_textHelper(dis) {
    let classes = document.getElementsByClassName('assign')
    for (let i = 0; i < numAssign; i++) {
        classes[i].style.display = dis;
    }
}

window.addEventListener("resize", update_dropdown_height); //listener event that will recenter gameplay when window size changes


// updates the height of the dropdown menu
// if dropdown menu is currently visible, changes the height of that
function update_dropdown_height() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    console.log(screenWidth);

    let assign_W = 165.2+12; //134.8; //document.getElementById("assign").getBoundingClientRect().width;
    let assign_H = 49.6+12; //document.getElementById("assign").getBoundingClientRect().height;

    let usable_W = screenWidth - parseInt(bodyPadding) * 6;

    // the number of elements that fit horizontally
    let numElem_W = Math.floor(usable_W / assign_W);
    
    // the resulting height (by number of elements) based on overflow
    let numElem_H = Math.ceil(numAssign/numElem_W)

    dropdownHeight = assign_H * numElem_H + 2 * parseInt(dropdownPadding) + "px";
    if (dropDownVisible) {
        document.getElementById("blog_dropdown").style.height = dropdownHeight;
    }
}
