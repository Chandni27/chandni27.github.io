function redirect()
{
    var x = new Object();
    
    
    x[1] = "Looting information here";
    x[2] = "Info on looters";
    x[3] = "Looters on video";
    x[4] = "Santa monica looters";
    x[5] = "looters tip id";
    x[6] = "id on looters in video";
    x[7] = "Value";
    x[8] = "Value";
    x[9] = "Value";
    x[10] = "Value";
    
    var looting= x.get(Math.floor((Math.random() * 10) + 1);
    window.location.href = "mailto:?to=info@santamonica.gov&subject="+ looting+""+"&body=Hello officers,\n \n\n I am not sure what else there is to say besides: \n https://giphy.com/gifs/rick-roll-g7GKcSzwQfugw";  
}

<body onload="javascript: redirect();">
