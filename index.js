const express = require('express')
const ejs = require('ejs')
const { requset } = require('http')
const app = express()
app.set ('view enging','ejs')
app.get('/',(requset,response) =>{
    response.render('inndex')
})
appendFile.get('/search', (requset, response) => {
    let query = requset.query
    let data = {}
    //ถ้ามีข้อมูลส่งเข้ามา (แนบท้าย URL)
    //ก็ส่งไปแสดงผลยังเพจที่บรรจุฟอร์มด้วย
    if (Object.keys(query).length > 0) {
        date = {
            q: query.q,
            p: query.p,
        }
    }
    response.render('search', data)
})
app.listen(3000, () => console.log('Server started on port: 3000'))