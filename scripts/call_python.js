function fetch_paper(url, filename) {
    az.components.loading_display("hold_loader", 1, {})
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
            stop_load_display()
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
        "url": "http://127.0.0.1:5000/list_papers/",
        "parameters": params,
        "done": function(data) {
            az.hold_value.my_papers = data.my_papers
        }
    })
}

function save_material() {
    all_notes = []
    $.each($('.uploaded_image'), function(index, elem) {
        var inner = {}
        inner.notes = $('.hold_note').eq(index).text()
        all_notes.push(inner)
    })
    $.each($('.uploaded_image'), function(index, elem) {
        params = {
            "data": $(this).attr('src'),
            "filename": "material/" + az.hold_value.paper_name.replace('pdf', '') + "_" + index + ".png"
        }
        az.call_api({
            "url": "http://127.0.0.1:5000/save_material/",
            "parameters": params,
            "done": function() {}
        })
    })
}