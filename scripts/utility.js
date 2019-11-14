function stop_load_display() {
    az.stop_call_every()
    az.all_remove_element('added_load')
    az.all_remove_element('loading_layout')
}