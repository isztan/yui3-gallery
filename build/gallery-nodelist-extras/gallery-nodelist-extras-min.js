YUI.add("gallery-nodelist-extras",function(d){var b=d.NodeList,a=b.prototype,c=a.filter;a.filter=function(f){var e;if(typeof(f)==="string"){return c.apply(this,arguments);}if(typeof(f)==="function"){e=new b([]);this.each(function(h,g,i){if(f(h,g,i)){e.push(h);}});return e;}return this;};a.reject=function(e){if(typeof(e)==="string"){return this.filter(function(f){return !f.test(e);});}if(typeof(e)==="function"){return this.filter(function(h,g,f){return !e.call(null,h,g,f);});}return this;};a.first=function(){return this.item(0);};a.last=function(){return this.item(this.size()-1);};},"gallery-2011.01.03-18-30",{requires:["node"]});