// Saves options to chrome.storage
	function updateImage() {
		var companion = document.getElementById('companion').value;
	    var IMG_URL = chrome.extension.getURL("images/"+ companion + '.png');
	    $("#selected_img").attr('src', IMG_URL);
	}

	function save_options() {
	  var companion = document.getElementById('companion').value;
	  chrome.storage.sync.set({
	    companion: companion
	  }, function() {
	    // Update status to let user know options were saved.
	    var status = document.getElementById('status');

	    updateImage();

	    status.textContent = 'Options saved.';
	    setTimeout(function() {
	      status.textContent = '';
	    }, 750);
	  });
	}

	// Restores select box and checkbox state using the preferences
	// stored in chrome.storage.
	function restore_options() {
	  // Use default values
	  chrome.storage.sync.get({
	    companion: 'bro'
	  }, function(items) {
	    document.getElementById('companion').value = items.companion;

	     updateImage();
	  });
	}
	document.addEventListener('DOMContentLoaded', restore_options);
	document.getElementById('save').addEventListener('click',
	    save_options);

	$("#companion").change(updateImage);