// 1. IMPORTACIONES
import React from 'react'

// 2. EXPORTACIÓN DE FUNCIÓN
export default function Movies(props) {

	
	const list	= props.list

	return (
		// <> -> Son fragmentos. Siempre van en un componente.
		<> 
			<hr />
			{
				list.map((e, index) => {
					return (
						<article key={index}>
							<p>La pelicula se llama: {e.nombre} y su director es: {e.director}</p>
						</article>
					)
				})
			}
		</>		
	)
}

