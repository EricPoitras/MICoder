function view_reset(){
    section_landing.style.display = "none";
    section_export.style.display = "none";
    section_utterance.style.display = "none";
    section_stats_client.style.display = "none";
    section_stats_therapist.style.display = "none";
    section_graph_client.style.display = "none";
    section_graph_therapist.style.display = "none";
    section_instructions.style.display = "none";
}

function view_controller(args){
    view_reset();
    switch(args){
        case "export":
            //
            section_export.style.display = "flex";
            break;
        case "instruction":
            //
            section_instructions.style.display = "flex";
            break;
        case "stat_client":
            // 
            section_utterance.style.display = "flex";
            section_stats_client.style.display = "flex";
            break;
        case "stat_therapist":
            //
            section_utterance.style.display = "flex";
            section_stats_therapist.style.display = "flex";
            break;
        case "graph_client":
            //
            section_utterance.style.display = "flex";
            section_graph_client.style.display = "flex";
            break;
        case "graph_therapist":
            //
            section_utterance.style.display = "flex";
            section_graph_therapist.style.display = "flex";
            break;
        default:
            //
            section_landing.style.display = "flex";
    }
}