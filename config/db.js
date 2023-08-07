const mongoose = require("mongoose");
// XY8piF8vNDPwjAFC
mongoose
  .connect(
    "mongodb+srv://swapnilverma:QrHNQJnHNtzXHOEd@cluster0.i3pyi2s.mongodb.net//",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connection connected!");
  })
  .catch((e) => {
    console.log("connection not connected!", e);
  });
  
