function pop_snapshot() {
    az.add_modal({
        "this_class": "snapshot_modal",
        "content_class": "snapshot_modal_content"
    })
    az.style_modal("snapshot_modal", 1, {
        "width": "auto",
        "height": "auto",
        "padding": "10px",
        "background" : "#ff5252",
        "border" : "2px solid #f7f1e3"
    })
    az.add_text("snapshot_modal_content", 1, {
        "this_class": "snapshot_title",
        "text": "PAPER SNAPSHOT"
    })
    az.style_text("snapshot_title", 1, {
        "align": "center",
        "font-size": "22px",
        "font-family": "Staatliches",
        "color" : "white"
    })
    az.add_text("snapshot_modal_content", 1, {
        "this_class": "snapshot_title_sub",
        "text": "Top Words Found in Article"
    })
    az.style_text("snapshot_title_sub", 1, {
        "align": "center",
        "font-size": "18px",
        "font-family": "Staatliches",
        "margin-bottom": "20px",
        "color": "lightgrey"
    })
    az.add_iframe("snapshot_modal_content", 1, {
        "this_class" : "barchart_frame",
        "source" : "visuals/d3-bar-chart/index.html"
    })
    az.style_iframe("barchart_frame", 1, {
        "width" : "700px",
        "height" : "300px"
    })
}