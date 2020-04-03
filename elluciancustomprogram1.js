$( document ).ready(function() {
    console.log( "This is a custom Java Script code for imperial by Ashish Nanda!" );
    var uploadattachmentSection = document.getElementById("attachment-container");
	if(uploadattachmentSection != null){
		$("#attachment-container").insertAfter($(".crm-form"));
		$('#attachment-container').find(':file').prop('required',true);
	}
});
