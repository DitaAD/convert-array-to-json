//Dita Annisa Diningtyas | Kelas Front End | Hari 12 

//fungsi untuk konversi array ke JSON string dan objek
const convertArrayToJSON = (array) => {
    //mengubah array menjadi objek dengan indeks sebagai kunci
    const jsonObject = Object.assign({}, array);
    //mengubah objek menjadi string JSON
    const jsonString = JSON.stringify(jsonObject);

    //fungsi untuk menampilkan hasil di konsol
    console.log("JSON String:", jsonString);
    console.log("Converted JSON to Object:", JSON.parse(jsonString));

    //mengembalikan hasil
    return { jsonString, jsonObject: JSON.parse(jsonString) };
};

//data array
const arrayData = ["HTML", "CSS", "Python","JavaScript","C++","C#"];
const { jsonString, jsonObject } = convertArrayToJSON(arrayData);

//fungsi hasil dapat dipanggil dalam html
document.getElementById("jsonResult").innerText = jsonString;
document.getElementById("objectResult").innerText = JSON.stringify(jsonObject);