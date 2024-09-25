import http from "node:http";
import fs from "node:fs/promises";

const host = "localhost";
const port = 8000;

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
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});