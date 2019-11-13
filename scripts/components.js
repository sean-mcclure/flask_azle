az.hold_value.lyt_cnt = -1
az.components = {
    "add_upload_button": function add_upload_button(target_class, target_instance, options) {
        az.add_button(target_class, target_instance, {
            "this_class": "my_button",
            "text": "UPLOAD IMAGE"
        })
        az.style_button("my_button", 1, {
            "background": "#78e08f",
            "color": "black",
            "border": "1px solid black",
            "margin-top": "80px",
            "align": options.align_button,
            "outline": 0
        })
        az.add_event("my_button", 1, {
            "type": "click",
            "function": function() {
                az.click_element("my_upload", 1)
            }
        })
        az.add_upload_button(target_class, target_instance, {
            "this_class": "my_upload"
        })
        az.style_upload_button("my_upload", 1, {
            "display": "none"
        })
        az.add_event("my_upload", 1, {
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
                    "width" : "auto",
                    "height" : "auto",
                    "margin-top" : "20px",
                    "border": 0
                })
                az.add_image("uploaded_img_layout_cells", (az.hold_value.lyt_cnt  * 1) + 2, {
                    "this_class": "uploaded_image",
                    "image_data": data
                })
                az.all_style_image("uploaded_image", {
                    "width": "400px",
                    "display": "inline"
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
    }
}