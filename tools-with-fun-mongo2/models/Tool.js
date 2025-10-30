import mongoose from 'mongoose';
const ToolSchema = new mongoose.Schema({ slug:{type:String,required:true,unique:true}, title:String, category:String, description:String, html:String, createdAt:{type:Date,default:Date.now} });
export default mongoose.models.Tool || mongoose.model('Tool', ToolSchema);
