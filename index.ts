import app from "./src/app.js";
import { PORT } from "./src/config/envs.js";




app.listen(PORT,() => {
  console.log(`Server a la escucha por el puerto: ${PORT}`)
})
