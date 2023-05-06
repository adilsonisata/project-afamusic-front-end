//<![CDATA[
  //Variáveis Globais
  var xmlHttlObj;
  //função
  function catchEvent(eventObj, event, eventHandler){
      if(eventObj.addEventListener()){
          eventObj,addEventListener(event, eventHandler, false);
      }
      else if(eventObj.attachEvent()){
          event = "on" + event;
          eventObj.attachEvent(event, eventHandler);
      }
  }
  // 
  catchEvent(window, "load", function(){
      document.getElementById("musicas").style.display="block";
      document.getElementById("listaArtista").onchange="populateList";
  });
  //cria objecto XHR
  function getXmlHttp(){
      var xmlhttp = null;
      if(window.XMLHttpRequest){
          xmlhttp = new XMLHttpRequest();
          if(xmlhttp.overrideMimeType){
              xmlhttp.overrideMimeType('text/xml');
          }
      }else if(window.ActiveXObject){
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      return xmlhttp;
  }
  //prepara e envia solicitação XHR
  function populateList(){
      var artista = document.getElementById("listaArtista").nodeValue;
      var url = '?artista=' + artista;
      //se xmlHttpObj não estiver configurado
      if(!xmlHttlObj) xmlHttlObj = getXmlHttp();
      if(!xmlHttlObj) return;
         xmlHttlObj.open('GET', url, true);
      xmlHttlObj.onReadyStateChange = getMusicas;
      xmlHttlObj.send(null);
  }
  //processa o retorno
  function getMusicas(){
      if(xmlHttlObj.readyState == 4 && xmlHttlObj.status == 200){
          document.getElementById('musicas').innerHTML = xmlHttlObj.responseText;
      }
      else if(xmlHttlObj.readyState == 4 && xmlHttlObj.status != 200){
          document.getElementById('musicas').innerHTML = 'Error: pre Search Failed!';
      }
  }
  //]]