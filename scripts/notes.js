function pop_notes() {
    az.add_modal({
        "this_class": "notes_modal",
        "content_class": "notes_modal_content"
    })
    az.style_modal("notes_modal", 1, {
        "width": "auto",
        "height": "auto",
        "padding": "20px",
        "background": "#227093",
        "border": "2px solid #f7f1e3"
    })
    az.add_text("notes_modal_content", 1, {
        "this_class": "notes_title",
        "text": "ADD NOTE"
    })
    az.style_text("notes_title", 1, {
        "align": "center",
        "font-size": "22px",
        "font-family": "Staatliches",
        "margin-bottom": "10px",
        "color": "white"
    })
    az.add_textarea("notes_modal_content", 1, {
        "this_class": "notes_textarea",
        "placeholder": "type a note...",
        "spellcheck": false
    })
    az.style_textarea("notes_textarea", 1, {
        "width": "400px",
        "height": "120px",
        "font-size": "19px",
        "font-family": "Comic Sans MS",
        "outline": 0,
        "align": "center",
        "resize": "none",
        "border-radius": "6px",
        "background": "#feff9c"
    })
    az.focus_element("notes_textarea", 1)
    setTimeout(function() {
        az.add_value("notes_textarea", 1, {
            "value": az.fetch_data("uploaded_image", az.get_target_instance(az.hold_value.clicked_img_id), {
                "key": "store_img_notes"
            })
        })
    }, 200)
    az.add_button("notes_modal_content", 1, {
        "this_class": "save_notes_button",
        "text": "ADD NOTE"
    })
    az.style_button("save_notes_button", 1, {
        "background": "#78e08f",
        "color": "black",
        "align": "center",
        "margin-top": "10px",
        "border": "1px solid white",
        "outline": 0
    })
    az.add_event("save_notes_button", 1, {
        "type": "click",
        "function": function() {
            if (az.grab_value("notes_textarea", 1) !== '') {
                target_layout_cell_instance = az.get_target_instance(az.hold_value.clicked_img_id) * 2;
                az.empty_contents("uploaded_img_layout_cells", target_layout_cell_instance)
                az.add_html("uploaded_img_layout_cells", target_layout_cell_instance, {
                    "html": "<div class='hold_note' style='color: white'>" + az.grab_value('notes_textarea', 1) + "</div>"
                })
                az.all_style_html("hold_note", {
                    "margin-bottom": "5px",
                    "max-width" : "370px",
                    "text-align" : "left"
                })
                az.store_data("uploaded_image", az.get_target_instance(az.hold_value.clicked_img_id), {
                    "key": "store_img_notes",
                    "value": az.grab_value('notes_textarea', 1)
                })
                az.close_modal()
            } else {
                az.animate_element("notes_textarea", 1, {
                    "type": "rubberBand"
                })
            }
        }
    })
}