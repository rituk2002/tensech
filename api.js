const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
app.use(bodyParser.json()); 
// const connectDB = require('./db')
// const Product = require('./product');


const pantryId="f5e61c4c-2733-4e89-93e8-3dce5610765c";

app.use(express.json());


const port = 9443;

// app.listen(port, () =>{
//     console.log("API server port 9443");
// })

const axios = require('axios'); 



app.post("/add-item/:pantryId/basket/:basketKey", async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;
    const payload = req.body;

   
    const response = await axios.post(
      `https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`,
      payload
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



app.get("/get-item/:pantryId/basket/:basketKey", async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;

    const response = await axios.get(
      `https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



app.put("/update-item/:pantryId/basket/:basketKey", async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;
    const payload = req.body;

   
    const response = await axios.put(
      `https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`,
      payload
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



app.delete("/delete-item/:pantryId/basket/:basketKey", async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;

  
    const response = await axios.delete(
      `https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});


 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
