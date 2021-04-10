const AddProductForm = (props) => {
  const { shopping, addToShoppingList } = props
  const handleFormSubmit = (event) => {
    // nous devons empêcher l'action par défaut de notre formulaire
    event.preventDefault()
    // récupérer la valeur depuis le champ input#product
    const newProduct = event.target.elements.product.value
    // s'assurer que la liste contient des produits uniques
    if (shopping.includes(newProduct)) {
      alert(`${newProduct} est déjà sur la liste`)
    } else {
      addToShoppingList(newProduct)
    }
    // vider l'input (remettre le formulaire à zéro)
    event.target.reset()
  }
  return <form onSubmit={handleFormSubmit}>{/* ... */}</form>
}

export default AddProductForm