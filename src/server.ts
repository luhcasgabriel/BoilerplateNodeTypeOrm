import AppController from './app'
import './database'

const app = new AppController().app
app.listen(3333, () => console.log('server is running on port 3333'))
