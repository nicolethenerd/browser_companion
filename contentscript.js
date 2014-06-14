var companion_id = "hipster";

//TODO put characters in separate json file
var characters = 
{
	"hipster": {
		"name": "Hipster",
		"text" :[{
			"urls": ["okcupid", "match.com"],
			"text": "Getting married isn’t a race. It’s more like an exclusive club you probably won’t get into."
		},
		{
			"urls": ["webmd"],
			"text": "Shit - do you think it’s an STD? I got an STD once. It was a pretty obscure one… you’ve probably never heard of it."
		},
		{
			"urls": ["epicurious", "allrecipes"],
			"text": "Every time you don't eat local a farmer's child can't afford shoes.... Think about it asshole."
		},
		{
			"urls": ["twitter"],
			"text": "While you struggle to come up with 140 characters of original content that copy of Kerouac gathers another layer of dust."
		}]
	},
	"bieber": {
		"name": "Justin Bieber",
		"text": [{
			"urls": ["twitter"],
			"text": "Baby, baby, baby…you’re super witty and clever. Just not within the confines of 140 characters."
		}]
	},
	"kale": {
		"name": "Kale",
		"text": [
			{
				"urls": ["epicurious", "allrecipes"],
				"text": "Vegans don't only live longer, they have better sex. How long was your last orgasm?"
			}
		]
	},
	"rat": {
		"name": "Subway Rat",
		"text": [{
			"urls": ["webmd"],
			"text": "Hopefully you’re not dying. That’d be a real bummer if you died with so little to show for yourself."
		},
		{
			"urls": ["twitter"],
			"text": "Even I have more social interaction than you do."
		}]
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

function animateHipster() {
	$('#character').animate({
		 opacity: .5,
		height: "50%"
	});
}

jQuery(document).ready(function($) {
	chrome.storage.sync.get("companion", function(data) {

		companion_id = data.companion;
		var IMG_URL = chrome.extension.getURL("images/"+ companion_id + '.png');


		$("body").append("<div id='character'><span class='tooltip hide'></span><img src='"+ IMG_URL +"'></div>");

   		displayText();

   		if (IMG_URL.indexOf("hipster") >= 0) {
			animateHipster();
		}
		else if(companion_id === "rat")
		{
			$("#character").addClass("animation-target");
		}
	});
   
}); //document ready




