az.load_font("Staatliches")
az.style_body({
    "background": "#fb5b5b",
    "font-family": "Staatliches"
})
az.add_sections({
    "this_class": "my_sections",
    "sections": 3
})
az.all_style_sections("my_sections", {
    "background": "#303952",
    "height" : "auto",
    "border-radius" : "8px"
})
az.add_layout("my_sections", 1, {
    "this_class": "banner_layout",
    "row_class": "banner_layout_rows",
    "cell_class": "banner_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 3
})
az.style_layout("banner_layout", 1, {
    "width": "100%",
    "height": "auto",
    "border": 0
})
az.add_text("banner_layout_cells", 2, {
    "this_class": "main_title",
    "text": "PAPER PARSER"
})
az.style_text("main_title", 1, {
    "color": "white",
    "align": "center",
    "font-size": "30px",
    "margin-bottom": "10px"
})
az.add_layout("banner_layout_cells", 3, {
    "this_class": "icon_layout",
    "row_class": "icon_layout_rows",
    "cell_class": "icon_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 2
})
az.style_layout("icon_layout", 1, {
    "width": "auto",
    "height": "auto",
    "float" : "right",
    "border": 0
})
az.add_icon("icon_layout_cells", 1, {
    "this_class": "paper_logo",
    "icon_class": "fa-paperclip"
})
az.style_icon("paper_logo", 1, {
    "color": "white",
    "align": "center",
    "font-size": "34px",
    "margin": "10px",
    "cursor" : "pointer"
})
az.add_event("paper_logo", 1, {
    "type": "click",
    "function": function() {
        pop_papers()
    }
})
az.add_icon("icon_layout_cells", 2, {
    "this_class": "settings_logo",
    "icon_class": "fa-cog"
})
az.style_icon("settings_logo", 1, {
    "color": "white",
    "align": "right",
    "font-size": "34px",
    "margin": "10px",
    "cursor" : "pointer"
})
az.add_event("settings_logo", 1, {
    "type": "click",
    "function": function() {
        pop_settings()
    }
})
az.add_layout("my_sections", 1, {
    "this_class": "input_layout",
    "row_class": "input_layout_rows",
    "cell_class": "input_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 3
})
az.style_layout("input_layout", 1, {
    "width": "auto",
    "height": "auto",
    "align": "center",
    "margin-bottom": "20px",
    "border": 0
})
az.add_input("input_layout_cells", 1, {
    "this_class": "search_input",
    "placeholder": "pdf url..."
})
az.add_input("input_layout_cells", 2, {
    "this_class": "paper_name",
    "placeholder": "pdf name..."
})
az.all_style_input("search_input", {
    "align": "center",
    "width": "400px"
})
az.focus_element("search_input", 1)
az.add_button("input_layout_cells", 3, {
    "this_class": "search_button",
    "text": "SEARCH",
    "display": "inline"
})
az.style_button("search_button", 1, {
    "background": "#78e08f",
    "color": "black",
    "align": "center",
    "outline": 0
})
az.add_event("search_button", 1, {
    'type': "click",
    "function": function() {
        if (az.grab_value('search_input', 1) !== '' && az.grab_value('paper_name', 1) !== '') {
            az.animate_element("search_button", 1, {
                "type": "spin"
            })
            fetch_paper(az.grab_value("search_input", 1), az.grab_value("paper_name", 1).split(' ').join('_') + '.pdf')
        } else {
            if (az.grab_value('search_input', 1) === '') {
                az.animate_element("search_input", 1, {
                    "type": "rubberBand"
                })
            } else {
                az.animate_element("paper_name", 1, {
                    "type": "rubberBand"
                })
            }
        }
    }
})
az.add_layout("my_sections", 1, {
    "this_class": "my_layout",
    "row_class": "my_layout_rows",
    "cell_class": "my_layout_cells",
    "number_of_rows": 3,
    "number_of_columns": 2
})
az.style_layout("my_layout", 1, {
    "column_widths": ['20%', '80%'],
    "height": "400px"
})
az.style_layout("my_layout_cells", 2, {
    "rowspan": 3
})
az.call_once_satisfied({
    "condition" : "typeof(az.components.add_upload_image_button) === 'function' && typeof(az.components.add_upload_pdf_button) === 'function'",
    "function" : function() {
        az.components.add_upload_image_button("my_layout_cells", 1, {
            "align_button" : "center",
        })
        az.components.add_upload_pdf_button("my_layout_cells", 4, {
            "align_button" : "center"
        })
    }
})

az.add_icon("my_layout_cells", 3, {
    "this_class": "snapshot_icon",
    "icon_class": "fa-bar-chart"
})
az.style_icon("snapshot_icon", 1, {
    "color": "white",
    "align": "center",
    "font-size": "34px",
    "margin": "10px",
    "cursor" : "pointer"
})

az.add_event("snapshot_icon", 1, {
    'type' : "click",
    "function" : function() {
        pop_snapshot()
    }
})



az.style_button("search_button", 1, {
    "background": "#78e08f",
    "color": "black",
    "align": "center",
    "outline": 0
})
az.add_iframe("my_layout_cells", 2, {
    "this_class": "show_paper",
    "source": "papers/blank.pdf"
})
az.style_iframe("show_paper", 1, {
    "width": "100%",
    "height": "100%"
})


az.add_text("my_sections", 2, {
    "this_class": "main_title_2",
    "text": "GATHERED MATERIAL"
})
az.style_text("main_title_2", 1, {
    "color": "white",
    "align": "center",
    "font-size": "30px",
    "margin-bottom": "10px"
})


