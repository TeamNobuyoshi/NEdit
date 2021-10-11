// Check if the NEdit element exists
if(document.getElementById("nedit")) {
    const parent = document.getElementById("nedit").parentNode;
    const editor = document.getElementById("nedit");
    const editor_frame = document.createElement("div");

    // Create the menu
    const menu = document.createElement("ul");

    const menu_bold = document.createElement("li");
    menu_bold.innerHTML = "bold";
    const menu_italic = document.createElement("li");
    menu_italic.innerHTML = "italic";

    menu.appendChild(menu_bold);
    menu.appendChild(menu_italic);

    // Add a div as parent of "editor"
    parent.replaceChild(editor_frame, editor)
    editor_frame.appendChild(menu);
    editor_frame.appendChild(editor);
    
    // Change the editor text
    editor.innerHTML = "You have successfully set up the editor !";
} else {
    console.error("NEdit: Can't find NEdit element. Please check the documentation on GitHub (soon) !");
}