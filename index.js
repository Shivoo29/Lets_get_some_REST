const express = require('express');
const app = express();
const PORT = 8090;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/shit_code', (req, res)=>{
    res/status(200).sent({
        "message": "shit code",
        "status": "OK"
    })
});


app.post('/shit_code', (req, res)=>{
    const{id} = req.params;
    const{logo} = req.body;

    if (!logo){
        res.status(418).send({message: "I am NOOB!!"})
    }

    res.send({
        shit_code: `here for chatGPT ain't ya! ${logo} and ${id}`,
    });
});