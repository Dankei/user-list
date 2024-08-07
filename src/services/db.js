// // // // import '@prisma/react-native';
// // // // import { PrismaClient } from '@prisma/client/react-native';
// // // // import { reactiveHooksExtension } from '@prisma/react-native';
// // // import '@prisma/react-native';
// // // import { PrismaClient } from '@prisma/client/react-native';

// // // // const baseClient = new PrismaClient({
// // // //     log: ['query', 'info', 'warn']	
// // // // });
// // // const baseClient = new PrismaClient();

// // // // export const prismaClient = baseClient.$extends(reactiveHooksExtension());

// // // // export async function dbInit(){
// // // //     try {
// // //     //         baseClient.$applyPendingMigrations();
// // //     //         console.log("Database initialized");
// // //     //     } catch (e) {
// // //         //         console.error("Fail apply migretions",e);
// // //         //         throw new Error("Fail init database");
// // //         //     }
// // //         // }
// // //         export async function initializeDb() {
// // //           try {
// // //             baseClient.$applyPendingMigrations();
// // //           } catch (e) {
// // //             console.error(`failed to apply migrations: ${e}`);
// // //             throw new Error(
// // //               'Applying migrations failed, your app is now in an inconsistent state. We cannot guarantee safety, it is now your responsibility to reset the database or tell the user to re-install the app'
// // //             );
// // //           }
// // //         }




// // //         export const addName = async (name) => {
// // //             try {
// // //               await prisma.name.create({
// // //                 data: { name },
// // //               });
// // //             } catch (error) {
// // //               console.error('Error adding name', error);
// // //             }
// // //           };


// // import { PrismaClient } from '@prisma/client';

// // const prisma = new PrismaClient();

// // export const initializeDb = async () => {
// //   try {
// //     await prisma.$connect();
// //     console.log('Connected to the database');
// //   } catch (error) {
// //     console.error('Error connecting to the database', error);
// //   }
// // };

// // export const addName = async (name) => {
// //   try {
// //     await prisma.name.create({
// //       data: { name },
// //     });
// //   } catch (error) {
// //     console.error('Error adding name', error);
// //   }
// // };

// // export const getAllNames = async () => {
// //   try {
// //     return await prisma.name.findMany();
// //   } catch (error) {
// //     console.error('Error getting names', error);
// //     return [];
// //   }
// // };

        


// import { PrismaClient } from '@prisma/client';

// // Forçar o ambiente de execução para "node"
// process.env.PRISMA_CLIENT_ENGINE_TYPE = 'binary';

// const prisma = new PrismaClient();

// export const initializeDb = async () => {
//   try {
//     await prisma.$connect();
//     console.log('Connected to the database');
//   } catch (error) {
//     console.error('Error connecting to the database', error);
//   }
// };

// export const addName = async (name) => {
//   try {
//     await prisma.name.create({
//       data: { name },
//     });
//   } catch (error) {
//     console.error('Error adding name', error);
//   }
// };

// export const getAllNames = async () => {
//   try {
//     return await prisma.name.findMany();
//   } catch (error) {
//     console.error('Error getting names', error);
//     return [];
//   }
// };





import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'main.db',
    location: 'default',
  },
  () => {},
  error => {
    console.error(error);
  }
);

export const initializeDb = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Names (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)',
        [],
        () => {
          resolve();
        },
        error => {
          reject(error);
        }
      );
    });
  });
};

export const addName = async (name) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Names (name) VALUES (?)',
        [name],
        (tx, results) => {
          resolve(results);
        },
        error => {
          reject(error);
        }
      );
    });
  });
};

export const getAllNames = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Names',
        [],
        (tx, results) => {
          let names = [];
          for (let i = 0; i < results.rows.length; i++) {
            names.push(results.rows.item(i));
          }
          resolve(names);
        },
        error => {
          reject(error);
        }
      );
    });
  });
};
