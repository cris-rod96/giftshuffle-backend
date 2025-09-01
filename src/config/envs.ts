process.loadEnvFile()


const getEnvVar = (name:string) => {
  const value = process.env[name]
  if(!value){
    throw new Error("No existe la variable de entorno")
  }

  return value
}



const PORT : number = Number(process.env.PORT) || 3000


export {
  PORT
}

