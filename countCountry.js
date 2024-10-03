/**
 * Get the count of person by country
 * 
 */

const person = [
    {
        name: "XYZ",
        address: {
            country: "US"
        }
    },
    {
        name: "abc",
        address: {
            country: "FE"
        }
    },
    {
        name: "def",
        address: {
            country: "US"
        }
    }
]

const countCountry = (array) => {
    return array.reduce((total, currrent) => {
        if (total[currrent.address.country]) {
            total[currrent.address.country] += 1;
        } else {
            total[currrent.address.country] = 1;
        }
        return total;
    }, {})
}

console.log(countCountry(person));