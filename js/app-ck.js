// Using Vanilla JS because Jquery is too large to load for this
document.addEventListener("DOMContentLoaded",function(){function t(){e[i].addEventListener("click",function(e){var t=this;t.classList.add("c--faved");setTimeout(function(){t.classList.remove("c--faved")},500);t.querySelector("[data-counter]").dataset.counter++;return!1})}var e=document.querySelectorAll(".c");for(i=0;i<e.length;i++)t()},!1);