import "reflect-metadata"
import app from "./src/app.js";
import { PORT } from "./src/config/envs.js";
import { AppDataSource } from "./src/lib/db.js";



AppDataSource.initialize().then(() => {
  console.log("Conexión exitosa")
  app.listen(PORT,() => {
    console.log(`Server a la escucha por el puerto: ${PORT}`)
  })
}).catch(err => {
  console.log(err)
})
