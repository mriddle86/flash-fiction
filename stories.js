$(function() {
	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newStory = {
			
			title: $("titl").val().trim(),
			author: $("auth").val().trim(),
			snippet: $("snip").val().trim(),
			genre: $("gen").val().trim(),
		};

		$.ajax("/api/story", {
			type: "POST",
			data: newStory
		}).then(
			function() {
				console.log("created a story");
				location.reload();
			});
	});

$(".create-snippet-form").on("submit", function(event) {
		event.preventDefault();

		var newSnippet = {

			title: $("titl").val().trim(),
			author: $("auth").val().trim(),
			snippet: $("snip").val().trim(),
			level: $()
		};

		$.ajax("/api/snippet", {
			type: "POST",
			data: newSnippet
		}).then(
			function() {
				console.log("added a snippet");
				location.reload();
			});
	});
})