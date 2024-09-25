Question 1.1 donner la liste des en-têtes de la réponse HTTP du serveur.

  HTTP/1.1 200 OK
  Date: Sun, 15 Sep 2024 22:26:35 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5
  Transfer-Encoding: chunked


Question 1.2. Lire le contenu d'un en-tête de la requête.

  HTTP/1.1 200 OK
  Content-Type: application/json
  Date: Sun, 15 Sep 2024 22:24:52 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5
  Content-Length: 20

Question 1.3. que contient la réponse reçue par le client ?

  Le client ne reçoit aucune donnée car le fichier index.html est inaccessible et de ce fait la page est vide.

Question 1.4. Quelle est l’erreur affichée dans la console ?

    Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\Documents\DevWeb\devweb_tp5\index.html'
        at async open (node:internal/fs/promises:639:25)
        at async Object.readFile (node:internal/fs/promises:1242:14) {
      errno: -4058,
      code: 'ENOENT',
      syscall: 'open',
      path: 'C:\\Users\\Utilisateur\\Documents\\DevWeb_CC3\\devweb_tp5\\index.html'
    }

Question 1.5 donner le code de requestListener() modifié avec gestion d’erreur en async/await.

  /* facts est le contenu de la réponse de la lecture du fichier index.html */
  async function requestListener(_request, response) {
    try {
        const facts = await fs.readFile("index.html", "utf8")
        response.setHeader("Content-Type", "text/html");
        response.writeHead(200);
        return response.end(facts);
    } catch(error) {
          console.error(error);
          response.writeHead(500);
          return response.end("Erreur 500 : index.html est introuvable");
    }
  }
Question 1.6 indiquer ce que cette commande a modifié dans votre projet.

Les commandes suivantes ont modifié mon projet : 
  -npm install cross-env --save
  -npm install nodemon --save-dev

Ces deux commandes ont ajoutée un dossier node_modules, package-lock.json et modifier le fichier package.json.

Question 1.7 quelles sont les différences entre les scripts http-dev et http-prod ?

  http-dev est le script qui permet de lancer le serveur en mode de developpement et http-prod est le script qui permet de lancer le serveur en mode production. Http-dev rafraichit le script 'server-http.mjs' tandis que http-prod ne le rafraichit pas.

Question 1.8 donner les codes HTTP reçus par votre navigateur pour chacune des quatre pages précédentes.

  http://localhost:8000/index.html : 200
  http://localhost:8000/random.html : 200
  http://localhost:8000/ : 200 + 404
  http://localhost:8000/dont-exist : 200 + 404