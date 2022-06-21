// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import UserModel from "../models/School_db/UserModel";
import CourseModel from "../models/School_db/CourseModel";
import ExamModel from "../models/School_db/ExamModel";
import StudentModel from "../models/School_db/StudentModel";
import TeacherModel from "../models/School_db/TeacherModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.school_db_dbUrl);

    // Start Init Models

		UserModel.init();
		CourseModel.init();
		ExamModel.init();
		StudentModel.init();
		TeacherModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_school_db = await mongoose.connect(
        "mongodb://" + properties.school_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_school_db;
  }
}

export default new Database();
