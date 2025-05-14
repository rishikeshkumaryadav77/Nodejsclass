const http = require("http");
const url = require("url");

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json"); // Response as JSON

  const parsedUrl = url.parse(req.url, true);
  const type = parsedUrl.query.type; // Get the query parameter

  try {
    if (type === "fake") {
      let fetchFake = await fetch("https://fakestoreapi.com/products");
      let dataFake = await fetchFake.json();
      res.end(JSON.stringify(dataFake));
    } else if (type === "dummy") {
      let fetchDummy = await fetch("https://dummyjson.com/quotes");
      let dataDummy = await fetchDummy.json();
      res.end(JSON.stringify(dataDummy));
    } else {
      res.end(JSON.stringify({ error: "Invalid request. Use ?type=fake or ?type=dummy" }));
    }
  } catch (error) {
    res.end(JSON.stringify({ error: "API fetch failed", details: error.message }));
  }
});

server.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});