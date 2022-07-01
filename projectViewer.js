const scrollRow = $(".scroll-row");
const previewImage = $("#previewImage");
const detailTabs = $('#detailTabs');
const details = $("#details");
const turboWarp = $("#turboWarp");
const title = $("#title");
const playGameButton = $('#playGameButton');
const genreTabs = $('#genreTabs');

const thumbSizeWidth = 180;
const thumbSizeHeight = Math.floor(thumbSizeWidth / 480 * 360);

const queryString = window.location.search.substring(1);

var thumbId;
var genre;
var detailType;
var thumbs;
var heightSet;
var previewData;

$(document).ready(function () {

    // Set to use first tabbed genre, preview image of first game in that genre and first tabbed details view for that game
    genre = gameList.keys().next().value;
    let firstThumbId = gameList.get(genre).keys().next().value;
    detailType = Object.keys(gameList.get(genre).get(firstThumbId))[1];

    // If we have a URL query then set up for that specific project if we have it
    if (queryString != '') {
        gameList.forEach((genreValue, genreKey) => {
            genreValue.forEach((gameValue, gameKey) => {
                if (gameKey == queryString) {
                    genre = genreKey;
                    firstThumbId = gameKey;
                    detailType = Object.keys(gameList.get(genre).get(firstThumbId))[1];
                }
            });
        });
    }

    if (detailType == undefined)
        detailType = 'comment';

    // Set up the genre tabs
    let defaultDone = false;
    genreTabs.empty();
    gameList.forEach((value, key) => {
        genreTabs.append('<button class="tabLinks shadow-text' + (defaultDone ? '' : ' active') + '" onclick="openTabByEvent(event, \'' + key + '\')">' + key + '</button>');
        defaultDone = true;
    });

    // Display the thumbnails, preview image and game details
    heightSet = false;
    displayThumbnails();
    displayGamePreviewImage(firstThumbId);
})

function displayThumbnails() {

    if (thumbs != undefined)
        thumbs.off('load');

    scrollRow.fadeTo('fast', 0, function () { populateThumbnails(); });
}

function populateThumbnails() {
    // Populate thumbnail row for current genre
    let toLoad = 0;
    scrollRow.empty();
    gameList.get(genre).forEach((thumbValue, thumbKey) => {
        scrollRow.append('<img class="thumb" id="' + thumbKey + '" style="cursor:pointer" src="https://uploads.scratch.mit.edu/get_image/project/' + thumbKey + '_' + thumbSizeWidth + 'x' + thumbSizeHeight + '.png">');
        toLoad++;
    })

    thumbs = $(".thumb");

    // Wait until all thumbnails have loaded before allowing interaction with them
    thumbs.on('load', function () {

        // We want the thumbnail row to maintain the same height (so it doesn't flicker when changing genres)
        if (heightSet == false) {
            scrollRow.css('min-height', scrollRow.height());
            heightSet = true;
        };

        toLoad--;
        if (toLoad == 0) {

            // Fade in thumbnails and set them to glow when mouse hovers over them and to show the preview image and details when clicked on
            scrollRow.fadeTo('fast', 1);
            thumbs.hover(function () { $(this).animate({ opacity: '1.0', }, "fast") }, function () { $(this).animate({ opacity: '0.6', }, "fast"); });
            thumbs.click(function () { displayGamePreviewImage(parseInt($(this).attr('id'))); });
        }
    });
}

function displayGamePreviewImage(imageId) {

    if (thumbId == imageId)
        return;

    thumbId = imageId;

    // Fade out preview image, detail tabs and details
    previewImage.fadeOut('fast');
    detailTabs.fadeTo('fast', 0);
    title.fadeTo('fast', 0);
    playGameButton.fadeOut("fast");
    details.fadeTo("fast", 0, function () {

        // Stop any currently playing game
        turboWarp.empty();

        // Set the new preview title and image
        title.text(gameList.get(genre).get(thumbId).name);
        previewImage.attr('src', 'https://uploads.scratch.mit.edu/get_image/project/' + thumbId + '_360x270.png');

        // Cancel any previous load event that was being waited on
        previewImage.off('load');

        // Wait until the preview image has loaded
        detailType = Object.keys(gameList.get(genre).get(thumbId))[1];
        if (detailType == undefined)
            detailType = 'comment';

        previewImage.on("load", function () {

            // Clear html of previous tab buttons
            detailTabs.empty();

            // Add tab buttons for selected thumbnail
            let data = gameList.get(genre).get(thumbId);
            let defaultDone = false;
            for (let key in data) {
                if (key != 'name') {
                    detailTabs.append('<button class="small-tabLinks shadow-text' + (defaultDone ? '' : ' active') + '" id="' + key + '" style="font-size: 20px" onclick="openSmallTabById(\'' + key + '\')">' + key + '</button>');
                    defaultDone = true;
                }
            };
            key = 'comment';
            detailTabs.append('<button class="small-tabLinks shadow-text' + (defaultDone ? '' : ' active') + '" id="' + key + '" style="font-size: 20px" onclick="openSmallTabById(\'' + key + '\')">' + key + '</button>');

            // Set the details for the previewed image
            previewData = gameList.get(genre).get(thumbId);
            details.html(getThumbText());

            // Fade everything back in
            previewImage.fadeIn("fast");
            playGameButton.fadeIn("fast");
            detailTabs.fadeTo('fast', 1);
            title.fadeTo('fast', 1);
            details.fadeTo("fast", 1);

        });
    });
}

function getThumbText() {

    // Return the correct text for whichever details tab is currently selected
    if (detailType == 'comment') {
        return '<div style="width: 100%; height:100%; display: flex; justify-content: center; align-items: center"><a href="https://scratch.mit.edu/projects/' + thumbId + '" target="_blank"><button class="button" style="margin: auto; padding: 16px">Click here to open Scratch in another window so that you can leave a comment about this project</button></a></div>'
    } else {
        for (let key in previewData) {
            if (key == detailType)
                return previewData[key];
        };
    }
    return '';
}

function displayText() {

    // Fade the detail text out, update it and fade it back in
    details.fadeTo("fast", 0, function () {
        details.html(getThumbText());
        details.fadeTo("fast", 1);
    });
}

function openTabByEvent(evt, tabId) {

    if (genre == tabId)
        return;

    genre = tabId;

    // Ensure the current genre tab is highlighted
    let tabLinks = document.getElementsByClassName("tabLinks");
    for (let i = 0; i < tabLinks.length; i++)
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    evt.currentTarget.className += " active";

    // Display the thumbnails for the selected genre
    displayThumbnails();
}

function openSmallTabById(tabId) {

    if (detailType == tabId)
        return;

    detailType = tabId;

    // Ensure the current detail tab is highlighted
    let tabLinks = document.getElementsByClassName("small-tabLinks");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        if (tabLinks[i].id == tabId)
            tabLinks[i].className += " active";
    }

    // Display the selected details
    displayText();
}

function playGame() {

    // Prompt to leave a comment
    openSmallTabById('comment');

    // Fade out the preview image and play button
    playGameButton.fadeOut('fast');
    previewImage.fadeOut('fast', function () {

        // Fire up the game
        turboWarp.append('<iframe id="test" src="https://turbowarp.org/' + thumbId + '/embed" width="499" height="416" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>');
    });
}
