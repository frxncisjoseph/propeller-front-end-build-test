/**
 * Fetches planets from SWAPI and renders them on the index page.
 */
function loadPlanets() {
    fetch('https://swapi.dev/api/planets')
        .then(response => {
            return response.json()
        })
        .then(json => {
            const results = json.results

            results.forEach(result => {
                // Planet
                let planet = document.createElement('div')
                planet.classList.add('bg-slate-900', 'p-10', 'm-10', 'rounded-xl', 'text-white')

                // Title
                let title = document.createElement('div')
                title.classList.add('text-6xl', 'pb-10', 'italic', 'text-yellow-400', 'font-black')
                title.innerText = result.name

                planet.append(title)

                // Climate
                let climate = document.createElement('div')
                climate.innerText = `Climate: ${result.climate}`

                planet.append(climate)

                // Diameter
                let diameter = document.createElement('div')
                diameter.innerText = `Diameter: ${result.diameter}`

                planet.append(diameter)

                // Gravity
                let gravity = document.createElement('div')
                gravity.innerText = `Gravity: ${result.gravity}`

                planet.append(gravity)

                // Orbital Period
                let orbitalPeriod = document.createElement('div')
                orbitalPeriod.innerText = `Orbital Period: ${result.orbital_period}`

                planet.append(orbitalPeriod)

                // Population
                let population = document.createElement('div')
                population.innerText = `Population: ${result.population}`

                planet.append(population)

                // Rotation Period
                let rotationPeriod = document.createElement('div')
                rotationPeriod.innerText = `Rotation Period: ${result.rotation_period}`

                planet.append(rotationPeriod)

                // Surface Water
                let surfaceWater = document.createElement('div')
                surfaceWater.innerText = `Surface Water: ${result.surface_water}`

                planet.append(surfaceWater)

                // Terrain
                let terrain = document.createElement('div')
                terrain.innerText = `Terrain: ${result.terrain}`

                planet.append(terrain)
                
                // Append the planet
                const planets = document.getElementById('planets')
                
                planets.append(planet)

                // Hide the loading element
                const loading = document.getElementById('loading')

                const transitionDuration = '0.3'

                loading.style.transition = `${transitionDuration}s`
                loading.style.opacity = 0

                // Show the planets element
                setTimeout(() => {
                    planets.style.transition = `${transitionDuration}s`
                    planets.style.opacity = 1
                }, transitionDuration * 1000)
            })
        })

}

(function() {
    // Load planets
    loadPlanets()
})(this)