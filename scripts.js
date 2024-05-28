function translateText() {
    var inputText = document.getElementById("inputText").value;
  
    // این قسمت می‌تونه با استفاده از سرویس ترجمه اتوماتیک انجام بشه
    // در اینجا یک مثال ساده از ترجمه متن به انگلیسی و سپس به فارسی ارائه شده است.
    var translatedText = translateToEnglish(inputText);
    translatedText = translateToPersian(translatedText);
  
    document.getElementById("translatedText").innerText = translatedText;
  }
  
  function translateToEnglish(text) {
    // مثالی از ترجمه به انگلیسی
    // این قسمت باید با استفاده از سرویس ترجمه مناسب تغییر داده شود
    return "Translated to English: " + text;
  }
  
  function translateToPersian(text) {
    // مثالی از ترجمه به فارسی
    // این قسمت باید با استفاده از سرویس ترجمه مناسب تغییر داده شود
    return "ترجمه به فارسی: " + text;
  }
  