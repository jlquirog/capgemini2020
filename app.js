class Album {
    constructor(id, idImage,title,url,thumbnailUrl){
        this.id = id;
        this.tilte = titulo;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;
    }

}


class UI {

    loadJson (file) {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var responseAlbum = JSON.parse(xhttp.responseText);
            let albums = respuesta.libros;
  
            var salida = '';
            const ui = new UI();  
    

            for(let item of albums) {
                ui.readAlbum(item);
            }
          
        }
      }
       if (file === '') { 
           file = 'https://jsonplaceholder.typicode.com/photos' 
        }

      xhttp.open("GET", file, true);
        
      xhttp.send();
    };


}

console.log('is working this?');