function pop_snapshot() {
    if (typeof(az.hold_value.kw_matches) !== 'undefined') {
        az.add_modal({
            "this_class": "snapshot_modal",
            "content_class": "snapshot_modal_content"
        })
        az.style_modal("snapshot_modal", 1, {
            "width": "auto",
            "height": "auto",
            "padding": "10px",
            "background": "#227093",
            "border": "2px solid #f7f1e3"
        })
        az.add_text("snapshot_modal_content", 1, {
            "this_class": "snapshot_title",
            "text": "PAPER SNAPSHOT"
        })
        az.style_text("snapshot_title", 1, {
            "align": "center",
            "font-size": "22px",
            "font-family": "Staatliches",
            "color": "white"
        })
        az.add_text("snapshot_modal_content", 1, {
            "this_class": "snapshot_title_sub",
            "text": "Keywords Found in Article"
        })
        az.style_text("snapshot_title_sub", 1, {
            "align": "center",
            "font-size": "18px",
            "font-family": "Staatliches",
            "margin-bottom": "20px",
            "color": "lightgrey"
        })
        az.add_iframe("snapshot_modal_content", 1, {
            "this_class": "barchart_frame",
            "source": "visuals/d3-bar-chart/index.html"
        })
        az.style_iframe("barchart_frame", 1, {
            "width": "700px",
            "height": "300px"
        })
        az.call_once_iframe_loaded("barchart_frame", 1, {
            "function": function() {
                az.post_message_to_frame('barchart_frame', 1, {
                    "function": function() {
                        main.redefine("data", parent.fetch_keywords_counts())
                    }
                })
            }
        })
    } else {
        fancy_alert("Parse paper first.")
        az.animate_element("fetch_button", 2, {
            "type": "spin"
        })
    }
}