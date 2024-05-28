// کلید API خود را وارد کنید
const apiKey = "AIzaSyCsY3kwvY3XN5GetXP_mtM2vuyMAeSwtN4";

function translateText() {
  var inputText = document.getElementById("inputText").value;
  
  // تابع fetch برای ارسال درخواست به Google Translate API استفاده می‌شود
  fetch("https://translation.googleapis.com/language/translate/v2?key=" + apiKey, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      q: inputText,
      source: "fa", // زبان مبدا (فارسی)
      target: "en" // زبان مقصد (انگلیسی)
    })
  })
  .then(response => response.json())
  .then(data => {
    var translatedText = data.data.translations[0].translatedText;
    translateToPersian(translatedText);
  })
  .catch(error => console.error("Error:", error));
}

function translateToPersian(text) {
  // نمایش ترجمه به کاربر
  document.getElementById("translatedText").innerText = "ترجمه به فارسی: " + text;
}
