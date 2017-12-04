firstPageHide();
middlePagesShow();
lastPageHide();
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
});

$(".previous-level").on("submit", function(event) {
    event.preventDefault();

    $.ajax({
            url: currentURL + "/api/snippets/:id",
            method: "GET"
        })
        .done(function(snippetData) {
            $(".snippet-div").replaceWith("<p><strong>" + snippetData.title + "</strong></p><p>" + snippetData.snippet + "</p>");
        });
});

$(".next-level").on("submit", function(event) {
    event.preventDefault();
    $.ajax({
            url: currentURL + "/api/snippets/:id",
            method: "GET"
        })
        .done(function(snippetData) {
            $(".snippet-div").replaceWith("<p><strong>" + snippetData.title + "</strong></p><p>" + snippetData.snippet + "</p>");
        });
});

function firstPageHide() {
    if (thisLevel = 1) {
        $("previous-level").hide();
        $("next-level").show();
    } else {}
};

function middlePagesShow() {
    if (thisLevel < 10 && thisLevel > 1) {
        $("previous-level").show();
        $("next-level").show();
    } else {}
};

function lastPageHide() {
    if (thisLevel = 10) {
        $("previous-level").show();
        $("next-level").hide();
    } else {}
};