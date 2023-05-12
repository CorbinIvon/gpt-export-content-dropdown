var currentConversation = 0;
function nextConversation() {
    currentConversation++;
    if (currentConversation >= jsonData.length) {
        currentConversation = 0;
    }
    showConversation(currentConversation);
}
function previousConversation() {
    currentConversation--;
    if (currentConversation < 0) {
        currentConversation = jsonData.length - 1;
    }
    showConversation(currentConversation);
}
function showConversation(index) {
    for (var i = 0; i < jsonData.length; i++) {
        var conversation = document.getElementById("conversation_" + i);
        if (i == index) {
            conversation.style.display = "block";
        } else {
            conversation.style.display = "none";
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Delay to load after initial content load.
    setTimeout(function() {
        var body = document.getElementsByTagName("body")[0];
        
        var conversations = document.getElementsByClassName("conversation");
        for (var i = 0; i < conversations.length; i++) {
            var conversation = conversations[i];
            conversation.id = "conversation_" + i;
        }

        var select = document.createElement("select");
        for (var i = 0; i < jsonData.length; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.innerHTML = jsonData[i].title;
            select.appendChild(option);
        }
        select.onchange = function() {
            showConversation(select.value);
        }
        body.insertBefore(select, body.firstChild);

        // re-order conversations by title
        var options = select.getElementsByTagName("option");
        var optionsArray = [];
        for (var i = 0; i < options.length; i++) {
            optionsArray.push(options[i]);
        }
        optionsArray.sort(function(a, b) {
            return a.innerHTML.localeCompare(b.innerHTML);
        });
        for (var i = 0; i < optionsArray.length; i++) {
            select.appendChild(optionsArray[i]);
        }
        
        // Update selected index to match current conversation.
        showConversation(optionsArray[0].value);
        select.selectedIndex = 0;
    }, 400);
});
