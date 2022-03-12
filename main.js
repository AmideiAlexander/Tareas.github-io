// Java script
for(let i = 1;i<=3; i++){
    const imgtag = document.createElement("img");
    imgtag.id = `imagen${i}`;
    imgtag.alt = `imagen${i}`;
    imgtag.src = `img/imagen${i}.jpg`;
    document.querySelector(".grid").appendChild(imgtag);
}