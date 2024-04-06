// import React, { useState, useEffect } from 'react';
// import { MongoClient } from 'mongodb';


// const YourComponent = () => {
//     const [data, setData] = useState([]);

//     resolve: {
//         fallback: {
//             "util": require.resolve("util/")
//         }
//     }

//     useEffect(() => {
//         // Define your MongoDB connection URL
//         const URL = 'mongodb://localhost:27017/project_database';

//         // Create a new MongoClient
//         const client = new MongoClient(URL, { useNewUrlParser: true, useUnifiedTopology: true });

//         // Define an async function to connect to MongoDB and fetch data
//         const fetchData = async () => {
//             try {
//                 // Connect to MongoDB
//                 await client.connect();

//                 // Access the database and collection
//                 const db = client.db();
//                 const collection = db.collection('data_documents');

//                 // Fetch data from MongoDB
//                 const result = await collection.find({}).toArray();
//                 setData(result);
//             } catch (error) {
//                 console.error('Error:', error);
//             } finally {
//                 // Close the connection
//                 await client.close();
//             }
//         };

//         // Call the async function to fetch data
//         fetchData();

//         // Clean up function to close the connection when the component unmounts
//         return () => {
//             client.close();
//         };
//     }, []); // Empty dependency array ensures useEffect runs only once

//     return (
//         <div>
//             <h1>Your Data</h1>
//             <ul>
//                 {data.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default YourComponent;
