function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
allfiles = ["intro.html", "html.html", "html/syntax.html", "html/elements.html", "html/structure.html", "css.html"];
if (inIframe()){
    allfilesindex = allfiles.indexOf(window.location.substr(window.location.indexOf(".com/")+5));
    if (allfilesindex){
        window.location = "/?"+allfilesindex;
    }
}