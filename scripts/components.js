az.components = {
    "add_upload_button": function add_upload_button(target_class, target_instance, options) {
        az.add_button(target_class, target_instance, {
            "this_class": "my_button",
            "text": "UPLOAD SNAPSHOT"
        })
        az.style_button("my_button", 1, {
            "background": "#78e08f",
            "color": "black",
            "border": "1px solid black",
            "margin-top": "80px",
            "align" : options.align_button,
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
                console.log(data)
            }
        })
    }
}