function pop_papers() {
    list_papers()
    if(Object.keys(az.hold_value.material).length > 0) {
            az.add_modal({
                "this_class": "papers_modal",
                "content_class": "papers_modal_content"
            })
            az.style_modal("papers_modal", 1, {
                "width": "400px",
                "height": "auto",
                "max-height": "400px",
                "min-height": "400px",
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
                "this_class": "search_papers",
                "placeholder": "search..."
            })
            az.style_input("search_papers", 1, {
                "align": "center",
                "margin-bottom": "10px",
                "width": "90%"
            })
            az.focus_element("search_papers", 1)
            az.hide_and_seek("search_papers", 1, {
                "show_class": "my_paper_button"
            })
            for_looping = az.hold_value.material
            az.call_multiple({
                "iterations": for_looping.length,
                "function": function(elem, index) {
                        az.add_button("papers_modal_content", 1, {
                            "this_class": "my_paper_button",
                            "text": Object.keys(for_looping)[index].replace('.pdf', '')
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
                            "key": "store_title",
                            "value": Object.keys(for_looping)[index]
                        })
                        var rem_id = 'rem_' + az.makeid()
                        az.add_html("my_paper_button", index + 1, {
                            "html": "<div class='remove_paper' id='" + rem_id + "'>X</div>"
                        })
                        az.all_style_html("remove_paper", {
                            "font-size": "20px",
                            "color": "red",
                            "float": "left",
                            "cursor": "pointer"
                        })
                        az.add_event("remove_paper", index + 1, {
                            "type": "click",
                            "function": function(this_id) {
                                var rem_paper = az.fetch_data("my_paper_button", az.get_target_instance(this_id), {
                                    "key": "store_title"
                                })
                                remove_file("papers/" + rem_paper)
                                az.remove_element("my_paper_button", az.get_target_instance(this_id))
                                az.hold_value.my_papers = az.remove_from_array(az.hold_value.my_papers, rem_paper)
                            }
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
                        "key": "store_title"
                    })
                    az.hold_value.paper_name = this_paper
                    $('.show_paper').attr('src', 'papers/' + this_paper)
                    az.empty_contents("my_sections", 2)
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
                    az.call_multiple({
                        "iterations": Object.keys(az.hold_value.material).length,
                        "function": function(elem, index) {
                            if (Object.keys(az.hold_value.material)[index] == this_paper) {
                                Object.values(az.hold_value.material)[index].image_paths.forEach(function(path, index_b) {
                                    az.components.add_uploaded_image(index_b, path)
                                    az.add_html("uploaded_img_layout_cells", (index_b * 2) + 2, {
                                        "html": "<div class='hold_note' style='color: white'>" + Object.values(az.hold_value.material)[index].notes[index_b] + "</div>"
                                    })
                                    az.all_style_html("hold_note", {
                                        "margin-bottom": "5px",
                                        "max-width": "370px",
                                        "text-align": "left"
                                    })
                                    az.store_data("uploaded_image", index_b + 1, {
                                        "key": "store_img_notes",
                                        "value": Object.values(az.hold_value.material)[index].notes[index_b]
                                    })
                                })
                            }
                        }
                    })
                }
            })
    } else {
    alert('no papers')
    }
    }