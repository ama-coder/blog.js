// blog.js created by ama
//copy right : GPL-3

var xhttp = new XMLHttpRequest();

var getPostsInfo = (path) => {

    xhttp.open('GET', path, false);
    xhttp.send(null);
    return JSON.parse(xhttp.responseText);

}

var getPost = (postname,postsInfo) => {

    let postPath;

    console.log(postsInfo.count);

    if (postsInfo == null) {
        console.error("postes info not fetcged (try getPostsInfo())");
        return;
    }
    for (var i=0; i<=postsInfo.count;i++)
    { 
        if(postname == postsInfo.posts[i]) {
            postPath = postsInfo.path[i];
            return postPath;
           // break;
        }
    }
    // for (var i in postsInfo.count) 
    // {
       
    // }
}
