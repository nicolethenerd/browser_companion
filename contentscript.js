var characterText = [
	{
		"urls": ["google"],
		"text": "You're on google!"
	},
	{
		"urls": ["twitter"],
		"text": "You're on Twitter!"
	}
]

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

    $("body").append("<div id='character'><span class=\"tooltip\">I am a tooltip!</span></div>");
   

}); //document ready




