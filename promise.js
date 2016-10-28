$( document ).ready(function() {
//
function getUserByName(username) {
    return new Promise(function(resolve,reject){
         $.get('http://jsonplaceholder.typicode.com/users?username=' + username, function(users){
             if(users.length)
                resolve(users[0]);
            else
                reject('User with name ' + username + ' not found');
         });
    })
}

function clearList(){
var list1 = $('ul#postList');
list1.text("");
var list2 = $('ul#albumsList');
list2.text("");
};

function store(user) {
return userObject = user
}

function handleUsernameError(err){
        alert(err);
}

function renderName(user) {
$('#header').append(userObject.name);
$('#compForm').remove();
$('#submit').remove();
}

function renderFromPage(user) {
$('#homeButton').remove();
$('#postList').empty();
$('#albumsList').empty();
}

function renderFromSearch(user) {
$('#homeButton').remove();
$('#albumsList').empty();
}

function getPostsByUser(user) {
return new Promise(function(resolve,reject){
     $.get('http://jsonplaceholder.typicode.com/posts?userId=' + userObject.id, function(posts){
         resolve(posts);
     });
})
}

function getCommentsbyPostId(post) {
return new Promise(function(resolve,reject){
     $.get('https://jsonplaceholder.typicode.com/comments?postId=' + post.id, function(comments){
         resolve(comments);
     });
})
}

function getPhotosbyAlbumId(albums) {
return new Promise(function(resolve,reject){
     $.get('http://jsonplaceholder.typicode.com/photos?albumId=' + albums.id, function(photos){
         resolve(photos);
     });
})
}

function renderPosts(posts){
  var list = $('ul#postList');
  list.append('Post Titles');
  posts.forEach(function(post){
    var li = $('<li></li>');
    var a = $('<a href="#"></a>');
    a.text(post.title);
    a.on('click',function(){
    goToPostPage(post);
    })
    li.append(a);
    list.append(li);
  });
}

function renderComments(comments){
  var list = $('ul#albumsList');
  var li = $('<li></li>');
  li.text('Comments:');
  list.append(li);
  comments.forEach(function(comment){
    var li = $('<li></li>');
    li.text(comment.body);
    list.append(li);
  });
}

function goToPostPage(post){
    var list = $('ul#postList');
    clearList();
    var liButton = $('<li></li>');
    var backButton = $('<input type="button" "id=#homeButton" value="Back to Home">');
    list.append(backButton);
    backButton.on('click',function(){
      goHome();
    });
    var li = $('<li></li>');
    li.text('Post Title: ' + post.title);
    list.append(li);
    var li = $('<li></li>');
    li.text('Post Text: ' + post.body);
    list.append(li);
    getCommentsbyPostId(post)
      .then(renderComments)
}
//Fix Below
//photoRender
function searchPhotos(search){
  renderFromSearch()
  var list = $('ul#albumsList');
  photoRender.forEach(function(photo){
    // debugger
    if ( photo.title.includes( search )){
      var li = $('<li>'+'Photo Title: '+photo.title+'</li>');
      var a = $('<br>'+'<a target="_blank"><img src='+photo.thumbnailUrl+'/></a>');
      li.append(a);
      list.append(li);
    }

    });
}
//
function searchBox(){
  var list = $('ul#postList');
  var liButton = $('<a></a>');
  var backButton = $('<input placeholder="Search Me" id="searchBox" type="text" />');
  list.append(backButton);
//
$("#searchBox").keyup(function(e) {
  val = e.target.value;
  searchPhotos(val)
})
  };

function getAlbumsById(user) {
return new Promise(function(resolve,reject){
     $.get('http://jsonplaceholder.typicode.com/albums?userId=' + userObject.id, function(albums){
         resolve(albums);
     });
})
}

function renderPhotos(photos){
  var list = $('ul#albumsList');
  photos.forEach(function(photo){
      var li = $('<li>'+'Photo Title: '+photo.title+'</li>');
      var a = $('<br>'+'<a target="_blank"><img src='+photo.thumbnailUrl+'/></a>');
      li.append(a);
      list.append(li);

    });
    return photoRender = photos
}

function goToAlbumPage(albums){
    var list = $('ul#postList');
    clearList();
    var liButton = $('<li></li>');
    var backButton = $('<input type="button" "id=#homeButton" value="Back to Home">');
    list.append(backButton);
    backButton.on('click',function(){
      goHome();
    });
    var li = $('<li></li>');
    li.text('Album Title: ' + albums.title);
    list.append(li);
      getPhotosbyAlbumId(albums)
      .then(renderPhotos)
      .then(searchBox)
}

function renderAlbums(albums){
  var list = $('ul#albumsList');
  list.append('Album Titles');
  albums.forEach(function(albums){
    var li = $('<li></li>');

    var a = $('<a href="#"></a>');
    a.text(albums.title);
    a.on('click',function(){
      goToAlbumPage(albums);
    })
    li.append(a);
    list.append(li);
  });
}

function createHome(){
    getUserByName(userName.value.toString())
        .catch(handleUsernameError)
        .then(store)
        .then(renderName)
        .then(getPostsByUser)
        .then(renderPosts)
        .then(getAlbumsById)
        .then(renderAlbums)
}

function goHome(){
    getUserByName(userObject.username)
        .catch(handleUsernameError)
        .then(store)
        .then(renderFromPage)
        .then(getPostsByUser)
        .then(renderPosts)
        .then(getAlbumsById)
        .then(renderAlbums)
}

  document.getElementById('submit').onclick = function() {
    createHome();
    }
//
 });
