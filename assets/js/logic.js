//INITIALIZATION========================================================================
//Firebase INIT
const config = {
    apiKey: "AIzaSyCHPtHtYIuR_3fUFrj_6h4DZUrrY4D_reU",
    authDomain: "trainschedulehw5.firebaseapp.com",
    databaseURL: "https://trainschedulehw5.firebaseio.com",
    projectId: "trainschedulehw5",
    storageBucket: "",
    messagingSenderId: "1028721248177",
    appId: "1:1028721248177:web:ea5cd501e77e7dde"
};
firebase.initializeApp(config);

database = firebase.database();

//FireBase Adding Train Event
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    //Storing Variables
    let trnName = childSnapshot.val().trnName;
    let trnDest = childSnapshot.val().trnDest;
    let trnFirst = childSnapshot.val().trnFirst;
    let trnFreq = childSnapshot.val().trnFreq;
    
    //Run Time Functions

    //Create New Train Row
    let newRow = $("<tr>").append(
        $("<td>").text(trnName),
        $("<td>").text(trnDest),
        $("<td>").text(trnFirst),
        $("<td>").text(trnFirst),
        $("<td>").text(trnFreq)
    )
    $("#train-table > tbody").append(newRow);
})

//BUTTONS================================================================================
//Add Train Button
$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    //Gets User Input
    let trnName = $("#train-name-input").val().trim();
    let trnDest = $("#train-dest-input").val().trim();
    let trnFirst = moment($("#train-first-input").val().trim(), "HH:mm").format("X");
    let trnFreq = $("#train-freq-input").val().trim();

    //Assigns Temp files
    let newTrain = {
        trnName,
        trnDest,
        trnFirst,
        trnFreq
    };

    //Push data to Firebase Database
    database.ref().push(newTrain);

    alert("Train Successfully Added!");

    //Clear Inputs
    $("#train-name-input").val("");
    $("#train-dest-input").val("");
    $("#train-first-input").val("");
    $("#train-freq-input").val("");
});

//FUNCTIONS==============================================================================






//TIME FUNCTIONS=========================================================================
