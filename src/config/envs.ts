process.loadEnvFile()


const getEnvVar = (name:string) => {
  const value = process.env[name]
  if(!value){
    throw new Error("No existe la variable de entorno")
  }

  return value
}



const PORT : number = Number(process.env.PORT) || 3000
const DB_HOST_DEV : string = getEnvVar("DB_HOST_DEV")
const DB_NAME_DEV : string = getEnvVar("DB_NAME_DEV")
const DB_PASSWORD_DEV : string = getEnvVar("DB_PASSWORD_DEV")
const DB_USERNAME_DEV : string = getEnvVar("DB_USERNAME_DEV")


export {
  PORT,
  DB_HOST_DEV,
  DB_NAME_DEV,
  DB_PASSWORD_DEV,
  DB_USERNAME_DEV
}

