function calculateDistance(unitName, value) {
	switch (unitName) {
		case "kilometer":
			return value * 1000
		case "meter":
			return value
		case "decimeter":
			return value / 10
		case "centimeter":
			return value / 100
		case "millimeter":
			return value / 1000
	}
}