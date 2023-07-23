const pd_button = document.getElementById("product-button");
const sizing_button = document.getElementById('sizebutton');
const pd_text = document.getElementById('belt-description');
const sizing_text = document.getElementById('beltsizing');

sizing_text.style.display = "none"


sizing_button.addEventListener('click', (event) => {
	if (sizing_text.style.display == "none") {
		sizing_text.style.display = "";
		pd_text.style.display = "none";
		}
	else {sizing_text.style.display = "none"}
} )


pd_button.addEventListener('click', (event) => {
	if (pd_text.style.display == "") {
		pd_text.style.display = "none";
		sizing_text.style.display = "none"} 
	else {pd_text.style.display = "";
			sizing_text.style.display = "none"; }

})


const collection_button = document.getElementById('collectionbutton');
const collection_list = document.getElementById('collectionlist');


collection_list.style.display = 'none'

collection_button.addEventListener('click', (event) => {
	if (collection_list.style.display == 'none') {
		collection_list.style.display = '';
	}
	else {
		collection_list.style.display = 'none'
	}
})