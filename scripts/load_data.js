az.read_local_file({
    "file_path" : "data/material.json",
    "done" : function(data) {
        az.hold_value.material = data
    }
})