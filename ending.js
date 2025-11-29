document.addEventListener("DOMContentLoaded", function() {
    const apartments = {
        "Closest-Cheap-High": `<a href="https://urehousing.com/property/lake-terrace/" target="_blank">Lake Terrace Condominiums</a> — Good quality and cheaper for 5 mins distance.`,
        "Closest-Medium-High": `<a href="https://urehousing.com/property/lake-plaza-condominiums/" target="_blank">Lake Plaza Condominiums</a> — High-end, closest to campus.`,
        "Closest-Pricy-High": `<a href="https://urehousing.com/property/renaissance-iii-condominiums/" target="_blank">Renaissance III Condominiums</a> — Great option, short walk, excellent build.`,
        "Near-Medium-High": `<a href="https://urehousing.com/property/university-tower-condominiums/" target="_blank">University Tower Condominiums</a> — Balanced price and walk time.`,
        "Near-Pricy-High": `<a href="https://urehousing.com/property/st-christopher-condominiums/" target="_blank">St. Christopher Condominiums</a> — Great option with strong quality.`,
        "Medium-Cheap-High": `<a href="https://urehousing.com/property/highland-hills/" target="_blank">Highland Hills Condominiums</a> — Very affordable, decent quality.`,
        "Medium-Medium-High": `<a href="https://urehousing.com/property/renaissance-ii-condominiums/" target="_blank">Renaissance II Condominiums</a> — Great livability with moderate cost.`,
        "Medium-Pricy-High": `<a href="https://urehousing.com/property/laurel-villas-condominiums/" target="_blank">Laurel Villas Condominiums</a> — Good quality, further walk.`,
        "Medium-Cheap-Medium": `<a href="https://slateat901.com/" target="_blank">Slate at 901</a> — Best cheap option around 10–15 mins, reliable quality.`,
        "Medium-Medium-Medium": `<a href="https://sixteenthplace.com/victorian-house/" target="_blank">Victorian House</a> — Average livability but super cheap.`,
        "Medium-Medium-Good": `<a href="https://urehousing.com/property/laurel-station-condominiums/" target="_blank">Laurel Station Condominiums</a> — Solid livability for medium walk.`,
        "Far-Cheap-High": `<a href="https://commonsatknoxville.com/" target="_blank">The Commons</a> — Farther away but modern and good-quality.`,
        "Far-Cheap-Medium": `<a href="https://society865.com/floorplans/" target="_blank">Society 865</a> — Affordable and good for groups.`,
        "Far-Medium-Medium": `<a href="https://universitywalkknox.com/apartments/" target="_blank">University Walk</a> — Standard quality, long walk.`,
        "Far-Pricy-High": `<a href="https://urehousing.com/property/franklin-station-condominiums-2/" target="_blank">Franklin Station Condominiums</a> — Good, far option with excellent livability.`
    };

    document.getElementById("mySubmitButton").addEventListener("click", function() {
        const distance = document.getElementById("distanceSelect").value;
        const price = document.getElementById("priceSelect").value;
        const quality = document.getElementById("qualitySelect").value;

        const key = `${distance}-${price}-${quality}`;

        // Filter all apartments whose key contains one or more selected traits
        const results = Object.entries(apartments)
            .filter(([k, v]) => 
                k.includes(distance) || 
                k.includes(price) || 
                k.includes(quality)
            )
            .slice(0, 3); // top 3 results

        const output = results.length
            ? results.map(([k, v], i) => `<p>${i + 1}. ${v}</p>`).join("")
            : "No apartments match your filters — try changing options!";

        document.getElementById("result").innerHTML = output;
    });
});