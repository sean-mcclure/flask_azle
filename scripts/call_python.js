function fetch_paper(url, filename) {
    az.components.loading_display("hold_loader", 1, {})
    az.empty_contents("my_sections", 2)
    $('.show_paper').attr('src', 'papers/blank.pdf')
    params = {
        "url": url,
        "filename": filename
    }
    az.call_api({
        "url": "http://127.0.0.1:5000/save_pdf/",
        "parameters": params,
        "done": function(data) {
            $('.show_paper').attr('src', 'papers/' + filename)
            az.hold_value.paper_name = filename
            inner = {}
            inner.image_paths = [""]
            inner.notes = [""]
            az.hold_value.material[az.hold_value.paper_name] = inner
            stop_load_display()
            list_papers()
        }
    })
}

function parse_pdf(filename) {
    if ($('.show_paper').attr('src') !== 'papers/blank.pdf') {
        if (az.hold_value.keep_target_keywords.length == 0) {
            fancy_alert("Set your keywords")
        } else {
            az.animate_element("fetch_button", 2, {
                "type": "spin"
            })
            az.components.loading_display("hold_loader", 1, {})
            params = {
                "paper_name": filename
            }
            keywords = []
            az.call_api({
                "url": "http://127.0.0.1:5000/pdf_parse/",
                "parameters": params,
                "done": function(data) {
                    az.hold_value.pdf_results = data.parse_pdf_response
                    az.hold_value.pdf_results.forEach(function(elem) {
                        res = elem.toLowerCase().split(' ')
                        res.forEach(function(word) {
                            keywords.push(word.replace(/\n/ig, ' '))
                        })
                    })
                    get_keyword_instances(keywords)
                    stop_load_display()
                    az.animate_element("my_layout_cells", 1, {
                        "type": "rubberBand"
                    })
                }
            })
        }
    } else {
        fancy_alert("Fetch paper first.")
    }
}

function doc2vec() {
    params = {
        "search_term": "networks mathematics thermoelectric"
    }
    az.call_api({
        "url": "http://127.0.0.1:5000/doc2vec/",
        "parameters": params,
        "done": function(data) {
            console.log(data.doc2vec_response)
        }
    })
}

function list_papers() {
    params = {
        "directory": "papers/"
    }
    az.call_api({
        "url": "http://127.0.0.1:5000/list_files/",
        "parameters": params,
        "done": function(data) {
            az.hold_value.my_papers = data.list_files
        }
    })
}

function list_images(paper) {
    params = {
        "directory": "images/"
    }
    az.call_api({
        "url": "http://127.0.0.1:5000/list_files/",
        "parameters": params,
        "done": function(data) {
            res = az.get_from_array_if(data.list_files, "elem.includes('" + paper.replace('.pdf', '') + "')")
            az.hold_value.my_images = res.sort(function(x, y) {
                res_x = x.replace(/^\D+/g, '');
                res_y = y.replace(/^\D+/g, '');
                return res_x == res_y ? 0 : res_x < res_y ? -1 : 1;
            })
        }
    })
}

function save_images() {
    $.each($('.uploaded_image'), function(index, elem) {
        params = {
            "data": $(this).attr('src'),
            "filename": "images/" + az.hold_value.paper_name.replace('.pdf', '').split(' ').join('_') + "_" + index + ".png"
        }
        az.call_api({
            "url": "http://127.0.0.1:5000/save_images/",
            "parameters": params,
            "done": function() {}
        })
    })
    save_material(az.hold_value.material)
}

function save_material(mat_obj) {
    these_images = []
    these_notes = []
    az.call_multiple({
        "iterations": mat_obj[az.hold_value.paper_name].length,
        "function": function(elem, index) {
            these_images.push(mat_obj[az.hold_value.paper_name].image_paths[index])
            these_notes.push(mat_obj[az.hold_value.paper_name].notes[index])
        }
    })
    inner = {}
    inner.image_paths = these_images
    inner.notes = these_notes
    mat_obj[az.hold_value.paper_name] = inner
    params = {
        "material": JSON.stringify(mat_obj)
    }
    az.call_api({
        "url": "http://127.0.0.1:5000/save_material/",
        "parameters": params
    })
}

function remove_file(file) {
params = {
        "file": file
    }
    az.call_api({
        "url": "http://127.0.0.1:5000/remove_file/",
        "parameters": params
    })
}