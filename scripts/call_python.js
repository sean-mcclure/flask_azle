function fetch_paper(url, filename) {

$('.show_paper').attr('src', 'papers/blank.pdf')

params = {
    "url" : url,
    "filename" : filename
}

az.call_api({
    "url" : "http://127.0.0.1:5000/save_pdf/",
    "parameters" : params,
    "done" : function(data) {
        $('.show_paper').attr('src', 'papers/' + filename)
        parse_pdf(filename)
    }
})

}


function parse_pdf(filename) {

params = {
    "paper_name" : filename
}

keywords = []
az.call_api({
    "url" : "http://127.0.0.1:5000/pdf_parse/",
    "parameters" : params,
    "done" : function(data) {
        az.hold_value.pdf_results = data.parse_pdf_response
        az.hold_value.pdf_results.forEach(function(elem) {
              res = elem.toLowerCase().split(' ')
              res.forEach(function(word) {
                     keywords.push(word.replace(/\n/ig, ' '))
              })
        })
        setTimeout(function() {
            get_keyword_instances(keywords)
        }, 2000)
}
})

}

function doc2vec() {
params = {
    "search_term" : "networks mathematics thermoelectric"
}

keywords = []
az.call_api({
    "url" : "http://127.0.0.1:5000/doc2vec/",
    "parameters" : params,
    "done" : function(data) {
        console.log(data.doc2vec_response)
    }
})

}

function get_keyword_instances(keywords) {
    az.hold_value.kw_matches = []
    search_terms =  az.hold_value.keep_target_keywords.split(',')
    search_terms.forEach(function(word) {
        count = az.get_from_array_if(keywords, "elem.includes('" + word + "')").length
        if(count !== 0) {
            inner = {}
            inner['name'] = word.trim()
            inner['value'] = count
            az.hold_value.kw_matches.push(inner)
        }
    })
}


