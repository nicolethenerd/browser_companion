var companion_id = "hipster";

//TODO put characters in separate json file
var characters = 
{
	"hipster": {
		"name": "Hipster",
		"text" :[{
			"urls": ["google", "bing"],
			"text": "gooooogle"
		},
		{
			"urls": ["twitter"],
			"text": "You're on Twitter!"
		},
		{
		"urls": ["reddit"],
		"text": "OMG YOU ARE ON REDDIT I AM ONLY WRITING THIS SENTENCE TO TEST HOW THE TOOLTIP LOOKS LIKE LOREM IPSUM IPSUM"
		}]
	},
	"bieber": {
		"name": "Justin Bieber",
		"text": [{
			"urls": ["webmd"],
			"text": [
				"Wow, you’re going to have to pay a lot for that being that you’re in the US.", 
				"The remedy for that will cost you aboot $50,000.",
				"Theres a good chance thats terminal, aye!"
			]
		}]
	},
	"kale": {
		"name": "",
		"text": []
	},
	"rat": {
		"name": "",
		"text": []
	}
}

function getMatchText() {
	var characterText = characters[companion_id].text;

    for(var i = 0; i < characterText.length; i++)
    {
    	var matchObject = characterText[i];
    	for(var j = 0; j < matchObject.urls.length; j++)
    	{
    		var url = matchObject.urls[j];
    		if(location.hostname.indexOf(url) > -1)
    		{
    			if(typeof matchObject.text == "string")
	    			return matchObject.text;
	    		else {
	    			return matchObject.text[parseInt(Math.random()*matchObject.text.length+1)];
	    		}
    		}
    	}
    }
    return undefined;
}

function displayText() {
	var textToDisplay = getMatchText();
	if(textToDisplay != undefined)
	{
		$(".tooltip").html(textToDisplay);
		$(".tooltip").css('opacity', 1);
	}
	
}

jQuery(document).ready(function($) {
	chrome.storage.sync.get("companion", function(data) {
		companion_id = data.companion;
		var IMG_URL = chrome.extension.getURL("images/"+ companion_id + '.png');

		$("body").append("<div id='character'><span class='tooltip hide'></span><img src='"+ IMG_URL +"'></div>");

   		displayText();
	});
   
}); //document ready




