import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type UserDocument = User & Document;

@Schema({
  timestamps: true
})
export class User {
  @Prop({ unique: true })
  username: string

  @Prop()
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User);
