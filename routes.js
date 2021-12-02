const express = require('express')
const connection = require('express-myconnection')
const routes = express.Router()


routes.get('/', (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)        
        conn.query('SELECT * FROM padre', (err, rows) =>{ 
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn) =>{//hacemos el llamdo a la conexion y enviamos los datos post
        if(err) return res.send(err)
        
        conn.query('INSERT INTO person set ?', [req.body], (err, rows) =>{ 
            if(err) return res.send(err)
            
            res.send('data insert ok')
        })
    })
})

routes.delete('/:Identification', (req, res)=>{ ///:id es el parametro que deseamos 
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)
        
        conn.query('DELETE FROM person WHERE Identification = ?', [req.params.Identification], (err, rows) =>{ 
            if(err) return res.send(err)
            
            res.send('data delete ok')
        })
    })
})

routes.put('/:Identification', (req, res)=>{ 
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)
        
        conn.query('UPDATE person set ? WHERE Identification = ?', [req.body, req.params.Identification], (err, rows) =>{ 
            if(err) return res.send(err)
            
            res.send('Update ok')
        })
    })
})
module.exports = routes