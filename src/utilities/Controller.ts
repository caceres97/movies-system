import dotenv from "dotenv";
import sequelizeInstance from "./DBInstance";
import { Sequelize } from "sequelize";

class Controller {
  public page: number = 1;

  public items: number = 10;

  public startAt: string = "";

  public db: Sequelize;

  constructor(tableName: string) {
    this.db = sequelizeInstance;

    // this.messaging = admin.messaging()
  }


  /**
   * Get the collection name declarated in super() function into the constructor
   * @param name Optional parameter, custom firestore collection name
   * @returns A instance of this.db.collection(name)
   */
  testConnection = async () => {
    try {
      await this.db.authenticate()
      console.log("Todo nice.")
    } catch(error) {
      console.log(error)
    }
  }

  setFirebasePagination = (query: any) => {
    if (query) {
      if (query.startAt) {
        this.startAt = query.startAt;
      } else {
        this.startAt = "";
      }

      if (query.items) {
        this.items = Number(query.items);
      } else {
        this.items = 10;
      }
    }
  };


  /**
   * Get the inicializated algolia index
   * @param name Optional parameter, custom firestore collection name
   * @returns A instance of this.db.collection(name)
   */
  // getAlgoliaSearchIndex = (indexName?: string): algoliasearch.Index => {

  //     dotenv.config()

  //     if (!process.env.APP_KEY || !process.env.ADMIN_KEY) {
  //         throw new Error(".env isn't configurated")
  //     }

  //     return algoliasearch(process.env.APP_KEY, process.env.ADMIN_KEY)
  //         .initIndex(
  //             (indexName) ? indexName : this.collection
  //         )
  // }

  /**
   * Get the inicializated algolia index
   * @param name Optional parameter, custom firestore collection name
   * @returns A instance of this.db.collection(name)
   */
  // getAlgolia = (): Client => {
  //     dotenv.config()

  //     if (!process.env.APP_KEY || !process.env.ADMIN_KEY) {
  //         throw new Error(".env isn't configurated")
  //     }

  //     return algoliasearch(process.env.APP_KEY, process.env.ADMIN_KEY)
  // }

  // sendMail = (maiInfo: CustomMail) => {
  //     dotenv.config()

  //     if (!process.env.SENDGRIDKEY) {
  //         throw new Error(".env isn't configurated (email)")
  //     }

  //     sgMail.setApiKey(process.env.SENDGRIDKEY)

  //     let sendMail = new Promise((resolve, reject) => {
  //         sgMail.send(maiInfo)
  //             .then(() => {
  //                 resolve({
  //                     "message": "Mail enviado"
  //                 })
  //             })
  //             .catch((error: Error) => {
  //                 reject(error)
  //             })
  //     })

  //     return sendMail
  // }

  // //TODO: implement
  // getArrayOfCollections = (promiseArray: any) => {
  //     if (promiseArray) {
  //         //DocumentSnapShot it's a promise type
  //         let promises: Promise<DocumentSnapshot>[]

  //         promiseArray.forEach((element: string, key: number) => {
  //             //Start to generate promises with
  //             promises.push(
  //                 this.getCollection().doc(element).get()
  //             )
  //         })
  //     }
  // }
}

export default Controller;
