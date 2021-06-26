$( document ).ready(function() {
    console.log( "This is a custom Java Script code for imperial by Ashish Nanda test111!" );
    $("#suss_residencypassexpirydate").on("change", function (e) {
		
			var selecteddate = $("#suss_residencypassexpirydate").val().split("/");
			var selectedvaliddate = selecteddate[1] + "/" + selecteddate[0] + "/" + selecteddate[2];
			var expirydate = new Date(selectedvaliddate);
			var currentdate = new Date();

			var Difference_In_Time = expirydate.getTime() - currentdate.getTime();
			var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
			if (Difference_In_Days < 180) {
				$('#save').attr('disabled', 'disabled');
				$('#next').attr('disabled', 'disabled');
				$('#prev').attr('disabled', 'disabled');
				$('ul.nav-tabs li input').css("color", "gray").css("text-decoration", "none");
				$('ul.nav-tabs li input').submit(function (e) {
					e.preventDefault(e);
				});
			}
			else {
				$('#save').removeAttr('disabled');
				$('#next').removeAttr('disabled');
				$('#prev').removeAttr('disabled');
			}
	});

	//suss_prexpirydate -- PR expiry
	$("#suss_prexpirydate").on("change", function (e) {
		var selecteddate = $("#suss_prexpirydate").val().split("/");
		var selectedvaliddate = selecteddate[1] + "/" + selecteddate[0] + "/" + selecteddate[2];
		var expirydate = new Date(selectedvaliddate);
		var currentdate = new Date();

		var Difference_In_Time = expirydate.getTime() - currentdate.getTime();
		var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
		if (Difference_In_Days < 180) {
			$('#save').attr('disabled', 'disabled');
			$('#next').attr('disabled', 'disabled');
			$('#prev').attr('disabled', 'disabled');
		}
		else {
			$('#save').removeAttr('disabled');
			$('#next').removeAttr('disabled');
			$('#prev').removeAttr('disabled');
		}
	});
});
