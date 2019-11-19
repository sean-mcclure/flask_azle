function stop_load_display() {
    az.stop_call_every()
    az.all_remove_element('added_load')
    az.all_remove_element('loading_layout')
}

function fancy_alert(msg) {
     az.add_modal({
        "this_class": "alert_modal",
        "content_class": "alert_modal_content"
    })
    az.style_modal("alert_modal", 1, {
        "width": "auto",
        "height": "auto",
        "padding": "10px",
        "background": "#227093",
        "border": "2px solid #f7f1e3"
    })
    az.add_text("alert_modal_content", 1, {
        "this_class": "alert_modal_msg",
        "text": msg
    })
    az.style_text("alert_modal_msg", 1, {
        "align": "center",
        "font-size": "18px",
        "font-family": "Staatliches",
        "color": "white"
    })
}

function get_keyword_instances(keywords) {
    az.hold_value.kw_matches = []
    search_terms =  az.hold_value.keep_target_keywords.split(',')
    search_terms.forEach(function(word) {
        count = az.get_from_array_if(keywords, "elem.includes('" + word + "')").length
        if(count !== 0 && word !== '') {
            inner = {}
            inner['name'] = word.trim()
            inner['value'] = count
            az.hold_value.kw_matches.push(inner)
        }
    })
}