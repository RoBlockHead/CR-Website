$(document).ready(function(){
			toggleFolder = function (folderId) {
				var items = $('#' + folderId + '> .folder-items');
				if($(items[0]).hasClass("hidden")){
					$(items[0]).addClass("visible").removeClass("hidden");
				} 
				else {
					$(items[0]).addClass("hidden").removeClass("visible");
				}
			}
			toggleNav = function (x) {
				x.classList.toggle("change");
				$('.mNav-inner').toggleClass('visible');
			}
		});