import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

//database connection
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`Database Connection Successful`)

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(`Failed to connect database`, err)
  }
}
bootstrap()
