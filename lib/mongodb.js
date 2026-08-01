//iimport ito ni api/project/route
import mongoose from "mongoose";            // importing mongoose library, communicationg nextjs and mongodb

const MONGODB_URI = process.env.MONGODB_URI;        //Ito ang kumukuha ng connection string mula sa .env.local.

if (!MONGODB_URI) {                                 // if MONGODB_URL is not existing throw
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;   //global.mongoose -  Parang sinasabi Meron na bang existing connection?

if (!cached) {
  cached = global.mongoose = {
    conn: null,                 // Ito ang actual connection. Kapag successful Magiging conn = MongoConnection
    promise: null,              // Ito ang connection habang ginagawa pa.
  };
}

export async function connectMongoDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;

  return cached.conn;
}