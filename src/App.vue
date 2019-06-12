<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url(http://at.alicdn.com/t/font_1233937_400rrehnyd9.css);
/*css reset*/
input,textarea{word-wrap:none;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;}
html{-webkit-text-size-adjust:none;overflow-x:hidden}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td,span{padding:0;margin:0;box-sizing: border-box;}
body{font-size: 14px;color: #333;}
fieldset,img,html,body,iframe{border:0;}
/** 重置表格元素 **/
table{border-collapse:collapse;border-spacing:0;}
ol,ul{list-style:none;}
address,caption,cite,code,dfn,em,strong,th,var{font-weight:normal;font-style:normal;}
caption,th{text-align:left;}
em,i,small,caption,th{font-weight:normal;font-style:normal;font-size:100%;}
h1,h2,h3,h4,h5,h6,em{font-weight:normal;}
q:before,q:after{content:'';}
.clearfix{*zoom:1;}
.clearfix:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0;}
a{color:inherit;text-decoration:none;}
/* a:hover{color:inherit;} */
img{border:0;vertical-align:middle;max-width:100%}
a,button{outline:none;border:0;}
input,select{border:1px solid #ccc;font-family:inherit;}
/* button::-moz-focus-inner{border:0;padding:0;margin:0;} */
textarea,input,button,select{outline:0;font-size:inherit;line-height:inherit;color:inherit;font-family:inherit;outline:none;}
textarea{overflow:auto;resize:none;font-family:inherit;}

.fl{float: left;}
.fr{float: right;}

.an-body{padding: 15px;position: relative;height: 100%;}
.an-table-header{background-color: #fff;padding: 15px 10px 1px 0;}
.an-table-header .el-form-item{display: inline-block;}
.an-table-header input{width: 180px;}
.an-serch{display: inline-block;margin-bottom: 20px;}
.an-serch .el-input{width: 180px;}
.an-pagination{padding: 10px 15px;background-color: #fff;border: 1px solid #EBEEF5;border-top: none;}
</style>
