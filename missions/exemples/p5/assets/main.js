let category = 'teddies';
// let category = 'cameras';
// let category = 'furniture';
let url = `http://localhost:3000/api/${category}`

let get = async ( route ) => {
	let response = await fetch( url + route )
	if( response.ok ) {
		return response.json()
	}
	else {
		throw "Erreur sur la requête " + route
	}
}

let runIndex = async () => {
	let products = await get('/')
	console.log( products )

	let container = document.getElementById('products')
	container.innerText = ''

	for( let product of products ) {
		let col = document.createElement('div')
		col.className = 'col-12 col-md-4'

		let card = document.createElement('div')
		card.className = 'card'

		let img = document.createElement('img')
		img.className = "card-img-top"
		img.src = product.imageUrl
		img.alt = product.name

		let cardBody = document.createElement('div')
		cardBody.className = 'card-body'

		let cardTitle = document.createElement('h5')
		cardTitle.className = 'card-title'
		cardTitle.innerText = `${product.name} (${product.price})`

		let cardDescription = document.createElement('p')
		cardDescription.className = 'card-text'
		cardDescription.innerText = product.description

		let a  = document.createElement('a')
		a.href = '#'
		a.innerText = `Voir`

		container.appendChild(col)
		col.appendChild(card)
		card.appendChild(img)
		card.appendChild(cardBody)
		cardBody.appendChild(cardTitle)
		cardBody.appendChild(cardDescription)
		cardBody.appendChild(a)

		console.log( col )
	}

}