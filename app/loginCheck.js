const deslogueoLinks = document.querySelectorAll(".logged-out")
const logueoLinks = document.querySelectorAll(".logged-in")

console.log(deslogueoLinks);
console.log(logueoLinks);



export const loginCheck = user => {
    if (user) {

        deslogueoLinks.forEach(link => link.style.display = " none ");
        logueoLinks.forEach(link => link.style.display = " block ");

    } else {

        deslogueoLinks.forEach(link => link.style.display = " block ");
        logueoLinks.forEach(link => link.style.display = " none ");
    };

};