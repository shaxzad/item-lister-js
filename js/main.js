var form = document.getElementById('addform');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// submit form
form.addEventListener('submit', add);
// Delete 
itemList.addEventListener('click', removeItem);
// Filter
filter.addEventListener('keyup', searchItem);

function add(e)
{
	e.preventDefault();

	// Get Input value
	var newItem = document.getElementById('item').value;

	// Create new Li element
	var li = document.createElement('li');

	// Add class in li element
	li.className = 'list-group-item';

	// Add text Node with Input values
	li.appendChild(document.createTextNode(newItem));

	// Create del button element
	var delButton = document.createElement('button');

	delButton.className = 'btn btn-danger btn-sm float-right delete'

	delButton.appendChild(document.createTextNode('x'));

	// Append button to Li
	li.appendChild(delButton);

	// Append li to list
	itemList.appendChild(li);


}
function removeItem(e)
{
	if (e.target.classList.contains('delete')) 
	{
		if(confirm('Are you sure?')) {
			// console.log(1);
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

function searchItem(e)
{
	// Convert text to lowercase
	var text = e.target.value.toLowerCase();

	// Get list
	var items = itemList.getElementsByTagName('li');

	// Convert to an array
	Array.from(items).forEach(function(item)
	{
		var itemName = item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text) != -1){
			item.style.display = 'block';
		}
		else
		{
			item.style.display = 'none';
		}
	});
	console.log(items);
}