var surah=parseInt(prompt("enter surah number"));
var ayah=parseInt(prompt("enter ayah number"));

   $.get("https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_en.json",function(res){
        // var url_string = location.href;
        // var url = new URL(url_string);
        // var surah = url.searchParams.get("surah");
        // var ayah=url.searchParams.get("ayah");
       
        arhtml="";
        arhtml=` <p id="arq">${res[surah-1].verses[ayah-1].text}</p>   `;
        $("#disp1").append(arhtml);
        arhtml="";
        arhtml=` <p id="arq">${res[surah-1].verses[ayah-1].translation}</p>   `;
        $("#disp2").append(arhtml);
        arhtml="";
        arhtml=` <p id="arq">SURAH NAME:-${res[surah-1].name}---${res[surah-1].transliteration}</p>
        <p id="arq">Meaning :-place :- ${res[surah-1].translation}</p>
        <p id="arq">place :- ${res[surah-1].type}</p>
           `;
        $("#details").append(arhtml);
      
    
        
        });









 

    




   





    