import ejs from "ejs";
import  express  from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import {pool} from "./db.js"
import { PORT } from "./config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()


app.get('/', async (req,res)=>{
    const [rows] = await pool.query("select * from productos");
    console.log(rows)
    res.render('index', {rows})
})
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.listen(PORT)
console.log("Server online")