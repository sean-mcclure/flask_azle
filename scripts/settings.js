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
        "background" : "#227093",
        "border" : "2px solid #f7f1e3"
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
        "align" : "center",
        "outline" : 0
    })
    az.add_event("target_keywords", 1, {
        "type" : "as_change",
        "function" : function() {
            var added_keywords = az.grab_value("target_keywords", 1)
            az.store_data("browser", 1, {
                "key" : "store_added_keywords",
                "value" : added_keywords
            })
        }
    })
setTimeout(function() {
        az.add_value("target_keywords", 1, {
            "value" : az.fetch_data("browser", 1, {"key" : "store_added_keywords"})
        })
    }, 400)


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