import { DataTypes } from "@sequelize/core";
import sequelizeConnect from "../server";

const User = sequelizeConnect.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  biography: {
    type: DataTypes.TEXT,
  },
  name: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM({ values: ["USER", "ADMIN"] }),
    defaultValue: "USER",
  },
  private: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

User.sync({ alter: true });

export default User;
