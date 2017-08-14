var providers = {
    "":"https://www.google.com/search?&q=$TERM$",
    "wiki":"https://en.wikipedia.org/wiki/$TERM$",
    "nyaa":"https://nyaa.pantsu.cat/search?c=_&userID=0&q=$TERM$",
    "anidex":"https://anidex.info/?q=$TERM$",
    "yt":"https://www.youtube.com/results?search_query=$TERM$",
    "jisho":"https://jisho.org/search/$TERM$",
    "trans":"https://translate.google.com/#auto/en/$TERM$",
    "http":"http:$TERM$"
}

function parseAndSearch()
{
    var str = $("input.searchinput").val();
    var colPos = str.indexOf(":");
    if(colPos == -1)
    {
	var provider = "";
    }
    else
    {
	var provider = str.slice(0, colPos);
    }
    var rest = str.slice(colPos + 1);
    var searchStr = providers[provider].replace("$TERM$", rest);
    window.location.assign(decodeURI(searchStr));
}
