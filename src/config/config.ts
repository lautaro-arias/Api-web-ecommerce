export default {
    DB: {
        URI:process.env.MONGODB_URI ||'mongodb+srv://ariass:43354316@cluster0.resfzpb.mongodb.net/web-ecommerce',
        USER:process.env.MONGODB_USER,
        PASSWORD:process.env.MONGODB_PASSWORD 
    }
}