const description = document.querySelector('#belt-description');
const button = document.querySelector('#product-button');

button.addEventListener('click',(e) => {
			if(description.className == ""){
				description.className  = 'none';
			}
			else{
				description.className = "";
			}
		})

button.addEventListener('click',(e) => {
			
				origin.className = "";
				sizes.className = "";
			})



const origin = document.querySelector('#belt-origin');
const originbutton = document.querySelector('#origin-button');

originbutton.addEventListener('click',(e) => {
			if(origin.className == ""){
				origin.className  = 'none';
				description.className  = 'none';
				sizes.className = "";
			}
			else{
				origin.className = "";
			}
		})

const sizes = document.querySelector('#beltsizing');
const sizebtn = document.querySelector('#sizebutton');

sizebtn.addEventListener('click',(e) => {
			if(sizes.className == ""){
				sizes.className  = 'none';
				description.className  = 'none';
				origin.className = "";
			}
			else{
				sizes.className = "";
			}
		})

const collectionlist = document.querySelector('#collectionlist')
const collectionbtn = document.querySelector('#collectionbutton')

		collectionbtn.addEventListener('click',(e) => {
			if(collectionlist.style.display == 'block'){
				collectionlist.style.display = 'none';
			}
			else{
				collectionlist.style.display = 'block';
			}
		})