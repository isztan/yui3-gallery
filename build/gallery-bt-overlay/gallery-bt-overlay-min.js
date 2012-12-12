YUI.add("gallery-bt-overlay",function(e,t){var n=e.one("body"),r=e.one(".bt-overlay-mask")||n.appendChild(e.Node.create('<div class="bt-overlay-mask"></div>')),i="widthChange",s="heightChange",o="visibleChange",u=e.Bottle.Device.getTouchSupport(),a=u?n:e.one("html"),f=[],l,c={top:[0,-1],bottom:[0,1],left:[-1,0],right:[1,0]},h=e.Base.create("btoverlay",e.Widget,[e.WidgetParent,e.WidgetPosition,e.WidgetStack,e.Bottle.PushPop],{initializer:function(t){var n=this.get("contentBox").getData("mask");f.push(this),t.zIndex||this.set("zIndex",200),this.set("mask",(n?n==="false":this.get("fullPage"))?!1:!0),this._bscEventHandlers=new e.EventHandle([this.after(i,this._updatePositionShow),this.after(s,this._updatePositionShow),this.after(o,this._doShowHide)])},destructor:function(){this._bscEventHandlers.detach(),delete this._bscEventHandlers},renderUI:function(){this.syncWH(),this._updatePositionHide(),this._updatePositionShow()},olResize:function(t){if(!this.get("visible")&&!t)return;if(!t&&this.get("width")===e.Bottle.Device.getBrowserWidth()&&this.get("height")===e.Bottle.Device.getBrowserHeight())return;this._updateFullSize(),this._updatePositionShow()},_updateFullSize:function(){this.get("fullPage")&&(this.set("width",e.Bottle.Device.getBrowserWidth(),{noAlign:!0}),this.set("height",e.Bottle.Device.getBrowserHeight(),{noAlign:!0}))},_updatePositionShow:function(e){var t=e&&e.visible!==undefined?e.visible:this.get("visible"),n=e&&e.noAlign?!0:!1,r=t&&!n,i=r?this.getShowHideXY(!0):0;r&&this.absMove(i[0],i[1])},_updatePositionHide:function(e){var t=e&&e.visible!==undefined?e.visible:this.get("visible"),n=t?0:this.getShowHideXY(!1);t||this.absMove(n[0],n[1])},_displayMask:function(e){r.setStyle("display",e?"block":"none")},_doTransition:function(t,n,r,i){var s=this;e.later(1,this,function(){t.transition(e.merge(this.get("olTrans"),{left:n+"px",top:r+"px"}),function(){i&&i.apply(s)})})},_doneShowHide:function(){var e=this.get("visible"),t=this.get("mask");t&&this._displayMask(e),e||this.disable()},getShowHideXY:function(t){var n=t?0:1,r=c[this.get("showFrom")],i=e.Bottle.Device.getBrowserWidth(),s=e.Bottle.Device.getBrowserHeight();return[n*i*r[0]+Math.floor((i-this.get("width"))/2),n*s*r[1]+Math.floor((s-this.get("height"))/2)+(e.Bottle.get("positionFixed")?0:a.get("scrollTop"))]},_doShowHide:function(e){var t=e.newVal;runthese=t&&this.enable()&&this._updateFullSize(),finalPos=this.getShowHideXY(t),node=this.get("boundingBox"),t?(this._updatePositionHide({visible:!1}),l=this):(this._updatePositionShow({visible:!0}),l=undefined),this._doTransition(node,finalPos[0],finalPos[1],this._doneShowHide)}},{ATTRS:{showFrom:{value:"left",lazyAdd:!1,validator:function(e){return c[e]?!0:!1},setter:function(e){return e===this.get("showFrom")?e:(this._updatePositionShow({showFrom:e}),e)}},mask:{value:!0,validator:e.Lang.isBoolean,setter:function(e){return this.get("visible")&&this._displayMask(e),e}},olTrans:{value:{duration:.5}},fullPage:{value:!0,validator:e.Lang.isBoolean,lazyAdd:!1,setter:function(e){return e&&this.olResize(),e}}},HTML_PARSER:{showFrom:function(e){return e.getData("show-from")},olTrans:function(t){try{return e.JSON.parse(t.getData("cfg-ol-trans"))}catch(n){}},fullPage:function(e){return e.getData("full-page")==="false"?!1:!0}},getInstances:function(){return f},getCurrent:function(){return l}});e.Bottle.Overlay=h,r.on(u?"gesturemoveend":"click",function(){l.hide()}),r.on("gesturemovestart",function(e){e.preventDefault()})},"gallery-2012.12.12-21-11",{requires:["widget-position","widget-stack","gallery-bt-pushpop"]});
