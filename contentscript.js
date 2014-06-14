var characterText = [
	{
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
	}
]

var HIPSTER_URL = chrome.extension.getURL('hipster.png');

function getMatchText() {
	//TODO put characterText in separate json file
    for(var i = 0; i < characterText.length; i++)
    {
    	var matchObject = characterText[i];
    	for(var j = 0; j < matchObject.urls.length; j++)
    	{
    		var url = matchObject.urls[j];
    		if(location.hostname.indexOf(url) > -1)
    		{
    			return matchObject.text;
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
    $("body").append("<div id='character'><img src='"+ HIPSTER_URL +"'><span class='tooltip hide'></span></div>");

    displayText();
}); //document ready




