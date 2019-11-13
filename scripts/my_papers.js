function pop_papers() {
    az.add_modal({
        "this_class": "papers_modal",
        "content_class": "papers_modal_content"
    })
    az.style_modal("papers_modal", 1, {
        "width": "400px",
        "height": "auto",
        "padding": "10px",
        "background" : "rgb(48, 57, 82)",
        "max-height" : "400px"
    })
    az.add_text("papers_modal_content", 1, {
        "this_class": "papers_title",
        "text": "MY PAPERS"
    })
    az.style_text("papers_title", 1, {
        "align": "center",
        "font-size": "22px",
        "font-family": "Staatliches",
        "color" : "white"
    })
    az.add_text("papers_modal_content", 1, {
        "this_class": "papers_title_sub",
        "text": "Click to Open"
    })
    az.style_text("papers_title_sub", 1, {
        "align": "center",
        "font-size": "18px",
        "font-family": "Staatliches",
        "margin-bottom": "20px",
        "color": "lightgrey"
    })
    az.call_multiple({
        "iterations" : 10,
        "function" : function() {
            az.add_button("papers_modal_content", 1, {
                "this_class" : "my_paper_button",
                "text" : "PAPER"
            })
            az.all_style_button("my_paper_button", {
                "width" : "90%",
                "background" : "gold",
                "border" : "1px solid black",
                "margin" : "5px",
                "color" : "black",
                "align" : "center"
            })
        }
    })
    az.all_add_event("my_paper_button", {
        "type" : "hover",
        "function" : function(this_id) {
            az.all_style_button("my_paper_button", {
                "background" : "gold"
            })
            az.style_button("my_paper_button", az.get_target_instance(this_id), {
                "background" : "rgb(120, 224, 143)"
            })
        }
    })
}