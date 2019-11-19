function pop_papers() {
    list_papers()
    az.call_once_satisfied({
        "condition": "typeof(az.hold_value.my_papers) !== 'undefined'",
        "function": function() {
            az.add_modal({
                "this_class": "papers_modal",
                "content_class": "papers_modal_content"
            })
            az.style_modal("papers_modal", 1, {
                "width": "400px",
                "height": "auto",
                "max-height" : "400px",
                "min-height" : "400px",
                "padding": "10px",
                "background": "#227093",
                "max-height": "400px",
                "border": "2px solid #f7f1e3"
            })
            az.add_text("papers_modal_content", 1, {
                "this_class": "papers_title",
                "text": "MY PAPERS"
            })
            az.style_text("papers_title", 1, {
                "align": "center",
                "font-size": "22px",
                "font-family": "Staatliches",
                "color": "white"
            })
            az.add_text("papers_modal_content", 1, {
                "this_class": "papers_title_sub",
                "text": "Click to Open"
            })
            az.style_text("papers_title_sub", 1, {
                "align": "center",
                "font-size": "18px",
                "font-family": "Staatliches",
                "color": "lightgrey",
                "margin-bottom": "10px"
            })
            az.add_input("papers_modal_content", 1, {
                "this_class" : "search_papers",
                "placeholder" : "search..."
            })
            az.style_input("search_papers", 1, {
                "align" : "center",
                "margin-bottom": "10px",
                "width" : "90%"
            })
            az.hide_and_seek("search_papers", 1, {
                "show_class" : "my_paper_button"
            })
            az.call_multiple({
                "iterations": az.hold_value.my_papers.length,
                "function": function(elem, index) {
                    az.add_button("papers_modal_content", 1, {
                        "this_class": "my_paper_button",
                        "text": az.hold_value.my_papers[index].replace('pdf', '')
                    })
                    az.all_style_button("my_paper_button", {
                        "width": "90%",
                        "background": "gold",
                        "border": "1px solid black",
                        "margin": "5px",
                        "color": "black",
                        "align": "center",
                        "outline": 0
                    })
                    az.store_data("my_paper_button", index + 1, {
                        "key" : "store_title",
                        "value" : az.hold_value.my_papers[index]
                    })
                }
            })
            az.all_add_event("my_paper_button", {
                "type": "hover",
                "function": function(this_id) {
                    az.all_style_button("my_paper_button", {
                        "background": "gold"
                    })
                    az.style_button("my_paper_button", az.get_target_instance(this_id), {
                        "background": "rgb(120, 224, 143)"
                    })
                }
            })
            az.all_add_event("my_paper_button", {
                "type": "click",
                "function": function(this_id) {
                    var this_paper = az.fetch_data("my_paper_button", az.get_target_instance(this_id), {
                        "key" : "store_title"
                    })
                    $('.show_paper').attr('src', 'papers/' + this_paper)
                }
            })
        }
    })
}