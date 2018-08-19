var $ = require('jQuery');

module.exports = {
    get: function(url){
        return new Promise(function(success,error){
            $.ajax({
                url:url,
                dataTypes:"json",
                success:success,
                error:error
            })
        })
    },
    post: function(url,data){
        return new Promise(function(success,error){
            $.ajax({
                url:url,
                type:"POST",
                data:data,
                success:success,
                error:error
            })
        })
    }
}