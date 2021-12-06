// 1. IMPORTACIONES
import React from 'react'
import Food from './Food'
import Movies from './Movies'



// 2. FUNCIONES
function Main (){


	const foodList = [
		"tamales",
		"tortas",
		"tacos"
	]

	const restaurantsList = [
		{
			nombre: "McDonalds",
			platilloPrincipal: "Hamburguesas"
		},
		{
			nombre: "Pizza Hut",
			platilloPrincipal: "Pizza"
		},
		{
			nombre: "La casa de Toño",
			platilloPrincipal: "Taquitos de cochinita"
		}
	]


	const moviesList = [
	{
		nombre: "Star Wars",
		director: "George Lucas"
	},
	{
		nombre: "Interstellar",
		director: "Christopher Nolan"
	},
	{
		nombre: "Avengers",
		director: "Brothers"
	}
]

	
	return (
		<>
		<Food list={foodList} restaurants={restaurantsList} />
		<Movies list={moviesList} />
		</>
		
	)

}


// 3. EXPORTACIÓN
export default Main







