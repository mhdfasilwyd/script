//<![CDATA[                   
var head,newLine,el,title,link,ToC="<nav class='table-of-contents' role='navigation'><h4 onclick='toc()'>Contents</h4><ul style='display:none'>";$("article h2, article h3, article h4, article h5").attr("id",function(arr){return "point" + arr;});$("article h2, article h3, article h4, article h5").each(function(){el=$(this),title=el.text(),link="#"+el.attr("id"),ToC+=newLine="<li><a href='"+link+"'>"+title+"</a></li>"}),ToC+="</ul></nav>",$(".toc-pro").prepend(ToC);function toc() {$(".table-of-contents ul").toggle();}
//]]>     
