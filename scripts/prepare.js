az.load_font("Staatliches")
az.style_body({
    "background": "#f7f1e3",
    "font-family": "Staatliches",
    "min-width": "900px",
    "max-width": "1400px"
})
az.add_sections({
    "this_class": "my_sections",
    "sections": 3
})
az.all_style_sections("my_sections", {
    "background": "#227093",
    "height": "auto",
    "border-radius": "8px"
})
az.style_sections("my_sections", 2, {
    "text-align": "center"
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
    "margin-bottom": "20px",
    "border": 0
})
az.add_input("banner_layout_cells", 1, {
    "this_class": "search_material",
    "placeholder": "search material..."
})
az.all_style_input("search_material", {
    "align": "left",
    "height": "25px",
    "width": "200px",
    "background": "#f7f1e3"
})
az.add_text("banner_layout_cells", 2, {
    "this_class": "main_title",
    "text": "PAPER CHASER"
})
az.style_text("main_title", 1, {
    "color": "white",
    "align": "center",
    "font-size": "40px",
    "margin-bottom": "10px"
})
az.add_html("banner_layout_cells", 3, {
    "html": "<div class='hold_loader'></div>"
})
az.style_html("hold_loader", 1, {
    "height": "60px",
    "position": "absolute",
    "margin-top": "8px"
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
    "float": "right",
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
    "cursor": "pointer"
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
    "cursor": "pointer"
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
    "number_of_columns": 4
})
az.style_layout("input_layout", 1, {
    "width": "auto",
    "height": "auto",
    "align": "center",
    "margin-bottom": "30px",
    "border": 0
})
az.add_input("input_layout_cells", 1, {
    "this_class": "fetch_input",
    "placeholder": "pdf url..."
})
az.add_input("input_layout_cells", 2, {
    "this_class": "paper_name",
    "placeholder": "pdf name..."
})
az.all_style_input("fetch_input", {
    "align": "center",
    "width": "400px",
    "margin": "5px"
})
az.add_event("paper_name", 1, {
    'type': "enter_key",
    "function": function() {
        az.click_element("fetch_button", 1)
    }
})
az.focus_element("fetch_input", 1)
az.add_button("input_layout_cells", 3, {
    "this_class": "fetch_button",
    "text": "FETCH"
})
az.add_button("input_layout_cells", 4, {
    "this_class": "fetch_button",
    "text": "PARSE"
})
az.all_style_button("fetch_button", {
    "background": "rgb(51, 217, 178)",
    "color": "black",
    "align": "center",
    "margin-left": "5px",
    "outline": 0
})
az.style_button("fetch_button", 2, {
    "background": "#ff5252",
    "color": "white"
})
az.add_event("fetch_button", 1, {
    'type': "click",
    "function": function() {
        if (az.grab_value('fetch_input', 1) !== '' && az.grab_value('paper_name', 1) !== '') {
            if (az.grab_value('fetch_input', 1).includes('pdf')) {
                az.animate_element("fetch_button", 1, {
                    "type": "spin"
                })
                fetch_paper(az.grab_value("fetch_input", 1), az.grab_value("paper_name", 1).split(' ').join('_') + '.pdf')
                az.clear_input("fetch_input", 1)
                az.clear_input("paper_name", 1)
            } else {
                fancy_alert("Must have .pdf extension")
            }
        } else {
            if (az.grab_value('fetch_input', 1) === '') {
                az.animate_element("fetch_input", 1, {
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
az.add_event("fetch_button", 2, {
    "type": "click",
    "function": function() {
        parse_pdf(az.hold_value.paper_name)
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
    "height": "400px",
    "border": 0
})
az.style_layout("my_layout_cells", 2, {
    "rowspan": 3
})
az.style_layout("my_layout_cells", 1, {
    "background": "#fb5b5b",
    "cursor": "pointer"
})
az.style_layout("my_layout_cells", 3, {
    "background": "#33d9b2",
    "cursor": "pointer"
})
az.style_layout("my_layout_cells", 4, {
    "background": "#ffda79",
    "cursor": "pointer"
})
az.add_icon("my_layout_cells", 1, {
    "this_class": "snapshot_icon",
    "icon_class": "fa-bar-chart"
})
az.style_icon("snapshot_icon", 1, {
    "color": "white",
    "align": "center",
    "font-size": "60px"
})
az.call_once_satisfied({
    "condition": "typeof(az.components.add_upload_image_button) === 'function' && typeof(az.components.add_upload_pdf_button) === 'function'",
    "function": function() {
        az.components.add_upload_image_button("my_layout_cells", 3, {
            "align_button": "center",
        })
    }
})
az.add_icon("my_layout_cells", 4, {
    "this_class": "closest_papers_icon",
    "icon_class": "fa-object-group"
})
az.style_icon("closest_papers_icon", 1, {
    "color": "darkslategrey",
    "font-size": "60px",
    "cursor": "pointer",
    "align": "center"
})
az.style_button("fetch_button", 1, {
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
az.add_text("my_sections", 3, {
    "this_class": "main_title_3",
    "text": "CLOSEST PAPERS"
})
az.style_text("main_title_3", 1, {
    "color": "white",
    "align": "center",
    "font-size": "30px",
    "margin-bottom": "10px"
})
az.add_event("my_layout_cells", 1, {
    "type": "click",
    "function": function() {
        pop_snapshot()
    }
})
clk_cnt = 0
az.add_event("my_layout_cells", 3, {
    "type": "click",
    "function": function() {
        clk_cnt++
        if (clk_cnt === 1) {
            az.click_element("upload_img_icon", 1)
            clk_cnt = 0
        }
    }
})
az.add_event("my_layout_cells", 4, {
    "type": "click",
    "function": function() {}
})
// on load
az.hold_value.keep_target_keywords = az.fetch_data("browser", 1, {
    "key": "store_added_keywords"
})