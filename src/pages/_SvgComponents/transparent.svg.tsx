export const SVGTransparent = ComponentWrapper(() =>{
	return<>
		<svg width = "10"
			height = "10"
			viewBox = "0 0 10 10"
			fill = "none"
			xmlns = "http://www.w3.org/2000/svg" >
			<g clip-path = "url(#clip0_0_3)" >
				<rect width = "10"
					height = "10"
					fill = "white" />
				<rect width = "5"
					height = "5"
					fill = "#D9D9D9" />
				<rect x = "5"
					y = "5"
					width = "5"
					height = "5"
					fill = "#D9D9D9" />
			</g >
			<defs >
				<clipPath id = "clip0_0_3" >
					<rect width = "10"
						height = "10"
						fill = "white" />
				</clipPath >
			</defs >
		</svg >
	</>
})
