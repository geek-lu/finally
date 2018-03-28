const pool = require('../pool')
exports.newsSelect=function(req,res){
    /**
    *按发布时间逆序返回新闻列表
    *请求参数：
    pageNum-需显示的页号；默认为1
    *输出结果：
    {
        totalRecord: 58,
        pageSize: 10,
        pageCount: 6,
        pageNum: 1,
        data: [{},{} ... {}]
    }
    */
   
    //如果页码没有则等于1
    let pageNum = req.query.pageNum
    if(!pageNum)
        pageNum=1
    else 
        pageNum = parseInt( pageNum )
    
    
    //输出给客户端的分页器对象
    let pager = {
        totalRecord:0,
        pageSize:5,
        pageCount:0,
        pageNum,
        data:[]
    }
    let data1 = false
    let data2 = false
    //获取总计路数，计算总页数
    let sql = 'SELECT COUNT(*) AS c FROM mf_news'
    pool.query(sql,(err,result)=>{
        if( err ) throw err
        pager.totalRecord = result[0].c
        //总页数
        pager.pageCount = Math.ceil(pager.totalRecord/pager.pageSize)
        data1 = true
        if(data1&&data2){
            res.json(pager)
        }
    })
    //获取指定页中的数据
    let sql1 = 'SELECT nid,title,pubTime FROM mf_news ORDER BY pubTime DESC LIMIT ?,?'
    let start = (pager.pageNum-1)*pager.pageSize
    let count = pager.pageSize
    pool.query(sql1, [start, count] ,(err,result)=>{
        if( err ) throw err
        pager.data=result
        data2 = true  
        if(data1&&data2){
            res.json(pager)
        }
    })

}







exports.newsDetail=function(req,res){
    //根据id显示新闻详情
    let nid = req.params.nid    //this have two methods to solve it
    let sql = "SELECT * FROM mf_news WHERE nid=?"
    pool.query(sql,[nid],(err,result)=>{
        if(err) throw err
        if(result.length>0)
        res.json(result[0])
        else
        res.json({})
    })
}
