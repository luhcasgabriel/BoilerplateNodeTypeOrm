
import { v4 as uuid } from 'uuid'

class Promotion {

    id: string
    name: string
    description: string
    discount: number

    constructor () {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { Promotion }
