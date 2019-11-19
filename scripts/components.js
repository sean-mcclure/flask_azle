az.hold_value.lyt_cnt = -1
load_cnt = 0
az.components = {
    "add_upload_image_button": function add_upload_button(target_class, target_instance, options) {
        az.add_icon(target_class, target_instance, {
            "this_class": "upload_img_icon",
            "icon_class": "fa-upload"
        })
        az.style_icon("upload_img_icon", 1, {
            "color": "white",
            "font-size": "60px",
            "align": options.align_button
        })
        az.add_event("upload_img_icon", 1, {
            "type": "click",
            "function": function() {
                az.click_element("upload_img_native", 1)
            }
        })
        az.add_upload_button(target_class, target_instance, {
            "this_class": "upload_img_native"
        })
        az.style_upload_button("upload_img_native", 1, {
            "display": "none"
        })
        az.add_event("upload_img_native", 1, {
            "type": "upload",
            "function": function(data) {
                az.hold_value.lyt_cnt++
                az.add_layout("my_sections", 2, {
                    "this_class": "uploaded_img_layout",
                    "row_class": "uploaded_img_layout_rows",
                    "cell_class": "uploaded_img_layout_cells",
                    "number_of_rows": 2,
                    "number_of_columns": 1
                })
                az.all_style_layout("uploaded_img_layout", {
                    "height": "auto",
                    "width": "auto",
                    "display": "inline",
                    "border": 0
                })
                 az.style_layout("uploaded_img_layout_cells", (az.hold_value.lyt_cnt * 2) + 2, {
                     "padding-left" : "20px"
                 })
                az.add_image("uploaded_img_layout_cells", (az.hold_value.lyt_cnt * 2) + 1, {
                    "this_class": "uploaded_image",
                    "image_data": data
                })
                az.all_style_image("uploaded_image", {
                    "width": "400px",
                    "border-radius": "6px",
                    "margin-top": "20px",
                    "margin-left": "15px",
                    "margin-right": "15px",
                    "cursor" : "pointer"
                })
                az.add_event("uploaded_image", az.last_class_instance("uploaded_image"), {
                    "type": "click",
                    "function": function(this_id) {
                        pop_notes()
                        az.hold_value.clicked_img_id = this_id
                    }
                })
            }
        })
    },
    "add_upload_pdf_button": function add_upload_pdf_button(target_class, target_instance, options) {
        az.add_button(target_class, target_instance, {
            "this_class": "upload_pdf_button",
            "text": "UPLOAD PDF"
        })
        az.style_button("upload_pdf_button", 1, {
            "background": "#78e08f",
            "color": "black",
            "border": "1px solid black",
            "margin-top": "80px",
            "align": options.align_button,
            "outline": 0
        })
        az.add_event("upload_pdf_button", 1, {
            "type": "click",
            "function": function() {
                az.click_element("upload_pdf_native", 1)
            }
        })
        az.add_upload_button(target_class, target_instance, {
            "this_class": "upload_pdf_native"
        })
        az.style_upload_button("upload_pdf_native", 1, {
            "display": "none"
        })
        az.add_event("upload_pdf_native", 1, {
            "type": "upload",
            "function": function(data) {
                az.hold_value.bobo = data
            }
        })
    },
    "loading_display": function loading_display(target_class, target_instance, options) {
        az.add_layout(target_class, target_instance, {
            "this_class": "loading_layout",
            "row_class": "loading_layout_rows",
            "cell_class": "loading_layout_cells",
            "number_of_rows": 1,
            "number_of_columns": 10
        })
        az.style_layout("loading_layout", 1, {
            "width": "auto",
            "height": "40px",
            "position": "absolute",
            "align"  : "center",
            "border": 0
        })
        az.call_every({
            "every": 300,
            "function": function() {
                load_cnt++
                az.add_html("loading_layout_cells", load_cnt, {
                    "html": "<div class='added_load'></div>"
                })
                az.all_style_html("added_load", {
                    "width": "20px",
                    "height": "20px",
                    "background": "gold",
                    "margin": "4px",
                    "display": "inline-block"
                })
                if (load_cnt == az.get_cell_count('loading_layout', 1)) {
                    load_cnt = 0
                    az.all_remove_element('added_load')
                }
            }
        })
    }
}