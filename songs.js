$(document).ready(function () {

    // Use jQuery to get a reference to `load-songs`
    const songBtn = $("#load-songs");

    // Use jQuery to get a reference to `song-list`
    const songList = $("#song-list");
    let songs = "";

    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */
    songBtn.click(function () {
        $.ajax("http://127.0.0.1:8080/songs.json")
            .then(response => {
                response["songs"].forEach(element => {
                    console.log(element)
                    let song = document.createElement("section");
                    $(song).addClass("song");

                    let song__title = document.createElement("h1");
                    $(song__title).addClass("song__title");
                    $(song__title).text(element["title"]);

                    let song__description = document.createElement("section");
                    $(song__description).addClass("song__description");
                    $(song__description).text(`Performed by ${element["artist"]} on the album ${element["album"]}`);

                    $(song).append(song__title);
                    $(song).append(song__description);
                    $(songList).append(song);
            });
    })
})

    /*
        Chain a `.then()` method to the ajax call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .

            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>
    */
})