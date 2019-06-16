submitbtn.addEventListener("click", scoreResponse);
pastebtn.addEventListener("click", pasteResponse);
downloadbtn.addEventListener("click", downloadCSV);
copylabelbtn.addEventListener("click", copylabel);
copydatabtn.addEventListener("click", copydata);
instructionbtn.addEventListener("click", instructionShow);
statbtn.addEventListener("click", statShow);
graphbtn.addEventListener("click", graphShow);
refreshbtn.addEventListener("click", refreshUI);

function instructionShow(){
    view_controller("instruction");
}

function statShow(){
    if(radio_1.checked == true){
        view_controller("stat_therapist");
    }else{
        view_controller("stat_client");
    }
}

function graphShow(){
    if(radio_1.checked == true){
        view_controller("graph_therapist");
        drawChart2();
    }else{
        view_controller("graph_client");
        drawChart();
    }
}

function pasteResponse(){
    navigator.clipboard.readText().then(text => textinput.innerText = text);
    console.log("Pasted text from clipboard..."+textinput.innerText);
}
function scoreResponse(){
    submitbtn.disabled = true;
    if(textinput.value != "" && textinput.value != "Write a sample utterance, e.g., It sounds like you are making an effort to change your behavior."){
        if(radio_1.checked == true){
            console.log("API speaker set to therapist");
            CodeUtterances.codeTherapist();
        }else if(radio_2.checked == true){
            console.log("API speaker set to client");
            CodeUtterances.codeClient();
        }else{
            console.log("Error...no radio button options selected.");
            alert_area.insertAdjacentHTML('beforeend',`
        <div id="alert" class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Error:</strong> Select either therapist or client for the utterance options.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `);
        }
    }else{
        console.log("Error...null value detected at textarea input.")
        //alertmessage.classList.remove("d-none");
        alert_area.insertAdjacentHTML('beforeend',`
        <div id="alert" class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Error:</strong> Write a new utterance in the textarea.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `);
    }
    submitbtn.disabled = false;
}

function downloadCSV(){
    
var val1 = parseFloat(document.getElementById("DSF_changetalk").innerText)*100;
var val2 = parseFloat(document.getElementById("DSF_sustain").innerText)*100;
var val3 = parseFloat(document.getElementById("DSF_neutral").innerText)*100;
    
var val4 = parseFloat(document.getElementById("RNN_changetalk").innerText)*100;
var val5 = parseFloat(document.getElementById("RNN_sustain").innerText)*100;
var val6 = parseFloat(document.getElementById("RNN_neutral").innerText)*100;
    
var val7 = parseFloat(document.getElementById("DSF_question_open").innerText)*100;
var val8 = parseFloat(document.getElementById("DSF_question_closed").innerText)*100;
var val9 = parseFloat(document.getElementById("DSF_reflection_complex").innerText)*100;
var val10 = parseFloat(document.getElementById("DSF_reflection_simple").innerText)*100;
var val11 = parseFloat(document.getElementById("DSF_affirm").innerText)*100;
var val12 = parseFloat(document.getElementById("DSF_advise_wp").innerText)*100;
var val13 = parseFloat(document.getElementById("DSF_Advise_wop").innerText)*100;
var val14 = parseFloat(document.getElementById("DSF_confront").innerText)*100;
var val15 = parseFloat(document.getElementById("DSF_givinginfo").innerText)*100;
var val16 = parseFloat(document.getElementById("DSF_facilitate").innerText)*100;
var val17 = parseFloat(document.getElementById("DSF_structure").innerText)*100;
var val18 = parseFloat(document.getElementById("DSF_na_other").innerText)*100; 
    
var val19 = parseFloat(document.getElementById("RNN_question_open").innerText)*100;
var val20 = parseFloat(document.getElementById("RNN_question_closed").innerText)*100;
var val21 = parseFloat(document.getElementById("RNN_reflection_complex").innerText)*100;
var val22 = parseFloat(document.getElementById("RNN_reflection_simple").innerText)*100;
var val23 = parseFloat(document.getElementById("RNN_affirm").innerText)*100;
var val24 = parseFloat(document.getElementById("RNN_advise_wp").innerText)*100;
var val25 = parseFloat(document.getElementById("RNN_Advise_wop").innerText)*100;
var val26 = parseFloat(document.getElementById("RNN_confront").innerText)*100;
var val27 = parseFloat(document.getElementById("RNN_givinginfo").innerText)*100;
var val28 = parseFloat(document.getElementById("RNN_facilitate").innerText)*100;
var val29 = parseFloat(document.getElementById("RNN_structure").innerText)*100;
var val30 = parseFloat(document.getElementById("RNN_na_other").innerText)*100;

var csv_data = String(val1)+","+String(val2)+","+String(val3)+","+String(val4)+","+String(val5)+","+String(val6)+","+String(val7)+","+String(val8)+","+String(val9)+","+String(val10)+","+String(val11)+","+String(val12)+","+String(val13)+","+String(val14)+","+String(val15)+","+String(val16)+","+String(val17)+","+String(val18)+","+String(val19)+","+String(val20)+","+String(val21)+","+String(val22)+","+String(val23)+","+String(val24)+","+String(val25)+","+String(val26)+","+String(val27)+","+String(val28)+","+String(val29)+","+String(val30);
console.log(csv_data);
document.getElementById("MISCCodeProb").value = csv_data;
    
var csv_labels = "DSF_changetalk"+","+"DSF_sustain"+","+"DSF_neutral"+","+"RNN_changetalk"+","+"RNN_sustain"+","+"RNN_neutral"+","+"DSF_question_open"+","+"DSF_question_closed"+","+"DSF_reflection_complex"+","+"DSF_reflection_simple"+","+"DSF_affirm"+","+"DSF_advise_wp"+","+"DSF_Advise_wop"+","+"DSF_confront"+","+"DSF_givinginfo"+","+"DSF_facilitate"+","+"DSF_structure"+","+"DSF_na_other"+","+"RNN_question_open"+","+"RNN_question_closed"+","+"RNN_reflection_complex"+","+"RNN_reflection_simple"+","+"RNN_affirm"+","+"RNN_advise_wp"+","+"RNN_Advise_wop"+","+"RNN_confront"+","+"RNN_givinginfo"+","+"RNN_facilitate"+","+"RNN_structure"+","+"RNN_na_other";
console.log(csv_labels);
document.getElementById("MISCCodeLabel").value = csv_labels;
    
view_controller("export");
}

function copylabel(){
    const input = document.getElementById("MISCCodeLabel");
    input.focus();
    input.select();
    document.execCommand('copy');
}

function copydata(){
    const input = document.getElementById("MISCCodeProb");
    input.focus();
    input.select();
    document.execCommand('copy');
}

function refreshUI(){
    location.reload();
}