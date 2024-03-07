function changeImage (fileName){
    let img = document.querySelector("#bannerImage");
    img.setAttribute('src', fileName);
}

const titleChangeJS = document.getElementById("titlechange");
function changeTitle1 (titlechange){
    titleChangeJS.innerHTML = "1897: Amelia Earhart was Born";
}

function changeTitle2 (titlechange){
    titleChangeJS.innerHTML = "1923: The Treaty of Lausanne is signed";
}

function changeTitle3 (titlechange){
    titleChangeJS.innerHTML = "1943: WWII: Operation Gomorrah began";
}

function changeTitle4 (titlechange){
    titleChangeJS.innerHTML = "1969: Apollo 11 crashes into the Pacific Ocean safely";
}

function changeTitle5 (titlechange){
    titleChangeJS.innerHTML = "1983: New York Yankees vs Kansas City Royals “Pine Tar Incident”";
}

const paragraphChangeJS = document.getElementById("paragraphchange");
function changeParagraph1 (paragraphchange){
    paragraphChangeJS.innerHTML = "Amelia Mary Earhart was an American aviation pioneer and writer. Earhart was the first female aviator to fly solo across the Atlantic Ocean. She set many other records, was one of the first aviators to promote commercial air travel, wrote best-selling books about her flying experiences, and was instrumental in the formation of The Ninety-Nines, an organization for female pilots.";
}

function changeParagraph2 (paragraphchange){
    paragraphChangeJS.innerHTML = "The treaty was signed at Lausanne, Switzerland, on July 24, 1923, after a seven-month conference. The treaty recognized the boundaries of the modern state of Turkey. Turkey made no claim to its former Arab provinces and recognized British possession of Cyprus and Italian possession of the Dodecanese.";
}

function changeParagraph3 (paragraphchange){
    paragraphChangeJS.innerHTML = "British and Canadian airplanes bomb Hamburg by night, and American planes bomb the city by day. By the end of the operation in November, 9,000 tons of explosives will have killed more than 30,000 people and destroyed 280,000 buildings.";
}

function changeParagraph4 (paragraphchange){
    paragraphChangeJS.innerHTML = "Apollo 11 was the rocket that sent the first humans to the moon and landed safely. The rocket left the moon on July 20 and landed in the Sea of Tranquility. Luckily, the astronauts were able to launch back into orbit, and on July 24, they reached the Pacific Ocean safely.";
}

function changeParagraph5 (paragraphchange){
    paragraphChangeJS.innerHTML = "On July 24, 1983, the New York Yankees were playing the Kansas City Royals when George Brett hit a home run while the royals trailing the game 4-3, making them have a 5-4 lead, then the Yankees manager decided for the umpires to check his bat. All the umpires gathered around and measured the bat to make sure the bat didn’t have too much pine tar (which helps players get a better grip of the bat). Once they measured the pine tar, there was too much, and Brett was called out for using an illegal substance, suspending the game for 25 days.";
}