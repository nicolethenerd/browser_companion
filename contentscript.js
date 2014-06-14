var characterText = [
	{
		"urls": ["google", "bing"],
		"text": ""
	},
	{
		"urls": ["twitter"],
		"text": "You're on Twitter!"
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
}

jQuery(document).ready(function($) {
    $("body").append("<img id='character' src='"+ HIPSTER_URL +"'>");

    alert(getMatchText());
});

