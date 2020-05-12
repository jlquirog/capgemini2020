class Photo {
    constructor(albumId, id,title,url,thumbnailUrl){
        this.albumId = albumId;
        this.id = id;
        this.tilte = titulo;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;
    }

}


class UI {

    loadPhotos (file, typeView, idAlbum) {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              
            var responseAlbum = JSON.parse(xhttp.responseText);
            let photos = responseAlbum;

            console.log(photos);
  
            let salida = '';
            

            let albums = [];
            
            for(let item of photos) {
                if (!albums.includes(item.albumId)) {
                    albums.push(item.albumId);
                }
            }
            console.log(albums);

            const ui = new UI();
     
             if (typeView == "list" ){
                ui.showList (albums);
             } 
             if (typeView == "grid" ){
                ui.showGrid (photos,idAlbum);
             } 
             }
        }
      
    
      xhttp.open("GET", file, true);
        
      xhttp.send();
    };

    showList (albums) {

        let listView = document.getElementById("list-view");
        var htmlAdd = '';
        const element = document.createElement('div');
        console.log(albums);

        albums.forEach(album => {
              //console.log(htmlAdd);
              htmlAdd = htmlAdd + ` 
              <div class="card text-center mb-1">
                  <div class="card-body">
                      <a href="#" class="btn btn-danger" id="${album}" name = "ShowAlbum" >Show Album ${album}</a>
                  </div>
               </div>
          `
          console.log(album);
            
        });

                element.innerHTML = htmlAdd;

        listView.appendChild(element);
        
        


    }

    showGrid (photos) {

        let listView = document.getElementById("grid-view");
        var htmlAdd = '';
        const elementGrid = document.createElement('div');


        photos.forEach(photo => {
              htmlAdd = htmlAdd + ` 
                  <source src="${photo.thumbnailUrl}." type="">
          `
            
        });

        elementGrid.innerHTML = htmlAdd;

        listView.appendChild(elementGrid);
        
        
        }
    showDetail (photo) {

    }


}


const ui = new UI();

//ui.loadPhotos('https://jsonplaceholder.typicode.com/photos');
// *****   trabajando con una muestra en local por problmeas con la conexión con jsonplaceholder*****
//Access to XMLHttpRequest at 'https://jsonplaceholder.typicode.com/photos' from origin 
//'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on //
//the requested resource.

ui.loadPhotos('/photos.json', "list");

//ui.loadAlbum('/photos.json');

//Event
document.getElementById("list-view").addEventListener('click', function (e) {

    const ui = new UI();

    if (e.target.name === 'ShowAlbum') {
        let albumId = e.target.id;
        ui.loadPhotos ('/photos.json', 'grid', albumId) ;
    }
}
)
 
