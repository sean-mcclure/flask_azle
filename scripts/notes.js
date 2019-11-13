function pop_notes() {
    az.add_modal({
        "this_class": "notes_modal",
        "content_class": "notes_modal_content"
    })
    az.style_modal("notes_modal", 1, {
        "width": "auto",
        "height": "auto",
        "padding": "20px",
        "background" : "rgb(48, 57, 82)",
        "border" : "2px solid rgb(251, 91, 91)"
    })
    az.add_text("notes_modal_content", 1, {
        "this_class": "notes_title",
        "text": "ADD NOTE"
    })
    az.style_text("notes_title", 1, {
        "align": "center",
        "font-size": "22px",
        "font-family": "Staatliches",
        "color" : "white"
    })
    az.add_text("notes_modal_content", 1, {
        "this_class": "notes_title_sub",
        "text": "Notes will appear..."
    })
    az.style_text("notes_title_sub", 1, {
        "align": "center",
        "font-size": "18px",
        "font-family": "Staatliches",
        "margin-bottom": "20px",
        "color": "lightgrey"
    })
    az.add_textarea("notes_modal_content", 1, {
    "this_class": "notes_textarea",
    "placeholder": "type a note...",
    "spellcheck": false
})
az.style_textarea("notes_textarea", 1, {
    "width": "400px",
    "height": "200px",
    "font-size" : "19px",
    "font-family" : "Comic Sans MS",
    "outline" : 0,
    "align": "center",
    "resize": "none",
    "background-image": "url(https://azlejs.com/example_images/paper.png)",
    "background-size": "contain",
    "border-radius": "20px",
    "box-shadow": "4px 4px 4px black"
})
az.add_button("notes_modal_content", 1, {
    "this_class": "save_notes_button",
    "text": "ADD NOTE"
})
az.style_button("save_notes_button", 1, {
    "background": "#78e08f",
    "color": "black",
    "align": "center",
    "margin-top" : "20px",
    "outline": 0
})
az.add_event("save_notes_button", 1, {
    "type" : "click",
    "function" : function() {
        target_layout_cell_instance = az.get_target_instance(az.hold_value.clicked_img_id) + 1;
        az.add_html("uploaded_img_layout_cells", target_layout_cell_instance, {
            "html" : "<div class='hold_note' style='color: white'>" + az.grab_value('notes_textarea', 1) + "</div>"
        })
        az.close_modal()
    }
})
}