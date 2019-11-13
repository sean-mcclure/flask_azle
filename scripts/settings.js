az.hold_value.keep_target_keywords = ""
function pop_settings() {
    az.add_modal({
        "this_class": "settings_modal",
        "content_class": "settings_modal_content"
    })
    az.style_modal("settings_modal", 1, {
        "width": "400px",
        "height": "auto",
        "padding": "10px",
        "background" : "rgb(48, 57, 82)"
    })
    az.add_text("settings_modal_content", 1, {
        "this_class": "settings_title",
        "text": "SETTINGS"
    })
    az.style_text("settings_title", 1, {
        "align": "center",
        "font-size": "22px",
        "font-family": "Staatliches",
        "color" : "white"
    })
    az.add_text("settings_modal_content", 1, {
        "this_class": "settings_title_sub",
        "text": "Choose target keywords"
    })
    az.style_text("settings_title_sub", 1, {
        "align": "center",
        "font-size": "18px",
        "font-family": "Staatliches",
        "margin-bottom": "20px",
        "color": "lightgrey"
    })
    az.add_textarea("settings_modal_content", 1, {
        "this_class" : "target_keywords",
        "placeholder" : "comma separated words..."
    })
    az.style_textarea("target_keywords", 1, {
        "width" : "90%",
        "resize" : "none",
        "align" : "center"
    })
    if(az.hold_value.keep_target_keywords.split(',').length > 0) {
        az.add_value("target_keywords", 1, {
            "value" : az.hold_value.keep_target_keywords
        })
    }
    az.add_event("target_keywords", 1, {
        "type" : "as_change",
        "function" : function() {
             az.hold_value.keep_target_keywords = az.grab_value("target_keywords", 1)
        }
    })
}