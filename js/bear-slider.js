$(function(){
	//设置一个空数组,为slider-item排序
	var itemListArr=[];
	var option=[
		{
			css:{
				height:"200px",
				left:"0",
				transition:"none"
			},
			id:0
		},
		{
			css:{
				height:"200px",
				left:"250px",
				transition:"all .15s"
			},
			id:1
		},
		{
			css:{
				height:"300px",
				left:"500px",
				transition:"all .1s"
			},
			id:2,
			class:"center-active"
			
		},
		{
			css:{
				height:"200px",
				left:"750px",
				transition:"all .15s"
			},
			id:3
		},
		{
			css:{
				height:"200px",
				left:"1000px",
				transition:"none"
			},
			id:4
		}
	]
	$(".slider-item").each(function(index,item){
		var $_this=$(this);
		$_this.css(option[index].css);
		$_this.attr({dataId:option[index].id});
		$_this.attr("itemId",option[index].id);
		if(option[index].class){
			$_this.addClass("center-active");
		}
	})
	$(".slider-item").click(function(){
		var $_this=$(this);
		var dataId=$_this.attr("dataId");
		var itemId=$_this.attr("itemId");
		itemReSort(dataId,itemId);
	})
	function itemReSort(dataId,itemId){
		var $_sliderItemList=$(".slider-item");
		$_sliderItemList.removeClass("center-active");
		$_sliderItemList.each(function(index,item){
			if(itemId==1||itemId==3){
				if(dataId==0){
					itemListArr[0]=$_sliderItemList.eq(3)
					itemListArr[1]=$_sliderItemList.eq(4)
					itemListArr[2]=$_sliderItemList.eq(0)
					itemListArr[3]=$_sliderItemList.eq(1)
					itemListArr[4]=$_sliderItemList.eq(2)
				}else if(dataId==1) {
					itemListArr[0]=$_sliderItemList.eq(4)
					itemListArr[1]=$_sliderItemList.eq(0)
					itemListArr[2]=$_sliderItemList.eq(1)
					itemListArr[3]=$_sliderItemList.eq(2)
					itemListArr[4]=$_sliderItemList.eq(3)
				}else if(dataId==2) {
					itemListArr[0]=$_sliderItemList.eq(0)
					itemListArr[1]=$_sliderItemList.eq(1)
					itemListArr[2]=$_sliderItemList.eq(2)
					itemListArr[3]=$_sliderItemList.eq(3)
					itemListArr[4]=$_sliderItemList.eq(4)
				}else if(dataId==3) {
					itemListArr[0]=$_sliderItemList.eq(1)
					itemListArr[1]=$_sliderItemList.eq(2)
					itemListArr[2]=$_sliderItemList.eq(3)
					itemListArr[3]=$_sliderItemList.eq(4)
					itemListArr[4]=$_sliderItemList.eq(0)
				}else if(dataId==4) {
					itemListArr[0]=$_sliderItemList.eq(2)
					itemListArr[1]=$_sliderItemList.eq(3)
					itemListArr[2]=$_sliderItemList.eq(4)
					itemListArr[3]=$_sliderItemList.eq(0)
					itemListArr[4]=$_sliderItemList.eq(1)
				}
			}
			
		})
		$.each(itemListArr,function(index,item){
			var $_this=$(this);
			$_this.css(option[index].css);
			$_this.attr("itemId",option[index].id);
			if(option[index].class){
				$_this.addClass("center-active");
			}
		})
		if(itemId==0||itemId==4){
			itemListArr[1].css('transition','none');
			itemListArr[3].css('transition','none');
		}
	}
})
