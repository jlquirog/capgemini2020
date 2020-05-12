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

    loadPhotos (file, typeView) {
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
                      <a href="#" class="btn btn-danger" id="ShowAlbum${album}" name = "ShowAlbun${album}" >Show Album ${album}</a>
                  </div>
               </div>
          `
          console.log(album);
            
        });
        //for (const album in albums) {
        //}      
        
                element.innerHTML = htmlAdd;

        listView.appendChild(element);
        
        


    }

    showGrid (photos) {

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
 
