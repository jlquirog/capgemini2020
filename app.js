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
              alert('aqui esta llegando');
            var responseAlbum = JSON.parse(xhttp.responseText);
            let photos = responseAlbum;
  
            let salida = '';
            const ui = new UI();  
            console.log(photos);
            console.log(photos[1]);


            let albums = [];
            let photos =[];
            for(let item of photos) {
                if (!album.includes(item.albumId)) {
                    album.push(`Album id ${item.albumId}`);
                }
                photos.push(item);
             }

     
             if (typeView = "list" ){
                this.showList (albums);
             } 
             
            
          
        }
      }
    
      xhttp.open("GET", file, true);
        
      xhttp.send();
    };

    showList (albums) {

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

ui.loadPhotos('/photos.json');

//ui.loadAlbum('/photos.json');
 
