function view_reset(){
    section_landing.style.display = "none";
    section_export.style.display = "none";
    section_utterance.style.display = "none";
    section_stats_client.style.display = "none";
    section_stats_therapist.style.display = "none";
    section_graph_client.style.display = "none";
    section_graph_therapist.style.display = "none";
    section_instructions.style.display = "none";
    instructionbtn.classList.remove("d-inline");
    statbtn.classList.remove("d-inline");
    graphbtn.classList.remove("d-inline");
    downloadbtn.classList.remove("d-inline");
    refreshbtn.classList.remove("d-inline");
}

function set_nav(){
    instructionbtn.classList.remove("d-none");
    statbtn.classList.remove("d-none");
    graphbtn.classList.remove("d-none");
    downloadbtn.classList.remove("d-none");
    refreshbtn.classList.remove("d-none");
    
    statbtn.classList.add("d-inline");
    graphbtn.classList.add("d-inline");
    downloadbtn.classList.add("d-inline");
    refreshbtn.classList.add("d-inline");
}

function view_controller(args){
    view_reset();
    switch(args){
        case "export":
            //
            section_export.style.display = "flex";
            set_nav();
            break;
        case "instruction":
            //
            section_instructions.style.display = "flex";
            set_nav();
            break;
        case "stat_client":
            // 
            section_utterance.style.display = "flex";
            section_stats_client.style.display = "flex";
            set_nav();
            break;
        case "stat_therapist":
            //
            section_utterance.style.display = "flex";
            section_stats_therapist.style.display = "flex";
            set_nav();
            break;
        case "graph_client":
            //
            section_utterance.style.display = "flex";
            section_graph_client.style.display = "flex";
            set_nav();
            break;
        case "graph_therapist":
            //
            section_utterance.style.display = "flex";
            section_graph_therapist.style.display = "flex";
            set_nav();
            break;
        default:
            //
            section_landing.style.display = "flex";
            instructionbtn.classList.add("d-none");
            statbtn.classList.add("d-none");
            graphbtn.classList.add("d-none");
            downloadbtn.classList.add("d-none");
            refreshbtn.classList.add("d-none");
    }
}